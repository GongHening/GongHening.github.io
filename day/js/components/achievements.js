/**
 * Achievements Component
 * Displays achievement badges, tracks unlocks, and shows celebrations
 */

const ACHIEVEMENT_DEFS = [
    { id: 'first-course', name: '初学者', desc: '完成第一门课程', icon: '🌟', category: 'learning' },
    { id: 'courses-5', name: '求知者', desc: '完成 5 门课程', icon: '📚', category: 'learning' },
    { id: 'courses-10', name: '学霸', desc: '完成 10 门课程', icon: '🎓', category: 'learning' },
    { id: 'streak-3', name: '起步者', desc: '连续学习 3 天', icon: '🔥', category: 'streak' },
    { id: 'streak-7', name: '坚持者', desc: '连续学习 7 天', icon: '💪', category: 'streak' },
    { id: 'streak-30', name: '毅力者', desc: '连续学习 30 天', icon: '🏆', category: 'streak' },
    { id: 'hours-10', name: '探索者', desc: '累计学习 10 小时', icon: '⏰', category: 'time' },
    { id: 'hours-50', name: '勤学者', desc: '累计学习 50 小时', icon: '⏱️', category: 'time' },
    { id: 'hours-100', name: '学习达人', desc: '累计学习 100 小时', icon: '🕐', category: 'time' },
    { id: 'favorites-5', name: '收藏家', desc: '收藏 5 门课程', icon: '❤️', category: 'engagement' },
    { id: 'favorites-20', name: '精选者', desc: '收藏 20 门课程', icon: '💖', category: 'engagement' },
    { id: 'quiz-first', name: '答题新手', desc: '完成第一次自测', icon: '📝', category: 'quiz' },
    { id: 'quiz-ace', name: '满分学霸', desc: '自测获得满分', icon: '💯', category: 'quiz' },
    { id: 'quiz-10', name: '答题达人', desc: '完成 10 次自测', icon: '🧠', category: 'quiz' },
    { id: 'code-first', name: '代码新手', desc: '完成第一个代码练习', icon: '💻', category: 'code' },
    { id: 'code-5', name: '编程者', desc: '完成 5 个代码练习', icon: '⌨️', category: 'code' },
    { id: 'all-domains', name: '博学者', desc: '学习 5 个不同领域的课程', icon: '🏅', category: 'learning' },
    { id: 'notes-5', name: '笔记达人', desc: '写 5 条课程笔记', icon: '📓', category: 'engagement' },
];

const Achievements = {
    STORAGE_KEY: 'day_achievements',
    definitions: ACHIEVEMENT_DEFS,

    /**
     * Category display configuration
     */
    CATEGORY_MAP: {
        learning:   { name: '学习进度', order: 1 },
        streak:     { name: '连续打卡', order: 2 },
        time:       { name: '学习时长', order: 3 },
        quiz:       { name: '自测练习', order: 4 },
        code:       { name: '代码练习', order: 5 },
        engagement: { name: '互动参与', order: 6 },
    },

    /**
     * Initialize the achievements component
     */
    init() {
        this.cacheElements();
        this.render();
        this.checkAchievements();
    },

    /**
     * Cache DOM elements
     */
    cacheElements() {
        this.container = document.getElementById('achContainer');
    },

    /**
     * Render the full achievement grid grouped by category
     */
    render() {
        if (!this.container) return;

        const unlocked = this.getUnlocked();
        const progress = this.getProgress();

        // Group definitions by category
        const groups = {};
        for (const def of this.definitions) {
            if (!groups[def.category]) groups[def.category] = [];
            groups[def.category].push(def);
        }

        // Sort categories by order
        const sortedCategories = Object.keys(groups).sort(
            (a, b) => (this.CATEGORY_MAP[a]?.order || 99) - (this.CATEGORY_MAP[b]?.order || 99)
        );

        let html = '';

        // Progress summary bar
        html += `
            <div class="ach-summary">
                <div class="ach-summary-text">
                    <span class="ach-summary-count">${progress.unlocked}</span>
                    <span class="ach-summary-sep">/</span>
                    <span class="ach-summary-total">${progress.total}</span>
                    <span class="ach-summary-label">已解锁</span>
                </div>
                <div class="ach-progress-track">
                    <div class="ach-progress-fill" style="width: ${(progress.unlocked / progress.total * 100).toFixed(1)}%"></div>
                </div>
            </div>
        `;

        // Category groups
        for (const catKey of sortedCategories) {
            const catInfo = this.CATEGORY_MAP[catKey] || { name: catKey };
            const defs = groups[catKey];

            html += `<div class="ach-category">`;
            html += `<div class="ach-category-header">${catInfo.name}</div>`;
            html += `<div class="ach-grid">`;

            for (const def of defs) {
                const unlockData = unlocked[def.id];
                const isUnlocked = !!unlockData;

                const unlockDate = isUnlocked
                    ? new Date(unlockData.unlockedAt).toLocaleDateString('zh-CN', {
                        year: 'numeric', month: 'short', day: 'numeric'
                    })
                    : '';

                html += `
                    <div class="ach-card${isUnlocked ? ' ach-card--unlocked' : ' ach-card--locked'}" data-ach-id="${def.id}">
                        <div class="ach-card-glow"></div>
                        <div class="ach-card-inner">
                            <div class="ach-icon">${def.icon}</div>
                            <div class="ach-name">${def.name}</div>
                            <div class="ach-desc">${def.desc}</div>
                            ${isUnlocked
                                ? `<div class="ach-date">${unlockDate}</div>`
                                : `<div class="ach-lock">🔒</div>`
                            }
                        </div>
                    </div>
                `;
            }

            html += `</div>`;
            html += `</div>`;
        }

        this.container.innerHTML = html;
    },

    /**
     * Check all achievement conditions and unlock newly earned ones
     */
    checkAchievements() {
        const stats = this.getCurrentStats();
        const unlocked = this.getUnlocked();

        for (const def of this.definitions) {
            if (!unlocked[def.id] && this.checkCondition(def.id, stats)) {
                this.unlock(def);
            }
        }
    },

    /**
     * Gather current stats from various managers
     * @returns {Object} Current statistics
     */
    getCurrentStats() {
        const allProgress = ProgressManager.getAll();
        const allCourses = typeof App !== 'undefined' ? App.state.allCourses : [];

        // Calculate total hours of completed courses
        let completedHours = 0;
        const completedDomains = new Set();

        Object.entries(allProgress).forEach(([url, progress]) => {
            if (progress >= 100) {
                const course = allCourses.find(c => c.u === url);
                if (course) {
                    completedHours += course.h;
                    if (course.domain) completedDomains.add(course.domain);
                }
            }
        });

        return {
            completed: ProgressManager.getCompletedCount(),
            streak: typeof LearningLogManager !== 'undefined' ? LearningLogManager.getStreak().current : 0,
            hours: Math.round(completedHours),
            favorites: FavoritesManager.count(),
            quizCompleted: typeof Quiz !== 'undefined' ? (Quiz.getStats().totalQuizzes || 0) : 0,
            quizPerfect: typeof Quiz !== 'undefined' ? (Quiz.getStats().totalQuestions > 0 && Quiz.getStats().totalCorrect === Quiz.getStats().totalQuestions ? 1 : 0) : 0,
            exercisesCompleted: 0,
            domainCount: completedDomains.size,
            notesCount: NotesManager.count(),
        };
    },

    /**
     * Check if a specific achievement condition is met
     * @param {string} achievementId - Achievement ID
     * @param {Object} stats - Current stats
     * @returns {boolean} Whether the condition is met
     */
    checkCondition(achievementId, stats) {
        switch (achievementId) {
            case 'first-course':   return stats.completed >= 1;
            case 'courses-5':      return stats.completed >= 5;
            case 'courses-10':     return stats.completed >= 10;
            case 'streak-3':       return stats.streak >= 3;
            case 'streak-7':       return stats.streak >= 7;
            case 'streak-30':      return stats.streak >= 30;
            case 'hours-10':       return stats.hours >= 10;
            case 'hours-50':       return stats.hours >= 50;
            case 'hours-100':      return stats.hours >= 100;
            case 'favorites-5':    return stats.favorites >= 5;
            case 'favorites-20':   return stats.favorites >= 20;
            case 'quiz-first':     return stats.quizCompleted >= 1;
            case 'quiz-ace':       return stats.quizPerfect >= 1;
            case 'quiz-10':        return stats.quizCompleted >= 10;
            case 'code-first':     return stats.exercisesCompleted >= 1;
            case 'code-5':         return stats.exercisesCompleted >= 5;
            case 'all-domains':    return stats.domainCount >= 5;
            case 'notes-5':        return stats.notesCount >= 5;
            default:               return false;
        }
    },

    /**
     * Unlock an achievement and trigger celebration
     * @param {Object} achievementDef - Achievement definition object
     */
    unlock(achievementDef) {
        const unlocked = this.getUnlocked();
        unlocked[achievementDef.id] = { unlockedAt: new Date().toISOString() };
        Storage.set(this.STORAGE_KEY, unlocked);

        // Re-render grid
        this.render();

        // Celebrate
        this.celebrate(achievementDef);
    },

    /**
     * Show celebration for a newly unlocked achievement
     * @param {Object} achievementDef - Achievement definition
     */
    celebrate(achievementDef) {
        // 1. Toast notification
        showToast(`🏆 解锁成就「${achievementDef.name}」— ${achievementDef.desc}`, 'success', 4000);

        // 2. Highlight the card with a pulse animation
        const card = this.container
            ? this.container.querySelector(`[data-ach-id="${achievementDef.id}"]`)
            : null;

        if (card) {
            card.classList.add('ach-card--celebrate');
            setTimeout(() => card.classList.remove('ach-card--celebrate'), 1200);
        }

        // 3. Particle burst overlay
        this.spawnCelebrationParticles();
    },

    /**
     * Spawn a burst of colorful particles as a celebration overlay
     */
    spawnCelebrationParticles() {
        const count = 24;
        const container = document.createElement('div');
        container.className = 'ach-celebration-particles';
        container.setAttribute('aria-hidden', 'true');

        const colors = ['#ff9f0a', '#30d158', '#0a84ff', '#bf5af2', '#ff375f', '#ffd60a', '#64d2ff'];

        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'ach-particle';

            const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
            const distance = 60 + Math.random() * 120;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            const size = 4 + Math.random() * 6;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const delay = Math.random() * 150;

            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                --tx: ${tx}px;
                --ty: ${ty}px;
                animation-delay: ${delay}ms;
            `;

            container.appendChild(p);
        }

        document.body.appendChild(container);

        // Remove after animation completes
        setTimeout(() => {
            if (container.parentNode) container.parentNode.removeChild(container);
        }, 1200);
    },

    /**
     * Get all unlocked achievements
     * @returns {Object} Unlocked achievements keyed by ID
     */
    getUnlocked() {
        return Storage.get(this.STORAGE_KEY, {});
    },

    /**
     * Check if a specific achievement is unlocked
     * @param {string} id - Achievement ID
     * @returns {boolean} Whether the achievement is unlocked
     */
    isUnlocked(id) {
        return !!this.getUnlocked()[id];
    },

    /**
     * Get progress summary
     * @returns {Object} { unlocked: number, total: number }
     */
    getProgress() {
        return {
            unlocked: Object.keys(this.getUnlocked()).length,
            total: this.definitions.length,
        };
    },
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Achievements;
}
