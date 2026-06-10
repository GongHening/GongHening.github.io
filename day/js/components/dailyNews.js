/**
 * Daily News Component
 * Displays daily AI/tech news from a static JSON file
 * Updated daily via GitHub Actions
 */

const DailyNews = {
    STORAGE_KEY: 'day_news_cache',

    /**
     * Category configuration with colors matching DOMAINS palette
     */
    CATEGORIES: {
        llm: { name: '大语言模型', color: '#6366f1' },
        cv: { name: '计算机视觉', color: '#10b981' },
        nlp: { name: '自然语言处理', color: '#06b6d4' },
        research: { name: '前沿研究', color: '#8b5cf6' },
        industry: { name: '产业动态', color: '#f59e0b' },
        policy: { name: '政策法规', color: '#ef4444' },
        robotics: { name: '机器人', color: '#f97316' },
        multimodal: { name: '多模态', color: '#ec4899' },
        safety: { name: 'AI 安全', color: '#14b8a6' },
        infra: { name: '基础设施', color: '#64748b' },
        general: { name: '综合科技', color: '#3b82f6' }
    },

    /**
     * Initialize the daily news component
     */
    init() {
        this.container = document.getElementById('dailyNews');
        if (!this.container) return;
        this.render();
    },

    /**
     * Get today's date string (YYYY-MM-DD)
     */
    getToday() {
        return new Date().toISOString().slice(0, 10);
    },

    /**
     * Format relative time (e.g., "2小时前", "3天前")
     */
    formatRelativeTime(dateString) {
        const now = new Date();
        const published = new Date(dateString);
        const diffMs = now - published;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return '刚刚';
        if (diffMins < 60) return `${diffMins}分钟前`;
        if (diffHours < 24) return `${diffHours}小时前`;
        if (diffDays < 7) return `${diffDays}天前`;
        return published.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
    },

    /**
     * Format date for header subtitle
     */
    formatDateHeader() {
        const now = new Date();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        const weekday = weekdays[now.getDay()];
        return `${month}月${day}日 · 周${weekday}`;
    },

    /**
     * Get category info with fallback
     */
    getCategoryInfo(categoryId) {
        return this.CATEGORIES[categoryId] || this.CATEGORIES.general;
    },

    /**
     * Render the news section
     */
    async render() {
        // Try localStorage cache first (instant)
        const cached = Storage.get(this.STORAGE_KEY);
        if (cached && cached.date === this.getToday()) {
            this.buildHTML(cached);
            return;
        }

        // Show skeleton loading
        this.showSkeleton();

        // Fetch the static JSON file
        try {
            const response = await fetch('/day/data/news.json?v=' + this.getToday());
            if (!response.ok) throw new Error('News fetch failed');
            const data = await response.json();

            // Cache locally
            Storage.set(this.STORAGE_KEY, data);

            // Render
            this.buildHTML(data);
        } catch (error) {
            console.warn('Failed to load news:', error);
            // Graceful degradation: show cached data even if stale
            if (cached) {
                this.buildHTML(cached, true);
            } else {
                this.showFallback();
            }
        }
    },

    /**
     * Build and render the HTML content
     */
    buildHTML(data, isStale = false) {
        if (!data || !data.items || data.items.length === 0) {
            this.showFallback();
            return;
        }

        const staleBadge = isStale
            ? '<span class="news-stale-badge">数据可能不是最新</span>'
            : '';

        const itemsHTML = data.items.map((item, index) => {
            const cat = this.getCategoryInfo(item.category);
            const relativeTime = this.formatRelativeTime(item.published);

            return `
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="news-item" style="--delay: ${index * 0.08}s">
                    <div class="news-item-header">
                        <span class="news-category-badge" style="--badge-color: ${cat.color}">${cat.name}</span>
                        <span class="news-item-time">${relativeTime}</span>
                    </div>
                    <h4 class="news-item-title">${item.title}</h4>
                    <p class="news-item-summary">${item.summary}</p>
                    <div class="news-item-meta">
                        <span class="news-item-source">${item.source}</span>
                        <span class="news-item-dot">·</span>
                        <span class="news-item-readtime">${item.read_time} 分钟阅读</span>
                    </div>
                </a>
            `;
        }).join('');

        this.container.innerHTML = `
            <div class="section-divider"></div>
            <div class="module-header">
                <div class="module-header-icon-wrap">
                    <span class="module-header-icon">📰</span>
                </div>
                <div class="module-header-text">
                    <h3 class="module-title">AI 每日快报</h3>
                    <span class="module-subtitle">${this.formatDateHeader()} · 今日精选 ${data.items.length} 条 ${staleBadge}</span>
                </div>
            </div>
            <div class="news-card">
                ${itemsHTML}
            </div>
        `;

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
     * Show skeleton loading state
     */
    showSkeleton() {
        const skeletonItems = Array.from({ length: 5 }, (_, i) => `
            <div class="news-item news-skeleton" style="--delay: ${i * 0.08}s">
                <div class="news-item-header">
                    <div class="skeleton-badge"></div>
                    <div class="skeleton-time"></div>
                </div>
                <div class="skeleton-title"></div>
                <div class="skeleton-summary"></div>
                <div class="news-item-meta">
                    <div class="skeleton-source"></div>
                </div>
            </div>
        `).join('');

        this.container.innerHTML = `
            <div class="section-divider"></div>
            <div class="module-header">
                <div class="module-header-icon-wrap">
                    <span class="module-header-icon">📰</span>
                </div>
                <div class="module-header-text">
                    <h3 class="module-title">AI 每日快报</h3>
                    <span class="module-subtitle">${this.formatDateHeader()} · 正在加载...</span>
                </div>
            </div>
            <div class="news-card">
                ${skeletonItems}
            </div>
        `;
    },

    /**
     * Show fallback when no data available
     */
    showFallback() {
        this.container.innerHTML = `
            <div class="section-divider"></div>
            <div class="module-header">
                <div class="module-header-icon-wrap">
                    <span class="module-header-icon">📰</span>
                </div>
                <div class="module-header-text">
                    <h3 class="module-title">AI 每日快报</h3>
                    <span class="module-subtitle">${this.formatDateHeader()}</span>
                </div>
            </div>
            <div class="news-card news-fallback">
                <div class="news-fallback-icon">📡</div>
                <p class="news-fallback-text">新闻暂时无法加载</p>
                <button class="news-fallback-retry" onclick="DailyNews.render()">重试</button>
            </div>
        `;
    }
};
