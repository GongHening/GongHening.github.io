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
        n: "RLHF: Reinforcement Learning from Human Feedback",
        i: "Various",
        p: "Free",
        d: 4,
        h: 15,
        u: "https://huggingface.co/blog/rlhf",
        desc: "RLHF技术详解：奖励模型/PPO/DPO",
        t: ["RLHF", "PPO", "DPO", "对齐"],
        cat: "rl"
    },
    {
        n: "Decision Transformer",
        i: "Various",
        p: "Free",
        d: 4,
        h: 15,
        u: "https://arxiv.org/abs/2106.01345",
        desc: "将RL重构为序列建模问题",
        t: ["Decision Transformer", "序列建模", "离线RL"],
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
        n: "Text-to-Image with Diffusion Models",
        i: "Various",
        p: "Free",
        d: 3,
        h: 15,
        u: "https://huggingface.co/blog/stable_diffusion",
        desc: "文生图技术详解：SDXL/DALL-E/Midjourney原理",
        t: ["文生图", "SDXL", "DALL-E"],
        cat: "genai"
    },
    {
        n: "Video Generation with AI",
        i: "Various",
        p: "Free",
        d: 4,
        h: 15,
        u: "https://github.com/showlab/VideoGPT",
        desc: "AI视频生成：Sora/VideoGPT/视频编辑",
        t: ["视频生成", "Sora", "时序生成"],
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
    }
];

// AI Agents (NEW)
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
        n: "Function Calling & Tool Use",
        i: "Google",
        p: "Free",
        d: 2,
        h: 8,
        u: "https://ai.google.dev/docs/function_calling",
        desc: "LLM函数调用与工具使用教程",
        t: ["函数调用", "工具使用", "API"],
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
    },
    {
        n: "OpenAI Assistants API",
        i: "OpenAI",
        p: "Free",
        d: 2,
        h: 6,
        u: "https://platform.openai.com/docs/assistants/overview",
        desc: "OpenAI Assistants API：代码解释器/文件搜索/函数调用",
        t: ["Assistants API", "代码解释器", "文件搜索"],
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
        n: "Machine Learning Security",
        i: "Various",
        p: "Free",
        d: 4,
        h: 30,
        u: "https://mlsecurity.ai/",
        desc: "ML安全：对抗攻击/模型窃取/数据投毒",
        t: ["对抗攻击", "模型窃取", "数据投毒"],
        cat: "safety"
    },
    {
        n: "Red Teaming AI Systems",
        i: "Various",
        p: "Free",
        d: 3,
        h: 20,
        u: "https://learnprompting.org/docs/hacking/red_teaming",
        desc: "AI红队测试：越狱/提示注入/安全评估",
        t: ["红队", "越狱", "提示注入"],
        cat: "safety"
    },
    {
        n: "Interpretable Machine Learning",
        i: "Various",
        p: "Free",
        d: 3,
        h: 30,
        u: "https://christophm.github.io/interpretable-ml-book/",
        desc: "可解释ML：SHAP/LIME/特征重要性",
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
    },
    {
        n: "ROS2 for Beginners",
        i: "Various",
        p: "Free",
        d: 2,
        h: 25,
        u: "https://docs.ros.org/en/humble/Tutorials.html",
        desc: "ROS2机器人操作系统入门教程",
        t: ["ROS2", "节点", "话题"],
        cat: "robotics"
    },
    {
        n: "Sim-to-Real Robot Learning",
        i: "Various",
        p: "Free",
        d: 5,
        h: 20,
        u: "https://sites.google.com/view/sim2real-surveys",
        desc: "仿真到真实迁移：域随机化/系统辨识",
        t: ["Sim-to-Real", "域随机化", "迁移学习"],
        cat: "robotics"
    },
    {
        n: "Robot Manipulation",
        i: "Various",
        p: "Free",
        d: 4,
        h: 30,
        u: "https://manipulation.csail.mit.edu/",
        desc: "Russ Tedrake机器人操作课程",
        t: ["抓取", "操作", "运动规划"],
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
    {
        n: "Speech Emotion Recognition",
        i: "Various",
        p: "Free",
        d: 3,
        h: 15,
        u: "https://github.com/speechbrain/speechbrain",
        desc: "语音情感识别与说话人识别",
        t: ["情感识别", "说话人识别", "SpeechBrain"],
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
    {
        n: "Weights & Biases MLOps",
        i: "W&B",
        p: "Free",
        d: 2,
        h: 15,
        u: "https://docs.wandb.ai/",
        desc: "W&B实验追踪/超参搜索/模型管理",
        t: ["W&B", "实验追踪", "超参搜索"],
        cat: "infra"
    },
    {
        n: "Triton Compiler for ML",
        i: "OpenAI",
        p: "Free",
        d: 5,
        h: 20,
        u: "https://triton-lang.org/",
        desc: "Triton GPU编程：自定义算子/高性能计算",
        t: ["Triton", "GPU编程", "自定义算子"],
        cat: "infra"
    }
];
