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
        n: "Computer Vision Basics",
        i: "University at Buffalo",
        p: "Coursera",
        d: 1,
        h: 18,
        u: "https://www.coursera.org/learn/computer-vision-basics",
        desc: "CV入门基础课程",
        t: ["图像处理", "边缘检测", "特征提取"],
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
    }
];