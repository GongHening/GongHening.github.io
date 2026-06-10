/**
 * Natural Language Processing Courses
 * Courses in the 'nlp' domain
 */

const NLP_COURSES = [
    {
        n: "CS224N NLP with Deep Learning",
        i: "Stanford",
        p: "Stanford Online",
        d: 4,
        h: 90,
        u: "http://web.stanford.edu/class/cs224n",
        desc: "Diyi Yang和Yejin Choi的NLP课程，词向量到LLM",
        t: ["词向量", "Transformer", "BERT", "GPT"],
        cat: "nlp"
    },
    {
        n: "NLP Specialization",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 120,
        u: "https://www.coursera.org/specializations/natural-language-processing",
        desc: "NLP专项：情感分析、翻译、问答",
        t: ["情感分析", "机器翻译", "注意力机制"],
        cat: "nlp"
    },
    {
        n: "Hugging Face NLP Course",
        i: "Hugging Face",
        p: "Free",
        d: 2,
        h: 60,
        u: "https://huggingface.co/learn/nlp-course",
        desc: "Hugging Face生态NLP课程，Transformers库实战",
        t: ["Transformers", "微调", "Hugging Face"],
        cat: "nlp"
    },
    {
        n: "CS324 Large Language Models",
        i: "Stanford",
        p: "Stanford",
        d: 5,
        h: 80,
        u: "https://stanford-cs324.github.io/winter2022/",
        desc: "Percy Liang等教授的LLM课程，建模/伦理/系统",
        t: ["GPT-3", "缩放定律", "安全"],
        cat: "nlp"
    },
    {
        n: "Generative AI with LLMs",
        i: "DeepLearning.AI / AWS",
        p: "Coursera",
        d: 3,
        h: 20,
        u: "https://www.coursera.org/learn/generative-ai-with-llms",
        desc: "LLM生成式AI课程，Transformer到RLHF",
        t: ["Transformer", "RLHF", "PEFT"],
        cat: "nlp"
    },
    {
        n: "CS25 Transformers United V6",
        i: "Stanford",
        p: "Stanford",
        d: 3,
        h: 40,
        u: "https://web.stanford.edu/class/cs25/",
        desc: "Transformer前沿研讨课，多模态/推理/部署",
        t: ["Transformer", "多模态", "推理"],
        cat: "nlp"
    },
    {
        n: "How Transformer LLMs Work",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 1,
        h: 8,
        u: "https://www.coursera.org/learn/how-transformer-llms-work",
        desc: "Transformer架构入门，理解LLM工作原理",
        t: ["Transformer", "注意力机制"],
        cat: "nlp"
    },
    {
        n: "Text Mining and Analytics",
        i: "University of Illinois",
        p: "Coursera",
        d: 3,
        h: 25,
        u: "https://www.coursera.org/learn/text-mining",
        desc: "文本挖掘：主题模型、情感分析、信息抽取",
        t: ["主题模型", "LDA", "信息抽取"],
        cat: "nlp"
    },
    {
        n: "CS276 Information Retrieval",
        i: "Stanford",
        p: "Stanford",
        d: 4,
        h: 60,
        u: "https://web.stanford.edu/class/cs276/",
        desc: "信息检索与搜索，倒排索引和排序",
        t: ["搜索引擎", "PageRank", "向量空间模型"],
        cat: "nlp"
    },
    {
        n: "LLMOps: Building LLM-Powered Apps",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 12,
        u: "https://www.coursera.org/learn/large-language-model-operations-llmops",
        desc: "LLM应用开发全流程：评估/监控/迭代",
        t: ["LLMOps", "评估", "应用开发"],
        cat: "nlp"
    },
    {
        n: "LangChain for LLM Application Development",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 8,
        u: "https://www.coursera.org/learn/langchain",
        desc: "LangChain框架：记忆/检索/链式调用",
        t: ["LangChain", "RAG", "记忆"],
        cat: "nlp"
    },
    {
        n: "Building RAG Agents with LLMs",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 10,
        u: "https://www.coursera.org/learn/building-agentic-rag-with-llms",
        desc: "用LLM构建检索增强生成(RAG)系统",
        t: ["RAG", "向量数据库", "嵌入"],
        cat: "nlp"
    },
    {
        n: "Finetuning Large Language Models",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 5,
        u: "https://www.coursera.org/learn/finetuning-large-language-models",
        desc: "LLM微调技术：LoRA/QLoRA/全参数微调",
        t: ["LoRA", "QLoRA", "PEFT"],
        cat: "nlp"
    },
    {
        n: "Natural Language Understanding",
        i: "Various",
        p: "edX",
        d: 4,
        h: 40,
        u: "https://www.edx.org/learn/natural-language-processing",
        desc: "NLU高级主题：语义解析/共指消解/问答",
        t: ["语义解析", "共指消解", "问答系统"],
        cat: "nlp"
    },
    {
        n: "Speech and Language Processing",
        i: "Dan Jurafsky",
        p: "Free Textbook",
        d: 3,
        h: 80,
        u: "https://web.stanford.edu/~jurafsky/slp3/",
        desc: "Jurafsky经典NLP/语音处理教材",
        t: ["NLP基础", "语言模型", "分词"],
        cat: "nlp"
    },
    {
        n: "Prompt Engineering Guide",
        i: "Various",
        p: "Free",
        d: 2,
        h: 15,
        u: "https://www.promptingguide.ai/",
        desc: "Prompt Engineering全面指南：CoT/Few-shot/ReAct",
        t: ["Prompt", "CoT", "Few-shot"],
        cat: "nlp"
    }
];