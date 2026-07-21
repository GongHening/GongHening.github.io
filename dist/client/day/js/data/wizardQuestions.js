/**
 * AI Learning Path Wizard - Questions & Recommendation Engine
 * Contains quiz questions data and the logic to generate personalized learning paths
 */

const WIZARD_QUESTIONS = [
    {
        id: 'goal',
        question: '你的学习目标是什么？',
        icon: '🎯',
        options: [
            { value: 'career', label: '转行进入 AI 领域', desc: '从零开始，目标是找到 AI 相关工作' },
            { value: 'upskill', label: '提升现有技能', desc: '在现有工作中应用 AI 技术' },
            { value: 'research', label: '学术研究 / 考研', desc: '深入理论，准备科研或升学' },
            { value: 'explore', label: '了解 AI 基本概念', desc: '对 AI 好奇，想建立基本认知' }
        ]
    },
    {
        id: 'coding',
        question: '你的编程基础如何？',
        icon: '💻',
        options: [
            { value: 'none', label: '零基础', desc: '没有写过代码' },
            { value: 'basic', label: '了解基础语法', desc: '学过 Python 或其他语言的基础' },
            { value: 'project', label: '有项目经验', desc: '独立完成过编程项目' },
            { value: 'pro', label: '专业开发者', desc: '有多年的软件开发经验' }
        ]
    },
    {
        id: 'math',
        question: '你的数学基础如何？',
        icon: '📐',
        options: [
            { value: 'highschool', label: '高中数学', desc: '了解基本的代数和函数' },
            { value: 'college', label: '大学数学基础', desc: '学过微积分、线性代数但不太扎实' },
            { value: 'solid', label: '线代 + 概率论扎实', desc: '对线性代数、概率统计有较好掌握' },
            { value: 'expert', label: '数学专业水平', desc: '数学功底深厚，熟悉优化理论等' }
        ]
    },
    {
        id: 'dailyHours',
        question: '每天能投入多少学习时间？',
        icon: '⏰',
        options: [
            { value: 'lt1', label: '不到 1 小时', desc: '利用碎片时间学习' },
            { value: '1to2', label: '1 - 2 小时', desc: '下班/下课后集中学习' },
            { value: '2to4', label: '2 - 4 小时', desc: '有较多空闲时间' },
            { value: 'gt4', label: '4 小时以上', desc: '全职学习或时间充裕' }
        ]
    },
    {
        id: 'domain',
        question: '你最感兴趣的 AI 方向是？',
        icon: '🔬',
        options: [
            { value: 'mldl', label: '机器学习 / 深度学习', desc: '通用的 AI 核心技术' },
            { value: 'nlp', label: 'NLP / 大语言模型', desc: 'ChatGPT、文本理解与生成' },
            { value: 'cv', label: '计算机视觉', desc: '图像识别、目标检测、自动驾驶' },
            { value: 'genai', label: '生成式 AI / 创意 AI', desc: 'AI 绘画、视频生成、音乐创作' },
            { value: 'unsure', label: '暂不确定', desc: '想先广泛了解再做选择' }
        ]
    },
    {
        id: 'style',
        question: '你偏好哪种学习方式？',
        icon: '📖',
        options: [
            { value: 'video', label: '视频课程', desc: '跟着老师讲解系统学习' },
            { value: 'hands-on', label: '动手实践', desc: '通过做项目和写代码来学' },
            { value: 'theory', label: '理论学习', desc: '读书、看论文、理解原理' },
            { value: 'mixed', label: '混合方式', desc: '理论与实践结合' }
        ]
    },
    {
        id: 'english',
        question: '你的英语水平如何？',
        icon: '🌐',
        options: [
            { value: 'basic', label: '基础水平', desc: '需要中文字幕或翻译' },
            { value: 'readable', label: '能看懂技术文档', desc: '阅读英文没问题，听力一般' },
            { value: 'fluent', label: '流利', desc: '听说读写都没问题' }
        ]
    },
    {
        id: 'budget',
        question: '学习预算如何？',
        icon: '💰',
        options: [
            { value: 'free', label: '免费资源优先', desc: '优先使用免费课程和开源资料' },
            { value: 'moderate', label: '可接受付费课程', desc: '愿意为高质量内容付费' },
            { value: 'unlimited', label: '无限制', desc: '只要课程好，费用不是问题' }
        ]
    },
    {
        id: 'timeline',
        question: '你希望多快看到学习成果？',
        icon: '📅',
        options: [
            { value: '1month', label: '1 个月内入门', desc: '快速了解核心概念' },
            { value: '3months', label: '3 个月系统学习', desc: '打下扎实基础' },
            { value: '6months', label: '6 个月 + 深入研究', desc: '追求深度和全面性' }
        ]
    },
    {
        id: 'experience',
        question: '你之前接触过 AI / 机器学习吗？',
        icon: '🧠',
        options: [
            { value: 'none', label: '完全没接触过', desc: 'AI 对我来说是全新领域' },
            { value: 'articles', label: '看过科普文章', desc: '了解一些概念，但没实操过' },
            { value: 'tutorial', label: '跟过入门教程', desc: '做过一些简单的练习' },
            { value: 'project', label: '有实际项目经验', desc: '做过 ML/DL 相关的项目' }
        ]
    }
];

/**
 * Generate a personalized learning path based on wizard answers
 * @param {Object} answers - User's answers keyed by question id
 * @returns {Object} Learning path result
 */
function generateLearningPath(answers) {
    const allCourses = getAllCourses();

    // Step 1: Determine difficulty range
    const difficultyRange = getDifficultyRange(answers);

    // Step 2: Determine preferred domains
    const preferredDomains = getPreferredDomains(answers);

    // Step 3: Determine course count based on timeline & daily hours
    const courseCount = getCourseCount(answers);

    // Step 4: Filter and score courses
    let scoredCourses = scoreCourses(allCourses, answers, difficultyRange, preferredDomains);

    // Step 5: Select top courses and organize into phases
    const selectedCourses = scoredCourses.slice(0, courseCount);
    const phases = organizePhases(selectedCourses, answers);

    // Step 6: Calculate totals
    const totalHours = selectedCourses.reduce((sum, c) => sum + c.course.h, 0);

    // Step 7: Generate knowledge/skills list
    const skills = generateSkills(selectedCourses, answers);

    // Step 8: Generate summary
    const summary = generateSummary(answers, totalHours, selectedCourses.length, phases.length);

    // Step 9: Calculate estimated completion time
    const dailyHoursMap = { 'lt1': 0.75, '1to2': 1.5, '2to4': 3, 'gt4': 5 };
    const dailyHours = dailyHoursMap[answers.dailyHours] || 1.5;
    const totalDays = Math.ceil(totalHours / dailyHours);
    const totalWeeks = Math.ceil(totalDays / 7);

    return {
        summary,
        totalHours,
        dailyHours,
        totalDays,
        totalWeeks,
        totalCourses: selectedCourses.length,
        totalPhases: phases.length,
        difficultyRange,
        phases,
        skills,
        courses: selectedCourses.map(sc => sc.course),
        answers
    };
}

/**
 * Determine difficulty range based on coding, math, and experience
 */
function getDifficultyRange(answers) {
    const coding = answers.coding || 'basic';
    const math = answers.math || 'college';
    const experience = answers.experience || 'none';

    // Score each dimension
    const codingScore = { none: 0, basic: 1, project: 2, pro: 3 }[coding] || 1;
    const mathScore = { highschool: 0, college: 1, solid: 2, expert: 3 }[math] || 1;
    const expScore = { none: 0, articles: 1, tutorial: 2, project: 3 }[experience] || 0;

    const total = codingScore + mathScore + expScore; // 0-9

    if (total <= 2) return { min: 1, max: 2, label: '入门 → 初级' };
    if (total <= 4) return { min: 1, max: 3, label: '入门 → 中级' };
    if (total <= 6) return { min: 2, max: 4, label: '初级 → 高级' };
    return { min: 3, max: 5, label: '中级 → 专家' };
}

/**
 * Determine preferred domain IDs based on interest
 */
function getPreferredDomains(answers) {
    const domain = answers.domain || 'unsure';

    const domainMap = {
        'mldl': ['ml', 'dl'],
        'nlp': ['nlp', 'genai', 'dl'],
        'cv': ['cv', 'dl'],
        'genai': ['genai', 'nlp', 'cv'],
        'unsure': ['ml', 'dl', 'nlp', 'cv', 'genai']
    };

    return domainMap[domain] || ['ml', 'dl'];
}

/**
 * Determine how many courses to recommend
 */
function getCourseCount(answers) {
    const timeline = answers.timeline || '3months';
    const dailyHours = answers.dailyHours || '1to2';

    const timelineMap = { '1month': 1, '3months': 2, '6months': 3 };
    const hoursMap = { 'lt1': 0, '1to2': 1, '2to4': 2, 'gt4': 3 };

    const t = timelineMap[timeline] || 2;
    const h = hoursMap[dailyHours] || 1;
    const combined = t + h; // 1-6

    if (combined <= 2) return 4;
    if (combined <= 3) return 6;
    if (combined <= 4) return 8;
    if (combined <= 5) return 10;
    return 12;
}

/**
 * Score and rank all courses based on user answers
 */
function scoreCourses(allCourses, answers, difficultyRange, preferredDomains) {
    const goal = answers.goal || 'explore';
    const budget = answers.budget || 'free';
    const english = answers.basic || answers.english || 'readable';
    const style = answers.style || 'mixed';

    return allCourses.map(course => {
        let score = 0;

        // Difficulty fit (most important)
        if (course.d >= difficultyRange.min && course.d <= difficultyRange.max) {
            score += 30;
            // Bonus for being at the sweet spot
            const mid = (difficultyRange.min + difficultyRange.max) / 2;
            score += 10 - Math.abs(course.d - mid) * 5;
        } else if (course.d === difficultyRange.min - 1 || course.d === difficultyRange.max + 1) {
            score += 10; // Slightly out of range is okay
        } else {
            score -= 10; // Way out of range
        }

        // Domain preference
        if (preferredDomains.includes(course.cat)) {
            score += 25;
        }

        // Goal alignment
        if (goal === 'research' && course.d >= 4) score += 10;
        if (goal === 'explore' && course.d <= 2) score += 10;
        if (goal === 'career' && course.d >= 2 && course.d <= 4) score += 10;
        if (goal === 'upskill' && course.d >= 2 && course.d <= 3) score += 10;

        // Foundation courses always get a boost for beginners
        if (difficultyRange.max <= 3) {
            const foundationTags = ['入门', '数学基础', 'Python', 'Andrew Ng', 'scikit-learn'];
            if (course.t.some(t => foundationTags.includes(t))) score += 15;
        }

        // English preference
        if (english === 'basic') {
            // Prefer courses that might have Chinese support
            const cnFriendly = ['Coursera', 'Bilibili', 'Chinese'];
            if (cnFriendly.some(p => course.p.includes(p)) || course.i.includes('中国')) {
                score += 10;
            }
        }

        // Add small random factor for variety
        score += Math.random() * 5;

        return { course, score };
    }).sort((a, b) => b.score - a.score);
}

/**
 * Organize selected courses into learning phases
 */
function organizePhases(scoredCourses, answers) {
    const timeline = answers.timeline || '3months';

    // Sort by difficulty for phase organization
    const courses = scoredCourses.map(sc => sc.course).sort((a, b) => a.d - b.d);

    if (courses.length <= 4) {
        // Short path: 2 phases
        const mid = Math.ceil(courses.length / 2);
        return [
            {
                name: '基础入门',
                icon: '🌱',
                description: '建立核心概念和基础技能',
                courses: courses.slice(0, mid),
                weeks: timeline === '1month' ? '2-3 周' : '3-4 周'
            },
            {
                name: '进阶提升',
                icon: '📈',
                description: '深入学习，掌握实际应用',
                courses: courses.slice(mid),
                weeks: timeline === '1month' ? '2-3 周' : '4-6 周'
            }
        ];
    }

    if (courses.length <= 8) {
        // Medium path: 3 phases
        const third = Math.ceil(courses.length / 3);
        return [
            {
                name: '基础入门',
                icon: '🌱',
                description: '建立核心概念，打好基础',
                courses: courses.slice(0, third),
                weeks: timeline === '3months' ? '3-4 周' : '4-6 周'
            },
            {
                name: '核心进阶',
                icon: '📈',
                description: '系统学习核心技术栈',
                courses: courses.slice(third, third * 2),
                weeks: timeline === '3months' ? '4-6 周' : '6-8 周'
            },
            {
                name: '专业深入',
                icon: '🚀',
                description: '深入专业方向，提升实战能力',
                courses: courses.slice(third * 2),
                weeks: timeline === '3months' ? '3-4 周' : '6-8 周'
            }
        ];
    }

    // Long path: 4 phases
    const quarter = Math.ceil(courses.length / 4);
    return [
        {
            name: '基础入门',
            icon: '🌱',
            description: '编程基础与数学预备知识',
            courses: courses.slice(0, quarter),
            weeks: '4-6 周'
        },
        {
            name: '核心理论',
            icon: '📚',
            description: '系统学习机器学习核心理论',
            courses: courses.slice(quarter, quarter * 2),
            weeks: '6-8 周'
        },
        {
            name: '方向专精',
            icon: '🎯',
            description: '深入你感兴趣的专业方向',
            courses: courses.slice(quarter * 2, quarter * 3),
            weeks: '6-8 周'
        },
        {
            name: '前沿探索',
            icon: '🚀',
            description: '接触前沿研究与高级应用',
            courses: courses.slice(quarter * 3),
            weeks: '4-6 周'
        }
    ];
}

/**
 * Generate skills/knowledge list based on recommended courses
 */
function generateSkills(scoredCourses, answers) {
    const courses = scoredCourses.map(sc => sc.course);
    const domains = [...new Set(courses.map(c => c.cat))];
    const allTags = [...new Set(courses.flatMap(c => c.t))];

    const skills = [];

    // Domain-based skills
    const domainSkills = {
        'ml': ['机器学习核心算法', '模型训练与评估', '特征工程'],
        'dl': ['深度学习原理', '神经网络架构设计', '模型优化与调参'],
        'nlp': ['自然语言处理技术', '大语言模型原理', '文本分析与生成'],
        'cv': ['计算机视觉基础', '图像识别与处理', '目标检测与分割'],
        'genai': ['生成式 AI 技术', 'Prompt Engineering', '扩散模型原理'],
        'rl': ['强化学习算法', '策略优化', '环境建模'],
        'safety': ['AI 安全与伦理', '模型对齐', '负责任的 AI 开发'],
        'robotics': ['机器人学基础', '运动规划与控制'],
        'speech': ['语音识别技术', '语音合成与处理'],
        'agents': ['AI Agent 架构', '工具调用与多智能体协作', 'Agentic RAG'],
        'infra': ['MLOps 工程实践', '分布式训练', '模型部署与运维']
    };

    domains.forEach(d => {
        if (domainSkills[d]) skills.push(...domainSkills[d]);
    });

    // Tag-based skills (top tags)
    const skillTags = allTags.filter(t =>
        !['入门', 'MIT', 'Stanford', 'Coursera', 'Bilibili', 'Andrew Ng', 'Google', 'Chinese'].includes(t)
    ).slice(0, 5);
    skills.push(...skillTags);

    // Goal-specific skills
    const goal = answers.goal || 'explore';
    if (goal === 'career') skills.push('项目实战能力', '技术面试准备');
    if (goal === 'research') skills.push('论文阅读与复现', '实验设计与分析');
    if (goal === 'upskill') skills.push('AI 工具链使用', '业务场景应用');

    return [...new Set(skills)].slice(0, 12);
}

/**
 * Generate a text summary of the learning path
 */
function generateSummary(answers, totalHours, totalCourses, totalPhases) {
    const goal = answers.goal || 'explore';
    const timeline = answers.timeline || '3months';

    const goalLabels = {
        'career': '转行进入 AI 领域',
        'upskill': '提升 AI 技能',
        'research': '学术研究',
        'explore': '了解 AI 基本概念'
    };

    const timelineLabels = {
        '1month': '1 个月内快速入门',
        '3months': '3 个月系统学习',
        '6months': '6 个月以上深入研究'
    };

    return `根据你的学习目标（${goalLabels[goal]}）和时间规划（${timelineLabels[timeline]}），我们为你量身定制了一条包含 ${totalPhases} 个阶段、${totalCourses} 门精选课程的学习路径。`;
}
