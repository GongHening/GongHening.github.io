/**
 * History Today Component
 * Displays historical events that happened on today's date.
 * Uses hardcode data indexed by month-day.
 */

const HistoryToday = (() => {

    /* ------------------------------------------------------------------ */
    /*  Category Colors                                                     */
    /* ------------------------------------------------------------------ */

    const CATEGORY_CONFIG = {
        '科技': { color: '#0071e3', bg: 'rgba(0,113,227,0.1)', icon: '💻' },
        'AI':   { color: '#af52de', bg: 'rgba(175,82,222,0.1)', icon: '🤖' },
        '科学': { color: '#34c759', bg: 'rgba(52,199,89,0.1)',  icon: '🔬' },
        '政治': { color: '#ff453a', bg: 'rgba(255,69,58,0.1)',  icon: '🏛' },
        '文化': { color: '#ff9f0a', bg: 'rgba(255,159,10,0.1)', icon: '🎨' },
        '航天': { color: '#5856d6', bg: 'rgba(88,86,214,0.1)',  icon: '🚀' },
        '体育': { color: '#30d158', bg: 'rgba(48,209,88,0.1)',  icon: '⚽' },
        '社会': { color: '#64d2ff', bg: 'rgba(100,210,255,0.1)',icon: '🌍' },
    };

    /* ------------------------------------------------------------------ */
    /*  Helpers                                                             */
    /* ------------------------------------------------------------------ */

    /**
     * Get today's date key in MM-DD format.
     */
    function _getDateKey() {
        const now = new Date();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        return `${mm}-${dd}`;
    }

    /**
     * Get formatted date string for display.
     */
    function _getDisplayDate() {
        const now = new Date();
        const m = now.getMonth() + 1;
        const d = now.getDate();
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        const w = weekdays[now.getDay()];
        return `${m}月${d}日 星期${w}`;
    }

    /**
     * Calculate how many years ago an event happened.
     */
    function _yearsAgo(eventYear) {
        const currentYear = new Date().getFullYear();
        return currentYear - eventYear;
    }

    /**
     * Get config for a category, with fallback.
     */
    function _getCatConfig(cat) {
        return CATEGORY_CONFIG[cat] || { color: '#86868b', bg: 'rgba(134,134,139,0.1)', icon: '📌' };
    }

    /* ------------------------------------------------------------------ */
    /*  Rendering                                                           */
    /* ------------------------------------------------------------------ */

    /**
     * Build HTML for a single event card.
     */
    function _eventCardHTML(event, index) {
        const cfg = _getCatConfig(event.category);
        const years = _yearsAgo(event.year);
        const delay = index * 80;

        return `
            <div class="ht-card" style="animation-delay: ${delay}ms">
                <div class="ht-card-year" style="--ht-year-color: ${cfg.color}; background: ${cfg.bg}">
                    <span class="ht-year-num">${event.year}</span>
                    <span class="ht-year-ago">${years}年前</span>
                </div>
                <div class="ht-card-body">
                    <p class="ht-card-text">${event.text}</p>
                    <span class="ht-card-tag" style="--ht-tag-color: ${cfg.color}; background: ${cfg.bg}">
                        ${cfg.icon} ${event.category}
                    </span>
                </div>
            </div>`;
    }

    /**
     * Build the full component HTML.
     */
    function _buildHTML(container, dateKey) {
        const events = HistoryTodayData[dateKey];
        const displayDate = _getDisplayDate();

        if (!events || events.length === 0) {
            // Fallback: try to show a random date's events
            const fallbackKey = Object.keys(HistoryTodayData)[0];
            const fallbackEvents = HistoryTodayData[fallbackKey];
            const sorted = fallbackEvents.sort((a, b) => b.year - a.year);

            container.innerHTML = `
                <div class="ht-header">
                    <div class="ht-header-left">
                        <span class="ht-header-icon">📜</span>
                        <div class="ht-header-text">
                            <h3 class="ht-title">历史上的今天</h3>
                            <span class="ht-date">${displayDate}</span>
                        </div>
                    </div>
                    <span class="ht-hint">每天了解一段历史</span>
                </div>
                <div class="ht-grid">
                    ${sorted.map((e, i) => _eventCardHTML(e, i)).join('')}
                </div>`;
            return;
        }

        // Sort by year descending (most recent first)
        const sorted = events.sort((a, b) => b.year - a.year);

        container.innerHTML = `
            <div class="ht-header">
                <div class="ht-header-left">
                    <span class="ht-header-icon">📜</span>
                    <div class="ht-header-text">
                        <h3 class="ht-title">历史上的今天</h3>
                        <span class="ht-date">${displayDate}</span>
                    </div>
                </div>
                <span class="ht-hint">每天了解一段历史</span>
            </div>
            <div class="ht-grid">
                ${sorted.map((e, i) => _eventCardHTML(e, i)).join('')}
            </div>`;
    }

    /* ------------------------------------------------------------------ */
    /*  Animation                                                           */
    /* ------------------------------------------------------------------ */

    /**
     * Set up scroll reveal animation via IntersectionObserver.
     */
    function _setupRevealAnimation(container) {
        const cards = container.querySelectorAll('.ht-card');
        if (!cards.length) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('ht-card--visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );
            cards.forEach(card => observer.observe(card));
        } else {
            // Fallback: show all immediately
            cards.forEach(card => card.classList.add('ht-card--visible'));
        }
    }

    /* ------------------------------------------------------------------ */
    /*  Public API                                                          */
    /* ------------------------------------------------------------------ */

    /**
     * Initialize the History Today component.
     * Call once after DOM is ready.
     */
    function init() {
        const container = document.getElementById('historyToday');
        if (!container) return;

        const dateKey = _getDateKey();
        _buildHTML(container, dateKey);
        _setupRevealAnimation(container);
    }

    return { init };
})();
