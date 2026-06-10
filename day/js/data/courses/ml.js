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
        n: "Statistical Learning Theory",
        i: "Various",
        p: "Free",
        d: 5,
        h: 60,
        u: "https://www.stat.berkeley.edu/~bartlett/courses/2023-spring/",
        desc: "统计学习理论，VC维/Rademacher复杂度/泛化",
        t: ["VC维", "泛化理论", "Rademacher"],
        cat: "ml"
    },
    {
        n: "XGBoost & Gradient Boosting",
        i: "Various",
        p: "Free",
        d: 3,
        h: 15,
        u: "https://xgboost.readthedocs.io/",
        desc: "XGBoost/LightGBM梯度提升实战",
        t: ["XGBoost", "LightGBM", "集成学习"],
        cat: "ml"
    },
    {
        n: "AutoML & Hyperparameter Optimization",
        i: "Various",
        p: "Free",
        d: 3,
        h: 20,
        u: "https://automl.github.io/AML-2024/",
        desc: "自动机器学习与超参数优化方法",
        t: ["AutoML", "贝叶斯优化", "NAS"],
        cat: "ml"
    },
    {
        n: "Causal Inference",
        i: "Various",
        p: "Free",
        d: 4,
        h: 40,
        u: "https://www.bradyneal.com/causal-inference-course",
        desc: "因果推断入门：do-calculus/SCE/工具变量",
        t: ["因果推断", "do-calculus", "SCE"],
        cat: "ml"
    },
    {
        n: "Practical Time Series Analysis",
        i: "SUNY",
        p: "Coursera",
        d: 2,
        h: 24,
        u: "https://www.coursera.org/learn/practical-time-series-analysis",
        desc: "时间序列分析实践：ARIMA/季节性/预测",
        t: ["ARIMA", "季节性", "预测", "时间序列"],
        cat: "ml"
    },
    {
        n: "Sequence Models for Time Series",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 20,
        u: "https://www.coursera.org/learn/tensorflow-sequences-time-series-and-prediction",
        desc: "TensorFlow时序预测：RNN/LSTM/Conv1D",
        t: ["RNN", "LSTM", "时间序列", "预测"],
        cat: "ml"
    },
    {
        n: "Forecasting with ML",
        i: "Various",
        p: "Coursera",
        d: 3,
        h: 25,
        u: "https://www.coursera.org/learn/ai-for-time-series",
        desc: "ML时序预测方法：Prophet/XGBoost/特征工程",
        t: ["Prophet", "XGBoost", "时间序列"],
        cat: "ml"
    },
    {
        n: "Anomaly Detection in Time Series",
        i: "Various",
        p: "Free",
        d: 3,
        h: 15,
        u: "https://github.com/topics/anomaly-detection",
        desc: "时序异常检测方法：Isolation Forest/自编码器/统计方法",
        t: ["Isolation Forest", "自编码器", "异常检测"],
        cat: "ml"
    }
];