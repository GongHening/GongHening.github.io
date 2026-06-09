/**
 * Other Domain Courses
 * Courses for: rl, genai, safety, robotics, speech, timeseries, gnn, multimodal, infra
 */

// Reinforcement Learning
const RL_COURSES = [
    {
        n: "CS 185/285 Deep RL",
        i: "UC Berkeley",
        p: "Berkeley",
        d: 5,
        h: 80,
        u: "https://rail.eecs.berkeley.edu/deeprlcourse/",
        desc: "Sergey Levine深度RL课程，策略梯度到离线RL",
        t: ["策略梯度", "Q-learning", "Actor-Critic"],
        cat: "rl"
    },
    {
        n: "RL Specialization",
        i: "University of Alberta",
        p: "Coursera",
        d: 3,
        h: 100,
        u: "https://www.coursera.org/specializations/reinforcement-learning",
        desc: "RL专项课程，MDP到近似动态规划",
        t: ["MDP", "值函数", "时序差分"],
        cat: "rl"
    },
    {
        n: "CS234 Reinforcement Learning",
        i: "Stanford",
        p: "Stanford",
        d: 4,
        h: 60,
        u: "https://web.stanford.edu/class/cs234/",
        desc: "Stanford RL课程，理论与应用并重",
        t: ["探索", "利用", "策略评估"],
        cat: "rl"
    },
    {
        n: "6.S091 Deep RL",
        i: "MIT",
        p: "MIT",
        d: 3,
        h: 20,
        u: "https://mitdeeplearning.com/",
        desc: "MIT短期深度RL课程",
        t: ["深度Q网络", "PPO", "探索策略"],
        cat: "rl"
    },
    {
        n: "Multi-Agent RL",
        i: "Various",
        p: "arXiv",
        d: 5,
        h: 40,
        u: "https://marl-book.com/",
        desc: "多智能体强化学习教材",
        t: ["博弈论", "合作", "竞争"],
        cat: "rl"
    },
    {
        n: "Offline Reinforcement Learning",
        i: "Various",
        p: "Free",
        d: 4,
        h: 30,
        u: "https://offline-rl.github.io/",
        desc: "离线RL方法综述与实践",
        t: ["离线RL", "数据驱动", "保守Q学习"],
        cat: "rl"
    }
];

// Generative AI
const GENAI_COURSES = [
    {
        n: "How Diffusion Models Work",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 10,
        u: "https://www.coursera.org/learn/how-diffusion-models-work",
        desc: "从零构建扩散模型，加速采样算法",
        t: ["DDPM", "采样", "图像生成"],
        cat: "genai"
    },
    {
        n: "CS236 Deep Generative Models",
        i: "Stanford",
        p: "Stanford",
        d: 5,
        h: 80,
        u: "https://deepgenerativemodels.github.io/",
        desc: "全面覆盖VAE/GAN/Flow/扩散/能量模型",
        t: ["生成模型", "概率模型"],
        cat: "genai"
    },
    {
        n: "Generative AI with LLMs",
        i: "DeepLearning.AI / AWS",
        p: "Coursera",
        d: 3,
        h: 20,
        u: "https://www.coursera.org/learn/generative-ai-with-llms",
        desc: "LLM全栈：预训练/微调/RLHF/部署",
        t: ["RLHF", "PEFT", "缩放定律"],
        cat: "genai"
    },
    {
        n: "Build and Train an LLM with JAX",
        i: "Google",
        p: "Coursera",
        d: 3,
        h: 12,
        u: "https://www.coursera.org/learn/build-train-llm-jax",
        desc: "用JAX从零构建20M参数LLM",
        t: ["JAX", "Gemini", "LLM训练"],
        cat: "genai"
    },
    {
        n: "ChatGPT Prompt Engineering",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 1,
        h: 1,
        u: "https://www.coursera.org/learn/chatgpt-prompt-engineering-for-developers",
        desc: "Prompt Engineering入门",
        t: ["提示工程", "API", "LLM应用"],
        cat: "genai"
    },
    {
        n: "Building Systems with ChatGPT API",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 5,
        u: "https://www.coursera.org/learn/building-systems-with-chatgpt",
        desc: "用ChatGPT API构建完整系统",
        t: ["API链", "评估", "部署"],
        cat: "genai"
    }
];

// AI Safety & Ethics
const SAFETY_COURSES = [
    {
        n: "AI: Ethics & Societal Challenges",
        i: "Lund University",
        p: "Coursera",
        d: 1,
        h: 20,
        u: "https://www.coursera.org/learn/ai-ethics",
        desc: "AI伦理与社会挑战：价值对齐/控制问题",
        t: ["价值对齐", "控制问题", "偏见"],
        cat: "safety"
    },
    {
        n: "Fairness, Accountability, Transparency",
        i: "Various",
        p: "edX",
        d: 3,
        h: 30,
        u: "https://www.edx.org/learn/artificial-intelligence",
        desc: "AI公平性、问责制和透明度",
        t: ["公平性", "可解释性", "审计"],
        cat: "safety"
    },
    {
        n: "AGI Safety Fundamentals",
        i: "BlueDot Impact",
        p: "Free",
        d: 3,
        h: 40,
        u: "https://aisafetyfundamentals.com/",
        desc: "AGI安全基础课程，对齐研究方法",
        t: ["对齐", "RLHF", "可解释性"],
        cat: "safety"
    },
    {
        n: "AI Alignment Course",
        i: "Various",
        p: "Free",
        d: 4,
        h: 50,
        u: "https://www.alignmentcourse.com/",
        desc: "AI对齐研究入门到高级",
        t: ["机械可解释性", "外在对齐"],
        cat: "safety"
    },
    {
        n: "Responsible AI Practices",
        i: "Google",
        p: "Free",
        d: 2,
        h: 10,
        u: "https://ai.google/responsibility/responsible-ai-practices/",
        desc: "Google负责任AI实践指南",
        t: ["公平性", "隐私", "安全"],
        cat: "safety"
    },
    {
        n: "MLOps Operations",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 60,
        u: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
        desc: "MLOps生产环境AI部署",
        t: ["MLOps", "监控", "治理"],
        cat: "safety"
    }
];

// Robotics
const ROBOTICS_COURSES = [
    {
        n: "CS237B Robot Autonomy II",
        i: "Stanford",
        p: "Stanford",
        d: 5,
        h: 80,
        u: "https://web.stanford.edu/class/cs237b/",
        desc: "Bohg/Pavone/Sadigh教授，RL/操作/人机交互",
        t: ["强化学习", "模仿学习", "操作"],
        cat: "robotics"
    },
    {
        n: "6.800 Robotics: Science & Systems",
        i: "MIT",
        p: "MIT",
        d: 4,
        h: 90,
        u: "https://ocw.mit.edu/courses/6-800-robotics-science-and-systems-fall-2022/",
        desc: "MIT机器人学核心课程",
        t: ["运动规划", "感知", "控制"],
        cat: "robotics"
    },
    {
        n: "Robotics Specialization",
        i: "University of Pennsylvania",
        p: "Coursera",
        d: 3,
        h: 100,
        u: "https://www.coursera.org/specializations/robotics",
        desc: "宾大机器人专项：飞行/操控/感知",
        t: ["飞行", "ROS", "SLAM"],
        cat: "robotics"
    },
    {
        n: "Modern Robotics",
        i: "Northwestern University",
        p: "Coursera",
        d: 3,
        h: 60,
        u: "https://www.coursera.org/specializations/modernrobotics",
        desc: "现代机器人学：运动学/动力学/控制",
        t: ["运动学", "动力学", "轨迹规划"],
        cat: "robotics"
    },
    {
        n: "CS287 Advanced Robotics",
        i: "UC Berkeley",
        p: "Berkeley",
        d: 5,
        h: 70,
        u: "https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/",
        desc: "Pieter Abbeel高级机器人课程",
        t: ["最优控制", "接触", "操作"],
        cat: "robotics"
    }
];

// Speech Processing
const SPEECH_COURSES = [
    {
        n: "Speech and Language Processing",
        i: "Dan Jurafsky",
        p: "Free Textbook",
        d: 3,
        h: 80,
        u: "https://web.stanford.edu/~jurafsky/slp3/",
        desc: "Jurafsky经典NLP/语音处理教材",
        t: ["语音识别", "语言模型", "分词"],
        cat: "speech"
    },
    {
        n: "Automatic Speech Recognition",
        i: "CMU",
        p: "CMU",
        d: 4,
        h: 60,
        u: "https://www.cs.cmu.edu/~11-785/",
        desc: "CMU语音识别课程",
        t: ["HMM", "CTC", "端到端ASR"],
        cat: "speech"
    },
    {
        n: "Deep Learning for Speech",
        i: "Various",
        p: "Coursera",
        d: 3,
        h: 30,
        u: "https://www.coursera.org/learn/deep-learning-speech-recognition",
        desc: "深度学习语音识别专项",
        t: ["RNN", "注意力", "CTC"],
        cat: "speech"
    },
    {
        n: "Neural Text-to-Speech",
        i: "Microsoft",
        p: "Free",
        d: 3,
        h: 20,
        u: "https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/",
        desc: "神经网络语音合成技术",
        t: ["Tacotron", "声码器", "WaveNet"],
        cat: "speech"
    },
    {
        n: "Audio Machine Learning",
        i: "Various",
        p: "Free",
        d: 3,
        h: 25,
        u: "https://github.com/iver56/audiomentations",
        desc: "音频ML数据增强与处理",
        t: ["音频增强", "特征提取", "Mel频谱"],
        cat: "speech"
    }
];

// Time Series
const TIMESERIES_COURSES = [
    {
        n: "Practical Time Series Analysis",
        i: "SUNY",
        p: "Coursera",
        d: 2,
        h: 24,
        u: "https://www.coursera.org/learn/practical-time-series-analysis",
        desc: "时间序列分析实践课程",
        t: ["ARIMA", "季节性", "预测"],
        cat: "timeseries"
    },
    {
        n: "Time Series Analysis",
        i: "Various",
        p: "edX",
        d: 3,
        h: 30,
        u: "https://www.edx.org/learn/time-series",
        desc: "时间序列分析方法",
        t: ["平稳性", "自回归", "移动平均"],
        cat: "timeseries"
    },
    {
        n: "Sequence Models for Time Series",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 20,
        u: "https://www.coursera.org/learn/tensorflow-sequences-time-series-and-prediction",
        desc: "TensorFlow时序预测",
        t: ["RNN", "LSTM", "Conv1D", "预测"],
        cat: "timeseries"
    },
    {
        n: "Forecasting with ML",
        i: "Various",
        p: "Coursera",
        d: 3,
        h: 25,
        u: "https://www.coursera.org/learn/ai-for-time-series",
        desc: "ML时序预测方法",
        t: ["Prophet", "XGBoost", "特征工程"],
        cat: "timeseries"
    },
    {
        n: "Anomaly Detection in Time Series",
        i: "Various",
        p: "Free",
        d: 3,
        h: 15,
        u: "https://github.com/topics/anomaly-detection",
        desc: "时序异常检测方法",
        t: ["Isolation Forest", "自编码器", "统计方法"],
        cat: "timeseries"
    }
];

// Graph Neural Networks
const GNN_COURSES = [
    {
        n: "CS224W ML with Graphs",
        i: "Stanford",
        p: "Stanford",
        d: 4,
        h: 80,
        u: "https://web.stanford.edu/class/cs224w/",
        desc: "Jure Leskovec图ML课程，GNN/知识图谱/社交网络",
        t: ["GNN", "知识图谱", "图嵌入"],
        cat: "gnn"
    },
    {
        n: "Graph Neural Networks",
        i: "Various",
        p: "Free",
        d: 3,
        h: 30,
        u: "https://distill.pub/",
        desc: "GNN交互式教程与可视化",
        t: ["消息传递", "图卷积", "图注意力"],
        cat: "gnn"
    },
    {
        n: "Knowledge Graphs",
        i: "Various",
        p: "Coursera",
        d: 3,
        h: 30,
        u: "https://www.coursera.org/learn/knowledge-graphs",
        desc: "知识图谱构建与推理",
        t: ["RDF", "OWL", "链接预测"],
        cat: "gnn"
    },
    {
        n: "Deep Learning on Graphs",
        i: "Various",
        p: "Free",
        d: 4,
        h: 25,
        u: "https://cs224w.stanford.edu/",
        desc: "图深度学习高级主题",
        t: ["图Transformer", "异构图"],
        cat: "gnn"
    }
];

// Multimodal Learning
const MULTIMODAL_COURSES = [
    {
        n: "CS25 Transformers United V6",
        i: "Stanford",
        p: "Stanford",
        d: 3,
        h: 40,
        u: "https://web.stanford.edu/class/cs25/",
        desc: "Transformer前沿含多模态主题",
        t: ["CLIP", "多模态Transformer"],
        cat: "multimodal"
    },
    {
        n: "Multimodal Machine Learning",
        i: "CMU",
        p: "CMU",
        d: 4,
        h: 60,
        u: "https://cmu-multimodal.github.io/",
        desc: "CMU多模态ML课程，对齐/融合/生成",
        t: ["对齐", "融合", "表示学习"],
        cat: "multimodal"
    },
    {
        n: "Stable Diffusion",
        i: "Hugging Face",
        p: "Free",
        d: 3,
        h: 20,
        u: "https://huggingface.co/learn/diffusion-course",
        desc: "扩散模型课程，文生图/图生文",
        t: ["扩散模型", "文生图", "ControlNet"],
        cat: "multimodal"
    },
    {
        n: "Generative AI for Everyone",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 1,
        h: 6,
        u: "https://www.coursera.org/learn/generative-ai-for-everyone",
        desc: "生成式AI面向所有人的入门课",
        t: ["生成式AI", "应用", "伦理"],
        cat: "multimodal"
    }
];

// AI Infrastructure
const INFRA_COURSES = [
    {
        n: "Made With ML (MLOps)",
        i: "Goku Mohandas",
        p: "Free",
        d: 3,
        h: 60,
        u: "https://madewithml.com/",
        desc: "MLOps全流程：设计/数据/模型/部署/监控",
        t: ["MLOps", "CI/CD", "监控"],
        cat: "infra"
    },
    {
        n: "Full Stack Deep Learning",
        i: "FSDL",
        p: "Free",
        d: 3,
        h: 40,
        u: "https://fullstackdeeplearning.com/course/2022/",
        desc: "全栈深度学习：部署/测试/监控",
        t: ["部署", "测试", "数据管理"],
        cat: "infra"
    },
    {
        n: "ML Engineering for Production",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 60,
        u: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
        desc: "MLOps专项：数据管道/模型部署/监控",
        t: ["TensorFlow", "数据管道", "模型服务"],
        cat: "infra"
    },
    {
        n: "TensorFlow Developer Certificate",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 60,
        u: "https://www.coursera.org/professional-certificates/tensorflow-in-practice",
        desc: "TensorFlow开发者认证",
        t: ["TensorFlow", "模型构建", "部署"],
        cat: "infra"
    },
    {
        n: "Ultra-Scale Distributed Training",
        i: "Various",
        p: "Free",
        d: 5,
        h: 30,
        u: "https://huggingface.co/learn/parallelism-course",
        desc: "大规模分布式训练课程",
        t: ["数据并行", "模型并行", "流水线并行"],
        cat: "infra"
    },
    {
        n: "Efficient ML Systems",
        i: "Various",
        p: "Free",
        d: 4,
        h: 35,
        u: "https://efficientml.ai/",
        desc: "高效ML系统：量化/剪枝/蒸馏",
        t: ["量化", "剪枝", "知识蒸馏"],
        cat: "infra"
    },
    {
        n: "CUDA Programming",
        i: "NVIDIA",
        p: "Free",
        d: 4,
        h: 40,
        u: "https://developer.nvidia.com/cuda-education",
        desc: "NVIDIA CUDA编程教程",
        t: ["CUDA", "GPU计算", "并行编程"],
        cat: "infra"
    },
    {
        n: "JAX for Machine Learning",
        i: "Google",
        p: "Free",
        d: 3,
        h: 30,
        u: "https://jax.readthedocs.io/",
        desc: "JAX框架教程：自动微分/JIT/并行",
        t: ["JAX", "XLA", "TPU"],
        cat: "infra"
    }
];