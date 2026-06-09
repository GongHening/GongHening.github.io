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
        const isFav = FavoritesManager.has(course.u);
        const favClass = isFav ? ' active' : '';

        return `
            <div class="course-card reveal" style="transition-delay: ${delay}ms">
                <button class="favorite-btn${favClass}" onclick="CourseCard.toggleFavorite('${escapeHtml(course.u)}', this)" title="${isFav ? '取消收藏' : '收藏'}">
                    <svg class="heart-outline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <svg class="heart-filled" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>

                <div class="course-card-header">
                    <div class="difficulty-indicator">
                        ${difficultyDots}
                    </div>
                    <span class="course-platform">${escapeHtml(course.p)}</span>
                </div>

                <h3 class="course-title">
                    <a href="${escapeHtml(course.u)}" target="_blank" rel="noopener noreferrer" onclick="CourseCard.recordView('${escapeHtml(course.u)}')">
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
                    <a href="${escapeHtml(course.u)}" target="_blank" rel="noopener noreferrer" class="course-link" onclick="CourseCard.recordView('${escapeHtml(course.u)}')">
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
     * Toggle favorite status for a course
     * @param {string} courseUrl - Course URL
     * @param {HTMLElement} btn - The favorite button element
     */
    toggleFavorite(courseUrl, btn) {
        const isNowFav = FavoritesManager.toggle(courseUrl);

        // Update button state
        if (isNowFav) {
            btn.classList.add('active');
            btn.title = '取消收藏';
            showToast('已添加到收藏', 'success', 1500);
        } else {
            btn.classList.remove('active');
            btn.title = '收藏';
            showToast('已取消收藏', 'info', 1500);
        }

        // Pop animation
        btn.classList.add('pop');
        setTimeout(() => btn.classList.remove('pop'), 300);

        // Update sidebar favorites count
        if (typeof Sidebar !== 'undefined' && Sidebar.updateFavoritesCount) {
            Sidebar.updateFavoritesCount();
        }

        // If currently viewing favorites, re-render
        if (App.state.activeDomain === '__favorites__') {
            Filters.applyFilters();
        }
    },

    /**
     * Record a course view
     * @param {string} courseUrl - Course URL
     */
    recordView(courseUrl) {
        CourseViewsManager.recordView(courseUrl);
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