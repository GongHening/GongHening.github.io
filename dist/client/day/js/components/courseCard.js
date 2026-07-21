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

        // Close any open detail panel before re-rendering
        if (typeof CourseDetail !== 'undefined') {
            CourseDetail.close();
        }

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
        const hasNote = NotesManager.has(course.u);
        const isCompleted = progress >= 100;
        const completedClass = isCompleted ? ' completed' : '';

        return `
            <div class="course-card reveal${completedClass}" style="transition-delay: ${delay}ms">

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
                    <div class="course-footer-actions">
                        ${this.createQuizButtons(course)}
                        <button class="card-detail-btn" onclick="CourseDetail.toggle('${escapeHtml(course.u)}')">
                            <span class="card-detail-btn-text">详情</span>
                            <span class="card-detail-btn-arrow">▼</span>
                        </button>
                        <a href="${escapeHtml(course.u)}" target="_blank" rel="noopener noreferrer" class="course-link" onclick="CourseCard.recordView('${escapeHtml(course.u)}')">
                            开始学习
                        </a>
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
     * Create quiz buttons HTML for a course (inline in footer)
     * @param {Object} course - Course object
     * @returns {string} HTML string
     */
    createQuizButtons(course) {
        // Check if quiz data exists for this course
        var hasQuiz = typeof COURSE_QUIZ_DATA !== 'undefined' && COURSE_QUIZ_DATA[course.n];

        if (!hasQuiz) {
            return '';
        }

        return `
            <div class="card-quiz-btns">
                <button class="card-quiz-btn card-quiz-btn--mid" onclick="CourseCard.startQuiz('${escapeHtml(course.n)}', 'mid')" title="期中测验">
                    期中
                </button>
                <button class="card-quiz-btn card-quiz-btn--final" onclick="CourseCard.startQuiz('${escapeHtml(course.n)}', 'final')" title="期末测验">
                    期末
                </button>
            </div>
        `;
    },

    /**
     * Start a quiz for a course
     * @param {string} courseName - Course name
     * @param {string} examType - 'mid' or 'final'
     */
    startQuiz(courseName, examType) {
        // Start quiz exam in modal
        if (typeof Quiz !== 'undefined') {
            Quiz.startExam(courseName, examType);
        }
    },

    /**
     * Update course progress
     * @param {string} courseUrl - Course URL
     * @param {number} progress - New progress value
     */
    updateProgress(courseUrl, progress) {
        const wasCompleted = ProgressManager.get(courseUrl) >= 100;
        ProgressManager.set(courseUrl, progress);

        // Re-render all filtered courses
        this.renderAll(App.state.filteredCourses);

        // Celebration effect when completing
        if (progress >= 100 && !wasCompleted) {
            const card = this.getCardByUrl(courseUrl);
            if (card) {
                card.classList.add('celebrate');
                setTimeout(() => card.classList.remove('celebrate'), 600);
            }
            showToast('🎉 恭喜完成课程！', 'success', 3000);
        }

        // Update dashboard
        if (typeof Dashboard !== 'undefined') {
            Dashboard.update();
        }
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

        // Update dashboard
        if (typeof Dashboard !== 'undefined') {
            Dashboard.update();
        }

        // If currently viewing favorites, re-render
        if (App.state.activeDomain === '__favorites__') {
            Filters.applyFilters();
        }
    },

    /**
     * Share a course by copying its link
     * @param {string} courseUrl - Course URL
     * @param {string} courseName - Course name
     */
    shareCourse(courseUrl, courseName) {
        const shareText = `📚 推荐课程: ${courseName}\n${courseUrl}\n\n— 来自 Day (Do AI Yourself)`;

        if (navigator.share) {
            navigator.share({
                title: `Day — ${courseName}`,
                text: shareText,
                url: courseUrl
            }).catch(() => {
                // Fallback to clipboard
                this.copyToClipboard(shareText);
            });
        } else {
            this.copyToClipboard(shareText);
        }
    },

    /**
     * Copy text to clipboard and show toast
     * @param {string} text - Text to copy
     */
    copyToClipboard(text) {
        if (typeof copyToClipboard === 'function') {
            copyToClipboard(text).then(success => {
                if (success) {
                    showToast('课程链接已复制到剪贴板', 'success', 2000);
                } else {
                    showToast('复制失败，请手动复制', 'error', 2000);
                }
            });
        } else {
            // Fallback
            navigator.clipboard.writeText(text).then(() => {
                showToast('课程链接已复制到剪贴板', 'success', 2000);
            }).catch(() => {
                showToast('复制失败，请手动复制', 'error', 2000);
            });
        }
    },

    /**
     * Open notes modal for a course
     * @param {string} courseUrl - Course URL
     * @param {string} courseName - Course name
     */
    openNotes(courseUrl, courseName) {
        if (typeof NotesModal !== 'undefined') {
            NotesModal.open(courseUrl, courseName);
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