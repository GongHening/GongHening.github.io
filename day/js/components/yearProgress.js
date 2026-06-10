/**
 * Year Progress Ring Component
 * Displays a circular progress ring showing how far the current year has progressed.
 */

const YearProgress = {
    /** Cached DOM elements */
    els: {},

    /** Animation state */
    animating: false,

    /**
     * Initialize the year progress ring component.
     */
    init() {
        this.cacheElements();
        if (!this.els.container) return;

        this.render();
        this.startAutoUpdate();
    },

    /**
     * Cache DOM elements used by this component.
     */
    cacheElements() {
        this.els = {
            container: document.getElementById('yearProgress'),
            ring:     document.getElementById('ypRing'),
            dayNum:   document.getElementById('ypDayNum'),
            pctText:  document.getElementById('ypPctText'),
            yearText: document.getElementById('ypYearText'),
            dayLabel: document.getElementById('ypDayLabel'),
        };
    },

    /* ------------------------------------------------------------------ */
    /*  Date helpers                                                       */
    /* ------------------------------------------------------------------ */

    /**
     * Return the 1-based day-of-year for the given date.
     * @param {Date} [date]
     * @returns {number}
     */
    getDayOfYear(date) {
        const d = date || new Date();
        const start = new Date(d.getFullYear(), 0, 0);
        const diff  = d - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    },

    /**
     * Whether the given year is a leap year.
     * @param {number} year
     * @returns {boolean}
     */
    isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    },

    /**
     * Total days in the given year.
     * @param {number} year
     * @returns {number}
     */
    daysInYear(year) {
        return this.isLeapYear(year) ? 366 : 365;
    },

    /* ------------------------------------------------------------------ */
    /*  Rendering                                                          */
    /* ------------------------------------------------------------------ */

    /**
     * Render / update the progress ring with current date data.
     */
    render() {
        const now        = new Date();
        const year       = now.getFullYear();
        const day        = this.getDayOfYear(now);
        const totalDays  = this.daysInYear(year);
        const pct        = ((day / totalDays) * 100);
        const pctDisplay = pct.toFixed(1);

        // Update text elements
        if (this.els.dayNum)   this.els.dayNum.textContent  = day;
        if (this.els.pctText)  this.els.pctText.textContent  = pctDisplay + '%';
        if (this.els.yearText) this.els.yearText.textContent  = year;
        if (this.els.dayLabel) this.els.dayLabel.textContent  = '第' + day + '天';

        // Animate the SVG ring
        this.animateRing(pct);
    },

    /**
     * Animate the SVG circle from 0 to the target percentage.
     * @param {number} pct  Target percentage (0-100)
     */
    animateRing(pct) {
        const circle = this.els.ring;
        if (!circle) return;

        const radius   = parseFloat(circle.getAttribute('r'));
        const circum   = 2 * Math.PI * radius;

        // Set up initial state
        circle.style.strokeDasharray  = circum;
        circle.style.strokeDashoffset = circum;

        // Force reflow so the transition starts from 0
        // eslint-disable-next-line no-unused-expressions
        circle.getBoundingClientRect();

        // Animate to target
        const offset = circum - (pct / 100) * circum;
        circle.style.strokeDashoffset = offset;
    },

    /* ------------------------------------------------------------------ */
    /*  Auto-update                                                        */
    /* ------------------------------------------------------------------ */

    /**
     * Schedule a re-render at midnight so the ring updates across day boundaries.
     */
    startAutoUpdate() {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const msUntilMidnight = tomorrow - now;

        setTimeout(() => {
            this.render();
            // After the first midnight tick, re-check every 24 hours
            this._interval = setInterval(() => this.render(), 24 * 60 * 60 * 1000);
        }, msUntilMidnight + 1000); // +1s buffer
    },
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = YearProgress;
}
