/**
 * Quiz Component (Simplified)
 * Handles course-level quiz exams triggered from course cards
 */

var Quiz = {
    STORAGE_KEY: 'day_quiz_stats',

    // Current exam state
    state: {
        currentCourse: null,
        examType: null,
        questions: [],
        currentIndex: 0,
        score: 0,
        startTime: null,
        answers: []
    },

    // DOM elements
    overlay: null,

    /**
     * Initialize quiz component
     */
    init() {
        // Create quiz overlay if it doesn't exist
        if (!document.getElementById('quizOverlay')) {
            this.createOverlay();
        }
        this.overlay = document.getElementById('quizOverlay');
    },

    /**
     * Create quiz modal overlay
     */
    createOverlay() {
        var overlay = document.createElement('div');
        overlay.id = 'quizOverlay';
        overlay.className = 'quiz-overlay';
        overlay.innerHTML = '<div class="quiz-modal" id="quizModal"></div>';
        document.body.appendChild(overlay);

        // Close on overlay click
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                Quiz.close();
            }
        });

        // Close on Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlay.classList.contains('show')) {
                Quiz.close();
            }
        });
    },

    /**
     * Start an exam for a course
     * @param {string} courseName - Course name
     * @param {string} examType - 'mid' or 'final'
     */
    startExam(courseName, examType) {
        if (typeof COURSE_QUIZ_DATA === 'undefined' || !COURSE_QUIZ_DATA[courseName]) {
            showToast('该课程暂无测验数据', 'info', 2000);
            return;
        }

        var courseData = COURSE_QUIZ_DATA[courseName];
        var examData = courseData[examType];

        if (!examData) {
            showToast('暂无' + (examType === 'mid' ? '期中' : '期末') + '测验', 'info', 2000);
            return;
        }

        // Combine all question types
        var allQuestions = [];
        if (examData.choice) {
            examData.choice.forEach(function(q) {
                allQuestions.push(Object.assign({}, q, { type: 'choice' }));
            });
        }
        if (examData.fill) {
            examData.fill.forEach(function(q) {
                allQuestions.push(Object.assign({}, q, { type: 'fill' }));
            });
        }
        if (examData.code) {
            examData.code.forEach(function(q) {
                allQuestions.push(Object.assign({}, q, { type: 'code' }));
            });
        }

        // Shuffle questions
        allQuestions = this.shuffleArray(allQuestions);

        this.state = {
            currentCourse: courseName,
            examType: examType,
            questions: allQuestions,
            currentIndex: 0,
            score: 0,
            startTime: Date.now(),
            answers: []
        };

        this.show();
        this.renderQuestion();
    },

    /**
     * Show quiz modal
     */
    show() {
        if (this.overlay) {
            this.overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    },

    /**
     * Close quiz modal
     */
    close() {
        if (this.overlay) {
            this.overlay.classList.remove('show');
            document.body.style.overflow = '';
        }
    },

    /**
     * Render current question
     */
    renderQuestion() {
        var modal = document.getElementById('quizModal');
        if (!modal) return;

        var q = this.state.questions[this.state.currentIndex];
        var total = this.state.questions.length;
        var current = this.state.currentIndex + 1;
        var examLabel = this.state.examType === 'mid' ? '期中测验' : '期末测验';

        var html = '<div class="quiz-header">';
        html += '<div class="quiz-header-info">';
        html += '<div class="quiz-course-name">' + this.escapeHtml(this.state.currentCourse) + '</div>';
        html += '<div class="quiz-exam-type">' + examLabel + '</div>';
        html += '</div>';
        html += '<button class="quiz-close-btn" onclick="Quiz.close()">✕</button>';
        html += '</div>';

        html += '<div class="quiz-progress">';
        html += '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width: ' + (current / total * 100) + '%"></div></div>';
        html += '<div class="quiz-progress-text">' + current + ' / ' + total + '</div>';
        html += '</div>';

        html += '<div class="quiz-question">';
        html += '<div class="quiz-question-type">' + this.getQuestionTypeLabel(q.type) + '</div>';
        html += '<div class="quiz-question-text">' + this.escapeHtml(q.question) + '</div>';

        if (q.type === 'choice') {
            html += '<div class="quiz-options">';
            var labels = ['A', 'B', 'C', 'D'];
            q.options.forEach(function(opt, i) {
                html += '<button class="quiz-option" onclick="Quiz.selectAnswer(' + i + ')">';
                html += '<span class="quiz-option-label">' + labels[i] + '</span>';
                html += '<span class="quiz-option-text">' + Quiz.escapeHtml(opt) + '</span>';
                html += '</button>';
            });
            html += '</div>';
        } else if (q.type === 'fill') {
            html += '<div class="quiz-fill">';
            html += '<input type="text" class="quiz-fill-input" id="quizFillInput" placeholder="输入你的答案..." onkeydown="if(event.key===\'Enter\')Quiz.submitFillAnswer()">';
            html += '<button class="quiz-submit-btn" onclick="Quiz.submitFillAnswer()">提交</button>';
            html += '</div>';
        } else if (q.type === 'code') {
            html += '<div class="quiz-code">';
            html += '<pre class="quiz-code-block">' + this.escapeHtml(q.question).replace(/____/g, '<span class="quiz-code-blank">____</span>') + '</pre>';
            html += '<textarea class="quiz-code-input" id="quizCodeInput" placeholder="输入缺失的代码..." onkeydown="if(event.ctrlKey&&event.key===\'Enter\')Quiz.submitCodeAnswer()"></textarea>';
            html += '<button class="quiz-submit-btn" onclick="Quiz.submitCodeAnswer()">提交 (Ctrl+Enter)</button>';
            html += '</div>';
        }

        html += '</div>';
        html += '<div class="quiz-feedback" id="quizFeedback" style="display: none;"></div>';

        modal.innerHTML = html;

        // Focus input for fill/code questions
        setTimeout(function() {
            if (q.type === 'fill') {
                var input = document.getElementById('quizFillInput');
                if (input) input.focus();
            } else if (q.type === 'code') {
                var textarea = document.getElementById('quizCodeInput');
                if (textarea) textarea.focus();
            }
        }, 100);
    },

    /**
     * Get question type label
     */
    getQuestionTypeLabel(type) {
        switch (type) {
            case 'choice': return '选择题';
            case 'fill': return '填空题';
            case 'code': return '代码补全';
            default: return '';
        }
    },

    /**
     * Select answer for choice question
     */
    selectAnswer(index) {
        var q = this.state.questions[this.state.currentIndex];
        var isCorrect = index === q.answer;

        // Disable all options
        var options = document.querySelectorAll('.quiz-option');
        options.forEach(function(opt, i) {
            opt.disabled = true;
            opt.style.pointerEvents = 'none';
            if (i === q.answer) {
                opt.classList.add('correct');
            } else if (i === index && !isCorrect) {
                opt.classList.add('wrong');
            }
        });

        this.recordAnswer(isCorrect, q);
        this.showFeedback(isCorrect, q.explanation);
    },

    /**
     * Submit fill-in-blank answer
     */
    submitFillAnswer() {
        var input = document.getElementById('quizFillInput');
        if (!input) return;

        var userAnswer = input.value.trim();
        if (!userAnswer) {
            showToast('请输入答案', 'info', 1000);
            return;
        }

        var q = this.state.questions[this.state.currentIndex];
        var isCorrect = this.checkFillAnswer(userAnswer, q.answer);

        input.disabled = true;
        var submitBtn = input.nextElementSibling;
        if (submitBtn) submitBtn.disabled = true;

        this.recordAnswer(isCorrect, q);
        this.showFeedback(isCorrect, q.explanation);
    },

    /**
     * Check fill-in-blank answer with flexible matching
     */
    checkFillAnswer(userAnswer, correctAnswer) {
        var normalize = function(s) {
            return s.toLowerCase().replace(/[\s_\-.,;:!?'"()\[\]{}]/g, '');
        };

        var normalizedUser = normalize(userAnswer);

        // Check for multiple acceptable answers (separated by /)
        var answers = correctAnswer.split('/');
        for (var i = 0; i < answers.length; i++) {
            var normalizedCorrect = normalize(answers[i]);
            if (normalizedUser === normalizedCorrect) return true;
            if (normalizedUser.indexOf(normalizedCorrect) !== -1) return true;
            if (normalizedCorrect.indexOf(normalizedUser) !== -1 && normalizedUser.length > 2) return true;
        }

        return false;
    },

    /**
     * Submit code completion answer
     */
    submitCodeAnswer() {
        var textarea = document.getElementById('quizCodeInput');
        if (!textarea) return;

        var userAnswer = textarea.value.trim();
        if (!userAnswer) {
            showToast('请输入代码', 'info', 1000);
            return;
        }

        var q = this.state.questions[this.state.currentIndex];
        var isCorrect = this.checkCodeAnswer(userAnswer, q.answer);

        textarea.disabled = true;
        var submitBtn = textarea.nextElementSibling;
        if (submitBtn) submitBtn.disabled = true;

        this.recordAnswer(isCorrect, q);
        this.showFeedback(isCorrect, q.explanation);
    },

    /**
     * Check code answer with flexible matching
     */
    checkCodeAnswer(userAnswer, correctAnswer) {
        var normalize = function(s) {
            return s.trim().toLowerCase().replace(/\s+/g, ' ');
        };

        var normalizedUser = normalize(userAnswer);
        var normalizedCorrect = normalize(correctAnswer);

        // Direct match
        if (normalizedUser === normalizedCorrect) return true;

        // Line-by-line match
        var userLines = userAnswer.trim().split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l; });
        var correctLines = correctAnswer.trim().split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l; });

        if (userLines.length !== correctLines.length) return false;

        var matchCount = 0;
        for (var i = 0; i < userLines.length; i++) {
            if (normalize(userLines[i]) === normalize(correctLines[i])) {
                matchCount++;
            }
        }

        // 80% match threshold
        return matchCount / correctLines.length >= 0.8;
    },

    /**
     * Record answer and update score
     */
    recordAnswer(isCorrect, question) {
        this.state.answers.push({
            questionId: question.id,
            type: question.type,
            correct: isCorrect
        });

        if (isCorrect) {
            this.state.score++;
        }
    },

    /**
     * Show feedback after answering
     */
    showFeedback(isCorrect, explanation) {
        var feedback = document.getElementById('quizFeedback');
        if (!feedback) return;

        feedback.style.display = 'block';
        feedback.className = 'quiz-feedback ' + (isCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--wrong');

        var html = '<div class="quiz-feedback-icon">' + (isCorrect ? '✅' : '❌') + '</div>';
        html += '<div class="quiz-feedback-text">' + (isCorrect ? '回答正确！' : '回答错误') + '</div>';
        if (explanation) {
            html += '<div class="quiz-feedback-explanation">' + this.escapeHtml(explanation) + '</div>';
        }

        var isLast = this.state.currentIndex >= this.state.questions.length - 1;
        html += '<button class="quiz-next-btn" onclick="' + (isLast ? 'Quiz.showResults()' : 'Quiz.nextQuestion()') + '">';
        html += isLast ? '查看结果' : '下一题 →';
        html += '</button>';

        feedback.innerHTML = html;
    },

    /**
     * Go to next question
     */
    nextQuestion() {
        this.state.currentIndex++;
        this.renderQuestion();
    },

    /**
     * Show exam results
     */
    showResults() {
        var modal = document.getElementById('quizModal');
        if (!modal) return;

        var total = this.state.questions.length;
        var score = this.state.score;
        var accuracy = Math.round(score / total * 100);
        var timeTaken = Math.round((Date.now() - this.state.startTime) / 1000);
        var minutes = Math.floor(timeTaken / 60);
        var seconds = timeTaken % 60;

        // Count by type
        var typeStats = { choice: { total: 0, correct: 0 }, fill: { total: 0, correct: 0 }, code: { total: 0, correct: 0 } };
        this.state.answers.forEach(function(a) {
            typeStats[a.type].total++;
            if (a.correct) typeStats[a.type].correct++;
        });

        var examLabel = this.state.examType === 'mid' ? '期中测验' : '期末测验';

        var html = '<div class="quiz-header">';
        html += '<div class="quiz-header-info">';
        html += '<div class="quiz-course-name">' + this.escapeHtml(this.state.currentCourse) + '</div>';
        html += '<div class="quiz-exam-type">' + examLabel + ' - 测验结果</div>';
        html += '</div>';
        html += '<button class="quiz-close-btn" onclick="Quiz.close()">✕</button>';
        html += '</div>';

        html += '<div class="quiz-results">';
        html += '<div class="quiz-results-score">';
        html += '<div class="quiz-results-number">' + score + '<span class="quiz-results-total">/' + total + '</span></div>';
        html += '<div class="quiz-results-label">正确题数</div>';
        html += '</div>';
        html += '<div class="quiz-results-accuracy">';
        html += '<div class="quiz-results-percent">' + accuracy + '%</div>';
        html += '<div class="quiz-results-label">正确率</div>';
        html += '</div>';
        html += '<div class="quiz-results-time">';
        html += '<div class="quiz-results-minutes">' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + '</div>';
        html += '<div class="quiz-results-label">用时</div>';
        html += '</div>';
        html += '</div>';

        html += '<div class="quiz-results-breakdown">';
        html += '<div class="quiz-breakdown-title">题型分析</div>';
        var typeLabels = { choice: '选择题', fill: '填空题', code: '代码补全' };
        Object.keys(typeStats).forEach(function(type) {
            var stat = typeStats[type];
            if (stat.total > 0) {
                var typeAcc = Math.round(stat.correct / stat.total * 100);
                html += '<div class="quiz-breakdown-item">';
                html += '<span class="quiz-breakdown-type">' + typeLabels[type] + '</span>';
                html += '<span class="quiz-breakdown-score">' + stat.correct + '/' + stat.total + '</span>';
                html += '<div class="quiz-breakdown-bar"><div class="quiz-breakdown-fill" style="width: ' + typeAcc + '%"></div></div>';
                html += '</div>';
            }
        });
        html += '</div>';

        html += '<div class="quiz-results-actions">';
        html += '<button class="quiz-action-btn quiz-action-btn--retry" onclick="Quiz.retry()">重新测验</button>';
        html += '<button class="quiz-action-btn quiz-action-btn--other" onclick="Quiz.takeOtherExam()">尝试' + (this.state.examType === 'mid' ? '期末' : '期中') + '测验</button>';
        html += '<button class="quiz-action-btn quiz-action-btn--close" onclick="Quiz.close()">关闭</button>';
        html += '</div>';

        modal.innerHTML = html;

        // Save stats
        this.saveStats();
    },

    /**
     * Retry current exam
     */
    retry() {
        this.startExam(this.state.currentCourse, this.state.examType);
    },

    /**
     * Take the other exam type
     */
    takeOtherExam() {
        var otherType = this.state.examType === 'mid' ? 'final' : 'mid';
        this.startExam(this.state.currentCourse, otherType);
    },

    /**
     * Save quiz stats to localStorage
     */
    saveStats() {
        var stats = this.getStats();
        var key = this.state.currentCourse + '_' + this.state.examType;

        if (!stats[key]) {
            stats[key] = { attempts: 0, bestScore: 0, totalCorrect: 0, totalQuestions: 0 };
        }

        stats[key].attempts++;
        stats[key].totalCorrect += this.state.score;
        stats[key].totalQuestions += this.state.questions.length;

        var accuracy = this.state.score / this.state.questions.length * 100;
        if (accuracy > stats[key].bestScore) {
            stats[key].bestScore = accuracy;
        }

        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stats));
        } catch (e) {
            console.warn('Could not save quiz stats:', e);
        }
    },

    /**
     * Get quiz stats from localStorage
     */
    getStats() {
        try {
            var data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            return {};
        }
    },

    /**
     * Shuffle array (Fisher-Yates)
     */
    shuffleArray(array) {
        var shuffled = array.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return shuffled;
    },

    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(str) {
        if (!str) return '';
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
};
