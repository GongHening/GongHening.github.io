/**
 * Day — Do AI Yourself
 * Quiz Component
 */

var Quiz = {
    STORAGE_KEY: 'day_quiz_stats',
    currentQuiz: null,
    currentQuestion: 0,
    score: 0,
    startTime: null,
    selectedAnswer: null,
    answered: false,

    init: function() {
        this.container = document.getElementById('quizContainer');
        if (!this.container) return;
        this.renderDomainSelector();
    },

    renderDomainSelector: function() {
        var html = '<div class="quiz-start">';
        html += '<div class="quiz-start-header">';
        html += '<h3 class="quiz-start-title">选择领域开始自测</h3>';
        html += '<p class="quiz-start-desc">每次随机出 5 题，检验你的学习成果</p>';
        html += '</div>';
        html += '<div class="quiz-domain-grid">';

        var domains = (typeof DOMAINS !== 'undefined') ? DOMAINS : [];
        for (var i = 0; i < domains.length; i++) {
            var d = domains[i];
            var count = (QUIZ_QUESTIONS[d.id] || []).length;
            if (count === 0) continue;
            html += '<button class="quiz-domain-card" onclick="Quiz.startQuiz(\'' + d.id + '\')">';
            html += '<span class="quiz-domain-icon">' + d.icon + '</span>';
            html += '<span class="quiz-domain-name">' + d.name + '</span>';
            html += '<span class="quiz-domain-count">' + count + ' 题</span>';
            html += '</button>';
        }

        html += '</div>';

        var stats = this.getStats();
        if (stats.totalQuizzes > 0) {
            var accuracy = Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
            html += '<div class="quiz-stats-bar">';
            html += '<span class="quiz-stats-item">📝 已完成 <strong>' + stats.totalQuizzes + '</strong> 次自测</span>';
            html += '<span class="quiz-stats-item">✅ 正确率 <strong>' + accuracy + '%</strong></span>';
            html += '<span class="quiz-stats-item">🎯 累计答对 <strong>' + stats.totalCorrect + '/' + stats.totalQuestions + '</strong></span>';
            html += '</div>';
        }

        html += '</div>';
        this.container.innerHTML = html;
    },

    startQuiz: function(domainId) {
        this.currentQuiz = getQuizQuestionsByDomain(domainId, 5);
        if (!this.currentQuiz || this.currentQuiz.length === 0) {
            showToast('该领域暂无题目', 'warning');
            return;
        }
        this.currentQuestion = 0;
        this.score = 0;
        this.startTime = Date.now();
        this.selectedAnswer = null;
        this.answered = false;
        this.renderQuestion();
    },

    renderQuestion: function() {
        var q = this.currentQuiz[this.currentQuestion];
        var total = this.currentQuiz.length;
        var num = this.currentQuestion + 1;

        var html = '<div class="quiz-session">';
        html += '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' + ((num - 1) / total * 100) + '%"></div></div>';
        html += '<div class="quiz-progress-text">' + num + ' / ' + total + '</div>';
        html += '<div class="quiz-question-text">' + q.question + '</div>';
        html += '<div class="quiz-options">';

        for (var i = 0; i < q.options.length; i++) {
            html += '<button class="quiz-option" onclick="Quiz.selectAnswer(' + i + ')" data-index="' + i + '">';
            html += '<span class="quiz-option-letter">' + String.fromCharCode(65 + i) + '</span>';
            html += '<span class="quiz-option-text">' + q.options[i] + '</span>';
            html += '</button>';
        }

        html += '</div>';
        html += '<div class="quiz-feedback" id="quizFeedback" style="display:none"></div>';
        html += '</div>';

        this.container.innerHTML = html;
    },

    selectAnswer: function(index) {
        if (this.answered) return;
        this.answered = true;
        this.selectedAnswer = index;

        var q = this.currentQuiz[this.currentQuestion];
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

        var feedback = document.getElementById('quizFeedback');
        if (feedback) {
            var icon = correct ? '✅' : '❌';
            var text = correct ? '回答正确！' : '回答错误';
            feedback.innerHTML = '<div class="quiz-feedback-header">' + icon + ' ' + text + '</div>';
            feedback.innerHTML += '<div class="quiz-feedback-explain">' + q.explanation + '</div>';
            var isLast = this.currentQuestion >= this.currentQuiz.length - 1;
            feedback.innerHTML += '<button class="quiz-next-btn" onclick="Quiz.' + (isLast ? 'showResults' : 'nextQuestion') + '()">';
            feedback.innerHTML += isLast ? '查看结果 →' : '下一题 →';
            feedback.innerHTML += '</button>';
            feedback.style.display = '';
        }
    },

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

    showResults: function() {
        var elapsed = Math.round((Date.now() - this.startTime) / 1000);
        var total = this.currentQuiz.length;
        var accuracy = Math.round((this.score / total) * 100);
        var minutes = Math.floor(elapsed / 60);
        var seconds = elapsed % 60;
        var timeStr = (minutes > 0 ? minutes + ' 分 ' : '') + seconds + ' 秒';

        this.saveStats(this.score, total);

        var emoji = accuracy === 100 ? '🎉' : accuracy >= 80 ? '👏' : accuracy >= 60 ? '💪' : '📖';
        var msg = accuracy === 100 ? '满分！太棒了！' : accuracy >= 80 ? '表现优秀！' : accuracy >= 60 ? '继续加油！' : '还需要多复习哦';

        var html = '<div class="quiz-results">';
        html += '<div class="quiz-results-emoji">' + emoji + '</div>';
        html += '<div class="quiz-results-score">' + this.score + '<span class="quiz-results-total">/' + total + '</span></div>';
        html += '<div class="quiz-results-msg">' + msg + '</div>';
        html += '<div class="quiz-results-stats">';
        html += '<div class="quiz-results-stat"><span class="quiz-results-stat-value">' + accuracy + '%</span><span class="quiz-results-stat-label">正确率</span></div>';
        html += '<div class="quiz-results-stat"><span class="quiz-results-stat-value">' + timeStr + '</span><span class="quiz-results-stat-label">用时</span></div>';
        html += '</div>';
        html += '<div class="quiz-results-actions">';
        html += '<button class="quiz-restart-btn" onclick="Quiz.startQuiz(\'' + this.currentQuiz[0].id.split('-')[0] + '\')">🔄 再试一次</button>';
        html += '<button class="quiz-back-btn" onclick="Quiz.backToSelector()">← 返回选择</button>';
        html += '</div>';
        html += '</div>';

        this.container.innerHTML = html;
    },

    backToSelector: function() {
        this.currentQuiz = null;
        this.renderDomainSelector();
    },

    saveStats: function(score, total) {
        var stats = this.getStats();
        stats.totalQuizzes = (stats.totalQuizzes || 0) + 1;
        stats.totalCorrect = (stats.totalCorrect || 0) + score;
        stats.totalQuestions = (stats.totalQuestions || 0) + total;
        stats.lastQuiz = { score: score, total: total, date: new Date().toISOString() };
        Storage.set(this.STORAGE_KEY, stats);
    },

    getStats: function() {
        return Storage.get(this.STORAGE_KEY, { totalQuizzes: 0, totalCorrect: 0, totalQuestions: 0 });
    },

    getAccuracy: function() {
        var stats = this.getStats();
        if (!stats.totalQuestions) return 0;
        return Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
    }
};

var KnowledgeHub = {
    switchTab: function(tab) {
        var quizEl = document.getElementById('quizContainer');
        var fcEl = document.getElementById('flashcardContainer');
        if (quizEl) quizEl.style.display = tab === 'quiz' ? '' : 'none';
        if (fcEl) fcEl.style.display = tab === 'flashcards' ? '' : 'none';
        var tabs = document.querySelectorAll('.kh-tab');
        for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
        if (event && event.target) event.target.classList.add('active');
        if (tab === 'quiz' && typeof Quiz !== 'undefined') Quiz.init();
        if (tab === 'flashcards' && typeof Flashcards !== 'undefined') Flashcards.init();
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Quiz: Quiz, KnowledgeHub: KnowledgeHub };
}
