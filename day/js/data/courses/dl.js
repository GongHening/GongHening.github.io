/**
 * Deep Learning Courses
 * Courses in the 'dl' domain (including GNN)
 */

const DL_COURSES = [
    {
        n: "Deep Learning Specialization",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 140,
        u: "https://www.coursera.org/specializations/deep-learning",
        desc: "Andrew Ng深度学习5门课专项，CNN/RNN/Transformer",
        t: ["CNN", "RNN", "Transformer", "TensorFlow"],
        cat: "dl"
    },
    {
        n: "Practical Deep Learning for Coders",
        i: "fast.ai",
        p: "fast.ai",
        d: 2,
        h: 70,
        u: "https://course.fast.ai/",
        desc: "Jeremy Howard实战深度学习，从零构建模型",
        t: ["PyTorch", "fastai", "实战"],
        cat: "dl"
    },
    {
        n: "6.S191 Introduction to Deep Learning",
        i: "MIT",
        p: "MIT",
        d: 3,
        h: 30,
        u: "http://introtodeeplearning.com/",
        desc: "MIT深度学习入门，涵盖基础到前沿",
        t: ["TensorFlow", "序列模型", "深度强化学习"],
        cat: "dl"
    },
    {
        n: "CS230 Deep Learning",
        i: "Stanford",
        p: "Coursera",
        d: 2,
        h: 60,
        u: "https://www.coursera.org/specializations/deep-learning",
        desc: "Stanford深度学习课程，CNN和RNN应用",
        t: ["CNN", "RNN", "项目实践"],
        cat: "dl"
    },
    {
        n: "CS231n Deep Learning for CV",
        i: "Stanford",
        p: "Stanford Online",
        d: 4,
        h: 120,
        u: "http://cs231n.stanford.edu/",
        desc: "Fei-Fei Li经典CV课程，CNN架构与视觉识别",
        t: ["图像分类", "目标检测", "迁移学习"],
        cat: "dl"
    },
    {
        n: "Convolutional Neural Networks",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 35,
        u: "https://www.coursera.org/learn/convolutional-neural-networks",
        desc: "CNN专项课程，卷积/池化/架构设计",
        t: ["卷积", "池化", "ResNet"],
        cat: "dl"
    },
    {
        n: "Sequence Models",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 3,
        h: 35,
        u: "https://www.coursera.org/learn/nlp-sequence-models",
        desc: "RNN/LSTM/GRU序列模型与NLP应用",
        t: ["LSTM", "GRU", "注意力机制"],
        cat: "dl"
    },
    {
        n: "11-785 Introduction to Deep Learning",
        i: "CMU",
        p: "CMU",
        d: 3,
        h: 120,
        u: "https://www.cs.cmu.edu/~11-785/",
        desc: "CMU深度学习课程，涵盖现代DL技术",
        t: ["PyTorch", "优化", "正则化"],
        cat: "dl"
    },
    {
        n: "Neural Networks and Deep Learning",
        i: "Michael Nielsen",
        p: "Free Book",
        d: 3,
        h: 40,
        u: "http://neuralnetworksanddeeplearning.com/",
        desc: "经典神经网络与深度学习在线书",
        t: ["反向传播", "梯度下降", "神经网络"],
        cat: "dl"
    },
    {
        n: "Practical PyTorch",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 35,
        u: "https://www.coursera.org/learn/deep-neural-networks-pytorch",
        desc: "PyTorch深度学习实践",
        t: ["PyTorch", "模型训练", "调试"],
        cat: "dl"
    },
    {
        n: "CS224W ML with Graphs",
        i: "Stanford",
        p: "Stanford",
        d: 4,
        h: 80,
        u: "https://web.stanford.edu/class/cs224w/",
        desc: "Jure Leskovec图ML课程，GNN/知识图谱/社交网络",
        t: ["GNN", "知识图谱", "图嵌入"],
        cat: "dl"
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
        cat: "dl"
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
        cat: "dl"
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
        cat: "dl"
    },
    {
        n: "Deep Learning: Foundations & Applications",
        i: "NPTEL / IIT",
        p: "NPTEL",
        d: 3,
        h: 60,
        u: "https://nptel.ac.in/courses/106106188",
        desc: "IIT深度学习课程，理论与印度工程实践",
        t: ["CNN", "RNN", "正则化"],
        cat: "dl"
    },
    {
        n: "Dive into Deep Learning",
        i: "UC Berkeley / Amazon",
        p: "Free Book",
        d: 3,
        h: 80,
        u: "https://d2l.ai/",
        desc: "交互式深度学习教材，含代码/练习/数学推导",
        t: ["PyTorch", "MXNet", "Jupyter"],
        cat: "dl"
    },
    {
        n: "TinyML & Edge AI",
        i: "Harvard",
        p: "edX",
        d: 3,
        h: 40,
        u: "https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning",
        desc: "微型ML部署到嵌入式设备",
        t: ["TinyML", "TensorFlow Lite", "嵌入式"],
        cat: "dl"
    },
    {
        n: "Fastai Advanced Deep Learning",
        i: "fast.ai",
        p: "fast.ai",
        d: 3,
        h: 50,
        u: "https://course.fast.ai/Lessons/part2.html",
        desc: "fast.ai高级课程，从零实现Transformer/优化器",
        t: ["Transformer", "优化器", "从零实现"],
        cat: "dl"
    }
];