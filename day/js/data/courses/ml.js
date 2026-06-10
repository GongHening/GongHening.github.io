/**
 * Machine Learning Courses
 * Courses in the 'ml' domain (including time series)
 */

const ML_COURSES = [
    {
        n: "CS229: Machine Learning",
        i: "Stanford",
        p: "Stanford Online",
        d: 4,
        h: 120,
        u: "https://cs229.stanford.edu/",
        desc: "斯坦福经典ML课程，涵盖监督/非监督学习、学习理论、强化学习",
        t: ["监督学习", "神经网络", "学习理论"],
        cat: "ml"
    },
    {
        n: "Machine Learning Specialization",
        i: "DeepLearning.AI / Stanford",
        p: "Coursera",
        d: 1,
        h: 95,
        u: "https://www.coursera.org/specializations/machine-learning-introduction",
        desc: "Andrew Ng经典入门课，从线性回归到推荐系统",
        t: ["入门", "Python", "Andrew Ng"],
        cat: "ml"
    },
    {
        n: "6.036 Introduction to Machine Learning",
        i: "MIT",
        p: "MIT OCW",
        d: 3,
        h: 100,
        u: "https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/",
        desc: "MIT机器学习入门，涵盖表示、过拟合和泛化",
        t: ["MIT", "概率模型", "强化学习"],
        cat: "ml"
    },
    {
        n: "CS189/CS289A Introduction to ML",
        i: "UC Berkeley",
        p: "Berkeley",
        d: 4,
        h: 130,
        u: "https://people.eecs.berkeley.edu/~jrs/189/",
        desc: "伯克利ML课程，理论与实践并重",
        t: ["贝叶斯", "核方法", "优化"],
        cat: "ml"
    },
    {
        n: "10-301/601 Introduction to ML",
        i: "CMU",
        p: "CMU",
        d: 3,
        h: 110,
        u: "https://www.cs.cmu.edu/~10301/",
        desc: "CMU经典ML课程，系统性覆盖ML核心算法",
        t: ["决策树", "SVM", "集成学习"],
        cat: "ml"
    },
    {
        n: "Unsupervised Learning & Recommenders",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 30,
        u: "https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning",
        desc: "聚类、异常检测、推荐系统和PCA",
        t: ["聚类", "PCA", "推荐系统"],
        cat: "ml"
    },
    {
        n: "CS229M Machine Learning Theory",
        i: "Stanford",
        p: "Stanford",
        d: 5,
        h: 90,
        u: "https://cs229m.stanford.edu/",
        desc: "机器学习理论，泛化界和优化理论",
        t: ["理论", "泛化界", "PAC学习"],
        cat: "ml"
    },
    {
        n: "Mathematics for Machine Learning",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 1,
        h: 70,
        u: "https://www.coursera.org/specializations/mathematics-machine-learning",
        desc: "ML数学基础：微积分、线性代数、统计",
        t: ["数学基础", "线性代数", "概率"],
        cat: "ml"
    },
    {
        n: "Applied ML in Python",
        i: "University of Michigan",
        p: "Coursera",
        d: 2,
        h: 28,
        u: "https://www.coursera.org/learn/python-machine-learning",
        desc: "Python ML实践，特征工程和模型评估",
        t: ["scikit-learn", "特征工程", "交叉验证"],
        cat: "ml"
    },
    {
        n: "Feature Engineering",
        i: "Google",
        p: "Coursera",
        d: 3,
        h: 16,
        u: "https://www.coursera.org/learn/feature-engineering",
        desc: "Google特征工程课程，大数据ML特征构建",
        t: ["特征工程", "TensorFlow", "BigQuery"],
        cat: "ml"
    },
    {
        n: "Probabilistic Machine Learning",
        i: "University of Tübingen",
        p: "Free",
        d: 4,
        h: 100,
        u: "https://pml.autorss.org/",
        desc: "Kevin Murphy概率ML高级教材，贝叶斯/核方法/图模型",
        t: ["贝叶斯", "核方法", "概率图模型"],
        cat: "ml"
    },
    {
        n: "Causal Inference",
        i: "Brady Neal",
        p: "Free",
        d: 4,
        h: 40,
        u: "https://www.bradyneal.com/causal-inference-course",
        desc: "因果推断入门：do-calculus/SCE/工具变量",
        t: ["因果推断", "do-calculus", "SCE"],
        cat: "ml"
    },
    // === Top University Additions ===
    {
        n: "CS221: AI Principles and Techniques",
        i: "Stanford",
        p: "Stanford",
        d: 3,
        h: 80,
        u: "https://cs221.stanford.edu",
        desc: "Percy Liang/Dorsa Sadigh，搜索/CSP/MDP/贝叶斯网络/博弈论",
        t: ["搜索", "MDP", "贝叶斯网络", "CSP"],
        cat: "ml"
    },
    {
        n: "CS228: Probabilistic Graphical Models",
        i: "Stanford",
        p: "Stanford",
        d: 5,
        h: 90,
        u: "https://cs228.stanford.edu",
        desc: "Daphne Koller概率图模型课程，贝叶斯网络/马尔可夫随机场/推断",
        t: ["概率图模型", "贝叶斯网络", "变分推断", "MCMC"],
        cat: "ml"
    },
    {
        n: "CS229T: Statistical Learning Theory",
        i: "Stanford",
        p: "Stanford",
        d: 5,
        h: 60,
        u: "https://stanford-cs229t.github.io",
        desc: "Percy Liang统计学习理论，泛化界/VC维/Rademacher复杂度/PAC学习",
        t: ["泛化界", "VC维", "Rademacher", "PAC学习"],
        cat: "ml"
    },
    {
        n: "CS246: Mining Massive Datasets",
        i: "Stanford",
        p: "Stanford",
        d: 3,
        h: 60,
        u: "http://web.stanford.edu/class/cs246/",
        desc: "Jure Leskovec大数据ML，MapReduce/SVD/LSH/推荐系统/图分析",
        t: ["MapReduce", "降维", "推荐系统", "大规模ML"],
        cat: "ml"
    },
    {
        n: "CS281: Advanced Machine Learning",
        i: "Stanford",
        p: "Stanford",
        d: 5,
        h: 80,
        u: "https://cs281.stanford.edu/",
        desc: "Lester Mackey高级ML，贝叶斯推断/高斯过程/变分推断/贝叶斯DL",
        t: ["贝叶斯推断", "高斯过程", "变分推断", "MCMC"],
        cat: "ml"
    },
    {
        n: "CS109: Probability for Computer Scientists",
        i: "Stanford",
        p: "Stanford",
        d: 2,
        h: 60,
        u: "https://cs109.stanford.edu",
        desc: "Chris Piech概率基础，随机变量/分布/贝叶斯推断/假设检验",
        t: ["概率", "贝叶斯", "假设检验", "回归"],
        cat: "ml"
    },
    {
        n: "6.867 Machine Learning",
        i: "MIT",
        p: "MIT OCW",
        d: 4,
        h: 90,
        u: "https://ocw.mit.edu/courses/6-867-machine-learning-fall-2006/",
        desc: "Tommi Jaakkola研究生ML课程，核方法/SVM/图模型/优化",
        t: ["SVM", "核方法", "图模型", "优化"],
        cat: "ml"
    },
    {
        n: "6.86x ML with Python: Linear Models to Deep Learning",
        i: "MIT",
        p: "edX",
        d: 3,
        h: 100,
        u: "https://www.edx.org/course/machine-learning-with-python-from-linear-models-to",
        desc: "MITx MicroMasters课程，线性分类器/SVM/神经网络/贝叶斯方法",
        t: ["SVM", "神经网络", "贝叶斯", "Python"],
        cat: "ml"
    },
    {
        n: "10-701: Machine Learning (PhD-level)",
        i: "CMU",
        p: "CMU",
        d: 5,
        h: 100,
        u: "https://www.cs.cmu.edu/~10701/",
        desc: "Zico Kolter研究生ML，监督/非监督/核方法/图模型/神经网络/理论基础",
        t: ["核方法", "图模型", "理论基础", "研究生"],
        cat: "ml"
    },
    {
        n: "10-702: Statistical Machine Learning",
        i: "CMU",
        p: "CMU",
        d: 5,
        h: 80,
        u: "http://www.stat.cmu.edu/~larry/=sml/",
        desc: "Larry Wasserman统计ML，集中不等式/非参方法/核方法/极小极大理论",
        t: ["统计学习", "核方法", "极小极大", "高维统计"],
        cat: "ml"
    },
    {
        n: "10-405/605: ML with Large Datasets",
        i: "CMU",
        p: "CMU",
        d: 3,
        h: 60,
        u: "https://www.cs.cmu.edu/~10605/",
        desc: "William Cohen大规模ML，Spark/流算法/降维/在线学习/分布式优化",
        t: ["Spark", "大规模", "在线学习", "分布式"],
        cat: "ml"
    },
    {
        n: "CS281: Statistical Learning Theory",
        i: "UC Berkeley",
        p: "Berkeley",
        d: 5,
        h: 80,
        u: "https://www2.eecs.berkeley.edu/Courses/CS281/",
        desc: "Martin Wainwright统计学习理论，PAC学习/VC维/Rademacher/凸优化/在线学习",
        t: ["PAC学习", "VC维", "凸优化", "在线学习"],
        cat: "ml"
    }
];
