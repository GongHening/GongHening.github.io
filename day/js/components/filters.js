/**
 * Filters Component
 * Handles course filtering and sorting
 */

const Filters = {
    /**
     * Initialize filters
     */
    init() {
        this.cacheElements();
        this.bindEvents();
    },

    /**
     * Cache DOM elements
     */
    cacheElements() {
        this.difficultyFilter = document.getElementById('difficultyFilter');
        this.sortFilter = document.getElementById('sortFilter');
        this.clearBtn = document.getElementById('clearFiltersBtn');
        this.resultsCount = document.getElementById('resultsCount');
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Difficulty filter change
        if (this.difficultyFilter) {
            this.difficultyFilter.addEventListener('change', () => this.applyFilters());
        }

        // Sort filter change
        if (this.sortFilter) {
            this.sortFilter.addEventListener('change', () => this.applyFilters());
        }

        // Clear button click
        if (this.clearBtn) {
            this.clearBtn.addEventListener('click', () => this.clearFilters());
        }

        // Domain header close button
        const domainCloseBtn = document.getElementById('domainCloseBtn');
        if (domainCloseBtn) {
            domainCloseBtn.addEventListener('click', () => Sidebar.clearSelection());
        }
    },

    /**
     * Apply all filters and render courses
     */
    applyFilters() {
        const filters = this.getActiveFilters();
        const filteredCourses = this.filterCourses(filters);
        const sortedCourses = this.sortCourses(filteredCourses);

        // Update state
        App.state.filteredCourses = sortedCourses;

        // Render courses
        CourseCard.renderAll(sortedCourses);

        // Update results count
        this.updateResultsCount(sortedCourses.length);

        // Update URL params
        this.updateUrlParams(filters);
    },

    /**
     * Get active filter values
     * @returns {Object} Active filters
     */
    getActiveFilters() {
        return {
            domain: App.state.activeDomain || '',
            difficulty: this.difficultyFilter ? this.difficultyFilter.value : '',
            sort: this.sortFilter ? this.sortFilter.value : 'default'
        };
    },

    /**
     * Filter courses based on criteria
     * @param {Object} filters - Filter criteria
     * @returns {Array} Filtered courses
     */
    filterCourses(filters) {
        let courses = [...App.state.allCourses];

        // Filter by domain
        if (filters.domain) {
            courses = courses.filter(course => course.cat === filters.domain);
        }

        // Filter by difficulty
        if (filters.difficulty) {
            courses = courses.filter(course => course.d === parseInt(filters.difficulty));
        }

        return courses;
    },

    /**
     * Sort courses
     * @param {Array} courses - Courses to sort
     * @returns {Array} Sorted courses
     */
    sortCourses(courses) {
        const sortBy = this.sortFilter ? this.sortFilter.value : 'default';
        const sorted = [...courses];

        switch (sortBy) {
            case 'difficulty-asc':
                sorted.sort((a, b) => a.d - b.d);
                break;
            case 'difficulty-desc':
                sorted.sort((a, b) => b.d - a.d);
                break;
            case 'hours-asc':
                sorted.sort((a, b) => a.h - b.h);
                break;
            case 'hours-desc':
                sorted.sort((a, b) => b.h - a.h);
                break;
            case 'name-asc':
                sorted.sort((a, b) => a.n.localeCompare(b.n));
                break;
            case 'name-desc':
                sorted.sort((a, b) => b.n.localeCompare(a.n));
                break;
            default:
                // Keep original order
                break;
        }

        return sorted;
    },

    /**
     * Clear all filters
     */
    clearFilters() {
        // Reset filter values
        if (this.difficultyFilter) this.difficultyFilter.value = '';
        if (this.sortFilter) this.sortFilter.value = 'default';

        // Clear domain selection
        Sidebar.clearSelection();

        // Apply filters
        this.applyFilters();
    },

    /**
     * Update results count display
     * @param {number} count - Number of results
     */
    updateResultsCount(count) {
        if (this.resultsCount) {
            this.resultsCount.textContent = `共 ${count} 门课程`;
        }
    },

    /**
     * Update URL parameters
     * @param {Object} filters - Current filters
     */
    updateUrlParams(filters) {
        const params = {};

        if (filters.domain) params.domain = filters.domain;
        if (filters.difficulty) params.difficulty = filters.difficulty;
        if (filters.sort && filters.sort !== 'default') params.sort = filters.sort;

        setUrlParams(params);
    },

    /**
     * Load filters from URL parameters
     */
    loadFromUrl() {
        const params = getUrlParams();

        if (params.domain) {
            App.state.activeDomain = params.domain;
            Sidebar.updateActiveState(params.domain);
            Sidebar.updateDomainHeader(params.domain);
        }

        if (params.difficulty && this.difficultyFilter) {
            this.difficultyFilter.value = params.difficulty;
        }

        if (params.sort && this.sortFilter) {
            this.sortFilter.value = params.sort;
        }
    },

    /**
     * Get filtered course count for a domain
     * @param {string} domainId - Domain ID
     * @returns {number} Course count
     */
    getDomainCount(domainId) {
        return App.state.allCourses.filter(course => course.cat === domainId).length;
    },

    /**
     * Check if any filters are active
     * @returns {boolean} True if filters are active
     */
    hasActiveFilters() {
        const filters = this.getActiveFilters();
        return filters.domain || filters.difficulty || filters.sort !== 'default';
    },

    /**
     * Get summary of active filters
     * @returns {string} Filter summary text
     */
    getFilterSummary() {
        const filters = this.getActiveFilters();
        const parts = [];

        if (filters.domain) {
            const domain = getDomainById(filters.domain);
            if (domain) parts.push(domain.name);
        }

        if (filters.difficulty) {
            parts.push(getDifficultyLabel(parseInt(filters.difficulty)));
        }

        return parts.length > 0 ? parts.join(' · ') : '全部课程';
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Filters;
}