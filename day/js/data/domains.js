/**
 * AI Domains Data
 * Contains all 11 AI domain definitions
 */

const DOMAINS = [
    {
        id: 'ml',
        name: '机器学习',
        icon: '🧠',
        description: '监督/无监督学习、特征工程、时序分析与模型选择',
        color: '#6366f1',
        count: 0
    },
    {
        id: 'dl',
        name: '深度学习',
        icon: '🔬',
        description: '神经网络、CNN、RNN、图神经网络与优化训练',
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
        description: '图像识别、目标检测、3D视觉与生成模型',
        color: '#10b981',
        count: 0
    },
    {
        id: 'rl',
        name: '强化学习',
        icon: '🎮',
        description: 'RL基础、策略梯度与多智能体方法',
        color: '#f59e0b',
        count: 0
    },
    {
        id: 'genai',
        name: '生成式AI',
        icon: '✨',
        description: '扩散模型、LLM生成、多模态生成与Prompt工程',
        color: '#ec4899',
        count: 0
    },
    {
        id: 'agents',
        name: 'AI Agents',
        icon: '🤖',
        description: '智能体架构、工具调用、多智能体协作与Agentic RAG',
        color: '#f97316',
        count: 0
    },
    {
        id: 'safety',
        name: 'AI安全与伦理',
        icon: '🛡️',
        description: 'AI伦理、对齐、红队测试与负责任开发',
        color: '#14b8a6',
        count: 0
    },
    {
        id: 'robotics',
        name: '机器人学',
        icon: '🦾',
        description: '机器人基础、运动规划、操控与具身智能',
        color: '#a855f7',
        count: 0
    },
    {
        id: 'speech',
        name: '语音处理',
        icon: '🎤',
        description: '语音识别、语音合成、音频ML与多语言ASR',
        color: '#22c55e',
        count: 0
    },
    {
        id: 'infra',
        name: 'AI Infra',
        icon: '⚙️',
        description: 'MLOps、分布式训练、GPU编程与推理优化',
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