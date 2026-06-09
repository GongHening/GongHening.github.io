/**
 * Sidebar Component
 * Handles sidebar navigation and mobile menu
 */

const Sidebar = {
    /**
     * Initialize the sidebar
     */
    init() {
        this.cacheElements();
        this.renderNavigation();
        this.bindEvents();
        this.setActiveDomain();
    },

    /**
     * Cache DOM elements
     */
    cacheElements() {
        this.sidebar = document.getElementById('sidebar');
        this.overlay = document.getElementById('sidebarOverlay');
        this.hamburger = document.getElementById('hamburger');
        this.navContainer = document.getElementById('sidebarNav');
        this.mobileHeader = document.getElementById('mobileHeader');
    },

    /**
     * Render navigation items
     */
    renderNavigation() {
        if (!this.navContainer) return;

        this.navContainer.innerHTML = '';

        // Add favorites item
        const favItem = this.createFavoritesNavItem();
        this.navContainer.appendChild(favItem);

        // Add divider
        const divider = document.createElement('div');
        divider.className = 'nav-divider';
        this.navContainer.appendChild(divider);

        // Add section label
        const label = document.createElement('div');
        label.className = 'nav-section-label';
        label.textContent = 'AI 领域';
        this.navContainer.appendChild(label);

        // Add navigation items for each domain
        DOMAINS.forEach(domain => {
            const navItem = this.createNavItem(domain);
            this.navContainer.appendChild(navItem);
        });
    },

    /**
     * Create the favorites navigation item
     * @returns {HTMLElement} Navigation item element
     */
    createFavoritesNavItem() {
        const button = document.createElement('button');
        button.className = 'nav-item nav-item-favorites';
        button.dataset.domain = '__favorites__';
        button.onclick = () => this.selectDomain('__favorites__');

        const favCount = FavoritesManager.count();
        button.innerHTML = `
            <span class="nav-emoji">❤️</span>
            <span class="nav-label">我的收藏</span>
            <span class="nav-favorites-count" id="navFavoritesCount">${favCount}</span>
        `;

        return button;
    },

    /**
     * Update favorites count in sidebar
     */
    updateFavoritesCount() {
        const countEl = document.getElementById('navFavoritesCount');
        if (countEl) {
            countEl.textContent = FavoritesManager.count();
        }
    },

    /**
     * Create a navigation item
     * @param {Object} domain - Domain object
     * @returns {HTMLElement} Navigation item element
     */
    createNavItem(domain) {
        const button = document.createElement('button');
        button.className = 'nav-item';
        button.dataset.domain = domain.id;
        button.onclick = () => this.selectDomain(domain.id);

        button.innerHTML = `
            <span class="nav-emoji">${domain.icon}</span>
            <span class="nav-label">${domain.name}</span>
            <span class="nav-count">${domain.count}</span>
        `;

        return button;
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Hamburger menu click
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMobile());
        }

        // Overlay click to close
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.closeMobile());
        }

        // Keyboard shortcut (Escape to close)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.closeMobile();
            }
        });

        // Close on resize if desktop
        window.addEventListener('resize', debounce(() => {
            if (window.innerWidth > 900 && this.isOpen()) {
                this.closeMobile();
            }
        }, 250));
    },

    /**
     * Select a domain
     * @param {string} domainId - Domain ID to select
     */
    selectDomain(domainId) {
        // If already selected, deselect
        if (App.state.activeDomain === domainId) {
            this.clearSelection();
            return;
        }

        App.state.activeDomain = domainId;

        // Update active state in navigation
        this.updateActiveState(domainId);

        // Update domain header
        this.updateDomainHeader(domainId);

        // Close mobile sidebar
        this.closeMobile();

        // Scroll to content
        this.scrollToContent();

        // Trigger course re-render
        Filters.applyFilters();
    },

    /**
     * Clear domain selection
     */
    clearSelection() {
        App.state.activeDomain = '';

        // Remove active state from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Hide domain header
        const domainHeader = document.getElementById('domainHeader');
        if (domainHeader) {
            domainHeader.classList.remove('show');
        }

        // Reset filter title
        const filterTitle = document.getElementById('filterTitle');
        if (filterTitle) {
            filterTitle.textContent = '全部课程';
        }

        // Reset filters
        const diffFilter = document.getElementById('difficultyFilter');
        const sortFilter = document.getElementById('sortFilter');
        if (diffFilter) diffFilter.value = '';
        if (sortFilter) sortFilter.value = 'default';

        // Re-render courses
        Filters.applyFilters();
    },

    /**
     * Update active state in navigation
     * @param {string} domainId - Active domain ID
     */
    updateActiveState(domainId) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.domain === domainId);
        });
    },

    /**
     * Update domain header
     * @param {string} domainId - Domain ID
     */
    updateDomainHeader(domainId) {
        // Handle favorites special case
        if (domainId === '__favorites__') {
            const domainHeader = document.getElementById('domainHeader');
            const domainEmoji = document.getElementById('domainEmoji');
            const domainName = document.getElementById('domainName');
            const domainDescription = document.getElementById('domainDescription');

            if (domainHeader) domainHeader.classList.add('show');
            if (domainEmoji) domainEmoji.textContent = '❤️';
            if (domainName) domainName.textContent = '我的收藏';
            if (domainDescription) domainDescription.textContent = `${FavoritesManager.count()} 门收藏课程`;

            const filterTitle = document.getElementById('filterTitle');
            if (filterTitle) filterTitle.textContent = '我的收藏';
            return;
        }

        const domain = getDomainById(domainId);
        if (!domain) return;

        const domainHeader = document.getElementById('domainHeader');
        const domainEmoji = document.getElementById('domainEmoji');
        const domainName = document.getElementById('domainName');
        const domainDescription = document.getElementById('domainDescription');

        if (domainHeader) {
            domainHeader.classList.add('show');
        }

        if (domainEmoji) {
            domainEmoji.textContent = domain.icon;
        }

        if (domainName) {
            domainName.textContent = domain.name;
        }

        if (domainDescription) {
            domainDescription.textContent = `${domain.description} · ${domain.count} 门课程`;
        }

        // Update filter title
        const filterTitle = document.getElementById('filterTitle');
        if (filterTitle) {
            filterTitle.textContent = domain.name;
        }
    },

    /**
     * Set active domain based on current state
     */
    setActiveDomain() {
        if (App.state.activeDomain) {
            this.updateActiveState(App.state.activeDomain);
            this.updateDomainHeader(App.state.activeDomain);
        }
    },

    /**
     * Scroll to content area
     */
    scrollToContent() {
        const domainHeader = document.getElementById('domainHeader');
        if (domainHeader) {
            domainHeader.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },

    /**
     * Toggle mobile sidebar
     */
    toggleMobile() {
        if (this.isOpen()) {
            this.closeMobile();
        } else {
            this.openMobile();
        }
    },

    /**
     * Open mobile sidebar
     */
    openMobile() {
        if (this.sidebar) this.sidebar.classList.add('open');
        if (this.overlay) this.overlay.classList.add('open');
        if (this.hamburger) this.hamburger.classList.add('open');
        document.body.style.overflow = 'hidden';
    },

    /**
     * Close mobile sidebar
     */
    closeMobile() {
        if (this.sidebar) this.sidebar.classList.remove('open');
        if (this.overlay) this.overlay.classList.remove('open');
        if (this.hamburger) this.hamburger.classList.remove('open');
        document.body.style.overflow = '';
    },

    /**
     * Check if sidebar is open (mobile)
     * @returns {boolean} True if open
     */
    isOpen() {
        return this.sidebar && this.sidebar.classList.contains('open');
    },

    /**
     * Update domain counts
     */
    updateCounts() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const domainId = item.dataset.domain;
            const domain = getDomainById(domainId);
            const countEl = item.querySelector('.nav-count');
            if (countEl && domain) {
                countEl.textContent = domain.count;
            }
        });
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Sidebar;
}