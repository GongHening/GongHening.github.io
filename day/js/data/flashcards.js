/**
 * Day — Do AI Yourself
 * Flashcard Data — AI Concept Cards
 * 11 domains × ~8-10 cards each
 */

var FLASHCARDS = {
    ml: [
        { id: 'gd', concept: '梯度下降', domain: 'ml', definition: '通过沿着损失函数的负梯度方向迭代更新参数来最小化损失的方法。', formula: 'θ = θ - α · ∇J(θ)', keyPoints: ['α 是学习率，控制步长大小', '过大会震荡不收敛，过小会收敛极慢', '常见变体：SGD、Adam、RMSProp'], related: ['learning-rate', 'loss-function'], difficulty: 2 },
        { id: 'overfitting', concept: '过拟合', domain: 'ml', definition: '模型在训练数据上表现很好，但在新数据上表现差的现象。模型学到了训练数据中的噪声和细节。', formula: '', keyPoints: ['训练误差低但验证误差高', '解决方法：正则化、Dropout、数据增强、早停', '根本原因：模型复杂度相对于数据量过高'], related: ['regularization', 'cross-validation'], difficulty: 1 },
        { id: 'bias-variance', concept: '偏差-方差权衡', domain: 'ml', definition: '模型误差 = 偏差² + 方差 + 不可约误差。偏差衡量模型的拟合能力，方差衡量模型对数据变化的敏感度。', formula: 'Error = Bias² + Variance + Irreducible', keyPoints: ['高偏差 = 欠拟合（模型太简单）', '高方差 = 过拟合（模型太复杂）', '目标：找到偏差和方差的平衡点'], related: ['overfitting', 'underfitting'], difficulty: 2 },
        { id: 'regularization', concept: '正则化', domain: 'ml', definition: '通过在损失函数中添加惩罚项来限制模型复杂度，防止过拟合的技术。', formula: 'L_regularized = L_original + λ·R(θ)', keyPoints: ['L1（Lasso）：产生稀疏解，可用于特征选择', 'L2（Ridge）：权重趋向小值但不为零', 'λ 控制正则化强度'], related: ['overfitting', 'lasso', 'ridge'], difficulty: 2 },
        { id: 'cross-validation', concept: '交叉验证', domain: 'ml', definition: '将数据分为 K 份，轮流用其中 K-1 份训练、1 份验证，最终取平均性能的模型评估方法。', formula: '', keyPoints: ['K 折交叉验证是最常用的变体', '留一法（LOO）是 K=N 的特殊情况', '比简单的训练/验证划分更可靠'], related: ['model-evaluation'], difficulty: 1 },
        { id: 'decision-tree', concept: '决策树', domain: 'ml', definition: '通过递归地将数据按特征划分来构建树形结构的监督学习算法，每个内部节点是一个特征判断。', formula: '', keyPoints: ['可解释性强，易于可视化', '容易过拟合，需要剪枝', '集成方法：随机森林、GBDT'], related: ['random-forest', 'ensemble'], difficulty: 1 },
        { id: 'svm', concept: '支持向量机', domain: 'ml', definition: '通过找到最大间隔超平面来分类数据的算法，支持向量是距离超平面最近的样本点。', formula: 'max margin = 2/||w||', keyPoints: ['核技巧：隐式映射到高维空间', '软间隔：允许部分误分类', '适合中小规模数据集'], related: ['kernel-trick', 'classification'], difficulty: 3 },
        { id: 'f1-score', concept: 'F1 分数', domain: 'ml', definition: '精确率和召回率的调和平均数，综合衡量分类模型的性能，特别适用于类别不平衡的情况。', formula: 'F1 = 2·P·R/(P+R)', keyPoints: ['精确率 = TP/(TP+FP)，预测为正中真正为正的比例', '召回率 = TP/(TP+FN)，实际为正中被正确预测的比例', 'F1 在两者之间取平衡'], related: ['precision', 'recall'], difficulty: 1 }
    ],
    dl: [
        { id: 'backprop', concept: '反向传播', domain: 'dl', definition: '利用链式法则从输出层向输入层逐层计算损失函数对每个参数梯度的算法。', formula: '∂L/∂w = ∂L/∂y · ∂y/∂w', keyPoints: ['是神经网络训练的核心算法', '前向传播计算输出，反向传播计算梯度', '梯度用于更新权重（梯度下降）'], related: ['gradient-descent', 'chain-rule'], difficulty: 2 },
        { id: 'cnn', concept: '卷积神经网络', domain: 'dl', definition: '使用卷积操作提取局部特征的深度学习架构，广泛应用于图像处理任务。', formula: '(f * g)(t) = Σ f(τ)·g(t-τ)', keyPoints: ['卷积核在输入上滑动提取局部特征', '参数共享大幅减少参数量', '池化层降低空间维度'], related: ['convolution', 'pooling', 'resnet'], difficulty: 2 },
        { id: 'rnn', concept: '循环神经网络', domain: 'dl', definition: '具有循环连接的神经网络，能处理序列数据，通过隐状态传递历史信息。', formula: 'h_t = f(W·h_{t-1} + U·x_t)', keyPoints: ['天然适合序列数据（文本、语音）', '存在梯度消失/爆炸问题', 'LSTM 和 GRU 是改进版本'], related: ['lstm', 'gru', 'sequence-model'], difficulty: 2 },
        { id: 'lstm', concept: '长短期记忆网络', domain: 'dl', definition: 'RNN 的改进版本，通过门控机制和细胞状态解决长期依赖问题。', formula: '', keyPoints: ['遗忘门：决定丢弃哪些信息', '输入门：决定更新哪些信息', '输出门：决定输出哪些信息', '细胞状态：信息的"传送带"'], related: ['rnn', 'gru', 'gate'], difficulty: 3 },
        { id: 'batch-norm', concept: '批量归一化', domain: 'dl', definition: '对每一层的输入进行归一化处理，使其均值为 0、方差为 1，加速训练并提高稳定性。', formula: 'y = γ·(x-μ)/σ + β', keyPoints: ['加速训练收敛', '允许使用更高的学习率', '有轻微正则化效果'], related: ['normalization', 'training'], difficulty: 2 },
        { id: 'dropout', concept: 'Dropout', domain: 'dl', definition: '训练时随机将一部分神经元的输出置零的正则化技术，防止神经元共适应。', formula: '', keyPoints: ['训练时随机丢弃，测试时使用全部', '丢弃率通常为 0.2-0.5', '相当于训练多个子网络的集成'], related: ['regularization', 'ensemble'], difficulty: 2 },
        { id: 'activation', concept: '激活函数', domain: 'dl', definition: '为神经网络引入非线性的函数，使网络能够学习复杂的非线性映射。', formula: 'ReLU: f(x) = max(0, x)', keyPoints: ['Sigmoid：输出 0-1，梯度消失问题', 'ReLU：计算简单，正区间梯度恒为 1', 'GELU：Transformer 中常用'], related: ['relu', 'sigmoid', 'gelu'], difficulty: 1 },
        { id: 'resnet-arch', concept: '残差网络', domain: 'dl', definition: '通过跳跃连接（Skip Connection）让信息跨层传递，解决深层网络的退化问题。', formula: 'y = F(x) + x', keyPoints: ['跳跃连接让梯度直接传播', '可以训练非常深的网络（100+层）', '残差学习比直接学习更容易'], related: ['skip-connection', 'deep-learning'], difficulty: 2 },
        { id: 'transfer-dl', concept: '迁移学习', domain: 'dl', definition: '将在大规模数据上预训练的模型知识迁移到新任务上的技术。', formula: '', keyPoints: ['浅层特征（边缘、纹理）具有通用性', '微调（Fine-tuning）：在目标任务上继续训练', '冻结部分层 + 训练新层'], related: ['fine-tuning', 'pre-training'], difficulty: 2 }
    ],
    nlp: [
        { id: 'word2vec', concept: '词嵌入', domain: 'nlp', definition: '将词语映射到低维稠密向量空间的技术，使语义相似的词在向量空间中距离相近。', formula: '', keyPoints: ['Word2Vec：CBOW 和 Skip-gram 两种模式', '语义关系可通过向量运算体现（如 king-man+woman≈queen）', 'GloVe、FastText 是其他词嵌入方法'], related: ['word2vec', 'glove'], difficulty: 2 },
        { id: 'attention-mech', concept: '注意力机制', domain: 'nlp', definition: '让模型在处理序列时能够动态地关注输入中不同位置的信息。', formula: 'Attention(Q,K,V) = softmax(QK^T/√d)V', keyPoints: ['Q（查询）、K（键）、V（值）是三个核心组件', '缩放因子 √d 防止点积过大', '自注意力：Q、K、V 来自同一序列'], related: ['self-attention', 'transformer'], difficulty: 2 },
        { id: 'transformer', concept: 'Transformer', domain: 'nlp', definition: '完全基于注意力机制的序列到序列模型架构，摒弃了循环和卷积结构。', formula: '', keyPoints: ['自注意力 + 位置编码', '编码器-解码器结构', '并行计算效率高', '是 BERT、GPT 等模型的基础'], related: ['attention', 'bert', 'gpt'], difficulty: 2 },
        { id: 'bert-model', concept: 'BERT', domain: 'nlp', definition: '基于 Transformer 编码器的双向预训练语言模型，通过 MLM 和 NSP 任务预训练。', formula: '', keyPoints: ['双向上下文理解', 'MLM：随机遮盖词语并预测', 'NSP：判断两句是否相邻', '适合理解型任务（分类、问答）'], related: ['transformer', 'pre-training'], difficulty: 2 },
        { id: 'gpt-model', concept: 'GPT', domain: 'nlp', definition: '基于 Transformer 解码器的自回归语言模型，从左到右逐个预测下一个 token。', formula: '', keyPoints: ['单向（从左到右）生成', '自回归：P(x) = Π P(x_t|x_{<t})', '适合生成型任务', '通过规模提升涌现能力'], related: ['transformer', 'language-model'], difficulty: 2 },
        { id: 'tokenization', concept: '分词', domain: 'nlp', definition: '将文本切分为模型可处理的基本单元（token）的过程。', formula: '', keyPoints: ['BPE：字节对编码，处理 OOV 问题', 'WordPiece：BERT 使用的分词方法', 'SentencePiece：语言无关的分词'], related: ['bpe', 'wordpiece'], difficulty: 1 },
        { id: 'fine-tuning-nlp', concept: '微调', domain: 'nlp', definition: '在预训练语言模型的基础上，使用特定任务数据进行进一步训练以适应下游任务。', formula: '', keyPoints: ['学习率通常比预训练小很多', '可以全参数微调或部分微调', 'LoRA 等方法减少可训练参数'], related: ['pre-training', 'transfer-learning'], difficulty: 2 },
        { id: 'embedding', concept: '位置编码', domain: 'nlp', definition: '为 Transformer 中的 token 添加位置信息的向量，因为自注意力本身不包含位置信息。', formula: 'PE(pos,2i) = sin(pos/10000^(2i/d))', keyPoints: ['正弦/余弦位置编码是经典方法', '可学习的位置编码也是常见选择', '相对位置编码关注 token 间的距离'], related: ['transformer', 'attention'], difficulty: 2 }
    ],
    cv: [
        { id: 'convolution-cv', concept: '卷积操作', domain: 'cv', definition: '使用卷积核在输入图像上滑动，计算局部区域的加权和以提取特征的操作。', formula: '(f*g)(i,j) = ΣΣ f(m,n)·g(i-m,j-n)', keyPoints: ['卷积核大小、步长、填充是关键参数', '参数共享：同一个卷积核在整个图像上共享', '浅层提取边缘纹理，深层提取语义特征'], related: ['cnn', 'feature-extraction'], difficulty: 2 },
        { id: 'pooling-cv', concept: '池化', domain: 'cv', definition: '对特征图进行下采样操作，减小空间维度，提供一定的平移不变性。', formula: '', keyPoints: ['最大池化：取局部最大值', '平均池化：取局部平均值', '通常使用 2×2 窗口、步长 2'], related: ['cnn', 'downsampling'], difficulty: 1 },
        { id: 'object-detection', concept: '目标检测', domain: 'cv', definition: '在图像中定位并分类多个目标的任务，输出目标的边界框和类别。', formula: '', keyPoints: ['两阶段：R-CNN 系列（先提候选框再分类）', '单阶段：YOLO、SSD（直接回归）', '评估指标：mAP（平均精度均值）'], related: ['yolo', 'rcnn', 'map'], difficulty: 2 },
        { id: 'segmentation', concept: '图像分割', domain: 'cv', definition: '为图像中的每个像素分配类别标签的任务，实现像素级的语义理解。', formula: '', keyPoints: ['语义分割：只分类不区分实例', '实例分割：区分同类不同实例', '全景分割：语义+实例的统一'], related: ['fcn', 'mask-rcnn'], difficulty: 2 },
        { id: 'data-aug-cv', concept: '数据增强', domain: 'cv', definition: '通过对训练图像进行随机变换来增加数据多样性的技术。', formula: '', keyPoints: ['几何变换：翻转、旋转、裁剪、缩放', '颜色变换：亮度、对比度、色调', '高级方法：Mixup、CutMix、AutoAugment'], related: ['overfitting', 'generalization'], difficulty: 1 },
        { id: 'resnet-cv', concept: 'ResNet', domain: 'cv', definition: '通过残差学习框架解决深层网络退化问题的经典网络架构。', formula: 'y = F(x,{W_i}) + x', keyPoints: ['跳跃连接：y = F(x) + x', '可以训练 152 层甚至更深的网络', 'ResNet-50/101/152 是常用变体'], related: ['skip-connection', 'deep-learning'], difficulty: 2 },
        { id: 'gan-cv', concept: 'GAN', domain: 'cv', definition: '由生成器和判别器对抗训练的生成模型框架。', formula: 'min_G max_D E[logD(x)] + E[log(1-D(G(z)))]', keyPoints: ['生成器：从噪声生成逼真图像', '判别器：区分真假图像', '训练不稳定，需要技巧'], related: ['generative-model', 'discriminator'], difficulty: 2 },
        { id: 'iou', concept: 'IoU', domain: 'cv', definition: '交并比（Intersection over Union），衡量预测框与真实框重叠程度的指标。', formula: 'IoU = |A∩B| / |A∪B|', keyPoints: ['IoU > 0.5 通常认为是正确检测', '是 COCO 等数据集的核心评估指标', '变体：GIoU、DIoU、CIoU'], related: ['evaluation', 'object-detection'], difficulty: 1 }
    ],
    rl: [
        { id: 'mdp', concept: '马尔可夫决策过程', domain: 'rl', definition: '强化学习的数学框架，由状态、动作、转移概率、奖励和折扣因子组成。', formula: '(S, A, P, R, γ)', keyPoints: ['马尔可夫性质：未来只依赖当前状态', '状态转移概率 P(s\'|s,a)', '折扣因子 γ 平衡即时和未来奖励'], related: ['bellman-equation', 'value-function'], difficulty: 2 },
        { id: 'q-learning-rl', concept: 'Q-Learning', domain: 'rl', definition: '一种无模型的、离策略的强化学习算法，通过学习动作价值函数来找到最优策略。', formula: 'Q(s,a) ← Q(s,a) + α[r + γ·max Q(s\') - Q(s,a)]', keyPoints: ['离策略：行为策略和目标策略不同', 'ε-greedy 平衡探索和利用', '收敛到最优 Q* 的条件充分'], related: ['value-function', 'sarsa'], difficulty: 2 },
        { id: 'policy-gradient-rl', concept: '策略梯度', domain: 'rl', definition: '直接优化策略函数参数的方法，通过梯度上升最大化期望回报。', formula: '∇J(θ) = E[∇log π_θ(a|s) · G_t]', keyPoints: ['直接优化策略，不需要价值函数', 'REINFORCE 是最简单的策略梯度算法', '可以处理连续动作空间'], related: ['reinforce', 'actor-critic'], difficulty: 3 },
        { id: 'exploration-rl', concept: '探索与利用', domain: 'rl', definition: '在尝试新动作（探索）和选择已知最优动作（利用）之间权衡的核心问题。', formula: '', keyPoints: ['ε-greedy：以小概率随机探索', 'UCB：基于不确定性探索', 'Thompson Sampling：基于贝叶斯采样'], related: ['epsilon-greedy', 'multi-armed-bandit'], difficulty: 2 },
        { id: 'ppo-rl', concept: 'PPO', domain: 'rl', definition: '近端策略优化，通过裁剪目标函数限制策略更新幅度，是目前最常用的策略梯度算法之一。', formula: 'L = min(r(θ)A, clip(r(θ), 1-ε, 1+ε)A)', keyPoints: ['裁剪比率限制更新幅度', '实现简单，超参数鲁棒', '被广泛用于 RLHF'], related: ['policy-gradient', 'trpo'], difficulty: 3 },
        { id: 'actor-critic-rl', concept: 'Actor-Critic', domain: 'rl', definition: '结合策略梯度（Actor）和价值函数（Critic）的强化学习架构。', formula: '', keyPoints: ['Actor：选择动作（策略网络）', 'Critic：评估状态价值（价值网络）', 'A3C、PPO 都是 Actor-Critic 的变体'], related: ['policy-gradient', 'value-function'], difficulty: 2 },
        { id: 'reward-shaping-rl', concept: '奖励塑形', domain: 'rl', definition: '通过添加辅助奖励信号来引导学习，解决稀疏奖励环境中的探索困难。', formula: 'R\'(s,a,s\') = R(s,a,s\') + F(s,s\')', keyPoints: ['辅助奖励不能改变最优策略', '需要领域知识设计', '内在动机是自动化的方法'], related: ['sparse-reward', 'intrinsic-motivation'], difficulty: 3 }
    ],
    genai: [
        { id: 'diffusion', concept: '扩散模型', domain: 'genai', definition: '通过前向逐步加噪和反向逐步去噪来生成数据的概率生成模型。', formula: '', keyPoints: ['前向过程：逐步添加高斯噪声直到纯噪声', '反向过程：学习去噪步骤恢复数据', 'DDPM、Stable Diffusion 是代表性模型'], related: ['ddpm', 'stable-diffusion'], difficulty: 3 },
        { id: 'gan-gen', concept: 'GAN', domain: 'genai', definition: '生成对抗网络，由生成器和判别器通过对抗训练来学习数据分布。', formula: 'min_G max_D V(D,G)', keyPoints: ['生成器 G：噪声 → 假数据', '判别器 D：判断真假', '模式坍塌是主要挑战'], related: ['generator', 'discriminator'], difficulty: 2 },
        { id: 'vae-gen', concept: '变分自编码器', domain: 'genai', definition: '通过学习数据的潜在分布来进行生成的模型，结合了自编码器和变分推断。', formula: 'L = E[log p(x|z)] - KL(q(z|x)||p(z))', keyPoints: ['编码器：输入 → 潜在分布参数', '解码器：潜在变量 → 重建', 'KL 散度约束潜在空间'], related: ['autoencoder', 'latent-space'], difficulty: 3 },
        { id: 'prompt-eng', concept: 'Prompt Engineering', domain: 'genai', definition: '设计和优化输入提示以引导大语言模型产生期望输出的技术。', formula: '', keyPoints: ['Zero-shot：无示例，直接描述任务', 'Few-shot：提供几个示例', 'Chain-of-Thought：引导逐步推理'], related: ['few-shot', 'chain-of-thought'], difficulty: 1 },
        { id: 'rlhf-gen', concept: 'RLHF', domain: 'genai', definition: '从人类反馈中进行强化学习，用于对齐大语言模型的行为与人类偏好。', formula: '', keyPoints: ['收集人类偏好数据训练奖励模型', '用 PPO 优化策略模型', '是 ChatGPT 等模型的关键技术'], related: ['alignment', 'ppo'], difficulty: 2 },
        { id: 'lora-gen', concept: 'LoRA', domain: 'genai', definition: '低秩适应，通过在权重矩阵旁添加低秩分解的旁路来高效微调大模型。', formula: 'W\' = W + A·B', keyPoints: ['A 和 B 是低秩矩阵，参数量远小于 W', '冻结原始权重，只训练 A 和 B', '可训练参数减少 10000 倍以上'], related: ['fine-tuning', 'parameter-efficient'], difficulty: 3 },
        { id: 'temperature', concept: 'Temperature', domain: 'genai', definition: '控制语言模型输出随机性的参数，通过缩放 logits 分布来调节生成多样性。', formula: 'p_i = exp(z_i/T) / Σexp(z_j/T)', keyPoints: ['T→0：趋向贪心（确定性）', 'T=1：原始分布', 'T→∞：趋向均匀（最大随机性）'], related: ['sampling', 'generation'], difficulty: 2 },
        { id: 'multimodal', concept: '多模态模型', domain: 'genai', definition: '能够同时处理和理解多种数据类型（文本、图像、音频等）的模型。', formula: '', keyPoints: ['CLIP：连接文本和图像', 'GPT-4V：视觉理解 + 文本生成', '统一表示空间是核心挑战'], related: ['clip', 'vision-language'], difficulty: 2 }
    ],
    agents: [
        { id: 'agent-arch', concept: 'AI Agent 架构', domain: 'agents', definition: '由 LLM 驱动的自主系统，具备规划、记忆、工具使用和反思等核心能力。', formula: '', keyPoints: ['规划：分解任务为子步骤', '记忆：短期（上下文）+ 长期（外部存储）', '工具：调用 API、搜索、代码执行'], related: ['planning', 'memory', 'tool-use'], difficulty: 2 },
        { id: 'react-agent', concept: 'ReAct', domain: 'agents', definition: '交替进行推理（Reasoning）和行动（Acting）的 Agent 框架。', formula: '', keyPoints: ['Thought：分析当前状态，制定计划', 'Action：执行具体操作', 'Observation：获取行动结果'], related: ['chain-of-thought', 'tool-use'], difficulty: 2 },
        { id: 'rag-agent', concept: 'RAG', domain: 'agents', definition: '检索增强生成，在生成前先检索相关文档作为上下文，减少幻觉并引入外部知识。', formula: '', keyPoints: ['检索：从知识库中找到相关文档', '增强：将检索结果加入 prompt', '生成：基于增强上下文生成回答'], related: ['retrieval', 'knowledge-base'], difficulty: 2 },
        { id: 'tool-use-agent', concept: '工具使用', domain: 'agents', definition: 'LLM 通过函数调用（Function Calling）与外部工具和 API 交互的能力。', formula: '', keyPoints: ['结构化输出：JSON 格式的工具调用请求', '工具描述：告诉模型有哪些工具可用', '结果整合：将工具返回结果纳入推理'], related: ['function-calling', 'api'], difficulty: 2 },
        { id: 'cot-agent', concept: '思维链', domain: 'agents', definition: 'Chain-of-Thought，引导模型展示中间推理步骤的提示技术。', formula: '', keyPoints: ['"Let\'s think step by step" 是经典触发语', '显著提升数学和逻辑推理能力', '可以与 Self-Consistency 结合'], related: ['prompt-engineering', 'reasoning'], difficulty: 2 },
        { id: 'multi-agent', concept: '多智能体系统', domain: 'agents', definition: '多个 AI Agent 协作完成复杂任务的系统架构。', formula: '', keyPoints: ['角色分工：不同 Agent 扮演不同角色', '通信协议：Agent 间的信息交换', '编排：协调任务分配和执行顺序'], related: ['orchestration', 'collaboration'], difficulty: 3 },
        { id: 'memory-agent', concept: 'Agent 记忆', domain: 'agents', definition: 'Agent 存储和检索历史信息的能力，包括短期记忆和长期记忆。', formula: '', keyPoints: ['短期记忆：上下文窗口中的对话历史', '长期记忆：向量数据库存储的历史信息', '工作记忆：当前任务的中间状态'], related: ['vector-database', 'context-window'], difficulty: 2 },
        { id: 'reflection-agent', concept: '反思机制', domain: 'agents', definition: 'Agent 评估自身输出质量并迭代改进的能力。', formula: '', keyPoints: ['自我评估：检查输出是否满足要求', '错误识别：发现并分析错误', '迭代改进：基于反思结果修正输出'], related: ['self-correction', 'iteration'], difficulty: 2 }
    ],
    safety: [
        { id: 'alignment-safety', concept: 'AI 对齐', domain: 'safety', definition: '确保 AI 系统的行为与人类意图、偏好和价值观保持一致的研究领域。', formula: '', keyPoints: ['外在对齐：行为符合人类期望', '内在对齐：模型真正理解人类意图', 'RLHF、Constitutional AI 是主要方法'], related: ['rlhf', 'value-alignment'], difficulty: 2 },
        { id: 'red-teaming', concept: '红队测试', domain: 'safety', definition: '通过模拟对抗性场景主动发现 AI 模型漏洞和有害行为的测试方法。', formula: '', keyPoints: ['模拟恶意用户的攻击方式', '发现安全防护的漏洞', '结果用于改进模型安全性'], related: ['adversarial-testing', 'security'], difficulty: 2 },
        { id: 'bias-safety', concept: 'AI 偏见', domain: 'safety', definition: 'AI 系统因训练数据或算法设计而产生的系统性偏差，可能导致不公平的结果。', formula: '', keyPoints: ['数据偏见：训练数据反映社会偏见', '算法偏见：模型放大偏见', '评估和缓解：公平性指标、去偏方法'], related: ['fairness', 'debiasing'], difficulty: 2 },
        { id: 'adversarial-ex', concept: '对抗样本', domain: 'safety', definition: '经过微小扰动就能欺骗 AI 模型产生错误输出的输入样本。', formula: 'x\' = x + ε·sign(∇_x L)', keyPoints: ['人眼不可察觉的微小扰动', 'FGSM、PGD 是经典攻击方法', '对抗训练是主要防御手段'], related: ['robustness', 'adversarial-training'], difficulty: 3 },
        { id: 'interpretability', concept: '可解释性', domain: 'safety', definition: '理解和解释 AI 模型决策过程的能力，对于建立信任和发现错误至关重要。', formula: '', keyPoints: ['事前可解释：使用本身可解释的模型', '事后可解释：对黑盒模型进行解释', '方法：LIME、SHAP、注意力可视化'], related: ['lime', 'shap', 'transparency'], difficulty: 2 },
        { id: 'jailbreak', concept: '越狱攻击', domain: 'safety', definition: '通过精心设计的提示绕过 AI 模型安全防护机制的攻击方式。', formula: '', keyPoints: ['利用 prompt 注入绕过限制', '角色扮演、编码绕过是常见手段', '防御：输入过滤、输出检测、红队测试'], related: ['prompt-injection', 'security'], difficulty: 2 },
        { id: 'constitutional-ai', concept: '宪法 AI', domain: 'safety', definition: '用一组预定义原则（"宪法"）指导模型自我评判和修正的对齐方法。', formula: '', keyPoints: ['减少对人类标注的依赖', '模型依据原则自我批评和修正', 'Anthropic 提出的方法'], related: ['alignment', 'self-correction'], difficulty: 3 },
        { id: 'privacy-ai', concept: '差分隐私', domain: 'safety', definition: '通过添加校准噪声保护个体数据隐私的数学框架。', formula: 'Pr[M(D) ∈ S] ≤ e^ε · Pr[M(D\') ∈ S]', keyPoints: ['ε 参数控制隐私保护强度', '在数据或梯度中添加噪声', '联邦学习中广泛应用'], related: ['federated-learning', 'privacy'], difficulty: 3 }
    ],
    robotics: [
        { id: 'fk', concept: '正运动学', domain: 'robotics', definition: '根据关节角度和连杆参数计算机器人末端执行器位姿的方法。', formula: 'T = T_1 · T_2 · ... · T_n', keyPoints: ['DH 参数描述连杆几何关系', '齐次变换矩阵表示位姿', '每个关节对应一个变换矩阵'], related: ['inverse-kinematics', 'dh-parameters'], difficulty: 2 },
        { id: 'slam-rb', concept: 'SLAM', domain: 'robotics', definition: '同时定位与地图构建，让机器人在未知环境中同时估计自身位置并构建环境地图。', formula: '', keyPoints: ['前端：特征提取和匹配', '后端：优化位姿图', '回环检测：消除累积误差'], related: ['localization', 'mapping'], difficulty: 3 },
        { id: 'motion-planning', concept: '运动规划', domain: 'robotics', definition: '为机器人找到从起始状态到目标状态的无碰撞路径的算法。', formula: '', keyPoints: ['RRT：快速探索随机树', 'PRM：概率路线图', 'A*：启发式搜索'], related: ['rrt', 'prm', 'path-planning'], difficulty: 2 },
        { id: 'sensor-fusion-rb', concept: '传感器融合', domain: 'robotics', definition: '综合多种传感器数据（激光雷达、摄像头、IMU 等）获得更准确环境估计的技术。', formula: '', keyPoints: ['卡尔曼滤波：线性高斯系统', '粒子滤波：非线性非高斯系统', '互补融合：利用不同传感器的优势'], related: ['kalman-filter', 'localization'], difficulty: 2 },
        { id: 'sim-to-real', concept: 'Sim-to-Real', domain: 'robotics', definition: '在仿真环境中训练策略并迁移到真实机器人的方法。', formula: '', keyPoints: ['域随机化：随机改变仿真参数', '域适应：缩小仿真与真实的差距', '零样本迁移：直接部署到真实环境'], related: ['domain-randomization', 'transfer-learning'], difficulty: 3 },
        { id: 'grasping-rb', concept: '抓取规划', domain: 'robotics', definition: '为机器人规划合适的抓取姿态和力度以成功抓取物体的方法。', formula: '', keyPoints: ['抓取点检测：确定最佳抓取位置', '力控制：防止损坏物体', '自适应抓取：应对不同形状和材质'], related: ['force-control', 'manipulation'], difficulty: 2 },
        { id: 'navigation-rb', concept: '机器人导航', domain: 'robotics', definition: '让机器人在环境中自主移动到目标位置的能力，包括全局和局部规划。', formula: '', keyPoints: ['全局规划：基于已知地图的路径规划', '局部规划：基于实时传感器的避障', 'DWA、TEB 是常用局部规划器'], related: ['path-planning', 'obstacle-avoidance'], difficulty: 2 }
    ],
    speech: [
        { id: 'asr', concept: '语音识别', domain: 'speech', definition: '将语音信号转换为文本的技术（Automatic Speech Recognition）。', formula: '', keyPoints: ['传统：GMM-HMM 框架', '现代：端到端深度学习模型', 'CTC、Attention、Transducer 是主流方法'], related: ['ctc', 'end-to-end'], difficulty: 2 },
        { id: 'mfcc', concept: 'MFCC', domain: 'speech', definition: '梅尔频率倒谱系数，模拟人耳频率感知特性的语音特征提取方法。', formula: '', keyPoints: ['梅尔刻度：低频高分辨率，高频低分辨率', '步骤：预加重→分帧→FFT→梅尔滤波→DCT', '是传统 ASR 的标准特征'], related: ['feature-extraction', 'mel-scale'], difficulty: 3 },
        { id: 'tts', concept: '语音合成', domain: 'speech', definition: '将文本转换为自然语音的技术（Text-to-Speech）。', formula: '', keyPoints: ['传统：拼接合成、参数合成', '现代：Tacotron、VITS 等端到端模型', 'WaveNet：高质量神经声码器'], related: ['wavenet', 'vocoder'], difficulty: 2 },
        { id: 'speaker-rec', concept: '说话人识别', domain: 'speech', definition: '通过语音特征识别说话人身份的技术。', formula: '', keyPoints: ['声纹特征：x-vector、d-vector', '验证：判断是否为目标说话人', '识别：从多人中确定说话人'], related: ['x-vector', 'speaker-embedding'], difficulty: 2 },
        { id: 'voice-clone', concept: '语音克隆', domain: 'speech', definition: '用少量目标说话人的语音样本生成该说话人声音的 TTS 技术。', formula: '', keyPoints: ['说话人嵌入：编码声音特征', '零样本克隆：几秒钟音频即可', '伦理风险：声音伪造和滥用'], related: ['speaker-embedding', 'tts'], difficulty: 3 },
        { id: 'e2e-asr', concept: '端到端 ASR', domain: 'speech', definition: '直接从音频映射到文本的语音识别模型，无需传统流水线的多个独立组件。', formula: '', keyPoints: ['CTC：连接时序分类', 'Attention-based Seq2Seq', 'Transducer：流式处理'], related: ['ctc', 'transducer'], difficulty: 2 },
        { id: 'speech-enh', concept: '语音增强', domain: 'speech', definition: '从含噪语音中恢复干净语音的技术。', formula: '', keyPoints: ['频谱掩膜：估计噪声掩膜', '波形域方法：直接处理波形', '实时处理是关键挑战'], related: ['noise-reduction', 'denoising'], difficulty: 2 }
    ],
    infra: [
        { id: 'distributed', concept: '分布式训练', domain: 'infra', definition: '在多个 GPU/节点上并行训练模型以加速训练过程的技术。', formula: '', keyPoints: ['数据并行：复制模型，分配数据', '模型并行：拆分模型到不同设备', '流水线并行：按层拆分'], related: ['data-parallel', 'model-parallel'], difficulty: 3 },
        { id: 'quantization', concept: '模型量化', domain: 'infra', definition: '将模型权重从高精度（FP32）转换为低精度（INT8/INT4）以减小模型大小和加速推理。', formula: '', keyPoints: ['训练后量化（PTQ）：训练完再量化', '量化感知训练（QAT）：训练时模拟量化', 'INT8 推理速度通常是 FP32 的 2-4 倍'], related: ['inference-optimization', 'compression'], difficulty: 2 },
        { id: 'onnx-infra', concept: 'ONNX', domain: 'infra', definition: '开放神经网络交换格式，支持在不同深度学习框架之间转换和部署模型。', formula: '', keyPoints: ['统一的模型表示格式', '支持 PyTorch、TensorFlow 等框架', 'ONNX Runtime 提供跨平台推理'], related: ['model-deployment', 'interoperability'], difficulty: 2 },
        { id: 'tensorrt', concept: 'TensorRT', domain: 'infra', definition: 'NVIDIA 的高性能推理优化器，通过层融合、量化等技术加速 GPU 推理。', formula: '', keyPoints: ['层融合：合并多个操作', '核自动调优：选择最优 CUDA 核', '支持 FP16/INT8 量化'], related: ['inference', 'gpu-optimization'], difficulty: 2 },
        { id: 'mlops', concept: 'MLOps', domain: 'infra', definition: '将 DevOps 实践应用于机器学习的工程实践，确保模型可靠地部署和维护。', formula: '', keyPoints: ['CI/CD for ML：自动化训练和部署', '模型监控：检测性能退化', '特征管理：统一特征存储'], related: ['devops', 'model-management'], difficulty: 2 },
        { id: 'kv-cache', concept: 'KV Cache', domain: 'infra', definition: 'LLM 推理中缓存已计算的 Key-Value 矩阵以避免重复计算的优化技术。', formula: '', keyPoints: ['自回归生成时每个 token 需要所有历史的 K、V', '缓存后只需计算新 token 的 Q、K、V', '显存占用随序列长度线性增长'], related: ['inference', 'attention'], difficulty: 3 },
        { id: 'mixed-precision', concept: '混合精度训练', domain: 'infra', definition: '同时使用 FP16 和 FP32 进行训练，利用 FP16 加速计算并保持 FP32 的数值稳定性。', formula: '', keyPoints: ['前向和反向传播用 FP16', '权重更新用 FP32', '损失缩放防止梯度下溢'], related: ['training', 'fp16'], difficulty: 2 },
        { id: 'gradient-accum', concept: '梯度累积', domain: 'infra', definition: '在多个小 batch 上计算梯度并累加，等效于使用大 batch size 的训练技巧。', formula: '', keyPoints: ['适用于显存不足的场景', '累积 N 步 = batch size × N', '等效于大 batch 但通信次数不变'], related: ['training', 'batch-size'], difficulty: 2 },
        { id: 'lora-infra', concept: 'LoRA', domain: 'infra', definition: '低秩适应，通过在冻结的权重矩阵旁添加低秩旁路来高效微调大模型。', formula: 'h = Wx + BAx', keyPoints: ['冻结原始权重 W', '添加低秩矩阵 A(d×r) 和 B(r×d)', 'r << d，参数量大幅减少'], related: ['fine-tuning', 'parameter-efficient'], difficulty: 2 }
    ]
};

function getFlashcardsByDomain(domainId) {
    return FLASHCARDS[domainId] || [];
}

function getAllFlashcards() {
    var all = [];
    var keys = Object.keys(FLASHCARDS);
    for (var i = 0; i < keys.length; i++) {
        all = all.concat(FLASHCARDS[keys[i]]);
    }
    return all;
}

function searchFlashcards(query) {
    if (!query) return getAllFlashcards();
    var q = query.toLowerCase();
    return getAllFlashcards().filter(function(c) {
        return c.concept.toLowerCase().indexOf(q) >= 0 ||
               c.definition.toLowerCase().indexOf(q) >= 0;
    });
}
