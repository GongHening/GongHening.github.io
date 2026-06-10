/**
 * Learning Calendar Component
 * GitHub-style contribution heatmap showing daily learning activity
 */

const LearningCalendar = {
    /**
     * Color levels for heatmap squares
     */
    LEVELS: [
        { max: 0,   color: 'var(--lc-empty)',    label: '无' },
        { max: 30,  color: 'var(--lc-level-1)',   label: '1-30 分钟' },
        { max: 60,  color: 'var(--lc-level-2)',   label: '31-60 分钟' },
        { max: 120, color: 'var(--lc-level-3)',   label: '61-120 分钟' },
        { max: Infinity, color: 'var(--lc-level-4)', label: '120+ 分钟' }
    ],

    /**
     * Month labels in Chinese
     */
    MONTHS: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

    /**
     * Day labels (Mon, Wed, Fri)
     */
    DAY_LABELS: ['一', '三', '五'],

    /**
     * Tooltip element reference
     */
    tooltip: null,

    /**
     * Initialize the calendar component
     */
    init() {
        this.container = document.getElementById('learningCalendar');
        if (!this.container) return;
        this.render();
    },

    /**
     * Get the color level for a given number of minutes
     * @param {number} minutes - Minutes of learning
     * @returns {string} CSS color value
     */
    getColor(minutes) {
        if (minutes <= 0) return this.LEVELS[0].color;
        if (minutes <= 30) return this.LEVELS[1].color;
        if (minutes <= 60) return this.LEVELS[2].color;
        if (minutes <= 120) return this.LEVELS[3].color;
        return this.LEVELS[4].color;
    },

    /**
     * Format a date string for display
     * @param {string} dateStr - YYYY-MM-DD
     * @returns {string} Chinese formatted date
     */
    formatDate(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        const m = d.getMonth() + 1;
        const day = d.getDate();
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        const wd = weekdays[d.getDay()];
        return `${m}月${day}日 周${wd}`;
    },

    /**
     * Get the number of days in a year
     * @param {number} year
     * @returns {number}
     */
    getDaysInYear(year) {
        return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 366 : 365;
    },

    /**
     * Build the grid data: array of weeks, each week is array of 7 days
     * @param {Object} yearData - Map of date strings to minutes
     * @param {number} year
     * @returns {Array} Grid data
     */
    buildGrid(yearData, year) {
        // Jan 1 of the year
        const jan1 = new Date(year, 0, 1);
        // Day of week for Jan 1 (0=Sun, adjust to Mon-based: 0=Mon)
        let startDow = jan1.getDay(); // 0=Sun
        startDow = startDow === 0 ? 6 : startDow - 1; // Convert to Mon=0

        const totalDays = this.getDaysInYear(year);
        const grid = [];
        let week = [];

        // Pad the first week with empty cells
        for (let i = 0; i < startDow; i++) {
            week.push(null); // empty cell
        }

        for (let dayOfYear = 0; dayOfYear < totalDays; dayOfYear++) {
            const d = new Date(year, 0, 1 + dayOfYear);
            const dateStr = d.toISOString().slice(0, 10);
            const minutes = yearData[dateStr] || 0;
            const isFuture = d > new Date();

            week.push({ date: dateStr, minutes, isFuture });

            if (week.length === 7) {
                grid.push(week);
                week = [];
            }
        }

        // Pad the last week
        if (week.length > 0) {
            while (week.length < 7) {
                week.push(null);
            }
            grid.push(week);
        }

        return grid;
    },

    /**
     * Get month label positions (which column each month starts at)
     * @param {number} year
     * @returns {Array} Array of { month, col }
     */
    getMonthPositions(year) {
        const jan1 = new Date(year, 0, 1);
        let startDow = jan1.getDay();
        startDow = startDow === 0 ? 6 : startDow - 1;

        const positions = [];
        for (let m = 0; m < 12; m++) {
            const firstOfMonth = new Date(year, m, 1);
            const dayOfYear = Math.floor((firstOfMonth - jan1) / 86400000);
            const col = Math.floor((dayOfYear + startDow) / 7);
            positions.push({ month: m, col });
        }
        return positions;
    },

    /**
     * Render the calendar
     */
    render() {
        const year = new Date().getFullYear();
        const yearData = LearningLogManager.getYearData();
        const stats = LearningLogManager.getTotalStats();
        const grid = this.buildGrid(yearData, year);
        const monthPositions = this.getMonthPositions(year);

        // Build month labels row
        let monthLabelsHtml = '<div class="lc-months-row"><div class="lc-months-spacer"></div>';
        monthPositions.forEach(mp => {
            monthLabelsHtml += `<div class="lc-month-label" style="grid-column:${mp.col + 1}">${this.MONTHS[mp.month]}</div>`;
        });
        monthLabelsHtml += '</div>';

        // Build day labels + grid rows
        let gridHtml = '';
        for (let row = 0; row < 7; row++) {
            const dayLabel = (row === 0 || row === 2 || row === 4)
                ? `<div class="lc-day-label">${this.DAY_LABELS[row === 0 ? 0 : row === 2 ? 1 : 2]}</div>`
                : '<div class="lc-day-label"></div>';

            let cellsHtml = '';
            for (let col = 0; col < grid.length; col++) {
                const cell = grid[col][row];
                if (cell === null) {
                    cellsHtml += '<div class="lc-cell lc-cell--empty"></div>';
                } else if (cell.isFuture) {
                    cellsHtml += `<div class="lc-cell lc-cell--future" data-date="${cell.date}" data-minutes="0"></div>`;
                } else {
                    const color = this.getColor(cell.minutes);
                    cellsHtml += `<div class="lc-cell" style="background:${color}" data-date="${cell.date}" data-minutes="${cell.minutes}"></div>`;
                }
            }
            gridHtml += `<div class="lc-grid-row">${dayLabel}<div class="lc-cells-row">${cellsHtml}</div></div>`;
        }

        // Build legend
        let legendHtml = '<div class="lc-legend"><span class="lc-legend-label">少</span>';
        this.LEVELS.forEach(level => {
            legendHtml += `<div class="lc-legend-cell" style="background:${level.color}" title="${level.label}"></div>`;
        });
        legendHtml += '<span class="lc-legend-label">多</span></div>';

        // Format hours
        const totalHours = (stats.totalMinutes / 60).toFixed(1);
        const monthHours = (stats.currentMonthMinutes / 60).toFixed(1);

        this.container.innerHTML = `
            <div class="section-divider"></div>
            <div class="module-header">
                <div class="module-header-icon-wrap">
                    <span class="module-header-icon">📅</span>
                </div>
                <div class="module-header-text">
                    <h3 class="module-title">学习日历</h3>
                    <span class="module-subtitle">${year}年 · 学习活动热力图</span>
                </div>
            </div>
            <div class="lc-card">
                <div class="lc-card-body">
                    <div class="lc-calendar-wrap">
                        ${monthLabelsHtml}
                        <div class="lc-grid">
                            ${gridHtml}
                        </div>
                        ${legendHtml}
                    </div>
                    <div class="lc-stats-row">
                        <div class="lc-stat">
                            <span class="lc-stat-value">${stats.longestStreak}</span>
                            <span class="lc-stat-label">最长连续天数</span>
                        </div>
                        <div class="lc-stat-divider"></div>
                        <div class="lc-stat">
                            <span class="lc-stat-value">${monthHours}<span class="lc-stat-unit">小时</span></span>
                            <span class="lc-stat-label">本月学习</span>
                        </div>
                        <div class="lc-stat-divider"></div>
                        <div class="lc-stat">
                            <span class="lc-stat-value">${stats.totalDays}<span class="lc-stat-unit">天</span></span>
                            <span class="lc-stat-label">总计学习</span>
                        </div>
                        <div class="lc-stat-divider"></div>
                        <div class="lc-stat">
                            <span class="lc-stat-value">${totalHours}<span class="lc-stat-unit">小时</span></span>
                            <span class="lc-stat-label">总学习时长</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Set up tooltip
        this.initTooltip();

        // Trigger entrance animation
        this.container.style.opacity = '0';
        this.container.style.transform = 'translateY(12px)';
        this.container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.container.style.opacity = '1';
                this.container.style.transform = 'translateY(0)';
            });
        });
    },

    /**
     * Initialize tooltip for calendar cells
     */
    initTooltip() {
        // Remove existing tooltip
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }

        // Create tooltip element
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'lc-tooltip';
        this.tooltip.style.display = 'none';
        document.body.appendChild(this.tooltip);

        const cells = this.container.querySelectorAll('.lc-cell:not(.lc-cell--empty):not(.lc-cell--future)');
        cells.forEach(cell => {
            cell.addEventListener('mouseenter', (e) => {
                const date = cell.getAttribute('data-date');
                const minutes = parseInt(cell.getAttribute('data-minutes'), 10) || 0;
                const dateFormatted = this.formatDate(date);
                const minutesText = minutes > 0 ? `${minutes} 分钟` : '无学习记录';

                this.tooltip.innerHTML = `<strong>${dateFormatted}</strong><br>${minutesText}`;
                this.tooltip.style.display = 'block';

                const rect = cell.getBoundingClientRect();
                const tipRect = this.tooltip.getBoundingClientRect();
                let left = rect.left + rect.width / 2 - tipRect.width / 2;
                let top = rect.top - tipRect.height - 8;

                // Keep tooltip in viewport
                if (left < 4) left = 4;
                if (left + tipRect.width > window.innerWidth - 4) {
                    left = window.innerWidth - tipRect.width - 4;
                }
                if (top < 4) {
                    top = rect.bottom + 8;
                }

                this.tooltip.style.left = left + 'px';
                this.tooltip.style.top = top + window.scrollY + 'px';
            });

            cell.addEventListener('mouseleave', () => {
                if (this.tooltip) this.tooltip.style.display = 'none';
            });
        });
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LearningCalendar;
}