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

        // Initialize hero
        Hero.init();

        // Initialize back to top button
        this.initBackToTop();
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
            // Ctrl/Cmd + K to focus search (if we add one)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                // Focus search input if exists
                const searchInput = document.querySelector('input[type="search"]');
                if (searchInput) searchInput.focus();
            }
        });
    },

    /**
     * Initialize back to top button
     */
    initBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        if (!backToTopBtn) return;

        // Show/hide button based on scroll position
        window.addEventListener('scroll', throttle(() => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, 100));

        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
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
     * Export user data
     * @returns {Object} User data
     */
    exportUserData() {
        return {
            progress: ProgressManager.getAll(),
            favorites: FavoritesManager.getAll(),
            preferences: PreferencesManager.getAll(),
            searchHistory: SearchHistoryManager.getAll(),
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

            // Re-render with imported data
            Filters.applyFilters();
            this.showSuccess('Data imported successfully');

            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            this.showError('Failed to import data');
            return false;
        }
    },

    /**
     * Reset all user data
     */
    resetAllData() {
        if (confirm('Are you sure you want to reset all your data? This cannot be undone.')) {
            ProgressManager.clearAll();
            FavoritesManager.clear();
            PreferencesManager.reset();
            SearchHistoryManager.clear();

            // Re-render
            Filters.applyFilters();
            this.showSuccess('All data has been reset');
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