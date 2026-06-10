/**
 * Life Progress Component
 * Calculates and visualizes how much of your life has passed.
 * Uses localStorage to remember birthday across visits.
 */

const LifeProgress = {
    STORAGE_KEY: 'day_birthday',
    LIFE_EXPECTANCY: 80, // years

    /**
     * Initialize the Life Progress component
     */
    init() {
        this.container = document.getElementById('lifeProgress');
        if (!this.container) return;

        const birthday = Storage.get(this.STORAGE_KEY);
        if (birthday) {
            this.renderProgress(birthday);
        } else {
            this.renderInput();
        }
    },

    /**
     * Render the birthday input interface
     */
    renderInput() {
        this.container.innerHTML = `
            <div class="lp-card">
                <div class="lp-card-header">
                    <div class="lp-card-icon-wrap">
                        <span class="lp-card-icon">⏳</span>
                    </div>
                    <div>
                        <h3 class="lp-card-title">生命进度</h3>
                        <p class="lp-card-desc">输入你的生日，看看生命的刻度</p>
                    </div>
                </div>
                <div class="lp-input-body">
                    <label class="lp-label" for="lpBirthdayInput">选择你的生日</label>
                    <input type="date" id="lpBirthdayInput" class="lp-date-input" max="${this._todayStr()}">
                    <button class="btn btn-primary lp-submit-btn" id="lpSubmitBtn">查看我的生命进度</button>
                </div>
            </div>
        `;

        const btn = document.getElementById('lpSubmitBtn');
        const input = document.getElementById('lpBirthdayInput');

        btn.addEventListener('click', () => this._handleSubmit(input));
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this._handleSubmit(input);
        });
    },

    /**
     * Render the life progress display
     * @param {string} birthday - ISO date string
     */
    renderProgress(birthday) {
        const data = this._calculate(birthday);
        if (!data) {
            Storage.remove(this.STORAGE_KEY);
            this.renderInput();
            return;
        }

        const circumference = 2 * Math.PI * 54; // r=54

        this.container.innerHTML = `
            <div class="lp-card lp-card--result">
                <div class="lp-card-header">
                    <div class="lp-card-icon-wrap">
                        <span class="lp-card-icon">⏳</span>
                    </div>
                    <div>
                        <h3 class="lp-card-title">生命进度</h3>
                        <p class="lp-card-subtitle">生于 ${this._formatDate(birthday)} · 假设活到 ${this.LIFE_EXPECTANCY} 岁</p>
                    </div>
                    <button class="lp-edit-btn" id="lpEditBtn" title="修改生日">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                    </button>
                </div>
                <div class="lp-result-body">
                    <div class="lp-ring-wrap">
                        <svg class="lp-ring-svg" viewBox="0 0 120 120">
                            <defs>
                                <linearGradient id="lpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#0071e3"/>
                                    <stop offset="50%" style="stop-color:#5856d6"/>
                                    <stop offset="100%" style="stop-color:#af52de"/>
                                </linearGradient>
                                <linearGradient id="lpGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#0a84ff"/>
                                    <stop offset="50%" style="stop-color:#5e5ce6"/>
                                    <stop offset="100%" style="stop-color:#bf5af2"/>
                                </linearGradient>
                            </defs>
                            <circle class="lp-ring-track" cx="60" cy="60" r="54" />
                            <circle class="lp-ring-fill" id="lpRingFill" cx="60" cy="60" r="54"
                                stroke-dasharray="${circumference}"
                                stroke-dashoffset="${circumference}" />
                        </svg>
                        <div class="lp-ring-center">
                            <div class="lp-ring-percent" id="lpPercent">0</div>
                            <div class="lp-ring-label">已完成</div>
                        </div>
                    </div>
                    <div class="lp-stats">
                        <div class="lp-stat-item">
                            <div class="lp-stat-value" id="lpDays">0</div>
                            <div class="lp-stat-label">已度过天数</div>
                        </div>
                        <div class="lp-stat-item">
                            <div class="lp-stat-value" id="lpHours">0</div>
                            <div class="lp-stat-label">已度过小时</div>
                        </div>
                        <div class="lp-stat-item">
                            <div class="lp-stat-value" id="lpRemaining">0</div>
                            <div class="lp-stat-label">剩余天数</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Bind edit button
        document.getElementById('lpEditBtn').addEventListener('click', () => {
            Storage.remove(this.STORAGE_KEY);
            this.renderInput();
        });

        // Animate after a short delay for DOM to settle
        requestAnimationFrame(() => {
            this._animateRing(data.percent, circumference);
            this._animateCounters(data);
        });
    },

    /**
     * Handle birthday submission
     * @param {HTMLInputElement} input
     */
    _handleSubmit(input) {
        const value = input.value;
        if (!value) {
            input.classList.add('lp-input-error');
            setTimeout(() => input.classList.remove('lp-input-error'), 600);
            return;
        }

        const birthday = new Date(value + 'T00:00:00');
        const now = new Date();
        if (birthday >= now) {
            input.classList.add('lp-input-error');
            setTimeout(() => input.classList.remove('lp-input-error'), 600);
            return;
        }

        Storage.set(this.STORAGE_KEY, value);
        this.renderProgress(value);
    },

    /**
     * Calculate life progress data
     * @param {string} birthday - ISO date string (YYYY-MM-DD)
     * @returns {Object|null} Calculation results
     */
    _calculate(birthday) {
        const birthDate = new Date(birthday + 'T00:00:00');
        const now = new Date();
        const totalMs = now - birthDate;

        if (totalMs <= 0) return null;

        const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(totalMs / (1000 * 60 * 60));
        const lifeExpectancyDays = Math.floor(this.LIFE_EXPECTANCY * 365.25);
        const remainingDays = Math.max(0, lifeExpectancyDays - totalDays);
        const percent = Math.min(100, (totalDays / lifeExpectancyDays) * 100);

        return {
            totalDays,
            totalHours,
            remainingDays,
            percent
        };
    },

    /**
     * Animate the SVG ring
     * @param {number} percent - Progress percentage
     * @param {number} circumference - Ring circumference
     */
    _animateRing(percent, circumference) {
        const ring = document.getElementById('lpRingFill');
        if (!ring) return;

        const targetOffset = circumference - (circumference * percent / 100);

        // Trigger CSS transition by setting the value after a frame
        requestAnimationFrame(() => {
            ring.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
            ring.style.strokeDashoffset = targetOffset;
        });
    },

    /**
     * Animate counter numbers
     * @param {Object} data - Calculated life data
     */
    _animateCounters(data) {
        const daysEl = document.getElementById('lpDays');
        const hoursEl = document.getElementById('lpHours');
        const remainingEl = document.getElementById('lpRemaining');
        const percentEl = document.getElementById('lpPercent');

        if (daysEl) animateCounter(daysEl, data.totalDays, 1800);
        if (hoursEl) animateCounter(hoursEl, data.totalHours, 1800);
        if (remainingEl) animateCounter(remainingEl, data.remainingDays, 1800);
        if (percentEl) animateCounter(percentEl, Math.round(data.percent * 10) / 10, 1800, '%');
    },

    /**
     * Get today's date string
     * @returns {string} YYYY-MM-DD
     */
    _todayStr() {
        const d = new Date();
        return d.getFullYear() + '-' +
            String(d.getMonth() + 1).padStart(2, '0') + '-' +
            String(d.getDate()).padStart(2, '0');
    },

    /**
     * Format date for display
     * @param {string} dateStr - ISO date string
     * @returns {string} Formatted date
     */
    _formatDate(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        const y = d.getFullYear();
        const m = d.getMonth() + 1;
        const day = d.getDate();
        return `${y} 年 ${m} 月 ${day} 日`;
    }
};
