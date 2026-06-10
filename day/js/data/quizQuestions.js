/**
 * Day — Do AI Yourself
 * Quiz Questions Data
 * 11 domains × ~10 questions each
 */

var QUIZ_QUESTIONS = {
    ml: [
        { id: 'ml-1', question: '以下哪个不是梯度下降的变体？', options: ['SGD', 'Adam', 'Dropout', 'RMSProp'], answer: 2, explanation: 'Dropout 是正则化技术，不是优化算法。SGD、Adam、RMSProp 都是梯度下降的变体。', difficulty: 2, tags: ['optimization'] },
        { id: 'ml-2', question: '过拟合（Overfitting）的典型表现是什么？', options: ['训练集和测试集表现都差', '训练集表现好，测试集表现差', '训练集表现差，测试集表现好', '训练集和测试集表现都好'], answer: 1, explanation: '过拟合意味着模型在训练数据上学得太好，包括噪声，导致泛化能力差。', difficulty: 1, tags: ['overfitting'] },
        { id: 'ml-3', question: '偏差-方差权衡中，高偏差通常意味着？', options: ['模型太复杂', '模型太简单（欠拟合）', '数据量太少', '学习率太高'], answer: 1, explanation: '高偏差表示模型过于简单，无法捕捉数据的真实模式，导致欠拟合。', difficulty: 2, tags: ['bias-variance'] },
        { id: 'ml-4', question: 'K 折交叉验证的主要目的是什么？', options: ['增加训练数据', '更可靠地评估模型性能', '加速训练过程', '减少模型参数'], answer: 1, explanation: 'K 折交叉验证通过多次训练-验证划分，给出更稳定可靠的性能估计。', difficulty: 1, tags: ['cross-validation'] },
        { id: 'ml-5', question: 'L1 正则化（Lasso）相比 L2 正则化（Ridge）的特点是？', options: ['产生稀疏解', '不会将权重变为零', '计算更复杂', '只能用于线性模型'], answer: 0, explanation: 'L1 正则化倾向于产生稀疏权重矩阵，可以用于特征选择。', difficulty: 3, tags: ['regularization'] },
        { id: 'ml-6', question: '随机森林相比单棵决策树的优势是？', options: ['训练速度更快', '更容易解释', '减少过拟合风险', '需要更少的树'], answer: 2, explanation: '随机森林通过集成多棵树的预测来减少方差，降低过拟合风险。', difficulty: 2, tags: ['ensemble'] },
        { id: 'ml-7', question: 'SVM 中核函数的作用是什么？', options: ['减少数据维度', '将数据映射到高维空间使其线性可分', '加速训练', '选择特征'], answer: 1, explanation: '核函数通过隐式地将数据映射到高维特征空间，使原本线性不可分的数据变得线性可分。', difficulty: 3, tags: ['svm'] },
        { id: 'ml-8', question: '精确率（Precision）和召回率（Recall）的调和平均数叫做？', options: ['准确率', 'F1 分数', 'AUC', 'MSE'], answer: 1, explanation: 'F1 分数是精确率和召回率的调和平均数，综合衡量分类性能。', difficulty: 1, tags: ['evaluation'] },
        { id: 'ml-9', question: '特征缩放（Feature Scaling）对以下哪个算法影响最大？', options: ['决策树', 'KNN', '随机森林', '朴素贝叶斯'], answer: 1, explanation: 'KNN 基于距离度量，特征尺度直接影响距离计算，所以对特征缩放最敏感。', difficulty: 2, tags: ['preprocessing'] },
        { id: 'ml-10', question: '以下哪个不是无监督学习算法？', options: ['K-Means', 'PCA', '线性回归', 'DBSCAN'], answer: 2, explanation: '线性回归是监督学习算法，需要标签数据。K-Means、PCA、DBSCAN 都是无监督学习。', difficulty: 1, tags: ['supervised', 'unsupervised'] }
    ],
    dl: [
        { id: 'dl-1', question: '反向传播算法的核心思想是什么？', options: ['前向计算输出', '利用链式法则计算梯度', '更新网络权重', '初始化参数'], answer: 1, explanation: '反向传播利用链式法则从输出层向输入层逐层计算损失函数对每个参数的梯度。', difficulty: 2, tags: ['backpropagation'] },
        { id: 'dl-2', question: '卷积神经网络（CNN）中卷积层的主要作用是？', options: ['减少参数数量', '提取局部特征', '增加非线性', '归一化数据'], answer: 1, explanation: '卷积层通过卷积核在输入上滑动，提取局部空间特征，如边缘、纹理等。', difficulty: 1, tags: ['cnn'] },
        { id: 'dl-3', question: 'RNN 梯度消失问题的主要原因是？', options: ['学习率太小', '网络层数太多', '时间步展开后的长链式梯度乘积', '激活函数选择不当'], answer: 2, explanation: 'RNN 通过时间展开后，梯度需要连续乘以权重矩阵，导致梯度指数级衰减。', difficulty: 3, tags: ['rnn', 'vanishing-gradient'] },
        { id: 'dl-4', question: 'LSTM 通过什么机制解决梯度消失问题？', options: ['更深的网络', '门控机制和细胞状态', '更大的学习率', 'Dropout'], answer: 1, explanation: 'LSTM 引入门控机制（遗忘门、输入门、输出门）和细胞状态，允许信息长期保留。', difficulty: 3, tags: ['lstm'] },
        { id: 'dl-5', question: 'Batch Normalization 的主要好处不包括？', options: ['加速训练', '允许更高的学习率', '完全替代 Dropout', '减少对初始化的敏感度'], answer: 2, explanation: 'Batch Normalization 不能完全替代 Dropout，两者解决不同问题，有时会同时使用。', difficulty: 2, tags: ['batch-norm'] },
        { id: 'dl-6', question: 'ReLU 激活函数相比 Sigmoid 的优势是？', options: ['输出范围在 0-1 之间', '计算简单且缓解梯度消失', '总是产生稀疏激活', '适用于所有场景'], answer: 1, explanation: 'ReLU 计算简单（max(0,x)），正区间梯度恒为 1，不会像 Sigmoid 那样梯度趋近于零。', difficulty: 2, tags: ['activation'] },
        { id: 'dl-7', question: 'Adam 优化器结合了哪两种方法的优点？', options: ['SGD 和 L-BFGS', 'Momentum 和 RMSProp', 'AdaGrad 和 SGD', '牛顿法和梯度下降'], answer: 1, explanation: 'Adam 结合了 Momentum（动量）的一阶矩估计和 RMSProp 的二阶矩估计。', difficulty: 3, tags: ['optimizer'] },
        { id: 'dl-8', question: '迁移学习在什么情况下最有效？', options: ['源任务和目标任务完全无关', '源任务和目标任务相似，且源数据量大', '目标数据量远大于源数据', '不需要微调'], answer: 1, explanation: '迁移学习在源任务与目标任务相关、源数据丰富时效果最好，可以复用已学到的特征。', difficulty: 2, tags: ['transfer-learning'] },
        { id: 'dl-9', question: '残差网络（ResNet）的核心创新是什么？', options: ['更深的网络', '跳跃连接（Skip Connection）', '更大的卷积核', '全局平均池化'], answer: 1, explanation: 'ResNet 通过跳跃连接让梯度可以直接跳过若干层传播，解决了深层网络的退化问题。', difficulty: 2, tags: ['resnet'] },
        { id: 'dl-10', question: 'Dropout 在训练和测试时的行为有何不同？', options: ['训练和测试都随机丢弃', '训练随机丢弃，测试使用全部神经元', '测试随机丢弃，训练使用全部', '两者都不丢弃'], answer: 1, explanation: '训练时随机丢弃一定比例的神经元，测试时使用全部神经元但权重需按保留比例缩放。', difficulty: 2, tags: ['dropout'] }
    ],
    nlp: [
        { id: 'nlp-1', question: 'Word2Vec 的两种训练模式是？', options: ['CBOW 和 Skip-gram', 'Encoder 和 Decoder', 'Attention 和 Self-attention', 'Pre-training 和 Fine-tuning'], answer: 0, explanation: 'Word2Vec 有 CBOW（用上下文预测中心词）和 Skip-gram（用中心词预测上下文）两种模式。', difficulty: 2, tags: ['word-embedding'] },
        { id: 'nlp-2', question: 'Transformer 模型的核心注意力机制叫做？', options: ['硬注意力', '自注意力（Self-Attention）', '交叉注意力', '局部注意力'], answer: 1, explanation: 'Transformer 的核心是自注意力机制，让每个位置都能关注到序列中的所有其他位置。', difficulty: 2, tags: ['attention', 'transformer'] },
        { id: 'nlp-3', question: 'BERT 的预训练任务包括哪些？', options: ['语言翻译和摘要', 'MLM（掩码语言模型）和 NSP（下一句预测）', '文本分类和命名实体识别', '文本生成和问答'], answer: 1, explanation: 'BERT 通过 MLM（随机遮盖词语预测）和 NSP（判断两句是否相邻）两个任务进行预训练。', difficulty: 2, tags: ['bert'] },
        { id: 'nlp-4', question: 'BPE（Byte Pair Encoding）分词的主要优势是？', options: ['速度最快', '能处理未登录词（OOV）', '不需要训练', '只适用于英文'], answer: 1, explanation: 'BPE 通过子词合并策略，可以将未见过的词拆分为已知子词，有效处理 OOV 问题。', difficulty: 3, tags: ['tokenization'] },
        { id: 'nlp-5', question: 'Attention 机制中 Q、K、V 分别代表什么？', options: ['查询、键、值', '质量、种类、验证', '量化、知识、向量', '队列、键值、变量'], answer: 0, explanation: 'Query（查询）、Key（键）、Value（值）是注意力机制的三个核心组件，通过 Q·K^T 计算注意力权重。', difficulty: 2, tags: ['attention'] },
        { id: 'nlp-6', question: 'GPT 系列模型采用的预训练方式是？', options: ['双向编码', '自回归语言模型（从左到右）', '序列到序列', '对比学习'], answer: 1, explanation: 'GPT 采用自回归方式，从左到右预测下一个 token，是单向的语言模型。', difficulty: 2, tags: ['gpt', 'language-model'] },
        { id: 'nlp-7', question: 'BLEU 分数主要用于评估什么任务？', options: ['文本分类', '机器翻译质量', '情感分析', '命名实体识别'], answer: 1, explanation: 'BLEU 通过计算机器翻译输出与参考译文的 n-gram 重叠度来评估翻译质量。', difficulty: 2, tags: ['evaluation'] },
        { id: 'nlp-8', question: '位置编码（Positional Encoding）在 Transformer 中的作用是？', options: ['加速训练', '注入序列位置信息', '减少参数', '增加非线性'], answer: 1, explanation: 'Transformer 没有循环结构，需要位置编码来让模型知道每个 token 在序列中的位置。', difficulty: 2, tags: ['transformer'] },
        { id: 'nlp-9', question: '命名实体识别（NER）属于什么类型的 NLP 任务？', options: ['序列分类', '序列标注', '文本生成', '关系抽取'], answer: 1, explanation: 'NER 为序列中的每个 token 分配标签（如人名、地名、机构名），是典型的序列标注任务。', difficulty: 1, tags: ['ner'] },
        { id: 'nlp-10', question: '微调（Fine-tuning）预训练语言模型时，通常使用什么学习率？', options: ['和预训练一样大', '比预训练小很多', '比预训练大很多', '不需要学习率'], answer: 1, explanation: '微调时使用较小的学习率（如 2e-5 到 5e-5），避免破坏预训练学到的知识。', difficulty: 2, tags: ['fine-tuning'] }
    ],
    cv: [
        { id: 'cv-1', question: '卷积操作中"感受野"指的是什么？', options: ['卷积核的大小', '输出特征图的尺寸', '输入图像中影响输出像素的区域', '网络的深度'], answer: 2, explanation: '感受野是输出特征图上一个像素对应输入图像的区域大小，随网络深度增加而增大。', difficulty: 2, tags: ['convolution'] },
        { id: 'cv-2', question: '池化层（Pooling）的主要作用是？', options: ['增加特征维度', '降低空间维度，提供平移不变性', '增加非线性', '学习特征'], answer: 1, explanation: '池化通过下采样减小特征图尺寸，同时提供一定程度的平移不变性。', difficulty: 1, tags: ['pooling'] },
        { id: 'cv-3', question: 'YOLO 算法的核心思想是？', options: ['两阶段检测', '将检测转化为回归问题，一次前向传播完成', '基于区域提议', '使用滑动窗口'], answer: 1, explanation: 'YOLO（You Only Look Once）将目标检测视为回归问题，一次前向传播同时预测位置和类别。', difficulty: 3, tags: ['object-detection'] },
        { id: 'cv-4', question: '图像分割任务中，语义分割和实例分割的区别是？', options: ['没有区别', '语义分割区分同类实例，实例分割不区分', '语义分割不区分同类实例，实例分割区分', '语义分割只处理二分类'], answer: 2, explanation: '语义分割为每个像素分配类别但不区分同类不同实例；实例分割则区分每个单独的物体实例。', difficulty: 2, tags: ['segmentation'] },
        { id: 'cv-5', question: '数据增强（Data Augmentation）在 CV 中的主要目的是？', options: ['减少训练时间', '增加数据多样性，减少过拟合', '提高图像分辨率', '减少模型参数'], answer: 1, explanation: '通过对训练图像进行翻转、旋转、裁剪等变换，增加数据多样性，提升模型泛化能力。', difficulty: 1, tags: ['data-augmentation'] },
        { id: 'cv-6', question: 'ResNet 的跳跃连接解决了什么问题？', options: ['过拟合', '深层网络的退化问题', '计算效率', '数据不足'], answer: 1, explanation: '跳跃连接让深层网络至少能表现得和浅层一样好，解决了增加深度反而性能下降的退化问题。', difficulty: 2, tags: ['resnet'] },
        { id: 'cv-7', question: 'GAN 中生成器和判别器的关系是？', options: ['合作关系', '对抗博弈关系', '独立训练', '共享参数'], answer: 1, explanation: 'GAN 中生成器试图生成逼真数据欺骗判别器，判别器试图区分真假，两者形成对抗博弈。', difficulty: 2, tags: ['gan'] },
        { id: 'cv-8', question: '迁移学习中使用预训练 ImageNet 模型的原理是？', options: ['ImageNet 包含所有数据', '浅层学到的边缘、纹理特征具有通用性', '不需要微调', '只能用于图像分类'], answer: 1, explanation: 'CNN 浅层学习的边缘、纹理等低级特征在不同视觉任务中具有通用性，可以迁移复用。', difficulty: 2, tags: ['transfer-learning'] },
        { id: 'cv-9', question: '1×1 卷积的主要作用是什么？', options: ['提取更大感受野', '通道数降维/升维', '增加空间分辨率', '替代全连接层'], answer: 1, explanation: '1×1 卷积可以在不改变空间尺寸的情况下调整通道数，实现跨通道信息融合和降维。', difficulty: 3, tags: ['convolution'] },
        { id: 'cv-10', question: 'IoU（Intersection over Union）在目标检测中的作用是？', options: ['损失函数', '衡量预测框与真实框的重叠程度', '特征提取', '数据增强'], answer: 1, explanation: 'IoU 计算预测框与真实框交集面积除以并集面积，是评估检测框质量的核心指标。', difficulty: 1, tags: ['evaluation'] }
    ],
    rl: [
        { id: 'rl-1', question: '马尔可夫决策过程（MDP）的五元组不包括？', options: ['状态空间 S', '动作空间 A', '奖励函数 R', '学习率 α'], answer: 3, explanation: 'MDP 由 (S, A, P, R, γ) 组成：状态、动作、转移概率、奖励、折扣因子。学习率不在其中。', difficulty: 2, tags: ['mdp'] },
        { id: 'rl-2', question: 'Q-Learning 是一种什么类型的算法？', options: ['基于策略', '基于价值（Value-based）', '基于模型', '模仿学习'], answer: 1, explanation: 'Q-Learning 通过学习动作价值函数 Q(s,a) 来选择最优动作，是经典的基于价值的方法。', difficulty: 2, tags: ['q-learning'] },
        { id: 'rl-3', question: '探索-利用困境（Exploration-Exploitation）中，ε-greedy 策略是？', options: ['总是选最优动作', '以 ε 概率随机探索，1-ε 概率选最优', '完全随机', '只探索不利用'], answer: 1, explanation: 'ε-greedy 以小概率 ε 随机选择动作（探索），大概率选择当前最优动作（利用）。', difficulty: 1, tags: ['exploration'] },
        { id: 'rl-4', question: '策略梯度方法直接优化的是？', options: ['价值函数', '策略函数的参数', '环境模型', '奖励函数'], answer: 1, explanation: '策略梯度方法直接对策略函数 π(a|s) 的参数进行梯度上升，最大化期望回报。', difficulty: 3, tags: ['policy-gradient'] },
        { id: 'rl-5', question: 'PPO 算法的核心改进是什么？', options: ['使用更深的网络', '限制策略更新幅度，提高稳定性', '引入注意力机制', '使用离线数据'], answer: 1, explanation: 'PPO（Proximal Policy Optimization）通过裁剪目标函数限制策略更新幅度，兼顾性能和稳定性。', difficulty: 3, tags: ['ppo'] },
        { id: 'rl-6', question: 'Actor-Critic 架构中 Actor 和 Critic 分别负责什么？', options: ['Actor 评估价值，Critic 选择动作', 'Actor 选择动作，Critic 评估价值', '两者都选择动作', '两者都评估价值'], answer: 1, explanation: 'Actor 负责选择动作（策略），Critic 负责评估状态价值，两者相互配合训练。', difficulty: 2, tags: ['actor-critic'] },
        { id: 'rl-7', question: '奖励塑形（Reward Shaping）的目的是？', options: ['减少计算量', '提供更密集的奖励信号加速学习', '增加探索', '改变环境动力学'], answer: 1, explanation: '奖励塑形通过添加中间奖励信号，让稀疏奖励环境中的学习更容易收敛。', difficulty: 2, tags: ['reward-shaping'] },
        { id: 'rl-8', question: '模型无关的强化学习（Model-Free）的特点是？', options: ['需要知道环境转移概率', '不需要学习环境模型', '只能用于离散动作', '收敛速度最快'], answer: 1, explanation: 'Model-Free 方法直接从经验中学习策略或价值函数，不需要建立环境模型。', difficulty: 2, tags: ['model-free'] },
        { id: 'rl-9', question: '多智能体强化学习中的主要挑战是？', options: ['计算资源', '环境非平稳性', '奖励稀疏', '动作空间大'], answer: 1, explanation: '多智能体环境中，每个智能体的策略变化会导致环境对其他智能体而言是非平稳的。', difficulty: 3, tags: ['multi-agent'] },
        { id: 'rl-10', question: '模仿学习（Imitation Learning）的核心思想是？', options: ['从奖励中学习', '从专家示范中学习', '从环境模型中学习', '从随机探索中学习'], answer: 1, explanation: '模仿学习通过观察专家的示范行为来学习策略，避免了手动设计奖励函数的困难。', difficulty: 2, tags: ['imitation-learning'] }
    ],
    genai: [
        { id: 'genai-1', question: '扩散模型（Diffusion Model）的基本原理是？', options: ['生成对抗训练', '逐步添加噪声再逐步去噪', '变分推断', '自回归生成'], answer: 1, explanation: '扩散模型先通过前向过程逐步添加噪声直到纯噪声，再通过反向过程逐步去噪生成数据。', difficulty: 3, tags: ['diffusion'] },
        { id: 'genai-2', question: 'GAN 训练中最常见的问题是？', options: ['收敛太慢', '模式坍塌（Mode Collapse）', '参数太多', '数据不足'], answer: 1, explanation: '模式坍塌指生成器只能生成有限种类的样本，无法覆盖数据的全部分布。', difficulty: 2, tags: ['gan'] },
        { id: 'genai-3', question: 'VAE（变分自编码器）相比普通自编码器的优势是？', options: ['编码更快', '可以生成新样本', '参数更少', '不需要解码器'], answer: 1, explanation: 'VAE 学习数据的概率分布，可以从分布中采样生成新的数据样本。', difficulty: 2, tags: ['vae'] },
        { id: 'genai-4', question: 'Prompt Engineering 中"Few-shot"指的是？', options: ['不给任何示例', '给模型几个输入-输出示例', '只给输出示例', '微调模型'], answer: 1, explanation: 'Few-shot prompting 在提示中提供几个完整的输入-输出示例，帮助模型理解任务格式。', difficulty: 1, tags: ['prompt-engineering'] },
        { id: 'genai-5', question: 'Stable Diffusion 是哪种类型的生成模型？', options: ['GAN', '自回归模型', '潜在扩散模型', 'Flow 模型'], answer: 2, explanation: 'Stable Diffusion 是在潜在空间中运行的扩散模型，通过 VAE 编码到低维空间再做扩散。', difficulty: 3, tags: ['text-to-image'] },
        { id: 'genai-6', question: '多模态模型（Multimodal）指的是？', options: ['只能处理文本', '同时处理多种类型数据（文本、图像、音频等）', '使用多种训练方法', '有多个输出头'], answer: 1, explanation: '多模态模型能够同时理解和生成多种类型的数据，如文本、图像、音频、视频等。', difficulty: 1, tags: ['multimodal'] },
        { id: 'genai-7', question: 'RLHF 的全称和作用是？', options: ['强化学习从人类反馈中对齐模型', '循环学习层级特征', '随机梯度下降变体', '数据增强方法'], answer: 0, explanation: 'RLHF（Reinforcement Learning from Human Feedback）通过人类偏好反馈来对齐模型行为与人类意图。', difficulty: 2, tags: ['rlhf'] },
        { id: 'genai-8', question: 'LoRA 微调的核心思想是？', options: ['修改所有参数', '在权重矩阵旁添加低秩分解的旁路', '只训练最后一层', '增加网络深度'], answer: 1, explanation: 'LoRA 冻结原始权重，在旁添加低秩矩阵 A·B，只训练 A 和 B，大幅减少可训练参数。', difficulty: 3, tags: ['fine-tuning'] },
        { id: 'genai-9', question: 'Temperature 参数在文本生成中的作用是？', options: ['控制生成速度', '控制输出的随机性和多样性', '控制生成长度', '控制模型大小'], answer: 1, explanation: 'Temperature 缩放 logits 后再采样，高温度增加随机性/多样性，低温度趋向确定性输出。', difficulty: 2, tags: ['generation'] },
        { id: 'genai-10', question: 'Zero-shot 学习指的是？', options: ['不需要任何数据', '模型在没有见过目标任务示例的情况下完成任务', '不需要训练', '只能处理分类任务'], answer: 1, explanation: 'Zero-shot 指模型在没有见过目标任务的具体示例的情况下，仅凭任务描述就能完成任务。', difficulty: 2, tags: ['zero-shot'] }
    ],
    agents: [
        { id: 'agents-1', question: 'AI Agent 的核心能力不包括？', options: ['规划（Planning）', '记忆（Memory）', '工具使用（Tool Use）', '数据标注'], answer: 3, explanation: 'AI Agent 的核心能力包括规划、记忆、工具使用和推理，数据标注不是 Agent 的核心能力。', difficulty: 1, tags: ['agent-architecture'] },
        { id: 'agents-2', question: 'ReAct 框架的核心思想是？', options: ['只推理不行动', '交替进行推理和行动', '只行动不推理', '并行推理和行动'], answer: 1, explanation: 'ReAct 让模型交替进行推理（Reasoning）和行动（Acting），用推理指导行动，用行动结果改进推理。', difficulty: 2, tags: ['react'] },
        { id: 'agents-3', question: 'RAG（检索增强生成）的作用是？', options: ['加速推理', '让模型能利用外部知识库回答问题', '减少模型参数', '替代微调'], answer: 1, explanation: 'RAG 在生成前先检索相关文档，将检索结果作为上下文输入模型，减少幻觉并引入最新知识。', difficulty: 2, tags: ['rag'] },
        { id: 'agents-4', question: '函数调用（Function Calling）在 Agent 中的作用是？', options: ['定义模型架构', '让 LLM 能够调用外部工具和 API', '优化模型性能', '处理多语言'], answer: 1, explanation: '函数调用让 LLM 能够以结构化方式请求调用外部工具、API 或数据库，扩展模型能力。', difficulty: 2, tags: ['tool-use'] },
        { id: 'agents-5', question: 'Chain-of-Thought（思维链）提示的作用是？', options: ['减少推理步骤', '引导模型展示中间推理过程', '加速生成', '减少幻觉'], answer: 1, explanation: '思维链提示引导模型逐步展示推理过程，显著提升复杂推理任务的性能。', difficulty: 2, tags: ['chain-of-thought'] },
        { id: 'agents-6', question: '多智能体系统中"编排"（Orchestration）指的是？', options: ['单个 Agent 的推理', '协调多个 Agent 的协作和通信', '模型训练策略', '数据预处理'], answer: 1, explanation: '编排负责管理多个 Agent 之间的任务分配、通信和协调，确保高效协作。', difficulty: 3, tags: ['multi-agent'] },
        { id: 'agents-7', question: 'Agent 的短期记忆通常用什么实现？', options: ['模型权重', '上下文窗口中的对话历史', '外部数据库', '微调数据'], answer: 1, explanation: '短期记忆通常利用 LLM 的上下文窗口，将近期的对话历史和工具调用结果放在 prompt 中。', difficulty: 2, tags: ['memory'] },
        { id: 'agents-8', question: '反思（Reflection）机制在 Agent 中的作用是？', options: ['加速推理', '让 Agent 评估和改进自己的输出', '增加记忆容量', '选择工具'], answer: 1, explanation: '反思让 Agent 检查自己的输出质量，识别错误并迭代改进，提升任务完成质量。', difficulty: 2, tags: ['reflection'] },
        { id: 'agents-9', question: 'Agentic RAG 与传统 RAG 的区别是？', options: ['没有区别', 'Agent 可以主动决定何时检索、检索什么、如何整合', '只用向量数据库', '不需要 LLM'], answer: 1, explanation: 'Agentic RAG 让 Agent 智能地决定是否需要检索、检索什么内容、以及如何整合检索结果。', difficulty: 3, tags: ['rag'] },
        { id: 'agents-10', question: 'Agent 规划能力中的"任务分解"指的是？', options: ['把大模型拆成小模型', '将复杂任务拆分为可管理的子任务', '分配计算资源', '数据并行处理'], answer: 1, explanation: '任务分解是将复杂目标拆分为一系列更简单、可独立执行的子任务，逐步完成。', difficulty: 2, tags: ['planning'] }
    ],
    safety: [
        { id: 'safety-1', question: 'AI 对齐（Alignment）的核心目标是什么？', options: ['提高模型性能', '让 AI 行为符合人类意图和价值观', '减少计算成本', '增加模型大小'], answer: 1, explanation: 'AI 对齐的目标是确保 AI 系统的行为与人类的意图、偏好和价值观保持一致。', difficulty: 2, tags: ['alignment'] },
        { id: 'safety-2', question: '红队测试（Red Teaming）在 AI 安全中的作用是？', options: ['训练模型', '主动发现模型的漏洞和有害行为', '优化推理速度', '收集数据'], answer: 1, explanation: '红队测试通过模拟对抗性使用场景，主动发现模型可能产生的有害输出或安全漏洞。', difficulty: 2, tags: ['red-teaming'] },
        { id: 'safety-3', question: 'AI 模型中的偏见（Bias）主要来源是？', options: ['模型架构', '训练数据中的社会偏见和不均衡', '计算资源不足', '学习率选择'], answer: 1, explanation: '模型偏见主要来自训练数据中包含的社会偏见、刻板印象和数据不均衡。', difficulty: 2, tags: ['bias'] },
        { id: 'safety-4', question: '对抗样本（Adversarial Examples）指的是？', options: ['噪声数据', '经过微小扰动就能欺骗模型的输入', '测试数据', '增强数据'], answer: 1, explanation: '对抗样本是对输入施加人眼不可察觉的微小扰动，却能导致模型产生错误输出。', difficulty: 3, tags: ['robustness'] },
        { id: 'safety-5', question: '可解释性（Interpretability）在 AI 安全中的重要性是？', options: ['不重要', '帮助理解和信任模型决策，发现潜在问题', '只用于学术研究', '降低模型性能'], answer: 1, explanation: '可解释性让我们理解模型为何做出特定决策，有助于发现偏见、错误和安全风险。', difficulty: 2, tags: ['interpretability'] },
        { id: 'safety-6', question: '越狱攻击（Jailbreak）针对的是 AI 的什么机制？', options: ['训练过程', '安全防护和内容过滤机制', '推理速度', '模型大小'], answer: 1, explanation: '越狱攻击试图绕过模型的安全防护和内容过滤，让模型生成被禁止的内容。', difficulty: 2, tags: ['jailbreak'] },
        { id: 'safety-7', question: '宪法 AI（Constitutional AI）的核心思想是？', options: ['使用更大的模型', '用一套原则指导模型自我修正', '完全依赖人类反馈', '不需要训练'], answer: 1, explanation: '宪法 AI 让模型依据一组预定义的原则（"宪法"）来自我评判和修正输出，减少对人类反馈的依赖。', difficulty: 3, tags: ['constitutional-ai'] },
        { id: 'safety-8', question: 'AI 安全中的"鲁棒性"指的是？', options: ['训练速度快', '模型在面对异常输入时仍能正常工作', '参数量大', '准确率高'], answer: 1, explanation: '鲁棒性指模型面对噪声、对抗样本、分布外数据等异常输入时仍能给出合理输出的能力。', difficulty: 2, tags: ['robustness'] },
        { id: 'safety-9', question: '负责任的 AI 开发不包括？', options: ['公平性评估', '隐私保护', '无限制地发布所有模型', '安全测试'], answer: 2, explanation: '负责任的 AI 开发需要评估公平性、保护隐私、进行安全测试，而不是无限制发布。', difficulty: 1, tags: ['responsible-ai'] },
        { id: 'safety-10', question: '差分隐私（Differential Privacy）的作用是？', options: ['加速训练', '在数据分析中保护个体隐私', '提高准确率', '减少模型大小'], answer: 1, explanation: '差分隐私通过向数据或查询结果添加校准噪声，确保单个个体的数据不会被泄露。', difficulty: 3, tags: ['privacy'] }
    ],
    robotics: [
        { id: 'robotics-1', question: '正运动学（Forward Kinematics）解决什么问题？', options: ['从关节角度计算末端位置', '从末端位置计算关节角度', '路径规划', '力控制'], answer: 0, explanation: '正运动学根据已知的关节角度和连杆参数，计算机器人末端执行器的位置和姿态。', difficulty: 2, tags: ['kinematics'] },
        { id: 'robotics-2', question: 'SLAM 的全称和作用是？', options: ['同时定位与地图构建', '传感器融合算法', '运动规划方法', '抓取规划方法'], answer: 0, explanation: 'SLAM（Simultaneous Localization and Mapping）让机器人在未知环境中同时估计自身位置和构建环境地图。', difficulty: 2, tags: ['slam'] },
        { id: 'robotics-3', question: '运动规划中 RRT 算法的特点是？', options: ['最优解', '快速概率完备的路径搜索', '只能用于平面', '需要梯度信息'], answer: 1, explanation: 'RRT（快速探索随机树）是一种概率完备的运动规划算法，能快速在高维空间中找到可行路径。', difficulty: 3, tags: ['motion-planning'] },
        { id: 'robotics-4', question: '机器人中的力/力矩控制主要用于？', options: ['提高运动速度', '在接触任务中控制交互力', '减少能耗', '路径规划'], answer: 1, explanation: '力控制用于需要与环境接触的任务（如装配、打磨），精确控制机器人与环境的交互力。', difficulty: 3, tags: ['control'] },
        { id: 'robotics-5', question: '传感器融合的目的是？', options: ['减少传感器数量', '综合多种传感器数据获得更准确的环境估计', '降低计算量', '替代 SLAM'], answer: 1, explanation: '传感器融合综合激光雷达、摄像头、IMU 等多种传感器的数据，获得比单一传感器更准确可靠的估计。', difficulty: 2, tags: ['sensor-fusion'] },
        { id: 'robotics-6', question: 'Sim-to-Real 迁移的挑战主要是？', options: ['仿真环境太贵', '仿真与真实环境之间的差异（Reality Gap）', '真实环境太简单', '不需要仿真'], answer: 1, explanation: 'Sim-to-Real 的主要挑战是仿真环境无法完全模拟真实世界的物理特性，存在"现实差距"。', difficulty: 3, tags: ['sim-to-real'] },
        { id: 'robotics-7', question: '抓取规划中需要考虑的关键因素不包括？', options: ['物体形状', '抓取稳定性', '物体的颜色', '力的分布'], answer: 2, explanation: '抓取规划需要考虑物体形状、重量、摩擦力、抓取稳定性和力的分布，颜色通常不是关键因素。', difficulty: 2, tags: ['grasping'] },
        { id: 'robotics-8', question: '机器人导航中"全局规划"和"局部规划"的区别是？', options: ['没有区别', '全局规划考虑整体路径，局部规划处理实时避障', '全局更快', '局部更安全'], answer: 1, explanation: '全局规划在已知地图上计算最优路径，局部规划根据实时传感器数据处理动态障碍物避让。', difficulty: 2, tags: ['navigation'] }
    ],
    speech: [
        { id: 'speech-1', question: '语音识别（ASR）系统的基本流程是？', options: ['文本→语音→特征', '音频→特征提取→声学模型→语言模型→文本', '音频→文本直接转换', '文本→音频→特征'], answer: 1, explanation: '传统 ASR 流程：音频信号经过特征提取、声学模型、发音词典和语言模型，最终输出文本。', difficulty: 2, tags: ['asr'] },
        { id: 'speech-2', question: '梅尔频率倒谱系数（MFCC）的设计灵感来自？', options: ['傅里叶变换', '人耳的非线性频率感知特性', '深度学习', '小波变换'], answer: 1, explanation: 'MFCC 的梅尔刻度模拟了人耳对频率的非线性感知——低频分辨率高，高频分辨率低。', difficulty: 3, tags: ['feature-extraction'] },
        { id: 'speech-3', question: '端到端语音识别模型的优势是？', options: ['需要更多组件', '减少流水线中的错误传播', '只能处理英文', '需要更多标注数据'], answer: 1, explanation: '端到端模型直接从音频映射到文本，避免了传统流水线中各组件之间的错误传播。', difficulty: 2, tags: ['end-to-end'] },
        { id: 'speech-4', question: '语音合成（TTS）中 WaveNet 的特点是？', options: ['拼接合成', '自回归逐样本生成高质量波形', '只能合成男声', '不需要训练'], answer: 1, explanation: 'WaveNet 通过自回归方式逐个音频样本生成波形，能产生非常自然的语音。', difficulty: 3, tags: ['tts'] },
        { id: 'speech-5', question: '说话人识别（Speaker Recognition）属于什么任务？', options: ['语音转文字', '识别说话人的身份', '语音合成', '语音增强'], answer: 1, explanation: '说话人识别通过分析语音特征来判断说话人的身份，可用于身份验证或声纹解锁。', difficulty: 1, tags: ['speaker-recognition'] },
        { id: 'speech-6', question: '语音克隆（Voice Cloning）的技术基础是？', options: ['简单的音频拼接', '学习说话人的声学特征嵌入', '改变音频播放速度', '使用变声器'], answer: 1, explanation: '语音克隆通过学习目标说话人的声音特征嵌入（speaker embedding），让 TTS 系统用该声音说话。', difficulty: 3, tags: ['voice-cloning'] },
        { id: 'speech-7', question: '语音增强（Speech Enhancement）的目标是？', options: ['增加音量', '从含噪语音中恢复干净语音', '改变音色', '语音识别'], answer: 1, explanation: '语音增强旨在从含有背景噪声的语音信号中提取或恢复出干净的语音。', difficulty: 2, tags: ['speech-enhancement'] }
    ],
    infra: [
        { id: 'infra-1', question: '数据并行和模型并行的区别是？', options: ['没有区别', '数据并行复制模型分数据，模型并行拆分模型到多设备', '数据并行更快', '模型并行更简单'], answer: 1, explanation: '数据并行在每个设备上复制完整模型、分配不同数据；模型并行将模型的不同部分放在不同设备上。', difficulty: 3, tags: ['distributed-training'] },
        { id: 'infra-2', question: '模型量化的主要目的是？', options: ['增加精度', '减少模型大小和加速推理', '增加训练速度', '增加模型参数'], answer: 1, explanation: '量化将模型权重从 FP32 降低到 INT8/INT4 等低精度格式，减小模型体积并加速推理。', difficulty: 2, tags: ['quantization'] },
        { id: 'infra-3', question: 'ONNX 格式的作用是？', options: ['训练框架', '提供跨框架的模型交换标准', '推理引擎', '数据格式'], answer: 1, explanation: 'ONNX（Open Neural Network Exchange）提供了一种开放的模型格式，支持在不同框架间转换模型。', difficulty: 2, tags: ['onnx'] },
        { id: 'infra-4', question: 'TensorRT 的主要功能是？', options: ['模型训练', 'NVIDIA GPU 上的高性能推理优化', '数据处理', '分布式训练'], answer: 1, explanation: 'TensorRT 是 NVIDIA 的推理优化器，通过层融合、量化等技术大幅提升 GPU 上的推理性能。', difficulty: 2, tags: ['inference'] },
        { id: 'infra-5', question: 'MLOps 的核心目标是？', options: ['只做模型训练', '将 ML 模型可靠地部署和维护到生产环境', '只做数据收集', '只做模型评估'], answer: 1, explanation: 'MLOps 将 DevOps 实践应用于机器学习，确保模型能可靠地部署、监控和更新。', difficulty: 2, tags: ['mlops'] },
        { id: 'infra-6', question: '梯度累积（Gradient Accumulation）的作用是？', options: ['减少内存使用', '在小 batch 上模拟大 batch 的效果', '加速训练', '减少参数'], answer: 1, explanation: '梯度累积在多个小 batch 上计算梯度并累加，等效于使用大 batch size，适用于显存不足的场景。', difficulty: 3, tags: ['training'] },
        { id: 'infra-7', question: 'KV Cache 在 LLM 推理中的作用是？', options: ['缓存训练数据', '缓存注意力的 Key-Value 避免重复计算', '缓存模型权重', '缓存输出结果'], answer: 1, explanation: 'KV Cache 缓存已计算过的注意力 Key 和 Value 矩阵，避免在自回归生成时重复计算。', difficulty: 3, tags: ['inference'] },
        { id: 'infra-8', question: '混合精度训练指的是？', options: ['只用 FP32', '同时使用 FP16 和 FP32 进行训练', '只用 FP16', '使用 INT8 训练'], answer: 1, explanation: '混合精度训练用 FP16 进行大部分计算以加速，同时保留 FP32 的主权重副本以维持数值稳定性。', difficulty: 2, tags: ['training'] },
        { id: 'infra-9', question: '模型服务（Model Serving）中批处理（Batching）的目的是？', options: ['减少模型大小', '将多个请求合并处理以提高 GPU 利用率', '减少延迟', '增加准确率'], answer: 1, explanation: '批处理将多个推理请求合并为一个 batch 送入 GPU，提高吞吐量和 GPU 利用率。', difficulty: 2, tags: ['serving'] },
        { id: 'infra-10', question: 'LoRA 在训练效率上的优势是？', options: ['训练更慢', '只训练少量低秩适配器参数，大幅减少显存和计算', '不需要 GPU', '不需要数据'], answer: 1, explanation: 'LoRA 冻结原始模型权重，只训练低秩分解的旁路矩阵，可训练参数量减少 10000 倍以上。', difficulty: 2, tags: ['efficient-training'] }
    ]
};

function getQuizQuestionsByDomain(domainId, count) {
    count = count || 5;
    var questions = QUIZ_QUESTIONS[domainId] || [];
    var shuffled = questions.slice().sort(function() { return Math.random() - 0.5; });
    return shuffled.slice(0, count);
}

function getAllQuizQuestions() {
    var all = [];
    var keys = Object.keys(QUIZ_QUESTIONS);
    for (var i = 0; i < keys.length; i++) {
        all = all.concat(QUIZ_QUESTIONS[keys[i]]);
    }
    return all;
}
