/**
 * Main Application
 * Coordinates all components and manages application state
 */

const App = {
    /**
     * Application state
     */
    state: {
        allCourses: [],
        filteredCourses: [],
        activeDomain: '',
        isLoading: true
    },

    /**
     * Initialize the application
     */
    async init() {
        console.log('🚀 Day - Do AI Yourself: Initializing...');

        try {
            // Load course data
            this.loadCourseData();

            // Initialize components
            this.initComponents();

            // Load filters from URL
            Filters.loadFromUrl();

            // Apply initial filters and render
            Filters.applyFilters();

            // Set up global event listeners
            this.bindGlobalEvents();

            // Mark as loaded
            this.state.isLoading = false;

            console.log(`✅ Application initialized with ${this.state.allCourses.length} courses`);
        } catch (error) {
            console.error('❌ Failed to initialize application:', error);
            this.showError('Failed to load application. Please refresh the page.');
        }
    },

    /**
     * Load course data from all domain files
     */
    loadCourseData() {
        // Get all courses using the aggregation function
        this.state.allCourses = getAllCourses();

        // Update domain counts
        updateDomainCounts(this.state.allCourses);

        console.log(`📚 Loaded ${this.state.allCourses.length} courses across ${DOMAINS.length} domains`);
    },

    /**
     * Initialize all components
     */
    initComponents() {
        // Initialize sidebar
        Sidebar.init();

        // Initialize filters
        Filters.init();

        // Initialize course cards
        CourseCard.init();

        // Initialize course detail panel
        if (typeof CourseDetail !== 'undefined') {
            CourseDetail.init();
        }

        // Initialize hero
        Hero.init();

        // Initialize particle field
        if (typeof Particles !== 'undefined') {
            Particles.init();
        }

        // Initialize view mode from saved preference
        Filters.initViewMode();

        // Initialize back to top button with progress ring
        this.initBackToTop();

        // Initialize scroll-triggered reveals
        this.initScrollReveal();

        // Initialize dark mode
        this.initDarkMode();

        // Initialize scroll progress bar
        this.initScrollProgress();

        // Initialize dashboard
        Dashboard.init();

        // Initialize notes modal
        NotesModal.init();

        // Initialize learning path wizard
        if (typeof Wizard !== 'undefined') {
            Wizard.init();
        }

        // Initialize quiz (for course card quiz buttons)
        if (typeof Quiz !== 'undefined') {
            Quiz.init();
        }
    },

    /**
     * Bind global event listeners
     */
    bindGlobalEvents() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            Filters.loadFromUrl();
            Filters.applyFilters();
            Sidebar.setActiveDomain();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('input[type="search"]');
                if (searchInput) searchInput.focus();
            }
        });
    },

    /**
     * Initialize back to top button with circular progress ring
     */
    initBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        const circle = document.getElementById('progressRingCircle');
        if (!backToTopBtn || !circle) return;

        const radius = 22;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        // Show/hide button and update progress ring based on scroll position
        window.addEventListener('scroll', throttle(() => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

            // Show/hide button
            if (scrollTop > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }

            // Update progress ring
            const offset = circumference - (scrollPercent * circumference);
            circle.style.strokeDashoffset = offset;
        }, 16));

        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },

    /**
     * Initialize scroll progress bar at top of page
     */
    initScrollProgress() {
        const progressBar = document.getElementById('scrollProgress');
        if (!progressBar) return;

        window.addEventListener('scroll', throttle(() => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = scrollPercent + '%';
        }, 16));
    },

    /**
     * Initialize dark mode
     */
    initDarkMode() {
        const toggle = document.getElementById('themeToggle');

        // Load saved theme preference
        const savedTheme = PreferencesManager.get('theme') || 'light';
        this.setTheme(savedTheme);

        // Bind toggle click
        if (toggle) {
            toggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                this.setTheme(newTheme);
                PreferencesManager.set('theme', newTheme);
            });
        }
    },

    /**
     * Set the theme
     * @param {string} theme - 'light' or 'dark'
     */
    setTheme(theme) {
        const toggle = document.getElementById('themeToggle');

        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (toggle) toggle.classList.add('is-dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (toggle) toggle.classList.remove('is-dark');
        }
    },

    /**
     * Initialize scroll-triggered reveal animations
     */
    initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        // Observe all elements with .reveal class
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // MutationObserver to catch dynamically added cards
        const grid = document.getElementById('coursesGrid');
        if (grid) {
            const mutObs = new MutationObserver((mutations) => {
                mutations.forEach((m) => {
                    m.addedNodes.forEach((node) => {
                        if (node.nodeType === 1 && node.classList.contains('reveal')) {
                            observer.observe(node);
                        }
                    });
                });
            });
            mutObs.observe(grid, { childList: true });
        }

        // Observe new-section elements for entrance animation
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('new-section--visible');
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

        document.querySelectorAll('.new-section').forEach(el => sectionObserver.observe(el));
    },

    /**
     * Show error message
     * @param {string} message - Error message
     */
    showError(message) {
        showToast(message, 'error', 5000);
    },

    /**
     * Show success message
     * @param {string} message - Success message
     */
    showSuccess(message) {
        showToast(message, 'success', 3000);
    },

    /**
     * Get application statistics
     * @returns {Object} Statistics
     */
    getStats() {
        return {
            totalCourses: this.state.allCourses.length,
            filteredCourses: this.state.filteredCourses.length,
            activeDomain: this.state.activeDomain,
            progressStats: ProgressManager.getStats(),
            courseStats: getCourseStats()
        };
    },

    /**
     * Export user data and download as JSON file
     */
    exportData() {
        const data = this.exportUserData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `day-backup-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showSuccess('数据已导出');
    },

    /**
     * Prompt user to import data from a JSON file
     */
    importDataPrompt() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    this.importUserData(data);
                } catch (err) {
                    this.showError('导入失败：文件格式不正确');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    },

    /**
     * Export user data
     * @returns {Object} User data
     */
    exportUserData() {
        return {
            progress: ProgressManager.getAll(),
            favorites: FavoritesManager.getAll(),
            preferences: PreferencesManager.getAll(),
            searchHistory: SearchHistoryManager.getAll(),
            notes: NotesManager.getAll(),
            learningLog: typeof LearningLogManager !== 'undefined' ? LearningLogManager.getAll() : {},
            quizStats: typeof Quiz !== 'undefined' ? Quiz.getStats() : {},
            exportDate: new Date().toISOString()
        };
    },

    /**
     * Import user data
     * @param {Object} data - User data to import
     * @returns {boolean} Success status
     */
    importUserData(data) {
        try {
            if (data.progress) {
                Storage.set(ProgressManager.STORAGE_KEY, data.progress);
            }
            if (data.favorites) {
                Storage.set(FavoritesManager.STORAGE_KEY, data.favorites);
            }
            if (data.preferences) {
                Storage.set(PreferencesManager.STORAGE_KEY, data.preferences);
            }
            if (data.searchHistory) {
                Storage.set(SearchHistoryManager.STORAGE_KEY, data.searchHistory);
            }
            if (data.notes) {
                Storage.set(NotesManager.STORAGE_KEY, data.notes);
            }
            if (data.learningLog && typeof LearningLogManager !== 'undefined') {
                Storage.set(LearningLogManager.STORAGE_KEY, data.learningLog);
            }
            if (data.quizStats && typeof Quiz !== 'undefined') {
                Storage.set(Quiz.STORAGE_KEY, data.quizStats);
            }

            // Re-render with imported data
            Filters.applyFilters();
            Dashboard.update();
            this.showSuccess('数据导入成功');

            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            this.showError('导入数据失败');
            return false;
        }
    },

    /**
     * Reset all user data
     */
    resetAllData() {
        if (confirm('确定要重置所有数据吗？此操作不可撤销。')) {
            ProgressManager.clearAll();
            FavoritesManager.clear();
            PreferencesManager.reset();
            SearchHistoryManager.clear();
            NotesManager.clearAll();
            if (typeof LearningLogManager !== 'undefined') LearningLogManager.clear();
            Storage.remove('day_quiz_stats');

            // Re-render
            Filters.applyFilters();
            Dashboard.update();
            this.showSuccess('所有数据已重置');
        }
    },

    /**
     * Debug information
     */
    debug() {
        const stats = this.getStats();
        console.group('🔍 Day App Debug Info');
        console.log('State:', this.state);
        console.log('Stats:', stats);
        console.log('Domains:', DOMAINS);
        console.log('Progress:', ProgressManager.getAll());
        console.groupEnd();

        return stats;
    }
};

/**
 * Dashboard Component
 * Shows learning statistics
 */
const Dashboard = {
    init() {
        this.update();
    },

    /**
     * Update dashboard statistics
     */
    update() {
        const stats = ProgressManager.getStats();
        const favCount = FavoritesManager.count();
        const allProgress = ProgressManager.getAll();
        const allCourses = App.state.allCourses;

        // Calculate total hours of completed courses
        let completedHours = 0;
        Object.entries(allProgress).forEach(([url, progress]) => {
            if (progress >= 100) {
                const course = allCourses.find(c => c.u === url);
                if (course) completedHours += course.h;
            }
        });

        // Animate counter updates
        const elCompleted = document.getElementById('dashCompleted');
        const elProgress = document.getElementById('dashProgress');
        const elFavorites = document.getElementById('dashFavorites');
        const elHours = document.getElementById('dashHours');

        if (elCompleted) animateCounter(elCompleted, stats.completed, 800);
        if (elProgress) animateCounter(elProgress, stats.inProgress, 800);
        if (elFavorites) animateCounter(elFavorites, favCount, 800);
        if (elHours) animateCounter(elHours, Math.round(completedHours), 800);
    },

    /**
     * Filter courses by status when dashboard card is clicked
     * @param {string} status - 'completed', 'progress', 'favorites', 'hours'
     */
    filterByStatus(status) {
        // Clear existing filters
        Sidebar.clearSelection();

        const allProgress = ProgressManager.getAll();
        let filteredUrls = [];

        switch (status) {
            case 'completed':
                filteredUrls = Object.entries(allProgress)
                    .filter(([, p]) => p >= 100)
                    .map(([url]) => url);
                break;
            case 'progress':
                filteredUrls = Object.entries(allProgress)
                    .filter(([, p]) => p > 0 && p < 100)
                    .map(([url]) => url);
                break;
            case 'favorites':
                Sidebar.selectDomain('__favorites__');
                return;
            case 'hours':
                // Show all courses sorted by hours desc
                App.state.filteredCourses = [...App.state.allCourses].sort((a, b) => b.h - a.h);
                CourseCard.renderAll(App.state.filteredCourses);
                Filters.updateResultsCount(App.state.filteredCourses.length);
                scrollToElement('#courses');
                return;
        }

        if (filteredUrls.length === 0) {
            showToast(status === 'completed' ? '还没有完成的课程' : '还没有进行中的课程', 'info', 2000);
            return;
        }

        App.state.filteredCourses = App.state.allCourses.filter(c => filteredUrls.includes(c.u));
        CourseCard.renderAll(App.state.filteredCourses);
        Filters.updateResultsCount(App.state.filteredCourses.length);
        scrollToElement('#courses');
    }
};

/**
 * Notes Modal Component
 * Handles course notes CRUD
 */
const NotesModal = {
    currentCourseUrl: null,
    currentCourseName: null,

    init() {
        this.overlay = document.getElementById('notesModalOverlay');
        this.closeBtn = document.getElementById('notesModalClose');
        this.courseEl = document.getElementById('notesModalCourse');
        this.textarea = document.getElementById('notesTextarea');
        this.timestampEl = document.getElementById('notesTimestamp');
        this.saveBtn = document.getElementById('notesSaveBtn');
        this.deleteBtn = document.getElementById('notesDeleteBtn');

        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }

        if (this.overlay) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) this.close();
            });
        }

        if (this.saveBtn) {
            this.saveBtn.addEventListener('click', () => this.save());
        }

        if (this.deleteBtn) {
            this.deleteBtn.addEventListener('click', () => this.deleteNote());
        }

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
    },

    /**
     * Open notes modal for a course
     * @param {string} courseUrl - Course URL
     * @param {string} courseName - Course name
     */
    open(courseUrl, courseName) {
        this.currentCourseUrl = courseUrl;
        this.currentCourseName = courseName;

        if (this.courseEl) this.courseEl.textContent = courseName;

        // Load existing note
        const note = NotesManager.get(courseUrl);
        if (note && note.text) {
            if (this.textarea) this.textarea.value = note.text;
            if (this.timestampEl) this.timestampEl.textContent = `上次编辑: ${new Date(note.updatedAt).toLocaleString('zh-CN')}`;
            if (this.deleteBtn) this.deleteBtn.style.display = 'inline-flex';
        } else {
            if (this.textarea) this.textarea.value = '';
            if (this.timestampEl) this.timestampEl.textContent = '';
            if (this.deleteBtn) this.deleteBtn.style.display = 'none';
        }

        if (this.overlay) {
            this.overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Focus textarea after animation
        setTimeout(() => {
            if (this.textarea) this.textarea.focus();
        }, 300);
    },

    /**
     * Close the modal
     */
    close() {
        if (this.overlay) {
            this.overlay.classList.remove('show');
            document.body.style.overflow = '';
        }
        this.currentCourseUrl = null;
        this.currentCourseName = null;
    },

    /**
     * Check if modal is open
     * @returns {boolean}
     */
    isOpen() {
        return this.overlay && this.overlay.classList.contains('show');
    },

    /**
     * Save the current note
     */
    save() {
        if (!this.currentCourseUrl || !this.textarea) return;

        const text = this.textarea.value.trim();
        if (text) {
            NotesManager.save(this.currentCourseUrl, text);
            showToast('笔记已保存', 'success', 2000);
            if (this.timestampEl) {
                this.timestampEl.textContent = `上次编辑: ${new Date().toLocaleString('zh-CN')}`;
            }
            if (this.deleteBtn) this.deleteBtn.style.display = 'inline-flex';
        } else {
            NotesManager.delete(this.currentCourseUrl);
            showToast('笔记已删除', 'info', 2000);
        }

        // Re-render cards to show/hide note indicator
        CourseCard.renderAll(App.state.filteredCourses);
    },

    /**
     * Delete the current note
     */
    deleteNote() {
        if (!this.currentCourseUrl) return;

        NotesManager.delete(this.currentCourseUrl);
        if (this.textarea) this.textarea.value = '';
        if (this.timestampEl) this.timestampEl.textContent = '';
        if (this.deleteBtn) this.deleteBtn.style.display = 'none';
        showToast('笔记已删除', 'info', 2000);

        // Re-render cards to remove note indicator
        CourseCard.renderAll(App.state.filteredCourses);
    }
};

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Make App globally accessible for debugging
window.DayApp = App;

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
}
