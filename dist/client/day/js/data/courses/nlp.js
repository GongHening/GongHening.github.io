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
    // === Top University Additions ===
    {
        n: "11-747: Neural Nets for NLP",
        i: "CMU",
        p: "CMU",
        d: 4,
        h: 80,
        u: "https://www.phontron.com/class/nn4nlp2024/",
        desc: "Graham Neubig NLP课程，词嵌入/Transformer/LLM/LoRA/RLHF/RAG，含完整视频",
        t: ["Transformer", "LLM", "LoRA", "RAG"],
        cat: "nlp"
    },
    {
        n: "11-711: Advanced NLP",
        i: "CMU",
        p: "CMU",
        d: 5,
        h: 60,
        u: "https://11711.github.io/",
        desc: "Neubig/Bisk高级NLP，语义解析/信息抽取/问答/对话/论文阅读",
        t: ["语义解析", "信息抽取", "论文阅读"],
        cat: "nlp"
    },
    {
        n: "6.806/6.864: Natural Language Processing",
        i: "MIT",
        p: "MIT",
        d: 4,
        h: 70,
        u: "https://people.csail.mit.edu/regina/6864/",
        desc: "Regina Barzilay NLP课程，语言建模/句法分析/机器翻译/信息抽取/深度学习NLP",
        t: ["语言建模", "机器翻译", "信息抽取"],
        cat: "nlp"
    },
    {
        n: "CS 288: Natural Language Processing",
        i: "UC Berkeley",
        p: "Berkeley",
        d: 4,
        h: 60,
        u: "https://people.eecs.berkeley.edu/~klein/cs288/",
        desc: "Dan Klein研究生NLP课程，语言建模/句法分析/语义分析/神经NLP",
        t: ["语言建模", "句法分析", "神经NLP"],
        cat: "nlp"
    }
];
