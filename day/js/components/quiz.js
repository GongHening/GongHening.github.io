/**
 * Day — Do AI Yourself
 * Quiz Component — Course-based with mid/final exams
 * Supports: choice, fill-in-blank, code completion
 */

var Quiz = {
    STORAGE_KEY: 'day_quiz_stats',
    currentQuiz: null,
    currentQuestion: 0,
    score: 0,
    totalQuestions: 0,
    startTime: null,
    selectedAnswer: null,
    answered: false,
    currentExamType: null, // 'mid' or 'final'
    currentCourseName: null,
    questionTypes: ['choice', 'fill', 'code'],

    init: function() {
        this.container = document.getElementById('quizContainer');
        if (!this.container) return;
        this.renderCourseSelector();
    },

    /**
     * Group courses by domain
     */
    getCoursesByDomain: function() {
        var grouped = {};
        var courses = (typeof COURSE_QUIZ_DATA !== 'undefined') ? COURSE_QUIZ_DATA : {};
        var courseNames = Object.keys(courses);

        for (var i = 0; i < courseNames.length; i++) {
            var name = courseNames[i];
            var data = courses[name];
            var domain = data.domain || 'other';
            if (!grouped[domain]) grouped[domain] = [];
            grouped[domain].push({ name: name, data: data });
        }
        return grouped;
    },

    /**
     * Get domain display info
     */
    getDomainInfo: function(domainId) {
        var domains = (typeof DOMAINS !== 'undefined') ? DOMAINS : [];
        for (var i = 0; i < domains.length; i++) {
            if (domains[i].id === domainId) return domains[i];
        }
        // Fallback for non-standard domain IDs
        var fallback = {
            'ml-theory': { name: 'ML理论', icon: '📐', color: '#8b5cf6' },
            'ml-engineering': { name: 'ML工程', icon: '⚙️', color: '#6366f1' },
            'data-science': { name: '数据科学', icon: '📊', color: '#0ea5e9' },
            'ai-foundations': { name: 'AI基础', icon: '🎯', color: '#f59e0b' },
            'other': { name: '其他', icon: '📚', color: '#6b7280' }
        };
        return fallback[domainId] || { name: domainId, icon: '📖', color: '#6b7280' };
    },

    /**
     * Render the course selection screen
     */
    renderCourseSelector: function() {
        var html = '<div class="quiz-start">';
        html += '<div class="quiz-start-header">';
        html += '<h3 class="quiz-start-title">选择课程开始测验</h3>';
        html += '<p class="quiz-start-desc">每套测验包含选择题、填空题和代码补全题</p>';
        html += '</div>';

        var grouped = this.getCoursesByDomain();
        var domainOrder = ['ml', 'ml-theory', 'ml-engineering', 'data-science', 'ai-foundations',
                          'dl', 'nlp', 'cv', 'rl', 'genai', 'agents', 'safety', 'robotics', 'speech', 'infra'];

        // Stats bar
        var stats = this.getStats();
        if (stats.totalQuizzes > 0) {
            var accuracy = Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
            html += '<div class="quiz-stats-bar">';
            html += '<span class="quiz-stats-item">📝 已完成 <strong>' + stats.totalQuizzes + '</strong> 次测验</span>';
            html += '<span class="quiz-stats-item">✅ 正确率 <strong>' + accuracy + '%</strong></span>';
            html += '<span class="quiz-stats-item">🎯 累计答对 <strong>' + stats.totalCorrect + '/' + stats.totalQuestions + '</strong></span>';
            html += '</div>';
        }

        html += '<div class="quiz-domain-sections" id="quizDomainSections">';

        for (var d = 0; d < domainOrder.length; d++) {
            var domainId = domainOrder[d];
            var courses = grouped[domainId];
            if (!courses || courses.length === 0) continue;

            var info = this.getDomainInfo(domainId);
            html += '<div class="quiz-domain-section" data-domain="' + domainId + '">';
            html += '<div class="quiz-domain-header" onclick="Quiz.toggleDomainSection(this)">';
            html += '<span class="quiz-domain-icon">' + info.icon + '</span>';
            html += '<span class="quiz-domain-name">' + info.name + '</span>';
            html += '<span class="quiz-domain-count">' + courses.length + ' 门课程</span>';
            html += '<span class="quiz-domain-arrow">▼</span>';
            html += '</div>';
            html += '<div class="quiz-course-list">';

            for (var c = 0; c < courses.length; c++) {
                var course = courses[c];
                html += '<div class="quiz-course-item" data-course="' + course.name + '">';
                html += '<div class="quiz-course-name">' + course.name + '</div>';
                html += '<div class="quiz-course-actions">';
                html += '<button class="quiz-exam-btn quiz-exam-btn--mid" onclick="Quiz.startExam(\'' + this.escapeQuotes(course.name) + '\', \'mid\')">期中测验</button>';
                html += '<button class="quiz-exam-btn quiz-exam-btn--final" onclick="Quiz.startExam(\'' + this.escapeQuotes(course.name) + '\', \'final\')">期末测验</button>';
                html += '</div>';
                html += '</div>';
            }

            html += '</div></div>';
        }

        html += '</div></div>';
        this.container.innerHTML = html;
    },

    /**
     * Escape quotes for onclick handlers
     */
    escapeQuotes: function(str) {
        return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    },

    /**
     * Toggle domain section collapse
     */
    toggleDomainSection: function(header) {
        var section = header.parentElement;
        section.classList.toggle('quiz-domain-section--collapsed');
    },

    /**
     * Start a specific exam (mid or final) for a course
     */
    startExam: function(courseName, examType) {
        var courses = (typeof COURSE_QUIZ_DATA !== 'undefined') ? COURSE_QUIZ_DATA : {};
        var courseData = courses[courseName];

        if (!courseData || !courseData[examType]) {
            showToast('该课程暂无' + (examType === 'mid' ? '期中' : '期末') + '测验', 'warning');
            return;
        }

        this.currentCourseName = courseName;
        this.currentExamType = examType;

        // Build quiz from all question types
        var exam = courseData[examType];
        var allQuestions = [];

        // Add choice questions
        if (exam.choice) {
            for (var i = 0; i < exam.choice.length; i++) {
                allQuestions.push({ type: 'choice', data: exam.choice[i] });
            }
        }

        // Add fill questions
        if (exam.fill) {
            for (var i = 0; i < exam.fill.length; i++) {
                allQuestions.push({ type: 'fill', data: exam.fill[i] });
            }
        }

        // Add code questions
        if (exam.code) {
            for (var i = 0; i < exam.code.length; i++) {
                allQuestions.push({ type: 'code', data: exam.code[i] });
            }
        }

        if (allQuestions.length === 0) {
            showToast('该测验暂无题目', 'warning');
            return;
        }

        this.currentQuiz = allQuestions;
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = allQuestions.length;
        this.startTime = Date.now();
        this.selectedAnswer = null;
        this.answered = false;
        this.renderQuestion();
    },

    /**
     * Render current question based on type
     */
    renderQuestion: function() {
        var item = this.currentQuiz[this.currentQuestion];
        var total = this.currentQuiz.length;
        var num = this.currentQuestion + 1;
        var typeLabel = item.type === 'choice' ? '选择题' : item.type === 'fill' ? '填空题' : '代码补全';
        var examLabel = this.currentExamType === 'mid' ? '期中测验' : '期末测验';

        var html = '<div class="quiz-session">';
        html += '<div class="quiz-session-header">';
        html += '<div class="quiz-course-title">' + this.currentCourseName + ' — ' + examLabel + '</div>';
        html += '<div class="quiz-type-badge quiz-type-badge--' + item.type + '">' + typeLabel + '</div>';
        html += '</div>';
        html += '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' + ((num - 1) / total * 100) + '%"></div></div>';
        html += '<div class="quiz-progress-text">' + num + ' / ' + total + '</div>';
        html += '<div class="quiz-question-text">' + item.data.question + '</div>';

        if (item.type === 'choice') {
            html += this.renderChoiceOptions(item.data);
        } else if (item.type === 'fill') {
            html += this.renderFillInput(item.data);
        } else if (item.type === 'code') {
            html += this.renderCodeInput(item.data);
        }

        html += '<div class="quiz-feedback" id="quizFeedback" style="display:none"></div>';
        html += '</div>';

        this.container.innerHTML = html;

        // Focus on input for fill/code questions
        if (item.type === 'fill' || item.type === 'code') {
            var input = document.getElementById('quizAnswerInput');
            if (input) input.focus();
        }
    },

    /**
     * Render choice question options
     */
    renderChoiceOptions: function(q) {
        var html = '<div class="quiz-options">';
        for (var i = 0; i < q.options.length; i++) {
            html += '<button class="quiz-option" onclick="Quiz.selectChoiceAnswer(' + i + ')" data-index="' + i + '">';
            html += '<span class="quiz-option-letter">' + String.fromCharCode(65 + i) + '</span>';
            html += '<span class="quiz-option-text">' + q.options[i] + '</span>';
            html += '</button>';
        }
        html += '</div>';
        return html;
    },

    /**
     * Render fill-in-blank input
     */
    renderFillInput: function(q) {
        var html = '<div class="quiz-fill-area">';
        html += '<input type="text" class="quiz-fill-input" id="quizAnswerInput" placeholder="输入你的答案..." onkeydown="if(event.key===\'Enter\')Quiz.submitFillAnswer()">';
        html += '<button class="quiz-submit-btn" onclick="Quiz.submitFillAnswer()">提交答案</button>';
        html += '</div>';
        return html;
    },

    /**
     * Render code completion input
     */
    renderCodeInput: function(q) {
        var html = '<div class="quiz-code-area">';
        html += '<div class="quiz-code-block"><pre>' + this.highlightBlank(q.code) + '</pre></div>';
        html += '<div class="quiz-code-input-wrap">';
        html += '<label class="quiz-code-label">补全 ____ 处的代码：</label>';
        html += '<textarea class="quiz-code-input" id="quizAnswerInput" rows="3" placeholder="输入补全代码..." onkeydown="if(event.key===\'Enter\'&&event.ctrlKey)Quiz.submitCodeAnswer()"></textarea>';
        html += '<button class="quiz-submit-btn" onclick="Quiz.submitCodeAnswer()">提交答案 (Ctrl+Enter)</button>';
        html += '</div></div>';
        return html;
    },

    /**
     * Highlight ____ in code
     */
    highlightBlank: function(code) {
        return code.replace(/____/g, '<span class="quiz-code-blank">____</span>');
    },

    /**
     * Handle choice answer selection
     */
    selectChoiceAnswer: function(index) {
        if (this.answered) return;
        this.answered = true;
        this.selectedAnswer = index;

        var q = this.currentQuiz[this.currentQuestion].data;
        var correct = index === q.answer;
        if (correct) this.score++;

        var options = this.container.querySelectorAll('.quiz-option');
        for (var i = 0; i < options.length; i++) {
            options[i].disabled = true;
            if (i === q.answer) {
                options[i].classList.add('quiz-option--correct');
            } else if (i === index && !correct) {
                options[i].classList.add('quiz-option--wrong');
            }
        }

        this.showFeedback(correct, q.explanation);
    },

    /**
     * Handle fill-in-blank answer submission
     */
    submitFillAnswer: function() {
        if (this.answered) return;
        var input = document.getElementById('quizAnswerInput');
        if (!input) return;

        var userAnswer = input.value.trim();
        if (!userAnswer) {
            showToast('请输入答案', 'warning');
            return;
        }

        this.answered = true;
        var q = this.currentQuiz[this.currentQuestion].data;
        var correct = this.checkFillAnswer(userAnswer, q.answer);
        if (correct) this.score++;

        input.disabled = true;
        var submitBtn = this.container.querySelector('.quiz-submit-btn');
        if (submitBtn) submitBtn.disabled = true;

        if (!correct) {
            input.classList.add('quiz-fill-input--wrong');
        }

        this.showFeedback(correct, q.explanation + '<br><span class="quiz-correct-answer">正确答案：<strong>' + q.answer + '</strong></span>');
    },

    /**
     * Check fill answer (flexible matching)
     */
    checkFillAnswer: function(userAnswer, correctAnswer) {
        // Normalize: trim, lowercase, remove spaces
        var normalize = function(s) {
            return s.trim().toLowerCase().replace(/\s+/g, '').replace(/[，。、；：？！""''【】（）]/g, '');
        };
        var user = normalize(userAnswer);
        var correct = normalize(correctAnswer);

        // Direct match
        if (user === correct) return true;

        // Check if answer contains slash (multiple acceptable answers)
        if (correctAnswer.indexOf('/') !== -1) {
            var alternatives = correctAnswer.split('/');
            for (var i = 0; i < alternatives.length; i++) {
                if (normalize(alternatives[i]) === user) return true;
            }
        }

        // Check if user answer is contained in correct or vice versa
        if (correct.indexOf(user) !== -1 || user.indexOf(correct) !== -1) return true;

        return false;
    },

    /**
     * Handle code answer submission
     */
    submitCodeAnswer: function() {
        if (this.answered) return;
        var input = document.getElementById('quizAnswerInput');
        if (!input) return;

        var userAnswer = input.value.trim();
        if (!userAnswer) {
            showToast('请输入补全代码', 'warning');
            return;
        }

        this.answered = true;
        var q = this.currentQuiz[this.currentQuestion].data;
        var correct = this.checkCodeAnswer(userAnswer, q.answer);
        if (correct) this.score++;

        input.disabled = true;
        var submitBtn = this.container.querySelector('.quiz-submit-btn');
        if (submitBtn) submitBtn.disabled = true;

        if (!correct) {
            input.classList.add('quiz-code-input--wrong');
        }

        this.showFeedback(correct, q.explanation + '<br><span class="quiz-correct-answer">参考答案：<br><pre class="quiz-answer-code">' + q.answer + '</pre></span>');
    },

    /**
     * Check code answer (flexible matching)
     */
    checkCodeAnswer: function(userAnswer, correctAnswer) {
        // Normalize: remove extra whitespace, semicolons
        var normalize = function(s) {
            return s.trim().replace(/\s+/g, ' ').replace(/;\s*$/g, '').toLowerCase();
        };
        var user = normalize(userAnswer);
        var correct = normalize(correctAnswer);

        // Direct match
        if (user === correct) return true;

        // Check if it's a multi-line answer
        var userLines = userAnswer.trim().split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l; });
        var correctLines = correctAnswer.trim().split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l; });

        // If same number of lines, check each line
        if (userLines.length === correctLines.length) {
            var allMatch = true;
            for (var i = 0; i < userLines.length; i++) {
                if (normalize(userLines[i]) !== normalize(correctLines[i])) {
                    allMatch = false;
                    break;
                }
            }
            if (allMatch) return true;
        }

        // Check if user answer contains all key parts
        // This is a lenient check for code
        var keyParts = correctAnswer.match(/[a-zA-Z_][a-zA-Z0-9_.]*/g) || [];
        if (keyParts.length > 0) {
            var matched = 0;
            for (var i = 0; i < keyParts.length; i++) {
                if (userAnswer.indexOf(keyParts[i]) !== -1) matched++;
            }
            if (matched >= keyParts.length * 0.8) return true; // 80% keyword match
        }

        return false;
    },

    /**
     * Show feedback after answering
     */
    showFeedback: function(correct, explanation) {
        var feedback = document.getElementById('quizFeedback');
        if (!feedback) return;

        var icon = correct ? '✅' : '❌';
        var text = correct ? '回答正确！' : '回答错误';

        feedback.innerHTML = '<div class="quiz-feedback-header">' + icon + ' ' + text + '</div>';
        feedback.innerHTML += '<div class="quiz-feedback-explain">' + explanation + '</div>';

        var isLast = this.currentQuestion >= this.currentQuiz.length - 1;
        feedback.innerHTML += '<button class="quiz-next-btn" onclick="Quiz.' + (isLast ? 'showResults' : 'nextQuestion') + '()">';
        feedback.innerHTML += isLast ? '查看结果 →' : '下一题 →';
        feedback.innerHTML += '</button>';
        feedback.style.display = '';
    },

    /**
     * Move to next question
     */
    nextQuestion: function() {
        this.currentQuestion++;
        this.selectedAnswer = null;
        this.answered = false;
        if (this.currentQuestion >= this.currentQuiz.length) {
            this.showResults();
        } else {
            this.renderQuestion();
        }
    },

    /**
     * Show quiz results
     */
    showResults: function() {
        var elapsed = Math.round((Date.now() - this.startTime) / 1000);
        var total = this.currentQuiz.length;
        var accuracy = Math.round((this.score / total) * 100);
        var minutes = Math.floor(elapsed / 60);
        var seconds = elapsed % 60;
        var timeStr = (minutes > 0 ? minutes + ' 分 ' : '') + seconds + ' 秒';
        var examLabel = this.currentExamType === 'mid' ? '期中测验' : '期末测验';

        this.saveStats(this.score, total);

        var emoji = accuracy === 100 ? '🎉' : accuracy >= 80 ? '👏' : accuracy >= 60 ? '💪' : '📖';
        var msg = accuracy === 100 ? '满分！太棒了！' : accuracy >= 80 ? '表现优秀！' : accuracy >= 60 ? '继续加油！' : '还需要多复习哦';

        // Calculate per-type stats
        var choiceCorrect = 0, choiceTotal = 0;
        var fillCorrect = 0, fillTotal = 0;
        var codeCorrect = 0, codeTotal = 0;

        // We track score during answering, but for breakdown we need to re-calculate
        // Since we already have the total score, just show overall

        var html = '<div class="quiz-results">';
        html += '<div class="quiz-results-course">' + this.currentCourseName + '</div>';
        html += '<div class="quiz-results-exam">' + examLabel + '</div>';
        html += '<div class="quiz-results-emoji">' + emoji + '</div>';
        html += '<div class="quiz-results-score">' + this.score + '<span class="quiz-results-total">/' + total + '</span></div>';
        html += '<div class="quiz-results-msg">' + msg + '</div>';
        html += '<div class="quiz-results-stats">';
        html += '<div class="quiz-results-stat"><span class="quiz-results-stat-value">' + accuracy + '%</span><span class="quiz-results-stat-label">正确率</span></div>';
        html += '<div class="quiz-results-stat"><span class="quiz-results-stat-value">' + timeStr + '</span><span class="quiz-results-stat-label">用时</span></div>';
        html += '<div class="quiz-results-stat"><span class="quiz-results-stat-value">' + (this.currentExamType === 'mid' ? '10+10+2' : '10+10+2') + '</span><span class="quiz-results-stat-label">选择+填空+代码</span></div>';
        html += '</div>';
        html += '<div class="quiz-results-actions">';
        html += '<button class="quiz-restart-btn" onclick="Quiz.startExam(\'' + this.escapeQuotes(this.currentCourseName) + '\', \'' + this.currentExamType + '\')">🔄 再试一次</button>';
        html += '<button class="quiz-other-exam-btn" onclick="Quiz.startExam(\'' + this.escapeQuotes(this.currentCourseName) + '\', \'' + (this.currentExamType === 'mid' ? 'final' : 'mid') + '\')">📋 ' + (this.currentExamType === 'mid' ? '期末测验' : '期中测验') + '</button>';
        html += '<button class="quiz-back-btn" onclick="Quiz.backToSelector()">← 返回选择</button>';
        html += '</div>';
        html += '</div>';

        this.container.innerHTML = html;
    },

    /**
     * Go back to course selector
     */
    backToSelector: function() {
        this.currentQuiz = null;
        this.currentCourseName = null;
        this.currentExamType = null;
        this.renderCourseSelector();
    },

    /**
     * Save quiz stats
     */
    saveStats: function(score, total) {
        var stats = this.getStats();
        stats.totalQuizzes = (stats.totalQuizzes || 0) + 1;
        stats.totalCorrect = (stats.totalCorrect || 0) + score;
        stats.totalQuestions = (stats.totalQuestions || 0) + total;
        stats.lastQuiz = {
            course: this.currentCourseName,
            examType: this.currentExamType,
            score: score,
            total: total,
            date: new Date().toISOString()
        };
        Storage.set(this.STORAGE_KEY, stats);
    },

    /**
     * Get saved stats
     */
    getStats: function() {
        return Storage.get(this.STORAGE_KEY, { totalQuizzes: 0, totalCorrect: 0, totalQuestions: 0 });
    },

    /**
     * Get accuracy percentage
     */
    getAccuracy: function() {
        var stats = this.getStats();
        if (!stats.totalQuestions) return 0;
        return Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
    }
};
