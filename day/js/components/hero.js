/**
 * Hero Component
 * Handles hero section animations and statistics
 */

const Hero = {
    /**
     * Initialize hero component
     */
    init() {
        this.cacheElements();
        this.animateStats();
        this.initHitCounter();
        this.renderPopularCourses();
    },

    /**
     * Cache DOM elements
     */
    cacheElements() {
        this.statCourses = document.getElementById('statCourses');
        this.statDomains = document.getElementById('statDomains');
        this.statHits = document.getElementById('statHits');
        this.popularCoursesScroll = document.getElementById('popularCoursesScroll');
    },

    /**
     * Animate statistics numbers
     */
    animateStats() {
        // Animate course count
        if (this.statCourses) {
            const totalCourses = App.state.allCourses.length;
            animateCounter(this.statCourses, totalCourses, 1500);
        }

        // Domain count is static (13)
        if (this.statDomains) {
            animateCounter(this.statDomains, 13, 1000);
        }
    },

    /**
     * Initialize hit counter (global visitor count)
     */
    initHitCounter() {
        if (!this.statHits) return;

        // Show loading state
        this.statHits.innerHTML = '<span class="hits-loading">···</span>';

        // Try to fetch global hit count from API
        this.fetchHitCount()
            .then(count => {
                if (count !== null) {
                    animateCounter(this.statHits, count, 2000);
                } else {
                    this.showFallbackCount();
                }
            })
            .catch(() => {
                this.showFallbackCount();
            });
    },

    /**
     * Fetch hit count from external API (counterapi.dev)
     * @returns {Promise<number|null>} Hit count or null
     */
    async fetchHitCount() {
        const WORKSPACE = 'day-ai';
        const COUNTER_NAME = 'site-hits';

        try {
            const response = await fetch(
                `https://api.counterapi.dev/v1/${WORKSPACE}/${COUNTER_NAME}/up`
            );

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();

            if (data && typeof data.count === 'number') {
                return data.count;
            }

            return null;
        } catch (error) {
            console.warn('Failed to fetch hit count:', error);
            return null;
        }
    },

    /**
     * Show fallback when global count API is unavailable
     * Displays a dash instead of misleading local-only count
     */
    showFallbackCount() {
        if (!this.statHits) return;

        this.statHits.innerHTML = '<span class="hits-fallback" title="全局访问量暂时无法获取">—</span>';
    },

    /**
     * Update stats (can be called to refresh)
     */
    updateStats() {
        this.animateStats();
    },

    /**
     * Scroll to courses section
     */
    scrollToCourses() {
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
    },

    /**
     * Scroll to paths section
     */
    scrollToPaths() {
        const pathsSection = document.getElementById('paths');
        if (pathsSection) {
            pathsSection.scrollIntoView({ behavior: 'smooth' });
        }
    },

    /**
     * Scroll to dashboard section
     */
    scrollToDashboard() {
        const dashboardSection = document.getElementById('dashboard');
        if (dashboardSection) {
            dashboardSection.scrollIntoView({ behavior: 'smooth' });
        }
    },

    /**
     * Render popular courses in the hero section
     */
    renderPopularCourses() {
        if (!this.popularCoursesScroll) return;

        const popular = getPopularCourses(8);
        if (popular.length === 0) return;

        this.popularCoursesScroll.innerHTML = popular.map((course, index) => {
            const domain = getDomainById(course.cat);
            const domainName = domain ? domain.name : course.cat;
            const rankClass = index < 3 ? ' top-3' : '';

            return `
                <a class="popular-course-chip" href="${escapeHtml(course.u)}" target="_blank" rel="noopener noreferrer" onclick="CourseViewsManager.recordView('${escapeHtml(course.u)}')">
                    <span class="popular-course-rank${rankClass}">${index + 1}</span>
                    <span class="popular-course-name">${escapeHtml(course.n)}</span>
                    <span class="popular-course-domain">${escapeHtml(domainName)}</span>
                </a>
            `;
        }).join('');
    },

    /**
     * Add scroll-based parallax effect
     */
    initParallax() {
        const hero = document.getElementById('hero');
        const heroContent = hero?.querySelector('.hero-content');

        if (!hero || !heroContent) return;

        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;

            if (scrolled < heroHeight) {
                const opacity = 1 - (scrolled / heroHeight) * 0.5;
                const translateY = scrolled * 0.3;

                heroContent.style.opacity = opacity;
                heroContent.style.transform = `translateY(${translateY}px)`;
            }
        }, 16));
    },

    /**
     * Create animated background particles (optional)
     */
    initParticles() {
        const hero = document.getElementById('hero');
        if (!hero) return;

        // This is a placeholder for particle animation
        // You can integrate a library like particles.js here
        console.log('Particles animation ready to implement');
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Hero;
}