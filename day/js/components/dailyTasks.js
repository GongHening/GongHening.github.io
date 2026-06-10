/**
 * Daily Tasks Component
 * Shows today's learning tasks, streak, and weekly progress
 */

const DailyTasks = {
    formVisible: false,

    /**
     * Initialize the daily tasks component
     */
    init() {
        this.container = document.getElementById('dailyTasks');
        if (!this.container) return;
        this.render();
    },

    /**
     * Format today's date in Chinese
     * @returns {string} Formatted date
     */
    formatDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        const weekday = weekdays[now.getDay()];
        return `${year}年${month}月${day}日 星期${weekday}`;
    },

    /**
     * Get task list based on wizard result or fallback
     * @returns {Array} Array of task objects
     */
    getTasks() {
        // Try to get wizard result
        const wizardResult = Storage.get('day_wizard_result');
        const progress = ProgressManager.getAll();
        let courses = [];

        if (wizardResult && wizardResult.result && wizardResult.result.courses) {
            courses = wizardResult.result.courses;
        }

        // Task 1: Continue learning — pick an in-progress course
        let continueTitle = '继续学习';
        let continueDesc = '选择一门课程继续你的学习之旅';
        const inProgressCourses = courses.filter(c => {
            const p = progress[c.u];
            return p > 0 && p < 100;
        });
        if (inProgressCourses.length > 0) {
            const pick = inProgressCourses[0];
            continueDesc = pick.n;
        } else if (courses.length > 0) {
            continueDesc = `开始学习: ${courses[0].n}`;
        } else {
            continueDesc = '浏览课程列表，选择一门感兴趣的开始学习';
        }

        // Task 2: Review concepts
        const today = LearningLogManager.getToday();
        const reviewed = today.conceptsReviewed || 0;
        const reviewTitle = '复习概念';
        const reviewDesc = reviewed > 0
            ? `今日已复习 ${reviewed} 个概念，继续保持`
            : '回顾之前学过的重要概念和知识点';

        // Task 3: Complete challenge
        const completed = today.tasksCompleted || 0;
        const challengeTitle = '完成挑战';
        const challengeDesc = completed > 0
            ? `今日已完成 ${completed} 个挑战`
            : '完成一个编程练习或知识测验';

        return [
            { icon: '📖', title: continueTitle, desc: continueDesc, type: 'learn' },
            { icon: '🧠', title: reviewTitle, desc: reviewDesc, type: 'review' },
            { icon: '⚡', title: challengeTitle, desc: challengeDesc, type: 'challenge' }
        ];
    },

    /**
     * Render the component
     */
    render() {
        const tasks = this.getTasks();
        const streak = LearningLogManager.getStreak();
        const weekly = LearningLogManager.getWeeklyProgress();
        const today = LearningLogManager.getToday();
        const weeklyHours = (weekly.current / 60).toFixed(1);
        const weeklyTargetHours = (weekly.target / 60).toFixed(0);

        const tasksHtml = tasks.map(task => `
            <div class="dt-task-item">
                <span class="dt-task-icon">${task.icon}</span>
                <div class="dt-task-content">
                    <span class="dt-task-title">${task.title}</span>
                    <span class="dt-task-desc">${task.desc}</span>
                </div>
                <button class="dt-task-btn" onclick="DailyTasks.completeTask('${task.type}')" title="标记完成">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </button>
            </div>
        `).join('');

        const formHtml = `
            <div class="dt-log-form" id="dtLogForm" style="display:${this.formVisible ? 'flex' : 'none'}">
                <span class="dt-log-label">学习时长 (分钟):</span>
                <input type="number" class="dt-log-input" id="dtLogInput" min="1" max="480" value="30" placeholder="30">
                <button class="dt-log-submit" onclick="DailyTasks.submitLog()">确认</button>
                <button class="dt-log-cancel" onclick="DailyTasks.toggleForm()">取消</button>
            </div>
        `;

        this.container.innerHTML = `
            <div class="section-divider"></div>
            <div class="module-header">
                <div class="module-header-icon-wrap">
                    <span class="module-header-icon">📋</span>
                </div>
                <div class="module-header-text">
                    <h3 class="module-title">今日学习任务</h3>
                    <span class="module-subtitle">${this.formatDate()}</span>
                </div>
            </div>
            <div class="dt-card">
                <div class="dt-card-body">
                    <div class="dt-stats-row">
                        <div class="dt-stat">
                            <span class="dt-stat-icon">🔥</span>
                            <div class="dt-stat-info">
                                <span class="dt-stat-value">${streak.current}</span>
                                <span class="dt-stat-label">连续学习天数</span>
                            </div>
                        </div>
                        <div class="dt-stat-divider"></div>
                        <div class="dt-stat">
                            <span class="dt-stat-icon">⏱️</span>
                            <div class="dt-stat-info">
                                <span class="dt-stat-value">${weeklyHours}<span class="dt-stat-unit">/${weeklyTargetHours}h</span></span>
                                <span class="dt-stat-label">本周目标</span>
                            </div>
                        </div>
                        <div class="dt-stat-divider"></div>
                        <div class="dt-stat">
                            <span class="dt-stat-icon">📊</span>
                            <div class="dt-stat-info">
                                <span class="dt-stat-value">${today.minutes}<span class="dt-stat-unit">分钟</span></span>
                                <span class="dt-stat-label">今日学习</span>
                            </div>
                        </div>
                    </div>

                    <div class="dt-progress-bar-wrap">
                        <div class="dt-progress-label">
                            <span>本周进度</span>
                            <span>${weekly.percentage}%</span>
                        </div>
                        <div class="dt-progress-bar">
                            <div class="dt-progress-fill" style="width:${weekly.percentage}%"></div>
                        </div>
                    </div>

                    <div class="dt-tasks-list">
                        ${tasksHtml}
                    </div>

                    ${formHtml}

                    <div class="dt-actions">
                        <button class="dt-btn dt-btn-primary" onclick="DailyTasks.toggleForm()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            记录学习
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Trigger entrance animation
        this.container.style.opacity = '0';
        this.container.style.transform = 'translateY(12px)';
        this.container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.container.style.opacity = '1';
                this.container.style.transform = 'translateY(0)';
            });
        });
    },

    /**
     * Toggle the log form visibility
     */
    toggleForm() {
        this.formVisible = !this.formVisible;
        const form = document.getElementById('dtLogForm');
        if (form) {
            form.style.display = this.formVisible ? 'flex' : 'none';
            if (this.formVisible) {
                const input = document.getElementById('dtLogInput');
                if (input) input.focus();
            }
        }
    },

    /**
     * Submit learning log
     */
    submitLog() {
        const input = document.getElementById('dtLogInput');
        if (!input) return;

        const minutes = parseInt(input.value, 10);
        if (isNaN(minutes) || minutes < 1) {
            showToast('请输入有效的学习时长', 'error', 2000);
            return;
        }

        LearningLogManager.logMinutes(minutes);
        showToast(`已记录 ${minutes} 分钟学习时间`, 'success', 2000);

        this.formVisible = false;
        this.render();

        // Update calendar if it exists
        if (typeof LearningCalendar !== 'undefined') {
            LearningCalendar.render();
        }
    },

    /**
     * Mark a task as completed
     * @param {string} type - Task type: 'learn', 'review', 'challenge'
     */
    completeTask(type) {
        switch (type) {
            case 'learn':
                LearningLogManager.logMinutes(15);
                showToast('太棒了！已记录 15 分钟学习', 'success', 2000);
                break;
            case 'review':
                LearningLogManager.logConceptReviewed(1);
                showToast('已记录复习 1 个概念', 'success', 2000);
                break;
            case 'challenge':
                LearningLogManager.logTaskCompleted();
                showToast('挑战完成！', 'success', 2000);
                break;
        }
        this.render();

        // Update calendar if it exists
        if (typeof LearningCalendar !== 'undefined') {
            LearningCalendar.render();
        }
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DailyTasks;
}