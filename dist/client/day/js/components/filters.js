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
        this.searchInput = document.getElementById('searchInput');
        this.searchDebounceTimer = null;
        this.searchHistoryDropdown = document.getElementById('searchHistoryDropdown');
        this.viewToggle = document.getElementById('viewToggle');
        this.coursesGrid = document.getElementById('coursesGrid');
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Custom select dropdowns
        this.initCustomSelect(this.difficultyFilter);
        this.initCustomSelect(this.sortFilter);

        // Clear button click
        if (this.clearBtn) {
            this.clearBtn.addEventListener('click', () => this.clearFilters());
        }

        // Search input with debounce
        if (this.searchInput) {
            this.searchInput.addEventListener('input', () => {
                this.hideSearchHistory();
                clearTimeout(this.searchDebounceTimer);
                this.searchDebounceTimer = setTimeout(() => {
                    this.applyFilters();
                    // Save to search history
                    if (this.searchInput.value.trim()) {
                        SearchHistoryManager.add(this.searchInput.value.trim());
                    }
                }, 300);
            });

            // Show search history on focus
            this.searchInput.addEventListener('focus', () => {
                if (!this.searchInput.value.trim()) {
                    this.showSearchHistory();
                }
            });
        }

        // Hide search history on outside click
        document.addEventListener('click', (e) => {
            if (this.searchHistoryDropdown && !e.target.closest('.search-wrapper')) {
                this.hideSearchHistory();
            }
        });

        // View toggle buttons
        if (this.viewToggle) {
            this.viewToggle.addEventListener('click', (e) => {
                const btn = e.target.closest('.view-toggle-btn');
                if (!btn) return;
                const viewMode = btn.dataset.view;
                this.setViewMode(viewMode);
            });
        }

        // Domain header close button
        const domainCloseBtn = document.getElementById('domainCloseBtn');
        if (domainCloseBtn) {
            domainCloseBtn.addEventListener('click', () => Sidebar.clearSelection());
        }

        // Close all custom selects on outside click
        document.addEventListener('click', (e) => {
            document.querySelectorAll('.custom-select.open').forEach(sel => {
                if (!sel.contains(e.target)) {
                    sel.classList.remove('open');
                }
            });
        });
    },

    /**
     * Initialize a custom select dropdown
     * @param {HTMLElement} container - The custom-select container
     */
    initCustomSelect(container) {
        if (!container) return;

        const btn = container.querySelector('.custom-select-btn');
        const options = container.querySelectorAll('.custom-select-option');

        // Toggle dropdown
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other open selects
            document.querySelectorAll('.custom-select.open').forEach(sel => {
                if (sel !== container) sel.classList.remove('open');
            });
            container.classList.toggle('open');
        });

        // Option click
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                // Update active state
                options.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');

                // Update value and button text
                const value = opt.dataset.value;
                const text = opt.textContent;
                container.dataset.value = value;
                btn.innerHTML = text + ' <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>';

                // Close dropdown
                container.classList.remove('open');

                // Trigger filter
                this.applyFilters();
            });
        });
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
            difficulty: this.difficultyFilter ? this.difficultyFilter.dataset.value : '',
            sort: this.sortFilter ? this.sortFilter.dataset.value : 'default',
            search: this.searchInput ? this.searchInput.value.trim() : ''
        };
    },

    /**
     * Filter courses based on criteria
     * @param {Object} filters - Filter criteria
     * @returns {Array} Filtered courses
     */
    filterCourses(filters) {
        let courses = [...App.state.allCourses];

        // Filter by favorites (special domain)
        if (filters.domain === '__favorites__') {
            const favUrls = FavoritesManager.getAll();
            courses = courses.filter(course => favUrls.includes(course.u));
        } else if (filters.domain) {
            // Filter by domain
            courses = courses.filter(course => course.cat === filters.domain);
        }

        // Filter by difficulty
        if (filters.difficulty) {
            courses = courses.filter(course => course.d === parseInt(filters.difficulty));
        }

        // Filter by search query
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            courses = courses.filter(course => {
                const searchableText = [
                    course.n,
                    course.i,
                    course.p,
                    course.desc,
                    ...course.t
                ].join(' ').toLowerCase();

                return searchableText.includes(searchTerm);
            });
        }

        return courses;
    },

    /**
     * Sort courses
     * @param {Array} courses - Courses to sort
     * @returns {Array} Sorted courses
     */
    sortCourses(courses) {
        const sortBy = this.sortFilter ? this.sortFilter.dataset.value : 'default';
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
        // Reset custom select values
        this.resetCustomSelect(this.difficultyFilter, '', '全部难度');
        this.resetCustomSelect(this.sortFilter, 'default', '默认排序');
        if (this.searchInput) this.searchInput.value = '';

        // Clear domain selection
        Sidebar.clearSelection();

        // Apply filters
        this.applyFilters();
    },

    /**
     * Reset a custom select to its default state
     * @param {HTMLElement} container - The custom-select container
     * @param {string} value - Default value
     * @param {string} label - Default label text
     */
    resetCustomSelect(container, value, label) {
        if (!container) return;
        container.dataset.value = value;
        const btn = container.querySelector('.custom-select-btn');
        if (btn) btn.innerHTML = label + ' <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>';
        const options = container.querySelectorAll('.custom-select-option');
        options.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.value === value);
        });
    },

    /**
     * Set a custom select to a specific value
     * @param {HTMLElement} container - The custom-select container
     * @param {string} value - Value to set
     */
    setCustomSelectValue(container, value) {
        if (!container) return;
        const option = container.querySelector(`.custom-select-option[data-value="${value}"]`);
        if (option) {
            container.dataset.value = value;
            const btn = container.querySelector('.custom-select-btn');
            if (btn) btn.innerHTML = option.textContent + ' <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>';
            container.querySelectorAll('.custom-select-option').forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        }
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
            this.setCustomSelectValue(this.difficultyFilter, params.difficulty);
        }

        if (params.sort && this.sortFilter) {
            this.setCustomSelectValue(this.sortFilter, params.sort);
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
        return filters.domain || filters.difficulty || filters.sort !== 'default' || filters.search;
    },

    /**
     * Get summary of active filters
     * @returns {string} Filter summary text
     */
    getFilterSummary() {
        const filters = this.getActiveFilters();
        const parts = [];

        if (filters.domain === '__favorites__') {
            parts.push('我的收藏');
        } else if (filters.domain) {
            const domain = getDomainById(filters.domain);
            if (domain) parts.push(domain.name);
        }

        if (filters.difficulty) {
            parts.push(getDifficultyLabel(parseInt(filters.difficulty)));
        }

        return parts.length > 0 ? parts.join(' · ') : '全部课程';
    },

    /**
     * Show search history dropdown
     */
    showSearchHistory() {
        if (!this.searchHistoryDropdown) return;
        this.renderSearchHistory();
        this.searchHistoryDropdown.classList.add('show');
    },

    /**
     * Hide search history dropdown
     */
    hideSearchHistory() {
        if (!this.searchHistoryDropdown) return;
        this.searchHistoryDropdown.classList.remove('show');
    },

    /**
     * Render search history items
     */
    renderSearchHistory() {
        if (!this.searchHistoryDropdown) return;

        const history = SearchHistoryManager.getAll();

        if (history.length === 0) {
            this.searchHistoryDropdown.innerHTML = '<div class="search-history-empty">暂无搜索历史</div>';
            return;
        }

        this.searchHistoryDropdown.innerHTML = `
            <div class="search-history-header">
                <span class="search-history-title">搜索历史</span>
                <button class="search-history-clear" onclick="Filters.clearSearchHistory()">清除全部</button>
            </div>
            <div class="search-history-list">
                ${history.map(query => `
                    <div class="search-history-item" onclick="Filters.applySearchHistory('${escapeHtml(query)}')">
                        <span class="search-history-icon">⏱</span>
                        <span class="search-history-text">${escapeHtml(query)}</span>
                        <button class="search-history-remove" onclick="event.stopPropagation(); Filters.removeSearchHistory('${escapeHtml(query)}')" title="删除">✕</button>
                    </div>
                `).join('')}
            </div>
        `;
    },

    /**
     * Apply a search history item
     * @param {string} query - Search query
     */
    applySearchHistory(query) {
        if (this.searchInput) {
            this.searchInput.value = query;
            this.hideSearchHistory();
            this.applyFilters();
        }
    },

    /**
     * Remove a search history item
     * @param {string} query - Search query to remove
     */
    removeSearchHistory(query) {
        SearchHistoryManager.remove(query);
        this.renderSearchHistory();
    },

    /**
     * Clear all search history
     */
    clearSearchHistory() {
        SearchHistoryManager.clear();
        this.hideSearchHistory();
    },

    /**
     * Set view mode (grid/list)
     * @param {string} mode - 'grid' or 'list'
     */
    setViewMode(mode) {
        if (!this.coursesGrid || !this.viewToggle) return;

        // Update grid class
        if (mode === 'list') {
            this.coursesGrid.classList.add('list-view');
        } else {
            this.coursesGrid.classList.remove('list-view');
        }

        // Update toggle buttons
        this.viewToggle.querySelectorAll('.view-toggle-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === mode);
        });

        // Save preference
        PreferencesManager.set('viewMode', mode);
    },

    /**
     * Initialize view mode from saved preference
     */
    initViewMode() {
        const savedMode = PreferencesManager.get('viewMode') || 'grid';
        this.setViewMode(savedMode);
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Filters;
}