/**
 * Course Detail Expand Panel Component
 * Shows an inline expandable detail panel below course cards
 */

const CourseDetail = {
    /** URL of the currently open detail panel */
    currentOpen: null,

    /**
     * Initialize course detail component
     */
    init() {
        // Panels are created dynamically, nothing to cache
    },

    /**
     * Toggle detail panel for a course
     * @param {string} courseUrl - Course URL (unique identifier)
     */
    toggle(courseUrl) {
        if (this.currentOpen === courseUrl) {
            this.close();
        } else {
            this.close();
            this.open(courseUrl);
        }
    },

    /**
     * Open detail panel for a course
     * @param {string} courseUrl - Course URL
     */
    open(courseUrl) {
        // Find the card element
        const card = CourseCard.getCardByUrl(courseUrl);
        if (!card) return;

        // Find course data
        const course = App.state.allCourses.find(c => c.u === courseUrl);
        if (!course) return;

        // Create and insert the panel
        const panel = document.createElement('div');
        panel.className = 'cd-panel';
        panel.dataset.url = courseUrl;
        panel.innerHTML = this.renderContent(course);

        // Insert after the card
        card.insertAdjacentElement('afterend', panel);

        // Force reflow then animate open
        panel.getBoundingClientRect();
        requestAnimationFrame(() => {
            panel.classList.add('cd-panel--open');
        });

        // Update state
        this.currentOpen = courseUrl;

        // Scroll panel into view after animation
        setTimeout(() => {
            panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 350);
    },

    /**
     * Close the currently open detail panel
     */
    close() {
        if (!this.currentOpen) return;

        const panel = document.querySelector(`.cd-panel[data-url="${CSS.escape(this.currentOpen)}"]`);
        if (panel) {
            panel.classList.remove('cd-panel--open');
            // Remove from DOM after transition
            setTimeout(() => {
                if (panel.parentNode) {
                    panel.parentNode.removeChild(panel);
                }
            }, 400);
        }

        this.currentOpen = null;
    },

    /**
     * Generate pre-requisites based on difficulty and domain
     * @param {Object} course - Course object
     * @returns {Array} Array of prerequisite strings
     */
    generatePreReqs(course) {
        const base = {
            1: ['无需前置知识，适合零基础学习者'],
            2: ['建议有 Python 编程基础', '了解基本数学概念（线性代数、概率论）'],
            3: ['需要掌握 Python 编程', '了解机器学习基础概念', '熟悉线性代数与概率统计'],
            4: ['需要扎实的机器学习基础', '熟悉深度学习框架（PyTorch / TensorFlow）', '具备较强的数学功底'],
            5: ['需要深入的深度学习研究经验', '熟悉相关领域前沿论文', '具备独立研究与实验能力']
        };

        const prereqs = [...(base[course.d] || base[1])];

        // Add domain-specific prerequisites
        const domainHints = {
            'dl': { min: 2, hint: '了解神经网络基本原理' },
            'nlp': { min: 2, hint: '熟悉文本处理基本流程' },
            'cv': { min: 2, hint: '了解图像处理基础概念' },
            'rl': { min: 3, hint: '了解马尔可夫决策过程' },
            'genai': { min: 2, hint: '了解生成模型基本概念' },
            'agents': { min: 2, hint: '了解 LLM 基本使用方式' },
            'safety': { min: 1, hint: '对 AI 伦理问题有基本认知' },
            'robotics': { min: 3, hint: '了解机器人运动学基础' },
            'speech': { min: 2, hint: '了解信号处理基础' },
            'infra': { min: 2, hint: '熟悉 Linux 命令行操作' }
        };

        const hint = domainHints[course.cat];
        if (hint && course.d >= hint.min) {
            prereqs.push(hint.hint);
        }

        return prereqs;
    },

    /**
     * Generate learning outcomes from tags and domain
     * @param {Object} course - Course object
     * @returns {Array} Array of learning outcome strings
     */
    generateOutcomes(course) {
        const outcomes = [];

        // Map common tags to learning outcomes
        const tagOutcomeMap = {
            '监督学习': '掌握监督学习算法的原理与实践',
            '无监督学习': '理解聚类、降维等无监督学习方法',
            '神经网络': '深入理解神经网络的结构与训练过程',
            'CNN': '掌握卷积神经网络的原理和实现',
            'RNN': '掌握循环神经网络及其变体（LSTM、GRU）',
            'Transformer': '深入理解 Transformer 架构及其在各领域的应用',
            'NLP': '掌握自然语言处理核心技术',
            'LLM': '理解大语言模型的训练与推理机制',
            'GPT': '了解 GPT 系列模型的架构与训练方法',
            'BERT': '掌握预训练语言模型的原理与微调技巧',
            '目标检测': '掌握主流目标检测算法（YOLO、Faster R-CNN 等）',
            '图像分割': '理解语义分割与实例分割技术',
            'GAN': '掌握生成对抗网络的原理与训练技巧',
            '扩散模型': '理解扩散模型的数学原理与生成过程',
            '强化学习': '掌握强化学习核心算法（Q-Learning、Policy Gradient 等）',
            '多智能体': '理解多智能体系统的协作与竞争机制',
            'Prompt': '掌握 Prompt Engineering 的核心技巧',
            'RAG': '理解检索增强生成的架构与实现',
            'Agent': '掌握 AI Agent 的设计与开发方法',
            'Python': '熟练使用 Python 进行 AI 开发',
            'TensorFlow': '掌握 TensorFlow 框架的使用',
            'PyTorch': '掌握 PyTorch 框架的使用',
            '入门': '建立 AI 领域的基础知识体系',
            'Andrew Ng': '跟随顶级专家系统学习 AI 核心概念',
            '学习理论': '理解机器学习的理论基础与泛化能力',
            '特征工程': '掌握数据预处理与特征提取技巧',
            '迁移学习': '理解迁移学习方法并应用于实际项目',
            '注意力机制': '深入理解注意力机制的原理与变体',
            '对齐': '理解 AI 对齐问题与解决方法',
            '红队测试': '掌握 AI 系统安全评估方法',
            'MLOps': '掌握机器学习工程化部署与运维流程',
            '分布式训练': '理解大规模分布式训练的架构与优化',
            '推理优化': '掌握模型推理加速与部署优化技术',
            '语音识别': '掌握自动语音识别系统的核心技术',
            '语音合成': '理解文本转语音技术的原理与实现',
            '运动规划': '掌握机器人运动规划算法',
            '操控': '理解机器人抓取与操控技术',
            '具身智能': '了解具身智能的最新研究进展',
            '时序分析': '掌握时间序列数据的分析与预测方法',
            '推荐系统': '理解推荐系统的架构与核心算法',
            '多模态': '理解多模态学习的融合方法',
            '对比学习': '掌握自监督对比学习方法',
            '图神经网络': '理解图神经网络的原理与应用',
            '联邦学习': '了解联邦学习的隐私保护机制',
            '知识蒸馏': '掌握模型压缩与知识蒸馏技术',
            'RLHF': '理解基于人类反馈的强化学习方法'
        };

        // Generate outcomes from tags
        course.t.forEach(tag => {
            const outcome = tagOutcomeMap[tag];
            if (outcome && outcomes.length < 4) {
                outcomes.push(outcome);
            }
        });

        // Add domain-level outcome if we have room
        const domainOutcomes = {
            'ml': '系统掌握机器学习的理论与实践方法',
            'dl': '构建深度学习的完整知识体系',
            'nlp': '掌握自然语言处理的前沿技术',
            'cv': '深入理解计算机视觉核心算法',
            'rl': '掌握强化学习从理论到实践的完整链路',
            'genai': '理解生成式 AI 的核心技术与应用',
            'agents': '掌握 AI Agent 系统的设计与开发',
            'safety': '建立 AI 安全与伦理的系统认知',
            'robotics': '理解机器人学的核心技术与前沿方向',
            'speech': '掌握语音处理的核心算法与系统',
            'infra': '掌握 AI 基础设施的工程化实践'
        };

        if (outcomes.length < 3 && domainOutcomes[course.cat]) {
            outcomes.push(domainOutcomes[course.cat]);
        }

        // Fill remaining slots with generic outcomes
        const genericOutcomes = [
            '通过实战项目巩固所学知识',
            '了解行业最佳实践与工程经验',
            '培养独立解决 AI 问题的能力'
        ];

        while (outcomes.length < 3 && genericOutcomes.length > 0) {
            outcomes.push(genericOutcomes.shift());
        }

        return outcomes.slice(0, 5);
    },

    /**
     * Get related courses from the same domain
     * @param {Object} course - Course object
     * @param {number} limit - Max number of related courses
     * @returns {Array} Related course objects
     */
    getRelatedCourses(course, limit) {
        limit = limit || 3;
        return App.state.allCourses
            .filter(c => c.cat === course.cat && c.u !== course.u)
            .sort((a, b) => Math.abs(a.d - course.d) - Math.abs(b.d - course.d))
            .slice(0, limit);
    },

    /**
     * Render related courses HTML
     * @param {Object} course - Course object
     * @returns {string} HTML string
     */
    renderRelated(course) {
        const related = this.getRelatedCourses(course, 3);
        if (related.length === 0) {
            return '<p class="cd-related-empty">暂无相关课程</p>';
        }

        return related.map(c => {
            const domain = getDomainById(c.cat);
            const domainColor = domain ? domain.color : 'var(--accent)';
            return `
                <a href="${escapeHtml(c.u)}" target="_blank" rel="noopener" class="cd-related-card" onclick="CourseCard.recordView('${escapeHtml(c.u)}')">
                    <div class="cd-related-header">
                        <span class="cd-related-domain" style="background: ${domainColor}20; color: ${domainColor};">${domain ? domain.icon : ''} ${domain ? domain.name : ''}</span>
                        <span class="cd-related-difficulty">${'●'.repeat(c.d)}${'○'.repeat(5 - c.d)}</span>
                    </div>
                    <div class="cd-related-name">${escapeHtml(c.n)}</div>
                    <div class="cd-related-meta">${escapeHtml(c.i)} · ${formatHours(c.h)}</div>
                </a>
            `;
        }).join('');
    },

    /**
     * Render the full detail panel content
     * @param {Object} course - Course object
     * @returns {string} HTML string
     */
    renderContent(course) {
        const domain = getDomainById(course.cat);
        const domainColor = domain ? domain.color : 'var(--accent)';
        const prereqs = this.generatePreReqs(course);
        const outcomes = this.generateOutcomes(course);

        return `
            <div class="cd-content">
                <div class="cd-header">
                    <span class="cd-domain-tag" style="background: ${domainColor}15; color: ${domainColor}; border-color: ${domainColor}30;">
                        ${domain ? domain.icon : ''} ${domain ? domain.name : ''}
                    </span>
                    <span class="cd-platform">${escapeHtml(course.p)}</span>
                </div>

                <div class="cd-section">
                    <h4 class="cd-section-title">📖 课程简介</h4>
                    <p class="cd-description">${escapeHtml(course.desc)}</p>
                </div>

                <div class="cd-section">
                    <h4 class="cd-section-title">📋 先修要求</h4>
                    <ul class="cd-list cd-prereqs">
                        ${prereqs.map(r => '<li>' + escapeHtml(r) + '</li>').join('')}
                    </ul>
                </div>

                <div class="cd-section">
                    <h4 class="cd-section-title">🎯 你将学到</h4>
                    <ul class="cd-list cd-outcomes">
                        ${outcomes.map(o => '<li>' + escapeHtml(o) + '</li>').join('')}
                    </ul>
                </div>

                <div class="cd-section">
                    <h4 class="cd-section-title">🔗 相关课程</h4>
                    <div class="cd-related">${this.renderRelated(course)}</div>
                </div>

                <div class="cd-actions">
                    <a href="${escapeHtml(course.u)}" target="_blank" rel="noopener" class="cd-start-btn" onclick="CourseCard.recordView('${escapeHtml(course.u)}')">🚀 开始学习</a>
                    <button class="cd-close-btn" onclick="CourseDetail.close()">收起详情</button>
                </div>
            </div>
        `;
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CourseDetail;
}
