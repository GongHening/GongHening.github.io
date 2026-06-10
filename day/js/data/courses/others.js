/**
 * Other Domain Courses
 * Courses for: rl, genai, agents, safety, robotics, speech, infra
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
    },
    {
        n: "RLHF: RL from Human Feedback",
        i: "Various",
        p: "Free",
        d: 4,
        h: 15,
        u: "https://huggingface.co/blog/rlhf",
        desc: "RLHF技术详解：奖励模型/PPO/DPO",
        t: ["RLHF", "PPO", "DPO", "对齐"],
        cat: "rl"
    },
    // === Top University Additions ===
    {
        n: "CS238: Decision Making under Uncertainty",
        i: "Stanford",
        p: "Stanford",
        d: 4,
        h: 70,
        u: "https://cs238.stanford.edu",
        desc: "Mykel Kochenderfer，MDP/POMDP/动态规划/蒙特卡洛树搜索/贝叶斯决策",
        t: ["MDP", "POMDP", "蒙特卡洛", "决策理论"],
        cat: "rl"
    },
    {
        n: "10-703: Deep Reinforcement Learning",
        i: "CMU",
        p: "CMU",
        d: 4,
        h: 60,
        u: "https://www.andrew.cmu.edu/course/10-703/",
        desc: "Deepak Pathak深度RL，DQN/策略梯度/PPO/模仿学习/模型基RL/Sim-to-Real",
        t: ["DQN", "PPO", "模仿学习", "模型基RL"],
        cat: "rl"
    },
    {
        n: "16-745: Optimal Control and RL",
        i: "CMU",
        p: "CMU",
        d: 4,
        h: 50,
        u: "http://optcontrolcourse.com/",
        desc: "Zachary Manchester，LQR/iLQR/MPC/动态规划/策略梯度，经典控制与RL桥梁",
        t: ["LQR", "MPC", "轨迹优化", "控制"],
        cat: "rl"
    }
];

// Generative AI (merged with Multimodal)
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
    },
    {
        n: "Stable Diffusion",
        i: "Hugging Face",
        p: "Free",
        d: 3,
        h: 20,
        u: "https://huggingface.co/learn/diffusion-course",
        desc: "扩散模型课程，文生图/图生文/ControlNet",
        t: ["扩散模型", "文生图", "ControlNet"],
        cat: "genai"
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
        cat: "genai"
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
        cat: "genai"
    },
    {
        n: "Music Generation with AI",
        i: "Various",
        p: "Free",
        d: 3,
        h: 15,
        u: "https://huggingface.co/blog/music-generation",
        desc: "AI音乐生成：MusicGen/AudioLM/乐理",
        t: ["音乐生成", "MusicGen", "音频合成"],
        cat: "genai"
    },
    // === Top University Additions ===
    {
        n: "CS 294-280: Generative AI",
        i: "UC Berkeley",
        p: "Berkeley",
        d: 5,
        h: 50,
        u: "https://www.cs.berkeley.edu/~pabbeel/cs294-280-241/",
        desc: "Pieter Abbeel生成式AI，LLM/扩散模型/GAN/VAE/RLHF/多模态生成",
        t: ["LLM", "扩散模型", "RLHF", "多模态"],
        cat: "genai"
    },
    {
        n: "11-777: Multimodal Machine Learning",
        i: "CMU",
        p: "CMU",
        d: 4,
        h: 60,
        u: "http://www.cs.cmu.edu/~morency/teaching/multimodal-ml-spring2024/",
        desc: "Louis-Philippe Morency多模态ML，表示学习/对齐/融合/视觉语言/跨模态推理",
        t: ["多模态", "对齐", "融合", "视觉语言"],
        cat: "genai"
    }
];

// AI Agents
const AGENTS_COURSES = [
    {
        n: "AI Agents and Agentic AI",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 8,
        u: "https://www.coursera.org/learn/ai-agents-in-langgraph",
        desc: "AI Agent核心概念与LangGraph实现",
        t: ["Agent", "LangGraph", "工具调用"],
        cat: "agents"
    },
    {
        n: "Building Agentic RAG with LLMs",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 10,
        u: "https://www.coursera.org/learn/building-agentic-rag-with-llms",
        desc: "构建Agentic RAG系统：检索/推理/行动",
        t: ["Agentic RAG", "检索", "推理"],
        cat: "agents"
    },
    {
        n: "LangGraph for Agent Workflows",
        i: "LangChain",
        p: "Free",
        d: 3,
        h: 15,
        u: "https://langchain-ai.github.io/langgraph/",
        desc: "LangGraph构建有状态的Agent工作流",
        t: ["LangGraph", "状态机", "工作流"],
        cat: "agents"
    },
    {
        n: "CrewAI Multi-Agent Systems",
        i: "CrewAI",
        p: "Free",
        d: 3,
        h: 12,
        u: "https://docs.crewai.com/",
        desc: "CrewAI多智能体协作框架教程",
        t: ["多智能体", "CrewAI", "协作"],
        cat: "agents"
    },
    {
        n: "Agentic Design Patterns",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 5,
        u: "https://www.coursera.org/learn/agentic-design-patterns",
        desc: "Agent设计模式：ReAct/Plan-Execute/反思",
        t: ["ReAct", "设计模式", "规划"],
        cat: "agents"
    },
    {
        n: "Building AI Agents with AutoGen",
        i: "Microsoft",
        p: "Free",
        d: 3,
        h: 12,
        u: "https://microsoft.github.io/autogen/",
        desc: "Microsoft AutoGen多Agent对话框架",
        t: ["AutoGen", "多Agent", "对话"],
        cat: "agents"
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
        n: "Interpretable Machine Learning",
        i: "Christoph Molnar",
        p: "Free Book",
        d: 3,
        h: 30,
        u: "https://christophm.github.io/interpretable-ml-book/",
        desc: "可解释ML：SHAP/LIME/特征重要性/部分依赖图",
        t: ["SHAP", "LIME", "可解释性"],
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
    },
    // === Top University Additions ===
    {
        n: "6.800/6.821: Underactuated Robotics",
        i: "MIT",
        p: "MIT",
        d: 5,
        h: 80,
        u: "https://underactuated.csail.mit.edu/",
        desc: "Russ Tedrake，非线性动力学/轨迹优化/MPC/腿式运动/Lyapunov分析，含完整视频",
        t: ["轨迹优化", "MPC", "动力学", "控制"],
        cat: "robotics"
    },
    {
        n: "6.843: Robotic Manipulation",
        i: "MIT",
        p: "MIT",
        d: 4,
        h: 60,
        u: "http://manipulation.mit.edu",
        desc: "Russ Tedrake机器人操作，运动学/动力学/规划/控制/感知/Sim-to-Real",
        t: ["操作", "运动学", "Sim-to-Real"],
        cat: "robotics"
    },
    {
        n: "CS237A: Principles of Robot Autonomy",
        i: "Stanford",
        p: "Stanford",
        d: 4,
        h: 70,
        u: "https://stanford-cs237a.github.io",
        desc: "机器人感知/状态估计/运动规划/控制/自主决策",
        t: ["感知", "状态估计", "运动规划", "自主"],
        cat: "robotics"
    },
    {
        n: "CS326: Advanced Robotic Manipulation",
        i: "Stanford",
        p: "Stanford",
        d: 5,
        h: 30,
        u: "https://cs326.stanford.edu",
        desc: "Jeannette Bohg高级操作，抓取/接触丰富操作/学习基操作/触觉感知",
        t: ["抓取", "接触操作", "学习基操作"],
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
        n: "Whisper & Open-Source ASR",
        i: "OpenAI / Hugging Face",
        p: "Free",
        d: 2,
        h: 10,
        u: "https://huggingface.co/openai/whisper-large-v3",
        desc: "Whisper语音识别模型使用与微调",
        t: ["Whisper", "ASR", "多语言"],
        cat: "speech"
    },
    {
        n: "Voice Cloning & TTS",
        i: "Various",
        p: "Free",
        d: 3,
        h: 15,
        u: "https://github.com/coqui-ai/TTS",
        desc: "语音克隆与TTS系统：VITS/Bark/XTTS",
        t: ["语音克隆", "VITS", "TTS"],
        cat: "speech"
    },
    // === Top University Addition ===
    {
        n: "6.345: Automatic Speech Recognition",
        i: "MIT",
        p: "MIT OCW",
        d: 4,
        h: 60,
        u: "https://ocw.mit.edu/courses/6-345-automatic-speech-recognition-spring-2003/",
        desc: "James Glass语音识别课程，HMM/声学建模/语言建模/解码/特征提取",
        t: ["HMM", "声学建模", "解码", "特征提取"],
        cat: "speech"
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
        i: "MIT",
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
    },
    {
        n: "vLLM & LLM Inference Optimization",
        i: "Various",
        p: "Free",
        d: 4,
        h: 20,
        u: "https://docs.vllm.ai/",
        desc: "vLLM推理引擎：PagedAttention/连续批处理/量化部署",
        t: ["vLLM", "推理优化", "PagedAttention"],
        cat: "infra"
    },
    {
        n: "Docker & Kubernetes for ML",
        i: "Various",
        p: "Free",
        d: 3,
        h: 25,
        u: "https://kubernetes.io/docs/tutorials/",
        desc: "容器化ML部署：Docker/K8s/GPU集群",
        t: ["Docker", "Kubernetes", "GPU集群"],
        cat: "infra"
    },
    // === Top University Additions ===
    {
        n: "15-418/618: Parallel Computer Architecture",
        i: "CMU",
        p: "CMU",
        d: 4,
        h: 60,
        u: "http://15418.courses.cs.cmu.edu/",
        desc: "并行计算课程，SIMD/MIMD/GPU编程/MapReduce/同步/性能优化",
        t: ["并行计算", "GPU编程", "CUDA", "性能优化"],
        cat: "infra"
    },
    {
        n: "CS149: Parallel Computing",
        i: "Stanford",
        p: "Stanford",
        d: 3,
        h: 60,
        u: "https://cs149.stanford.edu",
        desc: "Kunle Olukotun并行计算，共享内存/GPU编程/并行算法/异构计算",
        t: ["并行架构", "GPU", "异构计算", "CUDA"],
        cat: "infra"
    }
];
