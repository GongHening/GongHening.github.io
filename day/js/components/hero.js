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
     * Initialize hit counter
     */
    initHitCounter() {
        if (!this.statHits) return;

        // Show loading state
        this.statHits.innerHTML = '<span class="hits-loading">···</span>';

        // Try to fetch hit count from API
        this.fetchHitCount()
            .then(count => {
                if (count !== null) {
                    animateCounter(this.statHits, count, 2000);
                } else {
                    this.showLocalHitCount();
                }
            })
            .catch(() => {
                this.showLocalHitCount();
            });
    },

    /**
     * Fetch hit count from external API
     * @returns {Promise<number|null>} Hit count or null
     */
    async fetchHitCount() {
        const COUNTER_NS = 'day-ai-yourself';
        const COUNTER_KEY = 'site-hits';

        try {
            const response = await fetch(
                `https://api.countapi.xyz/hit/${COUNTER_NS}/${COUNTER_KEY}`
            );

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();

            if (data && typeof data.value === 'number') {
                return data.value;
            }

            return null;
        } catch (error) {
            console.warn('Failed to fetch hit count:', error);
            return null;
        }
    },

    /**
     * Show local hit count as fallback
     */
    showLocalHitCount() {
        if (!this.statHits) return;

        // Get local hit count
        let localHits = parseInt(localStorage.getItem('day_local_hits') || '0');
        localHits += 1;
        localStorage.setItem('day_local_hits', String(localHits));

        // Animate to local count
        animateCounter(this.statHits, localHits, 1000);
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