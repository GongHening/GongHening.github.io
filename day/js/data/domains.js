/**
 * AI Domains Data
 * Contains all 13 AI domain definitions
 */

const DOMAINS = [
    {
        id: 'ml',
        name: '机器学习',
        icon: '🧠',
        description: '监督/无监督学习、特征工程与模型选择',
        color: '#6366f1',
        count: 0 // Will be calculated dynamically
    },
    {
        id: 'dl',
        name: '深度学习',
        icon: '🔬',
        description: '神经网络、CNN、RNN与优化训练',
        color: '#8b5cf6',
        count: 0
    },
    {
        id: 'nlp',
        name: '自然语言处理',
        icon: '💬',
        description: 'NLP基础、大语言模型与文本挖掘',
        color: '#06b6d4',
        count: 0
    },
    {
        id: 'cv',
        name: '计算机视觉',
        icon: '👁️',
        description: '图像识别、目标检测与3D视觉',
        color: '#10b981',
        count: 0
    },
    {
        id: 'rl',
        name: '强化学习',
        icon: '🎮',
        description: 'RL基础、策略梯度与高级方法',
        color: '#f59e0b',
        count: 0
    },
    {
        id: 'genai',
        name: '生成式AI',
        icon: '✨',
        description: '扩散模型、文本生成与Prompt工程',
        color: '#ec4899',
        count: 0
    },
    {
        id: 'safety',
        name: 'AI安全与伦理',
        icon: '🛡️',
        description: 'AI伦理、对齐与负责任开发',
        color: '#14b8a6',
        count: 0
    },
    {
        id: 'robotics',
        name: '机器人学',
        icon: '🤖',
        description: '机器人基础、运动规划与控制',
        color: '#f97316',
        count: 0
    },
    {
        id: 'speech',
        name: '语音处理',
        icon: '🎤',
        description: '语音识别、语音合成与音频ML',
        color: '#a855f7',
        count: 0
    },
    {
        id: 'timeseries',
        name: '时间序列',
        icon: '📈',
        description: '时序基础、深度学习预测与异常检测',
        color: '#22c55e',
        count: 0
    },
    {
        id: 'gnn',
        name: '图神经网络',
        icon: '🔗',
        description: '图表示学习与知识图谱',
        color: '#3b82f6',
        count: 0
    },
    {
        id: 'multimodal',
        name: '多模态学习',
        icon: '🌐',
        description: '视觉-语言模型与跨模态生成',
        color: '#ef4444',
        count: 0
    },
    {
        id: 'infra',
        name: 'AI基础设施',
        icon: '⚙️',
        description: 'MLOps、分布式训练与GPU编程',
        color: '#64748b',
        count: 0
    }
];

/**
 * Get domain by ID
 * @param {string} id - Domain ID
 * @returns {Object|null} Domain object or null
 */
function getDomainById(id) {
    return DOMAINS.find(domain => domain.id === id) || null;
}

/**
 * Get domain name by ID
 * @param {string} id - Domain ID
 * @returns {string} Domain name
 */
function getDomainName(id) {
    const domain = getDomainById(id);
    return domain ? domain.name : '';
}

/**
 * Get domain icon by ID
 * @param {string} id - Domain ID
 * @returns {string} Domain icon emoji
 */
function getDomainIcon(id) {
    const domain = getDomainById(id);
    return domain ? domain.icon : '';
}

/**
 * Update domain counts based on courses
 * @param {Array} courses - Array of course objects
 */
function updateDomainCounts(courses) {
    // Reset all counts
    DOMAINS.forEach(domain => domain.count = 0);

    // Count courses per domain
    courses.forEach(course => {
        const domain = getDomainById(course.cat);
        if (domain) {
            domain.count++;
        }
    });
}

/**
 * Get domains sorted by count (descending)
 * @returns {Array} Sorted domains array
 */
function getDomainsByCount() {
    return [...DOMAINS].sort((a, b) => b.count - a.count);
}

/**
 * Get total course count across all domains
 * @returns {number} Total count
 */
function getTotalCourseCount() {
    return DOMAINS.reduce((total, domain) => total + domain.count, 0);
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DOMAINS,
        getDomainById,
        getDomainName,
        getDomainIcon,
        updateDomainCounts,
        getDomainsByCount,
        getTotalCourseCount
    };
}