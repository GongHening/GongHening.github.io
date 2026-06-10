/**
 * Daily Suggestion Component
 * Recommends small activities each day to enrich the user's life.
 * Recommendations are deterministic per day (date-seeded PRNG).
 */

const DailySuggestion = {

    /* ------------------------------------------------------------------ */
    /*  Recommendation Data                                               */
    /* ------------------------------------------------------------------ */

    categories: {
        exercise: {
            emoji: '🧘',
            label: '运动',
            color: '#34c759',
            items: [
                '做 10 分钟晨间拉伸，唤醒身体',
                '步行 20 分钟，感受呼吸节奏',
                '尝试 5 分钟平板支撑挑战',
                '练习 15 分钟瑜伽基础动作',
                '跳绳 10 分钟，提升心肺活力',
                '做一组深蹲和弓步，激活下半身',
                '午休后散步 15 分钟，清醒头脑',
                '跟着视频做 10 分钟 HIIT',
                '练习 5 分钟冥想呼吸法',
                '做 20 个俯卧撑，感受力量',
                '骑自行车或步行上班 30 分钟',
                '练习太极拳或八段锦 15 分钟',
            ],
        },
        study: {
            emoji: '📚',
            label: '学习',
            color: '#0071e3',
            items: [
                '阅读一篇 AI 领域的最新论文摘要',
                '学习一个新的 Python 技巧或库',
                '观看一节感兴趣的在线课程',
                '整理笔记，复习上周学的知识点',
                '阅读 20 分钟技术书籍',
                '尝试用新学的知识写一个小 demo',
                '阅读一篇高质量的技术博客',
                '学习一个设计模式或算法',
                '了解一个你从未接触过的 AI 工具',
                '花 15 分钟学习一个新英语单词列表',
                '阅读一篇关于产品思维的文章',
                '听一集科技播客',
            ],
        },
        rest: {
            emoji: '☕',
            label: '休息',
            color: '#af52de',
            items: [
                '放下手机，闭目养神 10 分钟',
                '泡一杯喜欢的茶，慢慢品味',
                '听 15 分钟轻音乐或自然白噪音',
                '做一次 20 分钟的午间小憩',
                '到窗边看看远处的风景，放松眼睛',
                '做 5 分钟渐进式肌肉放松练习',
                '洗一个热水澡，放松身心',
                '花 10 分钟整理桌面，营造清爽环境',
                '练习 4-7-8 呼吸法，缓解压力',
                '给自己 15 分钟的「什么都不做」时间',
                '点一支香薰蜡烛，享受安静时光',
                '早睡 30 分钟，让身体好好恢复',
            ],
        },
        social: {
            emoji: '👥',
            label: '社交',
            color: '#ff9f0a',
            items: [
                '给一个好久没联系的朋友发条消息',
                '和家人一起吃顿饭，聊聊近况',
                '在技术社区回答一个新手的问题',
                '给同事的项目提一个真诚的建议',
                '约朋友一起散步或运动',
                '分享一篇你觉得有价值的文章给朋友',
                '给帮助过你的人发一句感谢的话',
                '参加一个线上或线下的技术 Meetup',
                '和朋友一起玩一个桌游或合作游戏',
                '写一段鼓励的话发到社交平台',
                '主动约一位前辈聊聊职业发展',
                '给家人打一个视频电话',
            ],
        },
        creative: {
            emoji: '🎨',
            label: '创意',
            color: '#ff453a',
            items: [
                '用 AI 工具生成一幅创意图片',
                '写 200 字的微小说或随笔',
                '画一幅简单的速写或涂鸦',
                '尝试用 Prompt Engineering 设计一个有趣场景',
                '拍 3 张你觉得美的照片',
                '整理并美化你的个人项目 README',
                '设计一个 logo 或图标的概念稿',
                '写一首小诗或改编一首歌词',
                '做一个有趣的 CSS 动画效果',
                '为你的桌面或手机换一张新壁纸',
                '用 AI 生成一首短曲或旋律',
                '录制一段 30 秒的创意短视频',
            ],
        },
        health: {
            emoji: '🥗',
            label: '健康',
            color: '#30d158',
            items: [
                '今天喝满 8 杯水，保持身体水分',
                '准备一份包含蔬菜的健康午餐',
                '减少 1 小时屏幕时间，保护眼睛',
                '吃一份新鲜水果，补充维生素',
                '站立办公或活动 10 分钟',
                '晚上 10 点前放下所有电子设备',
                '准备一份健康的下午茶代替零食',
                '做一次 10 分钟的眼保健操',
                '尝试一道新的健康食谱',
                '记录今天的饮食，保持健康意识',
                '今天不吃外卖，自己做一顿饭',
                '散步时晒 15 分钟太阳，补充维 D',
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Seeded PRNG (Mulberry32)                                          */
    /* ------------------------------------------------------------------ */

    _mulberry32(seed) {
        return function () {
            seed |= 0;
            seed = (seed + 0x6d2b79f5) | 0;
            let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    },

    /**
     * Generate a deterministic integer seed from today's date.
     */
    _dateSeed() {
        const d = new Date();
        const str = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
        }
        return hash;
    },

    /**
     * Pick N distinct items from an array using the given PRNG.
     */
    _pickN(arr, n, rng) {
        const pool = arr.slice();
        const picked = [];
        for (let i = 0; i < n && pool.length; i++) {
            const idx = Math.floor(rng() * pool.length);
            picked.push(pool.splice(idx, 1)[0]);
        }
        return picked;
    },

    /**
     * Pick N distinct category keys.
     */
    _pickCategories(n, rng) {
        const keys = Object.keys(this.categories);
        return this._pickN(keys, n, rng);
    },

    /* ------------------------------------------------------------------ */
    /*  Rendering                                                         */
    /* ------------------------------------------------------------------ */

    /**
     * Build the card HTML for a single suggestion.
     */
    _cardHTML(cat, text) {
        const c = this.categories[cat];
        return `
            <div class="ds-card" style="--ds-accent:${c.color}">
                <div class="ds-card-emoji">${c.emoji}</div>
                <div class="ds-card-body">
                    <span class="ds-card-tag">${c.label}</span>
                    <p class="ds-card-text">${text}</p>
                </div>
            </div>`;
    },

    /**
     * Render suggestions into the container.
     */
    _render(suggestions) {
        const container = document.getElementById('dailySuggestion');
        if (!container) return;

        // Build date label
        const now = new Date();
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        const dateStr = `${now.getMonth() + 1}月${now.getDate()}日 周${weekdays[now.getDay()]}`;

        container.innerHTML = `
            <div class="section-divider"></div>
            <div class="module-header">
                <div class="module-header-icon-wrap">
                    <span class="module-header-icon">✨</span>
                </div>
                <div class="module-header-text">
                    <h3 class="module-title">今日推荐</h3>
                    <span class="module-subtitle">${dateStr} · 每天为你准备不同的小确幸</span>
                </div>
            </div>
            <div class="ds-grid">
                ${suggestions.map(s => this._cardHTML(s.category, s.text)).join('')}
            </div>`;
    },

    /* ------------------------------------------------------------------ */
    /*  Public API                                                        */
    /* ------------------------------------------------------------------ */

    /**
     * Initialise the daily suggestion component.
     * Call once after DOM is ready.
     */
    init() {
        const seed = this._dateSeed();
        const rng = this._mulberry32(seed);

        // Pick 3-4 categories (deterministic per day)
        const count = 3 + Math.floor(rng() * 2); // 3 or 4
        const cats = this._pickCategories(count, rng);

        const suggestions = cats.map(cat => {
            const item = this._pickN(this.categories[cat].items, 1, rng)[0];
            return { category: cat, text: item };
        });

        this._render(suggestions);
    },
};
