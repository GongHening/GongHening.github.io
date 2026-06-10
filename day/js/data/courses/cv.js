/**
 * Computer Vision Courses
 * Courses in the 'cv' domain
 */

const CV_COURSES = [
    {
        n: "CS231n Deep Learning for CV",
        i: "Stanford",
        p: "Stanford Online",
        d: 4,
        h: 120,
        u: "http://cs231n.stanford.edu/",
        desc: "视觉识别经典课程，CNN架构设计与训练",
        t: ["CNN", "迁移学习", "数据增强"],
        cat: "cv"
    },
    {
        n: "6.8300 Advances in CV",
        i: "MIT",
        p: "MIT OCW",
        d: 5,
        h: 90,
        u: "https://ocw.mit.edu/courses/6-8300-advances-in-computer-vision-spring-2025/",
        desc: "Vincent Sitzmann高级CV课程，几何/生成/具身智能",
        t: ["神经辐射场", "扩散模型", "多视图几何"],
        cat: "cv"
    },
    {
        n: "CNN for Detection & Segmentation",
        i: "DeepLearning.AI",
        p: "Coursera",
        d: 2,
        h: 35,
        u: "https://www.coursera.org/learn/convolutional-neural-networks",
        desc: "目标检测与实例分割实战",
        t: ["YOLO", "R-CNN", "U-Net"],
        cat: "cv"
    },
    {
        n: "YOLO Object Detection",
        i: "Ultralytics",
        p: "Free",
        d: 3,
        h: 15,
        u: "https://docs.ultralytics.com/",
        desc: "YOLO系列目标检测最新教程",
        t: ["YOLOv8", "实时检测", "部署"],
        cat: "cv"
    },
    {
        n: "CS236 Deep Generative Models",
        i: "Stanford",
        p: "Stanford",
        d: 5,
        h: 80,
        u: "https://deepgenerativemodels.github.io/",
        desc: "Stefano Ermon生成模型课程，VAE/GAN/扩散模型",
        t: ["VAE", "GAN", "扩散模型", "Flow"],
        cat: "cv"
    },
    {
        n: "Neural Radiance Fields",
        i: "Various",
        p: "Free",
        d: 4,
        h: 25,
        u: "https://www.matthewtancik.com/nerf",
        desc: "NeRF神经辐射场，3D场景重建",
        t: ["NeRF", "3D重建", "体积渲染"],
        cat: "cv"
    },
    // === Top University Additions ===
    {
        n: "CS131: Computer Vision Foundations",
        i: "Stanford",
        p: "Stanford",
        d: 2,
        h: 50,
        u: "http://cs131.stanford.edu",
        desc: "Niebles/Krishna CV入门，图像形成/特征检测/分割/目标识别/3D重建",
        t: ["特征检测", "分割", "3D重建", "入门"],
        cat: "cv"
    },
    {
        n: "CS 280: Computer Vision",
        i: "UC Berkeley",
        p: "Berkeley",
        d: 5,
        h: 80,
        u: "http://people.eecs.berkeley.edu/~cs280/",
        desc: "Jitendra Malik/Alyosha Efros研究生CV课程，目标识别/分割/3D重建/场景理解",
        t: ["目标识别", "分割", "3D重建", "场景理解"],
        cat: "cv"
    },
    {
        n: "16-824: Visual Learning and Recognition",
        i: "CMU",
        p: "CMU",
        d: 4,
        h: 60,
        u: "http://visual-learning.cs.cmu.edu/",
        desc: "Deepak Pathak视觉学习，目标检测/自监督/生成模型/ViT/NeRF/CLIP/SAM",
        t: ["ViT", "自监督", "CLIP", "SAM"],
        cat: "cv"
    },
    {
        n: "16-385/720: Computer Vision",
        i: "CMU",
        p: "CMU",
        d: 3,
        h: 80,
        u: "http://www.cs.cmu.edu/~16385/",
        desc: "Deva Ramanan CV课程，图像形成/特征匹配/分割/目标识别/3D重建/光流",
        t: ["特征匹配", "分割", "3D重建", "光流"],
        cat: "cv"
    },
    {
        n: "6.819/6.869: Advances in Computer Vision",
        i: "MIT",
        p: "MIT",
        d: 4,
        h: 70,
        u: "http://6.819.csail.mit.edu/",
        desc: "Antonio Torralba/Bill Freeman高级CV，场景理解/深度学习视觉/立体视觉/运动估计",
        t: ["场景理解", "立体视觉", "运动估计"],
        cat: "cv"
    }
];
