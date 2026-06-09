/**
 * Course Card Component
 * Renders individual course cards and manages the grid
 */

const CourseCard = {
    /**
     * Initialize course card component
     */
    init() {
        this.cacheElements();
        this.scrollAnimator = new ScrollAnimator({
            threshold: 0.05,
            rootMargin: '0px 0px -30px 0px'
        });
    },

    /**
     * Cache DOM elements
     */
    cacheElements() {
        this.grid = document.getElementById('coursesGrid');
        this.noResults = document.getElementById('noResults');
    },

    /**
     * Render all course cards
     * @param {Array} courses - Array of course objects
     */
    renderAll(courses) {
        if (!this.grid) return;

        if (courses.length === 0) {
            this.showNoResults();
            return;
        }

        this.hideNoResults();
        this.grid.innerHTML = courses.map((course, index) => this.createCard(course, index)).join('');

        // Observe cards for scroll animation
        setTimeout(() => {
            const cards = this.grid.querySelectorAll('.course-card:not(.visible)');
            this.scrollAnimator.observeAll(cards);
        }, 50);
    },

    /**
     * Create a single course card HTML
     * @param {Object} course - Course object
     * @param {number} index - Card index for animation delay
     * @returns {string} HTML string
     */
    createCard(course, index) {
        const progress = ProgressManager.get(course.u);
        const difficultyDots = this.createDifficultyDots(course.d);
        const delay = Math.min(index * 30, 300);

        return `
            <div class="course-card" style="transition-delay: ${delay}ms">
                <div class="course-card-header">
                    <div class="difficulty-indicator">
                        ${difficultyDots}
                    </div>
                    <span class="course-platform">${escapeHtml(course.p)}</span>
                </div>

                <h3 class="course-title">
                    <a href="${escapeHtml(course.u)}" target="_blank" rel="noopener noreferrer">
                        ${escapeHtml(course.n)}
                    </a>
                </h3>

                <div class="course-institution">${escapeHtml(course.i)}</div>

                <p class="course-description">${escapeHtml(course.desc)}</p>

                <div class="course-tags">
                    ${course.t.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                </div>

                <div class="course-card-footer">
                    <span class="course-duration">${formatHours(course.h)}</span>
                    <a href="${escapeHtml(course.u)}" target="_blank" rel="noopener noreferrer" class="course-link">
                        开始学习
                    </a>
                </div>

                <div class="course-progress">
                    <div class="progress-header">
                        <span class="progress-label">进度 ${progress}%</span>
                        <div class="progress-actions">
                            <button class="progress-btn" onclick="CourseCard.updateProgress('${escapeHtml(course.u)}', ${Math.min(progress + 25, 100)})">
                                +25%
                            </button>
                            <button class="progress-btn" onclick="CourseCard.updateProgress('${escapeHtml(course.u)}', 100)">
                                完成
                            </button>
                            <button class="progress-btn" onclick="CourseCard.updateProgress('${escapeHtml(course.u)}', 0)">
                                重置
                            </button>
                        </div>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Create difficulty dots HTML
     * @param {number} level - Difficulty level (1-5)
     * @returns {string} HTML string
     */
    createDifficultyDots(level) {
        return Array.from({ length: 5 }, (_, i) =>
            `<span class="difficulty-dot ${i < level ? 'filled' : ''}"></span>`
        ).join('');
    },

    /**
     * Update course progress
     * @param {string} courseUrl - Course URL
     * @param {number} progress - New progress value
     */
    updateProgress(courseUrl, progress) {
        ProgressManager.set(courseUrl, progress);

        // Re-render the specific card or all cards
        // For simplicity, re-render all filtered courses
        this.renderAll(App.state.filteredCourses);
    },

    /**
     * Show no results message
     */
    showNoResults() {
        if (this.grid) this.grid.innerHTML = '';
        if (this.noResults) this.noResults.style.display = 'block';
    },

    /**
     * Hide no results message
     */
    hideNoResults() {
        if (this.noResults) this.noResults.style.display = 'none';
    },

    /**
     * Create a loading skeleton grid
     * @param {number} count - Number of skeletons
     * @returns {string} HTML string
     */
    createLoadingSkeletons(count = 6) {
        return Array.from({ length: count }, () => `
            <div class="course-card">
                <div class="course-card-header">
                    <div class="skeleton" style="width: 60px; height: 12px;"></div>
                    <div class="skeleton" style="width: 80px; height: 12px;"></div>
                </div>
                <div class="skeleton skeleton-title" style="margin-top: 12px;"></div>
                <div class="skeleton" style="width: 40%; height: 14px; margin-top: 8px;"></div>
                <div class="skeleton skeleton-text" style="margin-top: 16px;"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text" style="width: 60%;"></div>
                <div style="display: flex; gap: 6px; margin-top: 16px;">
                    <div class="skeleton" style="width: 60px; height: 24px; border-radius: 12px;"></div>
                    <div class="skeleton" style="width: 50px; height: 24px; border-radius: 12px;"></div>
                    <div class="skeleton" style="width: 70px; height: 24px; border-radius: 12px;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 20px; padding-top: 16px; border-top: 0.5px solid var(--border-color);">
                    <div class="skeleton" style="width: 60px; height: 14px;"></div>
                    <div class="skeleton" style="width: 80px; height: 14px;"></div>
                </div>
            </div>
        `).join('');
    },

    /**
     * Show loading state
     */
    showLoading() {
        if (this.grid) {
            this.grid.innerHTML = this.createLoadingSkeletons();
        }
        this.hideNoResults();
    },

    /**
     * Get course card by URL
     * @param {string} courseUrl - Course URL
     * @returns {HTMLElement|null} Card element or null
     */
    getCardByUrl(courseUrl) {
        if (!this.grid) return null;
        return this.grid.querySelector(`a[href="${courseUrl}"]`)?.closest('.course-card');
    },

    /**
     * Highlight a specific course card
     * @param {string} courseUrl - Course URL
     */
    highlightCard(courseUrl) {
        const card = this.getCardByUrl(courseUrl);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.add('highlighted');
            setTimeout(() => card.classList.remove('highlighted'), 2000);
        }
    },

    /**
     * Get statistics about rendered cards
     * @returns {Object} Statistics
     */
    getStats() {
        if (!this.grid) return { total: 0, visible: 0 };

        const cards = this.grid.querySelectorAll('.course-card');
        const visibleCards = this.grid.querySelectorAll('.course-card.visible');

        return {
            total: cards.length,
            visible: visibleCards.length
        };
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CourseCard;
}