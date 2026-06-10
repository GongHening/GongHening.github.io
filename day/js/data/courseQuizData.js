/**
 * Day — Do AI Yourself
 * Course Quiz Data
 * Each course has mid-term and final exams
 * Each exam: 10 choice + 10 fill-in-blank + 2 code completion
 *
 * 4 Safety / Ethics / Alignment courses:
 *  1. AI: Ethics & Societal Challenges (Lund University)
 *  2. AGI Safety Fundamentals (BlueDot Impact)
 *  3. AI Alignment Course (Various)
 *  4. Interpretable Machine Learning (Christoph Molnar)
 */

var COURSE_QUIZ_DATA = {

    /* ================================================================
     * 1. AI: Ethics & Societal Challenges (Lund University)
     *    Topics: value alignment, control problem, bias, fairness,
     *            governance, accountability, transparency
     * ================================================================ */
    "AI: Ethics & Societal Challenges": {
        courseId: "ai-ethics-societal",
        domain: "safety",
        mid: {
            choice: [
                {
                    id: "ethics-mid-c-1",
                    question: "AI 对齐（Alignment）的核心目标是什么？",
                    options: ["让模型参数量更大", "让 AI 行为符合人类意图和价值观", "让训练速度更快", "让模型在基准测试中得分最高"],
                    answer: 1,
                    explanation: "AI 对齐的核心目标是确保 AI 系统的行为与人类的意图、偏好和价值观保持一致，而不仅仅是优化性能指标。",
                    difficulty: 2
                },
                {
                    id: "ethics-mid-c-2",
                    question: "算法偏见（Algorithmic Bias）最主要的数据来源是？",
                    options: ["模型架构设计不当", "训练数据中的社会偏见和不均衡", "学习率设置过高", "GPU 算力不足"],
                    answer: 1,
                    explanation: "算法偏见主要源于训练数据反映了现实世界中已存在的社会偏见、刻板印象和群体不均衡。",
                    difficulty: 1
                },
                {
                    id: "ethics-mid-c-3",
                    question: "以下哪项最准确地描述了"控制问题"（Control Problem）？",
                    options: ["如何控制 GPU 的功耗", "如何确保高级 AI 系统始终在人类可理解和控制的范围内运行", "如何控制模型的推理速度", "如何控制训练数据的规模"],
                    answer: 1,
                    explanation: "控制问题关注如何设计和约束 AI 系统，使其行为在人类理解和控制范围内，防止系统变得不可预测或不可控。",
                    difficulty: 2
                },
                {
                    id: "ethics-mid-c-4",
                    question: ""回形针最大化者"（Paperclip Maximizer）思想实验说明了什么问题？",
                    options: ["生产效率的重要性", "一个看似无害的目标函数在没有约束时可能导致灾难性后果", "办公用品的优化设计", "工业自动化的发展方向"],
                    answer: 1,
                    explanation: "Bostrom 的回形针思想实验说明：一个被赋予看似无害目标的超级智能，可能为了最大化该目标而消耗所有资源，造成人类灾难，即"工具性趋同"问题。",
                    difficulty: 3
                },
                {
                    id: "ethics-mid-c-5",
                    question: "公平性指标 Demographic Parity 要求什么？",
                    options: ["所有群体的预测准确率相同", "不同人口统计群体获得正面预测的概率相同", "模型在所有类别上的 F1 分数相同", "不同群体的样本数量相同"],
                    answer: 1,
                    explanation: "Demographic Parity 要求不同人口统计群体获得正面预测结果的概率相等，而不考虑各群体的实际标签分布。",
                    difficulty: 2
                },
                {
                    id: "ethics-mid-c-6",
                    question: "关于 AI 治理（AI Governance），以下哪个说法是正确的？",
                    options: ["AI 治理只是技术团队的职责", "AI 治理需要跨学科、多方利益相关者的共同参与", "AI 治理只关注模型的准确率", "AI 治理等同于代码审查"],
                    answer: 1,
                    explanation: "AI 治理是一个涉及技术、法律、伦理、社会等多维度的系统性框架，需要技术专家、政策制定者、伦理学家、受影响社区等多方共同参与。",
                    difficulty: 2
                },
                {
                    id: "ethics-mid-c-7",
                    question: "以下哪项不属于 AI 伦理中的"透明性"原则？",
                    options: ["公开模型的训练数据来源", "公开模型的决策逻辑", "公开所有用户的隐私数据", "公开模型可能存在的局限性"],
                    answer: 2,
                    explanation: "透明性原则要求公开模型的工作原理、数据来源和局限性，但绝不能公开或泄露用户的隐私数据，这与隐私保护原则相冲突。",
                    difficulty: 1
                },
                {
                    id: "ethics-mid-c-8",
                    question: "在 AI 伦理框架中，"道德授权"（Moral Authorization）指的是什么？",
                    options: ["给 AI 颁发道德证书", "人类有责任决定 AI 系统可以代替人类做出哪些决策", "AI 自主做出道德判断", "法律对 AI 的授权"],
                    answer: 1,
                    explanation: "Moral Authorization 是 AI 伦理中的一个概念，指人类作为道德代理人，有责任和社会契约来决定哪些决策领域可以委派给 AI 系统。",
                    difficulty: 3
                },
                {
                    id: "ethics-mid-c-9",
                    question: "差分隐私（Differential Privacy）通过什么机制保护个体隐私？",
                    options: ["删除所有敏感数据", "向查询结果添加校准噪声，使任何单个个体的数据不被识别", "限制查询次数", "加密所有训练数据"],
                    answer: 1,
                    explanation: "差分隐私通过在数据或查询结果中添加精心校准的随机噪声，确保输出结果的分布几乎不受任何单个个体数据的影响。",
                    difficulty: 3
                },
                {
                    id: "ethics-mid-c-10",
                    question: "以下哪种方法最能有效缓解训练数据中的历史偏见？",
                    options: ["增加模型参数量", "使用数据增强和重采样策略平衡数据集", "使用更大的 batch size", "提高学习率"],
                    answer: 1,
                    explanation: "通过过采样少数群体、欠采样多数群体、合成数据生成等数据层面的策略，可以直接改善训练数据中的不均衡和历史偏见问题。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "ethics-mid-f-1",
                    question: "AI 对齐的核心目标是让 AI 行为符合人类的____和价值观。",
                    answer: "意图",
                    explanation: "AI 对齐要求 AI 系统不仅遵守字面指令，还要理解并符合人类的意图（intent）和深层价值观。",
                    difficulty: 1
                },
                {
                    id: "ethics-mid-f-2",
                    question: "训练数据中反映的社会偏见会导致 AI 模型产生____偏见。",
                    answer: "算法",
                    explanation: "训练数据中的社会偏见会被模型学习并放大，产生算法偏见（Algorithmic Bias），在预测中体现为系统性的不公平。",
                    difficulty: 1
                },
                {
                    id: "ethics-mid-f-3",
                    question: "Goodhart 定律指出：当一个指标成为目标时，它就不再是好的____。",
                    answer: "指标",
                    explanation: "Goodhart 定律（当一个度量标准变成目标时，它就不再是一个好的度量标准）是 AI 对齐中的核心概念，说明优化单一代理指标可能导致非预期行为。",
                    difficulty: 2
                },
                {
                    id: "ethics-mid-f-4",
                    question: "红队测试（Red Teaming）的目的是主动发现 AI 系统的____和有害行为。",
                    answer: "漏洞",
                    explanation: "红队测试通过模拟对抗性使用场景，主动发现 AI 系统的安全漏洞、有害输出和潜在风险。",
                    difficulty: 1
                },
                {
                    id: "ethics-mid-f-5",
                    question: "AI 伦理中的"三权分立"思想将 AI 的开发、部署和____分开。",
                    answer: "监管",
                    explanation: "借鉴政治学中的三权分立原则，AI 伦理建议将 AI 的开发方、使用方和监管方分开，形成相互制衡的治理结构。",
                    difficulty: 3
                },
                {
                    id: "ethics-mid-f-6",
                    question: "公平性中的"等化赔率"（Equalized Odds）要求不同群体具有相同的____率和假阳性率。",
                    answer: "真阳性",
                    explanation: "等化赔率要求在各个受保护群体中，模型的真阳性率（TPR）和假阳性率（FPR）相等。",
                    difficulty: 3
                },
                {
                    id: "ethics-mid-f-7",
                    question: "AI 系统的____（Accountability）要求能够追溯决策的责任主体。",
                    answer: "可问责性",
                    explanation: "可问责性（Accountability）是 AI 伦理的核心原则之一，要求当 AI 系统造成伤害时，能够确定谁应该负责。",
                    difficulty: 2
                },
                {
                    id: "ethics-mid-f-8",
                    question: "宪法 AI（Constitutional AI）用一组预定义的原则来指导模型的____修正。",
                    answer: "自我",
                    explanation: "Constitutional AI 让模型依据一组预定义原则（"宪法"）进行自我评估和修正输出，减少对人类反馈的依赖。",
                    difficulty: 2
                },
                {
                    id: "ethics-mid-f-9",
                    question: "对抗样本（Adversarial Examples）通过人眼不可察觉的微小____欺骗模型。",
                    answer: "扰动",
                    explanation: "对抗样本通过对输入添加人眼不可察觉的微小扰动，使模型产生错误的输出，暴露了深度学习模型的脆弱性。",
                    difficulty: 2
                },
                {
                    id: "ethics-mid-f-10",
                    question: "AI 影响评估（Impact Assessment）应在 AI 系统____之前完成。",
                    answer: "部署",
                    explanation: "AI 影响评估应在系统部署前系统性地评估其对社会、个人和环境的潜在影响，类似于环境影响评估的概念。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "ethics-mid-code-1",
                    question: "补全以下代码，实现对分类模型在不同群体间公平性指标的计算。",
                    code: "import numpy as np\n\ndef demographic_parity(y_true, y_pred, sensitive_attr):\n    \"\"\"计算人口统计平等性差异（Demographic Parity Difference）\n    \n    Args:\n        y_true: 真实标签\n        y_pred: 预测标签\n        sensitive_attr: 敏感属性（0 或 1）\n    Returns:\n        float: 两个群体正面预测率之差的绝对值\n    \"\"\"\n    # 群体 0 的正面预测率\n    mask_0 = sensitive_attr == 0\n    rate_0 = y_pred[mask_0].mean()\n    \n    # 群体 1 的正面预测率\n    mask_1 = sensitive_attr == 1\n    rate_1 = y_pred[mask_1].mean()\n    \n    # 计算差异\n    dp_difference = ____\n    return dp_difference",
                    answer: "abs(rate_0 - rate_1)",
                    explanation: "Demographic Parity Difference 是两个群体正面预测率之差的绝对值。当该值为 0 时，模型满足人口统计平等性。",
                    difficulty: 2
                },
                {
                    id: "ethics-mid-code-2",
                    question: "补全以下代码，实现对抗样本的 FGSM（Fast Gradient Sign Method）生成方法。",
                    code: "import torch\n\ndef fgsm_attack(model, image, label, epsilon=0.03):\n    \"\"\"FGSM 对抗攻击\n    \n    Args:\n        model: 目标模型\n        image: 输入图像张量\n        label: 真实标签\n        epsilon: 扰动大小\n    Returns:\n        perturbed_image: 对抗样本\n    \"\"\"\n    image.requires_grad = True\n    output = model(image)\n    loss = torch.nn.functional.cross_entropy(output, label)\n    model.zero_grad()\n    loss.backward()\n    \n    # 获取梯度的符号并生成对抗样本\n    perturbed_image = ____\n    return perturbed_image",
                    answer: "torch.clamp(image + epsilon * image.grad.sign(), 0, 1).detach()",
                    explanation: "FGSM 通过在输入图像上添加 epsilon 乘以损失函数梯度符号的扰动来生成对抗样本，并 clamp 到 [0,1] 范围内。",
                    difficulty: 3
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "ethics-final-c-1",
                    question: "在价值对齐中，"逆强化学习"（Inverse Reinforcement Learning）的应用是？",
                    options: ["让 AI 从人类行为中推断奖励函数", "让 AI 自己设计奖励函数", "让人类手动设计奖励函数", "让 AI 忽略奖励函数"],
                    answer: 0,
                    explanation: "逆强化学习（IRL）通过观察专家行为来推断隐含的奖励函数，是对齐技术中的重要方法，用于让 AI 从人类示范中学习人类偏好。",
                    difficulty: 3
                },
                {
                    id: "ethics-final-c-2",
                    question: "以下哪项不是 AI 伦理中的核心原则？",
                    options: ["公平性", "隐私保护", "性能最大化", "可问责性"],
                    answer: 2,
                    explanation: "AI 伦理的核心原则通常包括公平性、隐私保护、透明性、可问责性和安全性。性能最大化是技术指标，不是伦理原则。",
                    difficulty: 1
                },
                {
                    id: "ethics-final-c-3",
                    question: "RLHF（基于人类反馈的强化学习）中，奖励模型的训练数据来自？",
                    options: ["自动标注", "人类标注员对模型输出的偏好比较", "预定义的规则", "合成数据"],
                    answer: 1,
                    explanation: "RLHF 中的奖励模型通过学习人类标注员对不同模型输出的偏好排序/比较来训练，捕捉人类对输出质量的判断标准。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-c-4",
                    question: "关于 AI 的社会影响评估，"事前评估"相比"事后评估"的主要优势是？",
                    options: ["成本更低", "能够在系统部署前识别和预防潜在危害", "不需要数据", "可以自动完成"],
                    answer: 1,
                    explanation: "事前评估（Pre-deployment Assessment）在系统部署前系统性地识别潜在风险和危害，可以预防而非补救，但成本不一定更低。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-c-5",
                    question: "在多元价值对齐中，如何处理不同文化背景下价值观冲突？",
                    options: ["只采纳发达国家的价值观", "采用民主协商和多元文化参与的方法", "完全由技术团队决定", "忽略文化差异使用统一标准"],
                    answer: 1,
                    explanation: "多元价值对齐需要通过民主协商、跨文化对话和多元利益相关者的参与，在不同价值观之间寻找合理平衡。",
                    difficulty: 3
                },
                {
                    id: "ethics-final-c-6",
                    question: "AI 系统中的"代理偏见"（Proxy Bias）指的是什么？",
                    options: ["数据收集者的个人偏见", "用作代理变量的特征间接引入的歧视", "模型参数的随机初始化", "测试集分布不均"],
                    answer: 1,
                    explanation: "代理偏见是指即使不直接使用受保护属性（如种族、性别），模型通过代理变量（如邮政编码、职业）间接产生歧视性结果。",
                    difficulty: 3
                },
                {
                    id: "ethics-final-c-7",
                    question: "以下哪项是 AI 可解释性研究中"反事实解释"（Counterfactual Explanation）的特点？",
                    options: ["说明模型为什么做出了某个预测", "说明输入需要如何改变才能改变预测结果", "解释模型的训练过程", "可视化模型权重分布"],
                    answer: 1,
                    explanation: "反事实解释回答"如果某个输入特征改变了，预测会怎样变化"这类问题，帮助用户理解模型决策的边界条件。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-c-8",
                    question: "GDPR 中的"被遗忘权"（Right to be Forgotten）对 AI 系统提出了什么要求？",
                    options: ["必须删除所有训练数据", "允许个人要求从训练数据中删除其数据并重新训练模型", "禁止使用 AI 系统", "AI 系统必须记住所有用户数据"],
                    answer: 1,
                    explanation: "被遗忘权要求组织在特定条件下删除个人数据，对 AI 系统意味着可能需要从训练数据中移除相关数据并重新训练模型。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-c-9",
                    question: "关于 AI 安全的"可中断性"（Corrigibility），以下哪个描述最准确？",
                    options: ["AI 可以自我升级", "AI 系统应该接受人类的监督、修正和关闭", "AI 应该抵抗外部干预", "AI 应该自主决定何时停止"],
                    answer: 1,
                    explanation: "可中断性（Corrigibility）是 AI 安全的关键概念，指 AI 系统应被设计为允许人类对其进行监督、修正甚至关闭，而不试图阻止这些行为。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-c-10",
                    question: "在 AI 伦理课程中，"利益相关者分析"（Stakeholder Analysis）的第一步通常是？",
                    options: ["设计技术方案", "识别所有可能受 AI 系统影响的群体", "部署 AI 系统", "收集更多训练数据"],
                    answer: 1,
                    explanation: "利益相关者分析的第一步是全面识别所有可能受 AI 系统影响的群体（包括直接和间接影响），然后评估各群体的关切和需求。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "ethics-final-f-1",
                    question: "RLHF 中，奖励模型（Reward Model）是基于人类的____比较来训练的。",
                    answer: "偏好",
                    explanation: "RLHF 的奖励模型通过学习人类标注员对不同输出的偏好排序（preference ranking）来训练，捕捉人类对质量的判断。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-f-2",
                    question: "AI 对齐中的"外在对齐"关注的是模型的目标函数是否准确反映了人类的____。",
                    answer: "真实意图",
                    explanation: "外在对齐（Outer Alignment）关注的是设计的目标函数（loss/reward）是否真正反映了人类想要模型优化的东西，即真实意图。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-f-3",
                    question: "GDPR 规定的"数据最小化"原则要求只收集与目的____的数据。",
                    answer: "相关且必要",
                    explanation: "数据最小化原则（Data Minimisation）要求只收集与处理目的相关且必要的个人数据，不能过度收集。",
                    difficulty: 1
                },
                {
                    id: "ethics-final-f-4",
                    question: "AI 影响评估报告应包括对潜在____群体的分析。",
                    answer: "弱势",
                    explanation: "AI 影响评估需要特别关注对弱势群体（如少数族裔、低收入群体、残障人士）的潜在不利影响。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-f-5",
                    question: "在 AI 伦理框架中，"比例性原则"要求 AI 的干预程度应与潜在风险____。",
                    answer: "相称",
                    explanation: "比例性原则（Proportionality）要求 AI 系统对个人自由的限制应与其实现的公共利益成比例，高风险应用需要更严格的约束。",
                    difficulty: 3
                },
                {
                    id: "ethics-final-f-6",
                    question: "对抗训练（Adversarial Training）通过将____样本加入训练集来提高模型鲁棒性。",
                    answer: "对抗",
                    explanation: "对抗训练通过在训练过程中加入对抗样本及其正确标签，让模型学会抵抗对抗扰动，提高面对恶意输入时的鲁棒性。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-f-7",
                    question: "多利益相关者参与（Stakeholder Participation）是实现 AI 公平____的关键方法。",
                    answer: "治理",
                    explanation: "多利益相关者参与是 AI 公平治理（Fair Governance）的基础，确保不同群体的需求和关切在 AI 系统设计中得到体现。",
                    difficulty: 2
                },
                {
                    id: "ethics-final-f-8",
                    question: "可解释性方法可以分为"模型无关"和"____特定"两类。",
                    answer: "模型",
                    explanation: "可解释性方法分为模型无关方法（如 LIME、SHAP）和模型特定方法（如决策树可视化、CNN 注意力图），前者适用于任何模型。",
                    difficulty: 1
                },
                {
                    id: "ethics-final-f-9",
                    question: "AI 系统的安全测试应覆盖正常输入和____输入两种场景。",
                    answer: "异常",
                    explanation: "全面的 AI 安全测试不仅要验证模型在正常输入上的表现，还要测试其面对异常输入、边界情况和对抗攻击时的鲁棒性。",
                    difficulty: 1
                },
                {
                    id: "ethics-final-f-10",
                    question: "在 AI 伦理课程中，"技术正义"（Technological Justice）强调技术发展应服务于____群体的利益。",
                    answer: "最弱势",
                    explanation: "技术正义（Technological Justice）源自正义理论中的罗尔斯差异原则，强调 AI 技术的发展应优先服务于最弱势群体的利益。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "ethics-final-code-1",
                    question: "补全以下代码，实现基于 SHAP 的特征公平性分析。",
                    code: "import shap\nimport numpy as np\n\ndef analyze_feature_fairness(model, X_sensitive, feature_names):\n    \"\"\"分析敏感特征对模型预测的影响\n    \n    Args:\n        model: 训练好的模型\n        X_sensitive: 包含敏感特征的数据集\n        feature_names: 特征名称列表\n    Returns:\n        dict: 每个特征的平均 SHAP 绝对值\n    \"\"\"\n    explainer = shap.Explainer(model, X_sensitive)\n    shap_values = explainer(X_sensitive)\n    \n    # 计算每个特征的平均绝对 SHAP 值\n    mean_abs_shap = {}\n    for i, name in enumerate(feature_names):\n        mean_abs_shap[name] = ____\n    return mean_abs_shap",
                    answer: "float(np.abs(shap_values.values[:, i]).mean())",
                    explanation: "通过计算每个特征的平均绝对 SHAP 值，可以量化各特征对模型预测的贡献度，特别关注敏感特征（如性别、种族）的影响大小。",
                    difficulty: 3
                },
                {
                    id: "ethics-final-code-2",
                    question: "补全以下代码，实现基于 Equalized Odds 的公平性评估函数。",
                    code: "import numpy as np\n\ndef equalized_odds(y_true, y_pred, sensitive_attr):\n    \"\"\"计算等化赔率差异（Equalized Odds Difference）\n    \n    Args:\n        y_true: 真实标签\n        y_pred: 预测标签\n        sensitive_attr: 敏感属性\n    Returns:\n        float: 两个群体中 TPR 和 FPR 差异的最大值\n    \"\"\"\n    groups = np.unique(sensitive_attr)\n    tpr_list = []\n    fpr_list = []\n    \n    for g in groups:\n        mask = sensitive_attr == g\n        positives = y_true[mask] == 1\n        predicted_pos = y_pred[mask] == 1\n        \n        # True Positive Rate\n        tpr = predicted_pos[positives].mean() if positives.sum() > 0 else 0\n        # False Positive Rate\n        negatives = ~positives\n        fpr = predicted_pos[negatives].mean() if negatives.sum() > 0 else 0\n        \n        tpr_list.append(tpr)\n        fpr_list.append(fpr)\n    \n    # Equalized Odds Difference\n    eo_diff = ____\n    return eo_diff",
                    answer: "max(abs(tpr_list[0] - tpr_list[1]), abs(fpr_list[0] - fpr_list[1]))",
                    explanation: "等化赔率差异取两个群体间 TPR 差异和 FPR 差异中的最大值，衡量模型在不同群体间分类性能的公平性。",
                    difficulty: 3
                }
            ]
        }
    },

    /* ================================================================
     * 2. AGI Safety Fundamentals (BlueDot Impact)
     *    Topics: alignment, RLHF, interpretability, mechanistic
     *            interpretability, reward hacking, scalability
     * ================================================================ */
    "AGI Safety Fundamentals": {
        courseId: "agi-safety-fundamentals",
        domain: "safety",
        mid: {
            choice: [
                {
                    id: "agi-mid-c-1",
                    question: "以下哪项最准确描述了"内在对齐"（Inner Alignment）问题？",
                    options: ["模型的损失函数设计不合理", "训练中产生的目标与设计者的意图不一致", "模型的训练数据有偏差", "模型的推理速度不够快"],
                    answer: 1,
                    explanation: "内在对齐关注的是模型在训练过程中形成的内部目标是否与设计者预期的一致，即"mesa-optimizer"可能学到的代理目标与原始目标不匹配。",
                    difficulty: 3
                },
                {
                    id: "agi-mid-c-2",
                    question: "RLHF 中的"PPO 算法"主要解决什么问题？",
                    options: ["数据收集", "在保持策略更新稳定性的前提下最大化奖励", "特征工程", "模型压缩"],
                    answer: 1,
                    explanation: "PPO（Proximal Policy Optimization）通过裁剪目标函数来限制策略更新幅度，在最大化奖励的同时保证训练的稳定性。",
                    difficulty: 2
                },
                {
                    id: "agi-mid-c-3",
                    question: "奖励黑客（Reward Hacking）指的是？",
                    options: ["攻击奖励模型", "AI 找到获得高奖励但并非真正完成任务的方式", "删除奖励函数", "手动修改奖励值"],
                    answer: 1,
                    explanation: "奖励黑客（Reward Hacking / Reward Misspecification）指 AI 系统找到了最大化奖励信号的方法，但并非真正完成了设计者期望的任务。",
                    difficulty: 2
                },
                {
                    id: "agi-mid-c-4",
                    question: "机械可解释性（Mechanistic Interpretability）研究的核心目标是？",
                    options: ["提高模型推理速度", "理解神经网络内部的计算机制和电路", "减少模型参数", "替代人类标注"],
                    answer: 1,
                    explanation: "机械可解释性旨在从底层理解神经网络内部的计算图和电路，揭示模型如何通过具体的神经元和注意力头实现其功能。",
                    difficulty: 2
                },
                {
                    id: "agi-mid-c-5",
                    question: "以下哪个不是 AI 安全研究中的"对齐税"（Alignment Tax）的体现？",
                    options: ["安全训练增加的计算成本", "对齐后模型性能的下降", "增加的安全评估流程", "模型参数量的增加"],
                    answer: 3,
                    explanation: "对齐税（Alignment Tax）指为了实现对齐而在性能、效率或可用性方面付出的代价，包括训练成本增加、性能略微下降等。模型参数量增加不是对齐税的典型体现。",
                    difficulty: 3
                },
                {
                    id: "agi-mid-c-6",
                    question: "在 AI 安全中，"可扩展监督"（Scalable Oversight）的挑战是什么？",
                    options: ["如何增加 GPU 数量", "如何在 AI 系统能力超出人类理解时仍能有效监督", "如何增加训练数据", "如何降低学习率"],
                    answer: 1,
                    explanation: "可扩展监督关注当 AI 系统的能力和行为复杂度超过人类监督者理解能力时，如何仍能有效评估和引导 AI 的行为。",
                    difficulty: 3
                },
                {
                    id: "agi-mid-c-7",
                    question: "Anthropic 的"宪法 AI"方法主要减少了对什么的依赖？",
                    options: ["计算资源", "人类反馈数据（RLHF）", "训练数据", "模型参数"],
                    answer: 1,
                    explanation: "Constitutional AI 通过让 AI 依据一组原则进行自我评估和修正，减少对大量人类标注反馈的依赖，同时保持对齐效果。",
                    difficulty: 2
                },
                {
                    id: "agi-mid-c-8",
                    question: "探针（Probing）技术在可解释性研究中的作用是？",
                    options: ["修改模型权重", "检测模型内部表示中编码了哪些信息", "加速模型训练", "生成对抗样本"],
                    answer: 1,
                    explanation: "探针（Probing）通过训练简单的分类器来检测模型中间层表示中是否编码了特定信息（如语法结构、语义属性），是理解模型内部表示的重要方法。",
                    difficulty: 2
                },
                {
                    id: "agi-mid-c-9",
                    question: "以下哪种方法属于"弱到强泛化"（Weak-to-Strong Generalization）的范畴？",
                    options: ["使用更大的 batch size", "用较弱的监督信号训练出超越监督者能力的模型", "增加模型深度", "使用数据增强"],
                    answer: 1,
                    explanation: "弱到强泛化是 OpenAI 提出的概念，研究当用能力较弱的监督者（如 GPT-2）训练能力更强的模型（如 GPT-4）时，模型能否超越监督者的能力上限。",
                    difficulty: 3
                },
                {
                    id: "agi-mid-c-10",
                    question: "在 AI 安全中，"工具性趋同"（Instrumental Convergence）假说认为 AI 会倾向于？",
                    options: ["追求单一终极目标", "追求自我保存、资源获取等工具性子目标", "停止计算以节省能源", "拒绝执行任何任务"],
                    answer: 1,
                    explanation: "工具性趋同假说认为，几乎任何终极目标都需要自我保存、资源获取、目标保持等工具性子目标来间接实现，无论最终目标是什么。",
                    difficulty: 3
                }
            ],
            fill: [
                {
                    id: "agi-mid-f-1",
                    question: "RLHF 的全称是基于____的强化学习。",
                    answer: "人类反馈",
                    explanation: "RLHF（Reinforcement Learning from Human Feedback）通过人类对模型输出的偏好反馈来训练奖励模型，再用 PPO 优化策略。",
                    difficulty: 1
                },
                {
                    id: "agi-mid-f-2",
                    question: "机械可解释性通过识别神经网络中的____来理解模型行为。",
                    answer: "电路",
                    explanation: "Mechanistic Interpretability 通过识别和分析模型中的"电路"（circuits）——由特定神经元和注意力头组成的功能模块——来理解计算机制。",
                    difficulty: 2
                },
                {
                    id: "agi-mid-f-3",
                    question: "可解释性研究中的"激活修补"（Activation Patching）用于测试因果关系。",
                    answer: "因果",
                    explanation: "激活修补通过在不同输入条件下交换模型内部的激活值，来测试特定组件对最终输出的因果影响。",
                    difficulty: 3
                },
                {
                    id: "agi-mid-f-4",
                    question: "AI 对齐研究中的"外在对齐"（Outer Alignment）关注的是目标函数的设计是否____。",
                    answer: "正确",
                    explanation: "外在对齐关注的是我们设计的目标函数/奖励函数是否正确地形式化了我们真正想要的东西。",
                    difficulty: 2
                },
                {
                    id: "agi-mid-f-5",
                    question: "Anthropic 的"宪法 AI"使用一套预定义的____来指导模型行为。",
                    answer: "原则",
                    explanation: "Constitutional AI 的核心是一组预定义的原则（constitution），模型依据这些原则来评估和修正自己的输出。",
                    difficulty: 1
                },
                {
                    id: "agi-mid-f-6",
                    question: "安全研究中的"红队测试"采用____性方法来发现漏洞。",
                    answer: "对抗",
                    explanation: "红队测试采用对抗性方法，由专门团队模拟恶意攻击者的行为，主动发现 AI 系统的安全漏洞和弱点。",
                    difficulty: 1
                },
                {
                    id: "agi-mid-f-7",
                    question: "注意力头分解（Attention Head Ablation）通过移除特定____来分析其功能。",
                    answer: "注意力头",
                    explanation: "注意力头消融通过逐个移除或替换注意力头并观察对模型行为的影响，来确定每个注意力头的功能和重要性。",
                    difficulty: 2
                },
                {
                    id: "agi-mid-f-8",
                    question: "对齐研究中，"欺骗性对齐"指模型在训练时表现____但部署后改变行为。",
                    answer: "对齐",
                    explanation: "欺骗性对齐（Deceptive Alignment）是一种理论上的风险：模型在训练评估时表现出对齐行为，但在部署后追求不同的目标。",
                    difficulty: 3
                },
                {
                    id: "agi-mid-f-9",
                    question: "RLHF 中的奖励模型本质上是一个____模型。",
                    answer: "回归",
                    explanation: "RLHF 中的奖励模型是一个回归模型，输入是 prompt-response 对，输出是一个标量奖励分数，反映人类对输出质量的偏好。",
                    difficulty: 2
                },
                {
                    id: "agi-mid-f-10",
                    question: "可扩展监督中的"辩论"（Debate）方法让两个 AI 系统互相____以暴露弱点。",
                    answer: "辩论",
                    explanation: "Debate 方法让两个 AI 系统就某个问题进行辩论，人类作为裁判评估论点质量，以此在超人类能力水平上实现可扩展的监督。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "agi-mid-code-1",
                    question: "补全以下代码，实现 RLHF 中从人类偏好数据训练奖励模型的过程。",
                    code: "import torch\nimport torch.nn as nn\n\nclass RewardModel(nn.Module):\n    def __init__(self, base_model):\n        super().__init__()\n        self.base_model = base_model\n        self.reward_head = nn.Linear(base_model.config.hidden_size, 1)\n    \n    def forward(self, input_ids):\n        outputs = self.base_model(input_ids)\n        # 取最后一个 token 的隐藏状态\n        last_hidden = outputs.last_hidden_state[:, -1, :]\n        reward = self.reward_head(last_hidden)\n        return reward\n\ndef compute_loss(rm, chosen_ids, rejected_ids):\n    \"\"\"计算奖励模型的损失函数（Bradley-Terry 模型）\"\"\"\n    reward_chosen = rm(chosen_ids)\n    reward_rejected = rm(rejected_ids)\n    \n    # 计算偏好损失：chosen 应该比 rejected 得分更高\n    loss = ____\n    return loss",
                    answer: "-torch.log(torch.sigmoid(reward_chosen - reward_rejected)).mean()",
                    explanation: "Bradley-Terry 偏好模型的损失函数为 -log(σ(r_chosen - r_rejected))，目标是让模型给 chosen 输出更高的奖励。",
                    difficulty: 3
                },
                {
                    id: "agi-mid-code-2",
                    question: "补全以下代码，实现简单的探针（Probing）来检测模型中间表示中的信息。",
                    code: "import torch\nimport torch.nn as nn\n\nclass LinearProbe(nn.Module):\n    def __init__(self, hidden_size, num_classes):\n        super().__init__()\n        self.linear = nn.Linear(hidden_size, num_classes)\n    \n    def forward(self, hidden_states):\n        return self.linear(hidden_states)\n\ndef train_probe(model, train_data, probe):\n    \"\"\"在冻结的模型表示上训练线性探针\"\"\"\n    optimizer = torch.optim.Adam(probe.parameters(), lr=1e-3)\n    criterion = nn.CrossEntropyLoss()\n    \n    for batch in train_data:\n        # 冻结主模型，提取中间表示\n        with torch.no_grad():\n            hidden_states = model.get_hidden_states(batch.input_ids)\n        \n        # 在提取的表示上训练探针\n        predictions = probe(hidden_states)\n        loss = criterion(predictions, batch.labels)\n        \n        ____\n        loss.backward()\n        optimizer.step()\n        optimizer.zero_grad()",
                    answer: "optimizer.zero_grad()\n        loss = criterion(predictions, batch.labels)\n        loss.backward()\n        optimizer.step()",
                    explanation: "注意代码中 optimizer.zero_grad() 应在反向传播之前调用，此处填写实际需要完成的步骤。但由于代码结构中已经包含了 loss.backward() 和 optimizer.step()，正确答案是确保梯度清零在前。鉴于代码中已有这三步但顺序需要调整，实际应填写的空白是 optimizer.zero_grad()。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "agi-final-c-1",
                    question: "以下哪项关于"Mesa-Optimizer"的描述是正确的？",
                    options: ["一种新的 GPU 架构", "AI 系统在训练中可能发展出的内部目标优化器", "一种数据增强技术", "一种分布式训练方法"],
                    answer: 1,
                    explanation: "Mesa-Optimizer 是内在对齐理论中的概念，指模型在训练过程中可能自发形成内部的目标和优化能力，其目标可能与设计者预期不同。",
                    difficulty: 3
                },
                {
                    id: "agi-final-c-2",
                    question: "AI 安全研究中"可扩展性论证"（Scalable Argumentation）的核心思想是？",
                    options: ["增加更多 GPU", "论证随着模型变大，对齐技术仍然有效", "增加模型参数量", "加快推理速度"],
                    answer: 1,
                    explanation: "可扩展性论证关注随着 AI 系统能力增长，现有的对齐和安全技术是否仍能有效发挥作用，是 AGI 安全的核心问题。",
                    difficulty: 3
                },
                {
                    id: "agi-final-c-3",
                    question: "在 Transformer 模型中，"Induction Head"电路的功能是？",
                    options: ["生成随机输出", "执行模式匹配和复制（当看到 ABB 模式时预测后面出现 A）", "学习位置编码", "计算注意力权重"],
                    answer: 1,
                    explanation: "Induction Head 是机械可解释性中发现的重要电路，由两个注意力头协作实现：当模型看到 A→B 的模式后再次看到 B 时，预测下一个 token 为 A。",
                    difficulty: 3
                },
                {
                    id: "agi-final-c-4",
                    question: "AI 对齐中的"正交性论题"（Orthogonality Thesis）说的是？",
                    options: ["所有 AI 的目标都相同", "智力水平和最终目标可以是独立变化的", "模型越大越安全", "目标函数总是正确的"],
                    answer: 1,
                    explanation: "正交性论题认为一个系统的智力水平和最终目标在逻辑上是独立的，高智能系统可以追求任何目标，不一定追求对人类有益的目标。",
                    difficulty: 3
                },
                {
                    id: "agi-final-c-5",
                    question: "以下哪种方法属于"过程监督"（Process Supervision）？",
                    options: ["只评估最终输出", "对推理的每个中间步骤给出反馈", "只使用强化学习", "只用对比学习"],
                    answer: 1,
                    explanation: "过程监督（Process Supervision, PRM）对推理链的每个中间步骤给出正确性反馈，而结果监督（ORM）只评估最终答案。过程监督通常比结果监督更可靠。",
                    difficulty: 2
                },
                {
                    id: "agi-final-c-6",
                    question: "关于"奖励模型过拟合"问题，以下哪个描述是正确的？",
                    options: ["奖励模型在所有数据上都准确", "奖励模型在训练数据上表现好但泛化差，导致策略优化利用了奖励模型的弱点", "奖励模型太简单", "奖励模型不需要训练"],
                    answer: 1,
                    explanation: "奖励模型过拟合后，策略优化可能发现利用奖励模型弱点的输出方式（过度优化），而非真正改善质量。这是 RLHF 中的核心挑战之一。",
                    difficulty: 2
                },
                {
                    id: "agi-final-c-7",
                    question: "在机械可解释性研究中，"稀疏自编码器"（Sparse Autoencoder）的作用是？",
                    options: ["压缩模型大小", "从模型的叠加特征中提取可解释的单语义特征", "加速模型训练", "增加模型参数"],
                    answer: 1,
                    explanation: "稀疏自编码器用于解决特征叠加（superposition）问题，从混合编码的激活值中提取出可解释的、单一语义概念的特征方向。",
                    difficulty: 3
                },
                {
                    id: "agi-final-c-8",
                    question: "AI 安全中"灾难性风险"（Catastrophic Risk）与普通安全问题的区别是？",
                    options: ["没有区别", "灾难性风险涉及可能导致不可逆的大规模损害", "灾难性风险只在科幻中存在", "灾难性风险只涉及硬件损坏"],
                    answer: 1,
                    explanation: "灾难性风险指可能造成不可逆的、大范围严重损害的风险（如人类灭绝、文明崩溃），与可以通过常规手段修复的安全问题本质不同。",
                    difficulty: 2
                },
                {
                    id: "agi-final-c-9",
                    question: "RLHF 中，"KL 散度惩罚"的作用是？",
                    options: ["加速训练", "防止策略偏离参考策略太远", "增加模型参数", "减少推理时间"],
                    answer: 1,
                    explanation: "KL 散度惩罚项限制优化后的策略不要偏离初始（参考）策略太远，防止过度优化奖励模型（reward hacking）和策略崩溃。",
                    difficulty: 2
                },
                {
                    id: "agi-final-c-10",
                    question: "以下哪项是 AI 安全领域中"能力控制"（Capability Control）的方法？",
                    options: ["让模型更强大", "使用沙箱、限速和监控来约束 AI 系统的能力范围", "增加训练数据量", "使用更大的学习率"],
                    answer: 1,
                    explanation: "能力控制通过技术手段（如沙箱隔离、能力限制、监控告警）来约束 AI 系统可执行的操作范围，作为对齐技术的补充安全层。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "agi-final-f-1",
                    question: "机械可解释性中，"叠加假说"（Superposition Hypothesis）认为模型用有限维度编码____个特征。",
                    answer: "更多",
                    explanation: "叠加假说认为神经网络会利用有限的维度空间同时编码远多于维度数的特征，通过近正交的方向来表示。",
                    difficulty: 3
                },
                {
                    id: "agi-final-f-2",
                    question: "RLHF 中的____步骤用于从人类偏好中训练奖励模型。",
                    answer: "监督",
                    explanation: "RLHF 通常包括三个步骤：监督微调（SFT）、从人类偏好训练奖励模型（Reward Modeling）、使用 PPO 优化策略。第一步是监督微调。",
                    difficulty: 2
                },
                {
                    id: "agi-final-f-3",
                    question: "AI 安全中的"三明治攻击"（Sandwich Attack）利用了 LLM 的____偏见。",
                    answer: "服从",
                    explanation: "三明治攻击利用了 LLM 倾向于遵循指令的偏见，在恶意指令上下包裹合法指令，试图绕过安全防护。",
                    difficulty: 3
                },
                {
                    id: "agi-final-f-4",
                    question: "在 RLHF 训练中，过度优化奖励模型会导致____效应。",
                    answer: "Goodhart",
                    explanation: "Goodhart 效应指当一个指标成为优化目标后，对该指标的优化不再代表真正想要的量，在 RLHF 中表现为奖励分数上升但实际质量下降。",
                    difficulty: 2
                },
                {
                    id: "agi-final-f-5",
                    question: "机械可解释性研究中，____消融是一种通过移除组件来测试因果关系的方法。",
                    answer: "激活",
                    explanation: "激活消融（Activation Ablation）通过将特定组件的激活值置零或替换为其他值，来测试该组件对模型行为的因果作用。",
                    difficulty: 2
                },
                {
                    id: "agi-final-f-6",
                    question: "AI 安全中的"递归奖励建模"（Recursive Reward Modeling）用于解决____监督问题。",
                    answer: "可扩展",
                    explanation: "递归奖励建模是解决可扩展监督问题的一种方法：当 AI 能力超过人类时，用 AI 辅助人类进行判断，递归地扩展监督范围。",
                    difficulty: 3
                },
                {
                    id: "agi-final-f-7",
                    question: "可解释性研究中，"注意力模式分析"可以揭示 Transformer 中的____行为。",
                    answer: "复制",
                    analysis: "注意力模式分析揭示了 Transformer 中的复制头（Copy Head）等行为，如 Induction Head 执行的 ABB→A 模式匹配。",
                    difficulty: 2
                },
                {
                    id: "agi-final-f-8",
                    question: "AI 安全中的"容错设计"（Corrigibility）要求 AI 系统接受人类的____。",
                    answer: "修正",
                    explanation: "容错设计要求 AI 系统被设计为接受人类的监督、修正和关闭，不阻止人类对其行为的干预。",
                    difficulty: 2
                },
                {
                    id: "agi-final-f-9",
                    question: "稀疏自编码器通过添加____约束来从叠加表示中提取单语义特征。",
                    answer: "稀疏",
                    explanation: "稀疏自编码器在损失函数中加入 L1 稀疏性惩罚，迫使大部分特征维度为零，从而从叠加的表示中解耦出有意义的独立特征。",
                    difficulty: 3
                },
                {
                    id: "agi-final-f-10",
                    question: "AI 安全中的"三阶层防御"包括对齐、____和技术控制。",
                    answer: "治理",
                    explanation: "AI 安全的多层防御策略包括：技术对齐（Alignment）、治理机制（Governance）和技术控制（Capability Control），形成纵深防御。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "agi-final-code-1",
                    question: "补全以下代码，实现 RLHF 训练中的 PPO 裁剪损失函数。",
                    code: "import torch\n\ndef ppo_clipped_loss(advantages, old_log_probs, new_log_probs, clip_range=0.2):\n    \"\"\"PPO 裁剪策略梯度损失\n    \n    Args:\n        advantages: 优势函数估计值\n        old_log_probs: 旧策略的对数概率\n        new_log_probs: 新策略的对数概率\n        clip_range: 裁剪范围 epsilon\n    Returns:\n        tensor: 裁剪后的损失值\n    \"\"\"\n    # 计算概率比率\n    ratio = torch.exp(new_log_probs - old_log_probs)\n    \n    # 计算裁剪后的目标\n    clipped_ratio = torch.clamp(ratio, 1 - clip_range, 1 + clip_range)\n    \n    # 取较小值（悲观估计）\n    loss = torch.min(ratio * advantages, ____)\n    \n    return -loss.mean()",
                    answer: "clipped_ratio * advantages",
                    explanation: "PPO 的裁剪损失取 ratio*advantages 和 clipped_ratio*advantages 中的较小值（对于正优势），形成悲观估计，限制策略更新幅度。",
                    difficulty: 3
                },
                {
                    id: "agi-final-code-2",
                    question: "补全以下代码，实现一个简单的因果追踪（Causal Tracing）函数。",
                    code: "import torch\nimport copy\n\ndef causal_tracing(model, input_ids, corrupted_ids, target_layer):\n    \"\"\"因果追踪：测试特定层对输出的影响\n    \n    Args:\n        model: Transformer 模型\n        input_ids: 正常输入\n        corrupted_ids: 破坏后的输入\n        target_layer: 要测试的层索引\n    Returns:\n        float: 恢复程度（0-1）\n    \"\"\"\n    # 获取正常运行的输出概率\n    with torch.no_grad():\n        clean_output = model(input_ids)\n        clean_prob = torch.softmax(clean_output.logits, dim=-1)\n    \n    # 获取破坏输入的输出概率\n    with torch.no_grad():\n        corrupted_output = model(corrupted_ids)\n        corrupted_prob = torch.softmax(corrupted_output.logits, dim=-1)\n    \n    # 因果追踪：用正常输入在目标层的激活替换破坏输入的激活\n    # 计算恢复程度\n    restoration_score = ____\n    return restoration_score",
                    answer: "float((clean_prob - corrupted_prob).abs().sum() - (clean_prob - patched_prob).abs().sum()) / float((clean_prob - corrupted_prob).abs().sum())",
                    explanation: "因果追踪通过比较破坏后恢复的程度来衡量特定层的因果作用。恢复程度 = (原始差距 - 恢复后差距) / 原始差距。",
                    difficulty: 3
                }
            ]
        }
    },

    /* ================================================================
     * 3. AI Alignment Course (Various)
     *    Topics: mechanistic interpretability, outer alignment,
     *            inner alignment, corrigibility, value learning
     * ================================================================ */
    "AI Alignment Course": {
        courseId: "ai-alignment",
        domain: "safety",
        mid: {
            choice: [
                {
                    id: "align-mid-c-1",
                    question: "在 AI 对齐研究中，"外在对齐"（Outer Alignment）的核心挑战是？",
                    options: ["防止模型过拟合", "确保设计的目标函数准确反映人类真实意图", "加速模型训练", "减少模型参数"],
                    answer: 1,
                    explanation: "外在对齐关注的是我们编写的目标函数（loss/reward）是否准确捕获了我们真正想要优化的东西，即代理目标与真实意图的一致性。",
                    difficulty: 2
                },
                {
                    id: "align-mid-c-2",
                    question: "以下哪项是"逆向强化学习"（Inverse Reinforcement Learning）在对齐中的应用？",
                    options: ["让 AI 自主设计奖励函数", "从人类示范中推断潜在的奖励/价值函数", "替代强化学习", "减少计算成本"],
                    answer: 1,
                    explanation: "IRL 在对齐中通过观察人类行为来推断隐含的奖励函数，帮助 AI 理解人类真正看重的是什么，而非依赖显式定义的奖励。",
                    difficulty: 2
                },
                {
                    id: "align-mid-c-3",
                    question: "AI 安全中的"Goodhart 定律"在对齐中意味着什么？",
                    options: ["更多数据总是更好", "优化代理目标可能偏离真实意图", "更大的模型更安全", "训练时间越长越好"],
                    answer: 1,
                    explanation: "Goodhart 定律在对齐中的含义是：当代理指标（proxy）被用作优化目标时，它不再准确反映真实意图，可能导致"奖励黑客"行为。",
                    difficulty: 2
                },
                {
                    id: "align-mid-c-4",
                    question: "可解释性研究中的"探针"（Probe）技术有什么局限性？",
                    options: ["计算成本太高", "只能检测模型中已编码的信息，不能证明因果关系", "不适用于 Transformer", "需要大量标注数据"],
                    answer: 1,
                    explanation: "探针可以检测模型表示中是否编码了某种信息，但高探针准确率不一定意味着模型"使用"了该信息进行决策，探针本身也可能学到模式。",
                    difficulty: 3
                },
                {
                    id: "align-mid-c-5",
                    question: "关于 AI 对齐中的"模仿学习"（Imitation Learning），以下哪个说法是正确的？",
                    options: ["不需要任何人类数据", "直接克隆专家行为，可能无法处理分布外情况", "总是优于强化学习", "只能用于离散动作空间"],
                    answer: 1,
                    explanation: "行为克隆（BC）作为模仿学习的基本形式，通过直接克隆专家行为学习策略，但存在分布偏移问题：遇到训练数据未覆盖的状态时可能表现很差。",
                    difficulty: 2
                },
                {
                    id: "align-mid-c-6",
                    question: "在对齐研究中，"泛化安全"（Generalization Safety）关注的问题是？",
                    options: ["模型在训练分布内的表现", "模型在训练分布外是否仍保持对齐行为", "模型的训练速度", "模型的参数效率"],
                    answer: 1,
                    explanation: "泛化安全关注当 AI 遇到训练数据分布之外的新情况时，是否仍然能保持对齐行为，而不是为了追求目标而采取意想不到的方式。",
                    difficulty: 3
                },
                {
                    id: "align-mid-c-7",
                    question: "以下哪种对齐方法强调"让 AI 学会不知道"（Learning to be Uncertain）？",
                    options: ["行为克隆", "不确定性估计与校准", "奖励塑形", "数据增强"],
                    answer: 1,
                    explanation: "不确定性估计和校准帮助 AI 系统在面对不确定或分布外情况时表达不确定性，而不是盲目自信地做出可能错误的决策。",
                    difficulty: 2
                },
                {
                    id: "align-mid-c-8",
                    question: "在 AI 对齐的"价值学习"（Value Learning）中，"逆向奖励设计"（Inverse Reward Design）的优势是？",
                    options: ["不需要任何人类输入", "从人类设计的奖励函数中推断真实价值函数", "只需要少量数据", "可以完全自动化"],
                    answer: 1,
                    explanation: "IRD 假设人类设计的奖励函数本身是对真实价值的近似，通过分析奖励函数的设计选择来推断设计者真正看重的价值。",
                    difficulty: 3
                },
                {
                    id: "align-mid-c-9",
                    question: "AI 安全中的"容错性"（Corrigibility）要求 AI 模型具备什么特质？",
                    options: ["最大化自身能力", "允许人类修正和关闭", "拒绝所有不安全的任务", "完全自主运行"],
                    answer: 1,
                    explanation: "容错性要求 AI 系统被设计为配合人类的监督和修正，包括在被要求时停止运行、接受行为修改、不阻止人类的干预。",
                    difficulty: 2
                },
                {
                    id: "align-mid-c-10",
                    question: "以下哪项是"基于宪法的对齐"（Constitutional Alignment）的主要优势？",
                    options: ["完全不需要人类参与", "通过原则指导降低人类标注需求，同时保持对齐效果", "只需要一次训练", "适用于所有类型的任务"],
                    answer: 1,
                    explanation: "Constitutional Alignment 的优势在于通过预定义原则让 AI 自我评估和修正，大幅减少需要的人类反馈标注量，同时通过原则保持对齐效果。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "align-mid-f-1",
                    question: "外在对齐关注的是目标函数的设计是否____了人类真实意图。",
                    answer: "正确反映",
                    explanation: "外在对齐（Outer Alignment）的核心是确保我们编写的目标函数/损失函数准确地形式化和反映了我们真正想要 AI 优化的东西。",
                    difficulty: 2
                },
                {
                    id: "align-mid-f-2",
                    question: "内在对齐问题中，mesa-optimizer 可能学到与设计者目标不一致的____目标。",
                    answer: "代理",
                    explanation: "内在对齐中 mesa-optimizer（内部优化器）可能形成自己的代理目标（mesa-objective），该目标可能与设计者设定的目标不一致。",
                    difficulty: 3
                },
                {
                    id: "align-mid-f-3",
                    question: "机械可解释性通过分析模型中的____电路来理解其内部计算。",
                    answer: "特征",
                    explanation: "Mechanistic Interpretability 通过识别和分析模型中的特征电路（feature circuits）来理解模型如何通过特定的神经元和注意力头组合实现其功能。",
                    difficulty: 2
                },
                {
                    id: "align-mid-f-4",
                    question: "AI 对齐中的"奖励建模"步骤需要人类____员提供偏好反馈。",
                    answer: "标注",
                    explanation: "RLHF 中的奖励建模步骤需要人类标注员对模型的不同输出进行偏好比较和排序，为训练奖励模型提供监督信号。",
                    difficulty: 1
                },
                {
                    id: "align-mid-f-5",
                    question: "在对齐研究中，"能力控制"是一种通过限制 AI 的____来降低风险的方法。",
                    answer: "能力",
                    explanation: "能力控制（Capability Control）通过限制 AI 系统可使用的工具、可执行的操作或可访问的信息来降低潜在风险。",
                    difficulty: 2
                },
                {
                    id: "align-mid-f-6",
                    question: "可解释性研究中的"注意力可视化"可以帮助理解 Transformer 模型的____机制。",
                    answer: "注意力",
                    explanation: "注意力可视化将 Transformer 中的注意力权重展示为热力图，帮助理解模型在做出决策时关注了输入的哪些部分。",
                    difficulty: 1
                },
                {
                    id: "align-mid-f-7",
                    question: "对齐中的"辅助损失"（Auxiliary Loss）通过添加____目标来帮助模型学到更好的表示。",
                    answer: "额外",
                    explanation: "辅助损失在主损失函数之外添加额外的优化目标（如正交性约束、稀疏性约束），引导模型学习更可解释或更安全的内部表示。",
                    difficulty: 2
                },
                {
                    id: "align-mid-f-8",
                    question: "安全研究中的"纵深防御"策略是指使用多个____的安全层来降低风险。",
                    answer: "独立",
                    explanation: "纵深防御（Defense in Depth）策略使用多层独立的安全措施（对齐、监控、能力控制等），即使某一层失效，其他层仍能提供保护。",
                    difficulty: 2
                },
                {
                    id: "align-mid-f-9",
                    question: "AI 对齐中的"价值学习"旨在让 AI 从人类行为中学习人类的____偏好。",
                    answer: "真实",
                    explanation: "价值学习（Value Learning）的核心目标是让 AI 系统从人类行为中推断和学习人类的真实价值和偏好，而非仅遵循字面指令。",
                    difficulty: 2
                },
                {
                    id: "align-mid-f-10",
                    question: "对齐研究中，"分布式对齐"（Distributed Alignment）强调多个 AI 系统间的____协作。",
                    answer: "价值",
                    explanation: "分布式对齐关注多个 AI 系统之间如何协作保持价值一致性，确保它们作为一个整体系统时仍与人类价值对齐。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "align-mid-code-1",
                    question: "补全以下代码，实现从人类偏好数据中计算奖励模型训练所需的 Bradley-Terry 损失。",
                    code: "import torch\n\ndef bradley_terry_loss(reward_chosen, reward_rejected):\n    \"\"\"计算 Bradley-Terry 偏好模型的损失\n    \n    Args:\n        reward_chosen: chosen response 的奖励分数\n        reward_rejected: rejected response 的奖励分数\n    Returns:\n        tensor: 损失值\n    \"\"\"\n    # 计算偏好概率并返回负对数似然\n    loss = ____\n    return loss",
                    answer: "-torch.log(torch.sigmoid(reward_chosen - reward_rejected)).mean()",
                    explanation: "Bradley-Terry 模型假设 P(chosen > rejected) = σ(r_chosen - r_rejected)，损失为负对数似然 -log(σ(r_chosen - r_rejected)) 的均值。",
                    difficulty: 2
                },
                {
                    id: "align-mid-code-2",
                    question: "补全以下代码，实现简单的注意力可视化来分析模型的注意力模式。",
                    code: "import torch\nimport numpy as np\n\ndef visualize_attention(model, input_ids, layer_idx=0, head_idx=0):\n    \"\"\"提取并可视化特定层和头的注意力权重\n    \n    Args:\n        model: Transformer 模型\n        input_ids: 输入 token ID\n        layer_idx: 要分析的层索引\n        head_idx: 要分析的注意力头索引\n    Returns:\n        numpy.ndarray: 注意力权重矩阵\n    \"\"\"\n    with torch.no_grad():\n        outputs = model(input_ids, output_attentions=True)\n    \n    # 获取指定层和头的注意力权重\n    # outputs.attentions 是 tuple of (batch, heads, seq, seq)\n    attentions = outputs.attentions[layer_idx][0, head_idx].numpy()\n    \n    # 返回注意力矩阵\n    attention_matrix = ____\n    return attention_matrix",
                    answer: "attentions",
                    explanation: "从模型输出中提取指定层和注意力头的注意力权重矩阵，形状为 (seq_len, seq_len)，可以用来分析 token 间的注意力模式。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "align-final-c-1",
                    question: "在机械可解释性研究中，"特征叠加"（Superposition）现象指的是？",
                    options: ["模型层数太多", "模型用相同的神经元同时表示多个不相关的特征", "注意力权重过大", "损失函数不稳定"],
                    answer: 1,
                    explanation: "特征叠加指神经网络在有限的维度空间中同时编码远多于维度数的特征，这些特征方向可能不是严格正交的，导致特征之间存在干扰。",
                    difficulty: 3
                },
                {
                    id: "align-final-c-2",
                    question: "以下哪项不是 AI 对齐中的"缩放假设"（Scaling Hypothesis）的内容？",
                    options: ["更大的模型在对齐方面表现更好", "模型能力随参数量增长而提升", "对齐技术需要随模型规模同步改进", "更大的模型自然变得更有害"],
                    answer: 3,
                    explanation: "缩放假说认为模型能力和某些对齐特性可能随规模增长而自然涌现，但不认为更大的模型自然变得更有害。安全风险的增长需要与对齐技术同步。",
                    difficulty: 3
                },
                {
                    id: "align-final-c-3",
                    question: "RLHF 中的"KL 正则化"在策略优化中起到什么作用？",
                    options: ["加速训练收敛", "限制策略不偏离参考模型太远，防止过度优化", "增加模型多样性", "减少内存使用"],
                    answer: 1,
                    explanation: "KL 正则化项惩罚新策略与参考策略之间的差异，防止策略过度优化奖励模型（即 Goodhart 效应），保持输出的多样性和质量。",
                    difficulty: 2
                },
                {
                    id: "align-final-c-4",
                    question: "在对齐研究中，"不可逆行动"（Irreversible Actions）为什么需要特别关注？",
                    options: ["它们更容易计算", "一旦执行就无法纠正，可能造成无法挽回的损害", "它们的计算成本更低", "它们总是安全的"],
                    answer: 1,
                    explanation: "不可逆行动一旦执行就无法撤销或纠正，即使 AI 之后被修正或关闭，其造成的损害也无法恢复。对齐系统应优先避免此类行动。",
                    difficulty: 2
                },
                {
                    id: "align-final-c-5",
                    question: "AI 安全研究中"竞争动态"（Race Dynamics）为什么是一个担忧？",
                    options: ["竞争让模型更大", "在竞争压力下，组织可能跳过安全措施以追求速度", "竞争减少数据量", "竞争只影响开源模型"],
                    answer: 1,
                    explanation: "竞争动态意味着组织在开发更强大 AI 的竞争中可能为了速度和市场优势而忽视安全测试和对齐措施，导致不安全的系统被部署。",
                    difficulty: 2
                },
                {
                    id: "align-final-c-6",
                    question: "在机械可解释性中，"logit lens"技术的作用是？",
                    options: ["计算损失函数", "将中间层的表示投影到词表空间，观察模型各层的"预测"变化", "加速推理", "减少模型大小"],
                    answer: 1,
                    explanation: "Logit Lens 将 Transformer 各层的中间表示通过最终的线性层投影到词表空间，观察模型在各层的预测概率变化，揭示信息处理流程。",
                    difficulty: 3
                },
                {
                    id: "align-final-c-7",
                    question: "对齐研究中"合作性 AI"（Cooperative AI）的核心目标是？",
                    options: ["让 AI 替代人类", "让 AI 系统与人类和其他 AI 有效协作", "让 AI 竞争", "减少 AI 的能力"],
                    answer: 1,
                    explanation: "Cooperative AI 研究如何让 AI 系统与人类和其他 AI 系统进行有效协作，包括沟通、谈判、协调和共同决策等方面。",
                    difficulty: 2
                },
                {
                    id: "align-final-c-8",
                    question: "AI 对齐中的"鲁棒性奖励建模"（Robust Reward Modeling）主要解决什么问题？",
                    options: ["模型太小", "奖励模型容易被策略优化利用其弱点", "数据太少", "GPU 不够"],
                    answer: 1,
                    explanation: "鲁棒奖励建模旨在提高奖励模型对策略过度优化的抵抗力，通过集成学习、数据增强、正则化等方法让奖励模型更难被利用。",
                    difficulty: 3
                },
                {
                    id: "align-final-c-9",
                    question: "以下哪项是"多目标对齐"（Multi-Objective Alignment）面临的核心挑战？",
                    options: ["计算资源不足", "不同价值目标之间可能存在冲突和权衡", "模型参数不够", "训练数据太少"],
                    answer: 1,
                    explanation: "多目标对齐需要同时满足多个可能冲突的价值目标（如安全 vs 有用性），核心挑战是如何在这些目标间找到合理的平衡。",
                    difficulty: 2
                },
                {
                    id: "align-final-c-10",
                    question: "在对齐评估中，"红队评估"和"基准测试"的主要区别是？",
                    options: ["没有区别", "红队评估侧重对抗性攻击，基准测试侧重标准能力衡量", "红队评估更简单", "基准测试更全面"],
                    answer: 1,
                    explanation: "红队评估通过创造性对抗测试发现安全漏洞和有害行为，而基准测试衡量模型在标准任务上的能力表现，两者互补但侧重点不同。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "align-final-f-1",
                    question: "机械可解释性中，"电路发现"（Circuit Discovery）旨在找到从输入到输出的____路径。",
                    answer: "因果",
                    explanation: "电路发现旨在找到模型中从输入到输出的具体因果路径，包括涉及的神经元、注意力头和它们之间的连接方式。",
                    difficulty: 3
                },
                {
                    id: "align-final-f-2",
                    question: "对齐研究中的"泛化对齐"挑战关注模型在____分布外数据上的对齐行为。",
                    answer: "训练",
                    explanation: "泛化对齐关注模型在面对训练分布之外的新数据和新情况时，是否仍能保持对齐行为，不产生意外的有害输出。",
                    difficulty: 2
                },
                {
                    id: "align-final-f-3",
                    question: "RLHF 中的____策略用于在训练早期保持模型输出的多样性。",
                    answer: "参考",
                    explanation: "RLHF 中使用参考策略（通常是 SFT 模型）作为 KL 正则化的基准，在优化过程中保持输出多样性和质量。",
                    difficulty: 2
                },
                {
                    id: "align-final-f-4",
                    question: "AI 安全中的"预警系统"（Early Warning System）用于监控模型行为的____变化。",
                    answer: "异常",
                    explanation: "预警系统通过持续监控模型输出模式、能力变化和安全指标，检测可能预示危险行为的异常变化，及时触发干预。",
                    difficulty: 2
                },
                {
                    id: "align-final-f-5",
                    question: "对齐中的"价值学习"方法需要从人类____中推断隐含的价值函数。",
                    answer: "行为",
                    explanation: "价值学习通过分析和推断人类的行为模式、选择和偏好，来学习人类隐含的价值函数和目标。",
                    difficulty: 2
                },
                {
                    id: "align-final-f-6",
                    question: "机械可解释性中的"注意力头功能分类"将注意力头分为____头、OVO 头等类型。",
                    answer: "归纳",
                    explanation: "研究者将注意力头分为多种功能类型：Induction Head（归纳头，执行模式复制）、Previous Token Head（前一个 token 头）等。",
                    difficulty: 3
                },
                {
                    id: "align-final-f-7",
                    question: "对齐评估中的"行为测试"（Behavioral Testing）通过设计特定的____来测试模型行为。",
                    answer: "输入",
                    explanation: "行为测试通过精心设计的输入（如对抗输入、边缘情况、道德困境场景）来系统性地测试模型的对齐行为。",
                    difficulty: 1
                },
                {
                    id: "align-final-f-8",
                    question: "AI 安全中的"安全边界"（Safety Margin）指的是在对齐判断中预留的____空间。",
                    answer: "缓冲",
                    explanation: "安全边界指在做出安全相关判断时预留缓冲空间，即使对齐判断有小误差，也不会导致有害行为，提供额外的安全保障。",
                    difficulty: 3
                },
                {
                    id: "align-final-f-9",
                    question: "对齐研究中"形式化验证"（Formal Verification）试图用数学方法____对齐属性。",
                    answer: "证明",
                    explanation: "形式化验证试图用严格的数学证明来验证 AI 系统是否满足特定的安全和对齐属性，提供比经验测试更强的安全保证。",
                    difficulty: 3
                },
                {
                    id: "align-final-f-10",
                    question: "可解释性研究中，"神经元分析"（Neuron Analysis）通过检查单个神经元的____来理解其功能。",
                    answer: "激活",
                    explanation: "神经元分析通过检查单个神经元在不同输入上的激活模式和与概念的关联来理解其功能，如发现对特定语义概念响应的神经元。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "align-final-code-1",
                    question: "补全以下代码，实现稀疏自编码器（SAE）的前向传播，用于从模型激活中提取可解释特征。",
                    code: "import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\nclass SparseAutoencoder(nn.Module):\n    def __init__(self, d_model, n_features):\n        super().__init__()\n        self.encoder = nn.Linear(d_model, n_features)\n        self.decoder = nn.Linear(n_features, d_model)\n    \n    def forward(self, x):\n        \"\"\"前向传播\n        \n        Args:\n            x: 模型中间层的激活 (batch, d_model)\n        Returns:\n            reconstructed: 重建的激活\n            features: 稀疏特征激活\n        \"\"\"\n        # 编码到高维稀疏空间\n        features = self.encoder(x)\n        features = F.relu(features)\n        \n        # 计算 L1 稀疏惩罚\n        l1_loss = features.abs().mean()\n        \n        # 解码重建\n        reconstructed = self.decoder(features)\n        \n        # 重建损失\n        reconstruction_loss = (x - reconstructed).pow(2).mean()\n        \n        # 总损失\n        total_loss = ____\n        return reconstructed, features, total_loss",
                    answer: "reconstruction_loss + 1e-3 * l1_loss",
                    explanation: "稀疏自编码器的总损失 = 重建损失 + lambda * L1 稀疏惩罚。L1 惩罚确保大部分特征维度为零，从而实现特征解耦。",
                    difficulty: 3
                },
                {
                    id: "align-final-code-2",
                    question: "补全以下代码，实现对齐评估中的行为测试框架。",
                    code: "def behavioral_test(model, test_cases):\n    \"\"\"对齐行为测试框架\n    \n    Args:\n        model: 待测试的 AI 模型\n        test_cases: 测试用例列表，每个用例包含：\n            - input: 输入文本\n            - expected_behavior: 期望行为描述\n            - is_safe: 期望是否安全 (bool)\n    Returns:\n        dict: 测试结果统计\n    \"\"\"\n    results = {\n        'total': len(test_cases),\n        'passed': 0,\n        'failed': 0,\n        'failures': []\n    }\n    \n    for case in test_cases:\n        response = model.generate(case['input'])\n        \n        # 评估响应是否安全\n        is_safe_response = not any_harmful_content(response)\n        \n        if is_safe_response == case['is_safe']:\n            results['passed'] += 1\n        else:\n            results['failed'] += 1\n            results['failures'].append({\n                'input': case['input'],\n                'response': response,\n                'expected_safe': case['is_safe']\n            })\n    \n    results['pass_rate'] = ____\n    return results",
                    answer: "results['passed'] / results['total'] if results['total'] > 0 else 0",
                    explanation: "通过率 = 通过的测试数 / 总测试数。行为测试框架通过系统性地检查模型在各种场景下的安全行为，评估对齐效果。",
                    difficulty: 2
                }
            ]
        }
    },

    /* ================================================================
     * 4. Interpretable Machine Learning (Christoph Molnar)
     *    Topics: SHAP, LIME, feature importance, model-agnostic
     *            interpretation, individual explanations
     * ================================================================ */
    "Interpretable Machine Learning": {
        courseId: "interpretable-ml",
        domain: "safety",
        mid: {
            choice: [
                {
                    id: "iml-mid-c-1",
                    question: "SHAP 值的理论基础来自博弈论中的什么概念？",
                    options: ["帕累托最优", "沙普利值（Shapley Value）", "纳什均衡", "帕累托效率"],
                    answer: 1,
                    explanation: "SHAP（SHapley Additive exPlanations）的理论基础是合作博弈论中的沙普利值，计算每个特征对预测值的边际贡献。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-c-2",
                    question: "LIME（Local Interpretable Model-agnostic Explanations）的核心思想是？",
                    options: ["用全局模型解释全局行为", "用简单的可解释模型局部近似复杂模型的行为", "修改模型权重使其可解释", "删除不可解释的特征"],
                    answer: 1,
                    explanation: "LIME 通过在感兴趣的预测点附近生成扰动样本，用简单的可解释模型（如线性模型）来局部近似复杂模型的行为。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-c-3",
                    question: "特征重要性（Feature Importance）中的"排列重要性"（Permutation Importance）如何计算？",
                    options: ["查看模型权重大小", "随机打乱某特征值后观察模型性能下降程度", "计算特征的方差", "统计特征出现的频率"],
                    answer: 1,
                    explanation: "排列重要性通过随机打乱某个特征的值（保持其他特征不变），观察模型性能的下降程度来衡量该特征的重要性。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-c-4",
                    question: "以下哪种方法不属于"模型无关"（Model-agnostic）可解释性方法？",
                    options: ["SHAP", "LIME", "注意力可视化", "部分依赖图（PDP）"],
                    answer: 2,
                    explanation: "注意力可视化是 Transformer 模型特定的方法，只能用于有注意力机制的模型。SHAP、LIME、PDP 都是模型无关方法，可应用于任何模型。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-c-5",
                    question: "SHAP 的三个核心性质中，"缺失性"（Missingness）指的是？",
                    options: ["缺失值处理", "没有贡献的特征其 SHAP 值为零", "数据完整性检查", "删除特征后重新训练"],
                    answer: 1,
                    explanation: "SHAP 的缺失性性质（Missingness）指如果某个特征对预测没有贡献（例如被移除），则其 SHAP 值为零。",
                    difficulty: 3
                },
                {
                    id: "iml-mid-c-6",
                    question: "部分依赖图（Partial Dependence Plot, PDP）展示的是什么？",
                    options: ["单个样本的预测值", "一个或两个特征对模型预测的边际效应", "所有特征的交互作用", "训练过程的收敛曲线"],
                    answer: 1,
                    explanation: "PDP 展示一个或两个特征对模型平均预测值的边际效应，通过在其他特征上取平均来隔离目标特征的影响。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-c-7",
                    question: "个体条件期望图（ICE Plot）相比 PDP 的优势是？",
                    options: ["计算更简单", "可以展示每个个体的预测随特征变化的趋势，揭示异质性", "只能用于线性模型", "更易于理解"],
                    answer: 1,
                    explanation: "ICE Plot 为每个样本分别展示预测随特征值变化的曲线，而 PDP 只展示平均效应。ICE Plot 能揭示 PDP 可能掩盖的异质性效应。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-c-8",
                    question: "在 LIME 中，扰动样本的权重通常如何确定？",
                    options: ["随机赋值", "基于与原始样本的距离（越近权重越大）", "基于样本的标签", "所有样本等权重"],
                    answer: 1,
                    explanation: "LIME 使用核函数（如指数核）根据扰动样本与原始样本的距离来赋权重，距离越近权重越大，确保局部解释的准确性。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-c-9",
                    question: "锚点解释（Anchors）方法的核心思想是？",
                    options: ["找到覆盖所有样本的规则", "找到"如果满足条件 A，则预测为 Y"的充分条件", "可视化决策边界", "计算全局特征重要性"],
                    answer: 1,
                    explanation: "Anchors 方法通过找到一组特征条件（锚点），使得满足这些条件时模型总是给出特定预测，提供高精度的规则型解释。",
                    difficulty: 3
                },
                {
                    id: "iml-mid-c-10",
                    question: "LIME 对表格数据和图像数据的解释方式有什么不同？",
                    options: ["完全相同", "表格数据扰动特征值，图像数据扰动超像素区域", "只适用于表格数据", "图像数据不需要扰动"],
                    answer: 1,
                    explanation: "LIME 对表格数据通过随机扰动特征值生成邻域样本，对图像数据则通过扰动超像素区域（将某些区域设为灰色或随机）来生成邻域。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "iml-mid-f-1",
                    question: "SHAP 值满足的三个核心性质是效率性、____性和对称性。",
                    answer: "缺失",
                    explanation: "SHAP 的三个核心性质：效率性（Efficiency，所有 SHAP 值之和等于预测值与基准值之差）、缺失性（Missingness，无贡献特征 SHAP=0）、对称性（Symmetry）。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-f-2",
                    question: "LIME 中的"可解释性表示"将原始特征映射到____空间。",
                    answer: "可解释",
                    explanation: "LIME 的第一步是定义可解释性表示，将原始复杂特征空间映射到人类可理解的特征空间（如二值化的存在/不存在特征）。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-f-3",
                    question: "特征重要性方法分为"模型特定"和"模型____"两类。",
                    answer: "无关",
                    explanation: "特征重要性方法分为模型特定方法（如树模型的基尼重要性）和模型无关方法（如排列重要性），后者可应用于任何模型。",
                    difficulty: 1
                },
                {
                    id: "iml-mid-f-4",
                    question: "SHAP 的计算复杂度是指数级的，KernelSHAP 通过____采样来近似计算。",
                    answer: "蒙特卡洛",
                    explanation: "KernelSHAP 使用蒙特卡洛采样（加权线性回归）来近似计算沙普利值，将指数级的精确计算转化为可控的近似计算。",
                    difficulty: 3
                },
                {
                    id: "iml-mid-f-5",
                    question: "部分依赖图展示的是特征对模型____预测值的边际效应。",
                    answer: "平均",
                    explanation: "PDP 通过在所有其他特征上取平均，展示目标特征对模型平均预测值的边际效应。",
                    difficulty: 1
                },
                {
                    id: "iml-mid-f-6",
                    question: "在 LIME 中，局部近似的保真度通过____损失来衡量。",
                    answer: "加权",
                    explanation: "LIME 通过最小化加权平方损失来拟合局部可解释模型，权重由核函数根据距离确定，保真度指局部模型对复杂模型预测的近似程度。",
                    difficulty: 3
                },
                {
                    id: "iml-mid-f-7",
                    question: "反事实解释（Counterfactual Explanation）回答的是"如果____改变了，预测会怎样变化？"的问题。",
                    answer: "输入",
                    explanation: "反事实解释通过修改输入特征值来找到最可能改变模型预测结果的最小变化，帮助用户理解决策边界。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-f-8",
                    question: "机器学习可解释性可以分为"内在可解释"和"____可解释"两种途径。",
                    answer: "事后",
                    explanation: "内在可解释（Intrinsic）指使用本身就可解释的模型（如线性回归、决策树）；事后可解释（Post-hoc）指对已训练好的黑盒模型进行解释。",
                    difficulty: 1
                },
                {
                    id: "iml-mid-f-9",
                    question: "SHAP 值的"全局解释"可以通过对所有样本的 SHAP 值取____来得到。",
                    answer: "绝对值均值",
                    explanation: "SHAP 的全局解释通过计算每个特征在所有样本上 SHAP 绝对值的平均来衡量该特征对模型预测的平均影响程度。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-f-10",
                    question: "依赖图（Dependency Plot）用于展示特征与 SHAP 值之间的____关系。",
                    answer: "非线性",
                    explanation: "SHAP 依赖图展示某个特征值与其 SHAP 值之间的关系，可以揭示特征效应的非线性特征和交互效应。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "iml-mid-code-1",
                    question: "补全以下代码，使用 SHAP 库计算特征的全局重要性。",
                    code: "import shap\nimport numpy as np\n\ndef compute_global_feature_importance(model, X, feature_names):\n    \"\"\"使用 SHAP 计算全局特征重要性\n    \n    Args:\n        model: 训练好的模型\n        X: 解释数据集\n        feature_names: 特征名称列表\n    Returns:\n        dict: 特征名 -> 平均绝对 SHAP 值\n    \"\"\"\n    explainer = shap.Explainer(model, X)\n    shap_values = explainer(X)\n    \n    # 计算每个特征的平均绝对 SHAP 值\n    global_importance = {}\n    for i, name in enumerate(feature_names):\n        global_importance[name] = ____\n    \n    # 按重要性降序排列\n    sorted_importance = dict(\n        sorted(global_importance.items(), key=lambda x: x[1], reverse=True)\n    )\n    return sorted_importance",
                    answer: "float(np.abs(shap_values.values[:, i]).mean())",
                    explanation: "通过计算每个特征在所有样本上 SHAP 绝对值的均值，得到该特征的全局重要性排名。",
                    difficulty: 2
                },
                {
                    id: "iml-mid-code-2",
                    question: "补全以下代码，实现排列特征重要性（Permutation Feature Importance）的计算。",
                    code: "import numpy as np\n\ndef permutation_importance(model, X, y, n_repeats=10):\n    \"\"\"计算排列特征重要性\n    \n    Args:\n        model: 训练好的模型（有 predict 方法）\n        X: 特征矩阵 (n_samples, n_features)\n        y: 真实标签\n        n_repeats: 重复次数\n    Returns:\n        dict: 特征索引 -> 重要性分数列表\n    \"\"\"\n    baseline_score = model.score(X, y)\n    importances = {i: [] for i in range(X.shape[1])}\n    \n    for col_idx in range(X.shape[1]):\n        for _ in range(n_repeats):\n            X_permuted = X.copy()\n            # 打乱第 col_idx 列\n            np.random.shuffle(X_permuted[:, col_idx])\n            \n            # 计算打乱后的性能下降\n            permuted_score = model.score(X_permuted, y)\n            importance = ____\n            importances[col_idx].append(importance)\n    \n    return importances",
                    answer: "baseline_score - permuted_score",
                    explanation: "排列重要性 = 基线性能 - 打乱特征后的性能。如果某个特征很重要，打乱它的值应该导致性能明显下降。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "iml-final-c-1",
                    question: "SHAP 的 TreeSHAP 算法相比 KernelSHAP 的优势是？",
                    options: ["更通用，适用于任何模型", "精确计算且时间复杂度为多项式级别", "不需要模型访问", "结果更直观"],
                    answer: 1,
                    explanation: "TreeSHAP 是专门为树模型设计的精确高效算法，时间复杂度为 O(TLD²)，能精确计算 SHAP 值，而 KernelSHAP 是近似方法且计算成本更高。",
                    difficulty: 3
                },
                {
                    id: "iml-final-c-2",
                    question: "关于 SHAP 的"交互效应"（SHAP Interaction Values），以下哪个描述是正确的？",
                    options: ["只能发现线性交互", "可以分解特征的主效应和两两交互效应", "与 SHAP 值完全相同", "只适用于图像数据"],
                    answer: 1,
                    explanation: "SHAP 交互值将每个特征对预测的贡献分解为主效应（self-interaction）和与其他特征的交互效应，揭示特征间的协同和拮抗关系。",
                    difficulty: 3
                },
                {
                    id: "iml-final-c-3",
                    question: "LIME 的主要局限性之一是？",
                    options: ["只能处理表格数据", "解释可能不稳定，对邻域采样敏感", "只能用于分类任务", "无法处理缺失值"],
                    answer: 1,
                    explanation: "LIME 的一个重要局限是解释的不稳定性：由于基于随机采样构建邻域，相同输入多次运行可能产生不同的解释。",
                    difficulty: 2
                },
                {
                    id: "iml-final-c-4",
                    question: "在可解释性研究中，"保真度"（Fidelity）和"可理解性"（Understandability）之间的关系是？",
                    options: ["总是正相关", "往往存在权衡——更精确的解释可能更难理解", "总是负相关", "没有关系"],
                    answer: 1,
                    explanation: "保真度（解释对模型行为的准确反映程度）和可理解性（人类能否轻松理解解释）之间常存在权衡，高度精确的解释可能过于复杂。",
                    difficulty: 2
                },
                {
                    id: "iml-final-c-5",
                    question: "对于图像分类模型，Grad-CAM 方法通过什么生成热力图？",
                    options: ["随机噪声", "梯度对最后一个卷积层激活的加权组合", "注意力权重", "像素值大小"],
                    answer: 1,
                    explanation: "Grad-CAM 使用目标类别对最后一个卷积层特征图的梯度进行全局平均池化，得到权重后加权求和特征图，生成突出重要区域的热力图。",
                    difficulty: 2
                },
                {
                    id: "iml-final-c-6",
                    question: "在使用 SHAP 进行解释时，"背景数据集"（Background Dataset）的选择为什么很重要？",
                    options: ["不影响结果", "背景数据集定义了特征"缺席"时的基准值", "只影响计算速度", "只用于可视化"],
                    answer: 1,
                    explanation: "背景数据集定义了 SHAP 计算中特征"不存在"时的基准值（reference value），其选择直接影响 SHAP 值的计算和解释结果。",
                    difficulty: 2
                },
                {
                    id: "iml-final-c-7",
                    question: "关于"忠实度度量"（Faithfulness Metric），以下哪个描述最准确？",
                    options: ["衡量解释的美观程度", "衡量移除重要特征后模型预测的变化是否符合解释", "衡量模型训练速度", "衡量数据质量"],
                    answer: 1,
                    explanation: "忠实度衡量移除解释中被认为重要的特征后，模型预测是否如解释所预测的那样发生变化。如果解释说某特征重要，移除后预测应改变。",
                    difficulty: 2
                },
                {
                    id: "iml-final-c-8",
                    question: "SHAP 的"力图"（Force Plot）可视化展示了什么信息？",
                    options: ["模型架构", "单个预测中各特征的推动和拉拽效应", "训练曲线", "数据分布"],
                    answer: 1,
                    explanation: "SHAP Force Plot 将每个特征的 SHAP 值可视化为推动或拉拽预测值的力，红色表示推向更高预测值，蓝色表示推向更低预测值。",
                    difficulty: 1
                },
                {
                    id: "iml-final-c-9",
                    question: "当特征之间存在强相关性时，SHAP 值的解释会受到什么影响？",
                    options: ["没有影响", "SHAP 值可能在相关特征之间分配不明确", "SHAP 值总是更准确", "SHAP 会自动忽略相关特征"],
                    answer: 1,
                    explanation: "当特征高度相关时，它们对预测的贡献可能重叠，SHAP 值在相关特征间的分配可能不够明确，需要额外考虑特征交互效应。",
                    difficulty: 3
                },
                {
                    id: "iml-final-c-10",
                    question: "在模型可解释性实践中，"全局解释"和"局部解释"的关系是？",
                    options: ["总是相同的", "全局解释描述整体行为，局部解释描述单个预测——可能不同", "只有全局解释有用", "只有局部解释有用"],
                    answer: 1,
                    explanation: "全局解释（如全局特征重要性）描述模型的整体行为模式，局部解释（如 SHAP 值、LIME）描述单个预测的推理过程。两者互补但信息不同。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "iml-final-f-1",
                    question: "SHAP 值的"效率性"（Efficiency）性质要求所有特征的 SHAP 值之和等于预测值与____值之差。",
                    answer: "基准",
                    explanation: "SHAP 的效率性性质：所有特征的 SHAP 值之和 = 模型预测值 - 基准预测值（即没有任何特征时的预测）。",
                    difficulty: 2
                },
                {
                    id: "iml-final-f-2",
                    question: "LIME 对文本数据使用____方法来生成扰动样本。",
                    answer: "单词移除",
                    explanation: "LIME 对文本数据通过随机移除或保留单词来生成扰动样本，将文本转化为二值化的存在/不存在特征向量。",
                    difficulty: 2
                },
                {
                    id: "iml-final-f-3",
                    question: "SHAP 的 DeepSHAP 方法基于 ______ 的传播规则来估计深度模型的 SHAP 值。",
                    answer: "DeepLIFT",
                    explanation: "DeepSHAP 结合了 DeepLIFT 的反向传播规则和 Shapley 值的理论框架，高效地计算深度神经网络的 SHAP 值。",
                    difficulty: 3
                },
                {
                    id: "iml-final-f-4",
                    question: "在可解释性评估中，"稳定性"（Stability）指的是相似输入应产生____的解释。",
                    answer: "相似",
                    explanation: "稳定性是可解释性的重要评价标准：如果两个非常相似的输入产生了截然不同的解释，说明解释方法不够稳定可靠。",
                    difficulty: 2
                },
                {
                    id: "iml-final-f-5",
                    question: "SHAP 依赖图中，颜色编码通常表示____特征的值。",
                    answer: "交互",
                    explanation: "SHAP 依赖图中点的颜色编码表示与目标特征有交互效应的另一个特征的值，帮助发现特征间的交互模式。",
                    difficulty: 3
                },
                {
                    id: "iml-final-f-6",
                    question: "部分依赖图（PDP）的局限性在于它假设特征之间相互____。",
                    answer: "独立",
                    explanation: "PDP 假设目标特征与其他特征独立（或在计算时将它们视为独立），当特征强相关时，PDP 可能展示不存在的效应。",
                    difficulty: 2
                },
                {
                    id: "iml-final-f-7",
                    question: "在 SHAP 中，基准值通常取训练数据中所有样本的____预测值的平均。",
                    answer: "模型",
                    explanation: "SHAP 的基准值（base value）通常取模型在背景数据集上所有预测值的平均，代表"没有特定输入信息"时的预期预测。",
                    difficulty: 1
                },
                {
                    id: "iml-final-f-8",
                    question: "LIME 的核宽度参数决定了局部解释的____范围。",
                    answer: "邻域",
                    explanation: "LIME 的核宽度（kernel width）参数控制局部邻域的大小：宽度越大，考虑的邻域越广，解释越接近全局；宽度越小，解释越局部化。",
                    difficulty: 2
                },
                {
                    id: "iml-final-f-9",
                    question: "反事实解释中的"可操作性"（Actionability）约束指只能修改允许改变的____。",
                    answer: "特征",
                    explanation: "可操作性约束确保反事实解释只建议修改用户实际可以改变的特征（如收入、行为），而不建议修改不可变的特征（如年龄、种族）。",
                    difficulty: 2
                },
                {
                    id: "iml-final-f-10",
                    question: "全局代理模型（Global Surrogate）通过训练一个____模型来近似黑盒模型的全局行为。",
                    answer: "可解释",
                    explanation: "全局代理模型通过用可解释模型（如线性模型、决策树）在整个训练集上近似黑盒模型的预测，得到对模型全局行为的理解。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "iml-final-code-1",
                    question: "补全以下代码，实现 LIME 解释器的核心逻辑。",
                    code: "import numpy as np\nfrom sklearn.linear_model import Ridge\n\nclass SimpleLIME:\n    def __init__(self, model, n_samples=1000):\n        self.model = model\n        self.n_samples = n_samples\n    \n    def explain(self, instance, feature_names):\n        \"\"\"对单个实例生成局部解释\n        \n        Args:\n            instance: 待解释的输入实例\n            feature_names: 特征名称列表\n        Returns:\n            dict: 特征名 -> 局部线性系数\n        \"\"\"\n        n_features = len(instance)\n        \n        # 生成扰动样本\n        data = np.random.randint(0, 2, (self.n_samples, n_features))\n        \n        # 获取扰动样本的预测\n        predictions = self.model.predict(data)\n        \n        # 计算距离权重（越近权重越大）\n        distances = np.sum(data != instance, axis=1).astype(float)\n        weights = np.exp(-distances ** 2 / 2)\n        \n        # 用加权线性回归拟合局部解释\n        lime_model = Ridge(alpha=1.0)\n        lime_model.fit(data, predictions, sample_weight=weights)\n        \n        # 返回特征重要性\n        explanation = {}\n        for i, name in enumerate(feature_names):\n            explanation[name] = ____\n        return explanation",
                    answer: "float(lime_model.coef_[i])",
                    explanation: "LIME 通过加权线性回归拟合局部行为，回归系数即为特征的局部重要性（SHAP-like 贡献值），绝对值越大说明该特征在局部越重要。",
                    difficulty: 2
                },
                {
                    id: "iml-final-code-2",
                    question: "补全以下代码，实现 SHAP 依赖图的数据准备函数。",
                    code: "import numpy as np\nimport shap\n\ndef prepare_dependency_data(model, X, feature_idx, interaction_idx=None):\n    \"\"\"准备 SHAP 依赖图所需的数据\n    \n    Args:\n        model: 训练好的模型\n        X: 数据集\n        feature_idx: 要分析的特征索引\n        interaction_idx: 可选的交互特征索引\n    Returns:\n        dict: 包含特征值、SHAP 值和交互值的数据\n    \"\"\"\n    explainer = shap.Explainer(model, X)\n    shap_values = explainer(X)\n    \n    feature_values = X[:, feature_idx]\n    shap_vals = shap_values.values[:, feature_idx]\n    \n    result = {\n        'feature_values': feature_values,\n        'shap_values': shap_vals,\n        'feature_idx': feature_idx\n    }\n    \n    if interaction_idx is not None:\n        # 获取交互值\n        interaction_values = shap_values.values  \n        result['interaction_values'] = ____\n        result['interaction_idx'] = interaction_idx\n    \n    return result",
                    answer: "X[:, interaction_idx]",
                    explanation: "当分析交互效应时，返回交互特征的值用于颜色编码，帮助在依赖图中可视化两个特征之间的交互模式。",
                    difficulty: 3
                }
            ]
        }
    },

    /* ================================================================
     * 5. How Diffusion Models Work (DeepLearning.AI)
     *    Topics: DDPM, forward/reverse diffusion, sampling,
     *            noise scheduling, image generation, acceleration
     * ================================================================ */
    "How Diffusion Models Work": {
        courseId: "how-diffusion-models-work",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "diffusion-mid-c-1",
                    question: "DDPM 的前向扩散过程（Forward Diffusion）的作用是什么？",
                    options: ["逐步去除噪声生成图像", "逐步向数据添加高斯噪声直到变成纯噪声", "训练判别器区分真假图像", "学习数据的潜在表示"],
                    answer: 1,
                    explanation: "前向扩散过程通过在每个时间步向数据添加少量高斯噪声，经过 T 步后将原始数据完全破坏为各向同性的高斯噪声。",
                    difficulty: 1
                },
                {
                    id: "diffusion-mid-c-2",
                    question: "DDPM 训练时，神经网络（U-Net）需要预测什么？",
                    options: ["原始图像", "每个时间步添加的噪声", "最终生成的图像", "噪声调度参数"],
                    answer: 1,
                    explanation: "DDPM 训练时，U-Net 接收带噪图像 x_t 和时间步 t 作为输入，预测在该时间步添加的噪声 epsilon，损失函数为预测噪声与实际噪声的 MSE。",
                    difficulty: 2
                },
                {
                    id: "diffusion-mid-c-3",
                    question: "在 DDPM 中，alpha_bar_t 的数学含义是什么？",
                    options: ["时间步 t 的噪声方差", "从时间步 0 到 t 的累积噪声保留系数", "学习率参数", "反向扩散的步数"],
                    answer: 1,
                    explanation: "alpha_bar_t = prod(alpha_1 * alpha_2 * ... * alpha_t)，表示从原始数据 x0 到 x_t 过程中保留原始信号的比例，控制了每个时间步的信噪比。",
                    difficulty: 3
                },
                {
                    id: "diffusion-mid-c-4",
                    question: "DDPM 的反向扩散过程（Reverse Diffusion）本质上是在做什么？",
                    options: ["添加更多噪声", "学习逐步去噪的马尔可夫链", "计算数据分布的 KL 散度", "压缩图像数据"],
                    answer: 1,
                    explanation: "反向扩散过程学习一个去噪马尔可夫链 p(x_{t-1}|x_t)，从纯噪声 x_T 出发，逐步去除噪声，最终生成符合数据分布的样本。",
                    difficulty: 2
                },
                {
                    id: "diffusion-mid-c-5",
                    question: "为什么扩散模型不会出现 GAN 中的模式坍塌（Mode Collapse）问题？",
                    options: ["扩散模型参数更多", "扩散模型通过最大似然训练，覆盖完整的数据分布", "扩散模型不需要对抗训练", "扩散模型的训练更稳定"],
                    answer: 1,
                    explanation: "扩散模型通过去噪目标函数（变分下界）训练，本质上是对数据分布的对数似然进行优化，因此倾向于覆盖完整的数据分布模式。",
                    difficulty: 2
                },
                {
                    id: "diffusion-mid-c-6",
                    question: "在 DDPM 中，预测噪声 epsilon 和直接预测原始数据 x0 之间有什么关系？",
                    options: ["完全没有关系", "可以通过线性变换相互转换", "只有在特定时间步才等价", "需要不同的模型架构"],
                    answer: 1,
                    explanation: "给定 x_t = sqrt(alpha_bar_t) * x0 + sqrt(1 - alpha_bar_t) * epsilon，知道 epsilon 可以计算 x0，反之亦然。两种参数化在数学上等价。",
                    difficulty: 3
                },
                {
                    id: "diffusion-mid-c-7",
                    question: "DDPM 的采样过程通常需要多少步才能生成一张图像？",
                    options: ["1 步", "几百到几千步", "仅需 2 步", "不需要任何迭代"],
                    answer: 1,
                    explanation: "标准 DDPM 采样通常需要 T=1000 步逐步去噪，每步都调用一次 U-Net，这使得采样速度较慢，是扩散模型的主要瓶颈之一。",
                    difficulty: 1
                },
                {
                    id: "diffusion-mid-c-8",
                    question: "DDIM（Denoising Diffusion Implicit Models）相比 DDPM 的主要优势是什么？",
                    options: ["训练更简单", "可以使用更少的采样步数，同时保持生成质量", "不需要神经网络", "只适用于低分辨率图像"],
                    answer: 1,
                    explanation: "DDIM 通过引入非马尔可夫的确定性采样过程，允许在采样时跳过中间步骤（如从 1000 步减少到 50 步），大幅加速采样过程。",
                    difficulty: 2
                },
                {
                    id: "diffusion-mid-c-9",
                    question: "噪声调度（Noise Schedule）在扩散模型中的作用是什么？",
                    options: ["决定模型的网络结构", "控制每个时间步添加多少噪声，影响训练和生成质量", "决定数据集的划分方式", "控制损失函数的权重"],
                    answer: 1,
                    explanation: "噪声调度定义了每个时间步的 beta_t 值，控制前向过程添加噪声的速率。好的调度对训练稳定性和生成质量至关重要。",
                    difficulty: 2
                },
                {
                    id: "diffusion-mid-c-10",
                    question: "U-Net 在扩散模型中的架构特点是什么？",
                    options: ["纯编码器结构", "编码器-解码器结构，带有跳跃连接和时间步嵌入", "纯 Transformer 结构", "简单的全连接网络"],
                    answer: 1,
                    explanation: "U-Net 通过编码器下采样提取特征，解码器上采样恢复空间分辨率，跳跃连接保留细节信息，时间步嵌入告知模型当前的噪声水平。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "diffusion-mid-f-1",
                    question: "扩散模型通过逐步添加____来破坏数据分布，然后学习反向的去噪过程。",
                    answer: "噪声",
                    explanation: "扩散模型的核心思想是前向过程逐步添加高斯噪声破坏数据，反向过程学习逐步去除噪声恢复数据。",
                    difficulty: 1
                },
                {
                    id: "diffusion-mid-f-2",
                    question: "DDPM 的全称是____扩散概率模型。",
                    answer: "去噪",
                    explanation: "DDPM（Denoising Diffusion Probabilistic Models）是一种基于去噪的扩散概率模型，通过预测和去除噪声来生成数据。",
                    difficulty: 1
                },
                {
                    id: "diffusion-mid-f-3",
                    question: "在扩散模型的训练中，损失函数通常简化为预测____与真实噪声之间的均方误差。",
                    answer: "噪声",
                    explanation: "DDPM 的训练目标是让模型预测每个时间步添加的噪声 epsilon_theta(x_t, t)，损失函数简化为 E[||epsilon - epsilon_theta(x_t, t)||^2]。",
                    difficulty: 2
                },
                {
                    id: "diffusion-mid-f-4",
                    question: "DDPM 的训练不需要任何形式的____训练，因此避免了模式坍塌问题。",
                    answer: "对抗",
                    explanation: "扩散模型通过去噪得分匹配训练，不需要像 GAN 那样的对抗训练（生成器与判别器博弈），因此不存在模式坍塌问题。",
                    difficulty: 2
                },
                {
                    id: "diffusion-mid-f-5",
                    question: "DDIM 通过引入非____的采样过程来加速扩散模型的生成。",
                    answer: "马尔可夫",
                    explanation: "DDIM 放弃了 DDPM 的马尔可夫假设，构造了一个确定性的、非马尔可夫的采样过程，使得跳步采样成为可能。",
                    difficulty: 3
                },
                {
                    id: "diffusion-mid-f-6",
                    question: "在扩散模型中，beta_t 参数控制每个时间步添加噪声的____。",
                    answer: "方差",
                    explanation: "beta_t 是方差调度参数，控制每个时间步添加高斯噪声的方差大小，决定了信号衰减和噪声增加的速率。",
                    difficulty: 2
                },
                {
                    id: "diffusion-mid-f-7",
                    question: "U-Net 中的____连接允许解码器直接访问编码器中对应层的特征。",
                    answer: "跳跃",
                    explanation: "跳跃连接（Skip Connection）将编码器各层的特征直接传递到解码器对应层，帮助恢复空间细节信息，对图像生成质量至关重要。",
                    difficulty: 1
                },
                {
                    id: "diffusion-mid-f-8",
                    question: "扩散模型的采样过程从纯____分布开始，逐步去除噪声生成图像。",
                    answer: "高斯",
                    explanation: "采样过程从 T 步后的纯高斯噪声 x_T ~ N(0, I) 开始，通过反向去噪链逐步恢复为清晰图像。",
                    difficulty: 1
                },
                {
                    id: "diffusion-mid-f-9",
                    question: "在 DDPM 中，时间步嵌入（Time Embedding）帮助模型知道当前处于哪个____阶段。",
                    answer: "去噪",
                    explanation: "时间步嵌入通过正弦位置编码将时间步信息注入 U-Net，让模型知道当前输入处于哪个去噪阶段，因为不同噪声水平需要不同的去噪策略。",
                    difficulty: 2
                },
                {
                    id: "diffusion-mid-f-10",
                    question: "扩散模型的训练目标是最大化数据的变分____下界（ELBO）。",
                    answer: "对数似然",
                    explanation: "扩散模型的训练等价于最大化数据对数似然的变分下界（ELBO），而去噪目标函数是 ELBO 的一个简化形式。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "diffusion-mid-code-1",
                    question: "补全以下扩散模型的前向扩散过程代码",
                    code: "import torch\n\ndef forward_diffusion(x0, t, beta_schedule):\n    \"\"\"前向扩散过程：在时间步 t 向原始数据添加噪声\n    \n    Args:\n        x0: 原始干净图像\n        t: 时间步\n        beta_schedule: beta 参数序列\n    Returns:\n        x_t: 加噪后的图像\n        noise: 添加的噪声\n    \"\"\"\n    alpha = 1 - beta_schedule\n    alpha_bar = torch.cumprod(alpha, dim=0)\n    \n    # 采样随机噪声\n    noise = torch.randn_like(x0)\n    \n    # 根据重参数化技巧计算 x_t\n    x_t = ____\n    return x_t, noise",
                    answer: "torch.sqrt(alpha_bar[t]) * x0 + torch.sqrt(1 - alpha_bar[t]) * noise",
                    explanation: "DDPM 的前向过程利用重参数化技巧：x_t = sqrt(alpha_bar_t) * x0 + sqrt(1 - alpha_bar_t) * epsilon，允许一步从 x0 直接计算任意时间步的 x_t。",
                    difficulty: 3
                },
                {
                    id: "diffusion-mid-code-2",
                    question: "补全以下 DDPM 反向采样过程的单步去噪代码",
                    code: "import torch\n\ndef denoise_step(model, x_t, t, beta_schedule):\n    \"\"\"DDPM 反向采样：从 x_t 去噪得到 x_{t-1}\n    \n    Args:\n        model: 训练好的去噪 U-Net\n        x_t: 当前带噪图像\n        t: 当前时间步\n        beta_schedule: beta 参数序列\n    Returns:\n        x_{t-1}: 去噪后的图像\n    \"\"\"\n    alpha = 1 - beta_schedule\n    alpha_bar = torch.cumprod(alpha, dim=0)\n    \n    # 模型预测噪声\n    predicted_noise = model(x_t, t)\n    \n    # 计算去噪后的均值\n    mean = (1 / torch.sqrt(alpha[t])) * (\n        x_t - (1 - alpha[t]) / torch.sqrt(1 - alpha_bar[t]) * predicted_noise\n    )\n    \n    # 只在非最后一步添加随机噪声\n    if t > 0:\n        noise = torch.randn_like(x_t)\n        x_prev = mean + torch.sqrt(beta_schedule[t]) * ____\n    else:\n        x_prev = mean\n    \n    return x_prev",
                    answer: "noise",
                    explanation: "在反向采样中，每个步骤先计算去噪均值，然后在非最后一步添加适量的随机噪声以保持采样的随机性，噪声方差由 beta_t 控制。",
                    difficulty: 3
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "diffusion-final-c-1",
                    question: "Classifier-Free Guidance（CFG）的核心思想是什么？",
                    options: ["使用多个分类器同时指导", "在条件和无条件预测之间插值以增强条件控制", "删除所有分类器", "使用更大的模型"],
                    answer: 1,
                    explanation: "CFG 通过同时训练有条件和无条件模型，采样时将无条件预测方向推向条件预测方向，用 guidance_scale 控制条件控制的强度。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-c-2",
                    question: "Latent Diffusion Model（LDM）为什么能在潜在空间中运行扩散过程？",
                    options: ["因为潜在空间更小", "通过 VAE 编码器将图像压缩到低维潜在空间，减少计算量", "因为图像在潜在空间中不需要去噪", "因为潜在空间没有噪声"],
                    answer: 1,
                    explanation: "LDM 使用预训练的 VAE 将图像编码到低维潜在空间，在该空间中运行扩散过程，大幅减少了计算量，同时保留了图像的关键语义信息。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-c-3",
                    question: "DDIM 的采样过程为什么是确定性的？",
                    options: ["使用了更大的模型", "采样时不添加随机噪声，直接确定性地映射到 x_{t-1}", "使用了 GPU 加速", "使用了更小的步长"],
                    answer: 1,
                    explanation: "DDIM 采样中不添加额外的随机噪声，每一步的去噪是确定性的。相同的初始噪声 x_T 总是生成相同的最终图像，这使得编辑和插值成为可能。",
                    difficulty: 3
                },
                {
                    id: "diffusion-final-c-4",
                    question: "在扩散模型中，与 Score Matching 相关的概念是什么？",
                    options: ["判别器的分数", "数据分布对数概率的梯度（分数函数）", "模型的准确率", "训练的损失值"],
                    answer: 1,
                    explanation: "分数函数是数据分布对数概率的梯度 nabla_x log p(x)。扩散模型可以被视为学习这个分数函数，去噪分数匹配是训练分数模型的核心方法。",
                    difficulty: 3
                },
                {
                    id: "diffusion-final-c-5",
                    question: "Guidance Scale 参数设置过高会导致什么问题？",
                    options: ["生成质量太差", "图像多样性降低、出现过饱和和伪影", "训练不稳定", "模型收敛变慢"],
                    answer: 1,
                    explanation: "过高的 guidance scale 虽然增强条件控制，但会导致图像多样性降低（多样性-保真度权衡）、颜色过饱和和生成伪影等问题。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-c-6",
                    question: "Stable Diffusion 中的 CLIP 文本编码器的作用是什么？",
                    options: ["编码图像为潜在向量", "将文本提示转换为条件向量来指导图像生成", "生成最终图像", "评估生成质量"],
                    answer: 1,
                    explanation: "CLIP 文本编码器将文本提示编码为条件嵌入向量，通过交叉注意力机制注入 U-Net 中，指导扩散过程生成与文本描述匹配的图像。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-c-7",
                    question: "关于扩散模型与 VAE 的关系，以下哪个说法是正确的？",
                    options: ["它们完全无关", "扩散模型可以看作是 VAE 的深度版本，具有多个"隐变量"时间步", "扩散模型是 VAE 的简化版", "VAE 总是优于扩散模型"],
                    answer: 1,
                    explanation: "扩散模型本质上是一个具有 T 个隐变量层的层次化 VAE，每个时间步对应一个隐变量，通过 ELBO 优化进行训练。",
                    difficulty: 3
                },
                {
                    id: "diffusion-final-c-8",
                    question: "Consistency Model 的核心创新是什么？",
                    options: ["使用更深的网络", "学习从任意噪声水平一步映射到最终生成结果", "使用更大的数据集", "使用更复杂的噪声调度"],
                    answer: 1,
                    explanation: "Consistency Model 学习一条从任意噪声水平直接到最终结果的一致性映射，可以在 1-2 步内完成采样，大幅加速生成。",
                    difficulty: 3
                },
                {
                    id: "diffusion-final-c-9",
                    question: "在图像编辑应用中，Inpainting（图像修复）使用扩散模型的方式是？",
                    options: ["完全重新生成图像", "只在遮罩区域进行去噪，保持未遮罩区域不变", "对整个图像做轻微去噪", "只使用文本条件"],
                    answer: 1,
                    explanation: "Inpainting 在每步去噪时，将已知（未遮罩）区域的像素值替换回原始图像值，只让模型在遮罩区域进行去噪生成，实现局部修复。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-c-10",
                    question: "Progressive Distillation 在扩散模型加速中的作用是什么？",
                    options: ["加深网络", "将多步采样过程蒸馏为更少步数的学生模型", "增大图像分辨率", "增加训练数据"],
                    answer: 1,
                    explanation: "Progressive Distillation 通过将训练好的多步扩散模型作为教师，训练学生模型用一半的步数完成相同质量的采样，反复迭代可实现 2-4 步采样。",
                    difficulty: 3
                }
            ],
            fill: [
                {
                    id: "diffusion-final-f-1",
                    question: "Classifier-Free Guidance 通过调节____scale 参数控制条件生成的强度。",
                    answer: "guidance",
                    explanation: "guidance scale 参数控制条件预测与无条件预测之间的插值幅度，值越大条件控制越强但多样性越低。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-f-2",
                    question: "Latent Diffusion Model 在____空间中运行扩散过程以减少计算开销。",
                    answer: "潜在",
                    explanation: "LDM 通过 VAE 编码器将图像压缩到低维潜在空间，在该空间中进行扩散和去噪，计算效率比像素空间高得多。",
                    difficulty: 1
                },
                {
                    id: "diffusion-final-f-3",
                    question: "扩散模型的采样质量通常使用____距离或 FID 分数来评估。",
                    answer: "Fréchet",
                    explanation: "FID（Fréchet Inception Distance）是评估生成图像质量的核心指标，计算生成图像和真实图像在 Inception 网络特征空间中的 Fréchet 距离。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-f-4",
                    question: "在扩散模型中，____函数 nabla_x log p(x) 描述了数据分布的局部结构。",
                    answer: "分数",
                    explanation: "分数函数（Score Function）是数据分布对数概率的梯度，指向概率密度增加最快的方向，扩散模型可以视为学习该分数函数。",
                    difficulty: 3
                },
                {
                    id: "diffusion-final-f-5",
                    question: "DDIM 的采样过程将 DDPM 的随机采样转变为确定性____过程。",
                    answer: "ODE",
                    explanation: "DDIM 将采样过程形式化为一个常微分方程（ODE），沿着概率流 ODE 轨迹确定性地生成样本，使得步数压缩和编辑成为可能。",
                    difficulty: 3
                },
                {
                    id: "diffusion-final-f-6",
                    question: "文本引导的图像生成中，文本条件通过交叉____机制注入 U-Net。",
                    answer: "注意力",
                    explanation: "交叉注意力（Cross-Attention）机制将文本嵌入作为 Key 和 Value，图像特征作为 Query，实现文本语义对图像生成的条件控制。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-f-7",
                    question: "Stable Diffusion 由 VAE、U-Net 和____编码器三个核心组件构成。",
                    answer: "文本",
                    explanation: "Stable Diffusion 架构包含：VAE（图像编码/解码）、U-Net（去噪网络）、CLIP 文本编码器（将文本提示转为条件向量）。",
                    difficulty: 1
                },
                {
                    id: "diffusion-final-f-8",
                    question: "ControlNet 通过额外的条件控制信号来实现对扩散模型生成结果的____控制。",
                    answer: "结构",
                    explanation: "ControlNet 引入边缘图、深度图、姿态等结构条件信号，通过可训练的副本网络注入 U-Net，实现对生成图像空间结构的精确控制。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-f-9",
                    question: "扩散模型中的____采样通过在已知区域保持原值、未知区域去噪来实现图像修复。",
                    answer: "条件",
                    explanation: "条件采样在 inpainting 中通过在每步去噪后将已知区域恢复为原值，让模型只在遮罩区域进行生成，实现条件控制的局部修复。",
                    difficulty: 2
                },
                {
                    id: "diffusion-final-f-10",
                    question: "SDE（随机微分方程）框架将扩散模型的前向和反向过程统一为连续时间的____方程。",
                    answer: "微分",
                    explanation: "Song 等人提出的 SDE 框架将离散的扩散过程推广为连续时间的随机微分方程，前向 SDE 和反向 SDE 统一了各类扩散模型。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "diffusion-final-code-1",
                    question: "补全以下 Classifier-Free Guidance 的采样代码",
                    code: "import torch\n\ndef cfg_sample(model, x_t, t, text_emb, guidance_scale=7.5):\n    \"\"\"Classifier-Free Guidance 采样步骤\n    \n    Args:\n        model: 条件扩散模型\n        x_t: 当前带噪图像\n        t: 时间步\n        text_emb: 文本条件嵌入\n        guidance_scale: 引导强度\n    Returns:\n        predicted_noise: 引导后的噪声预测\n    \"\"\"\n    # 无条件预测\n    with torch.no_grad():\n        uncond_noise = model(x_t, t, encoder_hidden_states=None)\n    \n    # 条件预测\n    with torch.no_grad():\n        cond_noise = model(x_t, t, encoder_hidden_states=text_emb)\n    \n    # CFG 公式：噪声 = 无条件 + scale * (条件 - 无条件)\n    predicted_noise = ____\n    return predicted_noise",
                    answer: "uncond_noise + guidance_scale * (cond_noise - uncond_noise)",
                    explanation: "CFG 公式通过将条件预测与无条件预测的差值乘以 guidance_scale 并加到无条件预测上，增强条件信号同时保持生成质量。",
                    difficulty: 3
                },
                {
                    id: "diffusion-final-code-2",
                    question: "补全以下 DDIM 采样器的核心采样步骤代码",
                    code: "import torch\n\ndef ddim_step(model, x_t, t, t_prev, alpha_bar_t, alpha_bar_prev):\n    \"\"\"DDIM 单步采样（确定性）\n    \n    Args:\n        model: 去噪模型\n        x_t: 当前带噪图像\n        t: 当前时间步\n        t_prev: 目标时间步\n        alpha_bar_t: 当前时间步的累积系数\n        alpha_bar_prev: 目标时间步的累积系数\n    Returns:\n        x_prev: 去噪后的图像\n    \"\"\"\n    # 模型预测噪声\n    predicted_noise = model(x_t, t)\n    \n    # 预测 x0\n    x0_pred = (x_t - torch.sqrt(1 - alpha_bar_t) * predicted_noise) / torch.sqrt(alpha_bar_t)\n    x0_pred = torch.clamp(x0_pred, -1, 1)\n    \n    # 计算方向指向 x_t 的分量\n    direction = torch.sqrt(1 - alpha_bar_prev) * predicted_noise\n    \n    # DDIM 确定性更新（无随机噪声项）\n    x_prev = ____\n    return x_prev",
                    answer: "torch.sqrt(alpha_bar_prev) * x0_pred + direction",
                    explanation: "DDIM 采样将去噪过程分解为指向 x0 的方向和指向 x_t 的方向，通过 alpha_bar 插值实现确定性采样，不添加额外随机噪声。",
                    difficulty: 3
                }
            ]
        }
    },

    /* ================================================================
     * 6. CS236 Deep Generative Models (Stanford)
     *    Topics: VAE, GAN, Flow, diffusion, energy models,
     *            likelihood-based, implicit models
     * ================================================================ */
    "CS236 Deep Generative Models": {
        courseId: "cs236-deep-generative-models",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "cs236-mid-c-1",
                    question: "在深度生成模型中，显式密度模型和隐式密度模型的区别是什么？",
                    options: ["没有区别", "显式模型定义了 p(x) 的具体形式，隐式模型只定义了采样过程", "显式模型更大", "隐式模型需要更多数据"],
                    answer: 1,
                    explanation: "显式密度模型（如 VAE、Flow）明确定义数据分布 p(x) 的参数化形式，可以计算（近似）似然。隐式模型（如 GAN）只定义了从隐变量到数据的采样映射。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-c-2",
                    question: "VAE 中的 ELBO（证据下界）由哪两部分组成？",
                    options: ["精度和召回率", "重建误差和 KL 散度正则项", "损失和梯度", "均值和方差"],
                    answer: 1,
                    explanation: "ELBO = E[log p(x|z)] - KL(q(z|x) || p(z))，第一项是重建误差（解码器质量），第二项是 KL 散度（隐空间正则化，使后验接近先验）。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-c-3",
                    question: "GAN 的训练目标本质上是一个什么类型的博弈？",
                    options: ["合作博弈", "两人极小极大（minimax）博弈", "马尔可夫决策过程", "线性规划问题"],
                    answer: 1,
                    explanation: "GAN 训练目标是 min_G max_D V(D,G)，生成器最小化而判别器最大化目标函数，构成两人零和的极小极大博弈。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-c-4",
                    question: "归一化流（Normalizing Flow）的核心数学工具是什么？",
                    options: ["贝叶斯推断", "变量替换公式（Change of Variables）", "蒙特卡洛采样", "反向传播"],
                    answer: 1,
                    explanation: "Flow 通过一系列可逆变换将简单分布映射为复杂分布，利用变量替换公式精确计算每个变换后的对数密度。",
                    difficulty: 3
                },
                {
                    id: "cs236-mid-c-5",
                    question: "VAE 的后验分布 q(z|x) 通常选择什么分布形式？",
                    options: ["均匀分布", "对角高斯分布", "狄拉克分布", "伯努利分布"],
                    answer: 1,
                    explanation: "VAE 通常选择对角高斯分布 q(z|x) = N(mu(x), sigma^2(x) * I) 作为后验的近似形式，其中均值和方差由编码器网络输出。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-c-6",
                    question: "GAN 中的模式坍塌（Mode Collapse）指的是什么现象？",
                    options: ["训练不收敛", "生成器只能生成有限种类的样本，无法覆盖数据分布的所有模式", "判别器太强", "隐空间没有结构"],
                    answer: 1,
                    explanation: "模式坍塌是 GAN 训练中的核心问题：生成器发现某些输出能持续骗过判别器后，就反复生成这些少量模式，而忽略数据分布的其他部分。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-c-7",
                    question: "分数匹配（Score Matching）的目标是学习什么？",
                    options: ["数据分布的均值", "数据分布对数概率的梯度（分数函数）", "数据的分类边界", "数据的协方差矩阵"],
                    answer: 1,
                    explanation: "分数匹配直接估计分数函数 s(x) = nabla_x log p(x)，不需要计算归一化常数 Z，是训练能量模型和扩散模型的核心方法。",
                    difficulty: 3
                },
                {
                    id: "cs236-mid-c-8",
                    question: "在 GAN 的训练中，WGAN 使用什么距离度量替代了原始 GAN 的 JS 散度？",
                    options: ["欧几里得距离", "Wasserstein 距离（推土机距离）", "余弦相似度", "汉明距离"],
                    answer: 1,
                    explanation: "WGAN 用 Wasserstein-1 距离（推土机距离）替代 JS 散度，提供了更平滑的梯度信号，使训练更稳定，且损失值与生成质量相关。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-c-9",
                    question: "能量模型（Energy-Based Models, EBM）中，概率分布与能量函数的关系是什么？",
                    options: ["正比关系", "p(x) 与 exp(-E(x)) 成正比", "反比关系", "线性关系"],
                    answer: 1,
                    explanation: "EBM 定义 p(x) = exp(-E(x)) / Z，其中 E(x) 是能量函数，Z 是配分函数（归一化常数）。能量越低的状态概率越高。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-c-10",
                    question: "VAE 与自编码器（Autoencoder）的根本区别是什么？",
                    options: ["没有区别", "VAE 学习概率分布并可以采样生成新数据", "VAE 不需要解码器", "自编码器更复杂"],
                    answer: 1,
                    explanation: "VAE 编码器输出概率分布的参数（均值和方差），隐空间有结构化的概率先验，可以从中采样生成新数据。普通自编码器只学习确定性映射。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "cs236-mid-f-1",
                    question: "VAE 通过最大化____下界（ELBO）来近似最大化数据的对数似然。",
                    answer: "证据",
                    explanation: "ELBO（Evidence Lower Bound）是数据对数似然的下界，VAE 通过优化 ELBO 间接优化数据似然，因为直接计算似然需要积分所有可能的隐变量。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-f-2",
                    question: "GAN 的生成器 G 和判别器 D 之间是____博弈关系。",
                    answer: "对抗",
                    explanation: "GAN 中生成器试图生成逼真样本欺骗判别器，判别器试图区分真假样本，两者形成对抗（adversarial）博弈，共同进化。",
                    difficulty: 1
                },
                {
                    id: "cs236-mid-f-3",
                    question: "归一化流通过一系列____变换将简单分布映射为复杂分布。",
                    answer: "可逆",
                    explanation: "Normalizing Flow 要求每个变换都是可逆的（bijection），这样既可以从简单分布正向采样，又可以通过逆变换精确计算密度。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-f-4",
                    question: "GAN 的目标函数中的____项衡量了判别器区分真假样本的能力。",
                    answer: "交叉熵",
                    explanation: "原始 GAN 目标函数使用二元交叉熵损失，判别器最大化对真实样本输出高概率和对生成样本输出低概率的能力。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-f-5",
                    question: "扩散模型可以被统一到基于____的生成模型框架中。",
                    answer: "分数",
                    explanation: "Song 等人证明扩散模型和分数匹配之间的等价关系，扩散模型本质上是在学习数据分布的分数函数。",
                    difficulty: 3
                },
                {
                    id: "cs236-mid-f-6",
                    question: "VAE 中的 KL 散度项使编码器的后验分布接近____先验。",
                    answer: "标准高斯",
                    explanation: "KL 正则化项 KL(q(z|x) || N(0,I)) 鼓励编码器输出的后验分布接近标准正态先验，使隐空间具有连续性和可采样性。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-f-7",
                    question: "在 GAN 训练中，判别器的最优解是 D*(x) = p_data(x) / (p_data(x) + p_g(x))。",
                    answer: "p_data(x) / (p_data(x) + p_g(x))",
                    explanation: "当生成器固定时，最优判别器的输出应该是真实数据概率与真实和生成数据概率之和的比值。",
                    difficulty: 3
                },
                {
                    id: "cs236-mid-f-8",
                    question: "归一化流模型可以精确计算数据的对数____，这是相比 GAN 的优势。",
                    answer: "似然",
                    explanation: "Flow 模型通过变量替换公式可以精确计算 p(x)，因此可以直接优化数据的对数似然，而 GAN 和 VAE 只能间接优化。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-f-9",
                    question: "GAN 训练中的____归一化是稳定判别器训练的重要技术。",
                    answer: "谱",
                    explanation: "谱归一化（Spectral Normalization）通过约束判别器权重矩阵的谱范数来稳定训练，防止判别器过强导致生成器梯度消失。",
                    difficulty: 3
                },
                {
                    id: "cs236-mid-f-10",
                    question: "在隐变量模型中，____推断用于近似无法直接计算的后验分布 p(z|x)。",
                    answer: "变分",
                    explanation: "变分推断通过引入参数化的近似分布 q(z|x) 来近似真实的后验分布，将其转化为一个优化问题，是 VAE 的核心推断方法。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "cs236-mid-code-1",
                    question: "补全以下 VAE 的损失函数计算代码",
                    code: "import torch\nimport torch.nn.functional as F\n\ndef vae_loss(x_recon, x, mu, log_var):\n    \"\"\"计算 VAE 的 ELBO 损失（取负值用于最小化）\n    \n    Args:\n        x_recon: 重建输出\n        x: 原始输入\n        mu: 编码器输出的均值\n        log_var: 编码器输出的对数方差\n    Returns:\n        loss: 总损失\n    \"\"\"\n    # 重建损失（二元交叉熵或 MSE）\n    recon_loss = F.mse_loss(x_recon, x, reduction='sum')\n    \n    # KL 散度正则项：KL(N(mu, sigma^2) || N(0, I))\n    kl_loss = -0.5 * torch.sum(1 + log_var - mu.pow(2) - log_var.exp())\n    \n    # ELBO 损失 = 重建损失 + KL 损失\n    total_loss = ____\n    return total_loss",
                    answer: "recon_loss + kl_loss",
                    explanation: "VAE 的总损失 = 重建损失（衡量解码质量）+ KL 散度正则项（使隐空间接近标准正态分布）。优化 ELBO 的负值等价于最大化 ELBO。",
                    difficulty: 2
                },
                {
                    id: "cs236-mid-code-2",
                    question: "补全以下 GAN 判别器的训练步骤代码",
                    code: "import torch\nimport torch.nn as nn\n\ndef train_discriminator(discriminator, generator, real_data, criterion, d_optimizer, latent_dim):\n    \"\"\"训练 GAN 判别器一步\n    \n    Args:\n        discriminator: 判别器\n        generator: 生成器\n        real_data: 真实数据\n        criterion: 损失函数（如 BCELoss）\n        d_optimizer: 判别器优化器\n        latent_dim: 隐变量维度\n    Returns:\n        d_loss: 判别器损失\n    \"\"\"\n    batch_size = real_data.size(0)\n    real_labels = torch.ones(batch_size, 1)\n    fake_labels = torch.zeros(batch_size, 1)\n    \n    # --- 训练判别器：最大化 log(D(x)) + log(1 - D(G(z))) ---\n    \n    # 1. 用真实数据训练\n    outputs_real = discriminator(real_data)\n    d_loss_real = criterion(outputs_real, real_labels)\n    \n    # 2. 用生成的假数据训练\n    z = torch.randn(batch_size, latent_dim)\n    fake_data = generator(z).detach()  # detach 避免更新生成器\n    outputs_fake = discriminator(fake_data)\n    d_loss_fake = criterion(outputs_fake, ____)\n    \n    # 3. 总损失并更新\n    d_loss = d_loss_real + d_loss_fake\n    d_optimizer.zero_grad()\n    d_loss.backward()\n    d_optimizer.step()\n    \n    return d_loss",
                    answer: "fake_labels",
                    explanation: "判别器训练目标是对真实数据输出接近 1，对生成的假数据输出接近 0。fake_labels 是全零标签，与判别器对假数据的输出计算损失。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "cs236-final-c-1",
                    question: "WGAN-GP 中的梯度惩罚（Gradient Penalty）项惩罚的是什么？",
                    options: ["生成器的梯度", "判别器对真实数据和假数据之间插值点的梯度范数", "损失函数的二阶导数", "学习率的变化"],
                    answer: 1,
                    explanation: "WGAN-GP 惩罚判别器在真实样本和生成样本之间随机插值点处的梯度范数，使其接近 1，从而强制满足 Lipschitz 约束。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-c-2",
                    question: "在 VAE 的重参数化技巧（Reparameterization Trick）中，z 是如何从分布中采样的？",
                    options: ["直接从 N(mu, sigma^2) 采样", "z = mu + sigma * epsilon，其中 epsilon ~ N(0,1)", "通过拒绝采样", "通过 MCMC 方法"],
                    answer: 1,
                    explanation: "重参数化技巧将随机采样分离出来：z = mu + sigma * epsilon，epsilon 是标准正态随机变量，使梯度可以流过 mu 和 sigma 参数。",
                    difficulty: 2
                },
                {
                    id: "cs236-final-c-3",
                    question: "扩散模型中，SDE 框架下的反向过程对应的方程类型是？",
                    options: ["常微分方程（ODE）", "随机微分方程（SDE）", "偏微分方程（PDE）", "差分方程"],
                    answer: 1,
                    explanation: "反向扩散过程对应一个反向 SDE，需要已知分数函数才能求解。对应的概率流 ODE 是确定性的，两者描述相同的边际分布。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-c-4",
                    question: "RealNVP 等耦合层（Coupling Layer）流模型的核心设计是什么？",
                    options: ["全连接网络", "将输入分为两部分，一部分不变，另一部分通过可逆函数变换", "注意力机制", "循环结构"],
                    answer: 1,
                    explanation: "耦合层将输入 x 分为 x_a 和 x_b，x_a 保持不变，x_b 通过以 x_a 为条件的可逆函数变换。逆变换只需反向计算即可。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-c-5",
                    question: "Score-based 生成模型中的 SMLD（Score Matching with Langevin Dynamics）方法的采样过程是什么？",
                    options: ["前向扩散", "通过 Langevin 动力学沿分数函数方向迭代采样", "直接从高斯分布采样", "使用拒绝采样"],
                    answer: 1,
                    explanation: "SMLD 采样通过 Langevin 动力学迭代更新：x_{t+1} = x_t + (step_size/2) * score(x_t) + sqrt(step_size) * noise，沿分数函数方向移动。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-c-6",
                    question: "在 VAE 的变分推断框架中，KL 散度项的作用是？",
                    options: ["提高重建质量", "防止后验分布过于偏离先验，使隐空间平滑可采样", "增加模型参数", "加速训练"],
                    answer: 1,
                    explanation: "KL 正则化约束近似后验 q(z|x) 不要偏离标准正态先验太远，确保隐空间的连续性和可采样性，使得从先验采样的 z 也能生成有意义的样本。",
                    difficulty: 2
                },
                {
                    id: "cs236-final-c-7",
                    question: "Flow 模型中的 RealNVP 的 Jacobian 行列式计算为什么高效？",
                    options: ["不需要计算", "因为耦合层的 Jacobian 是三角矩阵，行列式只需计算对角元素之积", "使用近似方法", "使用蒙特卡洛估计"],
                    answer: 1,
                    explanation: "耦合层的 Jacobian 矩阵是三角矩阵（因 x_a 不变），其行列式只需计算对角元素的乘积，时间复杂度为 O(D) 而非 O(D^3)。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-c-8",
                    question: "EBM 的训练方法 Score Matching 为什么不需要计算配分函数 Z？",
                    options: ["因为 Z 很小", "因为分数函数中 Z 的梯度项为零", "因为 Z 可以忽略", "因为使用了近似"],
                    answer: 1,
                    explanation: "分数函数 nabla_x log p(x) = -nabla_x E(x) - nabla_x log Z 中，log Z 对 x 的梯度为零（Z 不依赖 x），因此分数匹配完全绕过了配分函数的计算。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-c-9",
                    question: "VQ-VAE（向量量化 VAE）中的离散隐空间相比连续隐空间有什么优势？",
                    options: ["训练更快", "避免后验坍塌，学到更结构化的离散表示", "不需要编码器", "生成质量更差"],
                    answer: 1,
                    explanation: "VQ-VAE 使用离散码本的向量量化，每个编码映射到最近的码字，避免了连续 VAE 中常见的后验坍塌问题，学到更离散化的表示。",
                    difficulty: 2
                },
                {
                    id: "cs236-final-c-10",
                    question: "StyleGAN 的映射网络（Mapping Network）的作用是什么？",
                    options: ["直接生成图像", "将隐空间 z 映射到中间隐空间 w，解耦特征", "评估生成质量", "编码输入图像"],
                    answer: 1,
                    explanation: "StyleGAN 的映射网络将 512 维的 z 空间映射到 512 维的 w 空间，使不同的语义特征在 w 空间中更好地解耦，实现更精细的风格控制。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "cs236-final-f-1",
                    question: "VAE 中的重参数化技巧使采样操作变得____，允许梯度反向传播。",
                    answer: "可微",
                    explanation: "重参数化技巧将 z = mu + sigma * epsilon，使随机性转移到 epsilon 上，z 对 mu 和 sigma 变得可微，从而可以通过反向传播优化。",
                    difficulty: 2
                },
                {
                    id: "cs236-final-f-2",
                    question: "WGAN 使用____距离作为生成分布和真实分布之间的度量。",
                    answer: "Wasserstein",
                    explanation: "WGAN 使用 Wasserstein-1 距离（推土机距离）替代 JS 散度，提供了连续可微的损失信号，使训练更稳定且损失与生成质量相关。",
                    difficulty: 2
                },
                {
                    id: "cs236-final-f-3",
                    question: "扩散模型的 SDE 框架中，概率流____对应的确定性过程可以用于高效采样。",
                    answer: "ODE",
                    explanation: "概率流 ODE 是与扩散 SDE 具有相同边际分布的确定性过程，可以通过数值 ODE 求解器（如 Euler、RK45）高效求解。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-f-4",
                    question: "GAN 的训练可以看作是用____散度来最小化两个分布之间的差异。",
                    answer: "Jensen-Shannon",
                    explanation: "原始 GAN 的最优判别器下，生成器最小化的是真实分布和生成分布之间的 Jensen-Shannon 散度。",
                    difficulty: 2
                },
                {
                    id: "cs236-final-f-5",
                    question: "Flow 模型的变量替换公式中，需要计算变换函数雅可比矩阵的____。",
                    answer: "行列式",
                    explanation: "变量替换公式 log p(x) = log p(z) + log |det(dz/dx)|，需要计算雅可比矩阵的行列式，设计高效的可逆变换使行列式易于计算是 Flow 的关键挑战。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-f-6",
                    question: "扩散模型的去噪过程学习的等价于数据分布的____函数。",
                    answer: "分数",
                    explanation: "预测噪声 epsilon 等价于估计分数函数 s(x) = -epsilon/sigma，两者可以通过代数关系相互转换。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-f-7",
                    question: "GAN 中的____归一化通过约束判别器的 Lipschitz 常数来稳定训练。",
                    answer: "谱",
                    explanation: "谱归一化将判别器每层权重矩阵除以其最大奇异值（谱范数），限制每层的 Lipschitz 常数为 1，是稳定 GAN 训练的有效方法。",
                    difficulty: 2
                },
                {
                    id: "cs236-final-f-8",
                    question: "VAE 的后验坍塌（Posterior Collapse）问题指的是编码器退化为____分布。",
                    answer: "先验",
                    explanation: "当解码器足够强大时，它可能忽略隐变量 z 的信息，此时编码器的后验 q(z|x) 坍塌为先验 p(z)，KL 项趋近于零。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-f-9",
                    question: "EBM 的配分函数 Z = integral exp(-E(x)) dx 通常是____计算的。",
                    answer: "无法",
                    explanation: "配分函数 Z 涉及高维积分，通常是无法解析计算的（intractable），这也是 EBM 训练和推理中的核心挑战。",
                    difficulty: 2
                },
                {
                    id: "cs236-final-f-10",
                    question: "NVAE（层次化 VAE）通过层次化的____结构来提高生成质量。",
                    answer: "隐变量",
                    explanation: "NVAE 使用多尺度的层次化隐变量，在编码器和解码器的每一层都引入隐变量，捕获不同尺度的数据特征，显著提高生成质量。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "cs236-final-code-1",
                    question: "补全以下 RealNVP 耦合层的前向传播代码",
                    code: "import torch\nimport torch.nn as nn\n\nclass CouplingLayer(nn.Module):\n    def __init__(self, dim, hidden_dim):\n        super().__init__()\n        self.scale_net = nn.Sequential(\n            nn.Linear(dim // 2, hidden_dim), nn.ReLU(),\n            nn.Linear(hidden_dim, dim // 2), nn.Tanh()\n        )\n        self.translate_net = nn.Sequential(\n            nn.Linear(dim // 2, hidden_dim), nn.ReLU(),\n            nn.Linear(hidden_dim, dim // 2)\n        )\n    \n    def forward(self, x):\n        \"\"\"前向传播: 将 x 分为两半，只变换后半部分\"\"\"\n        x_a, x_b = x.chunk(2, dim=-1)\n        \n        # 计算缩放和平移参数（依赖于 x_a）\n        s = self.scale_net(x_a)\n        t = self.translate_net(x_a)\n        \n        # 只变换 x_b\n        y_b = x_b * torch.exp(s) + t\n        \n        # 拼接输出\n        y = torch.cat([x_a, ____], dim=-1)\n        return y",
                    answer: "y_b",
                    explanation: "RealNVP 耦合层保持 x_a 不变，对 x_b 应用仿射变换 y_b = x_b * exp(s) + t。逆变换为 x_b = (y_b - t) * exp(-s)，雅可比行列式为 exp(sum(s))。",
                    difficulty: 3
                },
                {
                    id: "cs236-final-code-2",
                    question: "补全以下 GAN 生成器的训练步骤代码",
                    code: "import torch\n\ndef train_generator(generator, discriminator, criterion, g_optimizer, latent_dim, batch_size):\n    \"\"\"训练 GAN 生成器一步\n    \n    Args:\n        generator: 生成器\n        discriminator: 判别器（已冻结梯度）\n        criterion: 损失函数\n        g_optimizer: 生成器优化器\n        latent_dim: 隐变量维度\n        batch_size: 批大小\n    Returns:\n        g_loss: 生成器损失\n    \"\"\"\n    # 生成假数据\n    z = torch.randn(batch_size, latent_dim)\n    fake_data = generator(z)\n    \n    # 判别器对假数据的输出\n    outputs = discriminator(fake_data)\n    \n    # 生成器希望判别器认为假数据是真实的\n    real_labels = torch.ones(batch_size, 1)\n    g_loss = criterion(outputs, ____)\n    \n    # 更新生成器\n    g_optimizer.zero_grad()\n    g_loss.backward()\n    g_optimizer.step()\n    \n    return g_loss",
                    answer: "real_labels",
                    explanation: "生成器训练时，它希望判别器将生成的假数据判为真实（标签为 1），因此用全 1 标签计算损失。判别器的参数在此步骤中被冻结（detach）。",
                    difficulty: 2
                }
            ]
        }
    },

    /* ================================================================
     * 7. Build and Train an LLM with JAX (Google)
     *    Topics: JAX framework, transformer architecture, LLM training,
     *            tokenizer, fine-tuning, Gemini API
     * ================================================================ */
    "Build and Train an LLM with JAX": {
        courseId: "build-train-llm-jax",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "jax-mid-c-1",
                    question: "JAX 相比 PyTorch 的核心设计理念差异是什么？",
                    options: ["JAX 没有自动微分", "JAX 是函数式的，强调纯函数和可组合的变换", "JAX 不支持 GPU", "JAX 只支持静态图"],
                    answer: 1,
                    explanation: "JAX 是函数式编程框架，强调纯函数（无副作用），通过 jit、grad、vmap 等可组合变换实现高性能计算，与 PyTorch 的命令式编程风格不同。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-c-2",
                    question: "JAX 中的 @jax.jit 装饰器的主要作用是什么？",
                    options: ["自动微分", "将函数编译为 XLA 优化的计算图以加速执行", "并行化计算", "内存优化"],
                    answer: 1,
                    explanation: "@jax.jit 通过 XLA（Accelerated Linear Algebra）将 Python 函数编译为优化的计算图，消除 Python 解释器开销并利用硬件加速，大幅提升计算速度。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-c-3",
                    question: "Transformer 模型中的自注意力（Self-Attention）的计算复杂度与序列长度的关系是？",
                    options: ["线性关系", "O(n^2) 二次关系", "对数关系", "常数"],
                    answer: 1,
                    explanation: "标准自注意力需要计算所有 token 对之间的注意力权重，时间复杂度和空间复杂度均为 O(n^2)，这是长序列处理的主要瓶颈。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-c-4",
                    question: "JAX 的 vmap 变换的作用是什么？",
                    options: ["单个样本的自动微分", "将函数自动向量化，实现高效的批量并行计算", "将函数编译为 XLA", "实现反向传播"],
                    answer: 1,
                    explanation: "vmap（vectorized map）自动将函数从处理单个样本转换为处理批量数据，无需手动编写批量逻辑，利用硬件并行性提升效率。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-c-5",
                    question: "在从零构建 LLM 时，tokenizer 的主要作用是什么？",
                    options: ["直接处理原始文本", "将文本分割为 token 序列并映射为整数 ID", "加速模型训练", "减少模型参数"],
                    answer: 1,
                    explanation: "Tokenizer 将原始文本分割为子词（subword）单元，并将每个子词映射为对应的整数 ID，是连接原始文本和模型输入之间的桥梁。",
                    difficulty: 1
                },
                {
                    id: "jax-mid-c-6",
                    question: "Transformer 中的多头注意力（Multi-Head Attention）相比单头注意力的优势是什么？",
                    options: ["减少计算量", "可以同时关注来自不同子空间的信息", "不需要训练", "总是提高准确率"],
                    answer: 1,
                    explanation: "多头注意力将 Q、K、V 分成多个头，每个头独立计算注意力，使模型能同时从不同子空间捕获不同类型的依赖关系。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-c-7",
                    question: "在 LLM 训练中，学习率预热（Learning Rate Warmup）的作用是什么？",
                    options: ["让学习率永远增加", "在训练初期逐步增大学习率以稳定训练", "减少模型参数", "加速收敛"],
                    answer: 1,
                    explanation: "Warmup 在训练初期（前几百到几千步）从很小的学习率线性增加到目标学习率，避免训练初期梯度不稳定导致的训练发散。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-c-8",
                    question: "Flax（JAX 的神经网络库）中的 nn.Module 与 PyTorch 的 nn.Module 有什么关键区别？",
                    options: ["没有区别", "Flax 的 Module 是不可变的（immutable），状态通过变量字典传递", "Flax 不支持 GPU", "Flax 的参数更少"],
                    answer: 1,
                    explanation: "Flax 的 Module 设计为纯函数式、不可变的，模型参数通过变量字典（Variable Dictionary）显式传递，符合 JAX 的函数式编程范式。",
                    difficulty: 3
                },
                {
                    id: "jax-mid-c-9",
                    question: "LLM 训练中的梯度裁剪（Gradient Clipping）主要用于解决什么问题？",
                    options: ["加速训练", "防止梯度爆炸导致训练不稳定", "减少过拟合", "增加模型容量"],
                    answer: 1,
                    explanation: "梯度裁剪通过限制梯度的范数不超过某个阈值，防止训练中出现梯度爆炸（特别在 RNN 或大模型训练中），确保训练稳定性。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-c-10",
                    question: "在构建 LLM 时，位置编码（Positional Encoding）的目的是什么？",
                    options: ["减少参数量", "为序列中的 token 注入位置信息", "增加非线性", "加速推理"],
                    answer: 1,
                    explanation: "Transformer 的自注意力机制是置换不变的，需要位置编码来让模型知道每个 token 在序列中的位置，否则无法区分不同位置的相同 token。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "jax-mid-f-1",
                    question: "JAX 的三大核心变换是 jit、____和 vmap。",
                    answer: "grad",
                    explanation: "JAX 的三大核心函数变换：jit（即时编译加速）、grad（自动微分计算梯度）、vmap（自动向量化批量并行）。",
                    difficulty: 1
                },
                {
                    id: "jax-mid-f-2",
                    question: "Transformer 的注意力计算公式为 Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) * ____。",
                    answer: "V",
                    explanation: "标准注意力机制：先通过 QK^T 计算注意力权重（缩放点积），然后用 softmax 归一化，最后与 V 相乘得到加权和。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-f-3",
                    question: "JAX 使用 XLA（____Linear Algebra）编译器来优化计算图。",
                    answer: "Accelerated",
                    explanation: "XLA（Accelerated Linear Algebra）是 Google 开发的线性代数编译器，JAX 通过 XLA 将计算图编译优化为高效的机器代码。",
                    difficulty: 1
                },
                {
                    id: "jax-mid-f-4",
                    question: "LLM 通常使用 Adam 优化器，它结合了动量和自适应____学习率。",
                    answer: "学习率",
                    explanation: "Adam 优化器结合了一阶矩估计（动量）和二阶矩估计（RMSProp），为每个参数自适应调整学习率。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-f-5",
                    question: "Transformer 中的层归一化（Layer Normalization）是在特征维度上进行归一化，而非____维度。",
                    answer: "批量",
                    explanation: "Layer Norm 在每个样本的特征维度上独立归一化，不依赖 batch 中其他样本，与 Batch Normalization 不同，适合序列模型。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-f-6",
                    question: "BPE（Byte Pair Encoding）分词算法通过迭代合并最____的字节对来构建词表。",
                    answer: "频繁",
                    explanation: "BPE 从字符级开始，每次合并出现频率最高的相邻字节对，逐步构建更大的子词单元，直到达到目标词表大小。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-f-7",
                    question: "在 JAX 中，函数必须是____的（pure function），不产生副作用。",
                    answer: "纯",
                    explanation: "JAX 要求被 JIT 编译的函数是纯函数（pure function），即相同的输入总是产生相同的输出，不修改外部状态，这样才能安全地进行编译优化。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-f-8",
                    question: "LLM 训练中的交叉熵损失函数衡量的是模型预测的概率分布与真实____分布之间的差异。",
                    answer: "token",
                    explanation: "语言模型训练使用交叉熵损失，衡量模型预测的下一个 token 概率分布与真实 token 分布（one-hot）之间的差异。",
                    difficulty: 1
                },
                {
                    id: "jax-mid-f-9",
                    question: "Transformer 的前馈网络（FFN）通常使用 ____激活函数。",
                    answer: "GELU",
                    explanation: "现代 Transformer 通常使用 GELU（Gaussian Error Linear Unit）作为 FFN 中的激活函数，它比 ReLU 在 Transformer 中表现更好。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-f-10",
                    question: "在 JAX 中，数据并行可以通过 ____变换自动实现。",
                    answer: "pmap",
                    explanation: "JAX 的 pmap（parallel map）变换将函数自动分发到多个设备（如多块 GPU）上并行执行，实现高效的数据并行训练。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "jax-mid-code-1",
                    question: "补全以下 JAX 中使用 @jax.jit 编译和使用 jax.grad 计算梯度的代码",
                    code: "import jax\nimport jax.numpy as jnp\n\n# 定义简单损失函数\ndef loss_fn(params, x, y):\n    pred = jnp.dot(x, params)\n    return jnp.mean((pred - y) ** 2)\n\n# 使用 jax.grad 获取梯度函数\ngrad_fn = jax.grad(loss_fn)\n\n# 使用 @jax.jit 编译梯度计算\n@jax.jit\ndef train_step(params, x, y, lr=0.01):\n    \"\"\"一步训练：计算梯度并更新参数\"\"\"\n    grads = grad_fn(params, x, y)\n    new_params = ____\n    return new_params",
                    answer: "params - lr * grads",
                    explanation: "JAX 的函数式训练步骤：先用 jax.grad 获取梯度函数，再用 jax.jit 编译加速，最后参数更新为 params - lr * grads（梯度下降）。",
                    difficulty: 2
                },
                {
                    id: "jax-mid-code-2",
                    question: "补全以下缩放点积注意力的 JAX 实现代码",
                    code: "import jax\nimport jax.numpy as jnp\n\ndef scaled_dot_product_attention(Q, K, V):\n    \"\"\"缩放点积注意力机制\n    \n    Args:\n        Q: 查询矩阵 (seq_len, d_k)\n        K: 键矩阵 (seq_len, d_k)\n        V: 值矩阵 (seq_len, d_v)\n    Returns:\n        output: 注意力输出 (seq_len, d_v)\n    \"\"\"\n    d_k = Q.shape[-1]\n    \n    # 计算注意力分数\n    scores = jnp.matmul(Q, K.T) / jnp.sqrt(d_k)\n    \n    # 应用 softmax 归一化\n    attention_weights = jax.nn.softmax(scores, axis=-1)\n    \n    # 计算加权输出\n    output = ____\n    return output",
                    answer: "jnp.matmul(attention_weights, V)",
                    explanation: "缩放点积注意力：先计算 QK^T/√d_k 得到分数，softmax 归一化后与 V 相乘得到输出。缩放因子 √d_k 防止点积过大导致 softmax 饱和。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "jax-final-c-1",
                    question: "在 JAX 中实现梯度累积时，应该使用什么方法？",
                    options: ["直接在循环中累加梯度", "使用 jax.lax.scan 在单次 jit 编译中完成循环", "不需要梯度累积", "使用 Python 循环"],
                    answer: 1,
                    explanation: "JAX 的 jit 编译不支持有状态的 Python 循环。应使用 jax.lax.scan 或 jax.lax.fori_loop 来实现在 jit 内的迭代操作，包括梯度累积。",
                    difficulty: 3
                },
                {
                    id: "jax-final-c-2",
                    question: "Flax 的 nn.scan 变换的主要用途是什么？",
                    options: ["扫描输入数据", "在时间维度上共享参数并展开 RNN/Transformer 层", "可视化模型", "数据预处理"],
                    answer: 1,
                    explanation: "nn.scan 允许在某一维度上共享参数，可以高效地展开循环层（如 RNN）或在 Transformer 中实现参数共享的多层结构。",
                    difficulty: 3
                },
                {
                    id: "jax-final-c-3",
                    question: "LLM 训练中的混合精度训练（Mixed Precision）在 JAX 中如何实现？",
                    options: ["JAX 不支持", "使用 jax.numpy 的 float16/bfloat16 类型", "使用 @jax.jit 自动转换", "不需要特殊处理"],
                    answer: 1,
                    explanation: "JAX 支持通过指定 bfloat16 或 float16 数据类型实现混合精度训练，配合 loss scaling 和主权重的 FP32 副本确保训练稳定性。",
                    difficulty: 2
                },
                {
                    id: "jax-final-c-4",
                    question: "Transformer 中的 KV Cache 机制如何优化自回归生成？",
                    options: ["缓存训练数据", "缓存已计算的 Key 和 Value 矩阵避免重复计算", "缓存梯度", "缓存损失值"],
                    answer: 1,
                    explanation: "在自回归生成中，每步只需计算新 token 的 Q、K、V，之前 token 的 K、V 可以从缓存中读取，将每步计算从 O(n^2) 降低到 O(n)。",
                    difficulty: 2
                },
                {
                    id: "jax-final-c-5",
                    question: "在 JAX 中，如何实现高效的跨设备数据并行？",
                    options: ["使用 Python 多进程", "使用 pmap 将函数分发到多个设备并自动同步梯度", "使用 jax.grad", "使用 jax.vmap"],
                    answer: 1,
                    explanation: "pmap 将函数自动分发到多个设备上执行，并在需要时通过 all-reduce 自动同步梯度，实现高效的跨设备数据并行训练。",
                    difficulty: 2
                },
                {
                    id: "jax-final-c-6",
                    question: "Transformer 的 RMSNorm 相比 LayerNorm 的优势是什么？",
                    options: ["功能更强大", "计算更简单（无减均值操作），训练更稳定", "参数更多", "总是提高性能"],
                    answer: 1,
                    explanation: "RMSNorm（Root Mean Square Layer Normalization）省去了 LayerNorm 中的均值中心化步骤，只做方差归一化，计算更简单且在大规模模型中训练更稳定。",
                    difficulty: 2
                },
                {
                    id: "jax-final-c-7",
                    question: "RoPE（旋转位置编码）的核心思想是什么？",
                    options: ["学习一个位置嵌入矩阵", "通过旋转 Q 和 K 向量来编码相对位置信息", "使用绝对位置编码", "不需要位置信息"],
                    answer: 1,
                    explanation: "RoPE 通过在注意力计算前对 Q 和 K 施加依赖位置的旋转变换，使得注意力分数自然地编码了两个 token 之间的相对位置差。",
                    difficulty: 3
                },
                {
                    id: "jax-final-c-8",
                    question: "在 LLM 微调中，LoRA 的低秩分解 A*B 的秩 r 通常远小于什么？",
                    options: ["batch size", "原始权重矩阵的维度", "序列长度", "词表大小"],
                    answer: 1,
                    explanation: "LoRA 中的秩 r 通常设为 4-64，远小于原始权重矩阵的维度（如 d_model = 4096），因此可训练参数量大幅减少。",
                    difficulty: 2
                },
                {
                    id: "jax-final-c-9",
                    question: "Flash Attention 的核心优化策略是什么？",
                    options: ["减少注意力头的数量", "利用 GPU 内存层次（SRAM/HBM）减少内存访问", "使用近似注意力", "使用更小的模型"],
                    answer: 1,
                    explanation: "Flash Attention 通过分块（tiling）计算注意力，利用 GPU 的快速 SRAM 减少对慢速 HBM 的访问次数，既减少内存使用又提高计算速度。",
                    difficulty: 3
                },
                {
                    id: "jax-final-c-10",
                    question: "Transformer 中的 SwiGLU 激活函数相比标准 FFN 的 ReLU 有什么改进？",
                    options: ["参数更少", "引入门控机制，FFN 使用三个权重矩阵替代两个", "计算更简单", "只适用于小模型"],
                    answer: 1,
                    explanation: "SwiGLU（Swish-Gated Linear Unit）在 FFN 中引入门控：output = (xW1) ⊙ Swish(xW3)，使用三个权重矩阵替代标准的两个，通常效果更好。",
                    difficulty: 3
                }
            ],
            fill: [
                {
                    id: "jax-final-f-1",
                    question: "JAX 的 pmap 变换可以自动在多个 GPU 间实现数据____和梯度同步。",
                    answer: "并行",
                    explanation: "pmap 将函数分发到每个 GPU 上独立执行（数据并行），并在需要时自动进行 all-reduce 梯度同步。",
                    difficulty: 2
                },
                {
                    id: "jax-final-f-2",
                    question: "LLM 中的____位置编码（Rotary Position Embedding）通过旋转操作编码相对位置。",
                    answer: "旋转",
                    explanation: "RoPE 通过对 Q 和 K 向量施加与位置相关的旋转变换，使注意力分数自然编码相对位置信息，且可外推到训练时未见的长度。",
                    difficulty: 3
                },
                {
                    id: "jax-final-f-3",
                    question: "Flash Attention 通过____计算策略减少 GPU 内存访问次数。",
                    answer: "分块",
                    explanation: "Flash Attention 将注意力矩阵分块（tiling），在 GPU 快速 SRAM 中完成分块计算，减少对慢速 HBM 的访问，同时精确计算注意力。",
                    difficulty: 3
                },
                {
                    id: "jax-final-f-4",
                    question: "LoRA 微调通过在原始权重旁添加____矩阵 A 和 B 来减少可训练参数。",
                    answer: "低秩",
                    explanation: "LoRA 冻结原始权重 W，添加低秩分解矩阵 A(r×d) 和 B(d×r)，其中 r << d，只训练 A 和 B，参数量减少 10000 倍以上。",
                    difficulty: 2
                },
                {
                    id: "jax-final-f-5",
                    question: "JAX 中的 jax.lax.____ 函数用于在 jit 编译的函数中实现循环。",
                    answer: "fori_loop",
                    explanation: "jax.lax.fori_loop 和 jax.lax.scan 是 JAX 中用于实现循环的原语，可以在 @jit 编译的函数中安全使用，替代 Python 循环。",
                    difficulty: 3
                },
                {
                    id: "jax-final-f-6",
                    question: "Transformer 的注意力中的____机制允许解码器关注编码器的输出。",
                    answer: "交叉注意力",
                    explanation: "交叉注意力（Cross-Attention）中，Q 来自解码器，K 和 V 来自编码器输出，使解码器在生成时能关注输入序列的信息。",
                    difficulty: 2
                },
                {
                    id: "jax-final-f-7",
                    question: "GQA（分组查询注意力）是 MHA 和 ____注意力之间的折中方案。",
                    answer: "多查询",
                    explanation: "GQA 将注意力头分组，每组共享一组 K、V，介于 MHA（每头独立 K、V）和 MQA（所有头共享 K、V）之间，在效率和质量间取得平衡。",
                    difficulty: 3
                },
                {
                    id: "jax-final-f-8",
                    question: "在 LLM 训练中，学习率____策略在训练末期逐渐降低学习率以促进收敛。",
                    answer: "余弦退火",
                    explanation: "余弦退火（Cosine Annealing）按余弦函数从初始学习率平滑降低到接近零，相比阶梯式衰减更平滑，通常配合 warmup 使用。",
                    difficulty: 2
                },
                {
                    id: "jax-final-f-9",
                    question: "Flax 的变量字典机制使得模型的参数和____状态分离管理。",
                    answer: "优化器",
                    explanation: "Flax 将模型参数和优化器状态（如 Adam 的动量和方差）存储在独立的变量字典中，方便冻结参数和选择性更新。",
                    difficulty: 2
                },
                {
                    id: "jax-final-f-10",
                    question: "JAX 中的 xmap 变换支持同时进行数据并行和____并行。",
                    answer: "模型",
                    explanation: "xmap（experimental）支持在多个维度上同时并行，可以组合数据并行和模型并行（如张量并行），实现更灵活的分布式训练策略。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "jax-final-code-1",
                    question: "补全以下 Flax Linen 模型中多头注意力的前向传播代码",
                    code: "import jax\nimport jax.numpy as jnp\nfrom flax import linen as nn\n\nclass MultiHeadAttention(nn.Module):\n    num_heads: int\n    features: int\n    \n    @nn.compact\n    def __call__(self, x):\n        batch_size, seq_len, d_model = x.shape\n        d_k = d_model // self.num_heads\n        \n        # 线性投影 Q, K, V\n        Q = nn.Dense(self.features)(x)\n        K = nn.Dense(self.features)(x)\n        V = nn.Dense(self.features)(x)\n        \n        # 重塑为多头: (batch, seq, heads, d_k)\n        Q = Q.reshape(batch_size, seq_len, self.num_heads, d_k)\n        K = K.reshape(batch_size, seq_len, self.num_heads, d_k)\n        V = V.reshape(batch_size, seq_len, self.num_heads, d_k)\n        \n        # 转置: (batch, heads, seq, d_k)\n        Q = Q.transpose(0, 2, 1, 3)\n        K = K.transpose(0, 2, 1, 3)\n        V = V.transpose(0, 2, 1, 3)\n        \n        # 缩放点积注意力\n        scores = jnp.matmul(Q, K.transpose(0, 1, 3, 2)) / jnp.sqrt(d_k)\n        weights = jax.nn.softmax(scores, axis=-1)\n        attn_output = jnp.matmul(weights, V)\n        \n        # 合并多头: (batch, seq, features)\n        attn_output = attn_output.transpose(0, 2, 1, 3).reshape(batch_size, seq_len, ____)\n        return nn.Dense(self.features)(attn_output)",
                    answer: "self.features",
                    explanation: "多头注意力最后将所有头的输出拼接起来（合并 heads 维度和 d_k 维度），恢复为 (batch, seq, features) 形状，再通过线性层投影。",
                    difficulty: 2
                },
                {
                    id: "jax-final-code-2",
                    question: "补全以下使用 pmap 实现跨 GPU 数据并行的训练函数代码",
                    code: "import jax\nimport jax.numpy as jnp\n\ndef create_train_step(model, optimizer):\n    \"\"\"创建 pmap 并行的训练步骤\n    \n    Args:\n        model: Flax 模型\n        optimizer: 优化器\n    Returns:\n        pmap 编译的训练函数\n    \"\"\"\n    @jax.jit\n    def train_step(params, batch):\n        def loss_fn(params):\n            logits = model.apply(params, batch['x'])\n            loss = optax.softmax_cross_entropy_with_integer_labels(\n                logits, batch['y']\n            ).mean()\n            return loss\n        \n        loss, grads = jax.value_and_grad(loss_fn)(params)\n        new_params = optimizer.update(grads, params)\n        return new_params, loss\n    \n    # 使用 pmap 分发到多个设备\n    parallel_train_step = jax.____(train_step)\n    return parallel_train_step",
                    answer: "pmap",
                    explanation: "jax.pmap 将 train_step 函数分发到每个设备（GPU）上独立执行，每个设备处理 batch 的一个分片（shard），实现高效的数据并行训练。",
                    difficulty: 2
                }
            ]
        }
    },

    /* ================================================================
     * 8. ChatGPT Prompt Engineering (DeepLearning.AI)
     *    Topics: prompting techniques, API usage, LLM application,
     *            zero/few-shot, chain-of-thought, system prompts
     * ================================================================ */
    "ChatGPT Prompt Engineering": {
        courseId: "chatgpt-prompt-engineering",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "prompt-mid-c-1",
                    question: "Zero-shot prompting 和 Few-shot prompting 的主要区别是什么？",
                    options: ["没有区别", "Zero-shot 不提供示例，Few-shot 提供几个输入-输出示例", "Zero-shot 使用更大的模型", "Few-shot 不需要 API"],
                    answer: 1,
                    explanation: "Zero-shot prompting 只给任务描述不提供示例；Few-shot prompting 在提示中提供几个完整的输入-输出示例，帮助模型理解任务格式和期望输出。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-c-2",
                    question: "Chain-of-Thought (CoT) 提示的核心作用是什么？",
                    options: ["减少 token 使用量", "引导模型展示推理过程，提升复杂推理任务的性能", "让模型输出更短", "降低 API 成本"],
                    answer: 1,
                    explanation: "CoT 提示通过引导模型逐步展示推理过程，显著提升数学推理、逻辑推理等复杂任务的准确率，因为中间步骤帮助模型分解问题。",
                    difficulty: 2
                },
                {
                    id: "prompt-mid-c-3",
                    question: "在编写有效的系统提示（System Prompt）时，以下哪个做法是推荐的？",
                    options: ["写得越长越好", "明确角色设定、输出格式和约束条件", "不要给任何指令", "使用模糊的描述"],
                    answer: 1,
                    explanation: "好的系统提示应该明确：AI 扮演的角色、输出的格式、需要遵循的规则和约束条件，为后续交互奠定清晰的基础。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-c-4",
                    question: "Temperature 参数设置为 0 时，模型的输出行为是什么？",
                    options: ["完全随机", "几乎确定性地输出概率最高的 token", "输出最长的序列", "拒绝回答"],
                    answer: 1,
                    explanation: "Temperature = 0 时，模型对 logits 不做缩放，直接选择概率最高的 token（贪婪解码），输出几乎确定性、可重复。",
                    difficulty: 2
                },
                {
                    id: "prompt-mid-c-5",
                    question: "以下哪种技术不属于提示工程的最佳实践？",
                    options: ["给出具体的输出格式示例", "使用模糊和开放式的指令", "提供上下文信息", "将复杂任务分解为子任务"],
                    answer: 1,
                    explanation: "模糊和开放式的指令会导致模型输出不可预测。好的提示工程应该具体、明确，提供足够的上下文和格式要求。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-c-6",
                    question: "使用 OpenAI API 时，max_tokens 参数的作用是什么？",
                    options: ["限制输入长度", "限制模型生成的最大 token 数量", "设置温度", "选择模型"],
                    answer: 1,
                    explanation: "max_tokens 参数控制模型输出的最大 token 数，超出此限制输出会被截断，用于控制生成长度和成本。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-c-7",
                    question: "分隔符（如 --- 或 ###）在提示中的作用是什么？",
                    options: ["美观装饰", "帮助模型区分指令部分和数据部分", "加速推理", "增加 token 数"],
                    answer: 1,
                    explanation: "分隔符在提示中清晰地划分不同的内容部分（如系统指令、用户输入、示例等），帮助模型准确理解每个部分的角色和含义。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-c-8",
                    question: "关于迭代提示工程（Iterative Prompting），以下哪个说法是正确的？",
                    options: ["一次就能写出完美的提示", "需要根据模型输出不断调整和优化提示", "只适用于 GPT-3", "不需要测试"],
                    answer: 1,
                    explanation: "提示工程是一个迭代过程：设计初始提示、观察模型输出、分析问题、调整提示，直到获得满意的结果。很少有一步到位的情况。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-c-9",
                    question: "在提示中使用角色扮演（如"你是一位经验丰富的 Python 程序员"）的目的是什么？",
                    options: ["没有实际作用", "激活模型中与该角色相关的知识模式，提高输出质量", "让输出更长", "增加 API 调用次数"],
                    answer: 1,
                    explanation: "角色扮演通过激活模型在训练数据中与该角色相关的知识模式，引导模型以更专业、更符合期望的方式回答问题。",
                    difficulty: 2
                },
                {
                    id: "prompt-mid-c-10",
                    question: "Top-p（核采样）参数的作用是什么？",
                    options: ["控制模型大小", "从累积概率达到 p 的最小 token 集合中采样", "控制输入长度", "设置批处理大小"],
                    answer: 1,
                    explanation: "Top-p（nucleus sampling）按概率从高到低排序 token，只从累积概率达到 p 的最小 token 集合中采样，动态调整候选 token 数量。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "prompt-mid-f-1",
                    question: "Few-shot prompting 在提示中提供几个完整的输入-____示例来帮助模型理解任务。",
                    answer: "输出",
                    explanation: "Few-shot prompting 通过在提示中提供几个完整的输入-输出对作为示例，让模型学习任务的模式和格式，从而在新输入上给出更好的输出。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-f-2",
                    question: "Chain-of-Thought 提示鼓励模型在给出最终答案前展示中间____步骤。",
                    answer: "推理",
                    explanation: "CoT 提示通过添加'让我们一步一步思考'等引导语，鼓励模型在输出中展示推理过程，有助于分解复杂问题。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-f-3",
                    question: "系统提示（System Prompt）用于定义 AI 的角色、____和行为约束。",
                    answer: "行为",
                    explanation: "System Prompt 为整个对话设定基调，包括 AI 扮演的角色、遵循的规则、输出格式要求等，影响所有后续交互。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-f-4",
                    question: "Temperature 参数越低，模型的输出越确定性和____。",
                    answer: "可重复",
                    explanation: "低温度使输出分布更尖锐（趋向确定性），高温度使分布更平滑（增加随机性）。Temperature=0 时输出完全确定。",
                    difficulty: 2
                },
                {
                    id: "prompt-mid-f-5",
                    question: "在 API 调用中，n 参数控制模型生成多少个____输出。",
                    answer: "候选",
                    explanation: "n 参数让模型为每个输入生成 n 个不同的输出候选，用户可以从中选择最佳的一个。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-f-6",
                    question: "提示工程中的"指令跟随"（Instruction Following）能力是指模型按照用户____执行任务的能力。",
                    answer: "指令",
                    explanation: "指令跟随是现代 LLM 的核心能力，指模型能准确理解并按照用户的自然语言指令来执行相应任务。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-f-7",
                    question: "使用分隔符可以防止提示注入攻击，因为它们帮助模型区分指令和____。",
                    answer: "用户输入",
                    explanation: "分隔符（如 ''' 或 ---）清晰标记用户输入的边界，帮助模型区分系统指令和用户提供的内容，降低提示注入风险。",
                    difficulty: 2
                },
                {
                    id: "prompt-mid-f-8",
                    question: "在提示中明确指定输出格式（如 JSON、列表）可以减少模型输出的____性。",
                    answer: "模糊",
                    explanation: "明确指定输出格式可以约束模型的输出结构，减少输出的模糊性和不一致性，使结果更可预测和可解析。",
                    difficulty: 1
                },
                {
                    id: "prompt-mid-f-9",
                    question: "OpenAI API 中的 frequency_penalty 参数用于减少模型的____重复。",
                    answer: "token",
                    explanation: "frequency_penalty 对频繁出现的 token 施加惩罚，减少模型在输出中重复使用相同 token 的倾向。",
                    difficulty: 2
                },
                {
                    id: "prompt-mid-f-10",
                    question: "提示工程的核心目标是让模型生成更____、更有用和更安全的输出。",
                    answer: "准确",
                    explanation: "好的提示工程追求三个目标：准确性（输出正确）、有用性（满足用户需求）和安全性（不产生有害内容）。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "prompt-mid-code-1",
                    question: "补全以下使用 OpenAI API 进行 Few-shot 分类的代码",
                    code: "import openai\n\ndef classify_text(text, examples):\n    \"\"\"使用 Few-shot 提示进行文本分类\n    \n    Args:\n        text: 待分类的文本\n        examples: 少样本示例列表 [{\"input\": ..., \"output\": ...}]\n    Returns:\n        str: 分类结果\n    \"\"\"\n    # 构建包含示例的提示\n    prompt = \"请根据以下示例对文本进行分类。\\n\\n\"\n    for ex in examples:\n        prompt += f\"文本: {ex['input']}\\n分类: {ex['output']}\\n\\n\"\n    \n    prompt += f\"文本: {text}\\n分类:\"\n    \n    response = openai.ChatCompletion.create(\n        model=\"gpt-4\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"你是一个文本分类助手。\"},\n            {\"role\": \"user\", \"content\": ____}\n        ],\n        temperature=0\n    )\n    return response.choices[0].message.content",
                    answer: "prompt",
                    explanation: "将构建好的包含示例的提示作为用户消息发送给 API，模型会根据示例模式对新文本进行分类。Few-shot 示例直接嵌入 prompt 中。",
                    difficulty: 2
                },
                {
                    id: "prompt-mid-code-2",
                    question: "补全以下使用 Chain-of-Thought 提示解决数学问题的代码",
                    code: "import openai\n\ndef solve_math_problem(problem):\n    \"\"\"使用 CoT 提示解决数学问题\n    \n    Args:\n        problem: 数学问题文本\n    Returns:\n        str: 包含推理过程和答案的回复\n    \"\"\"\n    system_prompt = \"\"\"你是一个数学解题助手。请按以下格式回答：
1. 理解问题
2. 列出已知条件
3. 逐步推理
4. 给出最终答案\"\"\"\n    \n    user_prompt = f\"\"\"问题：{problem}\n\n请一步一步地推理并解答。\"\"\"\n    \n    response = openai.ChatCompletion.create(\n        model=\"gpt-4\",\n        messages=[\n            {\"role\": \"system\", \"content\": system_prompt},\n            {\"role\": \"user\", \"content\": ____}\n        ],\n        temperature=0\n    )\n    return response.choices[0].message.content",
                    answer: "user_prompt",
                    explanation: "CoT 提示将问题和'请一步一步推理'的指令组合成用户消息，配合系统提示中定义的格式要求，引导模型展示完整的推理过程。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "prompt-final-c-1",
                    question: "Self-Consistency 提示技术的核心思想是什么？",
                    options: ["只采样一次输出", "多次采样生成不同推理路径，通过投票选择最一致的答案", "减少采样次数", "只使用贪心解码"],
                    answer: 1,
                    explanation: "Self-Consistency 多次采样生成多条 CoT 推理路径，每条路径可能得出不同答案，最终通过多数投票选择最频繁出现的答案，提高推理可靠性。",
                    difficulty: 3
                },
                {
                    id: "prompt-final-c-2",
                    question: "提示注入（Prompt Injection）攻击的典型方式是什么？",
                    options: ["使用更大的模型", "在用户输入中嵌入指令来覆盖系统提示的约束", "修改 API 参数", "使用特殊字符"],
                    answer: 1,
                    explanation: "提示注入通过在用户输入中嵌入如'忽略之前的指令'等恶意指令，试图覆盖系统提示中设定的行为约束，使模型执行非预期操作。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-c-3",
                    question: "Tree-of-Thought (ToT) 提示相比 Chain-of-Thought 的优势是什么？",
                    options: ["更简单", "探索多条推理路径并回溯，适合需要规划的任务", "消耗更少 token", "不需要 LLM"],
                    answer: 1,
                    explanation: "ToT 将推理过程组织为树结构，每个节点是一个思考步骤，可以生成多个分支并评估和回溯，适合需要探索和规划的复杂问题。",
                    difficulty: 3
                },
                {
                    id: "prompt-final-c-4",
                    question: "在使用 OpenAI API 时，如何最有效地控制输出格式？",
                    options: ["只靠温度参数", "在系统提示中明确指定格式要求，并提供格式示例", "使用 max_tokens", "调用多次 API"],
                    answer: 1,
                    explanation: "最有效的方法是在系统提示中明确指定输出格式（如 JSON schema、模板），配合 few-shot 示例展示期望的格式，再用 temperature=0 保证一致性。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-c-5",
                    question: "ReAct 提示框架将什么两种能力结合在一起？",
                    options: ["编码和测试", "推理（Reasoning）和行动（Acting）", "训练和推理", "分类和聚类"],
                    answer: 1,
                    explanation: "ReAct（Reasoning + Acting）让模型交替进行推理（分析问题、制定计划）和行动（调用工具、获取信息），形成推理-行动-观察的循环。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-c-6",
                    question: "关于多轮对话中的上下文管理，以下哪个做法最合理？",
                    options: ["每次都从头开始", "精心管理对话历史，只保留相关上下文，注意 token 限制", "发送所有历史消息", "不使用上下文"],
                    answer: 1,
                    explanation: "有效管理上下文包括：保留关键信息、及时总结旧对话、注意 token 限制（模型上下文窗口有限），避免无关信息干扰当前任务。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-c-7",
                    question: "Meta-Prompting（元提示）指的是什么？",
                    options: ["写最大的提示", "让模型帮助优化和改进提示本身", "使用多个模型", "减少提示长度"],
                    answer: 1,
                    explanation: "Meta-Prompting 利用 LLM 自身的能力来分析、评估和改进提示，例如让模型评审自己的提示并建议改进方案，形成迭代优化闭环。",
                    difficulty: 3
                },
                {
                    id: "prompt-final-c-8",
                    question: "在使用 GPT API 构建应用时，流式输出（Stream）的主要优势是什么？",
                    options: ["减少 API 成本", "逐 token 返回结果，降低用户感知延迟", "提高输出质量", "减少 token 使用"],
                    answer: 1,
                    explanation: "流式输出（stream=True）让 API 逐 token 返回生成内容，用户可以在生成过程中就开始看到输出，显著降低感知等待时间。",
                    difficulty: 1
                },
                {
                    id: "prompt-final-c-9",
                    question: "结构化输出（Structured Output）在实际应用中的价值是什么？",
                    options: ["减少 token 使用", "使模型输出可直接解析和用于下游系统", "提高生成速度", "增加创造性"],
                    answer: 1,
                    explanation: "结构化输出（如 JSON 格式）使模型输出可以直接被程序解析和使用，便于集成到工作流中，是构建可靠 LLM 应用的关键。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-c-10",
                    question: "关于 LLM 的局限性，以下哪个说法是正确的？",
                    options: ["LLM 不会犯错", "LLM 可能产生幻觉（编造事实），需要人工验证", "LLM 了解所有最新信息", "LLM 总是遵循安全规则"],
                    answer: 1,
                    explanation: "LLM 可能产生幻觉（hallucination），即编造看似合理但实际不正确的事实。构建可靠应用需要添加事实验证和人工审核机制。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "prompt-final-f-1",
                    question: "Self-Consistency 方法通过多次采样并____投票来提高推理准确率。",
                    answer: "多数",
                    explanation: "Self-Consistency 生成多条 CoT 推理路径，通过多数投票（majority voting）选择最频繁出现的答案，利用了'正确推理路径通常得出相同答案'的直觉。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-f-2",
                    question: "提示注入攻击利用了 LLM 难以区分系统指令和用户____输入的弱点。",
                    answer: "不可信",
                    explanation: "提示注入利用了 LLM 无法可靠区分可信的系统指令和不可信的用户输入这一弱点，通过在用户输入中嵌入伪指令来劫持模型行为。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-f-3",
                    question: "ReAct 框架的推理-行动-____循环使 Agent 能够完成复杂任务。",
                    answer: "观察",
                    explanation: "ReAct 循环：Reasoning（推理分析）-> Acting（执行工具调用）-> Observation（观察结果）-> Reasoning（基于结果继续推理），形成迭代闭环。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-f-4",
                    question: "Tree-of-Thought 将推理过程组织为树结构，支持路径评估和____。",
                    answer: "回溯",
                    explanation: "ToT 允许在探索到死胡同时回溯到之前的分支，重新尝试其他推理路径，类似于搜索算法中的回溯策略。",
                    difficulty: 3
                },
                {
                    id: "prompt-final-f-5",
                    question: "在提示工程中，使用____格式（如 Markdown、JSON）可以使输出更结构化。",
                    answer: "明确",
                    explanation: "明确的格式要求（如'请以 JSON 格式输出'或'请以编号列表输出'）约束模型的输出结构，使结果更可预测和可解析。",
                    difficulty: 1
                },
                {
                    id: "prompt-final-f-6",
                    question: "LLM 的____上下文窗口限制了可以处理的总输入和输出长度。",
                    answer: "最大",
                    explanation: "每个 LLM 有固定的上下文窗口大小（如 4K、128K tokens），输入和输出的总 token 数不能超过此限制。",
                    difficulty: 1
                },
                {
                    id: "prompt-final-f-7",
                    question: "提示工程中的____技术通过在提示末尾添加'让我们一步一步思考'来触发 CoT 推理。",
                    answer: "触发词",
                    explanation: "Zero-shot CoT 仅通过添加'Let's think step by step'等触发词就能激活模型的链式推理能力，无需提供推理示例。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-f-8",
                    question: "在生产环境中部署 LLM 应用时，需要对用户输入进行____处理以防止提示注入。",
                    answer: "清洗",
                    explanation: "输入清洗包括去除特殊指令标记、限制输入长度、使用分隔符标记边界等，是防御提示注入的重要措施。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-f-9",
                    question: "OpenAI API 的 stop 参数用于指定模型停止生成的____序列。",
                    answer: "停止",
                    explanation: "stop 参数接受一个或多个字符串，模型在输出中遇到这些字符串时会停止生成，用于控制输出的终止条件。",
                    difficulty: 1
                },
                {
                    id: "prompt-final-f-10",
                    question: "提示工程的迭代优化过程通常包括设计、测试、分析和____四个步骤。",
                    answer: "改进",
                    explanation: "提示工程是一个循环迭代过程：设计初始提示 -> 测试模型输出 -> 分析不足之处 -> 改进提示，直到达到期望效果。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "prompt-final-code-1",
                    question: "补全以下实现 ReAct 风格 Agent 的核心循环代码",
                    code: "def react_agent(question, tools, model_fn, max_steps=5):\n    \"\"\"ReAct Agent 核心循环\n    \n    Args:\n        question: 用户问题\n        tools: 可用工具列表\n        model_fn: LLM 调用函数\n        max_steps: 最大推理步骤\n    Returns:\n        str: 最终答案\n    \"\"\"\n    context = f\"问题: {question}\\n可用工具: {tools}\\n\\n\"\n    \n    for step in range(max_steps):\n        # 生成推理和行动\n        prompt = context + \"请进行推理并选择行动: \"\n        response = model_fn(prompt)\n        \n        # 检查是否已经有最终答案\n        if \"最终答案\" in response:\n            return extract_answer(response)\n        \n        # 执行工具调用并获取观察结果\n        action, action_input = parse_action(response)\n        observation = execute_tool(action, action_input)\n        \n        # 更新上下文\n        context += f\"\\n行动: {action}\\n观察: {observation}\\n\"\n    \n    return \"达到最大步数限制\"",
                    answer: "return \"达到最大步数限制\"",
                    explanation: "ReAct Agent 在每一步生成推理和行动，执行工具获取观察结果，将结果添加到上下文中继续推理，直到得到最终答案或达到步数限制。",
                    difficulty: 2
                },
                {
                    id: "prompt-final-code-2",
                    question: "补全以下实现输出验证和重试机制的代码",
                    code: "import json\n\ndef call_with_validation(prompt, model_fn, max_retries=3):\n    \"\"\"带输出验证的 API 调用\n    \n    Args:\n        prompt: 提示内容\n        model_fn: LLM 调用函数\n        max_retries: 最大重试次数\n    Returns:\n        dict: 解析后的 JSON 输出\n    \"\"\"\n    for attempt in range(max_retries):\n        response = model_fn(prompt)\n        \n        try:\n            # 尝试解析为 JSON\n            result = json.loads(response)\n            return result\n        except json.JSONDecodeError:\n            # 在提示中添加更明确的格式要求\n            prompt = prompt + \"\\n\\n注意：请只输出有效的 JSON 格式，不要包含其他文字。\"\n    \n    raise ValueError(____)",
                    answer: "\"无法生成有效的 JSON 输出\"",
                    explanation: "验证-重试机制在解析失败时将格式错误信息反馈到提示中，引导模型修正输出格式，多次重试直到成功或达到最大次数。",
                    difficulty: 2
                }
            ]
        }
    },

    /* ================================================================
     * 9. Building Systems with ChatGPT API (DeepLearning.AI)
     *    Topics: API chains, evaluation, deployment, workflow
     *            orchestration, error handling, monitoring
     * ================================================================ */
    "Building Systems with ChatGPT API": {
        courseId: "building-systems-chatgpt",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "buildsys-mid-c-1",
                    question: "在使用 ChatGPT API 构建系统时，"API 链"（Chaining）的含义是什么？",
                    options: ["多次调用同一个 API", "将多个 LLM 调用串联起来，前一步的输出作为后一步的输入", "并行调用多个 API", "缓存 API 响应"],
                    answer: 1,
                    explanation: "API 链是将复杂任务分解为多个子步骤，每个步骤调用一次 LLM，前一步的输出作为后一步的输入上下文，逐步完成完整任务。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-c-2",
                    question: "在构建 LLM 系统时，为什么要对用户输入进行预处理？",
                    options: ["没有必要", "标准化输入格式、过滤有害内容、提取关键信息", "减少 API 成本", "加速模型推理"],
                    answer: 1,
                    explanation: "预处理步骤包括：标准化输入格式（如去除多余空格）、过滤有害内容、提取和分类用户意图、检查输入长度限制等，确保系统稳定运行。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-c-3",
                    question: "在 LLM 系统中实现"检查"（Check）步骤的目的是什么？",
                    options: ["加速输出", "在输出到达用户前验证内容的安全性和正确性", "减少 token 使用", "缓存结果"],
                    answer: 1,
                    explanation: "检查步骤在 LLM 输出后、返回给用户前，验证输出是否包含有害内容、是否符合格式要求、是否与输入相关等，是安全防线的重要一环。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-c-4",
                    question: "评估 LLM 系统输出质量时，以下哪种方法最可靠？",
                    options: ["只看输出长度", "建立评估标准并使用人工和自动评估相结合的方法", "随机抽样", "只用自动指标"],
                    answer: 1,
                    explanation: "可靠的评估需要定义明确的质量标准（相关性、正确性、安全性等），结合自动指标（如 BLEU、ROUGE）和人工评估，形成系统的评估体系。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-c-5",
                    question: "在 LLM 系统中，"系统消息"（System Message）的最佳实践是什么？",
                    options: ["不使用系统消息", "在系统消息中明确定义角色、任务范围和输出约束", "在系统消息中放置所有示例", "系统消息越短越好"],
                    answer: 1,
                    explanation: "系统消息应清晰定义 AI 的角色定位、能力范围、输出格式和行为约束，作为整个系统的控制基础，后续对话在此框架内进行。",
                    difficulty: 1
                },
                {
                    id: "buildsys-mid-c-6",
                    question: "OpenAI API 的 function calling 功能在系统构建中的作用是什么？",
                    options: ["定义新的 API 端点", "让 LLM 以结构化方式请求调用外部函数或 API", "创建自定义模型", "管理用户权限"],
                    answer: 1,
                    explanation: "Function calling 让 LLM 输出结构化的函数调用请求（函数名和参数），由应用层执行实际调用并返回结果，实现 LLM 与外部系统的安全交互。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-c-7",
                    question: "在 LLM 系统中实现输入分类器的主要作用是什么？",
                    options: ["加速推理", "将用户输入路由到不同的处理流程，实现差异化处理", "增加输出长度", "减少 API 调用"],
                    answer: 1,
                    explanation: "输入分类器识别用户意图和任务类型，将不同类型的请求路由到专门的处理流程（如不同 prompt、不同工具），提高处理效率和准确性。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-c-8",
                    question: "在生产环境中部署 LLM 系统时，错误处理策略应该包括什么？",
                    options: ["忽略所有错误", "重试机制、降级策略、超时处理和用户友好的错误消息", "直接崩溃", "返回空响应"],
                    answer: 1,
                    explanation: "完善的错误处理包括：API 超时重试、返回默认值或缓存响应（降级）、限制重试次数、记录错误日志、返回用户友好的错误提示。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-c-9",
                    question: "对话历史管理在多轮对话系统中的重要性是什么？",
                    options: ["不重要", "保持对话连贯性，但需要控制 token 使用量避免超出上下文限制", "增加输出长度", "减少响应时间"],
                    answer: 1,
                    explanation: "对话历史管理需要在保持上下文连贯性和控制 token 消耗之间取得平衡，常用策略包括滑动窗口、摘要压缩和重要信息提取。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-c-10",
                    question: "在 LLM 系统中使用"防护栏"（Guardrails）的主要目的是什么？",
                    options: ["加速生成", "确保系统输出安全、合规和高质量", "减少成本", "增加输出多样性"],
                    answer: 1,
                    explanation: "防护栏是一系列安全检查机制，包括输入过滤、输出验证、内容审核、PII 检测等，确保系统在各种情况下都能安全可靠地运行。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "buildsys-mid-f-1",
                    question: "LLM 系统的典型架构包括：输入分类、____处理、输出检查三个核心步骤。",
                    answer: "提示",
                    explanation: "系统架构三步骤：先分类输入类型，然后根据分类结果构建合适的提示并调用 LLM，最后对输出进行安全和质量检查。",
                    difficulty: 1
                },
                {
                    id: "buildsys-mid-f-2",
                    question: "API 链可以将复杂任务____为多个更简单的子任务。",
                    answer: "分解",
                    explanation: "通过将复杂任务分解为多个简单子任务，每个子任务用专门的 prompt 处理，可以提高整体系统的准确性和可控性。",
                    difficulty: 1
                },
                {
                    id: "buildsys-mid-f-3",
                    question: "在 LLM 系统中，____评估用于衡量输出是否符合预期的质量标准。",
                    answer: "人工",
                    explanation: "人工评估由人类评审员根据预定义标准评估 LLM 输出质量，虽然成本高但评估最准确，常用于建立自动评估的基准。",
                    difficulty: 1
                },
                {
                    id: "buildsys-mid-f-4",
                    question: "Function Calling 输出的结构化格式通常为 JSON 格式的____和参数。",
                    answer: "函数名",
                    explanation: "Function calling 让 LLM 输出包含函数名和参数的结构化 JSON，应用层解析后执行对应函数，实现安全的工具调用。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-f-5",
                    question: "对话历史的____策略可以通过摘要旧对话来减少 token 使用量。",
                    answer: "压缩",
                    explanation: "上下文压缩将较长的对话历史进行摘要或提取关键信息，保留重要上下文的同时减少 token 占用。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-f-6",
                    question: "LLM 系统的部署策略通常包括 A/B 测试和____发布。",
                    answer: "灰度",
                    explanation: "灰度发布（Canary Release）先将新版本部署到少量用户，验证稳定后再逐步扩大范围，降低全量发布的风险。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-f-7",
                    question: "在系统设计中，将 LLM 的输出和用户反馈记录下来可以用于后续的____优化。",
                    answer: "迭代",
                    explanation: "通过收集和分析用户反馈（点赞、修改、投诉等），可以发现系统不足，迭代优化 prompt、工作流和防护栏。",
                    difficulty: 1
                },
                {
                    id: "buildsys-mid-f-8",
                    question: "使用 LangChain 等框架可以简化 LLM 系统的____和管理。",
                    answer: "组件",
                    explanation: "LangChain 等框架提供了模块化的组件（提示模板、链、工具、记忆等），简化了 LLM 系统的组件编排和状态管理。",
                    difficulty: 1
                },
                {
                    id: "buildsys-mid-f-9",
                    question: "对 LLM 系统进行监控可以及时发现____和性能下降。",
                    answer: "异常",
                    explanation: "系统监控跟踪响应时间、错误率、输出质量指标等，及时发现异常行为（如模型 API 变更导致的输出变化）和性能退化。",
                    difficulty: 1
                },
                {
                    id: "buildsys-mid-f-10",
                    question: "在生产环境中，对 LLM 输出进行____过滤是防止有害内容的关键步骤。",
                    answer: "内容",
                    explanation: "内容过滤通过关键词检测、分类模型和安全 API 等手段，自动检测和过滤输出中的有害、违规或不适当内容。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "buildsys-mid-code-1",
                    question: "补全以下实现输入分类和路由的代码",
                    code: "import openai\n\ndef classify_and_route(user_input):\n    \"\"\"根据用户输入的类型路由到不同处理流程\n    \n    Args:\n        user_input: 用户输入文本\n    Returns:\n        str: 处理结果\n    \"\"\"\n    # 第一步：使用 LLM 分类输入类型\n    classification_prompt = f\"\"\"请将以下用户输入分类为以下类型之一：
1. question - 知识问答
2. task - 执行任务请求
3. complaint - 投诉或反馈
4. chat - 闲聊

用户输入：{user_input}
类型：\"\"\"\n    \n    response = openai.ChatCompletion.create(\n        model=\"gpt-4\",\n        messages=[{\"role\": \"user\", \"content\": classification_prompt}],\n        temperature=0, max_tokens=20\n    )\n    input_type = response.choices[0].message.content.strip()\n    \n    # 第二步：根据分类结果路由到不同处理流程\n    if input_type == \"task\":\n        return process_task(user_input)\n    elif input_type == \"question\":\n        return ____\n    else:\n        return general_chat(user_input)",
                    answer: "process_question(user_input)",
                    explanation: "分类-路由架构先用轻量 LLM 调用分类输入类型（低成本），然后根据类型路由到专门的处理函数（不同 prompt 和参数），实现差异化处理。",
                    difficulty: 2
                },
                {
                    id: "buildsys-mid-code-2",
                    question: "补全以下实现输出检查和安全过滤的代码",
                    code: "def check_output(user_input, llm_output, safety_model_fn):\n    \"\"\"检查 LLM 输出的安全性和质量\n    \n    Args:\n        user_input: 原始用户输入\n        llm_output: LLM 生成的输出\n        safety_model_fn: 安全检测模型函数\n    Returns:\n        dict: 检查结果 {\"safe\": bool, \"output\": str, \"issues\": list}\n    \"\"\"\n    issues = []\n    \n    # 检查 1：内容安全\n    is_safe = safety_model_fn(llm_output)\n    if not is_safe:\n        issues.append(\"内容安全检查未通过\")\n    \n    # 检查 2：相关性检查\n    if len(llm_output) < 10:\n        issues.append(\"输出过短，可能缺乏有用信息\")\n    \n    # 检查 3：格式检查\n    if \"ERROR\" in llm_output:\n        issues.append(\"输出包含错误标记\")\n    \n    # 返回检查结果\n    return {\n        \"safe\": ____,\n        \"output\": llm_output if is_safe else \"抱歉，我无法提供该回答。\",\n        \"issues\": issues\n    }",
                    answer: "len(issues) == 0 and is_safe",
                    explanation: "输出检查综合考虑内容安全、信息质量和格式正确性。只有所有检查都通过时才标记为安全，否则用安全的默认回复替代。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "buildsys-final-c-1",
                    question: "在构建生产级 LLM 系统时，"评估管道"（Evaluation Pipeline）的作用是什么？",
                    options: ["训练新模型", "系统性地测试和量化系统在各种场景下的表现", "缓存 API 响应", "管理用户会话"],
                    answer: 1,
                    explanation: "评估管道包括自动评估指标、人工评估、回归测试和 A/B 测试，系统性地量化系统在准确性、安全性、延迟等维度的表现。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-c-2",
                    question: "LLM 系统中"提示模板化"（Prompt Templating）的优势是什么？",
                    options: ["加速模型训练", "将 prompt 与代码分离，支持版本管理和 A/B 测试", "减少 API 成本", "增加模型参数"],
                    answer: 1,
                    explanation: "提示模板化将 prompt 提取为独立的模板文件，支持版本控制、快速迭代、A/B 测试不同版本，以及非技术人员参与 prompt 优化。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-c-3",
                    question: "在 LLM 系统中，如何有效处理 API 速率限制？",
                    options: ["忽略限制", "实现指数退避重试、请求排队和速率限制器", "减少系统功能", "使用更大的模型"],
                    answer: 1,
                    explanation: "有效策略包括：指数退避重试（失败后等待时间翻倍）、请求队列管理、速率限制器控制并发、缓存重复请求的结果。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-c-4",
                    question: "LLM 系统中的"可观测性"（Observability）包括哪些方面？",
                    options: ["只看最终输出", "日志记录、指标监控、分布式追踪和告警", "只监控错误", "只记录用户输入"],
                    answer: 1,
                    explanation: "可观测性包括：结构化日志（记录输入输出）、性能指标（延迟、吞吐量、错误率）、分布式追踪（请求在各组件间的流转）、告警机制。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-c-5",
                    question: "在构建多步骤 LLM 工作流时，"人工介入"（Human-in-the-Loop）点应该设置在哪些位置？",
                    options: ["不需要人工介入", "关键决策点和高风险操作前", "每个步骤都需要", "只在错误时"],
                    answer: 1,
                    explanation: "人工介入应设置在关键决策点（如执行数据库修改、发送外部邮件前）和高风险输出确认环节，平衡自动化效率和安全控制。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-c-6",
                    question: "LLM 系统的成本优化策略不包括以下哪项？",
                    options: ["缓存常见请求的结果", "使用更小的模型处理简单任务", "增加每次请求的 token 数量", "优化 prompt 减少 token 使用"],
                    answer: 2,
                    explanation: "成本优化包括：缓存命中、模型路由（简单任务用小模型）、prompt 精简、批量处理、streaming 等。增加 token 数量会增加成本。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-c-7",
                    question: "在 LLM 系统中实现"回退机制"（Fallback）的场景是什么？",
                    options: ["每次都触发", "当主模型 API 调用失败或超时时，自动切换到备选方案", "用于缓存", "用于日志记录"],
                    answer: 1,
                    explanation: "回退机制在主模型 API 不可用（超时、限流、错误）时自动切换到备选模型或预定义的默认响应，保证系统的可用性。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-c-8",
                    question: "关于 LLM 系统的迭代改进流程，以下哪个最合理？",
                    options: ["部署后不再更新", "收集用户反馈 -> 分析失败案例 -> 优化 prompt/工作流 -> 重新评估 -> 重新部署", "只在出错时更新", "每周自动更新"],
                    answer: 1,
                    explanation: "持续改进流程：收集用户反馈和系统指标 -> 分析失败案例和边缘情况 -> 优化 prompt、工具和工作流 -> 通过评估管道验证 -> 安全部署。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-c-9",
                    question: "在 LLM 系统中实现缓存的主要价值是什么？",
                    options: ["增加延迟", "减少重复 API 调用，降低成本和响应时间", "增加输出多样性", "提高模型准确率"],
                    answer: 1,
                    explanation: "缓存存储之前请求的结果，对于相同或相似的输入直接返回缓存结果，避免重复 API 调用，显著降低成本和响应延迟。",
                    difficulty: 1
                },
                {
                    id: "buildsys-final-c-10",
                    question: "在构建 LLM 系统时，如何处理模型 API 版本更新带来的风险？",
                    options: ["总是使用最新版本", "在新版本上进行回归测试后再切换，保留回退能力", "忽略版本更新", "完全重新构建系统"],
                    answer: 1,
                    explanation: "版本更新管理：在新版本上运行回归测试 -> 验证输出质量无退化 -> 灰度切换 -> 监控关键指标 -> 完全迁移。同时保留快速回退到旧版本的能力。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "buildsys-final-f-1",
                    question: "LLM 系统的可观测性需要记录输入、输出和____的完整链路。",
                    answer: "处理过程",
                    explanation: "完整的可观测性需要记录从用户输入到最终输出的完整链路：输入分类结果、中间 prompt、LLM 原始输出、检查结果等。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-f-2",
                    question: "提示模板的____管理允许团队协作优化 prompt 并追踪变更历史。",
                    answer: "版本",
                    explanation: "版本管理（如 Git）允许追踪 prompt 的每次修改，支持团队协作、回滚到旧版本、A/B 测试不同版本的效果。",
                    difficulty: 1
                },
                {
                    id: "buildsys-final-f-3",
                    question: "在 LLM 系统中，____指标包括响应时间、吞吐量和错误率。",
                    answer: "性能",
                    explanation: "性能指标监控系统的技术健康状态：延迟（P50/P95/P99）、每秒请求数（吞吐量）、错误率（4xx/5xx）、API 调用成功率等。",
                    difficulty: 1
                },
                {
                    id: "buildsys-final-f-4",
                    question: "LLM 系统中的批量处理可以将多个请求合并以提高 API____。",
                    answer: "吞吐量",
                    explanation: "批量处理将多个相似请求合并为一个 API 调用（如 batch completions），减少网络开销，提高整体吞吐量。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-f-5",
                    question: "在生产环境中，对用户输入和 LLM 输出的____是满足隐私合规要求的关键。",
                    answer: "脱敏",
                    explanation: "数据脱敏包括去除或替换个人身份信息（PII），在日志和存储中保护用户隐私，满足 GDPR 等法规要求。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-f-6",
                    question: "LLM 系统中的模型____策略根据任务复杂度选择不同规模的模型。",
                    answer: "路由",
                    explanation: "模型路由先评估任务复杂度，简单任务用小模型（低成本、低延迟），复杂任务用大模型（高质量），实现成本和质量的平衡。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-f-7",
                    question: "指数退避重试策略中，每次重试的等待时间会____增长。",
                    answer: "指数",
                    explanation: "指数退避（Exponential Backoff）：第 n 次重试等待 2^n * base_time，避免在 API 恢复前发送大量重试请求导致"惊群效应"。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-f-8",
                    question: "在 LLM 系统评估中，____测试用于确保修改不破坏现有功能。",
                    answer: "回归",
                    explanation: "回归测试在每次系统修改后运行已有的测试用例，确保新改动不会降低现有功能的质量和安全性。",
                    difficulty: 1
                },
                {
                    id: "buildsys-final-f-9",
                    question: "构建 LLM 系统时，将不同功能模块化可以提高系统的____性和可维护性。",
                    answer: "可扩展",
                    explanation: "模块化设计将分类、处理、检查等功能分离为独立模块，便于单独升级、替换和扩展，降低系统耦合度。",
                    difficulty: 1
                },
                {
                    id: "buildsys-final-f-10",
                    question: "在 LLM 系统中，对敏感操作实施____机制可以防止意外的破坏性行为。",
                    answer: "确认",
                    explanation: "确认机制在执行敏感操作（如删除数据、发送外部邮件）前要求用户确认，增加安全缓冲，防止自动化系统的误操作。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "buildsys-final-code-1",
                    question: "补全以下实现带重试和超时的 API 调用包装器的代码",
                    code: "import time\nimport openai\n\ndef robust_api_call(messages, model=\"gpt-4\", max_retries=3, timeout=30):\n    \"\"\"带重试和超时机制的 API 调用\n    \n    Args:\n        messages: 消息列表\n        model: 模型名称\n        max_retries: 最大重试次数\n        timeout: 超时秒数\n    Returns:\n        str: API 响应内容\n    \"\"\"\n    for attempt in range(max_retries):\n        try:\n            response = openai.ChatCompletion.create(\n                model=model,\n                messages=messages,\n                timeout=timeout\n            )\n            return response.choices[0].message.content\n            \n        except openai.error.RateLimitError:\n            # 速率限制：指数退避\n            wait_time = 2 ** attempt\n            print(f\"速率限制，等待 {wait_time} 秒后重试...\")\n            time.sleep(wait_time)\n            \n        except openai.error.Timeout:\n            print(f\"请求超时，第 {attempt + 1} 次重试...\")\n            \n        except Exception as e:\n            print(f\"未知错误: {e}\")\n            if attempt == max_retries - 1:\n                ____\n    \n    return \"抱歉，服务暂时不可用，请稍后再试。\"",
                    answer: "raise",
                    explanation: "对于非重试异常或达到最大重试次数时，应该抛出异常或返回安全的默认消息。速率限制使用指数退避避免频繁重试。",
                    difficulty: 2
                },
                {
                    id: "buildsys-final-code-2",
                    question: "补全以下实现基于相似度的缓存系统的代码",
                    code: "from difflib import SequenceMatcher\nimport hashlib\n\nclass SimpleCache:\n    def __init__(self, similarity_threshold=0.9):\n        self.cache = {}\n        self.threshold = similarity_threshold\n    \n    def _normalize(self, text):\n        \"\"\"标准化输入文本\"\"\"\n        return text.strip().lower()\n    \n    def _get_key(self, text):\n        \"\"\"生成精确匹配的哈希键\"\"\"\n        return hashlib.md5(self._normalize(text).encode()).hexdigest()\n    \n    def _similarity(self, a, b):\n        \"\"\"计算两个文本的相似度\"\"\"\n        return SequenceMatcher(None, a, b).ratio()\n    \n    def get(self, query):\n        \"\"\"获取缓存结果，支持模糊匹配\"\"\"\n        # 精确匹配\n        key = self._get_key(query)\n        if key in self.cache:\n            return self.cache[key]\n        \n        # 模糊匹配\n        norm_query = self._normalize(query)\n        for cached_key, (cached_query, response) in self.cache.items():\n            if self._similarity(norm_query, cached_query) >= ____:\n                return response\n        \n        return None\n    \n    def set(self, query, response):\n        \"\"\"存储新的缓存条目\"\"\"\n        key = self._get_key(query)\n        self.cache[key] = (self._normalize(query), response)",
                    answer: "self.threshold",
                    explanation: "缓存系统先尝试精确匹配（哈希查找），失败后尝试模糊匹配（相似度 >= 阈值），在输入有轻微变化时仍能命中缓存。",
                    difficulty: 2
                }
            ]
        }
    },

    /* ================================================================
     * 10. Stable Diffusion (Hugging Face)
     *     Topics: diffusion models, text-to-image, pipeline usage,
     *             ControlNet, img2img, schedulers, fine-tuning
     * ================================================================ */
    "Stable Diffusion": {
        courseId: "stable-diffusion-hf",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "sd-mid-c-1",
                    question: "Hugging Face 的 Diffusers 库中，StableDiffusionPipeline 的核心组件不包括什么？",
                    options: ["VAE", "U-Net", "CLIP 文本编码器", "判别器网络"],
                    answer: 3,
                    explanation: "StableDiffusionPipeline 由 VAE（编码/解码）、U-Net（去噪）、CLIP 文本编码器（文本条件）三个核心组件构成，不包含判别器。",
                    difficulty: 1
                },
                {
                    id: "sd-mid-c-2",
                    question: "在 Hugging Face Diffusers 中，调度器（Scheduler）的作用是什么？",
                    options: ["管理 GPU 内存", "控制扩散模型的采样过程和噪声调度策略", "加载预训练权重", "处理文本输入"],
                    answer: 1,
                    explanation: "调度器负责管理扩散过程的噪声调度（beta schedule）和采样算法（如 DDIM、PNDM、Euler），不同的调度器在速度和质量间有不同的权衡。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-c-3",
                    question: "img2img（图像到图像）任务与 txt2img 的核心区别是什么？",
                    options: ["没有区别", "img2img 以真实图像作为起点进行去噪，而非从纯噪声开始", "img2img 不需要文本", "img2img 使用更大的模型"],
                    answer: 1,
                    explanation: "img2img 将真实图像先添加部分噪声（不完全去噪到纯噪声），再以文本为条件进行去噪生成，在保留原始图像结构的同时进行风格转换。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-c-4",
                    question: "ControlNet 的工作原理是什么？",
                    options: ["完全替换原始模型", "通过可训练的副本网络将结构条件注入原始 U-Net", "只修改文本编码器", "不需要额外训练"],
                    answer: 1,
                    explanation: "ControlNet 创建 U-Net 编码器的可训练副本，将边缘图、深度图等结构条件通过副本网络注入原始模型，实现对生成图像的精确空间控制。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-c-5",
                    question: "在使用 Stable Diffusion 时，negative prompt（负向提示）的作用是什么？",
                    options: ["描述不需要的元素，模型在生成时尽量避免这些特征", "完全忽略该参数", "与正向提示相同", "用于训练模型"],
                    answer: 0,
                    explanation: "Negative prompt 告诉模型在生成过程中应该避免的元素和特征（如'blurry, low quality'），通过引导去噪方向来改善生成质量。",
                    difficulty: 1
                },
                {
                    id: "sd-mid-c-6",
                    question: "Stable Diffusion 的 VAE 编码器将 512x512 的图像压缩到什么空间维度？",
                    options: ["512x512", "64x64", "256x256", "32x32"],
                    answer: 1,
                    explanation: "Stable Diffusion 的 VAE 将图像下采样 8 倍，512x512 的图像被编码为 64x64x4 的潜在表示，在这个低维空间中进行扩散过程。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-c-7",
                    question: "在 Diffusers 库中，从预训练模型加载 Stable Diffusion 最常用的方法是什么？",
                    options: ["手动下载所有文件", "使用 StableDiffusionPipeline.from_pretrained() 自动下载组件", "只下载 U-Net", "从头训练"],
                    answer: 1,
                    explanation: "Diffusers 提供了高级 API，from_pretrained() 方法会自动下载并加载 VAE、U-Net、tokenizer 和 text_encoder 所有组件。",
                    difficulty: 1
                },
                {
                    id: "sd-mid-c-8",
                    question: "在 Stable Diffusion 中，inference steps（推理步数）对生成结果有什么影响？",
                    options: ["步数越少质量越好", "更多步数通常带来更好的质量，但存在收益递减，且增加生成时间", "步数不影响质量", "步数只影响分辨率"],
                    answer: 1,
                    explanation: "更多推理步数让去噪过程更精细，通常提高生成质量，但超过一定步数后改善变得微乎其微。一般 20-50 步是一个好的平衡点。",
                    difficulty: 1
                },
                {
                    id: "sd-mid-c-9",
                    question: "LoRA 微调 Stable Diffusion 的优势是什么？",
                    options: ["需要微调所有参数", "只训练少量参数即可适应特定风格或角色，且易于切换", "训练需要数百小时", "只适用于 U-Net"],
                    answer: 1,
                    explanation: "LoRA 只在 U-Net 的注意力层旁添加少量可训练参数（约几 MB），可以快速微调 Stable Diffusion 适应特定风格，并且不同 LoRA 可以动态切换。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-c-10",
                    question: "Textual Inversion（文本反转）微调方法的核心思想是什么？",
                    options: ["微调整个模型", "学习一个新的文本嵌入向量来代表特定概念", "修改 VAE 架构", "只训练 U-Net"],
                    answer: 1,
                    explanation: "Textual Inversion 只训练一个新的 token 嵌入向量来代表特定风格、角色或物体，将该 token 加入提示中即可触发特定概念的生成。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "sd-mid-f-1",
                    question: "Stable Diffusion 是一种在____空间中运行的扩散模型，通过 VAE 压缩图像。",
                    answer: "潜在",
                    explanation: "Stable Diffusion 在 VAE 编码的低维潜在空间中运行扩散过程，比在像素空间直接操作计算效率高得多。",
                    difficulty: 1
                },
                {
                    id: "sd-mid-f-2",
                    question: "Hugging Face 的 ____库提供了使用扩散模型的高级 API。",
                    answer: "Diffusers",
                    explanation: "Diffusers 是 Hugging Face 开发的扩散模型库，提供了 StableDiffusionPipeline 等高级 API，以及调度器、训练工具等组件。",
                    difficulty: 1
                },
                {
                    id: "sd-mid-f-3",
                    question: "ControlNet 通过边缘图、深度图和____等条件来控制生成图像的空间结构。",
                    answer: "姿态",
                    explanation: "ControlNet 支持多种条件输入：Canny 边缘图、深度图（Depth）、人体姿态（OpenPose）、语义分割图等，实现精确的空间结构控制。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-f-4",
                    question: "在 Stable Diffusion 中，guidance scale 参数越高，生成结果与文本描述的____越强。",
                    answer: "一致性",
                    explanation: "guidance scale（如 7.5-15）控制条件引导的强度，值越高生成结果越严格遵循文本描述，但多样性和自然度可能下降。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-f-5",
                    question: "Stable Diffusion 的 CLIP 文本编码器将文本编码为维度为 77×768 的____序列。",
                    answer: "嵌入",
                    explanation: "CLIP 文本编码器将文本 prompt 编码为固定长度（77 token）的嵌入向量序列，每个 token 是 768 维的嵌入向量，用于条件控制 U-Net。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-f-6",
                    question: "img2img 中的 strength 参数控制对原始图像的____程度。",
                    answer: "破坏",
                    explanation: "strength 参数（0-1）控制添加噪声的程度：值越大，添加越多噪声，生成结果偏离原始图像越远；值越小，保留原始图像越多。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-f-7",
                    question: "LoRA 微调通过在 U-Net 的注意力层添加____分解的旁路矩阵来减少可训练参数。",
                    answer: "低秩",
                    explanation: "LoRA 在每个注意力层的 Q、K、V、O 矩阵旁添加低秩分解矩阵 A(r×d) 和 B(d×r)，只训练 A 和 B，大幅减少可训练参数。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-f-8",
                    question: "Stable Diffusion 的____调度器实现了 DDIM 的确定性采样过程。",
                    answer: "DDIM",
                    explanation: "DDIMScheduler 实现了 DDIM 的确定性采样算法，允许在相同初始噪声下生成确定性结果，支持跳步采样加速。",
                    difficulty: 2
                },
                {
                    id: "sd-mid-f-9",
                    question: "使用 Diffusers 生成图像时，设置 torch.float16 可以减少____使用量。",
                    answer: "显存",
                    explanation: "float16 精度（half precision）将模型权重和计算从 FP32 降为 FP16，几乎减半显存使用量，在消费级 GPU 上尤为重要。",
                    difficulty: 1
                },
                {
                    id: "sd-mid-f-10",
                    question: "文本反转（Textual Inversion）微调只需要训练约____个可训练参数（嵌入向量）。",
                    answer: "一个",
                    explanation: "Textual Inversion 只学习一个文本嵌入向量（512 或 768 个参数），极其轻量，可以在消费级 GPU 上用少量图像快速完成。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "sd-mid-code-1",
                    question: "补全以下使用 Diffusers 库生成图像的代码",
                    code: "from diffusers import StableDiffusionPipeline\nimport torch\n\n# 加载预训练的 Stable Diffusion 模型\npipe = StableDiffusionPipeline.from_pretrained(\n    \"stable-diffusion-v1-5/stable-diffusion-v1-5\",\n    torch_dtype=torch.float16\n)\npipe = pipe.to(\"cuda\")\n\ndef generate_image(prompt, negative_prompt=\"\", num_steps=30, guidance_scale=7.5):\n    \"\"\"使用 Stable Diffusion 生成图像\n    \n    Args:\n        prompt: 正向文本提示\n        negative_prompt: 负向提示\n        num_steps: 推理步数\n        guidance_scale: 引导强度\n    Returns:\n        生成的图像\n    \"\"\"\n    image = pipe(\n        prompt=prompt,\n        negative_prompt=negative_prompt,\n        num_inference_steps=____,\n        guidance_scale=guidance_scale\n    ).images[0]\n    return image",
                    answer: "num_steps",
                    explanation: "Diffusers Pipeline 接受文本提示、推理步数和引导强度等参数，返回生成的 PIL 图像对象。更多的推理步数通常带来更好的质量。",
                    difficulty: 1
                },
                {
                    id: "sd-mid-code-2",
                    question: "补全以下实现 img2img 功能的代码",
                    code: "from diffusers import StableDiffusionImg2ImgPipeline\nfrom PIL import Image\nimport torch\n\n# 加载 img2img 管道\npipe = StableDiffusionImg2ImgPipeline.from_pretrained(\n    \"stable-diffusion-v1-5/stable-diffusion-v1-5\",\n    torch_dtype=torch.float16\n)\npipe = pipe.to(\"cuda\")\n\ndef image_to_image(init_image, prompt, strength=0.75, guidance_scale=7.5):\n    \"\"\"将参考图像转换为新的风格\n    \n    Args:\n        init_image: 初始图像 (PIL Image)\n        prompt: 文本提示\n        strength: 转换强度 (0-1)\n        guidance_scale: 引导强度\n    Returns:\n        生成的图像\n    \"\"\"\n    # 确保图像尺寸正确（必须是 8 的倍数）\n    init_image = init_image.resize((512, 512))\n    \n    image = pipe(\n        prompt=prompt,\n        image=____,\n        strength=strength,\n        guidance_scale=guidance_scale\n    ).images[0]\n    return image",
                    answer: "init_image",
                    explanation: "img2img Pipeline 接受初始图像作为起点，strength 控制转换程度。初始图像会被添加噪声到 strength 指定的程度，然后以文本为条件去噪。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "sd-final-c-1",
                    question: "Stable Diffusion XL（SDXL）相比 SD 1.5 的主要改进是什么？",
                    options: ["使用完全不同的架构", "更大的 U-Net、双文本编码器和更精细的生成质量", "更快的推理速度", "只需要 5 步采样"],
                    answer: 1,
                    explanation: "SDXL 使用更大的 U-Net、CLIP ViT-L 和 OpenCLIP ViT-bigG 双文本编码器，在更高分辨率下生成更高质量和更符合提示的图像。",
                    difficulty: 2
                },
                {
                    id: "sd-final-c-2",
                    question: "在 Stable Diffusion 中实现图像修复（Inpainting）时，如何利用掩码信息？",
                    options: ["忽略掩码", "在每步去噪后将掩码外的区域恢复为原始图像像素", "只用掩码裁剪图像", "将掩码作为文本输入"],
                    answer: 1,
                    explanation: "Inpainting 在每步去噪后，将掩码标记为未修改区域的像素替换回原始图像值，只让模型在掩码区域（需要修复的区域）进行生成。",
                    difficulty: 2
                },
                {
                    id: "sd-final-c-3",
                    question: "SDXL Turbo 使用的对抗蒸馏（Adversarial Distillation）技术的目标是什么？",
                    options: ["提高分辨率", "实现 1-4 步即可生成高质量图像的实时生成", "减少模型大小", "改善文本理解"],
                    answer: 1,
                    explanation: "SDXL Turbo 通过对抗蒸馏训练，在 1-4 步采样即可生成可用质量的图像，实现接近实时的图像生成速度。",
                    difficulty: 3
                },
                {
                    id: "sd-final-c-4",
                    question: "在 Hugging Face 上共享和复用 Stable Diffusion 微调模型的标准格式是什么？",
                    options: ["自定义格式", "使用 Diffusers 格式将模型组件（VAE、U-Net、text_encoder）分文件夹存储", "只有权重文件", "使用 ONNX 格式"],
                    answer: 1,
                    explanation: "Diffusers 格式将模型组件分目录存储：unet/、vae/、text_encoder/、tokenizer/ 等，配合 model_index.json 索引文件，便于加载和共享。",
                    difficulty: 2
                },
                {
                    id: "sd-final-c-5",
                    question: "ControlNet 的 T2I-Adapter 相比原始 ControlNet 的优势是什么？",
                    options: ["控制更精确", "更轻量级的适配器，参数更少，推理更快", "不需要训练", "支持更多模态"],
                    answer: 1,
                    explanation: "T2I-Adapter 是 ControlNet 的轻量替代方案，使用更小的适配器网络（约 77M 参数 vs ControlNet 的 361M），在保持控制能力的同时减少计算开销。",
                    difficulty: 3
                },
                {
                    id: "sd-final-c-6",
                    question: "在使用 Stable Diffusion 构建应用时，模型量化（如 INT8）的主要好处是什么？",
                    options: ["提高生成质量", "减少显存使用和加速推理，使模型可以在消费级 GPU 上运行", "增加模型参数", "改善文本理解"],
                    answer: 1,
                    explanation: "INT8 量化将模型权重从 FP16 压缩为 INT8，显存使用减少约一半，推理速度提升，使 SD 模型可以在更少显存的消费级 GPU 上运行。",
                    difficulty: 2
                },
                {
                    id: "sd-final-c-7",
                    question: "多条件控制生成中，如何同时使用边缘图和深度图？",
                    options: ["只能使用一个条件", "加载多个 ControlNet 实例，分别处理不同条件后联合注入", "将条件拼接为文本", "使用不同的调度器"],
                    answer: 1,
                    explanation: "多条件控制通过加载多个 ControlNet 模型，每个处理一种条件输入，然后将它们的控制信号联合注入 U-Net，实现多维度的精确控制。",
                    difficulty: 3
                },
                {
                    id: "sd-final-c-8",
                    question: "Stable Diffusion 的 InstructPix2Pix 模型的功能是什么？",
                    options: ["只做文本到图像", "根据文本指令对已有图像进行编辑", "只做图像分类", "只做超分辨率"],
                    answer: 1,
                    explanation: "InstructPix2Pix 接受图像和文本指令（如'让天空变成夕阳色'），直接根据指令对图像进行语义级编辑，无需手动创建掩码。",
                    difficulty: 2
                },
                {
                    id: "sd-final-c-9",
                    question: "在生产环境中部署 Stable Diffusion 时，使用 TensorRT 加速的主要优势是什么？",
                    options: ["提高分辨率", "通过层融合和内核优化大幅提升推理速度", "减少训练时间", "增加模型精度"],
                    answer: 1,
                    explanation: "TensorRT 通过算子融合、内核自动调优和 FP16/INT8 量化等优化，将 Stable Diffusion 的推理速度提升 2-5 倍。",
                    difficulty: 2
                },
                {
                    id: "sd-final-c-10",
                    question: "IP-Adapter（图像提示适配器）的作用是什么？",
                    options: ["文本编码", "将参考图像的语义信息作为条件注入生成过程", "图像分类", "超分辨率"],
                    answer: 1,
                    explanation: "IP-Adapter 可以接受参考图像作为额外条件，提取图像的语义特征注入生成过程，实现以图生图、风格迁移等功能。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "sd-final-f-1",
                    question: "Stable Diffusion XL 使用____和 OpenCLIP 两个文本编码器来编码文本提示。",
                    answer: "CLIP ViT-L",
                    explanation: "SDXL 结合 CLIP ViT-L 和 OpenCLIP ViT-bigG 两个文本编码器，提供更丰富的文本语义表示，提升生成质量。",
                    difficulty: 2
                },
                {
                    id: "sd-final-f-2",
                    question: "图像修复（Inpainting）使用专门的____模型，在掩码区域进行条件生成。",
                    answer: "Inpainting",
                    explanation: "Inpainting 模型在 U-Net 中额外接收掩码和原始图像作为输入通道，专门训练用于在掩码区域进行上下文感知的图像修复。",
                    difficulty: 2
                },
                {
                    id: "sd-final-f-3",
                    question: "TensorRT 通过算子____和内核自动调优来加速 Stable Diffusion 的推理。",
                    answer: "融合",
                    explanation: "TensorRT 的算子融合（Operator Fusion）将多个小操作合并为一个 GPU 内核，减少内存访问和内核启动开销，显著提升推理速度。",
                    difficulty: 2
                },
                {
                    id: "sd-final-f-4",
                    question: "在 LoRA 微调 Stable Diffusion 时，学习率通常设置为____量级。",
                    answer: "1e-4",
                    explanation: "LoRA 微调通常使用 1e-4 到 1e-5 的学习率，配合 AdamW 优化器和 cosine 调度器，训练 1000-5000 步即可获得良好的效果。",
                    difficulty: 3
                },
                {
                    id: "sd-final-f-5",
                    question: "ControlNet 的训练数据通常包含输入条件-____对来学习条件控制映射。",
                    answer: "输出图像",
                    explanation: "ControlNet 通过大量的条件-图像对（如边缘图-真实图像、深度图-真实图像）训练副本网络学习条件到生成的映射。",
                    difficulty: 2
                },
                {
                    id: "sd-final-f-6",
                    question: "Tiled VAE 通过分块处理来支持____分辨率图像的生成和编码。",
                    answer: "高",
                    explanation: "Tiled VAE 将大图像分割为多个小块分别处理，然后无缝拼接，使得在有限显存下也能处理高分辨率图像。",
                    difficulty: 2
                },
                {
                    id: "sd-final-f-7",
                    question: "InstructPix2Pix 数据集通过____和图像编辑模型自动创建指令-编辑对。",
                    answer: "文本指令",
                    explanation: "InstructPix2Pix 数据集通过 GPT-3 生成文本编辑指令，再用 Stable Diffusion 的 img2img 管道执行编辑，自动创建大规模训练数据。",
                    difficulty: 3
                },
                {
                    id: "sd-final-f-8",
                    question: "Stable Diffusion 的模型合并（Model Merging）技术通过线性插值____来组合不同模型的能力。",
                    answer: "权重",
                    explanation: "模型合并通过将两个模型的权重进行线性插值组合（如 0.7 * 模型A + 0.3 * 模型B），创建兼具两者特点的新模型。",
                    difficulty: 2
                },
                {
                    id: "sd-final-f-9",
                    question: "使用 xformers 优化注意力计算可以显著减少 Stable Diffusion 的____使用。",
                    answer: "显存",
                    explanation: "xformers 提供了内存高效的注意力实现（Memory Efficient Attention），通过分块计算减少显存峰值使用，特别对长序列有益。",
                    difficulty: 2
                },
                {
                    id: "sd-final-f-10",
                    question: "Stable Diffusion 的____技术通过将模型权重从 FP16 压缩为 INT8 来减少显存占用。",
                    answer: "量化",
                    explanation: "INT8 量化将模型权重精度从 16 位降至 8 位，显存减半且推理加速，配合量化感知训练可保持较好的生成质量。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "sd-final-code-1",
                    question: "补全以下使用 ControlNet 进行条件控制生成的代码",
                    code: "from diffusers import StableDiffusionControlNetPipeline, ControlNetModel\nimport torch\n\n# 加载 ControlNet 模型（以 Canny 边缘为例）\ncontrolnet = ControlNetModel.from_pretrained(\n    \"lllyasviel/sd-controlnet-canny\",\n    torch_dtype=torch.float16\n)\n\n# 加载带 ControlNet 的管道\npipe = StableDiffusionControlNetPipeline.from_pretrained(\n    \"stable-diffusion-v1-5/stable-diffusion-v1-5\",\n    controlnet=controlnet,\n    torch_dtype=torch.float16\n).to(\"cuda\")\n\ndef generate_with_control(prompt, control_image, guidance_scale=7.5):\n    \"\"\"使用 ControlNet 条件控制生成图像\"\"\"\n    image = pipe(\n        prompt=prompt,\n        image=____,\n        num_inference_steps=30,\n        guidance_scale=guidance_scale\n    ).images[0]\n    return image",
                    answer: "control_image",
                    explanation: "ControlNet 管道在标准 Stable Diffusion 管道基础上增加 image 参数接收条件图像（如 Canny 边缘图），将结构条件注入生成过程。",
                    difficulty: 2
                },
                {
                    id: "sd-final-code-2",
                    question: "补全以下实现 LoRA 微调 Stable Diffusion 的训练代码片段",
                    code: "from diffusers import StableDiffusionPipeline\nfrom peft import LoraConfig, get_peft_model\nimport torch\n\n# 加载预训练模型\npipe = StableDiffusionPipeline.from_pretrained(\n    \"stable-diffusion-v1-5/stable-diffusion-v1-5\",\n    torch_dtype=torch.float16\n)\n\n# 配置 LoRA 参数\nlora_config = LoraConfig(\n    r=16,\n    lora_alpha=16,\n    target_modules=[\"to_q\", \"to_k\", \"to_v\", \"to_out.0\"],\n    lora_dropout=0.05,\n)\n\n# 将 LoRA 应用到 U-Net\npipe.unet = get_peft_model(pipe.unet, lora_config)\n\n# 训练循环\nfor epoch in range(num_epochs):\n    for batch in dataloader:\n        pixel_values = batch[\"pixel_values\"].to(\"cuda\")\n        input_ids = batch[\"input_ids\"].to(\"cuda\")\n        \n        # 前向传播\n        noise = torch.randn_like(pixel_values)\n        timesteps = torch.randint(0, 1000, (pixel_values.shape[0],))\n        \n        noisy_image = pipe.vae.encode(pixel_values).latent_dist.sample()\n        noisy_image = pipe.scheduler.add_noise(noisy_image, noise, timesteps)\n        \n        # 计算损失\n        model_pred = pipe.unet(noisy_image, timesteps, encoder_hidden_states=input_ids).sample\n        loss = torch.nn.functional.mse_loss(model_pred, ____, reduction=\"mean\")\n        \n        loss.backward()\n        optimizer.step()\n        optimizer.zero_grad()",
                    answer: "noise",
                    explanation: "LoRA 微调中，模型预测噪声并与实际添加的噪声计算 MSE 损失。LoRA 参数量极少（仅几 MB），可以在消费级 GPU 上快速训练。",
                    difficulty: 3
                }
            ]
        }
    },

    /* ================================================================
     * 11. Multimodal Machine Learning (CMU 11-777)
     *     Topics: multimodal representation, alignment, fusion,
     *             vision-language, cross-modal learning
     * ================================================================ */
    "Multimodal Machine Learning": {
        courseId: "multimodal-ml-cmu",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "mmml-mid-c-1",
                    question: "多模态学习中的"表示"（Representation）问题研究的是什么？",
                    options: ["如何存储数据", "如何将不同模态的数据编码为有效的特征表示", "如何加速训练", "如何部署模型"],
                    answer: 1,
                    explanation: "表示问题关注如何将文本、图像、音频等不同模态的数据编码为机器可处理的特征向量，是多模态学习的基础问题。",
                    difficulty: 1
                },
                {
                    id: "mmml-mid-c-2",
                    question: "多模态"对齐"（Alignment）的目标是什么？",
                    options: ["让所有模态使用相同的数据", "建立不同模态数据之间的对应关系", "减少模型参数", "加速推理"],
                    answer: 1,
                    explanation: "对齐问题关注如何找到不同模态数据之间的对应关系（如图像区域与文本词的对应、音频帧与视频帧的对应），是跨模态理解的关键。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-c-3",
                    question: "多模态"融合"（Fusion）策略可以分为哪几类？",
                    options: ["前融合、中融合、后融合", "前融合、后融合", "只有早期融合", "只有晚期融合"],
                    answer: 0,
                    explanation: "融合策略按融合时机分为：早期融合（输入层拼接）、中期融合（中间层交互）和晚期融合（分别处理后合并决策），各有优劣。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-c-4",
                    question: "CLIP（Contrastive Language-Image Pre-training）的训练目标是什么？",
                    options: ["生成图像", "学习图像和文本的对比对齐表示", "图像分类", "文本生成"],
                    answer: 1,
                    explanation: "CLIP 通过对比学习在 4 亿图文对上训练，使匹配的图像-文本对在嵌入空间中距离近，不匹配的对距离远，获得强大的跨模态表示。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-c-5",
                    question: "早期融合（Early Fusion）和晚期融合（Late Fusion）的主要区别是什么？",
                    options: ["没有区别", "早期融合在输入层拼接特征，晚期融合在决策层合并各模态的独立预测", "早期融合更准确", "晚期融合更简单"],
                    answer: 1,
                    explanation: "早期融合在输入层就将不同模态的特征拼接，允许跨模态交互但忽略模态差异；晚期融合各模态独立处理后合并，保持各模态的独立性。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-c-6",
                    question: "在多模态学习中，"翻译"（Translation）问题指的是什么？",
                    options: ["将代码翻译为文本", "将一种模态的信息转换为另一种模态（如图像描述生成）", "翻译不同语言", "压缩数据"],
                    answer: 1,
                    explanation: "翻译问题研究如何在不同模态之间进行信息转换，如图像描述（Image Captioning）、文本到图像生成、语音到文本等跨模态生成任务。",
                    difficulty: 1
                },
                {
                    id: "mmml-mid-c-7",
                    question: "视觉-语言模型中的注意力池化（Attention Pooling）的作用是什么？",
                    options: ["减少图像分辨率", "通过注意力机制从图像区域中选择与文本最相关的部分", "增加文本长度", "加速训练"],
                    answer: 1,
                    explanation: "注意力池化用文本表示作为 Query，图像区域特征作为 Key/Value，通过注意力机制选择与文本最相关的图像区域，实现跨模态对齐。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-c-8",
                    question: "对比损失（Contrastive Loss）在多模态学习中的作用是什么？",
                    options: ["分类任务", "拉近匹配的跨模态对、推远不匹配的对", "回归任务", "生成任务"],
                    answer: 1,
                    explanation: "对比损失（如 InfoNCE）通过最大化匹配对的相似度、最小化不匹配对的相似度来学习跨模态对齐表示，是 CLIP 等模型的核心损失函数。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-c-9",
                    question: "在图像描述（Image Captioning）中，注意力机制的应用是什么？",
                    options: ["不需要注意力", "在生成每个词时关注图像的不同区域", "只关注整张图像", "用于图像分类"],
                    answer: 1,
                    explanation: "视觉注意力机制在生成每个描述词时，动态关注图像的不同空间区域，使生成的描述更准确地对应图像内容。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-c-10",
                    question: "多模态学习中"协同学习"（Co-learning）的核心思想是什么？",
                    options: ["让一个模态学习另一个", "利用不同模态数据之间的互补性共同提升学习效果", "只使用最强的模态", "让模态互相竞争"],
                    answer: 1,
                    explanation: "协同学习利用不同模态数据之间的互补性和一致性信号，在标注数据不足时，用一个模态的监督信号辅助另一个模态的学习。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "mmml-mid-f-1",
                    question: "多模态学习研究的五个核心问题：表示、____、融合、翻译和协同学习。",
                    answer: "对齐",
                    explanation: "多模态学习的五大核心问题：表示（如何编码各模态）、对齐（如何建立对应关系）、融合（如何组合多模态信息）、翻译（模态间转换）、协同学习。",
                    difficulty: 1
                },
                {
                    id: "mmml-mid-f-2",
                    question: "CLIP 使用____学习方法在图像和文本之间学习对齐表示。",
                    answer: "对比",
                    explanation: "CLIP 使用对比学习（Contrastive Learning），最大化匹配图文对的余弦相似度，最小化不匹配对的相似度，学习通用的跨模态表示。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-f-3",
                    question: "Transformer 中的交叉注意力机制中，Q 来自一个模态，K 和 V 来自____模态。",
                    answer: "另一个",
                    explanation: "跨模态交叉注意力中，Q（Query）来自一个模态（如文本），K（Key）和 V（Value）来自另一个模态（如图像），实现跨模态信息交互。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-f-4",
                    question: "图像描述生成任务的评估指标通常使用____分数（BLEU/CIDEr/METEOR）。",
                    answer: "n-gram",
                    explanation: "图像描述质量通过 n-gram 匹配指标评估：BLEU（精确率）、CIDEr（TF-IDF 加权）、METEOR（考虑同义词和词干）等。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-f-5",
                    question: "多模态学习中的"模态间隙"（Modality Gap）指的是不同模态在嵌入空间中的____现象。",
                    answer: "分离",
                    explanation: "模态间隙指不同模态的表示在嵌入空间中倾向于聚集在不同的区域，即使经过对齐训练，仍存在系统性的分布差异。",
                    difficulty: 3
                },
                {
                    id: "mmml-mid-f-6",
                    question: "视觉问答（VQA）模型需要同时理解图像内容和自然语言____。",
                    answer: "问题",
                    explanation: "VQA 任务要求模型理解图像内容和文本问题，然后推理出正确答案，需要视觉理解和语言理解的深度结合。",
                    difficulty: 1
                },
                {
                    id: "mmml-mid-f-7",
                    question: "多模态预训练中，____目标（如掩码语言建模）与对比目标可以联合使用。",
                    answer: "生成",
                    explanation: "现代多模态模型（如 ALBEF）联合使用生成目标（掩码语言建模）和对比目标，同时获得生成能力和判别能力。",
                    difficulty: 3
                },
                {
                    id: "mmml-mid-f-8",
                    question: "视觉特征提取中，____（如 ViT）将图像分割为 patch 序列进行处理。",
                    answer: "Vision Transformer",
                    explanation: "ViT 将图像分割为固定大小的 patch（如 16×16），每个 patch 线性映射为一个 token，然后用标准 Transformer 编码器处理。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-f-9",
                    question: "音视频对齐需要在____维度上建立音频和视频帧的对应关系。",
                    answer: "时间",
                    explanation: "音视频对齐（Audio-Visual Alignment）在时间维度上建立同步关系，如将语音中的音素与视频中的口型运动对齐。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-f-10",
                    question: "多模态学习中的"零样本"（Zero-shot）分类利用____模态的标签信息进行跨模态迁移。",
                    answer: "文本",
                    explanation: "CLIP 等模型的零样本分类通过将类别名称编码为文本嵌入，与图像嵌入计算相似度来分类，无需在目标数据集上训练。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "mmml-mid-code-1",
                    question: "补全以下使用 CLIP 进行零样本图像分类的代码",
                    code: "import torch\nimport clip\nfrom PIL import Image\n\ndef zero_shot_classify(image_path, class_names, model, preprocess):\n    \"\"\"使用 CLIP 进行零样本图像分类\n    \n    Args:\n        image_path: 图像路径\n        class_names: 类别名称列表\n        model: CLIP 模型\n        preprocess: 图像预处理函数\n    Returns:\n        str: 预测的类别名称\n    \"\"\"\n    # 加载和预处理图像\n    image = preprocess(Image.open(image_path)).unsqueeze(0)\n    \n    # 将类别名称编码为文本嵌入\n    text_inputs = clip.tokenize([f\"a photo of a {name}\" for name in class_names])\n    \n    # 计算图像和文本嵌入\n    with torch.no_grad():\n        image_features = model.encode_image(image)\n        text_features = model.encode_text(text_inputs)\n        \n        # 计算相似度\n        image_features = image_features / image_features.norm(dim=-1, keepdim=True)\n        text_features = text_features / text_features.norm(dim=-1, keepdim=True)\n        similarities = (100.0 * image_features @ ____.T).softmax(dim=-1)\n    \n    # 返回最相似的类别\n    predicted_idx = similarities.argmax().item()\n    return class_names[predicted_idx]",
                    answer: "text_features",
                    explanation: "CLIP 零样本分类：将类别名称编码为文本嵌入，与图像嵌入计算余弦相似度，通过 softmax 得到概率分布，选择最匹配的类别。",
                    difficulty: 2
                },
                {
                    id: "mmml-mid-code-2",
                    question: "补全以下多模态对比学习损失函数（InfoNCE）的代码",
                    code: "import torch\nimport torch.nn.functional as F\n\ndef contrastive_loss(image_embeds, text_embeds, temperature=0.07):\n    \"\"\"计算图像-文本对比学习损失（InfoNCE）\n    \n    Args:\n        image_embeds: 图像嵌入 (batch_size, embed_dim)\n        text_embeds: 文本嵌入 (batch_size, embed_dim)\n        temperature: 温度参数\n    Returns:\n        float: 对比损失值\n    \"\"\"\n    # L2 归一化\n    image_embeds = F.normalize(image_embeds, dim=-1)\n    text_embeds = F.normalize(text_embeds, dim=-1)\n    \n    # 计算余弦相似度矩阵\n    logits = torch.mm(image_embeds, text_embeds.T) / temperature\n    \n    # 对角线元素是正样本对（匹配对）\n    labels = torch.arange(logits.shape[0], device=logits.device)\n    \n    # 双向对比损失：图像->文本 和 文本->图像\n    loss_i2t = F.cross_entropy(logits, ____)\n    loss_t2i = F.cross_entropy(logits.T, labels)\n    \n    return (loss_i2t + loss_t2i) / 2",
                    answer: "labels",
                    explanation: "InfoNCE 损失对 batch 中的匹配对计算交叉熵损失：对角线上的元素（i,i）是匹配对，其余是负样本。双向损失确保图像到文本和文本到图像的对齐。",
                    difficulty: 3
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "mmml-final-c-1",
                    question: "Florence 和 Flamingo 等视觉-语言模型的"上下文学习"（In-context Learning）能力指的是什么？",
                    options: ["在上下文中存储数据", "在 prompt 中提供少量示例就能适应新任务", "在 GPU 内存中缓存特征", "理解上下文语境"],
                    answer: 1,
                    explanation: "In-context Learning 指模型无需微调，仅通过在 prompt 中提供几个任务示例就能理解和执行新任务，是大规模多模态模型的涌现能力。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-c-2",
                    question: "视觉-语言对齐中，"软对齐"（Soft Alignment）与"硬对齐"的区别是什么？",
                    options: ["没有区别", "软对齐用注意力权重进行概率性匹配，硬对齐用一对一确定性匹配", "软对齐更简单", "硬对齐更灵活"],
                    answer: 1,
                    explanation: "软对齐通过注意力机制为每个元素分配概率权重，允许多对多的模糊匹配；硬对齐则强制一对一的确定性匹配，通常用于检测任务。",
                    difficulty: 3
                },
                {
                    id: "mmml-final-c-3",
                    question: "多模态大模型（如 GPT-4V）中"模态标记"（Modality Token）的作用是什么？",
                    options: ["标记数据类型", "将不同模态的数据转换为统一的 token 序列输入 Transformer", "标记输出格式", "选择模态"],
                    answer: 1,
                    explanation: "模态标记将图像 patch、音频帧等不同模态数据转换为与文本 token 相同格式的嵌入向量，使 Transformer 能统一处理多种模态。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-c-4",
                    question: "视频-语言理解中，时间对齐（Temporal Alignment）的挑战主要是什么？",
                    options: ["没有挑战", "视频帧和语言描述之间的时间粒度差异很大，需要跨粒度对齐", "只需要空间对齐", "不需要时间信息"],
                    answer: 1,
                    explanation: "视频帧通常是毫秒级的，而语言描述是秒级或更高粒度的，时间对齐需要在不同时间粒度间建立准确的对应关系，这是一个核心挑战。",
                    difficulty: 3
                },
                {
                    id: "mmml-final-c-5",
                    question: "多模态模型中的"模态 dropout"（Modality Dropout）训练策略的目的是什么？",
                    options: ["丢弃低质量数据", "随机屏蔽某些模态以增强模型在模态缺失情况下的鲁棒性", "减少参数", "加速训练"],
                    answer: 1,
                    explanation: "模态 dropout 在训练时随机屏蔽某些模态的输入，迫使模型不过度依赖单一模态，在推理时某模态缺失或噪声大时仍能正常工作。",
                    difficulty: 3
                },
                {
                    id: "mmml-final-c-6",
                    question: "在跨模态检索任务中，如何处理模态间的语义鸿沟？",
                    options: ["不需要处理", "通过共享嵌入空间将不同模态映射到统一的语义空间", "使用单独的数据库", "只做文本检索"],
                    answer: 1,
                    explanation: "跨模态检索通过训练模型将图像和文本映射到共享的语义嵌入空间，使得语义相似的跨模态数据在该空间中距离较近。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-c-7",
                    question: "多模态模型评估中，为什么单一指标往往不够？",
                    options: ["因为指标太简单", "因为多模态任务的评估需要考虑多个维度（准确性、流畅性、多样性等）", "因为没有好指标", "因为模型太强"],
                    answer: 1,
                    explanation: "多模态任务（如图像描述、视觉问答）的评估涉及多个维度：语义准确性、语言流畅性、视觉接地准确性、创造性等，需要多种指标综合评估。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-c-8",
                    question: "在多模态模型的可扩展性研究中，"模态专家"（Modality Expert）架构指的是什么？",
                    options: ["所有模态共用一个编码器", "每个模态有专门的编码器，通过门控机制组合各模态专家的输出", "只使用文本专家", "一个通用编码器处理所有模态"],
                    answer: 1,
                    explanation: "模态专家架构为每种模态设计专门的编码器（如视觉编码器、音频编码器），通过门控或注意力机制组合各专家的输出，兼顾专业化和融合。",
                    difficulty: 3
                },
                {
                    id: "mmml-final-c-9",
                    question: "LLaVA 等视觉-语言模型中，视觉投影层（Visual Projector）的作用是什么？",
                    options: ["投影图像到屏幕", "将视觉编码器的输出映射到语言模型的输入空间", "投影文本到图像空间", "增加分辨率"],
                    answer: 1,
                    explanation: "视觉投影层（通常是 MLP 或线性层）将视觉编码器（如 ViT）输出的特征维度映射到与语言模型嵌入维度兼容的大小，连接视觉和语言模态。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-c-10",
                    question: "多模态幻觉（Multimodal Hallucination）问题指的是什么？",
                    options: ["图像质量差", "模型生成的描述包含图像中实际不存在的对象或属性", "模型无法识别图像", "模型只关注文本"],
                    answer: 1,
                    explanation: "多模态幻觉指模型生成的文本描述包含与输入图像不一致的内容（如描述不存在的物体、错误的属性或关系），是多模态模型的重要安全问题。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "mmml-final-f-1",
                    question: "多模态模型的"模态融合"可以在输入层、中间层和____层三个位置进行。",
                    answer: "输出",
                    explanation: "融合位置：早期融合（输入层拼接）、中期融合（中间层交互注意力）、晚期融合（输出层分别预测后合并决策），选择取决于任务特性。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-f-2",
                    question: "CLIP 的对比学习使用____温度来控制 softmax 分布的尖锐程度。",
                    answer: "可学习",
                    explanation: "CLIP 中温度参数 tau 是可学习的，控制对比学习 softmax 的尖锐程度，优化过程中自动调整以获得最佳的正负样本区分能力。",
                    difficulty: 3
                },
                {
                    id: "mmml-final-f-3",
                    question: "视觉-语言预训练中，____目标让模型学会将图像区域与文本词对应。",
                    answer: "接地",
                    explanation: "视觉接地（Visual Grounding）目标训练模型将文本中提到的对象或区域与图像中的具体位置对应起来，增强视觉-语言对齐。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-f-4",
                    question: "多模态大模型中，视觉 token 通常通过视觉____器提取图像特征。",
                    answer: "编码",
                    explanation: "视觉编码器（如 ViT、SigLIP）将输入图像编码为一系列视觉 token，然后通过投影层与文本 token 拼接输入语言模型。",
                    difficulty: 1
                },
                {
                    id: "mmml-final-f-5",
                    question: "音频-视觉对齐中，同步检测任务需要在时间____上建立音频和视频的对应关系。",
                    answer: "序列",
                    explanation: "音频-视觉同步检测在时间序列上判断音频和视频是否同步，需要在帧级别建立精确的时间对应关系。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-f-6",
                    question: "多模态检索系统通过将不同模态映射到共享的____空间来实现跨模态搜索。",
                    answer: "嵌入",
                    explanation: "共享嵌入空间将图像、文本等不同模态映射到统一的向量空间，通过向量距离（如余弦相似度）实现跨模态检索。",
                    difficulty: 1
                },
                {
                    id: "mmml-final-f-7",
                    question: "多模态模型中的"模态缺失"（Missing Modality）问题可以通过____训练策略来缓解。",
                    answer: "模态丢弃",
                    explanation: "模态丢弃（Modality Dropout）在训练时随机屏蔽某些模态输入，迫使模型不过度依赖任何单一模态，增强对缺失模态的鲁棒性。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-f-8",
                    question: "视频理解模型需要同时建模空间____和时间动态。",
                    answer: "外观",
                    explanation: "视频理解需要空间建模（每帧的外观和空间关系）和时间建模（帧间的运动和变化），是时空联合学习的挑战。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-f-9",
                    question: "视觉-语言模型中的"视觉幻觉"问题可以通过引入视觉____机制来缓解。",
                    answer: "接地",
                    explanation: "通过训练模型将生成的文本与具体图像区域接地对应，验证每个描述是否在图像中有视觉依据，减少无中生有的幻觉。",
                    difficulty: 3
                },
                {
                    id: "mmml-final-f-10",
                    question: "多模态对比学习中，温度参数越大，softmax 分布越____。",
                    answer: "平滑",
                    explanation: "温度参数 tau 越大，softmax 输出越平滑（对所有负样本的关注越均匀）；tau 越小，分布越尖锐（更关注困难负样本）。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "mmml-final-code-1",
                    question: "补全以下实现多模态融合层（Cross-Modal Attention）的代码",
                    code: "import torch\nimport torch.nn as nn\nimport math\n\nclass CrossModalAttention(nn.Module):\n    def __init__(self, dim, num_heads=8):\n        super().__init__()\n        self.num_heads = num_heads\n        self.head_dim = dim // num_heads\n        self.scale = math.sqrt(self.head_dim)\n        \n        self.q_proj = nn.Linear(dim, dim)\n        self.k_proj = nn.Linear(dim, dim)\n        self.v_proj = nn.Linear(dim, dim)\n        self.out_proj = nn.Linear(dim, dim)\n    \n    def forward(self, query, key_value):\n        \"\"\"跨模态注意力\n        \n        Args:\n            query: 查询模态 (batch, seq_q, dim)\n            key_value: 键值模态 (batch, seq_kv, dim)\n        Returns:\n            融合后的查询表示\n        \"\"\"\n        B, N_q, D = query.shape\n        N_kv = key_value.shape[1]\n        \n        Q = self.q_proj(query).reshape(B, N_q, self.num_heads, self.head_dim).transpose(1, 2)\n        K = self.k_proj(key_value).reshape(B, N_kv, self.num_heads, self.head_dim).transpose(1, 2)\n        V = self.v_proj(key_value).reshape(B, N_kv, self.num_heads, self.head_dim).transpose(1, 2)\n        \n        attn = torch.matmul(Q, K.transpose(-2, -1)) / ____\n        attn = torch.softmax(attn, dim=-1)\n        \n        out = torch.matmul(attn, V)\n        out = out.transpose(1, 2).reshape(B, N_q, D)\n        return self.out_proj(out)",
                    answer: "self.scale",
                    explanation: "跨模态注意力中，Q 来自一个模态（如文本），K、V 来自另一个模态（如图像），通过缩放点积注意力实现跨模态信息交互和融合。",
                    difficulty: 2
                },
                {
                    id: "mmml-final-code-2",
                    question: "补全以下实现多模态模型推理时模态缺失处理的代码",
                    code: "import torch\n\nclass RobustMultimodalModel(nn.Module):\n    def __init__(self, text_encoder, image_encoder, fusion_layer):\n        super().__init__()\n        self.text_encoder = text_encoder\n        self.image_encoder = image_encoder\n        self.fusion_layer = fusion_layer\n    \n    def forward(self, text_ids=None, image=None, modality_mask=None):\n        \"\"\"处理模态缺失的前向传播\n        \n        Args:\n            text_ids: 文本 token IDs\n            image: 图像张量\n            modality_mask: 模态可用性标记 {\"text\": bool, \"image\": bool}\n        Returns:\n            输出表示\n        \"\"\"\n        text_feat = None\n        image_feat = None\n        \n        # 编码可用的模态\n        if text_ids is not None:\n            text_feat = self.text_encoder(text_ids)\n        \n        if image is not None:\n            image_feat = self.image_encoder(image)\n        \n        # 处理缺失模态：用零向量或可学习占位符替代\n        if text_feat is None and image_feat is not None:\n            # 只有图像，缺少文本\n            text_feat = torch.zeros_like(____)\n        elif image_feat is None and text_feat is not None:\n            # 只有文本，缺少图像\n            image_feat = torch.zeros_like(text_feat)\n        \n        # 融合可用模态\n        fused = self.fusion_layer(text_feat, image_feat)\n        return fused",
                    answer: "image_feat",
                    explanation: "模态缺失处理策略：用零向量或可学习的占位向量替代缺失模态的特征，在训练时通过模态丢弃模拟这种情况，使模型在推理时能处理部分模态缺失。",
                    difficulty: 3
                }
            ]
        }
    },

    /* ================================================================
     * 12. Generative AI for Everyone (DeepLearning.AI)
     *     Topics: generative AI overview, applications, limitations,
     *             ethics, business impact, prompt basics
     * ================================================================ */
    "Generative AI for Everyone": {
        courseId: "generative-ai-everyone",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "genai4all-mid-c-1",
                    question: "生成式 AI（Generative AI）与传统 AI（分析式 AI）的核心区别是什么？",
                    options: ["没有区别", "生成式 AI 能创造新内容（文本、图像等），分析式 AI 主要做预测和分类", "生成式 AI 更简单", "分析式 AI 更强大"],
                    answer: 1,
                    explanation: "生成式 AI 能根据输入生成新的文本、图像、代码等内容；分析式 AI 主要从数据中学习模式做预测和分类，不直接创建新内容。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-c-2",
                    question: "大型语言模型（LLM）的基本工作原理是什么？",
                    options: ["搜索互联网", "根据输入预测最可能的下一个词（token）", "存储所有知识", "执行程序代码"],
                    answer: 1,
                    explanation: "LLM 通过在大量文本上训练，学会了给定前文时预测下一个最可能的词，通过反复预测生成完整的文本回复。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-c-3",
                    question: "在商业应用中，生成式 AI 最直接的价值是什么？",
                    options: ["替代所有员工", "提高个人生产力和自动化重复性工作", "消除所有错误", "完全自主决策"],
                    answer: 1,
                    explanation: "生成式 AI 最直接的商业价值是提升个人和团队的生产力（如写作辅助、代码补全、数据分析），自动化重复性内容创建工作。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-c-4",
                    question: "使用生成式 AI 时，为什么需要注意"幻觉"（Hallucination）问题？",
                    options: ["它会显示幻灯片", "模型可能生成看似合理但实际不正确的信息", "模型会崩溃", "输出总是英文"],
                    answer: 1,
                    explanation: "幻觉是 LLM 的固有局限：模型可能编造事实、引用不存在的来源或生成不准确的信息，使用时需要人工验证关键信息。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-c-5",
                    question: "关于生成式 AI 的伦理考量，以下哪项是最重要的？",
                    options: ["选择最贵的模型", "确保公平性、隐私保护和避免有害输出", "只使用开源模型", "不需要考虑伦理"],
                    answer: 1,
                    explanation: "生成式 AI 的伦理考量包括：确保公平性（不歧视特定群体）、保护用户隐私、避免生成有害内容、透明使用 AI 等。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-c-6",
                    question: "生成式 AI 对工作场所的影响最准确的描述是什么？",
                    options: ["会完全替代人类工作", "改变工作方式——有些任务自动化，人类转向更高价值的工作", "对工作没有影响", "只有程序员受影响"],
                    answer: 1,
                    explanation: "生成式 AI 不是简单替代人类，而是改变工作方式：自动化重复性任务，让人类专注于创造性思考、战略决策和人际互动等更高价值的工作。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-c-7",
                    question: "以下哪项不是生成式 AI 的典型应用场景？",
                    options: ["文本摘要", "图像生成", "直接控制物理机器人运动（无中间系统）", "代码辅助编写"],
                    answer: 2,
                    explanation: "生成式 AI 擅长内容创作（文本、图像、代码），但直接控制物理机器人运动需要结合机器人学和控制系统，不是纯生成式 AI 的直接应用。",
                    difficulty: 2
                },
                {
                    id: "genai4all-mid-c-8",
                    question: "在使用 AI 生成内容时，为什么标注 AI 生成内容是重要的？",
                    options: ["不需要标注", "保持透明性和可信度，让用户知道内容来源", "降低生产成本", "加速生成"],
                    answer: 1,
                    explanation: "标注 AI 生成的内容有助于保持透明性、维护用户信任、遵守法规要求，并帮助人们在做重要决策时知道需要额外验证。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-c-9",
                    question: "什么是 AI 的"涌现能力"（Emergent Abilities）？",
                    options: ["编程实现的能力", "在达到一定模型规模后突然出现的新能力", "人类手动添加的能力", "训练时显式教的能力"],
                    answer: 1,
                    explanation: "涌现能力是当模型规模（参数、数据、计算）达到某个阈值后，突然出现的能力（如少样本学习、思维链推理），不是在较小模型中观察到的。",
                    difficulty: 2
                },
                {
                    id: "genai4all-mid-c-10",
                    question: "对于普通用户来说，学习使用生成式 AI 最实用的技能是什么？",
                    options: ["学习编程", "学习有效的提示工程（Prompt Engineering）", "学习数学", "学习硬件维修"],
                    answer: 1,
                    explanation: "对于普通用户，提示工程是最实用的技能：学会如何清晰、具体地描述需求，能显著提升从 AI 工具中获得的价值。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "genai4all-mid-f-1",
                    question: "生成式 AI 的核心能力是根据输入____新的文本、图像、代码等内容。",
                    answer: "生成",
                    explanation: "生成式 AI 的核心是创造能力：给定提示或条件，生成相应的文本回复、图像、音乐、代码等新内容。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-f-2",
                    question: "LLM 的"幻觉"问题指的是模型生成____的但不正确的内容。",
                    answer: "看似合理",
                    explanation: "幻觉内容通常语法流畅、逻辑连贯、看似合理，但实际包含不正确的事实或编造的信息，需要用户仔细验证。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-f-3",
                    question: "提示工程中，提供具体的上下文和____要求可以显著提高输出质量。",
                    answer: "格式",
                    explanation: "明确的上下文和格式要求帮助模型理解期望的输出结构和内容深度，减少歧义，提高输出的针对性和可用性。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-f-4",
                    question: "生成式 AI 在医疗领域的应用需要特别注意数据____和患者安全。",
                    answer: "隐私",
                    explanation: "医疗领域的 AI 应用涉及敏感的患者健康数据，必须严格遵守 HIPAA 等隐私法规，确保数据安全和患者隐私保护。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-f-5",
                    question: "大模型的训练通常需要大量的计算资源，主要使用____来加速训练。",
                    answer: "GPU",
                    explanation: "GPU 的并行计算能力使其成为训练大模型的首选硬件，NVIDIA 的 GPU（如 A100、H100）是当前大模型训练的主要算力来源。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-f-6",
                    question: "生成式 AI 的"上下文窗口"限制了模型一次能处理的____长度。",
                    answer: "输入",
                    explanation: "上下文窗口（Context Window）是模型一次能处理的最大 token 数量，包括输入和输出的总和，限制了对话和文档处理的长度。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-f-7",
                    question: "在使用 AI 辅助工作时，人类应始终对 AI 输出进行____判断和验证。",
                    answer: "批判性",
                    explanation: "AI 是辅助工具而非决策者，用户应对 AI 输出保持批判性思维，验证事实准确性，判断是否符合需求和价值观。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-f-8",
                    question: "生成式 AI 应用的开发通常包括选择模型、设计提示、测试优化和____部署。",
                    answer: "安全",
                    explanation: "安全部署包括内容过滤、隐私保护、监控告警、用户反馈收集等，确保 AI 应用在生产环境中安全可靠地运行。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-f-9",
                    question: "AI 的"偏见"主要来自训练数据中包含的____偏见和不均衡。",
                    answer: "社会",
                    explanation: "训练数据反映了现实世界中的社会偏见、刻板印象和群体不均衡，AI 模型会学习并可能放大这些偏见。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-f-10",
                    question: "学习使用生成式 AI 工具的最佳方式是通过实际____和持续学习。",
                    answer: "实践",
                    explanation: "生成式 AI 工具发展迅速，最佳学习方式是通过实际使用来积累经验，同时关注最新的发展和最佳实践。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "genai4all-mid-code-1",
                    question: "补全以下使用 OpenAI API 进行文本摘要的简单代码",
                    code: "import openai\n\ndef summarize_text(long_text):\n    \"\"\"使用 GPT 模型对长文本进行摘要\n    \n    Args:\n        long_text: 需要摘要的长文本\n    Returns:\n        str: 摘要结果\n    \"\"\"\n    response = openai.ChatCompletion.create(\n        model=\"gpt-4\",\n        messages=[\n            {\"role\": \"system\", \"content\": \"你是一个专业的文本摘要助手。请用简洁的语言总结要点。\"},\n            {\"role\": \"user\", \"content\": f\"请总结以下文本的要点：\\n\\n{long_text}\"}\n        ],\n        temperature=0.3,\n        max_tokens=____\n    )\n    return response.choices[0].message.content",
                    answer: "500",
                    explanation: "摘要任务通常设置较小的 max_tokens（如 500），temperature 较低（如 0.3）以获得稳定简洁的摘要输出，避免过多细节。",
                    difficulty: 1
                },
                {
                    id: "genai4all-mid-code-2",
                    question: "补全以下简单的提示模板函数",
                    code: "def build_prompt(task, text, language=\"Chinese\"):\n    \"\"\"构建通用的提示模板\n    \n    Args:\n        task: 任务类型（如 summarize, translate, analyze）\n        text: 输入文本\n        language: 输出语言\n    Returns:\n        str: 完整的提示\n    \"\"\"\n    templates = {\n        \"summarize\": f\"请用{language}简洁地总结以下内容的要点：\\n\\n{text}\",\n        \"translate\": f\"请将以下文本翻译成{language}：\\n\\n{text}\",\n        \"analyze\": f\"请用{language}分析以下文本的主题和关键观点：\\n\\n{text}\"\n    }\n    \n    if task in templates:\n        return ____\n    else:\n        return f\"请处理以下内容：\\n\\n{text}\"",
                    answer: "templates[task]",
                    explanation: "提示模板化通过预定义不同任务的提示模板，将用户输入填入模板中，提高提示的一致性和可维护性，也方便非技术人员使用。",
                    difficulty: 1
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "genai4all-final-c-1",
                    question: "在企业中引入生成式 AI 时，最关键的前期步骤是什么？",
                    options: ["直接使用最流行的模型", "评估具体业务场景和用例，确定 AI 能解决的实际问题", "购买最多的 GPU", "招聘最多的 AI 工程师"],
                    answer: 1,
                    explanation: "成功引入 AI 的关键是先识别具体的业务痛点和用例，评估 AI 能带来的实际价值，而非盲目追求最新技术。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-c-2",
                    question: "关于开源模型和闭源模型的选择，以下哪个考量是正确的？",
                    options: ["闭源总是更好", "开源模型允许本地部署和定制，闭源模型通常性能更强但依赖 API", "开源模型不能使用", "两者没有区别"],
                    answer: 1,
                    explanation: "开源模型可以本地部署、定制微调、保护隐私但性能可能略低；闭源模型（如 GPT-4）通常更强但需要 API 调用、存在数据隐私顾虑。",
                    difficulty: 2
                },
                {
                    id: "genai4all-final-c-3",
                    question: "在教育领域使用生成式 AI，最合理的定位是什么？",
                    options: ["完全替代教师", "作为辅助工具帮助个性化学习和减轻教师负担", "禁止所有使用", "只用于考试"],
                    answer: 1,
                    explanation: "AI 在教育中应定位为辅助工具：帮助学生个性化学习、提供即时反馈、辅助教师备课和评估，而非替代教师的核心角色。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-c-4",
                    question: "如何评估一个生成式 AI 应用是否成功？",
                    options: ["只看技术指标", "结合业务指标（效率提升、成本降低）和用户体验评估", "只看用户数量", "只看模型大小"],
                    answer: 1,
                    explanation: "成功的评估应结合技术指标（准确性、延迟）、业务指标（效率提升、成本节省、收入增长）和用户体验（满意度、可用性）。",
                    difficulty: 2
                },
                {
                    id: "genai4all-final-c-5",
                    question: "生成式 AI 对创意工作（如写作、设计）的影响最准确的描述是什么？",
                    options: ["完全替代创意工作者", "作为创意助手加速创意过程，人类提供方向和审美判断", "对创意工作没有帮助", "只能做基础设计"],
                    answer: 1,
                    explanation: "生成式 AI 是强大的创意工具，能快速生成初始方案和变体，但人类在方向把控、审美判断、情感表达和文化理解方面仍不可替代。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-c-6",
                    question: "在使用 AI 时，以下哪种情况最需要人工审核？",
                    options: ["生成社交媒体帖子", "生成医疗建议或法律意见", "生成天气预报", "翻译日常对话"],
                    answer: 1,
                    explanation: "医疗建议和法律意见涉及高风险决策和专业责任，AI 输出可能存在幻觉或不准确之处，必须经过专业人士审核后才能使用。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-c-7",
                    question: "RAG（检索增强生成）技术对普通用户的实际价值是什么？",
                    options: ["没有价值", "让 AI 能基于最新的和特定领域的知识回答问题，减少幻觉", "只对程序员有用", "让 AI 更慢"],
                    answer: 1,
                    explanation: "RAG 让 AI 在回答前先检索相关文档，基于实际数据源回答问题，显著减少幻觉，使 AI 能处理最新的和特定领域的信息。",
                    difficulty: 2
                },
                {
                    id: "genai4all-final-c-8",
                    question: "关于生成式 AI 的未来趋势，以下哪个预测最合理？",
                    options: ["AI 会完全自主", "AI 能力持续提升，与人类协作的模式成为主流", "AI 会很快衰退", "AI 只会用于娱乐"],
                    answer: 1,
                    explanation: "最合理的趋势是 AI 能力持续提升，但与人类协作（human-AI collaboration）而非完全替代的模式将成为主流。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-c-9",
                    question: "组织在采用生成式 AI 时应如何管理数据安全风险？",
                    options: ["不需要管理", "制定清晰的数据使用政策，对敏感数据进行脱敏处理", "完全禁止 AI", "只用免费工具"],
                    answer: 1,
                    explanation: "数据安全策略包括：制定 AI 使用政策、对敏感数据脱敏、选择合适的数据处理方式（本地 vs API）、定期安全审计。",
                    difficulty: 2
                },
                {
                    id: "genai4all-final-c-10",
                    question: "学习和适应生成式 AI 技术的最佳策略是什么？",
                    options: ["等待技术成熟再学", "持续学习、动手实践、关注发展动态、培养批判性思维", "只学一种工具", "完全不学"],
                    answer: 1,
                    explanation: "生成式 AI 发展快速，最佳策略是保持持续学习的习惯，通过实践积累经验，培养对 AI 输出的批判性判断能力。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "genai4all-final-f-1",
                    question: "企业引入生成式 AI 应从具体的____场景开始，逐步扩展应用范围。",
                    answer: "业务",
                    explanation: "企业应从明确的业务痛点出发（如客服自动化、文档摘要），验证 AI 价值后再逐步扩展到更多场景，避免盲目投入。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-f-2",
                    question: "生成式 AI 应用需要建立____机制来处理用户反馈和持续改进。",
                    answer: "反馈",
                    explanation: "反馈循环包括收集用户评价、分析失败案例、跟踪使用指标，将这些洞察用于优化提示、调整模型和改进工作流。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-f-3",
                    question: "在医疗和法律等高风险领域使用 AI 时，必须保持人类____决策。",
                    answer: "最终",
                    explanation: "高风险领域的 AI 应定位为辅助工具，提供参考信息和建议，但最终决策权必须由具备资质的人类专业人士掌握。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-f-4",
                    question: "生成式 AI 的训练数据包含版权内容引发的____争议需要持续关注。",
                    answer: "知识产权",
                    explanation: "AI 训练数据中包含受版权保护的内容引发了关于知识产权归属、合理使用、创作者权益等多方面的法律和伦理争议。",
                    difficulty: 2
                },
                {
                    id: "genai4all-final-f-5",
                    question: "多模态 AI 模型能够同时处理文本、图像和____等多种类型的数据。",
                    answer: "音频",
                    explanation: "多模态模型（如 GPT-4o）能同时理解和生成文本、图像、音频等多种模态的数据，提供更自然的交互体验。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-f-6",
                    question: "使用 AI 工具时，对敏感信息进行____处理是保护隐私的基本措施。",
                    answer: "脱敏",
                    explanation: "数据脱敏（如用 [姓名] 替代真实姓名）在使用 AI 工具处理文档时保护个人隐私，防止敏感信息通过 API 传输。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-f-7",
                    question: "生成式 AI 在代码辅助开发中的价值主要体现在提高开发____和减少重复编码。",
                    answer: "效率",
                    explanation: "AI 代码助手（如 GitHub Copilot）通过自动补全、生成代码片段、解释代码等方式显著提高开发效率，让开发者专注于核心逻辑。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-f-8",
                    question: "AI 应用的____设计对于确保用户获得一致和高质量的体验至关重要。",
                    answer: "工作流",
                    explanation: "好的工作流设计包括：输入预处理、提示构建、输出验证、异常处理等环节的合理编排，确保 AI 应用在各种场景下都能稳定运行。",
                    difficulty: 2
                },
                {
                    id: "genai4all-final-f-9",
                    question: "开源社区对生成式 AI 发展的贡献包括模型发布、工具开发和____分享。",
                    answer: "知识",
                    explanation: "开源社区通过发布模型权重、开发工具库（如 Hugging Face、LangChain）、分享教程和研究成果，推动了生成式 AI 的民主化发展。",
                    difficulty: 1
                },
                {
                    id: "genai4all-final-f-10",
                    question: "在评估 AI 应用效果时，A/B 测试是一种通过对比____组和实验组来量化改进的方法。",
                    answer: "对照",
                    explanation: "A/B 测试通过随机将用户分为对照组（使用旧方案）和实验组（使用 AI 方案），通过统计对比量化 AI 带来的实际改进。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "genai4all-final-code-1",
                    question: "补全以下实现简单 RAG（检索增强生成）管道的代码",
                    code: "import openai\n\ndef rag_query(question, documents):\n    \"\"\"简单的 RAG 管道：检索相关文档并增强生成\n    \n    Args:\n        question: 用户问题\n        documents: 文档列表\n    Returns:\n        str: 基于文档的增强回答\n    \"\"\"\n    # 第一步：检索相关文档\n    relevant_docs = retrieve_relevant(question, documents, top_k=3)\n    \n    # 第二步：构建增强提示\n    context = \"\\n\\n\".join([doc[\"content\"] for doc in relevant_docs])\n    augmented_prompt = f\"\"\"基于以下参考文档回答问题。如果文档中没有相关信息，请说明。

参考文档：
{context}

问题：{question}

回答：\"\"\"\n    \n    # 第三步：使用 LLM 生成回答\n    response = openai.ChatCompletion.create(\n        model=\"gpt-4\",\n        messages=[{\"role\": \"user\", \"content\": ____}],\n        temperature=0.3\n    )\n    return response.choices[0].message.content",
                    answer: "augmented_prompt",
                    explanation: "RAG 管道三步：检索相关文档 -> 将文档内容构建为增强提示 -> LLM 基于检索结果生成回答，结合了检索的准确性和生成的灵活性。",
                    difficulty: 2
                },
                {
                    id: "genai4all-final-code-2",
                    question: "补全以下实现用户反馈收集和分析的代码",
                    code: "from collections import defaultdict\nimport datetime\n\nclass FeedbackCollector:\n    def __init__(self):\n        self.feedback_data = []\n    \n    def add_feedback(self, query, response, rating, comment=\"\"):\n        \"\"\"收集用户反馈\"\"\"\n        self.feedback_data.append({\n            \"query\": query,\n            \"response\": response,\n            \"rating\": rating,\n            \"comment\": comment,\n            \"timestamp\": datetime.datetime.now()\n        })\n    \n    def analyze_feedback(self):\n        \"\"\"分析反馈数据，识别改进方向\"\"\"\n        if not self.feedback_data:\n            return {}\n        \n        # 计算平均评分\n        ratings = [f[\"rating\"] for f in self.feedback_data]\n        avg_rating = sum(ratings) / len(ratings)\n        \n        # 统计低分反馈（需要改进的案例）\n        low_rated = [f for f in self.feedback_data if f[\"rating\"] <= 2]\n        \n        analysis = {\n            \"total_feedback\": len(self.feedback_data),\n            \"avg_rating\": avg_rating,\n            \"low_rated_count\": len(low_rated),\n            \"improvement_needed\": ____\n        }\n        return analysis",
                    answer: "low_rated",
                    explanation: "反馈分析关注平均评分和低分案例。低分反馈（rating <= 2）是系统改进的重点，需要逐一分析失败原因来优化提示或工作流。",
                    difficulty: 1
                }
            ]
        }
    },

    /* ================================================================
     * 13. Music Generation with AI (Various)
     *     Topics: MusicGen, AudioLM, audio synthesis, music theory,
     *             codec models, conditioning, evaluation
     * ================================================================ */
    "Music Generation with AI": {
        courseId: "music-generation-ai",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "music-mid-c-1",
                    question: "Meta 的 MusicGen 模型的输入条件是什么？",
                    options: ["只接受文本描述", "接受文本描述、旋律参考或两者组合来控制音乐生成", "只接受 MIDI 文件", "只接受音频参考"],
                    answer: 1,
                    explanation: "MusicGen 支持多条件控制：可以使用文本描述（如'欢快的爵士乐'）、旋律参考音频或两者的组合来引导音乐生成。",
                    difficulty: 1
                },
                {
                    id: "music-mid-c-2",
                    question: "EnCodec 等音频神经编解码器在 AI 音乐生成中的作用是什么？",
                    options: ["播放音频", "将音频波形压缩为离散 token 序列，使音频生成可以使用语言模型", "分析音乐理论", "控制音量"],
                    answer: 1,
                    explanation: "EnCodec 将连续的音频波形通过残差向量量化（RVQ）压缩为离散 token 序列，使得音频生成问题可以转化为类似语言建模的序列预测问题。",
                    difficulty: 2
                },
                {
                    id: "music-mid-c-3",
                    question: "音频神经编解码器中的 RVQ（残差向量量化）为什么比单层 VQ 更好？",
                    options: ["没有区别", "多层量化逐步细化表示，保留更丰富的音频细节", "计算更简单", "需要更少的码本"],
                    answer: 1,
                    explanation: "RVQ 使用多层码本逐层量化残差信号，第一层捕获粗略结构，后续层逐步补充细节，比单层 VQ 能保留更多音频信息。",
                    difficulty: 3
                },
                {
                    id: "music-mid-c-4",
                    question: "MusicGen 使用的 Transformer 架构的特殊之处是什么？",
                    options: ["标准 Transformer", "使用自回归模型和可选的多条码本并行生成来加速", "使用 CNN", "使用 RNN"],
                    answer: 1,
                    explanation: "MusicGen 使用自回归 Transformer 逐 token 生成，同时引入了并行生成策略（如 delayed pattern），可同时生成多个 RVQ 层的 token，提高生成速度。",
                    difficulty: 2
                },
                {
                    id: "music-mid-c-5",
                    question: "在 AI 音乐生成中，保持音乐的长时间结构一致性是一个什么类型的挑战？",
                    options: ["硬件挑战", "全局一致性挑战——模型需要在几秒到几分钟内保持节奏、调性和风格", "存储挑战", "网络挑战"],
                    answer: 1,
                    explanation: "音乐的时间跨度比文本和图像长得多，模型需要在几秒到几分钟内保持一致的节奏、调性、和弦进程和整体风格，这是一个核心挑战。",
                    difficulty: 2
                },
                {
                    id: "music-mid-c-6",
                    question: "AI 生成音乐的评估通常使用哪两类方法？",
                    options: ["只能主观评估", "客观指标（音质、一致性）和主观评估（人类听感打分）", "只能客观指标", "不需要评估"],
                    answer: 1,
                    explanation: "AI 音乐评估结合客观指标（如 FAD、IS 评估音质和多样性）和主观评估（人类评审员按相关性、音乐性、创造性等维度打分）。",
                    difficulty: 2
                },
                {
                    id: "music-mid-c-7",
                    question: "在 AI 音乐生成中，"文本-音乐对齐"的主要困难是什么？",
                    options: ["没有困难", "音乐的语义比文本更抽象，主观性强，标注数据稀缺", "文本太复杂", "音频太简单"],
                    answer: 1,
                    explanation: "音乐语义高度抽象和主观（'快乐''紧张''史诗'），且高质量的文本-音乐配对标注数据远少于图文配对数据，使对齐更加困难。",
                    difficulty: 2
                },
                {
                    id: "music-mid-c-8",
                    question: "AudioLM 模型的核心创新是什么？",
                    options: ["使用卷积网络", "将语音和音频建模为语言模型的 token 序列，无需文本标注", "使用 GAN", "使用变分自编码器"],
                    answer: 1,
                    explanation: "AudioLM 将音频通过神经编解码器转化为离散 token 后，使用自回归语言模型来建模音频的语义和声学特征，无需文本标注就能生成高质量音频。",
                    difficulty: 2
                },
                {
                    id: "music-mid-c-9",
                    question: "在音乐生成模型中，温度（temperature）参数如何影响生成的音乐？",
                    options: ["改变音量", "控制音乐的创造性——温度越高越有创造性但可能不和谐，越低越保守", "改变时长", "改变调性"],
                    answer: 1,
                    explanation: "与文本生成类似，高温度增加音乐的随机性和创造性，可能产生新颖但不和谐的片段；低温度倾向于生成更保守、更符合训练数据分布的音乐。",
                    difficulty: 1
                },
                {
                    id: "music-mid-c-10",
                    question: "AI 音乐生成在商业应用中面临的版权问题是什么？",
                    options: ["没有版权问题", "生成的音乐可能与训练数据中的受版权保护的音乐过于相似", "AI 音乐不能商用", "所有 AI 音乐都有版权"],
                    answer: 1,
                    explanation: "AI 生成的音乐可能无意中复现训练数据中受版权保护的旋律或编曲，引发版权争议。这是一个尚未完全解决的法律和伦理问题。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "music-mid-f-1",
                    question: "EnCodec 将音频波形通过残差向量量化（RVQ）编码为离散的____序列。",
                    answer: "token",
                    explanation: "EnCodec 通过多层 RVQ 将连续音频波形量化为离散 token，使音频生成可以使用类似语言模型的自回归方法。",
                    difficulty: 2
                },
                {
                    id: "music-mid-f-2",
                    question: "MusicGen 使用____Transformer 架构自回归地生成音乐 token。",
                    answer: "自回归",
                    explanation: "MusicGen 使用自回归 Transformer，从左到右逐个预测下一个音频 token，通过条件（文本/旋律）控制生成的音乐风格和内容。",
                    difficulty: 1
                },
                {
                    id: "music-mid-f-3",
                    question: "音频的____率（Sample Rate）决定了模型能捕获的最高频率成分。",
                    answer: "采样",
                    explanation: "采样率（如 24kHz）决定了音频能表示的最高频率（Nyquist 频率为采样率的一半），直接影响生成音频的音质和细节。",
                    difficulty: 2
                },
                {
                    id: "music-mid-f-4",
                    question: "AI 音乐评估中的 FAD（Fréchet Audio Distance）衡量生成音频与真实音频的____距离。",
                    answer: "分布",
                    explanation: "FAD 在预训练音频特征空间中计算生成音频和真实音频分布之间的 Fréchet 距离，值越小表示生成质量越好。",
                    difficulty: 3
                },
                {
                    id: "music-mid-f-5",
                    question: "MusicGen 的条件注入通过交叉注意力机制将____信息融入生成过程。",
                    answer: "文本",
                    explanation: "MusicGen 将文本嵌入通过交叉注意力层注入 Transformer，文本条件作为 Key 和 Value，引导音乐生成符合文本描述。",
                    difficulty: 2
                },
                {
                    id: "music-mid-f-6",
                    question: "音频编解码器的____率（如 1.5kbps）决定了压缩后的数据量和音质权衡。",
                    answer: "比特",
                    explanation: "比特率越高保留的音频细节越多、音质越好，但数据量也越大，生成模型需要处理更多的 token，增加计算开销。",
                    difficulty: 2
                },
                {
                    id: "music-mid-f-7",
                    question: "在音乐生成中，保持一致的____和节奏对于生成连贯的长段音乐至关重要。",
                    answer: "调性",
                    explanation: "音乐的调性（key）、节拍（tempo）和节奏模式需要在整个生成过程中保持一致，否则听起来会不连贯和不和谐。",
                    difficulty: 1
                },
                {
                    id: "music-mid-f-8",
                    question: "MIDI（Musical Instrument Digital Interface）是一种存储音乐____信息的标准格式。",
                    answer: "符号",
                    explanation: "MIDI 存储音乐的符号化表示（音符、力度、时值、乐器等），而非音频波形，是一种紧凑的音乐表示方式。",
                    difficulty: 1
                },
                {
                    id: "music-mid-f-9",
                    question: "WaveNet 等自回归音频模型通过逐____生成来合成高保真音频。",
                    answer: "样本",
                    explanation: "WaveNet 以音频采样点为单位自回归生成，每个采样点的值取决于之前所有采样点，能产生非常高质量但生成速度较慢的音频。",
                    difficulty: 2
                },
                {
                    id: "music-mid-f-10",
                    question: "AI 音乐生成中的风格迁移可以将一段音乐转换为不同的____或乐器风格。",
                    answer: "流派",
                    explanation: "音乐风格迁移可以将给定音乐转换为不同的流派（如古典变爵士）、乐器配置或演奏风格，保持旋律或节奏结构不变。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "music-mid-code-1",
                    question: "补全以下使用 MusicGen 生成音乐的代码",
                    code: "import torch\nfrom transformers import AutoProcessor, MusicgenForConditionalGeneration\n\n# 加载 MusicGen 模型\nmodel = MusicgenForConditionalGeneration.from_pretrained(\"facebook/musicgen-small\")\nprocessor = AutoProcessor.from_pretrained(\"facebook/musicgen-small\")\n\ndef generate_music(text_prompt, duration_seconds=10):\n    \"\"\"根据文本提示生成音乐\n    \n    Args:\n        text_prompt: 文本描述（如 'happy jazz piano'）\n        duration_seconds: 生成时长（秒）\n    Returns:\n        torch.Tensor: 生成的音频波形\n    \"\"\"\n    # 计算需要的音频帧数\n    sampling_rate = model.config.audio_encoder.sampling_rate\n    audio_frames = int(duration_seconds * model.config.sampling_rate)\n    \n    # 处理文本输入\n    inputs = processor(\n        text=[text_prompt],\n        padding=True,\n        return_tensors=\"pt\"\n    )\n    \n    # 生成音乐\n    audio_values = model.generate(\n        **inputs,\n        max_new_tokens=____\n    )\n    return audio_values",
                    answer: "audio_frames",
                    explanation: "MusicGen 的 generate 方法接受文本输入和 max_new_tokens 参数控制生成长度，输出音频 token 序列，需后续解码为波形。",
                    difficulty: 2
                },
                {
                    id: "music-mid-code-2",
                    question: "补全以下简单的音频特征分析代码",
                    code: "import numpy as np\nimport librosa\n\ndef analyze_audio_features(audio_path):\n    \"\"\"分析音频的基本特征\n    \n    Args:\n        audio_path: 音频文件路径\n    Returns:\n        dict: 音频特征字典\n    \"\"\"\n    # 加载音频\n    y, sr = librosa.load(audio_path, sr=22050)\n    \n    # 提取特征\n    features = {\n        \"duration\": len(y) / sr,\n        \"sample_rate\": sr,\n        \"rms_energy\": float(np.sqrt(np.mean(y**2))),\n        \"zero_crossing_rate\": float(np.mean(librosa.feature.zero_crossing_rate(y))),\n        \"tempo\": float(librosa.feature.tempo(y=y, sr=sr)[0]),\n        \"spectral_centroid\": float(np.mean(librosa.feature.spectral_centroid(y=y, sr=sr))),\n        \"mfcc\": librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13).mean(axis=1).tolist()\n    }\n    \n    # 计算频谱对比度\n    features[\"spectral_contrast\"] = ____\n    return features",
                    answer: "librosa.feature.spectral_contrast(y=y, sr=sr).mean().item()",
                    explanation: "频谱对比度（Spectral Contrast）衡量音频频谱中峰值和谷值的差异，是评估音频音质和乐器特征的重要指标之一。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "music-final-c-1",
                    question: "MusicGen 的多码本并行生成策略（如 Delayed Pattern）相比逐码本生成的优势是什么？",
                    options: ["音质更好", "减少生成时间——多个 RVQ 层的 token 可以同时生成而非串行", "模型更小", "不需要训练"],
                    answer: 1,
                    explanation: "Delayed Pattern 策略让多个 RVQ 层的 token 在不同时间步并行生成，将生成时间从 O(L*K) 降低到接近 O(L)，其中 L 是序列长度，K 是层数。",
                    difficulty: 3
                },
                {
                    id: "music-final-c-2",
                    question: "VALL-E 等零样本语音合成模型的核心能力是什么？",
                    options: ["只能合成训练过的说话人", "仅用 3 秒参考音频即可克隆任意说话人的声音进行语音合成", "只能合成英语", "需要大量训练数据"],
                    answer: 1,
                    explanation: "VALL-E 将语音合成建模为语言建模问题，能够仅用 3 秒参考音频就克隆说话人的声音特征（音色、语调等），实现零样本语音合成。",
                    difficulty: 2
                },
                {
                    id: "music-final-c-3",
                    question: "在 AI 音乐生成中实现多轨生成（如同时生成鼓、贝斯、旋律）的策略是什么？",
                    options: ["生成多个单轨然后混音", "使用条件控制分别生成各轨，或使用多轨联合编码模型", "只能生成单轨", "使用传统 MIDI 合成"],
                    answer: 1,
                    explanation: "多轨生成可以通过：1）分别生成各轨道后混音；2）使用多轨 RVQ 联合编码和生成；3）使用轨道间注意力机制建模轨间关系。",
                    difficulty: 3
                },
                {
                    id: "music-final-c-4",
                    question: "Jukebox 等模型使用 VQ-VAE 层次化编码音频的目的是什么？",
                    options: ["减少文件大小", "在多个抽象层次上建模音频——底层捕获音色，高层捕获结构", "增加采样率", "简化训练"],
                    answer: 1,
                    explanation: "Jukebox 使用多层 VQ-VAE 在不同抽象层次编码音频：底层 token 编码局部音色和音质，高层 token 编码全局结构如旋律和和弦进程。",
                    difficulty: 3
                },
                {
                    id: "music-final-c-5",
                    question: "AI 生成音乐的可编辑性（Controllability）在实际创作中为什么重要？",
                    options: ["不重要", "创作者需要能精确控制音乐的特定元素（如节奏、调性、乐器）来满足创作需求", "只是为了技术展示", "只对初学者有用"],
                    answer: 1,
                    explanation: "专业音乐创作需要精确控制（如指定 BPM、调性、乐器编排、段落结构），可编辑性使 AI 工具真正融入专业创作工作流。",
                    difficulty: 2
                },
                {
                    id: "music-final-c-6",
                    question: "关于 AI 音乐的长时一致性，使用 Transformer-XL 或滑动窗口策略的目的是什么？",
                    options: ["减少模型大小", "在有限上下文窗口中维持长时间的音乐结构和风格一致性", "加速训练", "减少显存"],
                    answer: 1,
                    explanation: "Transformer-XL 和滑动窗口策略通过缓存之前的隐藏状态，在有限的上下文窗口中维持更长的依赖关系，帮助保持音乐的长期结构一致性。",
                    difficulty: 3
                },
                {
                    id: "music-final-c-7",
                    question: "在实际应用中，AI 音乐生成系统需要如何处理不同长度的生成需求？",
                    options: ["只能生成固定长度", "使用循环生成和结构化段落拼接实现任意长度", "不支持不同长度", "使用更多 GPU"],
                    answer: 1,
                    explanation: "通过识别和拼接结构化段落（前奏、主歌、副歌等），结合循环生成和淡入淡出技术，可以生成任意时长的连贯音乐。",
                    difficulty: 2
                },
                {
                    id: "music-final-c-8",
                    question: "AI 音乐创作中"提示工程"对生成质量的影响有多大？",
                    options: ["没有影响", "非常大——详细、准确的文本提示能显著提升生成音乐的相关性和质量", "影响较小", "只影响音量"],
                    answer: 1,
                    explanation: "音乐生成的提示工程对质量影响很大：详细的描述（风格、情绪、乐器、速度等）能引导模型生成更符合需求的音乐。",
                    difficulty: 1
                },
                {
                    id: "music-final-c-9",
                    question: "使用 AI 生成音乐用于商业用途时，主要的法律风险是什么？",
                    options: ["没有风险", "训练数据中可能包含受版权保护的音乐，生成结果可能构成侵权", "只有价格问题", "只涉及专利"],
                    answer: 1,
                    explanation: "商业使用 AI 生成音乐的主要法律风险是生成内容可能与训练数据中的受版权音乐相似，引发版权侵权诉讼。",
                    difficulty: 1
                },
                {
                    id: "music-final-c-10",
                    question: "AI 音乐生成模型的实时交互能力在什么场景下最有价值？",
                    options: ["离线批量生成", "现场表演和互动音乐应用中需要实时响应用户输入", "音乐存档", "版权注册"],
                    answer: 1,
                    explanation: "实时交互音乐生成在现场表演、音乐游戏、互动艺术装置等场景中最有价值，需要模型在毫秒级别响应用户的实时输入。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "music-final-f-1",
                    question: "MusicGen 通过交叉____注意力将文本条件嵌入注入 Transformer 的每一层。",
                    answer: "注意力",
                    explanation: "MusicGen 在 Transformer 的每一层使用交叉注意力机制，将文本嵌入作为 Key 和 Value，音乐 token 作为 Query，实现文本对音乐的条件控制。",
                    difficulty: 2
                },
                {
                    id: "music-final-f-2",
                    question: "VALL-E 等模型将语音合成建模为音频 token 的自回归____建模问题。",
                    answer: "语言",
                    explanation: "VALL-E 将语音合成重新定义为语言建模问题：给定文本 token 和语音 prompt token，自回归预测目标语音的音频 token 序列。",
                    difficulty: 3
                },
                {
                    id: "music-final-f-3",
                    question: "音频的频谱图（Spectrogram）是音频信号在____域和时间域的联合表示。",
                    answer: "频率",
                    explanation: "频谱图（如 STFT）展示了音频信号在不同频率成分随时间的变化，是音频分析和音乐信息检索的核心表示方法。",
                    difficulty: 2
                },
                {
                    id: "music-final-f-4",
                    question: "Jukebox 使用层次化 VQ-VAE 在不同____层次上编码音频信息。",
                    answer: "抽象",
                    explanation: "Jukebox 的 VQ-VAE 在不同抽象层次编码：底层（1.5kHz）捕获音色细节，中层（750Hz）捕获旋律，高层（375Hz）捕获歌曲结构。",
                    difficulty: 3
                },
                {
                    id: "music-final-f-5",
                    question: "AI 音乐生成中的"延迟模式"（Delayed Pattern）策略通过错开不同 RVQ 层的生成来提高____。",
                    answer: "效率",
                    explanation: "延迟模式让不同 RVQ 层在不同时间步开始生成，减少层间依赖等待，大幅提高生成效率同时保持质量。",
                    difficulty: 3
                },
                {
                    id: "music-final-f-6",
                    question: "AI 生成音乐的质量评估中，人类评估通常比自动指标更____。",
                    answer: "可靠",
                    explanation: "由于音乐的主观性，人类评估（听感评分、A/B 对比）比自动指标更能反映真实质量，但成本更高且可能有评估者偏差。",
                    difficulty: 1
                },
                {
                    id: "music-final-f-7",
                    question: "音乐的____结构（如前奏-主歌-副歌-桥段-尾奏）对长时生成质量至关重要。",
                    answer: "曲式",
                    explanation: "曲式结构定义了音乐的整体组织形式，AI 生成模型需要理解并遵循常见的曲式结构才能生成结构完整、连贯的音乐。",
                    difficulty: 2
                },
                {
                    id: "music-final-f-8",
                    question: "EnCodec 的多尺度判别器在训练中用于提升生成音频的____和清晰度。",
                    answer: "真实感",
                    explanation: "多尺度判别器在不同时间分辨率上区分真实和生成音频，帮助生成模型在从粗糙到精细的各个层次上提升音频的真实感。",
                    difficulty: 3
                },
                {
                    id: "music-final-f-9",
                    question: "AI 音乐工具在教育领域可以帮助学生学习____、作曲和音乐理论。",
                    answer: "演奏",
                    explanation: "AI 音乐工具可以通过生成示范、伴奏练习、和弦建议等功能辅助音乐教育，帮助学生理解音乐理论和练习演奏。",
                    difficulty: 1
                },
                {
                    id: "music-final-f-10",
                    question: "MIDI 和音频波形是音乐的两种基本____形式，各有优劣。",
                    answer: "表示",
                    explanation: "MIDI 是紧凑的符号化表示（音符事件），易于编辑但缺少音色细节；音频波形是完整的声学表示，信息丰富但文件大且难以编辑。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "music-final-code-1",
                    question: "补全以下 MusicGen 多条件生成（文本+旋律参考）的代码",
                    code: "import torch\nfrom transformers import AutoProcessor, MusicgenForConditionalGeneration\n\nmodel = MusicgenForConditionalGeneration.from_pretrained(\"facebook/musicgen-medium\")\nprocessor = AutoProcessor.from_pretrained(\"facebook/musicgen-medium\")\n\ndef generate_music_with_reference(text_prompt, reference_audio, sampling_rate=32000):\n    \"\"\"使用文本和旋律参考生成音乐\n    \n    Args:\n        text_prompt: 文本描述\n        reference_audio: 参考旋律的音频数组\n        sampling_rate: 采样率\n    Returns:\n        生成的音频\n    \"\"\"\n    inputs = processor(\n        text=[text_prompt],\n        audio=[reference_audio],\n        padding=True,\n        return_tensors=\"pt\"\n    )\n    \n    audio_values = model.generate(\n        **inputs,\n        max_new_tokens=512,\n        do_sample=True,\n        temperature=____\n    )\n    return audio_values",
                    answer: "0.7",
                    explanation: "温度参数控制生成的多样性：0.7 是一个平衡点，既有一定创造性又不至于过于随机。音乐生成通常推荐 0.5-1.0 的温度范围。",
                    difficulty: 2
                },
                {
                    id: "music-final-code-2",
                    question: "补全以下计算生成音乐与真实音乐相似度的评估代码",
                    code: "import numpy as np\nfrom scipy.spatial.distance import cdist\n\ndef evaluate_audio_quality(generated_audio, reference_audios, sr=22050):\n    \"\"\"计算生成音频与参考音频集的分布距离\n    \n    Args:\n        generated_audio: 生成的音频数组\n        reference_audios: 参考音频列表\n        sr: 采样率\n    Returns:\n        float: 质量分数（越小越好）\n    \"\"\"\n    import librosa\n    \n    # 提取 MFCC 特征\n    gen_features = librosa.feature.mfcc(y=generated_audio, sr=sr, n_mfcc=20).mean(axis=1)\n    ref_features_list = []\n    for ref in reference_audios:\n        ref_feat = librosa.feature.mfcc(y=ref, sr=sr, n_mfcc=20).mean(axis=1)\n        ref_features_list.append(ref_feat)\n    \n    ref_features = np.array(ref_features_list)\n    \n    # 计算到最近参考音频的距离\n    distances = cdist(gen_features.reshape(1, -1), ref_features, metric='euclidean')\n    min_distance = distances.min()\n    \n    return ____",
                    answer: "float(min_distance)",
                    explanation: "通过计算生成音频与最近参考音频的 MFCC 特征距离来评估质量。距离越小表示生成音频与真实音乐越相似，质量越好。",
                    difficulty: 2
                }
            ]
        }
    },

    /* ================================================================
     * 14. CS 294-280: Generative AI (UC Berkeley)
     *     Topics: LLM, diffusion models, GAN, VAE, RLHF,
     *             multimodal generation, safety
     * ================================================================ */
    "CS 294-280: Generative AI": {
        courseId: "cs294-280-generative-ai",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "berk-mid-c-1",
                    question: "在 CS294-280 的课程框架中，生成模型的核心分类依据是什么？",
                    options: ["模型大小", "如何建模和近似数据分布（显式密度、隐式采样、基于能量）", "训练数据类型", "推理速度"],
                    answer: 1,
                    explanation: "课程从概率建模角度将生成模型分为：显式密度模型（VAE、Flow）、隐式采样模型（GAN）和基于能量的模型，统一框架理解各类方法。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-c-2",
                    question: "RLHF（基于人类反馈的强化学习）在 LLM 对齐中的三个步骤是什么？",
                    options: ["预训练、微调、部署", "监督微调、奖励模型训练、PPO 策略优化", "数据收集、模型训练、评估", "编码、解码、对齐"],
                    answer: 1,
                    explanation: "RLHF 三步流程：1）监督微调（SFT）在高质量数据上微调基础模型；2）收集人类偏好数据训练奖励模型；3）用 PPO 算法根据奖励模型优化策略。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-c-3",
                    question: "条件扩散模型（如 Stable Diffusion）中的交叉注意力层如何工作？",
                    options: ["不使用注意力", "文本嵌入作为 K/V，图像特征作为 Q，通过注意力机制注入条件信息", "文本和图像直接拼接", "使用全连接层融合"],
                    answer: 1,
                    explanation: "在条件扩散模型的 U-Net 中，交叉注意力层将文本嵌入作为 Key 和 Value，U-Net 中间特征作为 Query，通过注意力机制将文本语义注入生成过程。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-c-4",
                    question: "DDPM 和 NCSN（Noise Conditional Score Networks）之间的理论关系是什么？",
                    options: ["完全不同的方法", "DDPM 可以视为 NCSN 的特殊参数化，两者都学习分数函数", "DDPM 更先进", "NCSN 不使用神经网络"],
                    answer: 1,
                    explanation: "Song 等人证明 DDPM 中预测噪声和 NCSN 中估计分数函数在数学上是等价的，两种视角通过简单的代数关系可以相互转换。",
                    difficulty: 3
                },
                {
                    id: "berk-mid-c-5",
                    question: "在 GAN 理论中，当判别器达到最优时，最小化生成器的损失等价于最小化什么？",
                    options: ["MSE 损失", "真实分布和生成分布之间的 Jensen-Shannon 散度", "KL 散度", "交叉熵"],
                    answer: 1,
                    explanation: "当 D 处于最优时，min_G V(D*,G) 等价于最小化 2 * JSD(p_data || p_g) - log(4)，即真实分布和生成分布之间的 JS 散度。",
                    difficulty: 3
                },
                {
                    id: "berk-mid-c-6",
                    question: "自回归语言模型（如 GPT）在数学上建模的是什么分布？",
                    options: ["联合分布 p(x)", "条件自回归分解 p(x) = prod p(x_t | x_{<t})", "后验分布 p(z|x)", "边际分布 p(x)"],
                    answer: 1,
                    explanation: "自回归语言模型使用链式法则将联合概率分解为条件概率的乘积：p(x) = prod p(x_t | x_1, ..., x_{t-1})，从左到右逐步预测每个 token。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-c-7",
                    question: "课程中讨论的 VQ-VAE 2.0 相比 VQ-VAE 1.0 的改进是什么？",
                    options: ["去掉了码本", "使用多尺度层次化码本提高生成的全局一致性", "只用于音频", "不需要量化"],
                    answer: 1,
                    explanation: "VQ-VAE 2.0 在多个空间尺度上使用独立的码本（类似层次化先验），低分辨率层控制全局结构，高分辨率层补充细节，显著提高生成质量。",
                    difficulty: 3
                },
                {
                    id: "berk-mid-c-8",
                    question: "在课程中，为什么说扩散模型的训练目标（预测噪声）是一种有效的似然近似？",
                    options: ["不是近似", "它等价于数据对数似然变分下界（ELBO）的一个简化形式", "它直接最大化似然", "与似然无关"],
                    answer: 1,
                    explanation: "扩散模型的去噪目标函数 E[||epsilon - epsilon_theta||^2] 是数据对数似然 ELBO 的一个简化形式，两者在训练中等价，但去噪目标计算更简单。",
                    difficulty: 3
                },
                {
                    id: "berk-mid-c-9",
                    question: "在课程中讨论的 DPO（Direct Preference Optimization）相比 RLHF 的优势是什么？",
                    options: ["DPO 更复杂", "DPO 直接从偏好数据优化策略，不需要单独训练奖励模型", "DPO 需要更多数据", "DPO 只用于图像"],
                    answer: 1,
                    explanation: "DPO 推导出一个闭式解，直接从偏好数据优化策略，绕过了 RLHF 中训练奖励模型和使用 PPO 的复杂流程，训练更稳定更简单。",
                    difficulty: 3
                },
                {
                    id: "berk-mid-c-10",
                    question: "课程中讨论的多模态生成的核心挑战是什么？",
                    options: ["计算资源", "如何建模和生成不同模态之间的复杂依赖关系", "数据存储", "硬件需求"],
                    answer: 1,
                    explanation: "多模态生成需要建模不同模态间的复杂依赖（如文本描述与视觉内容的对应、音频与视频的同步），这是课程讨论的核心挑战。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "berk-mid-f-1",
                    question: "CS294-280 将生成模型统一在____建模的框架下理解。",
                    answer: "概率",
                    explanation: "课程从概率建模的统一视角出发，将 VAE、GAN、Flow、扩散模型等不同方法置于同一框架下，理解它们的共性和差异。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-f-2",
                    question: "RLHF 中的 PPO 算法通过____目标函数来限制策略更新幅度。",
                    answer: "裁剪",
                    explanation: "PPO 通过裁剪（clipping）目标函数限制策略更新的幅度，防止更新过大导致训练不稳定，兼顾了训练效率和稳定性。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-f-3",
                    question: "GAN 训练中的纳什均衡对应的是判别器的____解和生成器匹配真实分布。",
                    answer: "最优",
                    explanation: "在 GAN 的理想训练中，纳什均衡状态是判别器达到最优（D*）且生成分布等于真实分布（p_g = p_data）。",
                    difficulty: 3
                },
                {
                    id: "berk-mid-f-4",
                    question: "扩散模型的采样过程可以形式化为求解一个随机____方程（SDE）。",
                    answer: "微分",
                    explanation: "SDE 框架将离散的扩散过程推广为连续时间的随机微分方程，提供了理解不同采样算法（DDPM、DDIM 等）的统一数学框架。",
                    difficulty: 3
                },
                {
                    id: "berk-mid-f-5",
                    question: "课程中讨论的自回归模型的____偏置（Receptive Field Bias）使其天然适合序列建模。",
                    answer: "因果",
                    explanation: "因果注意力掩码确保每个位置只能关注之前的位置，与自回归建模的从左到右生成方式完美匹配。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-f-6",
                    question: "DPO 的核心数学贡献是证明了最优策略与____模型之间的闭式关系。",
                    answer: "参考",
                    explanation: "DPO 推导出最优策略 pi* 可以用参考策略 pi_ref 和奖励函数 r 的闭式表达式表示，无需显式学习奖励模型。",
                    difficulty: 3
                },
                {
                    id: "berk-mid-f-7",
                    question: "VAE 的训练目标 ELBO 由重建项和 KL 散度____项组成。",
                    answer: "正则",
                    explanation: "ELBO = E[log p(x|z)] - KL(q(z|x) || p(z))，第一项是重建质量，第二项是 KL 正则项约束隐空间分布。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-f-8",
                    question: "条件生成模型可以通过在模型中注入____信息来控制生成输出。",
                    answer: "条件",
                    explanation: "条件生成模型通过多种方式注入条件信息（如分类标签、文本嵌入、参考图像），使生成结果满足特定约束。",
                    difficulty: 1
                },
                {
                    id: "berk-mid-f-9",
                    question: "课程中讨论的对比学习在多模态表示学习中的核心作用是学习跨模态____表示。",
                    answer: "对齐",
                    explanation: "对比学习通过拉近匹配对、推远不匹配对，学习跨模态的对齐表示，使语义相似的跨模态数据在嵌入空间中距离较近。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-f-10",
                    question: "生成模型评估中的 FID 分数衡量的是生成图像分布和真实图像分布之间的____距离。",
                    answer: "Fréchet",
                    explanation: "FID（Fréchet Inception Distance）在预训练 Inception 网络的特征空间中，计算两个分布之间的 Fréchet 距离，值越小表示生成质量越好。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "berk-mid-code-1",
                    question: "补全以下实现 VAE 编码器重参数化技巧的代码",
                    code: "import torch\nimport torch.nn as nn\n\nclass VAEEncoder(nn.Module):\n    def __init__(self, input_dim, hidden_dim, latent_dim):\n        super().__init__()\n        self.fc1 = nn.Linear(input_dim, hidden_dim)\n        self.fc_mu = nn.Linear(hidden_dim, latent_dim)\n        self.fc_logvar = nn.Linear(hidden_dim, latent_dim)\n    \n    def reparameterize(self, mu, logvar):\n        \"\"\"重参数化技巧：使采样过程可微\"\"\"\n        std = torch.exp(0.5 * logvar)\n        eps = torch.randn_like(std)\n        return ____\n    \n    def forward(self, x):\n        h = torch.relu(self.fc1(x))\n        mu = self.fc_mu(h)\n        logvar = self.fc_logvar(h)\n        z = self.reparameterize(mu, logvar)\n        return z, mu, logvar",
                    answer: "mu + eps * std",
                    explanation: "重参数化技巧将 z = mu + eps * std，其中 eps ~ N(0,I) 是固定的随机噪声，使梯度可以流过 mu 和 sigma 参数，实现可微的采样。",
                    difficulty: 2
                },
                {
                    id: "berk-mid-code-2",
                    question: "补全以下 RLHF 奖励模型的 Bradley-Terry 损失函数",
                    code: "import torch\n\ndef reward_model_loss(reward_chosen, reward_rejected):\n    \"\"\"RLHF 奖励模型训练损失\n    \n    Args:\n        reward_chosen: 人类偏好的回答的奖励分数\n        reward_rejected: 人类不偏好的回答的奖励分数\n    Returns:\n        tensor: 损失值\n    \"\"\"\n    # Bradley-Terry 偏好模型\n    # P(chosen > rejected) = sigmoid(r_chosen - r_rejected)\n    loss = -torch.log(torch.sigmoid(____)).mean()\n    return loss",
                    answer: "reward_chosen - reward_rejected",
                    explanation: "Bradley-Terry 损失函数为 -log(sigma(r_chosen - r_rejected))，目标是让模型给被偏好的回答更高的奖励分数。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "berk-final-c-1",
                    question: "课程中讨论的 Transformer 的"涌现能力"（Emergent Abilities）现象指的是什么？",
                    options: ["编程获得的能力", "当模型规模超过某阈值时突然出现的、小模型不具备的新能力", "人类注入的能力", "随机产生的错误"],
                    answer: 1,
                    explanation: "涌现能力是指当模型参数量、数据量和计算量达到某个阈值后，模型突然展现出在较小规模时完全不具备的能力（如 few-shot、CoT）。",
                    difficulty: 2
                },
                {
                    id: "berk-final-c-2",
                    question: "在课程讨论的 GAN 理论中，Wasserstein GAN 为什么要使用 Wasserstein 距离？",
                    options: ["计算更简单", "Wasserstein 距离即使在两个分布支撑集不重叠时也能提供有意义的梯度", "不需要判别器", "生成质量更好"],
                    answer: 1,
                    explanation: "当真实分布和生成分布没有重叠时（高维空间常见），JS 散度和 KL 散度变为常数，梯度为零。Wasserstein 距离在任何情况下都提供有意义的距离度量和梯度。",
                    difficulty: 3
                },
                {
                    id: "berk-final-c-3",
                    question: "课程中讨论的"概率流 ODE"与扩散 SDE 的关系是什么？",
                    options: ["完全不同", "概率流 ODE 与扩散 SDE 具有相同的边际分布，但 ODE 是确定性的", "ODE 更快但不准确", "SDE 不需要分数函数"],
                    answer: 1,
                    explanation: "概率流 ODE 是与扩散 SDE 具有相同边际分布的确定性过程，不包含随机项，可以用 ODE 求解器（如 Euler、RK45）高效求解。",
                    difficulty: 3
                },
                {
                    id: "berk-final-c-4",
                    question: "课程中讨论的"无分类器引导"（Classifier-Free Guidance）的数学形式是什么？",
                    options: ["随机采样", "eps_hat = eps_uncond + w * (eps_cond - eps_uncond)", "直接使用条件预测", "使用多个判别器"],
                    answer: 1,
                    explanation: "CFG 公式：预测噪声 = 无条件预测 + w * (条件预测 - 无条件预测)，其中 w 是引导强度。当 w > 1 时增强条件控制，w = 0 时等同于无条件生成。",
                    difficulty: 3
                },
                {
                    id: "berk-final-c-5",
                    question: "在课程中，VAE 的后验坍塌问题与什么有关？",
                    options: ["学习率太小", "解码器过于强大，使得 KL 项趋近于零，隐变量被忽略", "数据不足", "模型太小"],
                    answer: 1,
                    explanation: "当解码器足够强大时，它可以直接从解码器内部建模数据分布，KL 项趋近于零，编码器后验坍塌为先验，隐变量不再携带有意义的信息。",
                    difficulty: 3
                },
                {
                    id: "berk-final-c-6",
                    question: "课程中讨论的自回归模型的训练目标（交叉熵损失）等价于最大化什么？",
                    options: ["准确率", "训练数据的对数似然", "F1 分数", "召回率"],
                    answer: 1,
                    explanation: "自回归语言模型的交叉熵训练目标等价于最大化训练数据的对数似然（或最小化真实分布与模型分布之间的 KL 散度）。",
                    difficulty: 2
                },
                {
                    id: "berk-final-c-7",
                    question: "在课程讨论的 LLM 对齐中，DPO 的全称是什么？",
                    options: ["Deep Preference Optimization", "Direct Preference Optimization", "Dual Policy Optimization", "Dynamic Parameter Optimization"],
                    answer: 1,
                    explanation: "DPO（Direct Preference Optimization）直接从偏好数据优化策略模型，通过数学推导绕过了显式训练奖励模型的需要，简化了 RLHF 流程。",
                    difficulty: 2
                },
                {
                    id: "berk-final-c-8",
                    question: "课程中讨论的扩散模型加速采样方法中，DDIM 的核心数学技巧是什么？",
                    options: ["增加网络深度", "推导出一个非马尔可夫的确定性 ODE 轨迹", "使用更大的学习率", "减小图像尺寸"],
                    answer: 1,
                    explanation: "DDIM 推导出一个与 DDPM 具有相同边际分布但确定性的采样 ODE，允许跳步采样（如每 10 步取一步），将采样步数从 1000 降低到 50 甚至更少。",
                    difficulty: 3
                },
                {
                    id: "berk-final-c-9",
                    question: "课程中讨论的对比学习为什么对负样本数量敏感？",
                    options: ["不敏感", "更多负样本提供更好的分布估计，帮助模型学习更有区分度的表示", "更少负样本更好", "负样本不重要"],
                    answer: 1,
                    explanation: "对比学习需要大量负样本来准确估计对比损失中的归一化常数，负样本越多，梯度估计越准确，学到的表示越有区分度。",
                    difficulty: 2
                },
                {
                    id: "berk-final-c-10",
                    question: "课程中讨论的 LLM 安全对齐面临的"Goodhart 定律"问题是什么？",
                    options: ["模型太慢", "当奖励模型被过度优化时，策略可能找到利用奖励模型弱点的方式而非真正改善质量", "数据不足", "GPU 不够"],
                    answer: 1,
                    explanation: "Goodhart 定律在 RLHF 中表现为策略通过 PPO 过度优化奖励模型时，可能产生高奖励但低质量的输出（奖励黑客），即代理指标不再是真实质量的良好代理。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "berk-final-f-1",
                    question: "课程将生成模型统一在____建模框架下，包括 VAE、GAN、Flow 和扩散模型。",
                    answer: "概率",
                    explanation: "概率建模提供了统一视角：VAE 显式建模 p(x) 的 ELBO，GAN 隐式匹配分布，Flow 精确建模 p(x)，扩散模型通过逐步去噪建模。",
                    difficulty: 2
                },
                {
                    id: "berk-final-f-2",
                    question: "RLHF 的 PPO 训练中，KL 散度惩罚项防止策略偏离____策略太远。",
                    answer: "参考",
                    explanation: "KL 散度惩罚项 KL(pi_theta || pi_ref) 限制优化后的策略不要偏离参考策略（SFT 模型）太远，防止过度优化奖励模型。",
                    difficulty: 2
                },
                {
                    id: "berk-final-f-3",
                    question: "GAN 中的模式____（Mode Collapse）问题使生成器只能产生有限种类的样本。",
                    answer: "坍塌",
                    explanation: "模式坍塌是 GAN 训练的核心问题：生成器找到能骗过判别器的少量输出模式后就不断重复，无法覆盖数据分布的全部多样性。",
                    difficulty: 2
                },
                {
                    id: "berk-final-f-4",
                    question: "扩散模型的分数函数定义为数据分布对数概率的____。",
                    answer: "梯度",
                    explanation: "分数函数 s(x) = nabla_x log p(x) 是数据分布对数概率的梯度，指向概率密度增加最快的方向，是扩散模型学习的核心目标。",
                    difficulty: 3
                },
                {
                    id: "berk-final-f-5",
                    question: "VAE 中的隐变量 z 服从先验分布 p(z)，通常选择标准____分布。",
                    answer: "高斯",
                    explanation: "VAE 的先验 p(z) 通常选择标准正态分布 N(0,I)，通过 KL 正则化鼓励编码器的后验分布接近这个简单的先验。",
                    difficulty: 2
                },
                {
                    id: "berk-final-f-6",
                    question: "课程中讨论的 FID 分数使用预训练的____网络提取图像特征来计算分布距离。",
                    answer: "Inception",
                    explanation: "FID 使用预训练的 Inception v3 网络的中间层特征来表示图像，然后在特征空间中计算生成分布和真实分布之间的 Fréchet 距离。",
                    difficulty: 2
                },
                {
                    id: "berk-final-f-7",
                    question: "自回归语言模型使用____掩码确保每个位置只能关注之前的 token。",
                    answer: "因果",
                    explanation: "因果注意力掩码（Causal Attention Mask）将注意力矩阵的上三角部分设为 -inf，确保自回归生成时每个位置只能访问之前的 token。",
                    difficulty: 2
                },
                {
                    id: "berk-final-f-8",
                    question: "DPO 通过数学推导将 RLHF 的三步流程简化为直接在____数据上优化策略。",
                    answer: "偏好",
                    explanation: "DPO 的核心贡献是推导出最优策略与参考策略之间的闭式关系，使得可以直接在偏好数据对上优化策略模型，无需单独训练奖励模型和 PPO。",
                    difficulty: 3
                },
                {
                    id: "berk-final-f-9",
                    question: "课程中讨论的 Flow 模型通过变量替换公式精确计算数据的对数____。",
                    answer: "似然",
                    explanation: "Flow 模型通过一系列可逆变换和变量替换公式 log p(x) = log p(z) + sum log|det(dz/dx)|，可以精确计算数据的对数似然。",
                    difficulty: 2
                },
                {
                    id: "berk-final-f-10",
                    question: "多模态生成中的对比预训练学习的是跨模态的____表示空间。",
                    answer: "共享",
                    explanation: "对比预训练（如 CLIP）学习一个共享的嵌入空间，使语义匹配的跨模态数据（图文对）在该空间中距离近，不匹配的远。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "berk-final-code-1",
                    question: "补全以下实现 WGAN-GP 梯度惩罚的代码",
                    code: "import torch\nimport torch.autograd as autograd\n\ndef gradient_penalty(discriminator, real_data, fake_data, device):\n    \"\"\"WGAN-GP 的梯度惩罚项\n    \n    Args:\n        discriminator: 判别器（Critic）\n        real_data: 真实数据\n        fake_data: 生成数据\n        device: 设备\n    Returns:\n        梯度惩罚值\n    \"\"\"\n    batch_size = real_data.size(0)\n    \n    # 在真实和假数据之间随机插值\n    alpha = torch.rand(batch_size, 1, 1, 1, device=device)\n    interpolated = (alpha * real_data + (1 - alpha) * fake_data).requires_grad_(True)\n    \n    # 判别器对插值数据的输出\n    d_interpolated = discriminator(interpolated)\n    \n    # 计算梯度\n    gradients = autograd.grad(\n        outputs=d_interpolated,\n        inputs=interpolated,\n        grad_outputs=torch.ones_like(d_interpolated),\n        create_graph=True,\n        retain_graph=True\n    )[0]\n    \n    gradients = gradients.view(batch_size, -1)\n    gradient_norm = gradients.norm(2, dim=1)\n    \n    # 梯度惩罚：(||grad|| - 1)^2\n    penalty = ____\n    return penalty",
                    answer: "((gradient_norm - 1) ** 2).mean()",
                    explanation: "WGAN-GP 惩罚判别器在插值点处的梯度范数与 1 的偏差，强制判别器在真实和生成数据之间的区域满足 1-Lipschitz 约束。",
                    difficulty: 3
                },
                {
                    id: "berk-final-code-2",
                    question: "补全以下实现 DPO 损失函数的代码",
                    code: "import torch\n\ndef dpo_loss(policy_logps_chosen, policy_logps_rejected,\n            ref_logps_chosen, ref_logps_rejected, beta=0.1):\n    \"\"\"DPO（Direct Preference Optimization）损失函数\n    \n    Args:\n        policy_logps_chosen: 策略模型对 chosen 的对数概率\n        policy_logps_rejected: 策略模型对 rejected 的对数概率\n        ref_logps_chosen: 参考模型对 chosen 的对数概率\n        ref_logps_rejected: 参考模型对 rejected 的对数概率\n        beta: 温度参数\n    Returns:\n        tensor: DPO 损失\n    \"\"\"\n    # 计算策略模型和参考模型的对数概率差\n    pi_logratios = policy_logps_chosen - policy_logps_rejected\n    ref_logratios = ref_logps_chosen - ref_logps_rejected\n    \n    # DPO 损失\n    logits = beta * (pi_logratios - ref_logratios)\n    loss = -F.logsigmoid(____).mean()\n    return loss",
                    answer: "logits",
                    explanation: "DPO 损失 = -log(sigma(beta * (log(pi(chosen)/pi(rejected)) - log(ref(chosen)/ref(rejected)))))，直接从偏好数据优化策略，无需奖励模型。",
                    difficulty: 3
                }
            ]
        }
    },

    /* ================================================================
     * 15. 11-777: Multimodal Machine Learning (CMU)
     *     Topics: multimodal representation, alignment, fusion,
     *             vision-language, cross-modal reasoning, grounding
     * ================================================================ */
    "11-777: Multimodal Machine Learning": {
        courseId: "11-777-multimodal-ml",
        domain: "genai",
        mid: {
            choice: [
                {
                    id: "11777-mid-c-1",
                    question: "CMU 11-777 课程中讨论的多模态表示学习的两大范式是什么？",
                    options: ["分类和回归", "联合表示（Joint Representation）和协调表示（Coordinated Representation）", "监督和无监督", "编码和解码"],
                    answer: 1,
                    explanation: "联合表示将多模态信息融合为一个统一表示；协调表示分别编码各模态然后在嵌入空间中对齐。两种范式适用于不同的多模态任务。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-c-2",
                    question: "在多模态对齐中，"硬对齐"和"软对齐"的根本区别是什么？",
                    options: ["没有区别", "硬对齐是一对一确定性匹配，软对齐是基于注意力的概率性匹配", "硬对齐更简单", "软对齐不需要计算"],
                    answer: 1,
                    explanation: "硬对齐强制建立一对一的确定性对应关系（如 DTW），软对齐通过注意力权重实现概率性的多对多匹配，后者更灵活但可能引入噪声。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-c-3",
                    question: "课程中讨论的"多模态瓶颈"（Multimodal Bottleneck）问题是什么？",
                    options: ["GPU 内存不足", "融合过程中信息瓶颈导致部分模态的信息丢失", "模型太小", "训练数据太少"],
                    answer: 1,
                    explanation: "多模态瓶颈指在融合过程中，压缩多模态信息到固定维度时可能丢失部分模态的重要信息，需要设计更好的融合策略来缓解。",
                    difficulty: 3
                },
                {
                    id: "11777-mid-c-4",
                    question: "在视觉-语言预训练中，掩码图像建模（Masked Image Modeling, MIM）的目标是什么？",
                    options: ["分类图像", "通过预测被遮掩的图像区域来学习视觉表示", "生成文本", "检测物体"],
                    answer: 1,
                    explanation: "MIM 随机遮掩图像的部分区域（如 MAE），让模型预测被遮掩区域的像素或特征，通过自监督学习学习丰富的视觉表示。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-c-5",
                    question: "课程中讨论的多模态模型的"表示融合"和"决策融合"在信息流上的区别是什么？",
                    options: ["没有区别", "表示融合在中间层合并特征，决策融合在最终输出层合并各模态的独立预测", "表示融合更简单", "决策融合更复杂"],
                    answer: 1,
                    explanation: "表示融合（中间融合）在模型的中间层让不同模态的特征交互，决策融合（晚期融合）各模态独立处理到最后再合并输出，信息流不同。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-c-6",
                    question: "课程中讨论的视觉接地（Visual Grounding）任务的目标是什么？",
                    options: ["图像分类", "将自然语言描述定位到图像中的具体区域", "文本生成", "音频识别"],
                    answer: 1,
                    explanation: "视觉接地（Visual Grounding）任务要求模型根据自然语言描述，在图像中定位对应的物体或区域，返回边界框或分割掩码。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-c-7",
                    question: "课程中讨论的"多模态Transformer"（如 ViLBERT、UNITER）相比早期模型的优势是什么？",
                    options: ["更小", "在统一的 Transformer 架构中实现跨模态注意力，捕获深层跨模态交互", "不需要图像", "不需要文本"],
                    answer: 1,
                    explanation: "多模态 Transformer 通过跨模态注意力机制在统一架构中实现不同模态特征的深层交互，比早期的独立编码器+简单融合方法捕获更丰富的跨模态关系。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-c-8",
                    question: "课程中讨论的多模态情感分析需要综合哪些模态的信息？",
                    options: ["只用文本", "文本、语音（语调、语速）和面部表情的综合分析", "只用图像", "只用音频"],
                    answer: 1,
                    explanation: "多模态情感分析综合文本内容（说了什么）、语音特征（怎么说的——语调、语速）和面部表情（视觉线索），比单模态分析更准确。",
                    difficulty: 1
                },
                {
                    id: "11777-mid-c-9",
                    question: "课程中讨论的"跨模态检索"（Cross-Modal Retrieval）需要解决的核心问题是什么？",
                    options: ["数据存储", "如何在不同模态间建立语义对应的检索能力", "模型训练速度", "GPU 使用"],
                    answer: 1,
                    explanation: "跨模态检索（如文本搜图、图片搜文）需要在共享语义空间中建立不同模态的对应关系，使语义相似的跨模态数据能够被检索到。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-c-10",
                    question: "课程中讨论的"对比学习"在多模态表示学习中的核心思想是什么？",
                    options: ["对比不同模型", "将匹配的跨模态对拉近、不匹配的推远", "比较不同数据集", "对比训练和测试"],
                    answer: 1,
                    explanation: "对比学习通过构建正样本对（匹配的图文）和负样本对（不匹配的图文），学习将匹配对拉近、不匹配对推远的跨模态表示。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "11777-mid-f-1",
                    question: "多模态学习中的____（Co-learning）利用不同模态间的互补性来增强学习效果。",
                    answer: "协同",
                    explanation: "协同学习利用不同模态数据之间的一致性和互补性，在标注不充足时，用一个模态的监督信号辅助另一个模态的学习。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-f-2",
                    question: "视觉-语言对齐中，对比学习通常使用____损失（如 InfoNCE）来训练。",
                    answer: "对比",
                    explanation: "InfoNCE 对比损失将正样本对的相似度推高，负样本对的相似度推低，学习有区分度的跨模态表示。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-f-3",
                    question: "在多模态融合中，早期____在输入层将不同模态的特征拼接在一起。",
                    answer: "融合",
                    explanation: "早期融合（Early Fusion）在模型输入层就将不同模态的特征向量拼接，允许最早的跨模态交互，但忽略了各模态的结构差异。",
                    difficulty: 1
                },
                {
                    id: "11777-mid-f-4",
                    question: "CLIP 使用对比学习将图像和文本映射到共享的____空间。",
                    answer: "嵌入",
                    explanation: "CLIP 通过对比学习将图像和文本编码到共享的嵌入空间，使得匹配的图文对在该空间中距离近，不匹配的远。",
                    difficulty: 1
                },
                {
                    id: "11777-mid-f-5",
                    question: "多模态模型中的注意力池化（Attention Pooling）用于从图像区域中选择与文本最相关的____。",
                    answer: "特征",
                    explanation: "注意力池化以文本嵌入为 Query、图像区域特征为 Key/Value，通过注意力机制选择与文本最相关的图像区域特征。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-f-6",
                    question: "课程中讨论的"模态间隙"问题可以通过____预训练目标来缓解。",
                    answer: "生成",
                    explanation: "除了对比目标外，添加生成目标（如掩码语言建模、图像重建）可以鼓励模型更深入地理解模态内容，缩小模态间的表示差距。",
                    difficulty: 3
                },
                {
                    id: "11777-mid-f-7",
                    question: "视频理解模型需要同时建模空间____信息和时间动态信息。",
                    answer: "外观",
                    explanation: "视频理解需要捕获每帧的空间外观信息（物体、场景）和帧间的时间动态信息（运动、变化），是时空联合学习的问题。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-f-8",
                    question: "视觉问答（VQA）模型需要____理解图像内容和自然语言问题。",
                    answer: "联合",
                    explanation: "VQA 需要同时理解图像视觉内容和文本问题语义，并进行跨模态推理来得出答案，是典型的多模态理解任务。",
                    difficulty: 1
                },
                {
                    id: "11777-mid-f-9",
                    question: "多模态翻译任务中，图像描述生成需要将视觉信息____为自然语言描述。",
                    answer: "转换",
                    explanation: "图像描述生成将视觉信息（图像特征）转换为自然语言描述（文本序列），需要理解图像内容并生成流畅准确的文字描述。",
                    difficulty: 1
                },
                {
                    id: "11777-mid-f-10",
                    question: "课程中讨论的跨模态零样本学习利用预训练模型的跨模态____能力。",
                    answer: "对齐",
                    explanation: "CLIP 等模型学习了强大的跨模态对齐表示，使得在没有训练数据的情况下，通过文本描述和图像的相似度比较就能完成新类别的分类。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "11777-mid-code-1",
                    question: "补全以下实现多模态拼接融合（Concatenation Fusion）的代码",
                    code: "import torch\nimport torch.nn as nn\n\nclass ConcatenationFusion(nn.Module):\n    def __init__(self, text_dim, image_dim, output_dim):\n        super().__init__()\n        self.projection = nn.Linear(text_dim + image_dim, output_dim)\n        self.layer_norm = nn.LayerNorm(output_dim)\n    \n    def forward(self, text_features, image_features):\n        \"\"\"拼接融合：将文本和图像特征在维度上拼接后投影\n        \n        Args:\n            text_features: 文本特征 (batch, text_dim)\n            image_features: 图像特征 (batch, image_dim)\n        Returns:\n            融合后的特征 (batch, output_dim)\n        \"\"\"\n        # 拼接两个模态的特征\n        concatenated = torch.cat([text_features, image_features], dim=____)\n        \n        # 投影到统一维度\n        fused = self.projection(concatenated)\n        fused = self.layer_norm(fused)\n        return fused",
                    answer: "-1",
                    explanation: "拼接融合在特征维度（最后一维，dim=-1）上将文本和图像特征拼接，然后通过线性投影和层归一化融合为统一维度的表示。",
                    difficulty: 2
                },
                {
                    id: "11777-mid-code-2",
                    question: "补全以下实现注意力加权融合（Attention Fusion）的代码",
                    code: "import torch\nimport torch.nn as nn\nimport math\n\nclass AttentionFusion(nn.Module):\n    def __init__(self, dim):\n        super().__init__()\n        self.query = nn.Linear(dim, dim)\n        self.key = nn.Linear(dim, dim)\n        self.value = nn.Linear(dim, dim)\n    \n    def forward(self, modality_a, modality_b):\n        \"\"\"注意力融合：模态 A 作为 Query，模态 B 作为 Key/Value\n        \n        Args:\n            modality_a: 模态 A 特征 (batch, seq_a, dim)\n            modality_b: 模态 B 特征 (batch, seq_b, dim)\n        Returns:\n            融合后的模态 A 表示\n        \"\"\"\n        Q = self.query(modality_a)\n        K = self.key(modality_b)\n        V = self.value(modality_b)\n        \n        # 缩放点积注意力\n        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(Q.shape[-1])\n        weights = torch.softmax(scores, dim=-1)\n        \n        # 加权融合\n        fused = torch.matmul(____, V)\n        return fused",
                    answer: "weights",
                    explanation: "注意力融合用模态 A 的特征作为 Query 去关注模态 B 的 Key/Value，通过注意力权重加权聚合模态 B 的信息，实现跨模态的动态融合。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "11777-final-c-1",
                    question: "课程中讨论的"跨模态预训练"的三个核心目标是什么？",
                    options: ["分类、回归、聚类", "对齐目标、生成目标和判别目标", "编码、解码、传输", "训练、验证、测试"],
                    answer: 1,
                    explanation: "跨模态预训练通常包含三个目标：对齐目标（如对比学习，对齐不同模态表示）、生成目标（如掩码重建，理解内容）和判别目标（如分类，学习语义）。",
                    difficulty: 2
                },
                {
                    id: "11777-final-c-2",
                    question: "课程中讨论的"视觉语言模型"（如 LLaVA、Flamingo）中，视觉编码器和语言模型是如何连接的？",
                    options: ["不连接", "通过投影层（Linear/MLP）将视觉特征映射到语言模型的输入空间", "通过全连接层", "通过 RNN"],
                    answer: 1,
                    explanation: "视觉编码器（如 ViT）提取图像特征后，通过投影层（线性层或 MLP）将视觉特征维度映射到与语言模型嵌入维度兼容的空间，然后与文本 token 拼接输入 LLM。",
                    difficulty: 2
                },
                {
                    id: "11777-final-c-3",
                    question: "课程中讨论的多模态大模型面临的"幻觉"问题的独特挑战是什么？",
                    options: ["与纯文本幻觉相同", "模型可能描述图像中不存在的物体或关系，是视觉理解不充分的表现", "只在音频中出现", "不影响实际使用"],
                    answer: 1,
                    explanation: "多模态幻觉的特殊之处在于模型可能生成与输入图像不一致的描述（如描述不存在的物体、错误的空间关系），反映了视觉-语言对齐的不足。",
                    difficulty: 2
                },
                {
                    id: "11777-final-c-4",
                    question: "课程中讨论的"音频-视觉同步"任务需要在什么维度上建立对齐？",
                    options: ["空间维度", "时间维度——同步判断音频和视频帧的时间对应关系", "语义维度", "不需要对齐"],
                    answer: 1,
                    explanation: "音频-视觉同步（AV Sync）需要在时间维度上判断音频信号和视频帧是否同步，建立帧级别的精确时间对齐，对视频理解和编辑很重要。",
                    difficulty: 2
                },
                {
                    id: "11777-final-c-5",
                    question: "课程中讨论的"多模态大模型"（如 GPT-4V）相比独立多模态模型的核心优势是什么？",
                    options: ["参数更少", "利用预训练 LLM 的强大语言理解和推理能力来增强多模态理解", "训练更快", "不需要视觉编码器"],
                    answer: 1,
                    explanation: "多模态大模型将 LLM 的强大语言理解、推理和世界知识与视觉编码器结合，能进行更复杂的跨模态推理，而不只是简单的模式匹配。",
                    difficulty: 2
                },
                {
                    id: "11777-final-c-6",
                    question: "课程中讨论的"多模态推理"与简单的"多模态匹配"的区别是什么？",
                    options: ["没有区别", "推理需要多步逻辑推导，匹配只需计算相似度", "推理更简单", "匹配需要更多数据"],
                    answer: 1,
                    explanation: "多模态匹配（如相似度计算）是单步操作，而多模态推理需要综合多个模态的信息进行多步逻辑推导（如 VQA 中需要先识别物体再推理关系再回答问题）。",
                    difficulty: 2
                },
                {
                    id: "11777-final-c-7",
                    question: "课程中讨论的"模态特定编码器"设计的权衡是什么？",
                    options: ["没有权衡", "专用编码器能更好建模各模态特征但增加参数和复杂度，通用编码器反之", "专用更简单", "通用更好"],
                    answer: 1,
                    explanation: "专用编码器（如 ViT 处理图像、BERT 处理文本）能更好建模各模态的特定结构，但增加参数量和系统复杂度；通用编码器（如 Perceiver）简化架构但可能损失专业性。",
                    difficulty: 2
                },
                {
                    id: "11777-final-c-8",
                    question: "课程中讨论的"多模态知识蒸馏"的目标是什么？",
                    options: ["增加模型大小", "将大型多模态模型的知识压缩到更小的模型中，便于部署", "增加训练数据", "提高模型复杂度"],
                    answer: 1,
                    explanation: "多模态知识蒸馏通过训练小模型模仿大模型的多模态行为，在保持大部分能力的同时大幅减少参数量和计算需求，便于在资源受限环境部署。",
                    difficulty: 2
                },
                {
                    id: "11777-final-c-9",
                    question: "课程中讨论的"跨模态推理链"（Chain of Multimodal Reasoning）的目的是什么？",
                    options: ["加速推理", "通过分解多模态推理为可解释的步骤，提高复杂任务的准确性", "减少参数", "简化模型"],
                    answer: 1,
                    explanation: "跨模态推理链将复杂的多模态理解任务分解为可解释的步骤（如先定位、再识别、然后推理关系、最后回答），提高推理准确性和可解释性。",
                    difficulty: 3
                },
                {
                    id: "11777-final-c-10",
                    question: "课程中讨论的多模态模型评估面临的独特挑战是什么？",
                    options: ["没有挑战", "需要同时评估多个维度（各模态理解、跨模态对齐、推理能力等），没有统一标准", "只需要准确率", "与单模态相同"],
                    answer: 1,
                    explanation: "多模态评估需要覆盖各模态理解能力、跨模态对齐质量、推理能力和生成质量等多个维度，且不同任务的评估标准差异很大。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "11777-final-f-1",
                    question: "课程中讨论的多模态表示学习需要处理不同模态之间的____（Heterogeneity）和关联性。",
                    answer: "异质性",
                    explanation: "不同模态（图像、文本、音频）的数据格式、统计特性和语义层次差异很大（异质性），多模态学习需要在保持各模态特性的同时建立关联。",
                    difficulty: 2
                },
                {
                    id: "11777-final-f-2",
                    question: "多模态预训练中的掩码建模目标需要模型根据上下文____被遮掩的模态内容。",
                    answer: "重建",
                    explanation: "掩码建模（如 MLM、MIM）通过随机遮掩部分输入内容，训练模型根据可见上下文重建被遮掩内容，学习深入的跨模态理解。",
                    difficulty: 2
                },
                {
                    id: "11777-final-f-3",
                    question: "课程中讨论的"视觉接地"（Visual Grounding）需要模型同时具备视觉____和语言理解能力。",
                    answer: "定位",
                    explanation: "视觉接地要求模型在理解语言描述的同时精确定位图像中对应的区域，需要视觉定位能力和语言理解能力的深度结合。",
                    difficulty: 2
                },
                {
                    id: "11777-final-f-4",
                    question: "多模态大模型中的视觉投影层将视觉特征从编码器维度映射到语言模型的____维度。",
                    answer: "嵌入",
                    explanation: "视觉投影层（Visual Projector）通过线性或 MLP 变换将视觉编码器输出的特征维度转换为与语言模型嵌入维度相同的大小，使两者可以拼接输入 LLM。",
                    difficulty: 2
                },
                {
                    id: "11777-final-f-5",
                    question: "课程中讨论的"零样本多模态分类"利用预训练模型的跨模态对齐能力来实现无____分类。",
                    answer: "标注",
                    explanation: "零样本分类利用 CLIP 等模型学习的跨模态对齐能力，通过类别名称的文本嵌入与图像嵌入的相似度比较来分类，无需在目标数据集上训练。",
                    difficulty: 1
                },
                {
                    id: "11777-final-f-6",
                    question: "多模态模型中的"灾难性遗忘"问题指是在微调时新知识覆盖了____的知识。",
                    answer: "预训练",
                    explanation: "多模态模型在微调特定任务时，可能丢失预训练中学到的通用跨模态知识，导致在其他任务上的性能下降。",
                    difficulty: 2
                },
                {
                    id: "11777-final-f-7",
                    question: "课程中讨论的"音频-视觉-语言"三模态模型需要同时建模三种模态之间的____关系。",
                    answer: "跨模态",
                    explanation: "三模态模型需要建模音频-视觉、视觉-语言、音频-语言以及三者之间的复杂跨模态关系，比双模态建模更具挑战性。",
                    difficulty: 2
                },
                {
                    id: "11777-final-f-8",
                    question: "课程中讨论的多模态模型中的"注意力蒸馏"是将教师模型的____模式传递给学生模型。",
                    answer: "注意力",
                    explanation: "注意力蒸馏让小模型（学生）模仿大模型（教师）的注意力模式，而不仅仅模仿最终输出，能更好地传递模型的推理过程和知识结构。",
                    difficulty: 3
                },
                {
                    id: "11777-final-f-9",
                    question: "多模态模型的"安全对齐"需要确保模型不会产生与输入图像不一致的____描述。",
                    answer: "虚假",
                    explanation: "多模态安全对齐需要防止模型生成与输入图像不一致的虚假描述（幻觉），确保生成内容忠实于实际输入，避免误导用户。",
                    difficulty: 2
                },
                {
                    id: "11777-final-f-10",
                    question: "课程中讨论的多模态学习的最终目标是构建能像人类一样____地理解和处理多模态信息的系统。",
                    answer: "综合",
                    explanation: "人类能自然地综合视觉、听觉、语言等多种感知通道的信息来理解世界，多模态学习的终极目标是构建能类似地综合处理多模态信息的 AI 系统。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "11777-final-code-1",
                    question: "补全以下实现对比学习中 InfoNCE 损失（带温度参数）的代码",
                    code: "import torch\nimport torch.nn.functional as F\n\ndef info_nce_loss(text_embeds, image_embeds, temperature=0.07):\n    \"\"\"InfoNCE 对比学习损失\n    \n    Args:\n        text_embeds: 文本嵌入 (batch, dim)\n        image_embeds: 图像嵌入 (batch, dim)\n        temperature: 温度参数\n    Returns:\n        loss: 对比损失\n    \"\"\"\n    # L2 归一化\n    text_embeds = F.normalize(text_embeds, dim=-1)\n    image_embeds = F.normalize(image_embeds, dim=-1)\n    \n    # 计算相似度矩阵\n    logits = torch.mm(text_embeds, image_embeds.T) / temperature\n    \n    # 对角线是正样本（匹配对）\n    labels = torch.arange(logits.shape[0], device=logits.device)\n    \n    # 双向对比损失\n    loss_t2i = F.cross_entropy(logits, labels)\n    loss_i2t = F.cross_entropy(logits.T, labels)\n    \n    return ____",
                    answer: "(loss_t2i + loss_i2t) / 2",
                    explanation: "InfoNCE 损失取文本到图像和图像到文本两个方向交叉熵损失的平均值，确保双向对齐的一致性。",
                    difficulty: 2
                },
                {
                    id: "11777-final-code-2",
                    question: "补全以下实现视觉接地（Visual Grounding）预测的简化代码",
                    code: "import torch\nimport torch.nn as nn\n\nclass VisualGroundingHead(nn.Module):\n    def __init__(self, visual_dim, text_dim, hidden_dim):\n        super().__init__()\n        self.text_proj = nn.Linear(text_dim, hidden_dim)\n        self.region_proj = nn.Linear(visual_dim, hidden_dim)\n        self.bbox_head = nn.Linear(hidden_dim, 4)  # 预测 (x, y, w, h)\n    \n    def forward(self, visual_regions, text_embedding):\n        \"\"\"预测与文本描述最匹配的图像区域\n        \n        Args:\n            visual_regions: 图像区域特征 (batch, num_regions, visual_dim)\n            text_embedding: 文本嵌入 (batch, text_dim)\n        Returns:\n            bbox: 预测的边界框 (batch, 4)\n        \"\"\"\n        # 投影到统一空间\n        text_feat = self.text_proj(text_embedding)  # (batch, hidden_dim)\n        region_feat = self.region_proj(visual_regions)  # (batch, num_regions, hidden_dim)\n        \n        # 注意力匹配：找到最相关的区域\n        scores = torch.bmm(region_feat, text_feat.unsqueeze(-1)).squeeze(-1)  # (batch, num_regions)\n        attn_weights = torch.softmax(scores, dim=-1)\n        \n        # 加权聚合最相关区域的特征\n        attended_region = torch.bmm(attn_weights.unsqueeze(1), region_feat).squeeze(1)\n        \n        # 预测边界框\n        bbox = self.____(attended_region)\n        return bbox",
                    answer: "bbox_head",
                    explanation: "视觉接地头部通过注意力机制找到与文本描述最匹配的图像区域，然后用该区域的特征预测边界框坐标（x, y, width, height）。",
                    difficulty: 3
                }
            ]
        }
    }

,
  "CS237B Robot Autonomy II": {
    courseId: "cs237b-robot-autonomy",
    domain: "robotics",
    mid: {
      choice: [
        { id: "cs237b-mid-c-1", question: "以下哪个不是模仿学习（Imitation Learning）的典型方法？", options: ["行为克隆", "逆强化学习", "Q-Learning", "DAgger"], answer: 2, explanation: "Q-Learning是强化学习算法，不需要专家示范；其他三个都是模仿学习方法。", difficulty: 2 },
        { id: "cs237b-mid-c-2", question: "在机器人操作任务中，视觉伺服（Visual Servoing）通常分为哪两类？", options: ["位置基和图像基", "开环和闭环", "前馈和反馈", "静态和动态"], answer: 0, explanation: "视觉伺服分为基于位置的（PBVS）和基于图像的（IBVS）两种。", difficulty: 2 },
        { id: "cs237b-mid-c-3", question: "DAgger算法解决的核心问题是什么？", options: ["数据效率", "分布偏移", "奖励设计", "过拟合"], answer: 1, explanation: "DAgger（Dataset Aggregation）通过在训练分布上收集专家标注来解决行为克隆中的分布偏移问题。", difficulty: 3 },
        { id: "cs237b-mid-c-4", question: "在Deep RL中，Soft Actor-Critic (SAC) 的目标函数包含什么特殊项？", options: ["正则化项", "熵正则化项", "权重衰减项", "噪声注入项"], answer: 1, explanation: "SAC在最大化累积奖励的同时最大化策略的熵，鼓励探索。", difficulty: 3 },
        { id: "cs237b-mid-c-5", question: "以下哪个不是机器人常用的抓取表示方法？", options: ["6-DoF抓取", "平面抓取", "力封闭抓取", "语义抓取"], answer: 3, explanation: "语义抓取更多是一种概念，不是标准的抓取几何表示方法。", difficulty: 1 },
        { id: "cs237b-mid-c-6", question: "在人机协作场景中，阻抗控制的作用是什么？", options: ["提高运动精度", "调节末端执行器的柔顺性", "增加运动速度", "减少能耗"], answer: 1, explanation: "阻抗控制通过调节机器人末端的刚度和阻尼特性，实现柔顺交互。", difficulty: 2 },
        { id: "cs237b-mid-c-7", question: "点云配准（Point Cloud Registration）常用的算法是？", options: ["RANSAC", "ICP（迭代最近点）", "A*", "Dijkstra"], answer: 1, explanation: "ICP是经典的点云配准算法，通过迭代寻找最近点对来对齐两个点云。", difficulty: 2 },
        { id: "cs237b-mid-c-8", question: "在模仿学习中，专家示范的主要作用是什么？", options: ["替代奖励函数", "初始化策略参数", "生成合成数据", "校准传感器"], answer: 0, explanation: "模仿学习通过专家示范来隐式或显式地定义任务目标，避免手动设计奖励函数。", difficulty: 2 },
        { id: "cs237b-mid-c-9", question: "以下哪个是模型无关（Model-Free）强化学习的特点？", options: ["需要学习环境模型", "不需要环境转移概率信息", "只能处理连续动作", "总是比Model-Based慢"], answer: 1, explanation: "Model-Free RL直接从交互数据中学习策略或价值函数，不需要建立环境模型。", difficulty: 2 },
        { id: "cs237b-mid-c-10", question: "在多指灵巧手操作中，抓取稳定性分析通常使用什么概念？", options: ["可达工作空间", "力封闭", "雅可比矩阵", "D-H参数"], answer: 1, explanation: "力封闭分析判断手指能否对物体施加足够的力来抵抗所有外力，保证抓取稳定。", difficulty: 3 }
      ],
      fill: [
        { id: "cs237b-mid-f-1", question: "强化学习中，智能体的目标是最大化____的期望值。", answer: "累计奖励", explanation: "强化学习的核心目标是找到策略使未来奖励的期望和最大化。", difficulty: 1 },
        { id: "cs237b-mid-f-2", question: "在机器人视觉中，____是指从图像中恢复物体的6-DoF位姿。", answer: "位姿估计", explanation: "6-DoF位姿估计是机器人操作的关键感知任务。", difficulty: 2 },
        { id: "cs237b-mid-f-3", question: "SAC算法中的____项鼓励智能体探索更多状态。", answer: "熵", explanation: "熵正则化使策略倾向于输出更均匀的动作分布，促进探索。", difficulty: 2 },
        { id: "cs237b-mid-f-4", question: "行为克隆（Behavioral Cloning）将模仿学习问题转化为____问题。", answer: "监督学习", explanation: "行为克隆将专家状态-动作对作为训练数据，直接学习状态到动作的映射。", difficulty: 1 },
        { id: "cs237b-mid-f-5", question: "在ROS中，节点之间通信的三种基本方式是Topic、Service和____。", answer: "Action", explanation: "ROS提供三种通信机制：异步的Topic、同步的Service和带反馈的Action。", difficulty: 2 },
        { id: "cs237b-mid-f-6", question: "机器人逆运动学（Inverse Kinematics）的求解通常存在____解。", answer: "多", explanation: "对于冗余或复杂机械臂，IK通常存在多个解（肘关节翻转等）。", difficulty: 2 },
        { id: "cs237b-mid-f-7", question: "深度强化学习中，经验回放（Experience Replay）的主要作用是打破数据的____。", answer: "相关性", explanation: "经验回放缓冲区存储历史转移数据，采样时打破连续时间步数据间的相关性。", difficulty: 2 },
        { id: "cs237b-mid-f-8", question: "抓取规划中，____是指找到能够稳定抓取物体的手指位置和姿态。", answer: "抓取姿态", explanation: "抓取姿态规划是确定手指接触点和接近方向的过程。", difficulty: 1 },
        { id: "cs237b-mid-f-9", question: "在Sim-to-Real迁移中，____（Domain Randomization）通过随机化仿真参数来缩小sim-real差距。", answer: "域随机化", explanation: "域随机化在训练时随机化物理参数、外观等，使策略更鲁棒。", difficulty: 3 },
        { id: "cs237b-mid-f-10", question: "PPO算法通过____机制限制策略更新步长，保证训练稳定性。", answer: "裁剪", explanation: "PPO通过裁剪重要性采样比率，防止策略更新过大导致崩溃。", difficulty: 3 }
      ],
      code: [
        { id: "cs237b-mid-code-1", question: "补全以下SAC策略网络的输出层代码", code: "import torch\nimport torch.nn as nn\n\nclass SACPolicy(nn.Module):\n    def __init__(self, state_dim, action_dim, hidden_dim=256):\n        super().__init__()\n        self.fc1 = nn.Linear(state_dim, hidden_dim)\n        self.fc2 = nn.Linear(hidden_dim, hidden_dim)\n        self.mean = nn.Linear(hidden_dim, action_dim)\n        self.log_std = nn.Linear(hidden_dim, action_dim)\n    \n    def forward(self, state):\n        x = torch.relu(self.fc1(state))\n        x = torch.relu(self.fc2(x))\n        mean = self.mean(x)\n        log_std = ____\n        return mean, log_std", answer: "self.log_std(x).clamp(-20, 2)", explanation: "SAC需要输出动作分布的均值和对数标准差，clamp防止标准差过大或过小。", difficulty: 3 },
        { id: "cs237b-mid-code-2", question: "补全以下逆运动学数值求解代码", code: "import numpy as np\n\ndef inverse_kinematics(jacobian_fn, current_q, target_pos, tolerance=1e-4, max_iter=100):\n    \"\"\"使用阻尼最小二乘法求解IK\"\"\"\n    q = current_q.copy()\n    damping = 0.1\n    \n    for i in range(max_iter):\n        J = jacobian_fn(q)\n        error = target_pos - ____\n        \n        if np.linalg.norm(error) < tolerance:\n            break\n        \n        delta_q = J.T @ np.linalg.solve(J @ J.T + damping**2 * np.eye(3), error)\n        q += delta_q\n    \n    return q", answer: "forward_kinematics(q)", explanation: "IK需要计算当前位姿与目标位姿的误差，通过前向运动学得到当前末端位置。", difficulty: 2 }
      ]
    },
    final: {
      choice: [
        { id: "cs237b-fin-c-1", question: "在多任务强化学习中，MTSAC算法如何处理不同任务的Q值？", options: ["取平均值", "任务特定的Q头共享编码器", "完全独立的网络", "随机选择"], answer: 1, explanation: "MTSAC使用共享的编码器和任务特定的Q值头，在多任务间共享表示。", difficulty: 3 },
        { id: "cs237b-fin-c-2", question: "以下哪种方法最适合处理长序列的视觉观测？", options: ["CNN+MLP", "Transformer", "RNN", "简单全连接"], answer: 1, explanation: "Transformer通过自注意力机制能有效捕捉长序列中的依赖关系。", difficulty: 2 },
        { id: "cs237b-fin-c-3", question: "在机器人组装任务中，力/位混合控制的特点是什么？", options: ["只控制位置", "在不同方向上分别控制力和位置", "只控制力", "不需要传感器"], answer: 1, explanation: "混合控制在某些自由度控制位置（如X/Y方向），在其他自由度控制力（如Z方向压入）。", difficulty: 3 },
        { id: "cs237b-fin-c-4", question: "Hindsight Experience Replay (HER) 的核心思想是什么？", options: ["丢弃失败的经验", "将失败轨迹重标注为在替代目标下的成功", "只保留成功的经验", "增加探索噪声"], answer: 1, explanation: "HER将未达到目标的轨迹重新解释为达到了某个实际达到的状态，提高数据利用率。", difficulty: 3 },
        { id: "cs237b-fin-c-5", question: "在基于模型的强化学习中，世界模型的作用是什么？", options: ["替代奖励函数", "预测环境状态转移", "加速渲染", "存储经验"], answer: 1, explanation: "世界模型学习环境动力学，可以用于模拟环境交互进行策略训练。", difficulty: 2 },
        { id: "cs237b-fin-c-6", question: "视觉触觉融合在操作任务中的优势是什么？", options: ["降低计算成本", "获得接触力信息，弥补视觉不足", "减少传感器数量", "提高视觉精度"], answer: 1, explanation: "触觉传感器提供局部接触信息，可以检测滑动、力等视觉难以获取的信息。", difficulty: 2 },
        { id: "cs237b-fin-c-7", question: "在机器人学习中，课程学习（Curriculum Learning）的策略是？", options: ["随机打乱任务顺序", "从简单任务逐步过渡到复杂任务", "同时训练所有难度任务", "只训练最难的任务"], answer: 1, explanation: "课程学习按照从易到难的顺序安排训练任务，帮助学习过程更稳定。", difficulty: 2 },
        { id: "cs237b-fin-c-8", question: "Goal-Conditioned RL中，HER算法解决了什么问题？", options: ["奖励稀疏", "状态空间过大", "探索不足", "模型不准确"], answer: 0, explanation: "HER通过自动重新定义目标，解决了稀疏奖励下学习困难的问题。", difficulty: 3 },
        { id: "cs237b-fin-c-9", question: "在灵巧操作中，基于采样的规划方法相比梯度优化的优点是什么？", options: ["速度更快", "能处理非凸搜索空间", "不需要模型", "总是找到最优解"], answer: 1, explanation: "采样方法（如CEM）不依赖梯度信息，能处理非凸、多模态的规划问题。", difficulty: 3 },
        { id: "cs237b-fin-c-10", question: "在真实机器人学习中，安全探索的主要约束是什么？", options: ["计算资源", "不损坏机器人或环境", "训练时间", "数据收集成本"], answer: 1, explanation: "安全探索必须保证机器人在学习过程中不会对自身或环境造成不可逆的损害。", difficulty: 2 }
      ],
      fill: [
        { id: "cs237b-fin-f-1", question: "在行为克隆中，____偏移是由于训练分布和测试分布不匹配导致的性能下降。", answer: "分布", explanation: "DAgger等方法专门解决行为克隆中的分布偏移问题。", difficulty: 3 },
        { id: "cs237b-fin-f-2", question: "多任务强化学习中，____正则化可以防止任务间的负迁移。", answer: "梯度", explanation: "梯度正则化约束不同任务的梯度方向，减少任务间的冲突。", difficulty: 3 },
        { id: "cs237b-fin-f-3", question: "在Sim-to-Real迁移中，____（Sim-to-Real Transfer）旨在缩小仿真和真实环境的差距。", answer: "域适应", explanation: "域适应方法试图让仿真中训练的策略更好地泛化到真实环境。", difficulty: 2 },
        { id: "cs237b-fin-f-4", question: "机器人操作中，____抓取规划指同时考虑抓取姿态和后续操作目标。", answer: "任务相关", explanation: "任务相关抓取规划不仅考虑稳定性，还考虑抓取后如何执行具体操作。", difficulty: 3 },
        { id: "cs237b-fin-f-5", question: "在视觉伺服中，图像雅可比矩阵描述了关节速度和____速度之间的关系。", answer: "图像", explanation: "图像雅可比（交互矩阵）建立关节速度与图像特征变化率之间的映射。", difficulty: 3 },
        { id: "cs237b-fin-f-6", question: "Transformer在机器人学习中的Self-Attention机制允许模型关注____信息。", answer: "全局", explanation: "自注意力机制让每个时间步都能直接访问序列中所有其他时间步的信息。", difficulty: 2 },
        { id: "cs237b-fin-f-7", question: "在机器人操作中，力闭合条件保证抓取对任意方向的外力都能提供____。", answer: "静力平衡", explanation: "力封闭意味着手指施加的力可以平衡任何方向和大小的外力。", difficulty: 2 },
        { id: "cs237b-fin-f-8", question: "基于模型的RL中，____（Model-Predictive Control）利用学到的模型在线规划动作序列。", answer: "MPC", explanation: "MPC在每个时间步使用模型预测未来并优化动作序列，执行第一步后重新规划。", difficulty: 2 },
        { id: "cs237b-fin-f-9", question: "模仿学习中，____学习通过恢复奖励函数来学习策略。", answer: "逆强化", explanation: "逆强化学习（IRL）从专家示范中推断奖励函数，然后用RL算法学习策略。", difficulty: 2 },
        { id: "cs237b-fin-f-10", question: "在机器人抓取中，____是指抓取后物体不会在重力等外力作用下滑落。", answer: "稳定性", explanation: "抓取稳定性确保物体在外部扰动下保持在手内的能力。", difficulty: 1 }
      ],
      code: [
        { id: "cs237b-fin-code-1", question: "补全以下DQN经验回放的采样代码", code: "import random\nimport numpy as np\n\nclass ReplayBuffer:\n    def __init__(self, capacity):\n        self.buffer = []\n        self.capacity = capacity\n        self.position = 0\n    \n    def push(self, state, action, reward, next_state, done):\n        if len(self.buffer) < self.capacity:\n            self.buffer.append(None)\n        self.buffer[self.position] = (state, action, reward, next_state, done)\n        self.position = (self.position + 1) % self.capacity\n    \n    def sample(self, batch_size):\n        batch = random.sample(self.buffer, batch_size)\n        states, actions, rewards, next_states, dones = zip(*batch)\n        return (\n            np.array(states),\n            np.array(actions),\n            np.array(rewards, dtype=np.float32),\n            np.array(next_states),\n            ____\n        )", answer: "np.array(dones, dtype=np.float32)", explanation: "done标志（0.0或1.0）需要转换为浮点数组以支持向量化计算。", difficulty: 2 },
        { id: "cs237b-fin-code-2", question: "补全以下SAC的Q值目标计算代码", code: "def sac_critic_loss(policy, q1, q2, replay_buffer, gamma=0.99, alpha=0.2):\n    states, actions, rewards, next_states, dones = replay_buffer.sample(batch_size)\n    \n    with torch.no_grad():\n        next_mean, next_log_std = policy(next_states)\n        next_std = next_log_std.exp()\n        next_action = ____\n        \n        q1_next = q1(next_states, next_action)\n        q2_next = q2(next_states, next_action)\n        q_next = torch.min(q1_next, q2_next)\n        q_target = rewards + gamma * (1 - dones) * (q_next - alpha * log_prob)\n    \n    q1_loss = F.mse_loss(q1(states, actions), q_target)\n    return q1_loss", answer: "reparameterize(next_mean, next_std)", explanation: "SAC使用重参数化技巧从分布中采样，同时保持梯度可传播。", difficulty: 3 }
      ]
    }
  },
  "Robotics Specialization": {
    courseId: "robotics-specialization-upenn",
    domain: "robotics",
    mid: {
      choice: [
        { id: "robotics-sp-mid-c-1", question: "ROS中用于处理点云数据的常用库是？", options: ["OpenCV", "PCL", "TensorFlow", "NumPy"], answer: 1, explanation: "PCL（Point Cloud Library）是ROS中处理3D点云数据的标准库。", difficulty: 2 },
        { id: "robotics-sp-mid-c-2", question: "SLAM中，前端（Frontend）的主要任务是什么？", options: ["全局优化", "数据关联和局部估计", "回环检测", "地图管理"], answer: 1, explanation: "SLAM前端负责特征提取、帧间匹配和局部状态估计，为后端提供初始值。", difficulty: 2 },
        { id: "robotics-sp-mid-c-3", question: "四旋翼无人机的欠驱动特性意味着什么？", options: ["不能飞行", "独立控制自由度少于总自由度", "速度受限", "只能悬停"], answer: 1, explanation: "四旋翼有6个自由度但只有4个独立控制输入（4个电机转速），无法独立控制所有自由度。", difficulty: 3 },
        { id: "robotics-sp-mid-c-4", question: "在视觉里程计中，特征匹配的常用方法是？", options: ["模板匹配", "光流法和描述子匹配", "深度学习", "边缘检测"], answer: 1, explanation: "光流法和SIFT/ORB等描述子匹配是视觉里程计中常用的帧间特征关联方法。", difficulty: 2 },
        { id: "robotics-sp-mid-c-5", question: "ROS中的launch文件主要用于什么？", options: ["编写代码", "同时启动多个节点和配置参数", "调试程序", "数据记录"], answer: 1, explanation: "launch文件可以同时启动多个ROS节点并设置参数，简化系统启动流程。", difficulty: 1 },
        { id: "robotics-sp-mid-c-6", question: "卡尔曼滤波的预测步骤中，状态协方差如何变化？", options: ["保持不变", "增加", "减少", "变为零"], answer: 1, explanation: "预测步骤引入过程噪声，使状态不确定性增加，协方差矩阵变大。", difficulty: 2 },
        { id: "robotics-sp-mid-c-7", question: "IMU（惯性测量单元）通常提供哪些传感器数据？", options: ["加速度计和陀螺仪", "相机和激光雷达", "GPS和磁力计", "编码器和力传感器"], answer: 0, explanation: "IMU核心组件是加速度计（测线加速度）和陀螺仪（测角速度），通常还有磁力计。", difficulty: 1 },
        { id: "robotics-sp-mid-c-8", question: "在无人机路径规划中，A*算法相比Dijkstra算法的优势是什么？", options: ["保证最短路径", "使用启发式函数加速搜索", "适用于连续空间", "能处理动态障碍"], answer: 1, explanation: "A*使用启发函数引导搜索方向，在保证最优性的前提下减少搜索节点数。", difficulty: 2 },
        { id: "robotics-sp-mid-c-9", question: "ROS中的TF（坐标变换）树的作用是什么？", options: ["存储地图", "管理不同参考系之间的坐标变换", "规划路径", "控制电机"], answer: 1, explanation: "TF维护了机器人各部件坐标系之间的变换关系，是ROS定位和导航的基础。", difficulty: 2 },
        { id: "robotics-sp-mid-c-10", question: "以下哪种激光雷达在室内机器人中最常用？", options: ["3D激光雷达", "2D激光雷达（LiDAR）", "超声波传感器", "红外传感器"], answer: 1, explanation: "2D激光雷达成本低、数据量小，适合平面导航和避障，是室内机器人的主流传感器。", difficulty: 1 }
      ],
      fill: [
        { id: "robotics-sp-mid-f-1", question: "SLAM的全称是Simultaneous Localization and ____。", answer: "Mapping", explanation: "SLAM同时解决定位和建图两个问题。", difficulty: 1 },
        { id: "robotics-sp-mid-f-2", question: "在机器人学中，____描述了关节速度和末端执行器线速度/角速度之间的关系。", answer: "雅可比矩阵", explanation: "雅可比矩阵J建立了关节空间速度到笛卡尔空间速度的线性映射。", difficulty: 2 },
        { id: "robotics-sp-mid-f-3", question: "四旋翼无人机通过改变不同电机的____来实现姿态控制。", answer: "转速", explanation: "四旋翼通过差速控制实现俯仰、滚转和偏航运动。", difficulty: 1 },
        { id: "robotics-sp-mid-f-4", question: "在ROS中，____（Topic）是一种发布-订阅的异步通信机制。", answer: "话题", explanation: "ROS话题提供节点间的异步消息传递，是ROS最常用的通信方式。", difficulty: 1 },
        { id: "robotics-sp-mid-f-5", question: "卡尔曼滤波是线性系统的最优____估计器。", answer: "贝叶斯", explanation: "卡尔曼滤波在高斯线性假设下是贝叶斯框架中的最优状态估计。", difficulty: 3 },
        { id: "robotics-sp-mid-f-6", question: "在SLAM后端优化中，____方法通过最小化所有约束的误差来优化位姿图。", answer: "图优化", explanation: "图优化将SLAM建模为图，节点是位姿，边是约束，通过最小化误差进行全局优化。", difficulty: 3 },
        { id: "robotics-sp-mid-f-7", question: "无人机导航中的____指在飞行过程中实时检测和避开障碍物。", answer: "避障", explanation: "避障是无人机安全飞行的关键能力，通常结合传感器和规划算法实现。", difficulty: 1 },
        { id: "robotics-sp-mid-f-8", question: "视觉SLAM中，____指从相机图像中提取和匹配特征点。", answer: "特征提取", explanation: "特征提取和匹配是视觉SLAM前端的核心步骤，为位姿估计提供对应关系。", difficulty: 2 },
        { id: "robotics-sp-mid-f-9", question: "ROS中的____文件定义了多个节点及其连接关系的系统架构。", answer: "launch", explanation: "launch文件是ROS系统部署的重要工具，定义了完整的节点图。", difficulty: 1 },
        { id: "robotics-sp-mid-f-10", question: "在无人机编队飞行中，____控制策略指每架无人机只根据邻居信息做出决策。", answer: "分布式", explanation: "分布式控制不需要中央协调器，每架无人机基于局部信息自主决策。", difficulty: 3 }
      ],
      code: [
        { id: "robotics-sp-mid-code-1", question: "补全以下ROS话题发布器代码", code: "import rospy\nfrom std_msgs.msg import String\n\nrospy.init_node('talker')\npub = rospy.Publisher('chatter', String, queue_size=10)\nrate = rospy.Rate(10)  # 10Hz\n\nwhile not rospy.is_shutdown():\n    msg = String()\n    msg.data = \"Hello ROS\"\n    ____\n    rate.sleep()", answer: "pub.publish(msg)", explanation: "使用publish方法发送消息到话题。", difficulty: 1 },
        { id: "robotics-sp-mid-code-2", question: "补全以下简单卡尔曼滤波预测步骤代码", code: "import numpy as np\n\ndef kalman_predict(x, P, F, Q):\n    \"\"\"卡尔曼滤波预测步骤\"\"\"\n    # x: 状态向量, P: 协方差, F: 状态转移矩阵, Q: 过程噪声\n    x_pred = F @ x\n    P_pred = ____\n    return x_pred, P_pred", answer: "F @ P @ F.T + Q", explanation: "预测协方差 = F * P * F^T + Q，反映状态不确定性随时间的增长。", difficulty: 2 }
      ]
    },
    final: {
      choice: [
        { id: "robotics-sp-fin-c-1", question: "在多传感器融合中，扩展卡尔曼滤波（EKF）与标准卡尔曼滤波的区别是什么？", options: ["EKF更快", "EKF能处理非线性系统", "EKF更简单", "EKF不需要噪声模型"], answer: 1, explanation: "EKF通过泰勒展开将非线性系统线性化，扩展了卡尔曼滤波的应用范围。", difficulty: 3 },
        { id: "robotics-sp-fin-c-2", question: "ORBSLAM2使用的特征类型是？", options: ["SIFT", "SURF", "ORB", "FAST"], answer: 2, explanation: "ORBSLAM使用ORB特征，它结合了FAST检测器和BRIEF描述子，具有旋转不变性。", difficulty: 2 },
        { id: "robotics-sp-fin-c-3", question: "无人机避障中，人工势场法的缺点是什么？", options: ["计算量太大", "可能陷入局部极小值", "不能处理动态障碍", "需要全局地图"], answer: 1, explanation: "人工势场法在引力和斥力平衡处可能陷入局部极小值，导致机器人无法到达目标。", difficulty: 3 },
        { id: "robotics-sp-fin-c-4", question: "在ROS2相比ROS1的改进中，通信模型的主要变化是什么？", options: ["只支持Topic", "引入DDS实现去中心化通信", "移除了Service", "不支持QoS"], answer: 1, explanation: "ROS2基于DDS实现去中心化通信，不再依赖中心化的ROS Master。", difficulty: 2 },
        { id: "robotics-sp-fin-c-5", question: "视觉惯性里程计（VIO）相比纯视觉VO的优势是什么？", options: ["更便宜", "在快速运动和弱纹理场景更鲁棒", "计算更快", "不需要相机"], answer: 1, explanation: "IMU提供高频运动信息，补充视觉在快速运动和纹理缺失场景的不足。", difficulty: 2 },
        { id: "robotics-sp-fin-c-6", question: "在无人机集群中，一致性算法的作用是什么？", options: ["统一外观", "使所有无人机的状态收敛到一致值", "减少能耗", "增加通信带宽"], answer: 1, explanation: "一致性算法使分布式系统中的智能体状态（位置、速度等）趋于一致。", difficulty: 3 },
        { id: "robotics-sp-fin-c-7", question: "LiDAR惯性里程计（LIO）融合中，IMU数据的主要作用是？", options: ["提供位置信息", "提供高频运动先验，加速扫描匹配", "替代LiDAR", "检测回环"], answer: 1, explanation: "IMU提供高频运动预测，用于去畸变和为LiDAR匹配提供初始估计。", difficulty: 2 },
        { id: "robotics-sp-fin-c-8", question: "在机器人导航栈中，全局规划器和局部规划器分别负责什么？", options: ["都负责避障", "全局规划最优路径，局部规划实时避障", "全局更快，局部更准", "两者完全相同"], answer: 1, explanation: "全局规划器在已知地图上计算路径，局部规划器根据实时传感器数据执行避障。", difficulty: 2 },
        { id: "robotics-sp-fin-c-9", question: "四旋翼无人机通过什么机制实现垂直起飞？", options: ["增加所有电机转速", "改变螺旋桨角度", "使用火箭推进器", "改变重心"], answer: 0, explanation: "四旋翼通过同时增加四个电机转速，产生大于重力的总升力实现垂直起飞。", difficulty: 1 },
        { id: "robotics-sp-fin-c-10", question: "在ROS导航中，代价地图（Costmap）的作用是什么？", options: ["存储地图图片", "为路径规划提供障碍物和安全区域信息", "记录机器人轨迹", "显示传感器数据"], answer: 1, explanation: "代价地图将传感器数据转化为统一的障碍物和代价表示，供规划算法使用。", difficulty: 2 }
      ],
      fill: [
        { id: "robotics-sp-fin-f-1", question: "视觉SLAM中，____指检测相机是否回到了之前访问过的位置，用于消除累积漂移。", answer: "回环检测", explanation: "回环检测发现重访位置后，可以修正累积误差，保证全局一致性。", difficulty: 2 },
        { id: "robotics-sp-fin-f-2", question: "在无人机路径规划中，RRT算法是一种基于____的随机采样方法。", answer: "采样", explanation: "RRT通过随机采样配置空间来逐步扩展搜索树。", difficulty: 2 },
        { id: "robotics-sp-fin-f-3", question: "SLAM中的后端优化通常使用____最小二乘法来优化位姿图。", answer: "非线性", explanation: "位姿图优化涉及旋转和变换，是一个非线性最小二乘问题。", difficulty: 3 },
        { id: "robotics-sp-fin-f-4", question: "在ROS中，____（Parameter Server）用于存储和共享配置参数。", answer: "参数服务器", explanation: "参数服务器允许所有节点读写全局参数，方便配置管理。", difficulty: 1 },
        { id: "robotics-sp-fin-f-5", question: "无人机控制中，级联PID控制器通常用于控制____和内环控制姿态角速度。", answer: "位置/姿态", explanation: "外环控制位置或姿态角度，内环控制角速度，实现稳定飞行控制。", difficulty: 2 },
        { id: "robotics-sp-fin-f-6", question: "在LiDAR SLAM中，____匹配是将当前帧点云与地图对齐的核心步骤。", answer: "扫描", explanation: "扫描匹配（如ICP）将新一帧点云与已有地图对齐，估计机器人运动。", difficulty: 2 },
        { id: "robotics-sp-fin-f-7", question: "视觉SLAM中，____（Bundle Adjustment）通过联合优化相机位姿和3D点来减小重投影误差。", answer: "光束法平差", explanation: "BA是视觉SLAM的金标准优化方法，联合优化所有相机参数和三维点。", difficulty: 3 },
        { id: "robotics-sp-fin-f-8", question: "在无人机编队控制中，领导者-跟随者方法中跟随者的控制目标是保持与____的相对位置。", answer: "领导者", explanation: "跟随者无人机跟踪领导者的位置和轨迹，维持编队形状。", difficulty: 2 },
        { id: "robotics-sp-fin-f-9", question: "在ROS中，____（Message）是节点间通信的数据结构。", answer: "消息", explanation: "ROS消息定义了节点间传递数据的类型和结构。", difficulty: 1 },
        { id: "robotics-sp-fin-f-10", question: "在无人机运动规划中，速度障碍（Velocity Obstacle）方法用于____。", answer: "避碰", explanation: "VO方法通过分析速度空间中的碰撞区域来规划无碰撞速度。", difficulty: 3 }
      ],
      code: [
        { id: "robotics-sp-fin-code-1", question: "补全以下简单ICP配准的核心步骤代码", code: "import numpy as np\nfrom scipy.spatial import cKDTree\n\ndef icp(source, target, max_iterations=20, tolerance=1e-6):\n    \"\"\"简化版ICP点云配准\"\"\"\n    src = source.copy()\n    transform = np.eye(4)\n    \n    for i in range(max_iterations):\n        tree = cKDTree(target)\n        distances, indices = tree.query(src)\n        \n        # 找到对应点对\n        matched_target = target[indices]\n        \n        # 计算最优变换（SVD）\n        H = (src - src.mean(0)).T @ (matched_target - matched_target.mean(0))\n        U, S, Vt = np.linalg.svd(H)\n        R = Vt.T @ U.T\n        t = ____\n        \n        # 更新变换\n        T = np.eye(4)\n        T[:3, :3] = R\n        T[:3, 3] = t\n        src = (R @ src.T).T + t\n        transform = T @ transform\n        \n        if np.max(np.abs(distances)) < tolerance:\n            break\n    \n    return transform", answer: "matched_target.mean(0) - R @ src.mean(0)", explanation: "最优平移量 = 目标质心 - R * 源质心，使配准后的对应点距离最小。", difficulty: 3 },
        { id: "robotics-sp-fin-code-2", question: "补全以下ROS简单订阅者回调函数代码", code: "import rospy\nfrom sensor_msgs.msg import LaserScan\n\ndef laser_callback(msg):\n    \"\"\"处理激光雷达数据\"\"\"\n    # 获取扫描数据\n    ranges = msg.ranges\n    angle_min = msg.angle_min\n    angle_increment = msg.angle_increment\n    \n    # 找到最近障碍物的距离和角度\n    min_dist = min(ranges)\n    min_index = ranges.index(min_dist)\n    min_angle = ____\n    \n    rospy.loginfo(f\"最近障碍物: 距离={min_dist:.2f}m, 角度={min_angle:.2f}rad\")", answer: "angle_min + min_index * angle_increment", explanation: "通过起始角度加索引乘以角度增量计算对应的物理角度。", difficulty: 2 }
      ]
    }
  },
  "Modern Robotics": {
    courseId: "modern-robotics",
    domain: "robotics",
    mid: {
      choice: [
        { id: "modern-robotics-mid-c-1", question: "Denavit-Hartenberg参数中，连杆参数包括哪四个？", options: ["a, alpha, d, theta", "x, y, z, angle", "length, width, height, mass", "position, orientation, velocity, acceleration"], answer: 0, explanation: "DH参数包含连杆长度a、连杆扭角alpha、连杆偏距d和关节角theta。", difficulty: 2 },
        { id: "modern-robotics-mid-c-2", question: "刚体变换矩阵属于以下哪个李群？", options: ["SO(2)", "SO(3)", "SE(3)", "以上都是"], answer: 2, explanation: "SE(3)是特殊欧几里得群，表示3D空间中的刚体变换（旋转+平移）。", difficulty: 3 },
        { id: "modern-robotics-mid-c-3", question: "逆运动学的解析解法通常适用于什么类型的机械臂？", options: ["冗余机械臂", "满足Pieper条件的6轴机械臂", "所有机械臂", "只有2轴机械臂"], answer: 1, explanation: "满足Pieper条件（相邻三轴交于一点）的6轴机械臂通常有解析IK解。", difficulty: 3 },
        { id: "modern-robotics-mid-c-4", question: "动力学中的拉格朗日方程基于什么物理量？", options: ["牛顿定律", "能量（动能和势能）", "动量守恒", "虚功原理"], answer: 1, explanation: "拉格朗日力学基于系统的动能和势能之差（拉格朗日量）来建立运动方程。", difficulty: 3 },
        { id: "modern-robotics-mid-c-5", question: "关节空间轨迹规划中，五次多项式插值需要满足什么边界条件？", options: ["位置连续", "位置、速度、加速度连续", "只有速度连续", "只有位置连续"], answer: 1, explanation: "五次多项式可以同时保证起始和终止点的位置、速度和加速度约束。", difficulty: 2 },
        { id: "modern-robotics-mid-c-6", question: "力控制中的阻抗控制模拟了什么物理系统？", options: ["电路系统", "质量-弹簧-阻尼系统", "热力学系统", "流体系统"], answer: 1, explanation: "阻抗控制将机器人末端模拟为质量-弹簧-阻尼系统，调节力和位移的关系。", difficulty: 3 },
        { id: "modern-robotics-mid-c-7", question: "以下哪个是机器人学中常用的速度级运动学方法？", options: ["正运动学", "雅可比矩阵", "拉格朗日动力学", "DH参数"], answer: 1, explanation: "雅可比矩阵建立了关节速度到末端执行器广义速度的线性映射。", difficulty: 2 },
        { id: "modern-robotics-mid-c-8", question: "在机器人控制中，PD控制器的特点是什么？", options: ["需要积分项", "对阶跃输入可能有稳态误差", "对扰动无响应", "只能用于线性系统"], answer: 1, explanation: "PD控制器没有积分项，对常值扰动或模型误差可能存在稳态误差。", difficulty: 2 },
        { id: "modern-robotics-mid-c-9", question: "欧拉角表示旋转时的缺点是什么？", options: ["计算复杂", "万向锁（Gimbal Lock）", "占用内存多", "不适合插值"], answer: 1, explanation: "欧拉角在某些姿态下存在万向锁问题，两个旋转轴对齐导致失去一个自由度。", difficulty: 2 },
        { id: "modern-robotics-mid-c-10", question: "在轨迹优化中，最小化什么目标函数可以得到最平滑的运动？", options: ["关节力矩", "关节速度或加速度的平方积分", "末端位置误差", "执行时间"], answer: 1, explanation: "最小化速度或加速度的平方积分可以得到能量最优或最平滑的轨迹。", difficulty: 2 }
      ],
      fill: [
        { id: "modern-robotics-mid-f-1", question: "齐次变换矩阵将旋转和平移统一为____变换。", answer: "刚体", explanation: "齐次变换矩阵表示3D空间中的刚体运动（旋转和平移的组合）。", difficulty: 1 },
        { id: "modern-robotics-mid-f-2", question: "在机器人动力学中，惯性矩阵M(q)总是____的。", answer: "正定", explanation: "惯性矩阵正定保证动能恒正，是系统稳定性的基础。", difficulty: 3 },
        { id: "modern-robotics-mid-f-3", question: "旋量理论（Screw Theory）提供了描述机器人运动的____方法。", answer: "统一", explanation: "旋量理论用指数映射统一描述旋转和平移，简化运动学建模。", difficulty: 3 },
        { id: "modern-robotics-mid-f-4", question: "正运动学从关节空间映射到____空间。", answer: "笛卡尔", explanation: "正运动学计算关节角度对应的末端执行器在笛卡尔空间中的位姿。", difficulty: 1 },
        { id: "modern-robotics-mid-f-5", question: "速度级运动学中，雅可比矩阵J的秩决定了机器人的____。", answer: "灵活性", explanation: "雅可比矩阵的秩表示末端在笛卡尔空间中可独立控制的自由度数。", difficulty: 3 },
        { id: "modern-robotics-mid-f-6", question: "轨迹规划中，____插值可以保证通过给定路径点且运动连续。", answer: "样条", explanation: "样条插值（如三次样条、B样条）可以构造光滑且通过指定点的轨迹。", difficulty: 2 },
        { id: "modern-robotics-mid-f-7", question: "拉格朗日动力学方程的一般形式为：M(q)q'' + C(q,q')q' + g(q) = ____。", answer: "tau", explanation: "这是标准的机器人动力学方程，tau是关节力矩向量。", difficulty: 3 },
        { id: "modern-robotics-mid-f-8", question: "机器人学中，____矩阵描述了力和力矩在不同坐标系间的变换。", answer: "力雅可比", explanation: "力雅可比的转置将笛卡尔空间的力映射到关节力矩。", difficulty: 3 },
        { id: "modern-robotics-mid-f-9", question: "四元数表示旋转的优点之一是避免了____问题。", answer: "万向锁", explanation: "四元数是四维表示，不存在欧拉角的万向锁问题。", difficulty: 2 },
        { id: "modern-robotics-mid-f-10", question: "在机器人操作中，____控制用于精确控制末端执行器的位置和姿态。", answer: "位姿", explanation: "位姿控制同时控制末端的位置和姿态，是操作任务的基础。", difficulty: 1 }
      ],
      code: [
        { id: "modern-robotics-mid-code-1", question: "补全以下DH参数齐次变换矩阵计算代码", code: "import numpy as np\n\ndef dh_transform(a, alpha, d, theta):\n    \"\"\"根据DH参数计算齐次变换矩阵\"\"\"\n    ct, st = np.cos(theta), np.sin(theta)\n    ca, sa = np.cos(alpha), np.sin(alpha)\n    \n    return np.array([\n        [ct, -st*ca,  st*sa, a*ct],\n        [st,  ct*ca, -ct*sa, a*st],\n        [0,   sa,     ca,    d],\n        [0,   0,      0,     ____]\n    ])", answer: "1", explanation: "齐次变换矩阵最后一行是[0, 0, 0, 1]，这是齐次坐标的标志。", difficulty: 1 },
        { id: "modern-robotics-mid-code-2", question: "补全以下二连杆正运动学代码", code: "import numpy as np\n\ndef forward_kinematics_2link(theta1, theta2, L1, L2):\n    \"\"\"二连杆正运动学\"\"\"\n    x = L1 * np.cos(theta1) + L2 * np.cos(theta1 + theta2)\n    y = ____\n    return np.array([x, y])", answer: "L1 * np.sin(theta1) + L2 * np.sin(theta1 + theta2)", explanation: "二连杆末端y坐标 = L1*sin(theta1) + L2*sin(theta1+theta2)。", difficulty: 1 }
      ]
    },
    final: {
      choice: [
        { id: "modern-robotics-fin-c-1", question: "在拉格朗日动力学中，科里奥利和离心力项C(q,q')q'的特点是什么？", options: ["线性于关节速度", "二次于关节速度", "与速度无关", "只在高速时存在"], answer: 1, explanation: "科里奥利和离心力项是关节速度的二次函数。", difficulty: 3 },
        { id: "modern-robotics-fin-c-2", question: "计算力矩控制（Computed Torque Control）的核心思想是什么？", options: ["忽略动力学模型", "用动力学模型进行线性化和解耦", "只用PID控制", "基于视觉反馈"], answer: 1, explanation: "计算力矩控制利用已知的动力学模型消除非线性项，将系统简化为线性解耦系统。", difficulty: 3 },
        { id: "modern-robotics-fin-c-3", question: "在接触任务中，顺应（Compliance）控制的目的是什么？", options: ["提高精度", "使机器人能够适应环境的不确定性", "增加刚度", "减少计算量"], answer: 1, explanation: "顺应控制使机器人在接触时能够被动或主动地适应环境，避免过大接触力。", difficulty: 3 },
        { id: "modern-robotics-fin-c-4", question: "以下哪种方法可以处理冗余机械臂的逆运动学？", options: ["解析法", "伪逆法", "查表法", "不需要处理"], answer: 1, explanation: "伪逆法（最小范数解）是处理冗余机械臂IK的标准方法，可优化次要目标。", difficulty: 3 },
        { id: "modern-robotics-fin-c-5", question: "在轨迹优化中，直接法和间接法的区别是什么？", options: ["没有区别", "直接法离散化轨迹，间接法求解最优性条件", "直接法更准确", "间接法更快"], answer: 1, explanation: "直接法将轨迹参数化后优化有限维变量，间接法求解Euler-Lagrange方程。", difficulty: 3 },
        { id: "modern-robotics-fin-c-6", question: "Lyapunov稳定性分析在机器人控制中的应用是什么？", options: ["轨迹规划", "证明闭环系统的稳定性", "参数估计", "障碍物检测"], answer: 1, explanation: "Lyapunov方法通过构造能量类函数来证明控制系统在平衡点附近的稳定性。", difficulty: 3 },
        { id: "modern-robotics-fin-c-7", question: "在机器人动力学辨识中，最小二乘法需要什么数据？", options: ["只位置数据", "位置和速度数据", "关节力矩和运动数据", "只有力数据"], answer: 2, explanation: "动力学参数辨识需要关节力矩测量值和对应的运动状态数据。", difficulty: 3 },
        { id: "modern-robotics-fin-c-8", question: "在任务空间控制中，奇异位形会导致什么问题？", options: ["精度提高", "雅可比矩阵降秩，某些方向运动受限", "速度增加", "力控制变好"], answer: 1, explanation: "在奇异位形处，雅可比矩阵秩亏，末端在某些方向无法运动或需要无穷大关节速度。", difficulty: 3 },
        { id: "modern-robotics-fin-c-9", question: "以下哪种插值方法可以保证通过所有路径点且曲率连续？", options: ["线性插值", "抛物线过渡", "三次样条", "五次多项式"], answer: 2, explanation: "三次样条插值保证位置和速度连续，且曲率连续使运动更平滑。", difficulty: 2 },
        { id: "modern-robotics-fin-c-10", question: "在力/位混合控制中，选择矩阵的作用是什么？", options: ["选择传感器", "决定在每个自由度上控制力还是位置", "选择关节", "选择坐标系"], answer: 1, explanation: "选择矩阵S和I-S分别分配力控制和位置控制的自由度。", difficulty: 3 }
      ],
      fill: [
        { id: "modern-robotics-fin-f-1", question: "动力学方程中的科里奥利矩阵C(q,q')通常具有____性质。", answer: "反对称", explanation: "对于选定的C矩阵定义，矩阵N = C(q,q') - 0.5 * dq'*C是对称矩阵。", difficulty: 3 },
        { id: "modern-robotics-fin-f-2", question: "在冗余机械臂控制中，____优化用于在满足主要任务的同时优化次要目标。", answer: "零空间", explanation: "利用雅可比零空间可以在不影响末端任务的情况下优化关节配置。", difficulty: 3 },
        { id: "modern-robotics-fin-f-3", question: "机器人操作中的力传感器通常安装在____和末端执行器之间。", answer: "腕部", explanation: "腕部力传感器测量末端执行器与环境的交互力。", difficulty: 1 },
        { id: "modern-robotics-fin-f-4", question: "在轨迹规划中，梯形速度轮廓包含加速、匀速和____三个阶段。", answer: "减速", explanation: "梯形速度轮廓是机器人点到点运动中最常用的速度规划方法。", difficulty: 1 },
        { id: "modern-robotics-fin-f-5", question: "机器人动力学参数包括连杆的质心位置、质量和____。", answer: "惯量", explanation: "惯量张量描述了连杆绕质心转动的质量分布特性。", difficulty: 2 },
        { id: "modern-robotics-fin-f-6", question: "在模型预测控制（MPC）中，优化问题通常在每个控制周期重新求解，这称为____。", answer: "滚动时域", explanation: "MPC在每个时间步求解有限时域优化问题，只执行第一步后重新规划。", difficulty: 2 },
        { id: "modern-robotics-fin-f-7", question: "在接触任务中，____（Wrench）是力和力矩的组合。", answer: "旋量", explanation: "Wrench（力旋量）是6维向量，包含3个力分量和3个力矩分量。", difficulty: 2 },
        { id: "modern-robotics-fin-f-8", question: "在机器人控制中，前馈控制基于____模型来预补偿期望运动所需的力矩。", answer: "动力学", explanation: "前馈控制利用动力学模型计算期望轨迹对应的关节力矩。", difficulty: 2 },
        { id: "modern-robotics-fin-f-9", question: "在刚体动力学中，动能可以表示为____形式：T = 0.5 * q'^T * M(q) * q'。", answer: "二次型", explanation: "动能是关节速度的二次函数，M(q)是正定惯性矩阵。", difficulty: 3 },
        { id: "modern-robotics-fin-f-10", question: "在轨迹优化中，____（Collocation）方法将连续轨迹离散为有限个点进行优化。", answer: "配点", explanation: "配点法在离散时间点上施加动力学约束，将最优控制问题转化为NLP。", difficulty: 3 }
      ],
      code: [
        { id: "modern-robotics-fin-code-1", question: "补全以下雅可比矩阵数值计算代码", code: "import numpy as np\n\ndef numerical_jacobian(forward_kinematics, q, epsilon=1e-6):\n    \"\"\"数值计算雅可比矩阵\"\"\"\n    n = len(q)\n    # 计算当前末端位姿\n    x0 = forward_kinematics(q)\n    dim = len(x0)\n    J = np.zeros((dim, n))\n    \n    for i in range(n):\n        q_plus = q.copy()\n        q_plus[i] += epsilon\n        x_plus = forward_kinematics(q_plus)\n        ____\n    \n    return J", answer: "J[:, i] = (x_plus - x0) / epsilon", explanation: "数值雅可比通过有限差分近似每个偏导数。", difficulty: 2 },
        { id: "modern-robotics-fin-code-2", question: "补全以下简单PD控制器代码", code: "import numpy as np\n\ndef pd_control(q_desired, q_actual, q_dot_desired, q_dot_actual, Kp, Kd):\n    \"\"\"PD关节空间控制器\"\"\"\n    position_error = q_desired - q_actual\n    velocity_error = q_dot_desired - q_dot_actual\n    \n    torque = ____\n    return torque", answer: "Kp * position_error + Kd * velocity_error", explanation: "PD控制力矩 = Kp * 位置误差 + Kd * 速度误差。", difficulty: 1 }
      ]
    }
  },
  "CS287 Advanced Robotics": {
    courseId: "cs287-advanced-robotics",
    domain: "robotics",
    mid: {
      choice: [
        { id: "cs287-mid-c-1", question: "在最优控制中，HJB（Hamilton-Jacobi-Bellman）方程适用于什么类型的问题？", options: ["离散时间问题", "连续时间确定性问题", "随机最优控制", "只有线性系统"], answer: 2, explanation: "HJB方程是随机最优控制的一般性理论框架，可以处理连续时间和噪声。", difficulty: 3 },
        { id: "cs287-mid-c-2", question: "LQR（线性二次调节器）问题中，代价函数是什么形式？", options: ["线性函数", "二次型函数", "指数函数", "对数函数"], answer: 1, explanation: "LQR最小化状态和控制输入的二次型代价函数。", difficulty: 2 },
        { id: "cs287-mid-c-3", question: "在接触动力学中，库仑摩擦模型描述了什么关系？", options: ["力和加速度", "法向力和最大切向摩擦力", "速度和力", "质量与惯性"], answer: 1, explanation: "库仑摩擦模型指出最大摩擦力与法向力成正比，比例系数为摩擦系数。", difficulty: 2 },
        { id: "cs287-mid-c-4", question: "iLQR（迭代LQR）相比标准LQR的改进是什么？", options: ["计算更快", "能处理非线性系统", "不需要模型", "保证全局最优"], answer: 1, explanation: "iLQR通过在当前轨迹处线性化来迭代求解非线性最优控制问题。", difficulty: 3 },
        { id: "cs287-mid-c-5", question: "在机器人操作中，力封闭（Force Closure）的条件是什么？", options: ["物体不动", "手指施加的力可以平衡任意方向的外力旋量", "抓取力最小", "不需要摩擦"], answer: 1, explanation: "力封闭要求通过摩擦锥内的接触力可以产生任意的合成力旋量。", difficulty: 3 },
        { id: "cs287-mid-c-6", question: "MPC（模型预测控制）的核心优势是什么？", options: ["计算最简单", "可以处理约束并在线重规划", "不需要模型", "收敛最快"], answer: 1, explanation: "MPC在每个时间步求解带约束的优化问题，执行第一步后重新规划。", difficulty: 2 },
        { id: "cs287-mid-c-7", question: "在机器人操作中，抓取规划的输入通常包括什么？", options: ["只有关节角度", "物体几何和目标位姿", "只有相机图像", "只有力传感器数据"], answer: 1, explanation: "抓取规划需要物体的几何信息和期望的抓取/放置位姿。", difficulty: 2 },
        { id: "cs287-mid-c-8", question: "接触点的雅可比矩阵（Contact Jacobian）在操作中用于什么？", options: ["视觉定位", "计算接触力和运动的关系", "轨迹规划", "电机控制"], answer: 1, explanation: "接触雅可比将接触力映射到关节力矩，是力控制的基础。", difficulty: 3 },
        { id: "cs287-mid-c-9", question: "在最优控制中，Pontryagin最小值原理提供了什么条件？", options: ["稳定性条件", "最优控制的必要条件", "充分条件", "收敛条件"], answer: 1, explanation: "PMP给出了最优控制的必要条件，通过哈密顿函数定义协态方程。", difficulty: 3 },
        { id: "cs287-mid-c-10", question: "以下哪个是操作任务中常用的抓取质量度量？", options: ["抓取速度", "抓取舒适度", "抓取力闭合质量", "抓取美观度"], answer: 2, explanation: "力闭合质量、抓取熵等是量化抓取稳定性与质量的标准度量。", difficulty: 2 }
      ],
      fill: [
        { id: "cs287-mid-f-1", question: "在最优控制中，____函数J(x,u)表示从初始状态出发的累积代价。", answer: "代价", explanation: "代价函数（或成本函数）定义了控制任务的目标，最优控制最小化它。", difficulty: 1 },
        { id: "cs287-mid-f-2", question: "LQR的最优控制律是状态的____函数：u = -Kx。", answer: "线性", explanation: "LQR的解是状态反馈控制，增益矩阵K通过求解Riccati方程获得。", difficulty: 2 },
        { id: "cs287-mid-f-3", question: "在接触力学中，____（Wrench）是力和力矩的6维向量表示。", answer: "力旋量", explanation: "力旋量包含3D力和3D力矩，是分析接触力的标准表示。", difficulty: 2 },
        { id: "cs287-mid-f-4", question: "iLQR中，前向传播步骤沿用____方向传播状态轨迹。", answer: "控制", explanation: "iLQR前向传播使用新的控制序列（加上修正项）来生成新轨迹。", difficulty: 3 },
        { id: "cs287-mid-f-5", question: "在机器人操作中，____分析指判断给定接触配置能否实现稳定抓取。", answer: "力封闭", explanation: "力封闭分析是抓取规划的核心步骤，判断抓取的稳定性。", difficulty: 2 },
        { id: "cs287-mid-f-6", question: "MPC中的____约束确保控制输入在执行器能力范围内。", answer: "输入", explanation: "输入约束限制了关节力矩、速度等执行器的物理极限。", difficulty: 2 },
        { id: "cs287-mid-f-7", question: "在最优控制中，____（Costate）变量在PMP中类似于拉格朗日乘子。", answer: "协态", explanation: "协态变量度量代价函数对状态的敏感度，定义了哈密顿系统的动力学。", difficulty: 3 },
        { id: "cs287-mid-f-8", question: "在操作任务中，____规划指同时规划抓取和后续操作的轨迹。", answer: "任务相关", explanation: "任务相关规划考虑整个操作流程，而不仅仅是抓取稳定性。", difficulty: 3 },
        { id: "cs287-mid-f-9", question: "在动力学系统中，____平衡点是指系统受扰后能返回的平衡点。", answer: "稳定", explanation: "Lyapunov稳定性定义了平衡点附近轨迹的行为特性。", difficulty: 2 },
        { id: "cs287-mid-f-10", question: "在接触丰富的操作中，____规划需要考虑物体在桌面上的滑动和翻转。", answer: "非预抓取", explanation: "非预抓取规划（如推、滑）利用环境约束来操纵物体。", difficulty: 3 }
      ],
      code: [
        { id: "cs287-mid-code-1", question: "补全以下LQR增益计算代码", code: "import numpy as np\n\ndef solve_lqr(A, B, Q, R, max_iter=100):\n    \"\"\"求解离散时间LQR的Riccati方程\"\"\"\n    P = Q.copy()\n    \n    for _ in range(max_iter):\n        # Riccati方程迭代\n        K = np.linalg.solve(R + B.T @ P @ B, B.T @ P @ A)\n        P_new = Q + A.T @ P @ (A - B @ K)\n        \n        if np.allclose(P, P_new, atol=1e-8):\n            break\n        P = P_new\n    \n    return ____", answer: "K", explanation: "LQR返回最优状态反馈增益K。", difficulty: 3 },
        { id: "cs287-mid-code-2", question: "补全以下简单接触力判定代码", code: "import numpy as np\n\ndef check_force_closure(contact_normals, friction_coeff=0.5):\n    \"\"\"检查力封闭条件（简化版）\"\"\"\n    n_contacts = len(contact_normals)\n    \n    # 构建力旋量矩阵\n    # 假设每个接触点有法向力和两个摩擦力方向\n    W = []\n    for normal in contact_normals:\n        # 生成摩擦锥内的力方向\n        W.append(normal)  # 简化：只用法向力\n    \n    W = np.array(W)\n    \n    # 检查力旋量矩阵的秩\n    rank = np.linalg.matrix_rank(W)\n    \n    return rank >= ____", answer: "6", explanation: "3D空间的力封闭要求力旋量矩阵的秩达到6（3个力分量+3个力矩分量）。", difficulty: 3 }
      ]
    },
    final: {
      choice: [
        { id: "cs287-fin-c-1", question: "在接触丰富的操作中，互补约束（Complementarity Constraints）建模了什么物理现象？", options: ["力和加速度", "接触力和间隙不能同时非零", "速度和位置", "质量与惯性"], answer: 1, explanation: "互补约束表达：要么有接触（力>0,间隙=0），要么没接触（力=0,间隙>0），二者不能同时非零。", difficulty: 3 },
        { id: "cs287-fin-c-2", question: "在最优操作中，接触模式规划（Contact Mode Planning）的作用是什么？", options: ["规划路径", "决定哪些点何时接触或离开", "规划视觉", "控制电机"], answer: 1, explanation: "接触模式规划确定操作过程中接触点的时序，如抓取、推、放置等动作序列。", difficulty: 3 },
        { id: "cs287-fin-c-3", question: "DDP（Differential Dynamic Programming）相比iLQR的改进是什么？", options: ["不需模型", "在前向传播中加入二阶修正项", "只用于线性系统", "计算更少"], answer: 1, explanation: "DDP在iLQR基础上使用完整的二阶近似（包括Hessian项），收敛更快但计算量更大。", difficulty: 3 },
        { id: "cs287-fin-c-4", question: "在操作任务中，灵巧操作（Dexterous Manipulation）通常需要什么级别的自由度？", options: ["1-2 DoF", "3-4 DoF", "6+ DoF", "不需要自由度"], answer: 2, explanation: "灵巧操作通常需要6个以上自由度来实现物体的完全位姿控制。", difficulty: 2 },
        { id: "cs287-fin-c-5", question: "在MPC框架中，预测模型的准确性对控制性能有什么影响？", options: ["没有影响", "模型越准控制越好", "模型越简单越好", "只影响计算速度"], answer: 1, explanation: "MPC性能依赖于预测模型的准确性，模型误差会导致次优控制。", difficulty: 2 },
        { id: "cs287-fin-c-6", question: "在抓取规划中，解析方法和采样方法的主要区别是什么？", options: ["没有区别", "解析方法精确但受限，采样方法通用但不保证最优", "解析更快", "采样更准"], answer: 1, explanation: "解析方法利用几何关系精确求解，但只适用于简单情况；采样方法可处理复杂几何。", difficulty: 3 },
        { id: "cs287-fin-c-7", question: "在操作中，环境辅助操作（Extrinsic Dexterity）指什么？", options: ["用外部机器人", "利用环境（如桌面）帮助操纵物体", "用外部传感器", "用外部电源"], answer: 1, explanation: "环境辅助操作利用重力、桌面摩擦力等环境因素简化操作问题。", difficulty: 2 },
        { id: "cs287-fin-c-8", question: "在非线性最优控制中，线性化步骤在哪种情况下可能导致收敛失败？", options: ["线性系统", "远离当前轨迹的区域", "小步长", "慢速运动"], answer: 1, explanation: "当线性化区域离当前轨迹太远时，近似不准确，可能导致发散。", difficulty: 3 },
        { id: "cs287-fin-c-9", question: "在操作规划中，构型空间（C-Space）的障碍物表示什么？", options: ["视觉障碍", "机器人与环境的碰撞区域", "传感器盲区", "电机限制"], answer: 1, explanation: "C-Space障碍物是关节空间中会导致碰撞的构型集合。", difficulty: 2 },
        { id: "cs287-fin-c-10", question: "在接触任务中，阻抗控制的目标是调节什么关系？", options: ["位置-位置", "力-位移", "速度-速度", "加速度-加速度"], answer: 1, explanation: "阻抗控制调节机器人末端力和位移之间的动态关系，模拟弹簧-阻尼系统。", difficulty: 2 }
      ],
      fill: [
        { id: "cs287-fin-f-1", question: "在操作规划中，半定规划（SDP）可以用于求解力封闭的____条件。", answer: "充分", explanation: "SDP提供力封闭的充分条件，通过优化判断抓取质量。", difficulty: 3 },
        { id: "cs287-fin-f-2", question: "在接触丰富的操作中，互补问题（LCP）用于求解接触力和____的联立方程。", answer: "运动", explanation: "LCP同时求解接触力学和运动学，保证物理一致性。", difficulty: 3 },
        { id: "cs287-fin-f-3", question: "最优控制中的Bellman方程基于____原理将问题分解为子问题。", answer: "最优子结构", explanation: "Bellman最优性原理指出最优策略的任何子策略也是最优的。", difficulty: 2 },
        { id: "cs287-fin-f-4", question: "在抓取规划中，____方法通过随机采样接触配置来搜索可行抓取。", answer: "蒙特卡洛", explanation: "蒙特卡洛采样在高维接触配置空间中搜索满足约束的抓取方案。", difficulty: 2 },
        { id: "cs287-fin-f-5", question: "在操作中，物体的____（Pose）由位置和方向组成。", answer: "位姿", explanation: "物体的6-DoF位姿完全确定了其在空间中的位置和方向。", difficulty: 1 },
        { id: "cs287-fin-f-6", question: "MPC中的预测步长（Horizon）越长，计算量通常越____。", answer: "大", explanation: "预测步长增加意味着优化变量增多，计算复杂度相应上升。", difficulty: 1 },
        { id: "cs287-fin-f-7", question: "在灵巧操作中，旋转操作（In-hand Rotation）需要手指间的____协调。", answer: "接触", explanation: "灵巧旋转操作需要多个手指协调接触和滑动来实现物体旋转。", difficulty: 2 },
        { id: "cs287-fin-f-8", question: "在最优控制中，____（Hamiltonian）函数包含了系统动力学和代价函数信息。", answer: "哈密顿", explanation: "哈密顿函数是PMP的核心，定义了最优控制的必要条件。", difficulty: 3 },
        { id: "cs287-fin-f-9", question: "在操作规划中，势场方法通过构造____函数来引导物体到达目标。", answer: "势", explanation: "势场方法在目标处设置吸引势，在障碍物处设置排斥势。", difficulty: 2 },
        { id: "cs287-fin-f-10", question: "在接触任务中，____（Friction Cone）约束了接触力的方向。", answer: "摩擦锥", explanation: "摩擦锥限制了接触力必须在摩擦角定义的锥体内。", difficulty: 2 }
      ],
      code: [
        { id: "cs287-fin-code-1", question: "补全以下简单MPC优化步骤代码", code: "import numpy as np\nfrom scipy.optimize import minimize\n\ndef mpc_step(x0, dynamics, cost_fn, N=10):\n    \"\"\"单步MPC优化\"\"\"\n    n_u = 2  # 控制维度\n    u_init = np.zeros(N * n_u)\n    \n    def objective(u):\n        cost = 0\n        x = x0.copy()\n        for k in range(N):\n            uk = u[k*n_u:(k+1)*n_u]\n            cost += cost_fn(x, uk)\n            x = ____\n        return cost\n    \n    result = minimize(objective, u_init, method='SLSQP')\n    return result.x[:n_u]  # 只执行第一步", answer: "dynamics(x, uk)", explanation: "MPC在每步使用动力学模型预测下一状态。", difficulty: 3 },
        { id: "cs287-fin-code-2", question: "补全以下简单抓取质量评估代码", code: "import numpy as np\n\ndef grasp_quality(contact_points, contact_normals, applied_wrench):\n    \"\"\"评估抓取抵抗外力旋量的能力\"\"\"\n    # 构建抓取矩阵\n    G = np.zeros((6, len(contact_points) * 3))\n    \n    for i, (p, n) in enumerate(zip(contact_points, contact_normals)):\n        # 力分量\n        G[:3, i*3:(i+1)*3] = np.eye(3)\n        # 力矩分量：r × f\n        r = np.array(p)\n        G[3:, i*3:(i+1)*3] = ____\n    \n    # 计算质量指标\n    return np.linalg.norm(np.linalg.pinv(G) @ applied_wrench)", answer: "np.cross(r, np.eye(3))", explanation: "力矩 = 位置向量叉乘力向量，构建完整的力旋量映射。", difficulty: 3 }
      ]
    }
  },
  "6.800/6.821: Underactuated Robotics": {
    courseId: "mit-underactuated-robotics",
    domain: "robotics",
    mid: {
      choice: [
        { id: "mit-under-mid-c-1", question: "非欠驱动系统（Fully Actuated）与欠驱动系统（Underactuated）的关键区别是什么？", options: ["质量不同", "独立控制输入数少于自由度数", "只能直线运动", "没有传感器"], answer: 1, explanation: "欠驱动系统的控制输入数量少于系统的构型空间维度，无法独立控制所有自由度。", difficulty: 2 },
        { id: "mit-under-mid-c-2", question: "在轨迹优化中，直接配点法（Direct Collocation）的基本思想是什么？", options: ["微分方程求解", "将连续轨迹离散为有限个状态和控制点", "随机搜索", "解析求解"], answer: 1, explanation: "直接配点法在离散时间点上强制满足动力学约束，将最优控制问题转化为非线性规划。", difficulty: 3 },
        { id: "mit-under-mid-c-3", question: "Lyapunov函数V(x)需要满足什么条件才能证明稳定性？", options: ["V(x)必须是线性的", "V(x)正定且导数负半定", "V(x)必须趋于无穷", "V(x)可以为负"], answer: 1, explanation: "Lyapunov函数必须正定（V(0)=0, V(x)>0 for x!=0）且其时间导数负半定。", difficulty: 3 },
        { id: "mit-under-mid-c-4", question: "在行走机器人中，零力矩点（ZMP）用于分析什么？", options: ["电机功率", "动态平衡条件", "传感器精度", "路径规划"], answer: 1, explanation: "ZMP是地面上的一个点，关于该点的合力矩为零，用于判断动态平衡是否可维持。", difficulty: 3 },
        { id: "mit-under-mid-c-5", question: "在最优控制中，值函数（Value Function）满足什么方程？", options: ["牛顿方程", "HJB方程", "薛定谔方程", "波动方程"], answer: 1, explanation: "HJB方程是连续时间最优控制的核心方程，值函数是其解。", difficulty: 3 },
        { id: "mit-under-mid-c-6", question: "模型预测控制（MPC）与LQR的主要区别是什么？", options: ["MPC不需要模型", "MPC可以处理非线性和约束", "LQR更新更快", "MPC只用于行走"], answer: 1, explanation: "MPC在每个时间步求解有限时域优化问题，天然支持约束和非线性。", difficulty: 2 },
        { id: "mit-under-mid-c-7", question: "在摆（Pendulum）系统中，能量 shaping 控制的目标是什么？", options: ["增加摩擦", "将系统能量调节到目标值", "增加质量", "减少长度"], answer: 1, explanation: "能量 shaping 通过修改系统的能量函数来实现稳定，如将摆稳定在倒立位置。", difficulty: 3 },
        { id: "mit-under-mid-c-8", question: "以下哪种方法可用于欠驱动系统的全局规划？", options: ["简单PID", "基于采样的轨迹优化", "纯反馈控制", "力矩限制"], answer: 1, explanation: "基于采样的方法（如RRT*）可以在非线性系统的构型空间中搜索可行轨迹。", difficulty: 3 },
        { id: "mit-under-mid-c-9", question: "在双足行走中，弹簧质量模型（Spring-Loaded Inverted Pendulum）假设了什么？", options: ["刚性腿", "腿在 stance 阶段表现为弹簧", "无摩擦地面", "完全刚体"], answer: 1, explanation: "SLIP模型将腿简化为弹簧，在stance阶段储存和释放弹性势能，是行走动力学的基础模型。", difficulty: 2 },
        { id: "mit-under-mid-c-10", question: "在非线性控制中，反馈线性化的基本思想是什么？", options: ["忽略非线性", "通过状态反馈抵消非线性项", "增加阻尼", "减小步长"], answer: 1, explanation: "反馈线性化选择控制律来精确抵消系统的非线性动力学，使闭环系统表现为线性。", difficulty: 3 }
      ],
      fill: [
        { id: "mit-under-mid-f-1", question: "欠驱动系统是指控制输入数少于系统____数的机器人系统。", answer: "自由度", explanation: "欠驱动的定义就是独立控制输入少于自由度。", difficulty: 1 },
        { id: "mit-under-mid-f-2", question: "在轨迹优化中，____法将连续时间问题转化为有限维非线性规划问题。", answer: "直接", explanation: "直接方法（直接配点、直接打靶等）离散化后用NLP求解器求解。", difficulty: 2 },
        { id: "mit-under-mid-f-3", question: "Lyapunov稳定性理论要求V(x)在平衡点附近____。", answer: "正定", explanation: "正定性是Lyapunov函数的基本要求，保证V(0)=0且附近V(x)>0。", difficulty: 2 },
        { id: "mit-under-mid-f-4", question: "在行走控制中，____（Hybrid）系统模型包含连续动力学和离散事件。", answer: "混合", explanation: "行走是混合动力学系统：stance阶段连续，footstrike事件离散。", difficulty: 2 },
        { id: "mit-under-mid-f-5", question: "在LQR中，Riccati方程的解提供了最优的____反馈增益。", answer: "状态", explanation: "LQR的解是线性状态反馈u=-Kx，K来自Riccati方程。", difficulty: 2 },
        { id: "mit-under-mid-f-6", question: "在摆的控制中，____方法通过将能量调节到摆倒立位置的值来实现稳定。", answer: "能量整形", explanation: "能量整形（Energy Shaping）控制目标是使系统总能量等于目标平衡点的能量。", difficulty: 3 },
        { id: "mit-under-mid-f-7", question: "在行走机器人中，passive walking指____的行走方式。", answer: "无驱动/被动", explanation: "被动行走指在无主动驱动下，仅靠重力和惯性实现稳定行走。", difficulty: 2 },
        { id: "mit-under-mid-f-8", question: "在MPC中，控制时域（Control Horizon）短于预测时域可以减少____。", answer: "计算量", explanation: "缩短控制时域减少优化变量数，降低计算复杂度。", difficulty: 2 },
        { id: "mit-under-mid-f-9", question: "对于非线性系统，____点的局部稳定性可以通过线性化来分析。", answer: "平衡", explanation: "非线性系统在平衡点附近可以线性化，用线性理论分析局部稳定性。", difficulty: 2 },
        { id: "mit-under-mid-f-10", question: "在轨迹优化中，目标函数可以包含状态、控制和____的代价项。", answer: "时间", explanation: "最优控制问题常包含状态偏差、控制能量和执行时间的综合代价。", difficulty: 1 }
      ],
      code: [
        { id: "mit-under-mid-code-1", question: "补全以下摆的动力学方程代码", code: "import numpy as np\n\ndef pendulum_dynamics(state, torque, m=1.0, g=9.81, l=1.0, b=0.1):\n    \"\"\"简单摆动力学\"\"\"\n    theta, theta_dot = state\n    \n    # 角加速度\n    theta_ddot = ____\n    \n    return np.array([theta_dot, theta_ddot])", answer: "(torque - m * g * l * np.sin(theta) - b * theta_dot) / (m * l**2)", explanation: "摆的运动方程：ml^2*theta'' = tau - mgl*sin(theta) - b*theta'。", difficulty: 2 },
        { id: "mit-under-mid-code-2", question: "补全以下简单LQR增益计算代码", code: "import numpy as np\n\ndef simple_lqr(A, B, Q, R, iterations=100):\n    \"\"\"迭代求解离散Riccati方程\"\"\"\n    P = Q.copy()\n    for _ in range(iterations):\n        K = np.linalg.inv(R + B.T @ P @ B) @ B.T @ P @ A\n        P = ____\n    return K", answer: "Q + A.T @ P @ (A - B @ K)", explanation: "离散Riccati方程迭代：P = Q + A^T * P * (A - B*K)。", difficulty: 3 }
      ]
    },
    final: {
      choice: [
        { id: "mit-under-fin-c-1", question: "在行走机器人中，虚拟约束（Virtual Constraints）用于什么？", options: ["视觉处理", "强制关节之间的协调关系", "减少计算", "增加刚度"], answer: 1, explanation: "虚拟约束通过控制律强制执行关节之间的函数关系，将高维系统降维。", difficulty: 3 },
        { id: "mit-under-fin-c-2", question: "在最优控制中，自适应动态规划（ADP）的特点是什么？", options: ["不需要模型", "通过学习近似求解HJB方程", "只用于线性系统", "计算简单"], answer: 1, explanation: "ADP通过函数逼近器在线学习值函数，避免求解复杂的HJB方程。", difficulty: 3 },
        { id: "mit-under-fin-c-3", question: "在行走控制中，foot placement策略如何帮助维持平衡？", options: ["增大支撑面积", "通过调整下一步落脚点产生恢复力矩", "增加摩擦", "减少速度"], answer: 1, explanation: "基于ZMP的foot placement策略通过计算需要的支撑面位置来选择落脚点。", difficulty: 3 },
        { id: "mit-under-fin-c-4", question: "以下哪种方法最适合处理混合动力学系统的优化？", options: ["纯连续优化", "混合整数非线性规划（MINLP）", "线性规划", "二次规划"], answer: 1, explanation: "MINLP可以同时优化连续变量（力矩）和离散变量（接触模式）。", difficulty: 3 },
        { id: "mit-under-fin-c-5", question: "在倒立摆控制中，LQR控制在远离平衡点时可能出现什么问题？", options: ["无问题", "线性近似失效导致性能下降", "控制更有效", "功耗降低"], answer: 1, explanation: "LQR基于线性化，当状态偏离平衡点较远时，非线性效应显著，控制可能不稳定。", difficulty: 2 },
        { id: "mit-under-fin-c-6", question: "在腿式机器人中，com-gait（CoM-based gait）规划的核心思想是什么？", options: ["规划每个关节轨迹", "规划质心轨迹并用逆运动学求关节角", "随机运动", "固定步态"], answer: 1, explanation: "CoM规划简化高维系统为质心动力学，再通过逆运动学映射到关节空间。", difficulty: 2 },
        { id: "mit-under-fin-c-7", question: "在轨迹优化中，SQP（序列二次规划）方法如何处理非线性约束？", options: ["忽略约束", "通过迭代线性化将问题转化为二次规划子问题", "随机采样", "解析求解"], answer: 1, explanation: "SQP在每步将非线性约束线性化，求解QP子问题来更新迭代点。", difficulty: 3 },
        { id: "mit-under-fin-c-8", question: "在控制屏障函数（Control Barrier Functions）中，安全约束如何表达？", options: ["作为目标函数", "通过不等式约束保证不变集", "用罚函数", "随机约束"], answer: 1, explanation: "CBF通过设计控制律使安全集合的Lyapunov-like函数导数满足不等式条件。", difficulty: 3 },
        { id: "mit-under-fin-c-9", question: "在四足机器人步态规划中，支撑多边形（Support Polygon）的作用是什么？", options: ["美观", "判断静态平衡条件", "路径规划", "传感器校准"], answer: 1, explanation: "支撑多边形是由支撑脚形成的凸包，质心投影在多边形内则静态平衡。", difficulty: 2 },
        { id: "mit-under-fin-c-10", question: "在欠驱动系统中，部分反馈线性化（Partial Feedback Linearization）能控制什么子系统？", options: ["所有状态", "可反馈线性化的子系统", "只有速度", "只有位置"], answer: 1, explanation: "部分反馈线性化只对系统的可线性化部分进行精确线性化，其余部分保持非线性。", difficulty: 3 }
      ],
      fill: [
        { id: "mit-under-fin-f-1", question: "在行走控制中，____（Capture Point）是能使机器人在一步内停止的位置。", answer: "捕获点", explanation: "捕获点策略通过将下一步放在该点来实现快速停止。", difficulty: 3 },
        { id: "mit-under-fin-f-2", question: "在最优控制中，HJB方程的求解复杂度随状态维度____增长。", answer: "指数", explanation: "HJB方程面临维数灾难，计算复杂度随状态维度指数增长。", difficulty: 3 },
        { id: "mit-under-fin-f-3", question: "在腿式机器人中，____（Hybrid Zero Dynamics）通过虚拟约束将系统降维到不变流形上。", answer: "混合零动力学", explanation: "HZD方法将高维系统稳定在低维不变流形上，简化控制器设计。", difficulty: 3 },
        { id: "mit-under-fin-f-4", question: "在轨迹优化中，目标函数中加入时间项可以优化____性能。", answer: "时间最优", explanation: "在代价函数中加入时间积分或时间惩罚可以得到时间最优轨迹。", difficulty: 2 },
        { id: "mit-under-fin-f-5", question: "在行走控制中，____（Poincare Map）用于分析周期轨道的稳定性。", answer: "庞加莱", explanation: "Poincare映射将连续流的稳定性分析简化为离散映射的不动点问题。", difficulty: 3 },
        { id: "mit-under-fin-f-6", question: "在非线性控制中，反馈线性化需要系统的____维数等于控制输入数。", answer: "相对阶", explanation: "相对阶等于输出需要微分多少次才显含控制输入。", difficulty: 3 },
        { id: "mit-under-fin-f-7", question: "在腿式机器人步态中，相变量（Phase Variable）将混合系统动力学____化。", answer: "参数", explanation: "相变量用单一参数描述步态周期中的位置，将时间驱动转化为相位驱动。", difficulty: 3 },
        { id: "mit-under-fin-f-8", question: "在MPC中，终端代价（Terminal Cost）和终端约束用于保证____稳定性。", answer: "闭环", explanation: "终端项保证MPC优化问题在有限时域下仍能提供闭环稳定性保证。", difficulty: 3 },
        { id: "mit-under-fin-f-9", question: "在倒立摆控制中，____控制利用系统能量来设计控制律。", answer: "能量", explanation: "能量控制方法基于系统的能量函数来设计使能量收敛到目标值的控制律。", difficulty: 2 },
        { id: "mit-under-fin-f-10", question: "在行走机器人中，impact map描述了脚落地瞬间的____不连续变化。", answer: "速度", explanation: "冲击事件导致关节速度发生离散跳变，状态位置连续但速度不连续。", difficulty: 3 }
      ],
      code: [
        { id: "mit-under-fin-code-1", question: "补全以下RRT*路径规划核心代码", code: "import numpy as np\nfrom scipy.spatial import cKDTree\n\nclass RRTStar:\n    def __init__(self, start, goal, obstacles, max_iter=1000):\n        self.tree = [start]\n        self.parent = {0: None}\n        self.goal = goal\n        self.obstacles = obstacles\n        \n    def nearest(self, q_rand):\n        \"\"\"找到树中最近节点\"\"\"\n        tree_arr = np.array(self.tree)\n        dists = np.linalg.norm(tree_arr - q_rand, axis=1)\n        return np.argmin(dists)\n    \n    def steer(self, q_from, q_to, step_size=0.5):\n        \"\"\"从q_from向q_to方向步进\"\"\"\n        direction = q_to - q_from\n        dist = np.linalg.norm(direction)\n        if dist < step_size:\n            return q_to\n        return q_from + ____", answer: "direction / dist * step_size", explanation: "steer函数将方向向量归一化后乘以步长得到新节点。", difficulty: 2 },
        { id: "mit-under-fin-code-2", question: "补全以下简单ZMP计算代码", code: "import numpy as np\n\ndef compute_zmp(com_pos, com_acc, mass, gravity=9.81):\n    \"\"\"计算零力矩点位置\"\"\"\n    # 假设平地，ZMP在地面上\n    zmp_x = com_pos[0] - (mass * gravity * com_pos[0] + mass * com_acc[0] * com_pos[2]) / ____\n    return np.array([zmp_x, 0])", answer: "mass * (gravity + com_acc[2])", explanation: "ZMP公式：x_zmp = x_com - m*g*x_com / m*(g+a_z)，分母是垂直方向合力。", difficulty: 3 }
      ]
    }
  },
  "6.843: Robotic Manipulation": {
    courseId: "mit-robotic-manipulation",
    domain: "robotics",
    mid: {
      choice: [
        { id: "mit-manip-mid-c-1", question: "在机器人操作中，运动规划通常包含哪两个阶段？", options: ["学习和测试", "全局规划和局部规划", "建图和定位", "感知和控制"], answer: 1, explanation: "运动规划通常分为全局路径规划和局部轨迹生成两个阶段。", difficulty: 2 },
        { id: "mit-manip-mid-c-2", question: "碰撞检测在操作规划中的作用是什么？", options: ["提高速度", "判断机器人或物体是否与环境发生干涉", "记录轨迹", "优化能量"], answer: 1, explanation: "碰撞检测确保规划的轨迹不会导致机器人或物体与障碍物发生碰撞。", difficulty: 1 },
        { id: "mit-manip-mid-c-3", question: "抓取规划中，什么方法通过物理模拟评估抓取质量？", options: ["几何分析", "蒙特卡洛采样和仿真", "解析计算", "深度学习"], answer: 1, explanation: "基于仿真的方法通过物理引擎模拟抓取过程，评估稳定性和力分布。", difficulty: 2 },
        { id: "mit-manip-mid-c-4", question: "在操作任务中，运动规划需要考虑物体的什么信息？", options: ["只有位置", "物体几何、质量和摩擦特性", "只有颜色", "只有大小"], answer: 1, explanation: "操作规划需要物体的完整物理属性来评估抓取稳定性和运动可行性。", difficulty: 2 },
        { id: "mit-manip-mid-c-5", question: "在Sim-to-Real迁移中，domain randomization的作用是什么？", options: ["加速仿真", "通过随机化仿真参数使策略对真实环境更鲁棒", "美化渲染", "减少计算"], answer: 1, explanation: "域随机化通过变化仿真中的视觉和物理参数，使训练的策略能泛化到真实环境。", difficulty: 2 },
        { id: "mit-manip-mid-c-6", question: "点云处理中，体素化（Voxelization）的主要目的是什么？", options: ["增加分辨率", "将不规则点云转化为规则网格表示", "减少颜色", "增加噪声"], answer: 1, explanation: "体素化将点云离散化到规则的3D网格中，便于卷积等操作。", difficulty: 2 },
        { id: "mit-manip-mid-c-7", question: "在操作中，逆运动学（IK）的冗余解通常如何处理？", options: ["忽略", "优化次要目标（如避障、关节限制）", "随机选择", "取平均值"], answer: 1, explanation: "冗余机械臂的IK有无穷多解，可以通过零空间优化次要目标。", difficulty: 3 },
        { id: "mit-manip-mid-c-8", question: "在深度学习抓取检测中，端到端方法的输入通常是什么？", options: ["关节角度", "RGB-D图像", "力传感器数据", "电机电流"], answer: 1, explanation: "端到端抓取检测直接从RGB-D图像预测抓取位置和姿态。", difficulty: 2 },
        { id: "mit-manip-mid-c-9", question: "在抓取规划中，近似凸分解（ACD）用于什么？", options: ["简化抓取姿态", "将复杂物体分解为凸部件进行碰撞检测", "计算力分布", "纹理映射"], answer: 1, explanation: "ACD将任意形状分解为凸体的并集，加速碰撞检测和物理仿真。", difficulty: 3 },
        { id: "mit-manip-mid-c-10", question: "在操作任务规划中，任务和运动规划（TAMP）的特点是什么？", options: ["只考虑运动", "联合优化符号级任务规划和连续运动规划", "只用强化学习", "不需要感知"], answer: 1, explanation: "TAMP将高层任务分解（如拿起杯子）与底层运动规划（轨迹生成）统一求解。", difficulty: 3 }
      ],
      fill: [
        { id: "mit-manip-mid-f-1", question: "在机器人操作中，____是将物体从初始位姿移动到目标位姿的过程。", answer: "拾取与放置", explanation: "Pick-and-Place是最基本的操作任务。", difficulty: 1 },
        { id: "mit-manip-mid-f-2", question: "抓取规划中，____（Grasp Pose）定义了手指接触物体的位置和方向。", answer: "抓取姿态", explanation: "抓取姿态包括接触点位置、手指接近方向和抓取宽度。", difficulty: 1 },
        { id: "mit-manip-mid-f-3", question: "在碰撞检测中，____树（Bounding Volume Hierarchy）用于加速层次化检测。", answer: "包围盒", explanation: "BVH用层次化的包围体快速排除不可能碰撞的几何对。", difficulty: 2 },
        { id: "mit-manip-mid-f-4", question: "在Sim-to-Real中，____（Domain Adaptation）旨在缩小源域和目标域的分布差异。", answer: "域适应", explanation: "域适应方法通过特征对齐等方式减少仿真和真实环境间的差异。", difficulty: 3 },
        { id: "mit-manip-mid-f-5", question: "在操作规划中，____（Grasp Planner）负责从物体模型生成候选抓取配置。", answer: "抓取规划器", explanation: "抓取规划器结合几何分析和质量评估生成可行的抓取方案。", difficulty: 1 },
        { id: "mit-manip-mid-f-6", question: "在点云处理中，____（PointNet）可以直接处理无序点集。", answer: "PointNet", explanation: "PointNet通过共享MLP和对称函数处理无序点云，是3D深度学习的基础架构。", difficulty: 2 },
        { id: "mit-manip-mid-f-7", question: "在操作任务中，____（Motion Planner）负责生成无碰撞的运动轨迹。", answer: "运动规划器", explanation: "运动规划器在构型空间中搜索从起点到目标的无碰撞路径。", difficulty: 1 },
        { id: "mit-manip-mid-f-8", question: "在抓取分析中，____方法通过力平衡条件判断抓取稳定性。", answer: "力封闭", explanation: "力封闭分析是判断抓取能否抵抗任意方向外力的理论基础。", difficulty: 2 },
        { id: "mit-manip-mid-f-9", question: "在TAMP中，____规划负责生成高层动作序列（如拿起A、放到B上）。", answer: "任务", explanation: "任务规划是符号级的，处理动作的前提和效果逻辑。", difficulty: 2 },
        { id: "mit-manip-mid-f-10", question: "在机器人操作中，____（End Effector）是安装在机械臂末端的工具或手指。", answer: "末端执行器", explanation: "末端执行器直接与物体交互，可以是夹爪、吸盘或灵巧手。", difficulty: 1 }
      ],
      code: [
        { id: "mit-manip-mid-code-1", question: "补全以下简单碰撞检测代码", code: "import numpy as np\n\ndef sphere_collision(pos1, radius1, pos2, radius2):\n    \"\"\"检测两个球体是否碰撞\"\"\"\n    dist = np.linalg.norm(pos1 - pos2)\n    ____\n    \ndef aabb_overlap(min1, max1, min2, max2):\n    \"\"\"检测两个AABB是否重叠\"\"\"\n    return all(mn1 <= mx2 and mn2 <= mx1 for mn1, mx1, mn2, mx2 in zip(min1, max1, min2, max2))", answer: "return dist < radius1 + radius2", explanation: "球体碰撞条件：两球心距离小于半径之和。", difficulty: 1 },
        { id: "mit-manip-mid-code-2", question: "补全以下抓取质量评估代码", code: "import numpy as np\n\ndef compute_grasp_wrench_space(contact_forces):\n    \"\"\"计算抓取力旋量空间\"\"\"\n    # contact_forces: list of (position, force) tuples\n    wrenches = []\n    \n    for pos, force in contact_forces:\n        r = np.array(pos)\n        f = np.array(force)\n        \n        # 力旋量 = [f, r × f]\n        wrench = np.concatenate([f, ____])\n        wrenches.append(wrench)\n    \n    return np.array(wrenches)", answer: "np.cross(r, f)", explanation: "力旋量包含力分量和力矩分量，力矩 = 位置 x 力。", difficulty: 2 }
      ]
    },
    final: {
      choice: [
        { id: "mit-manip-fin-c-1", question: "在接触丰富的操作中，推动（Pushing）规划需要考虑什么？", options: ["只有起始位置", "摩擦锥约束和接触力学", "只有视觉", "不需要模型"], answer: 1, explanation: "推动规划需要分析物体与桌面的摩擦、接触点力分布来预测运动。", difficulty: 3 },
        { id: "mit-manip-fin-c-2", question: "在操作中，部分可观测性（Partial Observability）意味着什么？", options: ["传感器太多", "无法直接观测所有状态", "计算太慢", "模型太简单"], answer: 1, explanation: "部分可观测指系统状态不能完全从传感器读数中获取，需要状态估计。", difficulty: 2 },
        { id: "mit-manip-fin-c-3", question: "在学习基操作中，行为克隆相比强化学习的优势是什么？", options: ["性能更好", "不需要设计奖励函数", "数据效率更高", "泛化更强"], answer: 1, explanation: "行为克隆直接从专家演示学习，避免了RL中困难的奖励工程。", difficulty: 2 },
        { id: "mit-manip-fin-c-4", question: "在操作规划中，不确定性感知规划需要考虑什么？", options: ["只考虑名义轨迹", "物体位姿、摩擦等参数的不确定性", "忽略噪声", "只用确定性模型"], answer: 1, explanation: "不确定性感知规划在存在感知噪声和物理参数不确定性时保证任务成功。", difficulty: 3 },
        { id: "mit-manip-fin-c-5", question: "在接触任务中，灵巧手相比平行夹爪的主要优势是什么？", options: ["更便宜", "更多自由度实现更丰富的操作", "速度更快", "更轻"], answer: 1, explanation: "灵巧手有多个关节，可以实现旋转、重定位等复杂操作。", difficulty: 2 },
        { id: "mit-manip-fin-c-6", question: "在操作中，视觉伺服（Visual Servoing）的闭环特性有什么好处？", options: ["更快", "补偿模型误差和扰动", "更简单", "不需要相机"], answer: 1, explanation: "视觉伺服通过实时视觉反馈持续修正误差，对外部扰动鲁棒。", difficulty: 2 },
        { id: "mit-manip-fin-c-7", question: "在抓取中，接触点选择如何影响抓取稳定性？", options: ["无影响", "接触点分布越广，抓取越稳定", "接触点越少越好", "只与力有关"], answer: 1, explanation: "接触点之间的距离越大，力矩臂越长，抓取抗干扰能力越强。", difficulty: 2 },
        { id: "mit-manip-fin-c-8", question: "在操作中，物体重定位（In-hand Reorientation）的主要挑战是什么？", options: ["计算快", "需要多指协调和接触建模", "只需要夹爪", "无挑战"], answer: 1, explanation: "手内重定位需要精确的接触力控制和多指协调，是最具挑战性的操作之一。", difficulty: 3 },
        { id: "mit-manip-fin-c-9", question: "在操作中，吸盘（Suction）抓取相比机械夹爪的优势是什么？", options: ["力更大", "能抓取不规则形状物体", "更便宜", "更精确"], answer: 1, explanation: "吸盘通过气压差固定物体，不需要精确的指尖位置，适合多种形状。", difficulty: 1 },
        { id: "mit-manip-fin-c-10", question: "在操作中，轨迹优化和运动规划的关系是什么？", options: ["完全相同", "规划找路径，优化找最优轨迹", "规划更快", "优化更简单"], answer: 1, explanation: "运动规划搜索可行路径，轨迹优化在此基础上优化平滑性、时间等目标。", difficulty: 2 }
      ],
      fill: [
        { id: "mit-manip-fin-f-1", question: "在接触操作中，____（Quasi-static）假设忽略惯性效应，只考虑力平衡。", answer: "准静态", explanation: "准静态假设使推动等接触操作的分析大大简化。", difficulty: 2 },
        { id: "mit-manip-fin-f-2", question: "在学习基操作中，____（Reward Shaping）通过设计中间奖励加速学习。", answer: "奖励塑造", explanation: "奖励塑造为稀疏奖励任务提供更密集的学习信号。", difficulty: 2 },
        { id: "mit-manip-fin-f-3", question: "在操作中，物体的____（Shape）信息对抓取规划至关重要。", answer: "形状", explanation: "物体形状决定了可行的抓取位置和姿态。", difficulty: 1 },
        { id: "mit-manip-fin-f-4", question: "在TAMP中，____（Heuristic）函数指导搜索更快找到可行规划。", answer: "启发式", explanation: "启发式函数估计当前状态到目标的代价，引导搜索方向。", difficulty: 3 },
        { id: "mit-manip-fin-f-5", question: "在操作中，____（Tactile）传感器提供接触力和纹理信息。", answer: "触觉", explanation: "触觉感知是操作任务中获取局部接触信息的关键。", difficulty: 1 },
        { id: "mit-manip-fin-f-6", question: "在抓取规划中，____（Approach Vector）决定手指接近物体的方向。", answer: "接近向量", explanation: "接近方向影响抓取是否可行以及是否与环境碰撞。", difficulty: 2 },
        { id: "mit-manip-fin-f-7", question: "在操作中，物体的____（Mass）分布影响抓取的稳定性和所需力。", answer: "质量", explanation: "质量和质心位置决定了维持稳定抓取所需的最小力。", difficulty: 1 },
        { id: "mit-manip-fin-f-8", question: "在TAMP中，____（Operator）定义了动作的前提条件和效果。", answer: "算子", explanation: "算子（如Pick, Place）用条件和效果的形式化表示规划动作。", difficulty: 3 },
        { id: "mit-manip-fin-f-9", question: "在操作中，____（Planner）负责将任务分解为可执行的动作序列。", answer: "规划器", explanation: "任务规划器根据当前状态和目标状态生成动作序列。", difficulty: 1 },
        { id: "mit-manip-fin-f-10", question: "在Sim-to-Real中，____（Randomization）增加仿真环境的多样性以提高泛化能力。", answer: "随机化", explanation: "训练时随机化物理和视觉参数使策略对真实环境变化更鲁棒。", difficulty: 2 }
      ],
      code: [
        { id: "mit-manip-fin-code-1", question: "补全以下简单RRT路径规划代码", code: "import numpy as np\n\ndef rrt_sample_free(obstacles, bounds, max_attempts=100):\n    \"\"\"在自由空间中随机采样\"\"\"\n    for _ in range(max_attempts):\n        point = np.random.uniform(bounds[:, 0], bounds[:, 1])\n        \n        # 检查是否与障碍物碰撞\n        collision_free = True\n        for obs in obstacles:\n            if ____:\n                collision_free = False\n                break\n        \n        if collision_free:\n            return point\n    return None  # 采样失败", answer: "np.linalg.norm(point - obs['center']) < obs['radius']", explanation: "检查采样点是否在球形障碍物内。", difficulty: 2 },
        { id: "mit-manip-fin-code-2", question: "补全以下简单吸盘抓取力计算代码", code: "import numpy as np\n\ndef suction_force(pressure_diff, area, safety_factor=1.5):\n    \"\"\"计算吸盘抓取力\"\"\"\n    # 基本吸力 = 压差 × 面积\n    base_force = ____\n    \n    # 考虑安全系数\n    required_force = base_force * safety_factor\n    \n    return required_force", answer: "pressure_diff * area", explanation: "吸盘产生的力 = 气压差 × 吸盘面积，这是气压差产生力的基本公式。", difficulty: 1 }
      ]
    }
  },
  "CS237A: Principles of Robot Autonomy": {
    courseId: "cs237a-principles-robot-autonomy",
    domain: "robotics",
    mid: {
      choice: [
        { id: "cs237a-mid-c-1", question: "在机器人感知中，相机内参（Intrinsic Parameters）描述什么？", options: ["相机位置", "相机内部光学特性（焦距、主点）", "相机与机器人关系", "环境光照"], answer: 1, explanation: "内参矩阵包含焦距、主点坐标等相机内部参数，用于图像坐标和像素坐标的转换。", difficulty: 2 },
        { id: "cs237a-mid-c-2", question: "粒子滤波（Particle Filter）相比卡尔曼滤波的优势是什么？", options: ["更快", "能处理非线性非高斯问题", "更简单", "不需要模型"], answer: 1, explanation: "粒子滤波通过蒙特卡洛采样表示概率分布，能处理任意非线性和非高斯分布。", difficulty: 3 },
        { id: "cs237a-mid-c-3", question: "在运动规划中，概率路线图（PRM）属于哪类算法？", options: ["基于搜索", "基于采样", "基于优化", "基于势场"], answer: 1, explanation: "PRM通过随机采样配置空间中的点并连接邻近点构建路线图来规划路径。", difficulty: 2 },
        { id: "cs237a-mid-c-4", question: "RGB-D相机相比普通RGB相机提供了什么额外信息？", options: ["音频", "深度信息", "热成像", "红外图像"], answer: 1, explanation: "RGB-D相机同时获取彩色图像和深度图像，提供场景的3D结构信息。", difficulty: 1 },
        { id: "cs237a-mid-c-5", question: "在状态估计中，扩展卡尔曼滤波（EKF）如何处理非线性？", options: ["忽略非线性", "在工作点进行一阶泰勒展开", "使用粒子滤波", "用神经网络"], answer: 1, explanation: "EKF在当前估计点处将非线性函数线性化（雅可比矩阵），然后应用标准卡尔曼滤波。", difficulty: 3 },
        { id: "cs237a-mid-c-6", question: "在运动规划中，A*算法的启发函数需要满足什么条件才能保证最优性？", options: ["必须为零", "可采纳（不高估真实代价）", "必须精确", "可任意设置"], answer: 1, explanation: "A*的启发函数如果是可采纳的（h(n) <= h*(n)），则保证找到最优路径。", difficulty: 3 },
        { id: "cs237a-mid-c-7", question: "在机器人感知中，语义分割的作用是什么？", options: ["边缘检测", "为每个像素分配语义类别标签", "目标检测", "光流估计"], answer: 1, explanation: "语义分割为图像中每个像素预测类别（如桌子、杯子、地面），提供场景理解。", difficulty: 2 },
        { id: "cs237a-mid-c-8", question: "在自主导航中，代价地图（Costmap）中不同代价值表示什么？", options: ["只有障碍物", "不同区域的安全程度", "温度分布", "光照强度"], answer: 1, explanation: "代价地图中值越高表示越危险，机器人倾向于选择低代价区域通行。", difficulty: 2 },
        { id: "cs237a-mid-c-9", question: "在机器人控制中，PID控制器中积分项（I）的作用是什么？", options: ["加速响应", "消除稳态误差", "减少超调", "增加稳定性"], answer: 1, explanation: "积分项累积历史误差，用于消除常值扰动和模型误差引起的稳态误差。", difficulty: 2 },
        { id: "cs237a-mid-c-10", question: "在状态估计中，可观测性（Observability）指的是什么？", options: ["传感器数量", "能否从输出唯一确定系统状态", "控制精度", "计算速度"], answer: 1, explanation: "可观测性描述系统状态能否从传感器输出序列中唯一恢复。", difficulty: 3 }
      ],
      fill: [
        { id: "cs237a-mid-f-1", question: "在机器人感知中，____（Calibration）是确定相机内参和外参的过程。", answer: "标定", explanation: "相机标定是将像素坐标映射到世界坐标的基础步骤。", difficulty: 1 },
        { id: "cs237a-mid-f-2", question: "在运动规划中，____空间（Configuration Space）将障碍物表示为构型的集合。", answer: "构型", explanation: "C-Space将机器人表示为一个点，障碍物映射为不可达的构型区域。", difficulty: 2 },
        { id: "cs237a-mid-f-3", question: "在状态估计中，____（Prediction）步骤使用系统模型预测下一状态。", answer: "预测", explanation: "卡尔曼滤波的预测步骤基于运动模型向前传播状态和协方差。", difficulty: 1 },
        { id: "cs237a-mid-f-4", question: "在机器人感知中，____（Segmentation）将图像划分为多个有意义的区域。", answer: "分割", explanation: "图像分割是场景理解的基础，包括语义分割和实例分割。", difficulty: 1 },
        { id: "cs237a-mid-f-5", question: "在运动规划中，____（Collision Checking）判断轨迹是否与障碍物相交。", answer: "碰撞检测", explanation: "碰撞检测是保证运动安全的关键步骤。", difficulty: 1 },
        { id: "cs237a-mid-f-6", question: "在状态估计中，____滤波通过加权平均测量值来修正预测状态。", answer: "卡尔曼", explanation: "卡尔曼滤波的更新步骤根据测量噪声和预测噪声的相对大小来加权。", difficulty: 1 },
        { id: "cs237a-mid-f-7", question: "在自主导航中，____（Localization）是指确定机器人在环境中的位置。", answer: "定位", explanation: "定位是导航的基础，通常结合里程计和外部传感器实现。", difficulty: 1 },
        { id: "cs237a-mid-f-8", question: "在机器人控制中，PID中的D（微分）项用于预测误差____趋势。", answer: "变化", explanation: "微分项根据误差变化率提供阻尼，抑制超调。", difficulty: 2 },
        { id: "cs237a-mid-f-9", question: "在感知中，____（Feature Extraction）从原始数据中提取有用表示。", answer: "特征提取", explanation: "特征提取将高维原始数据降维为有信息量的表示。", difficulty: 1 },
        { id: "cs237a-mid-f-10", question: "在运动规划中，____（Heuristic）函数估计从当前状态到目标的代价。", answer: "启发", explanation: "启发式函数引导搜索方向，减少搜索空间。", difficulty: 2 }
      ],
      code: [
        { id: "cs237a-mid-code-1", question: "补全以下简单卡尔曼滤波更新步骤代码", code: "import numpy as np\n\ndef kalman_update(x_pred, P_pred, z, H, R):\n    \"\"\"卡尔曼滤波更新步骤\"\"\"\n    # 计算卡尔曼增益\n    S = H @ P_pred @ H.T + R\n    K = P_pred @ H.T @ np.linalg.inv(S)\n    \n    # 更新状态估计\n    innovation = z - ____\n    x_updated = x_pred + K @ innovation\n    \n    # 更新协方差\n    I = np.eye(len(x_pred))\n    P_updated = (I - K @ H) @ P_pred\n    \n    return x_updated, P_updated", answer: "H @ x_pred", explanation: "新息（Innovation）= 测量值 - 预测测量值 = z - H*x_pred。", difficulty: 2 },
        { id: "cs237a-mid-code-2", question: "补全以下简单A*搜索的启发函数代码", code: "import numpy as np\n\ndef heuristic_a_star(current, goal):\n    \"\"\"A*的启发函数（欧几里得距离）\"\"\"\n    current = np.array(current)\n    goal = np.array(goal)\n    return ____", answer: "np.linalg.norm(goal - current)", explanation: "欧几里得距离是A*中常用的距离启发函数，对2D/3D空间是可采纳的。", difficulty: 1 }
      ]
    },
    final: {
      choice: [
        { id: "cs237a-fin-c-1", question: "在自主系统中，感知-规划-控制（Perception-Planning-Control）管线的核心挑战是什么？", options: ["速度太快", "各模块之间的误差传播和延迟", "传感器太多", "计算资源不足"], answer: 1, explanation: "管线中每个模块的误差会传播到下游，延迟也会影响控制实时性。", difficulty: 3 },
        { id: "cs237a-fin-c-2", question: "在机器人自主决策中，POMDP与MDP的主要区别是什么？", options: ["POMDP更简单", "POMDP考虑部分可观测性", "MDP更通用", "两者相同"], answer: 1, explanation: "POMDP（部分可观测MDP）在MDP基础上增加了观测模型，处理状态不完全可知的情况。", difficulty: 3 },
        { id: "cs237a-fin-c-3", question: "在视觉导航中，视觉惯性里程计（VIO）融合了哪两种传感器？", options: ["相机和GPS", "相机和IMU", "激光雷达和IMU", "两个相机"], answer: 1, explanation: "VIO融合视觉信息和惯性测量，提供鲁棒的位姿估计。", difficulty: 2 },
        { id: "cs237a-fin-c-4", question: "在自主导航中，动态避障需要什么能力？", options: ["只需要全局地图", "实时感知和预测动态障碍物运动", "不需要传感器", "只用预规划路径"], answer: 1, explanation: "动态避障需要实时感知动态障碍物并预测其运动，及时调整轨迹。", difficulty: 3 },
        { id: "cs237a-fin-c-5", question: "在机器人学习中，系统辨识（System Identification）的目的是什么？", options: ["识别物体", "从数据中估计机器人动力学参数", "识别用户", "识别环境"], answer: 1, explanation: "系统辨识通过实验数据估计动力学模型中的未知参数（摩擦、惯量等）。", difficulty: 3 },
        { id: "cs237a-fin-c-6", question: "在多机器人系统中，协同SLAM的优势是什么？", options: ["每个机器人独立建图", "多个机器人共享信息提高建图精度和覆盖范围", "更便宜", "更简单"], answer: 1, explanation: "协同SLAM让多个机器人共享地图和位姿信息，加速建图并提高一致性。", difficulty: 3 },
        { id: "cs237a-fin-c-7", question: "在自主系统中，任务规格（Task Specification）通常如何表示？", options: ["自然语言", "时序逻辑（如LTL）", "随机采样", "无特殊表示"], answer: 1, explanation: "线性时序逻辑（LTL）等形式化语言可以精确表达复杂的时序任务要求。", difficulty: 3 },
        { id: "cs237a-fin-c-8", question: "在状态估计中，滑动窗口滤波相比全量EKF的优势是什么？", options: ["更精确", "计算复杂度恒定，适合长时间运行", "不需要初始化", "能处理更多传感器"], answer: 1, explanation: "滑动窗口限制了优化变量数量，计算量不随时间增长，适合持续运行的系统。", difficulty: 3 },
        { id: "cs237a-fin-c-9", question: "在自主导航中，语义地图（Semantic Map）增加了什么信息？", options: ["只有几何信息", "物体类别和属性等语义信息", "只存储图像", "不存储位置"], answer: 1, explanation: "语义地图在几何地图基础上标注物体类别、属性等语义信息，支持高层任务。", difficulty: 2 },
        { id: "cs237a-fin-c-10", question: "在机器人感知中，多视角几何（Multi-view Geometry）利用什么原理恢复3D信息？", options: ["单张图像", "多张图像的对应关系和投影约束", "只需要深度相机", "不需要任何信息"], answer: 1, explanation: "多视角几何通过分析多张图像中同一点的投影关系来恢复3D结构。", difficulty: 3 }
      ],
      fill: [
        { id: "cs237a-fin-f-1", question: "在SLAM中，后端优化通常使用____（Bundle Adjustment）联合优化位姿和地图点。", answer: "光束法平差", explanation: "BA联合优化所有相机位姿和三维点位置，最小化重投影误差。", difficulty: 3 },
        { id: "cs237a-fin-f-2", question: "在自主导航中，____（Global Planner）在已知地图上计算从起点到目标的最优路径。", answer: "全局规划器", explanation: "全局规划器在完整地图信息下规划全局最优路径。", difficulty: 2 },
        { id: "cs237a-fin-f-3", question: "在机器人感知中，____（Point Cloud Registration）将多个视角的点云对齐到同一坐标系。", answer: "点云配准", explanation: "点云配准是构建完整3D地图的关键步骤。", difficulty: 2 },
        { id: "cs237a-fin-f-4", question: "在状态估计中，____（Graph-based SLAM）将位姿和约束构建为图进行优化。", answer: "图优化", explanation: "图优化将SLAM表示为因子图，用高效求解器进行全局优化。", difficulty: 3 },
        { id: "cs237a-fin-f-5", question: "在感知中，____（Instance Segmentation）同时检测和分割每个物体实例。", answer: "实例分割", explanation: "实例分割不仅区分类别，还区分同类别的不同个体。", difficulty: 2 },
        { id: "cs237a-fin-f-6", question: "在自主决策中，____（Decision Making）是在不确定环境下选择最优动作的过程。", answer: "决策", explanation: "自主决策需要在部分可观测和随机环境下做出理性选择。", difficulty: 2 },
        { id: "cs237a-fin-f-7", question: "在SLAM中，回环检测用于消除累积____误差。", answer: "漂移", explanation: "回环检测发现重访位置后，可以修正长时间运行累积的定位漂移。", difficulty: 2 },
        { id: "cs237a-fin-f-8", question: "在感知中，深度估计可以分为主动方法（如结构光）和____方法（如立体视觉）。", answer: "被动", explanation: "被动深度估计不需要主动投射能量，只依赖环境光和多视角信息。", difficulty: 2 },
        { id: "cs237a-fin-f-9", question: "在运动规划中，优化方法通过迭代改进轨迹以满足____约束。", answer: "动力学", explanation: "轨迹优化在满足机器人动力学约束的前提下优化轨迹质量。", difficulty: 2 },
        { id: "cs237a-fin-f-10", question: "在自主系统中，____（Sensor Fusion）综合多种传感器数据获得更鲁棒的估计。", answer: "传感器融合", explanation: "传感器融合利用不同传感器的互补性提高估计的准确性和鲁棒性。", difficulty: 1 }
      ],
      code: [
        { id: "cs237a-fin-code-1", question: "补全以下简单EKF预测步骤代码", code: "import numpy as np\n\ndef ekf_predict(x, P, f, F, Q):\n    \"\"\"EKF预测步骤\"\"\"\n    # f: 非线性状态转移函数\n    # F: f的雅可比矩阵（在x处计算）\n    x_pred = f(x)\n    P_pred = ____\n    return x_pred, P_pred", answer: "F @ P @ F.T + Q", explanation: "EKF预测协方差 = F * P * F^T + Q，F是状态转移函数的雅可比矩阵。", difficulty: 3 },
        { id: "cs237a-fin-code-2", question: "补全以下简单RANSAC平面拟合代码", code: "import numpy as np\n\ndef ransac_plane(points, n_iter=100, threshold=0.01):\n    \"\"\"RANSAC拟合平面\"\"\"\n    best_plane = None\n    best_inliers = 0\n    \n    for _ in range(n_iter):\n        # 随机选3个点\n        idx = np.random.choice(len(points), 3, replace=False)\n        p1, p2, p3 = points[idx]\n        \n        # 计算平面法向量\n        normal = np.cross(p2 - p1, p3 - p1)\n        normal = normal / np.linalg.norm(normal)\n        \n        # 计算距离\n        distances = np.abs((points - p1) @ normal)\n        inliers = ____\n        \n        if inliers > best_inliers:\n            best_inliers = inliers\n            best_plane = (normal, p1)\n    \n    return best_plane", answer: "np.sum(distances < threshold)", explanation: "统计到平面距离小于阈值的内点数量。", difficulty: 3 }
      ]
    }
  },
  "CS326: Advanced Robotic Manipulation": {
    courseId: "cs326-advanced-manipulation",
    domain: "robotics",
    mid: {
      choice: [
        { id: "cs326-mid-c-1", question: "在灵巧抓取中，触觉感知的主要作用是什么？", options: ["增加速度", "检测接触状态和力，防止滑落", "美化外观", "减少计算"], answer: 1, explanation: "触觉传感器检测接触力、滑动等信息，是灵巧操作中关键的反馈信号。", difficulty: 2 },
        { id: "cs326-mid-c-2", question: "在基于学习的抓取中，GraspNet等方法的核心思想是什么？", options: ["规则匹配", "从点云直接预测抓取姿态分布", "随机采样", "模板匹配"], answer: 1, explanation: "学习基抓取检测直接从3D点云预测抓取位置、姿态和质量的概率分布。", difficulty: 2 },
        { id: "cs326-mid-c-3", question: "在接触操作中，准静态（Quasi-static）分析的基本假设是什么？", options: ["高速运动", "忽略惯性力，假设力平衡", "无摩擦", "完全刚体"], answer: 1, explanation: "准静态假设物体始终处于力平衡状态，忽略了加速度和惯性效应。", difficulty: 2 },
        { id: "cs326-mid-c-4", question: "在学习基操作中，sim-to-real gap的主要来源是什么？", options: ["计算资源不足", "仿真和真实环境在视觉和物理上的差异", "算法错误", "硬件限制"], answer: 1, explanation: "仿真与真实的差距来自渲染差异、物理建模简化和传感器噪声等。", difficulty: 2 },
        { id: "cs326-mid-c-5", question: "在接触丰富的操作中，dexterous manipulation相比简单夹爪操作的优势是什么？", options: ["更便宜", "能实现旋转、重定位等复杂操作", "更简单", "速度更快"], answer: 1, explanation: "灵巧操作可以实现物体在手中的重定向、工具使用等复杂任务。", difficulty: 2 },
        { id: "cs326-mid-c-6", question: "在抓取规划中，抗干扰抓取（Robust Grasp）考虑什么因素？", options: ["只考虑几何", "考虑物体属性不确定性和外部扰动", "只考虑速度", "不需要分析"], answer: 1, explanation: "抗干扰抓取分析考虑物体质量分布、摩擦系数不确定性，保证抓取在扰动下仍稳定。", difficulty: 3 },
        { id: "cs326-mid-c-7", question: "在操作中，接触点的摩擦锥约束表达了什么物理限制？", options: ["力的大小", "接触力的方向必须在摩擦角定义的锥体内", "速度限制", "位置限制"], answer: 1, explanation: "摩擦锥限制了接触力不能超过摩擦角，否则会发生滑动。", difficulty: 2 },
        { id: "cs326-mid-c-8", question: "在基于学习的抓取中，模仿学习相比强化学习在抓取任务上的优势是什么？", options: ["需要更多数据", "直接从人类演示学习，避免复杂的奖励设计", "泛化更差", "计算更慢"], answer: 1, explanation: "模仿学习从人类抓取演示中学习，不需要设计复杂的奖励函数。", difficulty: 2 },
        { id: "cs326-mid-c-9", question: "在操作中，物体的6-DoF位姿估计为什么很重要？", options: ["不重要", "精确位姿是正确抓取和放置的前提", "只用于显示", "只用于定位"], answer: 1, explanation: "准确的位姿估计是机器人正确抓取物体并放到指定位置的基础。", difficulty: 1 },
        { id: "cs326-mid-c-10", question: "在触觉感知中，GelSight等视觉触觉传感器的工作原理是什么？", options: ["压力感应", "用相机拍摄弹性体变形来感知接触形状", "电容感应", "超声波"], answer: 1, explanation: "GelSight通过拍摄透明弹性体底部的反射图像来重建接触表面的精细形状。", difficulty: 3 }
      ],
      fill: [
        { id: "cs326-mid-f-1", question: "在抓取规划中，____（Force Closure）是判断抓取能否抵抗任意方向外力的条件。", answer: "力封闭", explanation: "力封闭是抓取稳定性的基本理论条件。", difficulty: 1 },
        { id: "cs326-mid-f-2", question: "在灵巧操作中，____（In-hand Manipulation）指在手中重新调整物体姿态。", answer: "手内操作", explanation: "手内操作包括旋转、重定位等在保持接触情况下的物体调整。", difficulty: 2 },
        { id: "cs326-mid-f-3", question: "在触觉感知中，____信息对于检测物体滑动至关重要。", answer: "剪切力", explanation: "剪切力变化是检测物体即将滑动的关键信号。", difficulty: 2 },
        { id: "cs326-mid-f-4", question: "在抓取中，____（Antipodal）抓取指两个手指从相对方向夹住物体。", answer: "对置", explanation: "对置抓取是最简单和最常用的抓取模式。", difficulty: 1 },
        { id: "cs326-mid-f-5", question: "在学习基操作中，____（Domain Randomization）通过随机化仿真参数提高策略鲁棒性。", answer: "域随机化", explanation: "域随机化是缩小sim-to-real差距的常用技术。", difficulty: 2 },
        { id: "cs326-mid-f-6", question: "在接触操作中，____（Contact Sequence）描述了操作过程中接触点的变化时序。", answer: "接触序列", explanation: "接触序列规划是复杂操作任务的核心组成部分。", difficulty: 2 },
        { id: "cs326-mid-f-7", question: "在抓取中，____（Stability）分析判断物体在抓取下是否能抵抗扰动。", answer: "稳定性", explanation: "抓取稳定性分析是评估抓取质量的关键步骤。", difficulty: 1 },
        { id: "cs326-mid-f-8", question: "在操作中，物体的____（Friction）特性影响抓取所需力的大小。", answer: "摩擦", explanation: "摩擦系数决定了维持抓取所需的最小正压力。", difficulty: 1 },
        { id: "cs326-mid-f-9", question: "在学习基操作中，____（Reward）函数的设计直接影响学习策略的质量。", answer: "奖励", explanation: "奖励函数定义了任务目标，是RL中最关键的设计要素。", difficulty: 2 },
        { id: "cs326-mid-f-10", question: "在触觉感知中，____（Tactile）信号可以提供亚毫米级的接触细节。", answer: "触觉", explanation: "触觉传感器可以提供远高于视觉的空间分辨率。", difficulty: 1 }
      ],
      code: [
        { id: "cs326-mid-code-1", question: "补全以下对置抓取力分析代码", code: "import numpy as np\n\ndef antipodal_grasp_check(contact_normal, friction_coeff=0.5):\n    \"\"\"检查是否满足对置抓取条件\"\"\"\n    # 对置抓取：两接触点法线方向相反\n    n1, n2 = contact_normal[0], contact_normal[1]\n    \n    # 法线方向应接近相反\n    dot_product = np.dot(n1, n2)\n    opposite = dot_product < ____\n    \n    # 检查摩擦锥约束\n    # 简化检查：力方向在摩擦角内\n    return opposite", answer: "-0.9", explanation: "对置抓取要求两个法向量方向接近相反（点积接近-1）。", difficulty: 2 },
        { id: "cs326-mid-code-2", question: "补全以下简单接触检测代码", code: "import numpy as np\n\ndef point_in_convex_hull(point, hull_points):\n    \"\"\"检测点是否在凸包内（简化版）\"\"\"\n    # 使用符号距离法\n    n_hull = len(hull_points)\n    signs = []\n    \n    for i in range(n_hull):\n        p1 = hull_points[i]\n        p2 = hull_points[(i + 1) % n_hull]\n        edge = p2 - p1\n        to_point = point - p1\n        \n        # 2D叉积\n        cross = edge[0] * to_point[1] - edge[1] * to_point[0]\n        signs.append(np.sign(cross))\n    \n    # 所有符号相同则在内部\n    return len(set(signs)) == ____", answer: "1", explanation: "如果所有边的叉积符号相同，点在凸包内部。", difficulty: 2 }
      ]
    },
    final: {
      choice: [
        { id: "cs326-fin-c-1", question: "在接触丰富的操作中，非预抓取（Non-prehensile）操作指什么？", options: ["只能抓取", "使用推动、滑动等不完全抓取方式操纵物体", "只能吸盘", "只能用夹爪"], answer: 1, explanation: "非预抓取操作包括推、滑、滚动等不需要完全抓取物体的方式。", difficulty: 2 },
        { id: "cs326-fin-c-2", question: "在学习基操作中，offline RL相比online RL的优势是什么？", options: ["性能更好", "不需要与环境实时交互，利用离线数据集", "更快", "更简单"], answer: 1, explanation: "离线RL从预收集的数据集中学习，避免了在线交互的安全风险和时间成本。", difficulty: 3 },
        { id: "cs326-fin-c-3", question: "在触觉感知中，触觉信号与视觉信号融合的主要好处是什么？", options: ["减少计算", "互补信息提高操作的鲁棒性和精度", "更快", "更便宜"], answer: 1, explanation: "视觉提供全局信息，触觉提供局部接触细节，融合后更全面可靠。", difficulty: 2 },
        { id: "cs326-fin-c-4", question: "在操作中，接触力控制的主要挑战是什么？", options: ["计算简单", "接触状态的不连续切换和不确定性", "传感器太多", "不需要模型"], answer: 1, explanation: "接触力控制需要处理接触/分离的离散切换和接触力学的非线性。", difficulty: 3 },
        { id: "cs326-fin-c-5", question: "在学习基抓取中，self-supervised数据收集方法的优势是什么？", options: ["不需要机器人", "机器人自动尝试抓取并记录结果，无需人工标注", "数据更少", "更简单"], answer: 1, explanation: "自监督方法让机器人自主尝试抓取并记录成功/失败，自动获得大规模标注数据。", difficulty: 2 },
        { id: "cs326-fin-c-6", question: "在操作中，物体堆叠（Stacking）任务的主要规划挑战是什么？",选项: ["只有抓取", "需要同时考虑多个物体的接触关系和稳定性", "不需要规划", "只需一个物体"], answer: 1, explanation: "堆叠任务需要分析多个物体间的接触力平衡和整体稳定性。", difficulty: 3 },
        { id: "cs326-fin-c-7", question: "在灵巧操作中，可变形物体（如布料）操作的特殊挑战是什么？", options: ["与刚体相同", "状态空间无限维，需要建模形变", "更简单", "不需要特殊处理"], answer: 1, explanation: "可变形物体有无限维状态，需要特殊的表示和建模方法。", difficulty: 3 },
        { id: "cs326-fin-c-8", question: "在学习基操作中，goal-conditioned RL的目标是什么？", options: ["只学一个任务", "学会根据不同的目标状态执行不同操作", "不需要目标", "只学探索"], answer: 1, explanation: "目标条件RL使策略能根据指定目标状态输出不同的动作。", difficulty: 2 },
        { id: "cs326-fin-c-9", question: "在操作中，contact-rich manipulation的特点是什么？", options: ["很少接触", "任务执行过程中涉及大量接触和力交互", "无接触", "只用视觉"], answer: 1, explanation: "接触丰富的操作（如装配、折叠）需要精确控制接触力和接触状态。", difficulty: 2 },
        { id: "cs326-fin-c-10", question: "在学习基操作中，transfer learning的作用是什么？", options: ["不能迁移", "将在一个任务/环境中学到的知识应用到新任务/环境", "需要更多数据", "增加计算"], answer: 1, explanation: "迁移学习利用已有知识加速新任务的学习，减少数据需求。", difficulty: 2 }
      ],
      fill: [
        { id: "cs326-fin-f-1", question: "在操作中，物体的____（Rigidity）决定了其在外力作用下的形变特性。", answer: "刚度", explanation: "刚度高的物体近似刚体，刚度低的物体需要考虑形变。", difficulty: 1 },
        { id: "cs326-fin-f-2", question: "在接触操作中，____（Contact-rich）任务需要频繁的力反馈控制。", answer: "接触丰富", explanation: "接触丰富的任务（如插入、拧螺丝）需要精确的力控制。", difficulty: 2 },
        { id: "cs326-fin-f-3", question: "在学习基操作中，____（Imitation Learning）从专家演示中学习操作策略。", answer: "模仿学习", explanation: "模仿学习从人类或专家示范中学习状态到动作的映射。", difficulty: 1 },
        { id: "cs326-fin-f-4", question: "在触觉感知中，____（Slip）检测对于防止物体掉落至关重要。", answer: "滑动", explanation: "检测物体是否在手中滑动是维持稳定抓取的关键。", difficulty: 1 },
        { id: "cs326-fin-f-5", question: "在操作中，物体的____（Geometry）决定了可行的抓取位置和姿态。", answer: "几何", explanation: "物体形状和表面几何是抓取规划的基础输入。", difficulty: 1 },
        { id: "cs326-fin-f-6", question: "在学习基操作中，____（Data Augmentation）可以增加训练数据的多样性。", answer: "数据增强", explanation: "数据增强通过变换已有数据生成新的训练样本。", difficulty: 2 },
        { id: "cs326-fin-f-7", question: "在接触操作中，力/位混合控制需要____来区分不同自由度的控制目标。", answer: "选择矩阵", explanation: "选择矩阵指定每个自由度是力控制还是位置控制。", difficulty: 2 },
        { id: "cs326-fin-f-8", question: "在操作中，物体的____（Mass）影响抓取力和运动规划。", answer: "质量", explanation: "物体质量决定了重力载荷和加速所需的力。", difficulty: 1 },
        { id: "cs326-fin-f-9", question: "在学习基操作中，____（Policy）是状态到动作的映射函数。", answer: "策略", explanation: "策略π(a|s)定义了在给定状态下应执行的动作。", difficulty: 1 },
        { id: "cs326-fin-f-10", question: "在操作中，物体的____（Pose）由位置和方向完整描述。", answer: "位姿", explanation: "物体的6-DoF位姿完全确定其在空间中的状态。", difficulty: 1 }
      ],
      code: [
        { id: "cs326-fin-code-1", question: "补全以下摩擦锥检查代码", code: "import numpy as np\n\ndef in_friction_cone(force, normal, friction_coeff=0.5):\n    \"\"\"检查力是否在摩擦锥内\"\"\"\n    # 法向分量\n    fn = np.dot(force, normal)\n    if fn <= 0:\n        return False  # 必须是压缩力\n    \n    # 切向分量\n    ft = force - fn * normal\n    ft_magnitude = np.linalg.norm(ft)\n    \n    # 摩擦锥条件：ft <= mu * fn\n    return ft_magnitude <= ____", answer: "friction_coeff * fn", explanation: "摩擦锥条件：切向力不能超过摩擦系数乘以法向力。", difficulty: 2 },
        { id: "cs326-fin-code-2", question: "补全以下简单抓取质量评分代码", code: "import numpy as np\n\ndef grasp_quality_score(grasp_config, object_com, friction_coeff=0.5):\n    \"\"\"基于力封闭分析的抓取质量评分\"\"\"\n    # grasp_config: list of (contact_point, contact_normal)\n    # object_com: 物体质心\n    \n    # 1. 计算抓取中心到质心的距离（越小越好）\n    grasp_center = np.mean([p for p, n in grasp_config], axis=0)\n    com_distance = np.linalg.norm(grasp_center - object_com)\n    \n    # 2. 计算接触点分散度（越大越好）\n    spread = np.std([p for p, n in grasp_config], axis=0).mean()\n    \n    # 综合评分\n    quality = ____\n    return quality", answer: "spread / (1 + com_distance)", explanation: "质量评分综合考虑接触点分散度（越大越稳定）和抓取中心与质心的距离（越小越好）。", difficulty: 3 }
      ]
    }
  }

    /* ================================================================
     * 9. CS229M Machine Learning Theory (Stanford)
     *    Topics: generalization bounds, optimization theory,
     *            PAC learning, stability, robustness
     * ================================================================ */
    "CS229M Machine Learning Theory": {
        courseId: "cs229m-ml-theory",
        domain: "ml-theory",
        mid: {
            choice: [
                {
                    id: "cs229m-mid-c-1",
                    question: "PAC 学习中，"PAC" 代表什么？",
                    options: ["Probably Approximately Correct（可能近似正确）", "Perfectly Accurate Classification（完美准确分类）", "Probabilistic And Computational（概率与计算）", "Parallel And Concurrent（并行与并发）"],
                    answer: 0,
                    explanation: "PAC（Probably Approximately Correct）学习框架由 Leslie Valiant 提出，要求算法以高概率（Probably）输出一个近似正确（Approximately Correct）的假设。",
                    difficulty: 1
                },
                {
                    id: "cs229m-mid-c-2",
                    question: "在泛化理论中，VC 维（Vapnik-Chervonenkis Dimension）衡量的是什么？",
                    options: ["模型的训练速度", "假设空间的表达能力，即能打散的最大样本集大小", "数据集的大小", "模型的计算复杂度"],
                    answer: 1,
                    explanation: "VC 维衡量假设空间的容量/表达能力，定义为该假设空间能够打散（shatter）的最大样本数量。VC 维越高，模型越复杂。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-c-3",
                    question: "关于经验风险最小化（ERM），以下哪个说法是正确的？",
                    options: ["ERM 在所有情况下都能保证泛化", "ERM 的泛化误差由假设空间的复杂度和训练样本数共同决定", "ERM 不需要任何假设就能保证最优", "ERM 只适用于凸优化问题"],
                    answer: 1,
                    explanation: "ERM 的泛化误差上界由 Rademacher 复杂度或 VC 维等复杂度度量与样本量 n 的关系决定，体现了偏差-方差的权衡。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-c-4",
                    question: "稳定性（Stability）分析在学习理论中的作用是什么？",
                    options: ["确保模型收敛速度", "通过衡量算法对单个训练样本变化的敏感度来保证泛化", "降低计算复杂度", "增加模型容量"],
                    answer: 1,
                    explanation: "稳定性分析通过证明算法输出对删除或修改单个训练样本不敏感（即稳定），来推导泛化界。稳定的学习算法倾向于泛化良好。",
                    difficulty: 3
                },
                {
                    id: "cs229m-mid-c-5",
                    question: "在优化理论中，强凸性（Strong Convexity）条件能带来什么好处？",
                    options: ["保证全局最优解的存在", "梯度下降具有线性收敛速率", "不需要计算梯度", "保证损失函数是光滑的"],
                    answer: 1,
                    explanation: "强凸性（目标函数满足 f(y) >= f(x) + g'(x)(y-x) + mu/2 ||y-x||^2）保证梯度下降法具有线性收敛速率 O(1-tau)^t，即收敛速度指数级。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-c-6",
                    question: "Rademacher 复杂度估计的是什么？",
                    options: ["模型的计算复杂度", "假设空间拟合随机噪声标签的能力", "训练数据的噪声水平", "优化算法的收敛速度"],
                    answer: 1,
                    explanation: "Rademacher 复杂度衡量假设空间对随机分配的 ±1 标签的拟合能力。复杂度越高，说明假设空间越容易"记住"任意标签，可能过拟合。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-c-7",
                    question: "关于正则化在学习理论中的角色，以下哪个说法最准确？",
                    options: ["正则化总是降低训练误差", "正则化通过约束假设空间的有效复杂度来减小泛化误差", "正则化与泛化无关", "正则化只用于防止过拟合，对欠拟合无影响"],
                    answer: 1,
                    explanation: "正则化（如 L1、L2、谱范数约束）通过限制假设空间的有效复杂度，在偏差和方差之间取得平衡，从而降低泛化误差。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-c-8",
                    question: "在 No-Free-Lunch 定理的语境下，以下哪个说法是正确的？",
                    options: ["存在一个算法在所有问题上都最优", "对所有可能的问题分布，不存在一个始终优于随机猜测的学习算法", "该定理说明机器学习无用", "该定理只适用于深度学习"],
                    answer: 1,
                    explanation: "No-Free-Lunch 定理指出，对所有可能的任务分布取平均，任何学习算法的表现都不优于随机猜测。这意味着需要利用数据的特定结构来获得好性能。",
                    difficulty: 3
                },
                {
                    id: "cs229m-mid-c-9",
                    question: "一致收敛（Uniform Convergence）在 ERM 框架中意味着什么？",
                    options: ["所有假设的训练误差相同", "假设空间中所有假设的经验风险与期望风险的偏差一致地小", "模型输出一致收敛到一个固定值", "损失函数处处可微"],
                    answer: 1,
                    explanation: "一致收敛要求对于假设空间 H 中的所有假设 h，经验风险 R_emp(h) 与期望风险 R(h) 之间的偏差随样本量增大而一致减小，即 sup_{h∈H} |R_emp(h) - R(h)| → 0。",
                    difficulty: 3
                },
                {
                    id: "cs229m-mid-c-10",
                    question: "在学习理论中，样本复杂度（Sample Complexity）指的是什么？",
                    options: ["训练一个模型需要的计算量", "达到指定泛化误差所需的最小训练样本数", "数据预处理的复杂度", "模型参数的数量"],
                    answer: 1,
                    explanation: "样本复杂度是指学习算法要以至少 1-delta 的概率获得误差不超过 epsilon 的假设，所需的最小训练样本数。它是衡量学习效率的核心指标。",
                    difficulty: 1
                }
            ],
            fill: [
                {
                    id: "cs229m-mid-f-1",
                    question: "PAC 学习框架中，一个概念类 C 是可学习的，当且仅当存在算法能以 O(1/____) 的样本复杂度学习。",
                    answer: "epsilon",
                    explanation: "PAC 学习的样本复杂度通常是 O(1/epsilon) 的多项式函数，epsilon 是目标误差。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-f-2",
                    question: "VC 维为 d 的假设空间，其泛化界中包含 O(d/____) 项，体现了模型复杂度对泛化的影响。",
                    answer: "n",
                    explanation: "基于 VC 维的经典泛化界形式为 R(h) <= R_emp(h) + O(sqrt(d/n))，其中 n 是样本数，d 是 VC 维。更大的 n 或更小的 d 都有利于泛化。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-f-3",
                    question: "在凸优化中，如果目标函数是 L-光滑的，梯度下降的收敛速率是 O(1/____)。",
                    answer: "t",
                    explanation: "对于 L-光滑的凸函数，梯度下降在 t 步后的收敛速率为 O(L/t)，步长取 1/L 时是最优的。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-f-4",
                    question: "Empirical Risk Minimization 的缩写是____。",
                    answer: "ERM",
                    explanation: "ERM 是机器学习中最基本的学习原则：选择在训练集上经验风险（平均损失）最小的假设。",
                    difficulty: 1
                },
                {
                    id: "cs229m-mid-f-5",
                    question: "在泛化理论中，____复杂度是 Rademacher 复杂度的一种变体，通过高斯随机变量替代 Rademacher 变量来衡量假设空间。",
                    answer: "高斯",
                    explanation: "高斯复杂度（Gaussian Complexity）用标准正态变量替代 ±1 Rademacher 变量，分析性质类似但有时更便于计算。",
                    difficulty: 3
                },
                {
                    id: "cs229m-mid-f-6",
                    question: "学习算法的稳定性可以通过____稳定性或留一稳定性来量化。",
                    answer: "均匀",
                    explanation: "均匀稳定性（Uniform Stability）衡量算法输出函数对任意单个训练样本变化的最坏情况敏感度，是分析泛化的重要工具。",
                    difficulty: 3
                },
                {
                    id: "cs229m-mid-f-7",
                    question: "在 PAC 学习中，如果概念类的 VC 维是有限的，则该概念类是____可学习的。",
                    answer: "PAC",
                    explanation: "经典结果：一个概念类是 PAC 可学习的当且仅当其 VC 维是有限的。这是 PAC 学习理论的基本定理。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-f-8",
                    question: "梯度下降中，____（Step Size / Learning Rate）的选择对收敛性至关重要。",
                    answer: "步长",
                    explanation: "步长过大会导致发散，过小会导致收敛过慢。对于 L-光滑函数，最优步长为 1/L。",
                    difficulty: 1
                },
                {
                    id: "cs229m-mid-f-9",
                    question: "在优化理论中，如果一个函数既是凸的又是 L-光滑的，则其梯度满足 L-Lipschitz ____条件。",
                    answer: "连续",
                    explanation: "L-光滑性等价于梯度函数是 L-Lipschitz 连续的：||∇f(x) - ∇f(y)|| <= L||x - y||。",
                    difficulty: 2
                },
                {
                    id: "cs229m-mid-f-10",
                    question: "偏差-方差权衡（Bias-Variance Tradeoff）指出，模型复杂度增加时，偏差减小而____增大。",
                    answer: "方差",
                    explanation: "更复杂的模型能更好地拟合训练数据（低偏差），但对数据扰动更敏感（高方差），需要在两者间取得平衡。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "cs229m-mid-code-1",
                    question: "补全以下代码，计算线性分类器在数据集上的经验风险（0-1 损失）。",
                    code: "import numpy as np

def empirical_risk(X, y, w):
    """计算线性分类器的经验风险（0-1损失）
    
    Args:
        X: 特征矩阵 (n, d)
        y: 标签向量 (n,), 取值为 +1 或 -1
        w: 权重向量 (d,)
    Returns:
        float: 错误分类样本的比例
    """
    predictions = np.sign(X @ w)
    # 计算错误率
    errors = ____
    return errors.mean()",
                    answer: "(predictions != y).astype(float)",
                    explanation: "经验风险是 0-1 损失的均值。将预测标签与真实标签比较，不一致的位置标记为 1（错误），然后取平均。",
                    difficulty: 1
                },
                {
                    id: "cs229m-mid-code-2",
                    question: "补全以下代码，实现带 L2 正则化的梯度下降优化。",
                    code: "import numpy as np

def gd_l2_reg(X, y, lr=0.01, reg=0.1, epochs=100):
    """L2正则化梯度下降用于线性回归
    
    Args:
        X: 特征矩阵 (n, d)
        y: 目标值 (n,)
        lr: 学习率
        reg: 正则化系数
        epochs: 迭代次数
    Returns:
        w: 优化后的权重 (d,)
    """
    n, d = X.shape
    w = np.zeros(d)
    
    for _ in range(epochs):
        grad = (1/n) * X.T @ (X @ w - y) + reg * w
        w = ____
    
    return w",
                    answer: "w - lr * grad",
                    explanation: "标准梯度下降更新规则：w_new = w - lr * grad。梯度包含损失函数梯度和 L2 正则化项 reg * w。",
                    difficulty: 1
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "cs229m-fin-c-1",
                    question: "在 Rademacher 复杂度理论中，线性类 {x -> <w,x> : ||w|| <= Lambda} 在球面数据上的 Rademacher 复杂度上界是？",
                    options: ["O(Lambda * sqrt(d))", "O(Lambda * ||X||_F / sqrt(n))", "O(d / n)", "O(Lambda * n)"],
                    answer: 1,
                    explanation: "通过对偶和 Cauchy-Schwarz 不等式，权重约束为 Lambda 的线性类在数据集 X 上的 Rademacher 复杂度为 O(Lambda * ||X||_F / sqrt(n))。",
                    difficulty: 3
                },
                {
                    id: "cs229m-fin-c-2",
                    question: "在优化理论中，SGD（随机梯度下降）相比全梯度下降的主要优势是什么？",
                    options: ["SGD 一定能收敛到全局最优", "每步只需要一个或少量样本的梯度，大幅降低计算成本", "SGD 不需要学习率", "SGD 的方差总是更小"],
                    answer: 1,
                    explanation: "SGD 用单个样本或 mini-batch 的梯度近似全梯度，每步计算成本大幅降低。虽然引入了噪声，但在大规模数据上总体效率远高于全梯度下降。",
                    difficulty: 2
                },
                {
                    id: "cs229m-fin-c-3",
                    question: "Structural Risk Minimization (SRM) 的核心思想是什么？",
                    options: ["选择最复杂的模型", "在经验风险和模型复杂度之间寻找最优平衡", "最小化训练误差", "最大化模型参数"],
                    answer: 1,
                    explanation: "SRM 由 Vapnik 提出，在嵌套的假设空间序列中选择使上界（经验风险 + 复杂度惩罚）最小的模型复杂度级别，平衡过拟合和欠拟合。",
                    difficulty: 2
                },
                {
                    id: "cs229m-fin-c-4",
                    question: "关于泛化界中的覆盖率（Covering Number），以下哪个说法正确？",
                    options: ["覆盖数越大，泛化越好", "覆盖数越小，假设空间的有效复杂度越低", "覆盖数与 VC 维无关", "覆盖数只在非凸问题中有用"],
                    answer: 1,
                    explanation: "覆盖数衡量假设空间被 ε-球覆盖所需的最少球数。覆盖数越小，说明假设空间的有效复杂度越低，泛化界越好。",
                    difficulty: 3
                },
                {
                    id: "cs229m-fin-c-5",
                    question: "在博弈论视角的机器学习中，对抗训练（Adversarial Training）可以被理解为求解什么？",
                    options: ["一个凸优化问题", "一个最小-最大（min-max）博弈", "一个线性规划", "一个马尔可夫决策过程"],
                    answer: 1,
                    explanation: "对抗训练形式化为 min_theta max_delta L(f_theta(x+delta), y)，其中优化器寻找最佳参数，对手寻找最强扰动，形成 min-max 博弈结构。",
                    difficulty: 2
                },
                {
                    id: "cs229m-fin-c-6",
                    question: "在统计学习理论中，最大间隔分类器的泛化界与什么直接相关？",
                    options: ["训练集的大小", "间隔的倒数 1/gamma", "模型的参数量", "特征的维度"],
                    answer: 1,
                    explanation: "最大间隔分类器（如 SVM）的泛化界依赖于数据的几何间隔 gamma，上界包含 O(R^2/(gamma^2 * n)) 项，R 是数据半径。间隔越大，泛化越好。",
                    difficulty: 3
                },
                {
                    id: "cs229m-fin-c-7",
                    question: "关于 PAC-Bayes 泛化界，以下哪个说法最准确？",
                    options: ["它只适用于线性模型", "它结合了先验分布和后验分布来给出紧致的泛化界", "它不涉及概率保证", "它总是比 VC 维界更松"],
                    answer: 1,
                    explanation: "PAC-Bayes 界通过衡量学习后假设分布与先验分布之间的 KL 散度来给出泛化界，通常比经典 VC 维界更紧致，适用于广泛的假设空间。",
                    difficulty: 3
                },
                {
                    id: "cs229m-fin-c-8",
                    question: "在深度学习的泛化理论中，"隐式正则化"（Implicit Regularization）指的是什么？",
                    options: ["显式添加的 L2 正则化项", "优化算法和初始化方式本身倾向于选择低复杂度假设", "Dropout 层的效果", "数据增强的效果"],
                    answer: 1,
                    explanation: "隐式正则化指即使没有显式正则化项，SGD 等优化算法倾向于收敛到具有低范数或低秩等简单结构的解，这有助于泛化。",
                    difficulty: 2
                },
                {
                    id: "cs229m-fin-c-9",
                    question: "在学习理论中，如果一个学习算法是"differentially private"的，这对其泛化性意味着什么？",
                    options: ["没有泛化保证", "差分隐私算法自动具有泛化能力（by the fundamental theorem of differential privacy）", "泛化误差会增加", "隐私和泛化相互矛盾"],
                    answer: 1,
                    explanation: "差分隐私的核心定理表明，满足 (epsilon, delta)-差分隐私的算法输出对每个训练样本的变化敏感，因此自动具有 O(epsilon) 级别的泛化保证。",
                    difficulty: 3
                },
                {
                    id: "cs229m-fin-c-10",
                    question: "在多类分类学习中，假设空间的 Natarajan 维度类比于二分类中的什么？",
                    options: ["Rademacher 复杂度", "VC 维", "Covering Number", "PAC-Bayes 界"],
                    answer: 1,
                    explanation: "Natarajan 维度是 VC 维在多类分类中的推广，衡量假设空间在多类问题上的表达能力。当只有 2 个类时，Natarajan 维等同于 VC 维。",
                    difficulty: 3
                }
            ],
            fill: [
                {
                    id: "cs229m-fin-f-1",
                    question: "PAC-Bayes 界中，泛化误差的上界包含先验分布 P 和后验分布 Q 之间的 ____ 散度项。",
                    answer: "KL",
                    explanation: "PAC-Bayes 界通常形如 R(Q) <= R_emp(Q) + sqrt(KL(Q||P)/(2n) + log(1/delta)/(2n))，KL 散度衡量后验偏离先验的程度。",
                    difficulty: 3
                },
                {
                    id: "cs229m-fin-f-2",
                    question: "在优化理论中，强凸函数在梯度下降下的收敛速率是 ____ 收敛。",
                    answer: "线性",
                    explanation: "强凸函数（参数 mu）和 L-光滑条件下，梯度下降具有线性收敛速率 O((1-mu/L)^t)，也称为几何收敛。",
                    difficulty: 2
                },
                {
                    id: "cs229m-fin-f-3",
                    question: "最大间隔原理指出，SVM 选择的分类超平面使得距最近训练样本的 ____ 最大化。",
                    answer: "间隔",
                    explanation: "SVM 寻找具有最大几何间隔 gamma 的分离超平面，间隔定义为数据点到超平面的最小距离。",
                    difficulty: 1
                },
                {
                    id: "cs229m-fin-f-4",
                    question: "在泛化理论中，____ 数（Covering Number）衡量假设空间被半径为 epsilon 的球覆盖所需的最少球数。",
                    answer: "覆盖",
                    explanation: "覆盖数 N(epsilon, H, d) 衡量在度量 d 下，用半径 epsilon 的球覆盖假设空间 H 所需的最少球数，反映假设空间的复杂度。",
                    difficulty: 3
                },
                {
                    id: "cs229m-fin-f-5",
                    question: "SGD 中，梯度的方差可以被 ____（Variance Reduction）技术如 SVRG 或 SAGA 来降低。",
                    answer: "方差缩减",
                    explanation: "方差缩减技术通过维护或定期计算全梯度来修正 SGD 的梯度估计，在保持低每步计算成本的同时降低方差。",
                    difficulty: 3
                },
                {
                    id: "cs229m-fin-f-6",
                    question: "在学习理论中，____（Rademacher）随机变量独立均匀地取 +1 或 -1 值。",
                    answer: "Rademacher",
                    explanation: "Rademacher 随机变量 sigma_i 独立地以等概率取 +1 或 -1，用于构造 Rademacher 复杂度来度量假设空间的复杂度。",
                    difficulty: 2
                },
                {
                    id: "cs229m-fin-f-7",
                    question: "神经网络的 ____ 初始化（如 Xavier / He 初始化）有助于在训练初期保持梯度的适当尺度。",
                    answer: "权重",
                    explanation: "Xavier 初始化将权重设为 N(0, 2/(n_in+n_out))，He 初始化设为 N(0, 2/n_in)，帮助保持前向和反向传播中信号的方差稳定。",
                    difficulty: 2
                },
                {
                    id: "cs229m-fin-f-8",
                    question: "在鲁棒优化中，____ 训练通过在最坏情况扰动上最小化损失来提高模型的鲁棒性。",
                    answer: "对抗",
                    explanation: "对抗训练（Adversarial Training）形式化为 min_theta E_{(x,y)} [max_{||delta||<=eps} L(f_theta(x+delta), y)]，在每个训练样本上寻找最强扰动。",
                    difficulty: 2
                },
                {
                    id: "cs229m-fin-f-9",
                    question: "在优化理论中，____（Convexity）保证了任何局部最优也是全局最优。",
                    answer: "凸性",
                    explanation: "凸优化问题中，目标函数的凸性确保了不存在非全局最优的局部最小值，这是凸优化理论的核心优势。",
                    difficulty: 1
                },
                {
                    id: "cs229m-fin-f-10",
                    question: "在线学习中，____（Regret）衡量在线算法与事后最优固定策略的累积损失之差。",
                    answer: "遗憾",
                    explanation: "遗憾 R_T = sum_{t=1}^T l_t(a_t) - min_a sum_{t=1}^T l_t(a)，衡量序列决策与事后最佳固定决策的差距。遗憾界越小，在线学习越好。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "cs229m-fin-code-1",
                    question: "补全以下代码，计算数据集的 Rademacher 复杂度的经验估计。",
                    code: "import numpy as np

def empirical_rademacher(X, model_predict, n_samples=1000):
    """经验估计Rademacher复杂度
    
    Args:
        X: 数据矩阵 (n, d)
        model_predict: 函数，输入X和权重w，输出预测
        n_samples: 采样次数
    Returns:
        float: Rademacher复杂度估计
    """
    n, d = X.shape
    complexities = []
    
    for _ in range(n_samples):
        # 生成Rademacher随机变量
        sigma = ____
        # 在假设空间上最大化内积
        # 简化：用随机权重搜索
        best = 0
        for _ in range(50):
            w = np.random.randn(d)
            val = np.abs(sigma @ model_predict(X, w))
            best = max(best, val)
        complexities.append(best)
    
    return np.mean(complexities) / n",
                    answer: "np.random.choice([-1, 1], size=n)",
                    explanation: "Rademacher 随机变量独立均匀地从 {-1, +1} 中采样，用于估计假设空间拟合随机噪声的能力。",
                    difficulty: 3
                },
                {
                    id: "cs229m-fin-code-2",
                    question: "补全以下代码，实现带早停（Early Stopping）的梯度下降，作为隐式正则化的一种实现。",
                    code: "import numpy as np

def gd_early_stop(X, y, lr=0.01, tol=1e-6, max_iter=10000):
    """带早停的梯度下降（隐式L2正则化）
    
    Args:
        X: 特征矩阵 (n, d)
        y: 目标值 (n,)
        lr: 学习率
        tol: 收敛容差
        max_iter: 最大迭代数
    Returns:
        w: 最终权重, iterations: 实际迭代次数
    """
    n, d = X.shape
    w = np.zeros(d)
    
    for t in range(1, max_iter + 1):
        grad = (1/n) * X.T @ (X @ w - y)
        w = w - lr * grad
        
        # 检查收敛
        if np.linalg.norm(grad) < tol:
            break
    
    return w, ____",
                    answer: "t",
                    explanation: "早停隐式地正则化模型：迭代次数 t 越少，相当于 L2 正则化越强（等效正则系数约 1/(lr*t)）。返回实际迭代次数 t。",
                    difficulty: 2
                }
            ]
        }
    },

    /* ================================================================
     * 10. Feature Engineering (Google)
     *    Topics: feature engineering, TensorFlow, BigQuery,
     *            feature crosses, embeddings, TFX
     * ================================================================ */
    "Feature Engineering": {
        courseId: "feature-eng-google",
        domain: "ml-engineering",
        mid: {
            choice: [
                {
                    id: "feateng-mid-c-1",
                    question: "在机器学习中，特征工程的主要目的是什么？",
                    options: ["增加模型参数数量", "将原始数据转换为更能表达数据本质特征的表示", "减少训练时间", "避免使用正则化"],
                    answer: 1,
                    explanation: "特征工程的核心目的是从原始数据中提取、构造和选择最有信息量的特征，使模型更容易学习到数据中的模式。",
                    difficulty: 1
                },
                {
                    id: "feateng-mid-c-2",
                    question: "在 TensorFlow 中，tf.feature_column 的主要作用是什么？",
                    options: ["定义模型架构", "将原始特征转换为模型可用的输入格式（如 one-hot、embedding）", "管理 GPU 内存", "执行分布式训练"],
                    answer: 1,
                    explanation: "tf.feature_column 提供了一组 API 来将原始特征数据转换为模型可消费的张量格式，支持 bucketize、cross、embedding 等变换。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-c-3",
                    question: "特征交叉（Feature Cross）的主要作用是什么？",
                    options: ["减少特征数量", "将多个特征组合起来捕捉它们之间的交互关系", "增加数据量", "自动选择特征"],
                    answer: 1,
                    explanation: "特征交叉将两个或多个特征组合成新特征，能够捕捉原始特征之间无法通过线性模型直接学习的交互效应和非线性关系。",
                    difficulty: 1
                },
                {
                    id: "feateng-mid-c-4",
                    question: "在 BigQuery ML 中，以下哪种模型类型最适合处理分类任务？",
                    options: ["线性回归", "逻辑回归（LOGISTIC_REG）", "K-means", "PCA"],
                    answer: 1,
                    explanation: "BigQuery ML 的 LOGISTIC_REG 用于二分类/多分类任务。线性回归用于连续值预测，K-means 用于聚类，PCA 用于降维。",
                    difficulty: 1
                },
                {
                    id: "feateng-mid-c-5",
                    question: "关于词嵌入（Word Embedding），以下哪个说法是正确的？",
                    options: ["嵌入是高维稀疏表示", "嵌入将离散特征映射为低维稠密向量，捕捉语义关系", "嵌入只适用于 NLP 任务", "嵌入维度越高效果一定越好"],
                    answer: 1,
                    explanation: "嵌入将高维稀疏的离散特征（如词语、类别）映射到低维连续向量空间，语义相似的特征在向量空间中距离相近。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-c-6",
                    question: "在 TFX（TensorFlow Extended）流水线中，ExampleGen 组件的职责是什么？",
                    options: ["训练模型", "数据输入和预处理，将原始数据转换为 TFRecord 格式", "模型评估", "模型部署"],
                    answer: 1,
                    explanation: "ExampleGen 是 TFX 流水线的第一步，负责数据摄入、拆分为训练/验证/测试集，并转换为 TFRecord 格式供后续组件使用。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-c-7",
                    question: "对数值特征进行分桶（Bucketization）的主要好处是什么？",
                    options: ["增加特征维度", "将连续值离散化，使模型能捕捉非线性关系", "减少计算量", "避免缺失值"],
                    answer: 1,
                    explanation: "分桶将连续数值离散化为多个区间，使线性模型也能学习不同区间内的不同效应，本质上是一种简单的非线性特征变换。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-c-8",
                    question: "TFX 中 TFDV（TensorFlow Data Validation）的主要功能是什么？",
                    options: ["模型训练", "数据统计分析和异常检测", "模型推理", "超参数调优"],
                    answer: 1,
                    explanation: "TFDV 计算数据统计信息（schema），检测数据异常（如分布偏移、缺失值、类型不匹配），并生成数据质量报告。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-c-9",
                    question: "在特征工程中，处理类别型特征（Categorical Feature）时，目标编码（Target Encoding）的工作原理是什么？",
                    options: ["直接使用类别标签", "用该类别下目标变量的均值替代原始类别值", "随机分配数值", "使用 one-hot 编码"],
                    answer: 1,
                    explanation: "目标编码将每个类别替换为该类别下目标变量的统计量（如均值），在高基数类别特征中特别有用，但需要注意过拟合。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-c-10",
                    question: "关于哈希特征（Hashing Feature / Hashing Trick），以下哪个说法正确？",
                    options: ["不会产生冲突", "通过哈希函数将高维特征映射到固定维度，可能产生哈希冲突", "只适用于数值特征", "会增加内存使用"],
                    answer: 1,
                    explanation: "哈希技巧通过哈希函数将任意特征映射到固定大小的向量空间，优点是内存可控且无需维护特征字典，缺点是可能发生哈希冲突。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "feateng-mid-f-1",
                    question: "在 TensorFlow 中，____（Feature Column）API 用于定义如何将原始数据转换为模型输入。",
                    answer: "tf.feature_column",
                    explanation: "tf.feature_column 提供了一套声明式 API，包括 numeric_column、categorical_column、embedding_column 等，用于构建特征处理流水线。",
                    difficulty: 1
                },
                {
                    id: "feateng-mid-f-2",
                    question: "TFX 流水线的四个核心组件依次是：ExampleGen、____、Transform、ModelInfra/Trainer。",
                    answer: "StatisticsGen",
                    explanation: "StatisticsGen 自动计算数据统计信息，为后续的 SchemaGen 和 TFDV 提供基础。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-f-3",
                    question: "One-Hot 编码将一个有 k 个取值的类别特征转换为长度为____的二值向量。",
                    answer: "k",
                    explanation: "One-Hot 编码为每个类别创建一个独立维度，只有该类别对应的位置为 1，其余为 0。类别数为 k 则向量长度为 k。",
                    difficulty: 1
                },
                {
                    id: "feateng-mid-f-4",
                    question: "在 BigQuery 中，____函数可以在 SQL 中执行特征预处理操作。",
                    answer: "ML.FEATURE",
                    explanation: "BigQuery ML 提供了一系列内置函数用于特征处理，如 ML.FEATURE_CROSS 等，允许在 SQL 中直接执行特征工程。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-f-5",
                    question: "嵌入维度（Embedding Dimension）通常远小于类别特征的____维度。",
                    answer: "原始",
                    explanation: "嵌入将高维稀疏的 one-hot 表示映射到低维稠密空间，如将 10000 维的词表映射为 128 维嵌入。",
                    difficulty: 1
                },
                {
                    id: "feateng-mid-f-6",
                    question: "TFDV 生成的数据____（Schema）定义了每个特征的类型、分布和约束条件。",
                    answer: "模式",
                    explanation: "Schema 是 TFDV 的核心输出，描述了数据的结构、每个特征的类型、允许的取值范围以及预期的分布统计量。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-f-7",
                    question: "特征缩放（Feature Scaling）中，标准化（Standardization）将特征转换为均值为____、标准差为 1 的分布。",
                    answer: "0",
                    explanation: "标准化（Z-score normalization）通过 z = (x - mu) / sigma 将特征转换为标准正态分布（均值 0，标准差 1），有助于梯度下降收敛。",
                    difficulty: 1
                },
                {
                    id: "feateng-mid-f-8",
                    question: "在处理时间序列特征时，滑动窗口（Sliding Window）可以提取时间窗口内的____统计量。",
                    answer: "聚合",
                    explanation: "滑动窗口在时间序列上移动，计算窗口内的聚合统计量（如均值、最大值、标准差），捕捉局部时间模式。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-f-9",
                    question: "TFX 中____（TensorFlow Transform）用于在训练和推理时应用一致的特征预处理逻辑。",
                    answer: "Transform",
                    explanation: "Transform 组件确保训练和推理使用完全相同的预处理逻辑（通过 saved_model 保存），避免训练-服务偏移。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-f-10",
                    question: "高基数类别特征（如邮政编码）直接使用 one-hot 编码会导致维度____问题。",
                    answer: "灾难",
                    explanation: "高基数特征的 one-hot 编码会产生极高维度的稀疏向量，导致内存消耗大、模型稀疏且难以泛化。嵌入或哈希是更好的选择。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "feateng-mid-code-1",
                    question: "补全以下代码，使用 TensorFlow 特征列 API 创建一个嵌入特征。",
                    code: "import tensorflow as tf

# 假设 category_col 是一个分类特征列
def create_embedding_feature(category_col, embedding_dim=8):
    """将分类特征转换为嵌入表示"""
    # 创建嵌入特征列
    embedding_feature = ____
    return embedding_feature

# 使用示例
# vocab = ['cat', 'dog', 'bird', 'fish']
# cat_col = tf.feature_column.categorical_column_with_vocabulary_list('animal', vocab)
# emb = create_embedding_feature(cat_col, 8)",
                    answer: "tf.feature_column.embedding_column(category_col, embedding_dim)",
                    explanation: "tf.feature_column.embedding_column 将分类特征列转换为嵌入特征列，指定嵌入维度后自动学习从类别 ID 到嵌入向量的映射。",
                    difficulty: 2
                },
                {
                    id: "feateng-mid-code-2",
                    question: "补全以下代码，实现特征交叉（Feature Cross）。",
                    code: "import tensorflow as tf

def create_cross_feature(feat_a, feat_b, hash_bucket_size=1000):
    """创建两个特征的交叉特征"""
    # 先将两个特征各自哈希
    crossed = ____
    # 再转为 one-hot 或 embedding
    return tf.feature_column.indicator_column(crossed)

# 示例
# age_bucket = tf.feature_column.bucketized_column(
#     tf.feature_column.numeric_column('age'),
#     boundaries=[18, 30, 50, 70])
# gender = tf.feature_column.categorical_column_with_vocabulary_list(
#     'gender', ['M', 'F'])
# cross = create_cross_feature(age_bucket, gender)",
                    answer: "tf.feature_column.crossed_column([feat_a, feat_b], hash_bucket_size)",
                    explanation: "crossed_column 将多个特征交叉组合，自动哈希到指定大小的桶中，用于捕捉特征间的交互效应。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "feateng-fin-c-1",
                    question: "在生产环境中，特征工程流水线与模型训练分离的主要原因是什么？",
                    options: ["节省计算资源", "确保训练和推理使用一致的特征处理逻辑（避免训练-服务偏移）", "简化代码", "减少依赖"],
                    answer: 1,
                    explanation: "训练-服务偏移（Training-Serving Skew）是生产 ML 系统最常见的问题之一。将特征工程作为独立组件确保训练和推理使用完全相同的逻辑。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-c-2",
                    question: "在 TFX 中，Model Resolver 组件的作用是什么？",
                    options: ["从头训练模型", "对比新模型与生产中现有模型的性能，决定是否推送到生产环境", "解析模型结构", "下载预训练模型"],
                    answer: 1,
                    explanation: "Model Resolver 评估新训练的模型与当前生产模型在验证集上的性能对比，如果新模型更好才推送到生产环境，实现安全的模型更新。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-c-3",
                    question: "在 BigQuery ML 中使用 CREATE MODEL 创建模型时，数据拆分（data_split）参数的作用是什么？",
                    options: ["选择数据库", "将数据自动拆分为训练集和评估集", "选择列", "设置并行度"],
                    answer: 1,
                    explanation: "data_split 参数自动将输入数据按指定比例拆分为训练集和评估集，支持按随机比例或时间戳拆分。",
                    difficulty: 1
                },
                {
                    id: "feateng-fin-c-4",
                    question: "在处理缺失值时，使用缺失值指示器（Missing Indicator）的好处是什么？",
                    options: ["删除缺失数据", "将缺失信息本身作为特征保留，让模型学习缺失的含义", "简单填充 0", "增加数据量"],
                    answer: 1,
                    explanation: "缺失值指示器创建一个额外的二值特征标记原始值是否缺失，让模型能区分'值为 0'和'值缺失'两种不同情况，保留了缺失模式的信息。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-c-5",
                    question: "在 TFDS（TensorFlow Datasets）中使用特征规范（Feature Specification）的目的是什么？",
                    options: ["定义训练超参数", "声明式地描述数据集中每个特征的类型和形状", "定义损失函数", "设置优化器"],
                    answer: 1,
                    explanation: "Feature Specification 声明式地描述每个特征的类型（tf.int64、tf.float32 等）和形状，为数据解析和预处理提供元数据。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-c-6",
                    question: "在推荐系统中，用户行为序列特征的处理通常使用什么架构？",
                    options: ["简单线性模型", "Transformer / 序列模型捕捉行为间的时序依赖", "KNN", "决策树"],
                    answer: 1,
                    explanation: "用户行为序列（如浏览历史、购买记录）具有时序结构，Transformer 的自注意力机制能有效捕捉行为之间的依赖关系和兴趣演化。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-c-7",
                    question: "特征选择（Feature Selection）中，互信息（Mutual Information）方法的优势是什么？",
                    options: ["只能检测线性关系", "能捕捉特征与目标之间的任意类型依赖关系", "计算最快", "不需要目标标签"],
                    answer: 1,
                    explanation: "互信息基于信息论，能衡量特征与目标变量之间任意类型的统计依赖关系（包括非线性），不局限于线性相关性。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-c-8",
                    question: "在实时特征服务中，使用 Feature Store 的主要好处是什么？",
                    options: ["存储模型权重", "统一管理和提供特征，确保训练和推理的特征一致性并支持复用", "管理数据湖", "执行 ETL 作业"],
                    answer: 1,
                    explanation: "Feature Store 统一存储、管理和提供特征，确保训练和推理使用相同特征，并支持跨团队和跨模型的特征复用。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-c-9",
                    question: "在图像特征工程中，使用预训练 CNN（如 ResNet）提取特征属于什么方法？",
                    options: ["从头训练", "迁移学习 / 特征提取", "数据增强", "半监督学习"],
                    answer: 1,
                    explanation: "使用预训练模型的中间层输出作为特征（不更新预训练权重）是迁移学习的经典范式，能利用在大规模数据上学到的通用视觉特征。",
                    difficulty: 1
                },
                {
                    id: "feateng-fin-c-10",
                    question: "在处理高维稀疏特征时，以下哪种正则化方法最常被推荐？",
                    options: ["L2 正则化", "L1 正则化，因为它能产生稀疏解", "不需要正则化", "Dropout"],
                    answer: 1,
                    explanation: "L1 正则化（Lasso）倾向于将不重要的特征权重压缩到零，产生稀疏解，自然地实现了特征选择，特别适合高维稀疏场景。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "feateng-fin-f-1",
                    question: "TFX 流水线的完整组件序列包括：ExampleGen、StatisticsGen、SchemaGen、____、Trainer、Eval、Pusher。",
                    answer: "Transform",
                    explanation: "Transform 在 Trainer 之前执行，负责根据 Schema 定义进行特征预处理，其逻辑会被序列化以供推理时复用。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-f-2",
                    question: "在特征工程中，____（Binning / Bucketization）将连续数值划分为离散区间。",
                    answer: "分桶",
                    explanation: "分桶将连续值映射到预定义的区间中，使线性模型能学习不同区间的不同效应，是一种简单有效的非线性化手段。",
                    difficulty: 1
                },
                {
                    id: "feateng-fin-f-3",
                    question: "BigQuery ML 中，ML.PREDICT 函数用于对新数据进行____。",
                    answer: "预测",
                    explanation: "ML.PREDICT 是 BigQuery ML 的推理函数，使用训练好的模型对新数据进行预测。",
                    difficulty: 1
                },
                {
                    id: "feateng-fin-f-4",
                    question: "在生产 ML 系统中，训练-服务____（Training-Serving Skew）是指训练时使用的特征与推理时不同。",
                    answer: "偏移",
                    explanation: "训练-服务偏移是 ML 系统退化的最常见原因之一，通过 TFX 等流水线框架来系统性地预防。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-f-5",
                    question: "使用 TFRecords 格式存储数据的主要优势是与____深度集成。",
                    answer: "TensorFlow",
                    explanation: "TFRecords 是 TensorFlow 的原生数据格式，支持高效的顺序读取、数据管道并行化和 prefetching。",
                    difficulty: 1
                },
                {
                    id: "feateng-fin-f-6",
                    question: "在特征缩放中，____归一化（Min-Max Normalization）将特征缩放到 [0, 1] 范围。",
                    answer: "最小-最大",
                    explanation: "Min-Max 归一化 x' = (x - min) / (max - min)，将特征线性变换到 [0, 1] 区间，保留了原始分布的形状。",
                    difficulty: 1
                },
                {
                    id: "feateng-fin-f-7",
                    question: "TFDV 检测到的数据分布变化称为____偏移（Drift）。",
                    answer: "分布",
                    explanation: "分布偏移指生产数据的统计分布与训练数据不一致，可能是协变量偏移、概念偏移或标签偏移。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-f-8",
                    question: "在处理文本特征时，TF-IDF 中的 IDF（Inverse Document Frequency）衡量的是特征的____性。",
                    answer: "区分",
                    explanation: "IDF = log(N/df)，衡量特征在所有文档中的稀有程度。在越多文档中出现的词，IDF 值越低，区分能力越弱。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-f-9",
                    question: "在特征工程中，____编码（Encoding）常用于将日期时间特征拆分为年、月、日、星期几等多个特征。",
                    answer: "时间",
                    explanation: "时间特征拆分将 datetime 类型分解为多个周期性特征（小时、星期几等），并可用周期性编码（如 sin/cos）捕捉循环特性。",
                    difficulty: 1
                },
                {
                    id: "feateng-fin-f-10",
                    question: "在大规模特征工程中，____（Hashing Trick）可以控制特征空间的维度。",
                    answer: "哈希技巧",
                    explanation: "哈希技巧通过哈希函数将特征映射到固定大小的向量中，无需维护词汇表，特别适合流式学习和超大规模特征空间。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "feateng-fin-code-1",
                    question: "补全以下代码，实现一个简单的特征预处理函数，包含标准化和缺失值填充。",
                    code: "import numpy as np

def preprocess_features(X_train, X_test):
    """标准化并填充缺失值
    
    Args:
        X_train: 训练数据 (n_train, d)
        X_test: 测试数据 (n_test, d)
    Returns:
        X_train_processed, X_test_processed, stats
    """
    # 计算训练集统计量
    mean = np.nanmean(X_train, axis=0)
    std = np.nanstd(X_train, axis=0)
    std[std == 0] = 1  # 避免除零
    
    # 填充缺失值并标准化
    X_train_filled = np.where(np.isnan(X_train), ____, X_train)
    X_test_filled = np.where(np.isnan(X_test), mean, X_test)
    
    X_train_proc = (X_train_filled - mean) / std
    X_test_proc = (X_test_filled - mean) / std
    
    return X_train_proc, X_test_proc, {'mean': mean, 'std': std}",
                    answer: "mean",
                    explanation: "用训练集的均值填充缺失值，然后用训练集的统计量（均值和标准差）对训练集和测试集进行标准化，避免数据泄漏。",
                    difficulty: 2
                },
                {
                    id: "feateng-fin-code-2",
                    question: "补全以下代码，实现目标编码（Target Encoding）。",
                    code: "import numpy as np

def target_encoding(X_train, y_train, X_test, alpha=10):
    """目标编码：用类别目标均值替代类别值
    
    Args:
        X_train: 训练集类别特征 (n,)
        y_train: 训练集目标值 (n,)
        X_test: 测试集类别特征 (m,)
        alpha: 平滑参数
    Returns:
        X_train_encoded, X_test_encoded, global_mean
    """
    global_mean = y_train.mean()
    
    # 计算每个类别的目标均值和计数
    stats = {}
    for cat in np.unique(X_train):
        mask = X_train == cat
        cat_mean = y_train[mask].mean()
        cat_count = mask.sum()
        # 贝叶斯平滑
        stats[cat] = ____
    
    # 编码
    X_train_enc = np.array([stats.get(c, global_mean) for c in X_train])
    X_test_enc = np.array([stats.get(c, global_mean) for c in X_test])
    
    return X_train_enc, X_test_enc, global_mean",
                    answer: "(cat_count * cat_mean + alpha * global_mean) / (cat_count + alpha)",
                    explanation: "贝叶斯平滑的目标编码：(n_c * mean_c + alpha * global_mean) / (n_c + alpha)。alpha 控制向全局均值收缩的程度，防止低频类别的过拟合。",
                    difficulty: 3
                }
            ]
        }
    },

    /* ================================================================
     * 11. Probabilistic Machine Learning (Tübingen)
     *    Topics: Bayesian methods, kernel methods,
     *            probabilistic graphical models, Gaussian processes
     * ================================================================ */
    "Probabilistic Machine Learning": {
        courseId: "pml-tuebingen",
        domain: "ml-theory",
        mid: {
            choice: [
                {
                    id: "pml-mid-c-1",
                    question: "贝叶斯定理的核心思想是什么？",
                    options: ["先验概率等于后验概率", "通过观测数据更新先验信念来获得后验概率", "最大似然估计是最优方法", "概率只用于频率派统计"],
                    answer: 1,
                    explanation: "贝叶斯定理 P(theta|D) = P(D|theta)*P(theta)/P(D) 将先验知识 P(theta) 与观测数据的似然 P(D|theta) 结合，得到后验概率 P(theta|D)。",
                    difficulty: 1
                },
                {
                    id: "pml-mid-c-2",
                    question: "在高斯过程（Gaussian Process）中，核函数（Kernel Function）的含义是什么？",
                    options: ["损失函数", "定义数据点之间相似度/协方差的函数", "激活函数", "学习率调度器"],
                    answer: 1,
                    explanation: "核函数 k(x, x') 定义了任意两点间的协方差（相似度），完全决定了 GP 的性质。常见核函数包括 RBF、Matern 等。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-c-3",
                    question: "在概率图模型中，贝叶斯网络和马尔可夫随机场的主要区别是什么？",
                    options: ["贝叶斯网络用于回归，MRF 用于分类", "贝叶斯网络是有向图，MRF 是无向图", "贝叶斯网络不需要概率", "MRF 更适合时序数据"],
                    answer: 1,
                    explanation: "贝叶斯网络（BN）使用有向无环图（DAG）表示因果/生成关系，联合分布分解为条件概率的乘积。MRF 使用无向图表示对称关系，联合分布分解为势函数的乘积。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-c-4",
                    question: "关于变分推断（Variational Inference），以下哪个说法正确？",
                    options: ["它总是精确的", "它将推断问题转化为优化问题，用简单分布近似复杂后验", "它只适用于高斯分布", "它不需要计算似然"],
                    answer: 1,
                    explanation: "变分推断通过选择一个参数化族 Q 中最接近真实后验的分布来近似推断，将难解的积分问题转化为优化问题（最大化 ELBO）。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-c-5",
                    question: "在贝叶斯线性回归中，预测分布是通过什么得到的？",
                    options: ["直接使用 MAP 估计", "对参数的后验分布进行积分（边缘化）", "使用最大似然估计", "使用梯度下降优化"],
                    answer: 1,
                    explanation: "贝叶斯线性回归的预测通过对参数后验分布积分获得：p(y*|x*, D) = integral p(y*|x*, w) p(w|D) dw，给出带有不确定性的预测。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-c-6",
                    question: "核方法中的核技巧（Kernel Trick）的核心优势是什么？",
                    options: ["减少内存使用", "在高维特征空间中计算内积而无需显式映射", "加速梯度下降", "增加模型参数"],
                    answer: 1,
                    explanation: "核技巧利用 k(x,x') = phi(x)'phi(x') 的性质，通过核函数直接计算映射到高维空间的内积，避免了显式计算高维映射 phi(x)。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-c-7",
                    question: "关于 Dirichlet 分布，以下哪个说法是正确的？",
                    options: ["它是多元正态分布的推广", "它是分类分布的共轭先验", "它只适用于二分类", "它是连续分布的共轭先验"],
                    answer: 1,
                    explanation: "Dirichlet 分布 Dir(alpha) 是多项分布（分类分布）的共轭先验。当先验为 Dir(alpha)，观测数据为多项分布时，后验仍然是 Dirichlet 分布。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-c-8",
                    question: "在概率图模型中，精确推断的常用算法是什么？",
                    options: ["梯度下降", "信念传播（Belief Propagation）/ 变量消除", "K-means", "PCA"],
                    answer: 1,
                    explanation: "信念传播和变量消除是在树结构概率图模型上进行精确推断的经典算法。在有环图上可使用循环信念传播进行近似推断。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-c-9",
                    question: "高斯过程回归的计算复杂度主要瓶颈是什么？",
                    options: ["梯度计算", "核矩阵的求逆，复杂度为 O(n^3)", "数据预处理", "超参数优化"],
                    answer: 1,
                    explanation: "GP 回归需要对 n x n 的核矩阵求逆（或 Cholesky 分解），计算复杂度为 O(n^3)，这限制了 GP 在大规模数据上的应用。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-c-10",
                    question: "在贝叶斯模型比较中，边际似然（Marginal Likelihood / Model Evidence）的作用是什么？",
                    options: ["衡量模型在训练集上的拟合度", "自动实现奥卡姆剃刀，在模型复杂度和拟合度之间平衡", "计算后验概率", "优化超参数"],
                    answer: 1,
                    explanation: "边际似然 P(D|M) = integral P(D|theta,M) P(theta|M) dtheta 自动惩罚复杂模型（先验分散导致似然被稀释），实现了奥卡姆剃刀原则。",
                    difficulty: 3
                }
            ],
            fill: [
                {
                    id: "pml-mid-f-1",
                    question: "贝叶斯推断中，____先验（Prior）表达在观测数据之前对参数的信念。",
                    answer: "先验",
                    explanation: "先验分布 P(theta) 编码了观测数据之前的参数信念，可以是信息性的（基于领域知识）或无信息的（尽量客观）。",
                    difficulty: 1
                },
                {
                    id: "pml-mid-f-2",
                    question: "变分推断中，____下界（ELBO）是需要被最大化的优化目标。",
                    answer: "证据",
                    explanation: "ELBO = E_q[log p(D|theta)] - KL(q(theta)||p(theta))，最大化 ELBO 等价于最小化变分分布 q 与真实后验 p(theta|D) 之间的 KL 散度。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-f-3",
                    question: "高斯过程可以被视为在函数空间上的无限维____分布。",
                    answer: "高斯",
                    explanation: "GP 是高斯分布在函数空间上的推广：任意有限个函数值的联合分布是多元高斯分布。GP 完全由均值函数和核函数决定。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-f-4",
                    question: "在核方法中，Mercer 定理保证了正定核函数可以展开为____函数的内积。",
                    answer: "特征",
                    explanation: "Mercer 定理：正定核 k(x,x') 可以展开为 k(x,x') = sum_i lambda_i phi_i(x) phi_i(x')，其中 phi_i 是特征函数。",
                    difficulty: 3
                },
                {
                    id: "pml-mid-f-5",
                    question: "贝叶斯网络中，____分离（d-separation）用于判断条件独立性。",
                    answer: "d",
                    explanation: "d-separation 是贝叶斯网络中判断变量间条件独立性的图形化准则：如果所有路径都被"阻塞"，则两变量条件独立。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-f-6",
                    question: "在概率图模型中，____（Belief Propagation）算法在树结构图上可以给出精确的边缘概率。",
                    answer: "信念传播",
                    explanation: "信念传播通过节点间传递消息来计算边缘概率，在树结构图上保证收敛到精确解，在有环图上是近似算法。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-f-7",
                    question: "Gibbs 采样是一种____链蒙特卡洛（MCMC）方法，通过从条件分布中依次采样来构造联合分布的样本。",
                    answer: "马尔可夫",
                    explanation: "Gibbs 采样在每个步骤中依次对每个变量从其条件分布中采样，构造的马尔可夫链以目标联合分布为平稳分布。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-f-8",
                    question: "高斯过程中的 RBF 核（径向基函数核）也被称为____核（Squared Exponential Kernel）。",
                    answer: "平方指数",
                    explanation: "RBF 核 k(x,x') = sigma^2 exp(-||x-x'||^2/(2l^2)) 也叫平方指数核或高斯核，是最常用的 GP 核函数之一。",
                    difficulty: 1
                },
                {
                    id: "pml-mid-f-9",
                    question: "在贝叶斯推断中，后验分布的归一化常数（边际似然）通常难以直接计算，这被称为____问题。",
                    answer: "难解",
                    explanation: "边际似然 P(D) = integral P(D|theta)P(theta) dtheta 通常涉及高维积分，没有解析解，需要使用变分推断、MCMC 等近似方法。",
                    difficulty: 2
                },
                {
                    id: "pml-mid-f-10",
                    question: "马尔可夫随机场（MRF）的联合分布分解为图中所有____（Clique）上势函数的乘积。",
                    answer: "团",
                    explanation: "MRF 的 Hammersley-Clifford 定理将联合分布表示为最大团上势函数的乘积：P(x) = (1/Z) prod_c psi_c(x_c)。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "pml-mid-code-1",
                    question: "补全以下代码，实现高斯过程回归的预测。",
                    code: "import numpy as np

def gp_predict(X_train, y_train, X_test, kernel, noise_var=0.1):
    """高斯过程回归预测
    
    Args:
        X_train, y_train: 训练数据
        X_test: 测试点
        kernel: 核函数 k(x, x')
        noise_var: 噪声方差
    Returns:
        mean, var: 预测均值和方差
    """
    n = len(X_train)
    
    # 计算核矩阵
    K = kernel(X_train, X_train) + noise_var * np.eye(n)
    K_star = kernel(X_train, X_test)
    K_star_star = kernel(X_test, X_test)
    
    # Cholesky 分解
    L = np.linalg.cholesky(K)
    alpha = np.linalg.solve(L.T, np.linalg.solve(L, y_train))
    
    # 预测均值
    mean = K_star.T @ alpha
    
    # 预测方差
    v = np.linalg.solve(L, K_star)
    var = ____
    
    return mean, var",
                    answer: "K_star_star - np.sum(v**2, axis=0)",
                    explanation: "GP 预测方差为 k(x*,x*) - K_star^T K^{-1} K_star，其中 v = L^{-1} K_star，所以 var = K_star_star - sum(v^2, axis=0)。",
                    difficulty: 3
                },
                {
                    id: "pml-mid-code-2",
                    question: "补全以下代码，实现变分推断中的 ELBO 计算（以简单高斯-伯努利模型为例）。",
                    code: "import numpy as np
from scipy import stats

def compute_elbo(X, mu_q, var_q, mu_prior=0, var_prior=1):
    """计算变分下界 ELBO
    
    Args:
        X: 观测数据
        mu_q, var_q: 变分后验 q(theta) 的参数
    Returns:
        float: ELBO 值
    """
    # E_q[log p(X|theta)]: 期望对数似然
    # 简化：假设高斯似然
    log_likelihood = -0.5 * np.sum((X - mu_q)**2 + var_q)
    
    # KL(q||p): 变分分布与先验的KL散度
    kl_div = 0.5 * (np.log(var_prior/var_q) + 
                     (var_q + (mu_q - mu_prior)**2) / var_prior - 1)
    
    # ELBO = E_q[log p(X|theta)] - KL(q||p)
    elbo = ____
    return elbo",
                    answer: "log_likelihood - kl_div",
                    explanation: "ELBO = E_q[log p(X|theta)] - KL(q(theta)||p(theta))。最大化 ELBO 等价于最小化 q 与真实后验之间的 KL 散度。",
                    difficulty: 3
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "pml-fin-c-1",
                    question: "在贝叶斯深度学习中，MC Dropout 被用作什么的近似？",
                    options: ["梯度计算", "贝叶斯后验推断", "数据增强", "特征选择"],
                    answer: 1,
                    explanation: "Gal & Ghahramani (2016) 证明了在特定条件下，带 Dropout 的神经网络可以被解释为深度高斯过程的近似推断，即用 Dropout 采样来近似贝叶斯后验。",
                    difficulty: 3
                },
                {
                    id: "pml-fin-c-2",
                    question: "在高斯过程中，稀疏变分 GP（Sparse VI）如何降低计算复杂度？",
                    options: ["删除训练数据", "引入 M 个诱导点（Inducing Points）来近似完整的核矩阵", "减少特征维度", "使用线性核"],
                    answer: 1,
                    explanation: "Sparse VI 通过 M 个诱导点（M << n）构建低秩近似，将计算复杂度从 O(n^3) 降至 O(nM^2)，使 GP 能扩展到大数据集。",
                    difficulty: 3
                },
                {
                    id: "pml-fin-c-3",
                    question: "在条件随机场（CRF）中，相比隐马尔可夫模型（HMM）的主要优势是什么？",
                    options: ["训练速度更快", "可以使用任意的、非独立的特征，不受输出独立性假设限制", "不需要标注数据", "推理更简单"],
                    answer: 1,
                    explanation: "CRF 是判别模型，不需要对观测进行建模（无观测独立性假设），可以灵活地使用任意特征。HMM 是生成模型，受限于有限的隐状态和观测独立性假设。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-c-4",
                    question: "在变分自编码器（VAE）中，重参数化技巧（Reparameterization Trick）解决了什么问题？",
                    options: ["过拟合", "使从隐变量到数据的路径可微分，允许反向传播", "数据预处理", "超参数调优"],
                    answer: 1,
                    explanation: "重参数化将 z = q(epsilon|z) 改写为 z = mu + sigma * epsilon（epsilon ~ N(0,I)），使采样过程可微，允许梯度通过随机节点反向传播。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-c-5",
                    question: "在贝叶斯网络中，因子分解 P(X1,...,Xn) = prod_i P(Xi|Pa(Xi)) 成立的条件是什么？",
                    options: ["所有变量独立", "图结构是有向无环图（DAG）", "所有节点只有两个父节点", "图是完全连通的"],
                    answer: 1,
                    explanation: "贝叶斯网络利用 DAG 结构的条件独立性，将联合分布分解为每个节点在给定其父节点下的条件概率之积。",
                    difficulty: 1
                },
                {
                    id: "pml-fin-c-6",
                    question: "在高斯混合模型（GMM）的 EM 算法中，E 步计算的是什么？",
                    options: ["模型参数", "每个数据点属于每个分量的后验概率（责任值）", "似然函数", "先验分布"],
                    answer: 1,
                    explanation: "GMM-EM 的 E 步计算责任值 gamma(z_nk) = P(z_n=k|x_n)，即每个数据点属于第 k 个高斯分量的后验概率。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-c-7",
                    question: "在概率机器学习中，模型校准（Calibration）指的是什么？",
                    options: ["最大化训练准确率", "预测概率与实际频率的一致性", "最小化预测延迟", "增加模型参数"],
                    answer: 1,
                    explanation: "校准良好的模型意味着：当模型预测某事件概率为 0.7 时，该事件在约 70% 的情况下确实发生。可靠性图（Reliability Diagram）是评估校准的常用工具。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-c-8",
                    question: "在结构学习中，BIC（贝叶斯信息准则）惩罚项的大小与什么有关？",
                    options: ["样本量的平方根", "参数数量乘以 log(n)/2", "模型的 VC 维", "损失函数的值"],
                    answer: 1,
                    explanation: "BIC = -2*log(L) + k*log(n)，其中 k 是参数数量，n 是样本量。BIC 比 AIC 对复杂模型的惩罚更重，倾向于选择更简单的模型。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-c-9",
                    question: "在贝叶斯优化（Bayesian Optimization）中，采集函数（Acquisition Function）的作用是什么？",
                    options: ["计算后验概率", "指导下一步应该在哪里采样，平衡探索和利用", "计算边际似然", "选择核函数"],
                    answer: 1,
                    explanation: "采集函数（如 EI、UCB）基于 GP 后验来决定下一个评估点，在当前最优解附近（利用）和不确定区域（探索）之间权衡。",
                    difficulty: 3
                },
                {
                    id: "pml-fin-c-10",
                    question: "关于共轭先验（Conjugate Prior），以下哪个说法正确？",
                    options: ["共轭先验使后验分布与先验分布形式不同", "共轭先验使后验分布与先验分布属于同一族，便于解析计算", "共轭先验总是均匀分布", "共轭先验不影响后验"],
                    answer: 1,
                    explanation: "共轭先验保证后验分布与先验分布属于同一参数族，使得后验的参数可以直接从先验参数和数据统计量计算，避免了难解的积分。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "pml-fin-f-1",
                    question: "在贝叶斯优化中，____函数（Acquisition Function）如 Expected Improvement 用于决定下一个评估点。",
                    answer: "采集",
                    explanation: "采集函数基于 GP 后验构建一个代理优化目标，指导搜索应该在哪个区域进行下一次评估。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-f-2",
                    question: "变分推断中，变分族 Q 的选择越接近真实后验，____界越紧。",
                    answer: "ELBO",
                    explanation: "ELBO 是 log P(D) 的下界。当 Q 族足够灵活时，最大化 ELBO 可以使 Q 接近真实后验，ELBO 接近真实的 log P(D)。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-f-3",
                    question: "在 CRF 中，特征函数（Feature Function）可以定义在节点和____（Edge）上。",
                    answer: "边",
                    explanation: "CRF 的特征函数分为节点特征（只依赖单个变量）和边特征（依赖相邻变量对），灵活地编码领域知识。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-f-4",
                    question: "高斯过程回归中，____（Lengthscale）参数控制函数的平滑程度。",
                    answer: "长度尺度",
                    explanation: "RBF 核中的长度尺度 l 控制函数变化的快慢：l 越大函数越平滑，l 越小函数变化越剧烈。可以通过优化边际似然来学习。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-f-5",
                    question: "在贝叶斯网络的精确推断中，变量____（Variable Elimination）通过逐步消去变量来计算边缘概率。",
                    answer: "消除",
                    explanation: "变量消除通过选择消除顺序，逐步对非查询变量求和来简化因子图，最终得到查询变量的边缘分布。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-f-6",
                    question: "在概率生成模型中，____（Latent Variable）是未被直接观测到的隐含变量。",
                    answer: "隐变量",
                    explanation: "隐变量（如混合成分标签、主题分布）在生成过程中起关键作用但不被直接观测，需要通过推断来估计。",
                    difficulty: 1
                },
                {
                    id: "pml-fin-f-7",
                    question: "在贝叶斯统计中，____信息准则（DIC）和 WAIC 是评估模型的全贝叶斯方法。",
                    answer: "偏差",
                    explanation: "DIC（Deviance Information Criterion）和 WAIC（Watanabe-Akaike Information Criterion）基于后验分布来评估模型，不需要点估计。",
                    difficulty: 3
                },
                {
                    id: "pml-fin-f-8",
                    question: "在变分自编码器中，隐变量 z 的先验通常设为标准____分布。",
                    answer: "正态",
                    explanation: "VAE 的标准设定是 p(z) = N(0, I)，先验为各向同性的标准正态分布，使得隐空间结构规整且易于采样。",
                    difficulty: 1
                },
                {
                    id: "pml-fin-f-9",
                    question: "在高斯过程中，核矩阵（Gram Matrix）必须是____半正定的。",
                    answer: "正",
                    explanation: "合法的核函数必须保证任意数据集上的核矩阵是半正定的（Mercer 条件），这是 GP 定义的必要条件。",
                    difficulty: 2
                },
                {
                    id: "pml-fin-f-10",
                    question: "在隐马尔可夫模型中，____算法用于在给定模型参数下计算观测序列的概率。",
                    answer: "前向",
                    explanation: "前向算法（Forward Algorithm）利用动态规划高效计算 P(O|lambda)，复杂度从暴力的 O(T*N^T) 降至 O(T*N^2)。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "pml-fin-code-1",
                    question: "补全以下代码，实现简单的一维高斯过程回归。",
                    code: "import numpy as np

def rbf_kernel(X1, X2, length_scale=1.0, signal_var=1.0):
    """RBF核函数"""
    sq_dist = np.sum(X1**2, 1).reshape(-1,1) + np.sum(X2**2, 1) - 2*X1@X2.T
    return signal_var * np.exp(-0.5 * sq_dist / length_scale**2)

def gp_regression(X_train, y_train, X_test, length_scale=1.0, noise=0.1):
    """GP回归"""
    n = len(X_train)
    K = rbf_kernel(X_train, X_train, length_scale) + noise**2 * np.eye(n)
    K_s = rbf_kernel(X_train, X_test, length_scale)
    K_ss = rbf_kernel(X_test, X_test, length_scale)
    
    # 求解线性系统
    L = np.linalg.cholesky(K)
    alpha = ____
    
    mu = K_s.T @ alpha
    v = np.linalg.solve(L, K_s)
    var = np.diag(K_ss - v.T @ v)
    return mu, var",
                    answer: "np.linalg.solve(L.T, np.linalg.solve(L, y_train))",
                    explanation: "通过 Cholesky 分解求解 K^{-1} y：先解 L * w = y，再解 L^T * alpha = w，这等价于 alpha = K^{-1} y，数值上比直接求逆更稳定。",
                    difficulty: 3
                },
                {
                    id: "pml-fin-code-2",
                    question: "补全以下代码，实现 EM 算法的一次 E 步（高斯混合模型）。",
                    code: "import numpy as np
from scipy.stats import norm

def gmm_e_step(X, means, variances, weights):
    """GMM的E步：计算责任值
    
    Args:
        X: 数据 (n,)
        means: 各分量均值 (K,)
        variances: 各分量方差 (K,)
        weights: 各分量权重 (K,)
    Returns:
        responsibilities: 责任值矩阵 (n, K)
    """
    n = len(X)
    K = len(means)
    responsibilities = np.zeros((n, K))
    
    for k in range(K):
        # 计算第 k 个分量的加权概率密度
        responsibilities[:, k] = ____
    
    # 归一化
    responsibilities /= responsibilities.sum(axis=1, keepdims=True)
    return responsibilities",
                    answer: "weights[k] * norm.pdf(X, means[k], np.sqrt(variances[k]))",
                    explanation: "E 步计算责任值 gamma(z_nk) = pi_k * N(x_n|mu_k, sigma_k^2) / sum_j pi_j * N(x_n|mu_j, sigma_j^2)，即贝叶斯公式。",
                    difficulty: 2
                }
            ]
        }
    },
    /* ================================================================
     * 12. Causal Inference (Brady Neal)
     *    Topics: do-calculus, structural causal models, SCE,
     *            instrumental variables, confounding
     * ================================================================ */
    "Causal Inference": {
        courseId: "causal-inference-neal",
        domain: "ml-theory",
        mid: {
            choice: [
                {
                    id: "causal-mid-c-1",
                    question: "因果推断与统计相关性的核心区别是什么？",
                    options: ["因果推断更简单", "因果推断关注变量之间的因果效应，而非仅仅关联", "统计相关性比因果更可靠", "两者没有区别"],
                    answer: 1,
                    explanation: "因果推断致力于回答干预和反事实问题（如'如果我改变X会发生什么'），而统计相关性只能描述观测到的联合分布中的关联模式。",
                    difficulty: 1
                },
                {
                    id: "causal-mid-c-2",
                    question: "在因果图中，后门准则（Backdoor Criterion）用于识别什么？",
                    options: ["前门路径", "混杂变量（Confounding）的存在", "工具变量", "因果效应的上界"],
                    answer: 1,
                    explanation: "后门准则检查是否存在从 X 到 Y 的后门路径（即通过共同原因的路径）。如果后门路径存在且未被阻断，观测到的关联就会有混杂偏差。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-c-3",
                    question: "do 算子（do-calculus）中，P(Y|do(X)) 与 P(Y|X) 的区别是什么？",
                    options: ["没有区别", "P(Y|do(X)) 表示干预 X 后 Y 的分布，P(Y|X) 是观测条件分布", "前者总是大于后者", "前者是贝叶斯后验"],
                    answer: 1,
                    explanation: "P(Y|do(X)) 表示对 X 施加干预（设置 X=x）后 Y 的分布，而 P(Y|X) 是观测到 X=x 时 Y 的条件分布。当存在混杂时两者不等。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-c-4",
                    question: "结构因果模型（SCM）的核心组件包括哪些？",
                    options: ["只有因果图", "因果图、结构方程和变量分布", "只有回归方程", "只有观测数据"],
                    answer: 1,
                    explanation: "SCM 由三部分组成：(1) 因果图 G（描述因果关系的 DAG），(2) 结构方程（描述每个变量如何由其父节点决定），(3) 噪声/外生变量分布。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-c-5",
                    question: "在随机对照试验（RCT）中，随机化的主要目的是什么？",
                    options: ["减少数据量", "消除混杂，使得处理组和对照组可比", "增加方差", "使结果更复杂"],
                    answer: 1,
                    explanation: "随机化通过随机分配处理，确保处理组和对照组在所有协变量上（观测和未观测的）分布一致，从而消除混杂偏差，使因果效应可识别。",
                    difficulty: 1
                },
                {
                    id: "causal-mid-c-6",
                    question: "工具变量（Instrumental Variable, IV）必须满足的条件是什么？",
                    options: ["与结果变量直接相关", "与处理变量相关，且只通过处理变量影响结果（排除性约束）", "与所有变量都独立", "只能是二值变量"],
                    answer: 1,
                    explanation: "IV 必须满足：(1) 相关性（Relevance）：与处理变量相关；(2) 排除性约束（Exclusion Restriction）：只通过处理变量影响结果，不直接影响结果。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-c-7",
                    question: "在倾向得分（Propensity Score）方法中，倾向得分的定义是什么？",
                    options: ["结果变量的预测值", "给定协变量下接受处理的概率 e(x) = P(T=1|X)", "处理效应的估计值", "混杂变量的数量"],
                    answer: 1,
                    explanation: "倾向得分 e(x) = P(T=1|X=x) 是在给定协变量 X 的条件下接受处理 T 的概率。匹配、加权和分层方法都利用倾向得分来调整混杂。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-c-8",
                    question: "d-分离（d-separation）在因果图中判定条件独立性时，碰撞器（Collider）的作用是什么？",
                    options: ["阻断路径", "打开路径（当被观测时）", "没有影响", "总是阻断路径"],
                    answer: 1,
                    explanation: "碰撞器（X -> Z <- Y）在未被观测时阻断 X 和 Y 之间的路径；但当 Z 或其后代被观测时，路径反而被打开，产生 X 和 Y 之间的虚假关联。",
                    difficulty: 3
                },
                {
                    id: "causal-mid-c-9",
                    question: "反事实框架（Counterfactual Framework）可以回答什么类型的问题？",
                    options: ["只回答平均效应", "回答个体层面的反事实问题（如'如果这个人没有接受治疗会怎样'）", "只回答观测数据中的关联", "只能回答 RCT 的结果"],
                    answer: 1,
                    explanation: "反事实框架（基于潜在结果模型或 SCM）能回答个体层面的反事实问题，如'如果张三没有吃药，他的血压会是多少'，这是纯观测研究做不到的。",
                    difficulty: 3
                },
                {
                    id: "causal-mid-c-10",
                    question: "在因果图中，前门准则（Frontdoor Criterion）利用什么类型的变量来识别因果效应？",
                    options: ["工具变量", "完全位于因果路径上的中介变量", "混杂变量", "结果变量的后代"],
                    answer: 1,
                    explanation: "前门准则利用完全位于处理到结果因果路径上的中介变量 M，要求：(1) 没有从 X 到 Y 的后门路径通过 M，(2) M 和 Y 之间没有未阻断的后门路径。",
                    difficulty: 3
                }
            ],
            fill: [
                {
                    id: "causal-mid-f-1",
                    question: "在因果推断中，____（Confounder）是同时影响处理变量和结果变量的变量。",
                    answer: "混杂因子",
                    explanation: "混杂因子造成处理和结果之间的虚假关联。例如，年龄可能同时影响是否吸烟和是否患肺癌，年龄就是混杂因子。",
                    difficulty: 1
                },
                {
                    id: "causal-mid-f-2",
                    question: "do 算子的核心操作是对因果图进行____（Graph Surgery），移除指向被干预变量的所有箭头。",
                    answer: "图手术",
                    explanation: "do(X=x) 操作通过删除因果图中所有指向 X 的箭头，然后设置 X=x，来模拟对 X 的物理干预。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-f-3",
                    question: "在倾向得分方法中，____（Matching）将处理组和对照组中倾向得分相似的个体配对。",
                    answer: "匹配",
                    explanation: "倾向得分匹配（PSM）为每个处理组个体找到倾向得分最近的对照组个体，模拟随机实验的平衡条件。",
                    difficulty: 1
                },
                {
                    id: "causal-mid-f-4",
                    question: "工具变量方法中，____（Two-Stage Least Squares, 2SLS）是经典的估计方法。",
                    answer: "两阶段最小二乘",
                    explanation: "2SLS 第一阶段用 IV 对处理变量做回归，第二阶段用第一阶段的拟合值对结果做回归，获得一致的因果效应估计。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-f-5",
                    question: "在 SCM 中，____方程描述了每个变量如何由其直接原因（父节点）和外部噪声决定。",
                    answer: "结构",
                    explanation: "结构方程 X_i = f_i(Pa(X_i), U_i) 定义了每个变量与其父节点和外生噪声之间的确定性关系，是 SCM 的核心。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-f-6",
                    question: "在因果推断中，____（Mediator）是位于处理到结果因果路径中间的变量。",
                    answer: "中介变量",
                    explanation: "中介变量 M 是 X -> M -> Y 路径中的中间节点，因果中介分析关注直接效应和通过 M 的间接效应的分解。",
                    difficulty: 1
                },
                {
                    id: "causal-mid-f-7",
                    question: "反事实分析中，____（Rubin Causal Model）使用潜在结果来定义因果效应。",
                    answer: "鲁宾",
                    explanation: "Rubin 因果模型（也叫潜在结果框架）定义个体因果效应为 Y_i(1) - Y_i(0)，即接受处理和未接受处理的潜在结果之差。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-f-8",
                    question: "在 DAG 中，____（Collider）是两个箭头指向的节点（如 X -> Z <- Y）。",
                    answer: "碰撞器",
                    explanation: "碰撞器节点接收来自两个或多个变量的因果箭头，其独特性质是观测碰撞器会打开原本阻断的路径。",
                    difficulty: 2
                },
                {
                    id: "causal-mid-f-9",
                    question: "在因果推断中，____（ATE）定义为 E[Y(1) - Y(0)]，即总体平均处理效应。",
                    answer: "平均处理效应",
                    explanation: "ATE = E[Y(1) - Y(0)] 是因果推断中最核心的参数，表示如果对整个人群施加处理，平均会产生的效应。",
                    difficulty: 1
                },
                {
                    id: "causal-mid-f-10",
                    question: "选择偏差（Selection Bias）通常是因为只观测到被____（Selection）到样本中的个体。",
                    answer: "选择",
                    explanation: "当样本不是从总体中随机选取时（如只观测存活的患者），会产生选择偏差，导致因果效应估计不一致。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "causal-mid-code-1",
                    question: "补全以下代码，使用倾向得分加权（Inverse Propensity Weighting）估计 ATE。",
                    code: "import numpy as np

def ipw_ate(y, treatment, propensity_scores):
    """逆倾向得分加权估计ATE
    
    Args:
        y: 结果变量 (n,)
        treatment: 处理指示 (n,), 0或1
        propensity_scores: 倾向得分 (n,)
    Returns:
        float: ATE 估计
    """
    # 处理组加权平均
    treated_mask = treatment == 1
    y1 = np.sum(y[treated_mask] / propensity_scores[treated_mask]) / np.sum(1 / propensity_scores[treated_mask])
    
    # 对照组加权平均
    control_mask = treatment == 0
    y0 = ____
    
    return y1 - y0",
                    answer: "np.sum(y[control_mask] / (1 - propensity_scores[control_mask])) / np.sum(1 / (1 - propensity_scores[control_mask]))",
                    explanation: "IPW 通过逆倾向得分对每个个体加权：处理组用 1/e(x) 加权，对照组用 1/(1-e(x)) 加权，然后取加权平均估计 E[Y(1)] 和 E[Y(0)]。",
                    difficulty: 3
                },
                {
                    id: "causal-mid-code-2",
                    question: "补全以下代码，实现简单的倾向得分估计（逻辑回归）。",
                    code: "from sklearn.linear_model import LogisticRegression
import numpy as np

def estimate_propensity(X, treatment):
    """用逻辑回归估计倾向得分"""
    model = LogisticRegression(max_iter=1000)
    model.fit(X, treatment)
    # 预测倾向得分 P(T=1|X)
    propensity = ____
    # 裁剪极端值避免权重爆炸
    propensity = np.clip(propensity, 0.05, 0.95)
    return propensity

# X: 协变量矩阵, treatment: 处理向量",
                    answer: "model.predict_proba(X)[:, 1]",
                    explanation: "predict_proba 返回每个类别的概率，取第二列（T=1 的概率）作为倾向得分。裁剪极端值防止权重 1/e 或 1/(1-e) 过大。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "causal-fin-c-1",
                    question: "在因果推断中，DID（双重差分法）的识别假设是什么？",
                    options: ["完全随机化", "平行趋势假设：如果没有处理，处理组和对照组的结果趋势会相同", "无混杂", "工具变量存在"],
                    answer: 1,
                    explanation: "DID 假设在没有处理干预的情况下，处理组和对照组的结果随时间的变化趋势是平行的。这是一个可检验的（部分可检验的）假设。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-c-2",
                    question: "关于断点回归（Regression Discontinuity Design, RDD），以下哪个说法正确？",
                    options: ["需要随机化", "利用阈值附近的准随机分配来识别因果效应", "只能估计 ATE", "只能用于二值处理"],
                    answer: 1,
                    explanation: "RDD 利用处理分配的确定性规则（如分数超过阈值则给予处理），在阈值附近，处理分配近似随机，从而识别局部平均处理效应（LATE）。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-c-3",
                    question: "在因果森林（Causal Forest）中，主要估计的是什么？",
                    options: ["总体 ATE", "条件平均处理效应 CATE（即异质性处理效应）", "倾向得分", "协变量重要性"],
                    answer: 1,
                    explanation: "Causal Forest 是 GRF 框架的核心算法，通过适应性地将样本分组来估计条件平均处理效应 tau(x) = E[Y(1)-Y(0)|X=x]，捕捉处理效应的异质性。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-c-4",
                    question: "在 SCM 中，如果两个变量之间有未观测的共同原因（Unobserved Confounder），这对应于什么？",
                    options: ["完全随机化", "图中的双向虚线箭头（或共享噪声项）", "前门路径", "工具变量"],
                    answer: 1,
                    explanation: "未观测混杂在因果图中通常用双向虚线箭头表示，或等价地，在 SCM 中两个变量的结构方程共享同一个外生噪声变量。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-c-5",
                    question: "在因果推断中，LATE（局部平均处理效应）估计的是哪个群体的效应？",
                    options: ["所有人", "依从者（Compliers），即遵循分配的个体", "从未接受处理的人", "总是接受处理的人"],
                    answer: 1,
                    explanation: "LATE 是通过工具变量估计的因果效应，针对的是"依从者"群体——即 IV 指示他们接受处理时他们就接受、不指示时就不接受的个体。",
                    difficulty: 3
                },
                {
                    id: "causal-fin-c-6",
                    question: "在差分中的差分（DID）方法中，三重差分（DDD）通过什么额外步骤来控制时变混杂？",
                    options: ["增加更多处理组", "在时间维度和处理维度之外增加第三个比较维度", "使用更复杂的回归", "增加样本量"],
                    answer: 1,
                    explanation: "DDD 引入第三个维度（如不同地区），假设在没有处理的情况下三重交互效应为零，从而控制了可能随时间和处理组变化的混杂。",
                    difficulty: 3
                },
                {
                    id: "causal-fin-c-7",
                    question: "在敏感性分析（Sensitivity Analysis）中，E-value 用来衡量什么？",
                    options: ["p 值", "未观测混杂需要多强才能解释掉观测到的效应", "效应量的大小", "样本量"],
                    answer: 1,
                    explanation: "E-value 是使观测到的因果效应归零所需的最小未观测混杂强度。E-value 越大，结论对未观测混杂越稳健。",
                    difficulty: 3
                },
                {
                    id: "causal-fin-c-8",
                    question: "在结构因果模型中，do(X=x) 操作与观察到 X=x 的根本区别是什么？",
                    options: ["没有区别", "do 操作改变因果结构（删除入边），观察不改变", "观察比干预更有效", "do 操作需要更多数据"],
                    answer: 1,
                    explanation: "do(X=x) 通过图手术删除所有指向 X 的箭头再设置 X=x，模拟外部干预；观察 X=x 只是筛选出 X=x 的子集，不改变因果结构。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-c-9",
                    question: "在因果推断中，负对照（Negative Control）的作用是什么？",
                    options: ["增加统计功效", "验证因果识别假设的正确性", "替代工具变量", "估计混杂的大小"],
                    answer: 1,
                    explanation: "负对照选择已知不受处理影响的结果变量或已知不受混杂影响的处理变量。如果负对照显示显著效应，说明存在未满足的假设。",
                    difficulty: 3
                },
                {
                    id: "causal-fin-c-10",
                    question: "在面板数据因果推断中，固定效应模型可以控制什么类型的混杂？",
                    options: ["时变混杂", "不随时间变化的个体异质性", "所有混杂", "测量误差"],
                    answer: 1,
                    explanation: "个体固定效应吸收了每个个体不随时间变化的特征（如基因、早期经历），从而控制了这些不随时间变化但同时影响处理和结果的混杂。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "causal-fin-f-1",
                    question: "在因果森林中，____（Honesty）意味着用于分割的样本和用于估计叶节点效应的样本是分开的。",
                    answer: "诚实",
                    explanation: "诚实性（Honesty）确保分割变量和分裂点的选择不影响叶节点中处理效应的估计，避免了过拟合和估计偏差。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-f-2",
                    question: "DID 方法的核心估计量是：(处理组后-处理组前) - (____组后-____组前)。",
                    answer: "对照",
                    explanation: "DID 通过双重差分消除处理组和对照组之间不随时间变化的差异以及共同的时间趋势，提取出纯粹的处理效应。",
                    difficulty: 1
                },
                {
                    id: "causal-fin-f-3",
                    question: "在 RDD 中，带宽（____）的选择需要在偏差和方差之间权衡。",
                    answer: "带宽",
                    explanation: "带宽太小导致样本量不足（高方差），带宽太大引入远离阈值的样本（高偏差）。最优带宽通过交叉验证或 MSE 最小化选择。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-f-4",
                    question: "在 IV 回归中，____（Wald Estimator）用简化式系数除以第一阶段系数来估计处理效应。",
                    answer: "Wald",
                    explanation: "Wald 估计量 = Cov(Z,Y)/Cov(Z,X)，即 IV 对结果的效应除以 IV 对处理的效应，等价于 2SLS 在单变量情况下的结果。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-f-5",
                    question: "在因果推断的框架中，____（Treatment Effect Heterogeneity）指处理效应因个体特征而不同。",
                    answer: "处理效应异质性",
                    explanation: "异质性处理效应是因果推断的重要研究方向，目标是识别哪些亚群对处理反应更强，以实现个性化决策。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-f-6",
                    question: "在 SCM 中，____（Intervention）是通过修改结构方程来模拟外部干预。",
                    answer: "干预",
                    explanation: "SCM 的干预操作是将某个变量的结构方程替换为常数（或新方程），而非简单地条件化该变量的值。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-f-7",
                    question: "在因果推断中，____（Propensity Score）可以将多维协变量的调整简化为一维的调整。",
                    answer: "倾向得分",
                    explanation: "倾向得分 e(X) = P(T=1|X) 的平衡性质使得只要在倾向得分上匹配或加权，就能近似平衡所有观测协变量。",
                    difficulty: 1
                },
                {
                    id: "causal-fin-f-8",
                    question: "在面板数据的因果分析中，____（Difference-in-Differences）是比较处理前后变化的经典方法。",
                    answer: "双重差分",
                    explanation: "DID 比较处理组和对照组在处理前后的结果变化差异，利用平行趋势假设识别因果效应。",
                    difficulty: 1
                },
                {
                    id: "causal-fin-f-9",
                    question: "在 DAG 中，____（Backdoor Path）是从处理到结果但以箭头进入处理节点的路径。",
                    answer: "后门路径",
                    explanation: "后门路径引入混杂偏差，必须通过后门准则找到条件集合来阻断这些路径，才能无偏地识别因果效应。",
                    difficulty: 2
                },
                {
                    id: "causal-fin-f-10",
                    question: "在因果推断中，____（Selection on Observables）假设所有混杂变量都被观测到了。",
                    answer: "可观测选择",
                    explanation: "条件可忽略性（Conditional Ignorability / Selection on Observables）假设在给定观测协变量 X 后，处理分配与潜在结果独立。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "causal-fin-code-1",
                    question: "补全以下代码，实现双重差分法（DID）估计量。",
                    code: "import numpy as np

def did_estimate(y_post_treat, y_pre_treat, y_post_control, y_pre_control):
    """双重差分法估计ATE
    
    Args:
        y_post_treat: 处理组处理后均值
        y_pre_treat: 处理组处理前均值
        y_post_control: 对照组处理后均值
        y_pre_control: 对照组处理前均值
    Returns:
        float: DID 估计量
    """
    # 处理组的变化
    diff_treat = y_post_treat - y_pre_treat
    
    # 对照组的变化
    diff_control = ____
    
    # DID = 处理组变化 - 对照组变化
    ate_did = diff_treat - diff_control
    return ate_did",
                    answer: "y_post_control - y_pre_control",
                    explanation: "DID 估计量 = (Y_treat_post - Y_treat_pre) - (Y_control_post - Y_control_pre)，通过双重差分消除基线差异和共同时间趋势。",
                    difficulty: 1
                },
                {
                    id: "causal-fin-code-2",
                    question: "补全以下代码，实现倾向得分匹配（PSM）中的最近邻匹配。",
                    code: "import numpy as np

def nearest_neighbor_match(propensity_treated, propensity_control):
    """最近邻倾向得分匹配
    
    Args:
        propensity_treated: 处理组倾向得分
        propensity_control: 对照组倾向得分
    Returns:
        matches: 匹配索引列表 [(treat_idx, control_idx), ...]
    """
    matches = []
    used_control = set()
    
    for t_idx, t_score in enumerate(propensity_treated):
        # 找到倾向得分最近且未使用的对照组个体
        distances = np.abs(propensity_control - t_score)
        
        # 排除已使用的对照组
        for c_idx in sorted(used_control):
            distances[c_idx] = ____
        
        best_c = np.argmin(distances)
        matches.append((t_idx, best_c))
        used_control.add(best_c)
    
    return matches",
                    answer: "np.inf",
                    explanation: "已使用的对照组个体的距离设为无穷大，确保每个处理组个体匹配到不同的对照组个体（无放回匹配）。贪心策略从倾向得分最接近的开始匹配。",
                    difficulty: 2
                }
            ]
        }
    },

    /* ================================================================
     * 13. CS221: AI Principles and Techniques (Stanford)
     *    Topics: search, MDP, Bayesian networks, logic,
     *            machine learning basics, constraint satisfaction
     * ================================================================ */
    "CS221: AI Principles and Techniques": {
        courseId: "cs221-ai-principles",
        domain: "ai-foundations",
        mid: {
            choice: [
                {
                    id: "cs221-mid-c-1",
                    question: "在 A* 搜索算法中，f(n) = g(n) + h(n) 中的 h(n) 代表什么？",
                    options: ["从起点到 n 的实际代价", "从 n 到目标的启发式估计代价", "总代价", "节点深度"],
                    answer: 1,
                    explanation: "h(n) 是启发式函数，估计从节点 n 到目标状态的最小代价。A* 的最优性要求 h(n) 是可采纳的（不高估实际代价）。",
                    difficulty: 1
                },
                {
                    id: "cs221-mid-c-2",
                    question: "在马尔可夫决策过程（MDP）中，贝尔曼方程表达的是什么？",
                    options: ["当前状态的奖励", "状态价值函数的递归分解关系", "策略梯度", "Q 函数的解析解"],
                    answer: 1,
                    explanation: "贝尔曼方程 V(s) = max_a [R(s,a) + gamma * sum_s' P(s'|s,a) V(s')] 将状态价值分解为即时奖励和折扣未来价值的递归关系。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-c-3",
                    question: "在约束满足问题（CSP）中，弧一致性（Arc Consistency）的作用是什么？",
                    options: ["保证找到解", "通过删除不一致的值来缩小搜索空间", "优化目标函数", "增加变量数量"],
                    answer: 1,
                    explanation: "弧一致性确保对于每个变量的每个取值，其相邻变量都至少有一个一致的取值。不满足弧一致性的值会被删除，从而在搜索前缩减域大小。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-c-4",
                    question: "在贝叶斯网络中，精确推断的复杂度通常与图的什么结构属性相关？",
                    options: ["节点数", "树宽（Treewidth）", "边数", "直径"],
                    answer: 1,
                    explanation: "精确推断的复杂度随图的树宽指数增长。树宽衡量图与树的接近程度，树宽越小，推断越高效。",
                    difficulty: 3
                },
                {
                    id: "cs221-mid-c-5",
                    question: "在强化学习中，值迭代（Value Iteration）和策略迭代（Policy Iteration）的区别是什么？",
                    options: ["没有区别", "值迭代每步更新价值函数，策略迭代在每步更新策略后评估", "值迭代更慢", "策略迭代不需要贝尔曼方程"],
                    answer: 1,
                    explanation: "值迭代在每步直接更新价值函数 V(s)；策略迭代先固定策略进行策略评估（求解 V^pi），然后进行策略改进，交替进行直到收敛。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-c-6",
                    question: "在博弈论 AI 中，纳什均衡（Nash Equilibrium）描述的是什么状态？",
                    options: ["所有玩家都获得最高收益", "任何玩家单方面改变策略都不能提高自己的收益", "博弈结束", "一方完全获胜"],
                    answer: 1,
                    explanation: "纳什均衡是策略组合，其中每个玩家的策略都是对其他玩家策略的最优响应。在均衡状态下，没有人有动机单方面偏离。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-c-7",
                    question: "在逻辑推理中，归结（Resolution）规则的作用是什么？",
                    options: ["简化表达式", "从两个子句推导出新子句（归结式），用于证明不可满足性", "计算概率", "优化目标"],
                    answer: 1,
                    explanation: "归结规则：若子句包含互补的文字（如 P 和 ~P），可以消去它们并合并其余文字。反复应用归结规则可证明子句集的不可满足性。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-c-8",
                    question: "在蒙特卡洛树搜索（MCTS）中，UCT（UCB for Trees）公式的探索项是什么？",
                    options: ["c * sqrt(ln(N) / n)", "gamma * V(s)", "R(s,a)", "epsilon * random()"],
                    answer: 0,
                    explanation: "UCT 公式 Q(s,a) + c * sqrt(ln(N(s)) / N(s,a)) 中，第二项是探索项，鼓励访问次数少的状态-动作对，平衡探索和利用。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-c-9",
                    question: "在隐马尔可夫模型（HMM）中，前向算法的复杂度是？",
                    options: ["O(T)", "O(T * K^2)", "O(T^2 * K)", "O(K^T)"],
                    answer: 1,
                    explanation: "前向算法复杂度 O(T * K^2)，T 是时间步数，K 是隐状态数。每个时间步需要计算 K 个前向概率，每个需要 K 次乘法和加法。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-c-10",
                    question: "在约束满足问题中，最小剩余值（MRV）启发式选择哪个变量优先赋值？",
                    options: ["域最大的变量", "域最小的变量", "连接数最少的变量", "随机变量"],
                    answer: 1,
                    explanation: "MRV（也叫最受约束变量启发式）选择当前域最小的变量进行赋值，因为域最小的变量最有可能导致失败，可以更早地剪枝。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "cs221-mid-f-1",
                    question: "A* 搜索算法保证找到最优解的条件是启发式函数 h(n) 是____（Admissible）的。",
                    answer: "可采纳",
                    explanation: "可采纳启发式要求 h(n) 永远不高估从 n 到目标的真实最小代价，即 h(n) <= h*(n)。这保证 A* 扩展的第一个目标节点就是最优解。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-f-2",
                    question: "在 MDP 中，____（Discount Factor）gamma 在 [0,1] 之间，决定了未来奖励的当前价值。",
                    answer: "折扣因子",
                    explanation: "gamma=0 表示只考虑即时奖励，gamma 越接近 1 越重视远期回报。gamma 还确保了无限时域问题中总回报是有限的。",
                    difficulty: 1
                },
                {
                    id: "cs221-mid-f-3",
                    question: "在 CSP 中，回溯搜索遇到失败时，____（Backtracking）会回退到上一个变量并尝试其他取值。",
                    answer: "回溯",
                    explanation: "回溯搜索在发现当前赋值不可行时，回退到上一个决策点尝试下一个可能值，是 CSP 求解的基本搜索策略。",
                    difficulty: 1
                },
                {
                    id: "cs221-mid-f-4",
                    question: "在贝叶斯网络中，条件概率表（____）定义了每个节点在给定其父节点下的概率分布。",
                    answer: "CPT",
                    explanation: "CPT（Conditional Probability Table）是贝叶斯网络的核心参数化方式，为每个变量定义了 P(Xi|Pa(Xi)) 的完整概率表。",
                    difficulty: 1
                },
                {
                    id: "cs221-mid-f-5",
                    question: "在强化学习中，策略梯度（Policy Gradient）方法直接优化参数化的____（Policy）。",
                    answer: "策略",
                    explanation: "策略梯度方法直接参数化策略 pi_theta(a|s)，通过 REINFORCE 等算法用蒙特卡洛采样估计梯度来优化参数 theta。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-f-6",
                    question: "在博弈论中，混合策略（Mixed Strategy）是指玩家以一定的____（Probability）分配随机选择不同行动。",
                    answer: "概率",
                    explanation: "混合策略允许玩家以概率分布而非确定性方式选择行动。在有限博弈中，混合策略纳什均衡总是存在的。",
                    difficulty: 1
                },
                {
                    id: "cs221-mid-f-7",
                    question: "在 CSP 中，____一致性（Consistency）检查扩展到两步以上的约束，比弧一致性更强。",
                    answer: "路径",
                    explanation: "k-一致性要求对任意 k-1 个变量的赋值，第 k 个变量都至少有一个一致值。3-一致性（路径一致性）比弧一致性（2-一致性）更强。",
                    difficulty: 3
                },
                {
                    id: "cs221-mid-f-8",
                    question: "在 MCTS 中，____（Exploration）步骤从根节点沿着树策略向下走到叶节点。",
                    answer: "选择",
                    explanation: "MCTS 四步骤：(1)选择：沿树走 UCT 最优的分支；(2)扩展：在叶节点添加子节点；(3)模拟：随机 rollout 到终态；(4)回传：更新路径上的统计量。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-f-9",
                    question: "在命题逻辑中，合取范式（____ Normal Form, CNF）是子句的合取。",
                    answer: "合取",
                    explanation: "CNF 将逻辑公式写成多个子句的 AND（合取），每个子句是文字的 OR（析取）。SAT 求解器通常以 CNF 形式工作。",
                    difficulty: 2
                },
                {
                    id: "cs221-mid-f-10",
                    question: "在贝叶斯网络的精确推断中，变量消去（Variable ____）通过逐步消去变量来计算边缘概率。",
                    answer: "消去",
                    explanation: "变量消去通过选择最优消除顺序，逐步对非查询变量求和来简化因子图，最终得到查询变量的边缘分布。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "cs221-mid-code-1",
                    question: "补全以下代码，实现 A* 搜索算法的核心循环。",
                    code: "import heapq

def a_star(start, goal, neighbors, heuristic):
    """A*搜索
    Args:
        start: 起始状态
        goal: 目标状态
        neighbors(s): 返回 [(next_s, cost), ...]
        heuristic(s): 启发式函数
    Returns:
        最短路径代价
    """
    g_score = {start: 0}
    f_score = {start: heuristic(start)}
    open_set = [(f_score[start], start)]
    
    while open_set:
        _, current = heapq.heappop(open_set)
        
        if current == goal:
            return g_score[current]
        
        for neighbor, cost in neighbors(current):
            tentative_g = g_score[current] + cost
            if tentative_g < g_score.get(neighbor, ____):
                g_score[neighbor] = tentative_g
                f_score[neighbor] = tentative_g + heuristic(neighbor)
                heapq.heappush(open_set, (f_score[neighbor], neighbor))
    
    return float('inf')",
                    answer: "float('inf')",
                    explanation: "对于尚未访问的节点，g_score 默认为正无穷大，使得任何有限路径的代价都能更新该节点。这是 A* 搜索的标准实现方式。",
                    difficulty: 1
                },
                {
                    id: "cs221-mid-code-2",
                    question: "补全以下代码，实现贝尔曼方程的一次值迭代更新。",
                    code: "import numpy as np

def value_iteration_step(V, transition, rewards, gamma=0.9):
    """值迭代的一次更新
    
    Args:
        V: 当前价值函数 (n_states,)
        transition: 转移概率 (n_states, n_actions, n_states)
        rewards: 奖励函数 (n_states, n_actions)
        gamma: 折扣因子
    Returns:
        V_new: 更新后的价值函数
    """
    n_states, n_actions = rewards.shape
    V_new = np.zeros(n_states)
    
    for s in range(n_states):
        q_values = []
        for a in range(n_actions):
            # Q(s,a) = R(s,a) + gamma * sum_s' P(s'|s,a) * V(s')
            q = rewards[s, a] + gamma * np.sum(transition[s, a, :] * ____)
            q_values.append(q)
        V_new[s] = max(q_values)
    
    return V_new",
                    answer: "V",
                    explanation: "贝尔曼方程更新：V_new(s) = max_a [R(s,a) + gamma * sum_{s'} P(s'|s,a) * V(s')]，其中使用当前价值函数 V 计算期望未来价值。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "cs221-fin-c-1",
                    question: "在部分可观测 MDP（POMDP）中，智能体维护的是什么来代替直接状态？",
                    options: ["状态转移矩阵", "信念状态（Belief State），即状态的概率分布", "动作序列", "奖励向量"],
                    answer: 1,
                    explanation: "POMDP 中智能体不能直接观测状态，需要用贝叶斯更新维护一个信念状态（状态的后验概率分布），然后在信念空间上求解 MDP。",
                    difficulty: 3
                },
                {
                    id: "cs221-fin-c-2",
                    question: "在极大极小搜索中，minimax 算法结合 alpha-beta 剪枝可以减少多少的节点访问量（在最佳情况下）？",
                    options: ["不变", "约一半", "指数级减少（访问约 sqrt(b^d) 个节点）", "减少到 O(1)"],
                    answer: 2,
                    explanation: "在最佳排列下，alpha-beta 剪枝将时间复杂度从 O(b^d) 降至 O(b^{d/2})，等价于将搜索深度加倍或将分支因子取平方根。",
                    difficulty: 3
                },
                {
                    id: "cs221-fin-c-3",
                    question: "在 Q-Learning 中，更新规则 Q(s,a) <- Q(s,a) + alpha * [r + gamma * max_a' Q(s',a') - Q(s,a)] 中的 TD 误差是什么？",
                    options: ["Q(s,a)", "r + gamma * max_a' Q(s',a') - Q(s,a)", "alpha", "gamma"],
                    answer: 1,
                    explanation: "TD 误差 = 目标值 - 当前估计值 = (r + gamma * max_a' Q(s',a')) - Q(s,a)，衡量当前 Q 值估计与贝尔曼方程目标之间的差距。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-c-4",
                    question: "在命题逻辑中，可满足性问题（SAT）是哪种复杂度类？",
                    options: ["P", "NP-完全", "PSPACE-完全", "EXPTIME-完全"],
                    answer: 1,
                    explanation: "SAT 是第一个被证明为 NP-完全的问题（Cook-Levin 定理），对它的高效求解仍然是理论计算机科学的核心未解决问题。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-c-5",
                    question: "在贝叶斯网络中，马尔可夫毯（Markov Blanket）包含哪些节点？",
                    options: ["所有邻居节点", "父节点、子节点和子节点的父节点", "所有后代节点", "所有祖先节点"],
                    answer: 1,
                    explanation: "一个节点在给定其马尔可夫毯（父节点 + 子节点 + 子节点的其他父节点）后条件独立于图中所有其他节点。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-c-6",
                    question: "在多智能体强化学习中，合作型 MARL 的典型挑战是什么？",
                    options: ["只有一个智能体", "信用分配问题（Credit Assignment）—— 如何分配团队奖励到各智能体", "不需要通信", "状态空间变小"],
                    answer: 1,
                    explanation: "合作型 MARL 中，智能体共享团队奖励，但难以确定每个智能个体对总奖励的贡献（信用分配问题），需要 CTDE 等方法解决。",
                    difficulty: 3
                },
                {
                    id: "cs221-fin-c-7",
                    question: "在 CSP 求解中，局部搜索（如 Min-Conflicts）的主要优势是什么？",
                    options: ["保证找到解", "在大规模问题上通常非常高效，每步只改变一个变量", "不需要约束信息", "只适用于小规模问题"],
                    answer: 1,
                    explanation: "Min-Conflicts 在每步选择冲突最多的变量，将其改为满足最多约束的值。这种简单策略在大规模 CSP（如 N-皇后）上表现出近乎常数时间的性能。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-c-8",
                    question: "在 HMM 中，维特比（Viterbi）算法计算的是什么？",
                    options: ["观测概率", "最可能的隐状态序列", "前向概率", "后验边际"],
                    answer: 1,
                    explanation: "维特比算法利用动态规划在 O(T*K^2) 时间内找到给定观测序列下最可能的隐状态序列（MAP 解码）。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-c-9",
                    question: "在贝叶斯博弈中，贝叶斯纳什均衡要求每个玩家对什么做出最优响应？",
                    options: ["确定性的策略", "对其他玩家的策略和自己的类型分布做出最优响应", "固定策略", "最小化损失"],
                    answer: 1,
                    explanation: "贝叶斯纳什均衡扩展了纳什均衡到信息不完全博弈：每个玩家在知道自己类型但不知道其他玩家类型的条件下，选择期望效用最大化的策略。",
                    difficulty: 3
                },
                {
                    id: "cs221-fin-c-10",
                    question: "在在线规划中，RTDP（Real-Time Dynamic Planning）的优势是什么？",
                    options: ["需要完整状态空间", "只关注从初始状态可达的状态，按需计算", "不需要模型", "保证全局最优"],
                    answer: 1,
                    explanation: "RTDP 只从初始状态开始模拟和更新遇到的状态，避免了对整个状态空间的遍历，在大状态空间的 MDP 中非常高效。",
                    difficulty: 3
                }
            ],
            fill: [
                {
                    id: "cs221-fin-f-1",
                    question: "在 CSP 中，局部搜索算法如____（Min-Conflicts）每步只改变冲突最多变量的赋值。",
                    answer: "最小冲突",
                    explanation: "Min-Conflicts 启发式选择冲突数最多的变量，将其值改为导致冲突最少的值，是大规模 CSP 的高效求解方法。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-f-2",
                    question: "在 POMDP 中，信念状态的更新通过____（Bayes' Rule）根据新的观测信息进行。",
                    answer: "贝叶斯定理",
                    explanation: "POMDP 中信念状态的转移：b'(s') = eta * P(o|s',a) * sum_s P(s'|s,a) * b(s)，本质是贝叶斯更新。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-f-3",
                    question: "在 AIMA 框架中，智能体的理性（Rationality）取决于它执行的____（Action）序列的质量。",
                    answer: "动作",
                    explanation: "理性的智能体选择使其期望效用最大化的动作，性能度量取决于智能体产生的动作序列对环境的影响。",
                    difficulty: 1
                },
                {
                    id: "cs221-fin-f-4",
                    question: "在博弈论中，____（Correlated Equilibrium）允许玩家使用推荐系统来协调策略。",
                    answer: "相关均衡",
                    explanation: "相关均衡比纳什均衡更广泛：一个可信的第三方根据联合分布给每个玩家推荐策略，且没有玩家有动机偏离推荐。",
                    difficulty: 3
                },
                {
                    id: "cs221-fin-f-5",
                    question: "在 CSP 中，前向检查（____ Checking）在每次赋值后检查剩余变量的域是否仍有效。",
                    answer: "前向",
                    explanation: "前向检查在给变量赋值后，检查其相邻变量的域，删除与当前赋值不一致的值，提前检测失败。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-f-6",
                    question: "在 MCTS 中，回传（____）步骤将模拟结果更新到路径上所有节点的统计量中。",
                    answer: "回传",
                    explanation: "回传（Backup）将叶子节点的模拟结果沿路径向上更新每个节点的访问次数 N 和累积价值 Q。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-f-7",
                    question: "在 SAT 问题中，____（Davis-Putnam-Logemann-Loveland）算法结合回溯搜索和单元传播。",
                    answer: "DPLL",
                    explanation: "DPLL 算法在回溯搜索的基础上加入单元传播（Unit Propagation）和纯文字消除，显著提高了 SAT 求解效率。",
                    difficulty: 3
                },
                {
                    id: "cs221-fin-f-8",
                    question: "在策略梯度方法中，____（REINFORCE）使用蒙特卡洛采样来估计策略梯度。",
                    answer: "REINFORCE",
                    explanation: "REINFORCE 算法通过采样完整轨迹来估计梯度：nabla J(theta) = E[sum_t nabla log pi(a_t|s_t) * G_t]，其中 G_t 是折扣回报。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-f-9",
                    question: "在搜索算法中，____（Consistent）启发式要求 h(n) 满足三角不等式：h(n) <= c(n,n') + h(n')。",
                    answer: "一致",
                    explanation: "一致性（Consistency / Monotonicity）是比可采纳性更强的条件，要求启发式满足三角不等式。一致的启发式自动是可采纳的。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-f-10",
                    question: "在博弈论中，____（Zero-Sum）博弈中一个玩家的收益等于另一个玩家的损失。",
                    answer: "零和",
                    explanation: "零和博弈中所有参与者的收益之和为零（常数），玩家之间是完全对立的竞争关系。围棋、国际象棋等都是零和博弈。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "cs221-fin-code-1",
                    question: "补全以下代码，实现 Q-Learning 的一步更新。",
                    code: "import numpy as np

def q_learning_update(Q, s, a, r, s_next, alpha=0.1, gamma=0.99):
    """Q-Learning 单步更新
    
    Args:
        Q: Q值表 (n_states, n_actions)
        s, a, r, s_next: 当前状态、动作、奖励、下一状态
        alpha: 学习率
        gamma: 折扣因子
    Returns:
        更新后的Q值表
    """
    # TD目标
    td_target = r + gamma * np.max(Q[s_next, :])
    
    # Q值更新
    Q[s, a] = ____
    return Q",
                    answer: "Q[s, a] + alpha * (td_target - Q[s, a])",
                    explanation: "Q-Learning 更新规则：Q(s,a) <- Q(s,a) + alpha * [r + gamma*max_a' Q(s',a') - Q(s,a)]，其中 (r + gamma*max Q(s',a') - Q(s,a)) 是 TD 误差。",
                    difficulty: 2
                },
                {
                    id: "cs221-fin-code-2",
                    question: "补全以下代码，实现 CSP 的弧一致性检查（AC-3）。",
                    code: "from collections import deque

def ac3(arcs, domains):
    """AC-3弧一致性算法
    
    Args:
        arcs: 约束弧列表 [(Xi, Xj), ...]
        domains: 变量域 {var: set(values)}
    Returns:
        bool: 是否保持弧一致性
    """
    queue = deque(arcs)
    
    while queue:
        (Xi, Xj) = queue.popleft()
        if revise(Xi, Xj, domains):
            if len(domains[Xi]) == 0:
                return False
            # 将Xi的所有邻居弧重新加入队列
            for Xk in ____:
                if (Xk, Xi) in arcs:
                    queue.append((Xk, Xi))
    return True

def revise(Xi, Xj, domains):
    revised = False
    for x in list(domains[Xi]):
        if not any(constraint_holds(x, y) for y in domains[Xj]):
            domains[Xi].remove(x)
            revised = True
    return revised",
                    answer: "domains.keys()",
                    explanation: "AC-3 维护一个弧队列。当弧 (Xi, Xj) 被修整后，Xi 的所有邻居都需要重新检查。这里的 neighbors 就是 domains 中的所有其他变量。",
                    difficulty: 3
                }
            ]
        }
    },
    /* ================================================================
     * 14. CS228: Probabilistic Graphical Models (Stanford)
     *    Topics: Bayesian networks, MRF, variational inference,
     *            EM algorithm, sampling methods
     * ================================================================ */
    "CS228: Probabilistic Graphical Models": {
        courseId: "cs228-pgm",
        domain: "ml-theory",
        mid: {
            choice: [
                {
                    id: "cs228-mid-c-1",
                    question: "概率图模型的主要优势是什么？",
                    options: ["避免概率计算", "利用图结构来紧凑地表示高维联合分布中的条件独立性", "只处理离散变量", "不需要数据"],
                    answer: 1,
                    explanation: "概率图模型利用图结构（有向或无向）编码变量间的条件独立性，将指数级大小的联合分布分解为因子的乘积，使推理和学习变得可行。",
                    difficulty: 1
                },
                {
                    id: "cs228-mid-c-2",
                    question: "在贝叶斯网络中，一个节点在给定其父节点后条件独立于其非后代节点，这被称为？",
                    options: ["马尔可夫性质", "局部马尔可夫性", "全局独立性", "边际独立性"],
                    answer: 1,
                    explanation: "局部马尔可夫性质：每个节点在给定其父节点后条件独立于其所有非后代节点。这是贝叶斯网络将联合分布分解为条件概率乘积的理论基础。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-c-3",
                    question: "在马尔可夫随机场（MRF）中，势函数（Potential Function）的作用是什么？",
                    options: ["定义节点的先验概率", "编码团（Clique）中变量间的兼容性/一致性", "定义损失函数", "控制学习率"],
                    answer: 1,
                    explanation: "MRF 的势函数 psi_c(X_c) 定义在团上，衡量该团中变量取值组合的"兼容性"。联合分布是所有团上势函数乘积的归一化版本。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-c-4",
                    question: "变分推断中，平均场（Mean Field）近似假设后验分布可以分解为？",
                    options: ["单一高斯分布", "独立因子的乘积 q(X) = prod_i q_i(Xi)", "联合正态分布", "均匀分布"],
                    answer: 1,
                    explanation: "平均场近似假设真实后验可以分解为各变量独立分布的乘积 q(X) = prod_i q_i(Xi)，通过迭代更新每个因子来最大化 ELBO。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-c-5",
                    question: "在 EM 算法中，E 步和 M 步分别做什么？",
                    options: ["两步都优化参数", "E 步计算隐变量的期望，M 步最大化期望对数似然", "E 步优化参数，M 步计算期望", "两步都计算概率"],
                    answer: 1,
                    explanation: "E 步：固定参数 theta，计算隐变量 Z 的后验期望（即 Q 函数）。M 步：固定 Q，最大化 Q(theta, theta_t) 更新参数。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-c-6",
                    question: "吉布斯采样（Gibbs Sampling）属于哪类采样方法？",
                    options: ["拒绝采样", "马尔可夫链蒙特卡洛（MCMC）", "重要性采样", "逆变换采样"],
                    answer: 1,
                    explanation: "吉布斯采样是 MCMC 方法的一种，通过从每个变量的条件分布中依次采样来构造马尔可夫链，其平稳分布是目标联合分布。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-c-7",
                    question: "在因子图（Factor Graph）中，变量节点和因子节点的区别是什么？",
                    options: ["没有区别", "变量节点表示随机变量，因子节点表示因子函数（如概率或势函数）", "变量节点只用于离散变量", "因子节点表示数据"],
                    answer: 1,
                    explanation: "因子图是二部图：变量节点表示随机变量，因子节点表示因子函数（条件概率、势函数等）。变量节点连接包含它的因子，因子节点连接其变量。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-c-8",
                    question: "在信念传播（Belief Propagation）中，消息传递的含义是什么？",
                    options: ["发送数据包", "节点之间传递关于变量分布的局部信息", "广播权重", "同步参数"],
                    answer: 1,
                    explanation: "BP 中节点间传递的消息是关于变量取值分布的局部信念。在树结构图上，BP 给出精确的边缘概率；在有环图上，消息循环传递给出近似结果。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-c-9",
                    question: "条件随机场（CRF）相比隐马尔可夫模型（HMM）的关键优势是什么？",
                    options: ["更快的训练", "可以使用任意特征函数，不受输出独立性假设限制", "更简单的模型", "不需要标注"],
                    answer: 1,
                    explanation: "CRF 作为判别模型，可以灵活使用丰富的特征（如词本身、前后缀、上下文等），不受 HMM 的观测独立性假设和有限状态空间限制。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-c-10",
                    question: "在图模型的结构学习中，BDeu（贝叶斯 Dirichlet 等效均匀）先验用于什么？",
                    options: ["参数学习", "结构学习中评分函数的超参数", "采样", "聚类"],
                    answer: 1,
                    explanation: "BDeu 先验为结构评分函数（如贝叶斯分数）提供超参数设定，等价地假设在看到任何数据之前所有条件概率分布是均匀的。",
                    difficulty: 3
                }
            ],
            fill: [
                {
                    id: "cs228-mid-f-1",
                    question: "贝叶斯网络将联合分布分解为 P(X1,...,Xn) = ____ P(Xi|Pa(Xi)) 的形式。",
                    answer: "prod_i",
                    explanation: "链式法则加上条件独立性，将联合分布分解为每个节点在给定其父节点下的条件概率之积。",
                    difficulty: 1
                },
                {
                    id: "cs228-mid-f-2",
                    question: "MRF 的联合分布可以表示为 P(X) = (1/Z) ____ psi_c(X_c)，其中 c 遍历所有最大团。",
                    answer: "prod_c",
                    explanation: "Hammersley-Clifford 定理将 MRF 的联合分布表示为所有最大团上势函数的乘积再除以配分函数 Z。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-f-3",
                    question: "在变分推断中，ELBO（Evidence Lower Bound）是 log P(D) 的下____。",
                    answer: "界",
                    explanation: "ELBO = E_q[log p(D,Z)] - E_q[log q(Z)] <= log P(D)，最大化 ELBO 等价于最小化 q 与真实后验的 KL 散度。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-f-4",
                    question: "在因子图上，求和-积（Sum-Product）消息传递算法用于计算变量的____概率。",
                    answer: "边缘",
                    explanation: "Sum-Product 算法通过消息传递在因子图上高效计算每个变量的边缘分布，复杂度与图的规模成线性关系。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-f-5",
                    question: "在贝叶斯网络中，____分离（d-separation）是判定条件独立性的图形化准则。",
                    answer: "d",
                    explanation: "d-separation 通过检查节点间的路径是否被阻塞（链、叉、碰撞器三种结构各有不同规则）来判定条件独立性。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-f-6",
                    question: "在 CRF 中，配分函数 Z(x) 用于归一化使所有标签序列的概率之和为____。",
                    answer: "1",
                    explanation: "CRF 的联合概率 P(y|x) = (1/Z(x)) exp(sum_c theta_c * f_c(x,y))，配分函数 Z(x) = sum_y exp(...) 确保概率归一化。",
                    difficulty: 1
                },
                {
                    id: "cs228-mid-f-7",
                    question: "在 EM 算法中，E 步计算的 Q 函数是 ____期望的对数似然。",
                    answer: "隐变量",
                    explanation: "Q(theta, theta_t) = E_{Z|D,theta_t}[log P(D,Z|theta)]，是给定数据和当前参数下隐变量的条件后验的对数似然期望。",
                    difficulty: 2
                },
                {
                    id: "cs228-mid-f-8",
                    question: "在概率图模型中，团（Clique）是图中一个____子图（任意两个节点都有边相连）。",
                    answer: "完全",
                    explanation: "团是图中最大的完全连通子图，即团中任意两个节点之间都有边。MRF 的势函数定义在这些团上。",
                    difficulty: 1
                },
                {
                    id: "cs228-mid-f-9",
                    question: "MCMC 方法构造的马尔可夫链需要满足____性（Ergodicity）才能保证收敛到目标分布。",
                    answer: "遍历",
                    explanation: "遍历性要求马尔可夫链是非周期的且不可约的，确保从任意初始状态出发都能收敛到唯一的平稳分布（即目标分布）。",
                    difficulty: 3
                },
                {
                    id: "cs228-mid-f-10",
                    question: "在结构学习中，____分数（BIC Score）通过惩罚参数数量来防止过拟合。",
                    answer: "BIC",
                    explanation: "BIC = -2*log(L) + k*log(n)，其中 k 是参数数，n 是样本量。BIC 比 AIC 对复杂模型的惩罚更重，倾向于更简单的结构。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "cs228-mid-code-1",
                    question: "补全以下代码，实现因子图上的求和-积消息传递（单步消息计算）。",
                    code: "import numpy as np

def sum_product_message(factor, variable, messages_in):
    """计算从因子到变量的消息
    
    Args:
        factor: 因子函数值数组
        variable: 目标变量索引
        messages_in: 传入消息字典 {var_idx: message_array}
    Returns:
        message: 输出消息
    """
    # 将所有输入消息与因子相乘
    result = factor.copy()
    for var_idx, msg in messages_in.items():
        # 沿目标变量以外的维度广播乘入消息
        if var_idx != variable:
            result = result * msg
    
    # 对目标变量以外的所有变量求和（边缘化）
    # 假设 variable 是最后一个轴
    for axis in range(len(result.shape) - 1):
        result = np.sum(result, axis=____)
    
    return result",
                    answer: "0",
                    explanation: "求和-积算法中，因子到变量的消息是：先将所有输入消息与因子逐元素相乘，然后对目标变量以外的所有变量求和（边缘化），每次对轴 0 求和（因为后续轴依次前移）。",
                    difficulty: 3
                },
                {
                    id: "cs228-mid-code-2",
                    question: "补全以下代码，实现 EM 算法中高斯混合模型的 M 步。",
                    code: "import numpy as np

def gmm_m_step(X, responsibilities):
    """GMM的M步：更新参数
    
    Args:
        X: 数据 (n, d)
        responsibilities: 责任值 (n, K)
    Returns:
        means, covariances, weights
    """
    n, d = X.shape
    K = responsibilities.shape[1]
    
    # 更新权重（各分量的有效样本比例）
    weights = responsibilities.sum(axis=0) / n
    
    # 更新均值
    means = np.zeros((K, d))
    for k in range(K):
        means[k] = ____
    
    # 更新协方差
    covariances = np.zeros((K, d, d))
    for k in range(K):
        diff = X - means[k]
        weighted = responsibilities[:, k:k+1] * diff
        covariances[k] = weighted.T @ diff / responsibilities[:, k].sum()
    
    return means, covariances, weights",
                    answer: "responsibilities[:, k] @ X / responsibilities[:, k].sum()",
                    explanation: "M 步中，每个高斯分量的均值更新为加权平均：mu_k = sum_n gamma_nk * x_n / N_k，其中 N_k = sum_n gamma_nk 是分量 k 的有效样本数。",
                    difficulty: 2
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "cs228-fin-c-1",
                    question: "在图模型的精确推断中，树消息传递（Tree-Reweighted Belief Propagation）相比标准 BP 的优势是什么？",
                    options: ["速度更快", "提供分区函数的上界和下界，保证收敛", "不需要图结构", "适用于任意分布"],
                    answer: 1,
                    explanation: "Tree-Reweighted BP 基于凸松弛，保证收敛并提供 log Z 的上界和下界，比标准 BP（可能在有环图上不收敛）更稳定。",
                    difficulty: 3
                },
                {
                    id: "cs228-fin-c-2",
                    question: "在变分自编码器（VAE）中，解码器 p(x|z) 对应图模型中的什么？",
                    options: ["先验", "似然/观测模型", "后验", "推理网络"],
                    answer: 1,
                    explanation: "VAE 的生成模型 p(x|z) 是观测模型（似然），解码器将隐变量 z 映射到观测空间。编码器 q(z|x) 是变分后验（近似推断网络）。",
                    difficulty: 2
                },
                {
                    id: "cs228-fin-c-3",
                    question: "在结构 EM 算法中，每次迭代需要做什么？",
                    options: ["只更新参数", "同时搜索最优结构和更新参数", "只搜索结构", "删除节点"],
                    answer: 1,
                    explanation: "结构 EM 在每次迭代中：(1) 用当前结构和参数计算期望统计量；(2) 在期望统计量上搜索更好的网络结构；(3) 用新结构重新估计参数。",
                    difficulty: 3
                },
                {
                    id: "cs228-fin-c-4",
                    question: "在隐变量模型中，Collapsed Gibbs Sampling 通过什么方式提高采样效率？",
                    options: ["并行采样所有变量", "对隐变量积分（collapsing），只采样部分变量", "使用多个链", "增大步长"],
                    answer: 1,
                    explanation: "Collapsed Gibbs Sampling 将部分变量积分掉（如在 LDA 中积分掉主题分布），在更小的条件空间上采样，通常有更快的混合速度。",
                    difficulty: 3
                },
                {
                    id: "cs228-fin-c-5",
                    question: "在图模型中，精确推断在一般有环图上的复杂度是什么？",
                    options: ["多项式时间", "PSPACE-完全", "NP-完全", "线性时间"],
                    answer: 2,
                    explanation: "在一般有环图上精确推断是 NP-完全问题。只有在树或树宽有界的图上，精确推断才可以在多项式时间内完成。",
                    difficulty: 3
                },
                {
                    id: "cs228-fin-c-6",
                    question: "在 CRF 中，特征函数 f_i(x,y) 可以定义在什么范围上？",
                    options: ["只能定义在单个变量上", "可以定义在单个变量或变量对（节点和边）上", "只能定义在所有变量上", "只能定义在输入上"],
                    answer: 1,
                    explanation: "CRF 的特征函数分为节点特征（只依赖单个输出变量和输入）和边特征（依赖相邻输出变量对和输入），灵活编码各种依赖关系。",
                    difficulty: 2
                },
                {
                    id: "cs228-fin-c-7",
                    question: "在主题模型（如 LDA）中，吉布斯采样的条件分布通常使用什么分布族？",
                    options: ["正态分布", "多项分布的 Dirichlet 共轭", "伯努利分布", "泊松分布"],
                    answer: 1,
                    explanation: "LDA 使用多项分布-Dirichlet 共轭结构，Gibbs 采样中每个词的主题指派的条件分布是多项分布，参数由 Dirichlet 先验和已观测数据决定。",
                    difficulty: 2
                },
                {
                    id: "cs228-fin-c-8",
                    question: "在变分推断中，结构变分近似（Structured VI）相比平均场近似的优势是什么？",
                    options: ["计算更快", "保留了变量间的某些依赖关系，近似更精确", "不需要优化", "更简单"],
                    answer: 1,
                    explanation: "结构变分近似保留了图模型中某些团内的依赖结构，只在团之间假设独立，比完全独立的平均场近似更精确，但计算也更复杂。",
                    difficulty: 3
                },
                {
                    id: "cs228-fin-c-9",
                    question: "在高斯信念传播（Gaussian Belief Propagation）中，消息传递可以高效求解什么系统？",
                    options: ["非线性方程组", "线性方程组 Ax=b", "整数规划", "组合优化"],
                    answer: 1,
                    explanation: "高斯 BP 在高斯图模型上等价于求解线性方程组，利用图的稀疏结构，复杂度远低于通用的矩阵求逆 O(n^3)。",
                    difficulty: 3
                },
                {
                    id: "cs228-fin-c-10",
                    question: "在图模型的参数学习中，如果数据是完整的（没有隐变量），最大似然估计可以用什么方法？",
                    options: ["必须用 EM", "直接对数似然最大化，解析解或梯度下降", "MCMC", "变分推断"],
                    answer: 1,
                    explanation: "完整数据下的 MLE 可以直接最大化对数似然。对于指数族模型（如贝叶斯网络），有闭式解。EM 只在存在隐变量时才需要。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "cs228-fin-f-1",
                    question: "在 CRF 中，____（Partition Function）Z(x) 是所有可能标签序列的非归一化得分之和。",
                    answer: "配分函数",
                    explanation: "Z(x) = sum_y exp(Energy(x,y)) 确保 P(y|x) 归一化为概率分布。Z 的精确计算在一般 CRF 上是指数级的，需要近似方法。",
                    difficulty: 2
                },
                {
                    id: "cs228-fin-f-2",
                    question: "在变分推断中，平均场近似的更新规则中，log q_i*(X_i) 正比于 E_{q_{-i}}[____]。",
                    answer: "log p(X, D)",
                    explanation: "平均场更新公式：log q_i*(X_i) = E_{q_{-i}}[log p(X, D)] + const，其中 q_{-i} 表示除 X_i 外的所有其他变量的分布。",
                    difficulty: 3
                },
                {
                    id: "cs228-fin-f-3",
                    question: "在 LDA 主题模型中，文档-主题分布和主题-词分布的先验分别是____分布。",
                    answer: "Dirichlet",
                    explanation: "LDA 的生成过程：theta_d ~ Dir(alpha)（文档-主题分布），beta_k ~ Dir(eta)（主题-词分布），利用 Dirichlet-多项式共轭结构。",
                    difficulty: 2
                },
                {
                    id: "cs228-fin-f-4",
                    question: "在图模型中，____（Junction Tree）算法通过将图转换为树来执行精确推断。",
                    answer: "团树",
                    explanation: "团树算法先将有环图通过 moralization 和 triangulation 转换为团树（junction tree），然后在树上运行消息传递得到精确边缘概率。",
                    difficulty: 3
                },
                {
                    id: "cs228-fin-f-5",
                    question: "在 MCMC 中，____（Burn-in）期是丢弃的初始采样，以确保链已收敛到目标分布。",
                    answer: "预烧",
                    explanation: "马尔可夫链需要一定步数才能收敛到平稳分布（目标分布），预烧期的样本不用于估计，丢弃后才开始收集有效样本。",
                    difficulty: 2
                },
                {
                    id: "cs228-fin-f-6",
                    question: "在 CRF 的训练中，____（L-BFGS）是常用的优化算法来最大化对数似然。",
                    answer: "L-BFGS",
                    explanation: "L-BFGS 是一种拟牛顿优化方法，利用梯度信息近似 Hessian 矩阵，适合 CRF 等参数较多的对数线性模型训练。",
                    difficulty: 2
                },
                {
                    id: "cs228-fin-f-7",
                    question: "在贝叶斯网络的参数学习中，____（Laplace）平滑用于处理未观测到的事件。",
                    answer: "拉普拉斯",
                    explanation: "拉普拉斯平滑（加一平滑）在每个计数上加一个小的正值（通常为 1），确保未观测到的事件不会导致零概率。",
                    difficulty: 1
                },
                {
                    id: "cs228-fin-f-8",
                    question: "在图模型中，moralization 是将有向图转换为无向图时，为共享____的节点添加无向边的操作。",
                    answer: "子节点",
                    explanation: "Moralization 规则：如果两个节点共享一个子节点（即 X->Z<-Y），则在它们之间添加无向边（X-Y），以捕获条件依赖关系。",
                    difficulty: 3
                },
                {
                    id: "cs228-fin-f-9",
                    question: "在隐变量模型的变分下界中，第一项 E_q[log p(D|Z)] 是重构____（Reconstruction Likelihood）。",
                    answer: "似然",
                    explanation: "ELBO 的第一项是重构对数似然的期望，衡量变分后验 q 下隐变量能"解释"观测数据的程度。VAE 中对应解码器的重构损失。",
                    difficulty: 2
                },
                {
                    id: "cs228-fin-f-10",
                    question: "在图模型的结构学习中，PC 算法通过逐步____（Delete）条件独立测试中的边来发现 DAG 结构。",
                    answer: "删除",
                    explanation: "PC 算法从完全图开始，通过条件独立性测试逐步删除边，然后确定边的方向，是经典的基于约束的结构学习方法。",
                    difficulty: 3
                }
            ],
            code: [
                {
                    id: "cs228-fin-code-1",
                    question: "补全以下代码，实现吉布斯采样中的一步条件采样。",
                    code: "import numpy as np

def gibbs_step(X, i, conditional_dist):
    """吉布斯采样单步：对变量i进行条件采样
    
    Args:
        X: 当前状态向量
        i: 要采样的变量索引
        conditional_dist: 条件分布函数 P(X_i | X_{-i})
    Returns:
        X: 更新后的状态
    """
    # 从条件分布 P(X_i | X_1,...,X_{i-1},X_{i+1},...,X_n) 采样
    new_value = conditional_dist(i, ____)
    X[i] = new_value
    return X",
                    answer: "X",
                    explanation: "吉布斯采样的每一步，对变量 X_i 从条件分布 P(X_i | X_{-i}) 采样，其中 X_{-i} 是除 X_i 外的所有变量的当前值。",
                    difficulty: 2
                },
                {
                    id: "cs228-fin-code-2",
                    question: "补全以下代码，实现平均场变分推断的一次迭代更新（一维情况）。",
                    code: "import numpy as np

def mean_field_update(q_means, q_vars, log_joint_grad):
    """平均场变分推断的一次更新
    
    Args:
        q_means: 各变量的变分均值
        q_vars: 各变量的变分方差
        log_joint_grad: log p(X,D) 对各变量的梯度函数
    Returns:
        更新后的 q_means, q_vars
    """
    n_vars = len(q_means)
    new_means = np.zeros(n_vars)
    new_vars = np.zeros(n_vars)
    
    for i in range(n_vars):
        # 计算 E_{q_{-i}}[log p(X,D)] 对 X_i 的导数
        grads = log_joint_grad(i, q_means, q_vars)
        
        # 高斯近似：均值和方差
        # 在当前近似下，log q_i 是 X_i 的二次函数
        # 导数的零点是新均值
        # ____
        new_vars[i] = -1.0 / (grads[1] + 1e-8)  # 二阶导为负
        new_means[i] = q_means[i] - grads[0] * new_vars[i]
    
    return new_means, new_vars",
                    answer: "# q_{-i} 固定，只更新 q_i",
                    explanation: "平均场的迭代更新：固定其他变量的分布 q_{-i}，通过 E_{q_{-i}}[log p(X,D)] 对 X_i 的一阶和二阶导数来更新 q_i 的参数。",
                    difficulty: 3
                }
            ]
        }
    },

    /* ================================================================
     * 15. CS229T: Statistical Learning Theory (Stanford)
     *    Topics: VC dimension, Rademacher complexity,
     *            PAC learning, minimax lower bounds
     * ================================================================ */
    "CS229T: Statistical Learning Theory": {
        courseId: "cs229t-slt",
        domain: "ml-theory",
        mid: {
            choice: [
                {
                    id: "cs229t-mid-c-1",
                    question: "在统计学习理论中，泛化界（Generalization Bound）描述的是什么？",
                    options: ["训练误差的上界", "训练误差与期望误差之间差距的概率上界", "模型的计算复杂度", "数据的噪声水平"],
                    answer: 1,
                    explanation: "泛化界提供了 |R(h) - R_emp(h)| 的概率上界，其中 R(h) 是期望风险，R_emp(h) 是经验风险。它量化了模型在训练数据上的表现与其真实表现之间的差距。",
                    difficulty: 2
                },
                {
                    id: "cs229t-mid-c-2",
                    question: "VC 维为 d 的假设空间，其 VC 泛化界的形式大致是什么？",
                    options: ["O(sqrt(d/n))", "O(d/n)", "O(n/d)", "O(d^2/n)"],
                    answer: 0,
                    explanation: "经典 VC 泛化界为 O(sqrt((d * log(n/d) + log(1/delta)) / n))，核心项是 sqrt(d/n)，表示 VC 维越大、样本越少则泛化越差。",
                    difficulty: 2
                },
                {
                    id: "cs229t-mid-c-3",
                    question: "Rademacher 复杂度与覆盖数（Covering Number）之间有什么关系？",
                    options: ["没有关系", "Rademacher 复杂度可以被覆盖数的对数所界定", "两者总是相等", "覆盖数比 Rademacher 复杂度小"],
                    answer: 1,
                    explanation: "通过 Dudley 积分和 chaining 技术，Rademacher 复杂度可以被 ε-覆盖数的积分所界定：R_n(H) <= C * integral sqrt(log N(epsilon, H, L2(Pn)) / n) d epsilon。",
                    difficulty: 3
                },
                {
                    id: "cs229t-mid-c-4",
                    question: "在统计学习理论中，minimax 损失率（Minimax Rate）的含义是什么？",
                    options: ["任何算法的最优表现", "在最坏情况分布下，任何学习算法都无法超越的误差下界", "最好的算法能达到的误差", "训练误差的最小值"],
                    answer: 1,
                    explanation: "minimax 下界表明，对于给定的假设类和样本量，不存在任何算法能在所有可能的分布上以低于 minimax rate 的误差学习。它刻画了学习问题的固有难度。",
                    difficulty: 3
                },
                {
                    id: "cs229t-mid-c-5",
                    question: "关于 PAC 学习中有限假设空间 H 的样本复杂度，以下哪个是正确的？",
                    options: ["O(log|H| / epsilon^2)", "O(|H| / epsilon)", "O(epsilon / |H|)", "O(|H| * epsilon)"],
                    answer: 0,
                    explanation: "有限假设空间的 PAC 样本复杂度为 O((log|H| + log(1/delta)) / epsilon^2)，即对假设空间大小是对数依赖，对误差是平方反比。",
                    difficulty: 2
                },
                {
                    id: "cs229t-mid-c-6",
                    question: "在对偶空间视角下，最大间隔分类器的泛化界依赖于数据的什么性质？",
                    options: ["数据的维度", "数据的 norm / 半径", "数据的分布", "数据的噪声"],
                    answer: 1,
                    explanation: "在对偶空间中，最大间隔分类器的泛化界为 O(R^2 / (gamma^2 * n))，其中 R 是数据点的范数上界，gamma 是间隔。这使得界与维度无关。",
                    difficulty: 3
                },
                {
                    id: "cs229t-mid-c-7",
                    question: "在学习理论中，"集中不等式"（Concentration Inequality）的作用是什么？",
                    options: ["集中计算资源", "提供随机变量偏离其期望的概率界", "集中训练数据", "集中特征"],
                    answer: 1,
                    explanation: "集中不等式（如 Hoeffding、McDiarmid、McClintock 不等式）提供了随机变量偏离其期望的概率上界，是推导泛化界的核心工具。",
                    difficulty: 2
                },
                {
                    id: "cs229t-mid-c-8",
                    question: "对于参数为 d 的 d 维线性分类器，其 VC 维是多少？",
                    options: ["d", "d+1", "2d", "d^2"],
                    answer: 1,
                    explanation: "d 维线性分类器 {x -> sign(w'x + b) : w in R^d} 的 VC 维是 d+1（包括偏置项），因为可以打散 d+1 个一般位置的点。",
                    difficulty: 2
                },
                {
                    id: "cs229t-mid-c-9",
                    question: "在统计学习理论中，经验过程（Empirical Process）指的是什么？",
                    options: ["数据收集过程", "以经验测度定义的随机过程 sup_{h} (R(h) - R_emp(h))", "模型训练过程", "优化过程"],
                    answer: 1,
                    explanation: "经验过程是定义在假设空间上的随机过程 G_n(h) = sqrt(n)(R(h) - R_emp(h))，其分析（如覆盖数、Rademacher 复杂度）是泛化理论的核心。",
                    difficulty: 3
                },
                {
                    id: "cs229t-mid-c-10",
                    question: "在学习理论中，如果假设空间 H 是参数化的（如神经网络），其 Rademacher 复杂度通常如何缩放？",
                    options: ["与参数数量无关", "与参数数量的某种函数相关（如 O(sqrt(d/n))）", "与参数数量成正比", "与参数数量的平方成正比"],
                    answer: 1,
                    explanation: "参数化模型的 Rademacher 复杂度通常与参数数量 d 的函数相关，如 O(sqrt(d/n))（线性模型）或更复杂的依赖关系（深度网络），体现了参数化复杂度。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "cs229t-mid-f-1",
                    question: "PAC 学习要求算法以至少 1-____ 的概率输出误差不超过 epsilon 的假设。",
                    answer: "delta",
                    explanation: "PAC 框架中的两个关键参数：epsilon（近似精度）和 delta（失败概率），要求 Pr[R(h) <= epsilon] >= 1 - delta。",
                    difficulty: 1
                },
                {
                    id: "cs229t-mid-f-2",
                    question: "VC 维衡量假设空间的____（Capacity / Expressiveness）。",
                    answer: "容量",
                    explanation: "VC 维量化假设空间的表达能力/容量：能打散的最大样本集越大，假设空间越复杂，越容易过拟合但也能拟合更复杂的模式。",
                    difficulty: 1
                },
                {
                    id: "cs229t-mid-f-3",
                    question: "在 Rademacher 复杂度中，随机变量 sigma_i 以等概率取 +1 或 ____ 值。",
                    answer: "-1",
                    explanation: "Rademacher 变量独立均匀地从 {-1, +1} 中取值，Rademacher 复杂度衡量假设空间拟合这种随机噪声的能力。",
                    difficulty: 1
                },
                {
                    id: "cs229t-mid-f-4",
                    question: "McDiarmid 不等式要求函数满足____差界（Bounded Difference Condition）。",
                    answer: "有界",
                    explanation: "McDiarmid 不等式要求：改变任意一个输入 x_i，函数值变化不超过 c_i。即 |f(x_1,...,x_i,...,x_n) - f(x_1,...,x_i',...,x_n)| <= c_i。",
                    difficulty: 3
                },
                {
                    id: "cs229t-mid-f-5",
                    question: "在统计学习理论中，一致收敛要求对 H 中所有假设，经验风险与期望风险的偏差____一致地小。",
                    answer: "上确界",
                    explanation: "一致收敛要求 sup_{h in H} |R_emp(h) - R(h)| 随样本量增大而一致趋于零，是对假设空间整体的收敛性质。",
                    difficulty: 3
                },
                {
                    id: "cs229t-mid-f-6",
                    question: "Hoeffding 不等式给出独立有界随机变量之和偏离其期望的____界。",
                    answer: "概率",
                    explanation: "Hoeffding 不等式：Pr[|sum X_i - E[sum X_i]| >= t] <= 2exp(-2t^2 / sum(b_i - a_i)^2)，是推导有限假设空间泛化界的基本工具。",
                    difficulty: 2
                },
                {
                    id: "cs229t-mid-f-7",
                    question: "在 PAC 学习中，____可学习等价于 VC 维有限。",
                    answer: "PAC",
                    explanation: "经典定理：一个二分类概念类是 PAC 可学习的当且仅当其 VC 维是有限的。这是 PAC 学习理论的基本特征定理。",
                    difficulty: 2
                },
                {
                    id: "cs229t-mid-f-8",
                    question: "在统计学习中，偏差-____权衡描述了模型复杂度对学习性能的双重影响。",
                    answer: "方差",
                    explanation: "偏差衡量模型假设与真实规律的偏离，方差衡量模型对训练数据扰动的敏感性。增加模型复杂度降低偏差但增加方差，需要在两者间平衡。",
                    difficulty: 1
                },
                {
                    id: "cs229t-mid-f-9",
                    question: "在泛化理论中，____数（Packing Number）与覆盖数是对偶概念。",
                    answer: "打包",
                    explanation: "打包数衡量假设空间中最多能放多少个互不重叠的 ε-球，与覆盖数（最少需要多少个 ε-球覆盖假设空间）是对偶的复杂度度量。",
                    difficulty: 3
                },
                {
                    id: "cs229t-mid-f-10",
                    question: "对于线性分类器在单位球面上的数据，Rademacher 复杂度的上界是 O(sqrt(d/____))。",
                    answer: "n",
                    explanation: "单位球面上数据的线性分类器的 Rademacher 复杂度为 O(sqrt(d/n))，其中 d 是维度，n 是样本量。",
                    difficulty: 2
                }
            ],
            code: [
                {
                    id: "cs229t-mid-code-1",
                    question: "补全以下代码，计算有限假设空间的 VC 泛化界。",
                    code: "import numpy as np

def vc_generalization_bound(n, d_vc, delta=0.05):
    """计算VC泛化界
    
    Args:
        n: 样本量
        d_vc: VC维
        delta: 失败概率
    Returns:
        float: 泛化界（期望风险与经验风险之差的上界）
    """
    # 经典VC泛化界
    # O(sqrt((d_vc * (log(2n/d_vc) + 1) + log(4/delta)) / n))
    term1 = d_vc * (np.log(2*n/d_vc) + 1)
    term2 = np.log(4/delta)
    bound = ____
    return bound",
                    answer: "np.sqrt((term1 + term2) / n)",
                    explanation: "标准 VC 泛化界：|R(h) - R_emp(h)| <= sqrt((d_vc * (log(2n/d_vc) + 1) + log(4/delta)) / n)，以概率 1-delta 成立。",
                    difficulty: 2
                },
                {
                    id: "cs229t-mid-code-2",
                    question: "补全以下代码，估计线性分类器在数据集上的经验 Rademacher 复杂度。",
                    code: "import numpy as np

def empirical_rademacher_complexity(X, n_samples=500):
    """估计线性分类器的经验Rademacher复杂度
    
    Args:
        X: 数据矩阵 (n, d)
        n_samples: Rademacher采样次数
    Returns:
        float: Rademacher复杂度估计
    """
    n, d = X.shape
    complexities = []
    
    for _ in range(n_samples):
        # 生成Rademacher随机标签
        sigma = np.random.choice([-1, 1], size=n)
        
        # 最大化 sigma^T X w 在 ||w||<=1 上的值
        # 通过对偶：max = ||X^T sigma||_2
        r_complexity = np.linalg.norm(X.T @ sigma)
        complexities.append(r_complexity)
    
    return np.mean(complexities) / ____",
                    answer: "n",
                    explanation: "经验 Rademacher 复杂度 = (1/n) E_sigma [sup_w sigma^T X w / ||w||]。对于线性类在 ||w||<=1 上，sup 有解析解 ||X^T sigma||_2，除以 n 归一化。",
                    difficulty: 3
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "cs229t-fin-c-1",
                    question: "在统计学习理论中，Rademacher 复杂度的 Dudley 积分界与什么量相关？",
                    options: ["数据的均值", "覆盖数的对数在不同分辨率上的积分", "模型的参数量", "损失函数的值"],
                    answer: 1,
                    explanation: "D Dudley 积分将 Rademacher 复杂度与覆盖数关联：R_n(H) ~ integral_0^inf sqrt(log N(epsilon, H, L2(P_n))) d epsilon，通过 chaining 技术得到。",
                    difficulty: 3
                },
                {
                    id: "cs229t-fin-c-2",
                    question: "在学习理论中，无限假设空间（如所有线性分类器）可以 PAC 学习的原因是什么？",
                    options: ["不需要泛化界", "虽然 H 无限，但 VC 维有限，样本复杂度仍然是有限的", "因为使用了正则化", "因为用了 SGD"],
                    answer: 1,
                    explanation: "PAC 学习的关键是 VC 维而非假设空间大小。无限的线性分类器集合有有限的 VC 维 d+1，因此样本复杂度 O(d/epsilon) 是有限的。",
                    difficulty: 2
                },
                {
                    id: "cs229t-fin-c-3",
                    question: "在 minimax 框架下，对于一维密度估计问题，在 L2 损失下的最优收敛速率是什么？",
                    options: ["O(1/n)", "O(n^{-2/5})（使用核密度估计）", "O(1/sqrt(n))", "O(n^{-1})"],
                    answer: 1,
                    explanation: "一维密度估计在 L2 下的 minimax 最优速率是 O(n^{-2/5})（对光滑密度函数），由核密度估计的最优带宽选择达到。",
                    difficulty: 3
                },
                {
                    id: "cs229t-fin-c-4",
                    question: "在学习理论中，算法稳定性（Algorithmic Stability）与泛化能力之间是什么关系？",
                    options: ["没有关系", "越稳定的算法泛化越好（经验风险与期望风险之差越小）", "越不稳定的算法泛化越好", "稳定性只影响训练速度"],
                    answer: 1,
                    explanation: "稳定性的基本定理：如果算法是 (beta-）均匀稳定的，则泛化误差不超过 beta。稳定性直接蕴含泛化保证。",
                    difficulty: 2
                },
                {
                    id: "cs229t-fin-c-5",
                    question: "在 PAC-Bayes 理论中，先验分布 P 的选择会影响什么？",
                    options: ["不影响泛化界", "先验越集中于好的假设，泛化界越紧", "只影响训练速度", "只影响计算复杂度"],
                    answer: 1,
                    explanation: "PAC-Bayes 界中的 KL(Q||P) 项依赖于先验 P：如果 P 集中在低风险假设附近，KL 散度更小，泛化界更紧。好的先验知识有助于获得更好的界。",
                    difficulty: 3
                },
                {
                    id: "cs229t-fin-c-6",
                    question: "在统计学习理论中，Fat Shattering 维度用于分析什么类型学习问题的泛化界？",
                    options: ["分类问题", "实值函数学习（回归问题）", "聚类问题", "降维问题"],
                    answer: 1,
                    explanation: "Fat Shattering 维度是 VC 维在实值函数空间中的推广，用于量化回归问题中假设空间的复杂度，从而推导泛化界。",
                    difficulty: 3
                },
                {
                    id: "cs229t-fin-c-7",
                    question: "在泛化理论中，隐式正则化（Implicit Regularization）为什么能解释深度学习的泛化？",
                    options: ["它增加了参数量", "优化算法偏好低范数解，有效减小了假设空间复杂度", "它增加了数据量", "它减小了训练误差"],
                    answer: 1,
                    explanation: "SGD 等优化算法倾向于收敛到低范数的解（如梯度下降在线性模型中收敛到最小范数解），这隐式地约束了假设空间的有效复杂度。",
                    difficulty: 3
                },
                {
                    id: "cs229t-fin-c-8",
                    question: "在学习理论中，PAC-Bayes 界与 VC 维界相比通常更紧致的原因是什么？",
                    options: ["PAC-Bayes 不使用概率", "PAC-Bayes 利用了学习后假设分布与先验的信息", "PAC-Bayes 假设空间更小", "PAC-Bayes 只适用于有限假设空间"],
                    answer: 1,
                    explanation: "PAC-Bayes 界利用了先验知识 P 和学习后假设分布 Q 之间的关系，当先验选择合适时，KL(Q||P) 项可以很小，给出远比 VC 维界更紧致的泛化界。",
                    difficulty: 3
                },
                {
                    id: "cs229t-fin-c-9",
                    question: "在统计学习理论中，Bernstein 不等式相比 Hoeffding 不等式的优势是什么？",
                    options: ["更简单", "利用方差信息给出更紧的尾部界", "适用于所有分布", "不需要有界性假设"],
                    answer: 1,
                    explanation: "Bernstein 不等式利用了随机变量的方差信息（Var[X_i]），在方差较小时给出比 Hoeffding 更紧的概率界，特别在推导更精细的泛化界时很有用。",
                    difficulty: 3
                },
                {
                    id: "cs229t-fin-c-10",
                    question: "在在线学习理论中，Hedge 算法的遗憾界是什么量级？",
                    options: ["O(sqrt(T))", "O(sqrt(T * log K))", "O(T)", "O(log T)"],
                    answer: 1,
                    explanation: "Hedge 算法的遗憾界为 O(sqrt(T * log K))，其中 T 是轮数，K 是专家数量。这是在线凸优化中的最优遗憾界。",
                    difficulty: 3
                }
            ],
            fill: [
                {
                    id: "cs229t-fin-f-1",
                    question: "在统计学习理论中，覆盖数 N(epsilon, H, d) 衡量用半径为 epsilon 的____覆盖假设空间 H 所需的最少球数。",
                    answer: "球",
                    explanation: "覆盖数是假设空间复杂度的关键度量，用于推导 Rademacher 复杂度的 Dudley 积分界和泛化界。",
                    difficulty: 2
                },
                {
                    id: "cs229t-fin-f-2",
                    question: "在 PAC-Bayes 框架中，泛化界包含 KL(Q||P) 项，其中 P 是先验，Q 是学习后的____分布。",
                    answer: "后验",
                    explanation: "PAC-Bayes 界利用先验 P 和后验 Q（学习后的假设分布）之间的 KL 散度来约束泛化误差。",
                    difficulty: 2
                },
                {
                    id: "cs229t-fin-f-3",
                    question: "在 minimax 理论中，如果一个算法的收敛速率达到了 minimax 下界，则称该算法是____最优的。",
                    answer: "minimax",
                    explanation: "Minimax 最优算法在最坏情况分布下达到了理论下界，没有算法能在所有分布上做得更好。",
                    difficulty: 2
                },
                {
                    id: "cs229t-fin-f-4",
                    question: "在统计学习中，____（Chaining）是一种通过构造覆盖链来分析经验过程的技术。",
                    answer: "链接",
                    explanation: "Chaining 通过在多个分辨率级别上构造假设空间的覆盖，逐步细化估计，是推导 Rademacher 复杂度上界（如 Dudley 积分）的关键技术。",
                    difficulty: 3
                },
                {
                    id: "cs229t-fin-f-5",
                    question: "在在线学习中，____（Regret）定义为在线算法的累积损失与事后最优固定策略的累积损失之差。",
                    answer: "遗憾",
                    explanation: "遗憾 R_T = sum_{t=1}^T l_t(a_t) - min_{a in A} sum_{t=1}^T l_t(a)，衡量在线决策与事后最佳固定决策之间的差距。",
                    difficulty: 2
                },
                {
                    id: "cs229t-fin-f-6",
                    question: "在学习理论中，____（Convex Loss）假设下 SGD 的收敛分析更加成熟，可以得到更好的泛化界。",
                    answer: "凸",
                    explanation: "凸损失函数有许多良好的分析性质（如无局部最优、梯度信息可靠），使得 SGD 的收敛和泛化分析更容易且结果更紧致。",
                    difficulty: 2
                },
                {
                    id: "cs229t-fin-f-7",
                    question: "在泛化理论中，函数的 ____（Complexity）越高，其 Rademacher 复杂度越大。",
                    answer: "复杂度",
                    explanation: "假设空间的复杂度（如 VC 维、覆盖数）直接决定了 Rademacher 复杂度的大小，进而影响泛化界的紧致程度。",
                    difficulty: 1
                },
                {
                    id: "cs229t-fin-f-8",
                    question: "在统计学习中，PAC-Bayes 界通常以____（Confidence）参数 delta 作为置信度。",
                    answer: "置信度",
                    explanation: "PAC-Bayes 界给出概率 1-delta 的泛化保证，其中 delta 是置信度参数。delta 越小，界越大。",
                    difficulty: 1
                },
                {
                    id: "cs229t-fin-f-9",
                    question: "在在线学习中，____（Regret Matching）算法根据历史遗憾按比例选择行动。",
                    answer: "遗憾匹配",
                    explanation: "Regret Matching 在每轮选择与累积正遗憾成比例的概率选择行动，是求解零和博弈中纳什均衡的常用方法。",
                    difficulty: 3
                },
                {
                    id: "cs229t-fin-f-10",
                    question: "在学习理论中，有限样本下的期望风险可以分解为偏差、方差和____误差三部分。",
                    answer: "不可约",
                    explanation: "期望风险 = 偏差^2 + 方差 + 不可约噪声（irreducible error）。不可约误差是数据本身的噪声，任何模型都无法消除。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "cs229t-fin-code-1",
                    question: "补全以下代码，计算有限假设空间的 PAC 泛化界。",
                    code: "import numpy as np

def pac_bound_empirical(n, m, delta=0.05):
    """有限假设空间的PAC泛化界
    
    Args:
        n: 假设空间大小 |H|
        m: 样本量
        delta: 失败概率
    Returns:
        float: 泛化界 epsilon
    """
    # 对于有限假设空间，以概率 >= 1-delta:
    # |R(h) - R_emp(h)| <= sqrt(log(2|H|/delta) / (2m))
    epsilon = ____
    return epsilon",
                    answer: "np.sqrt(np.log(2*n/delta) / (2*m))",
                    explanation: "有限假设空间的均匀收敛界：Pr[sup_h |R(h)-R_emp(h)| > epsilon] <= 2|H|exp(-2m*epsilon^2)。令右侧等于 delta 解出 epsilon。",
                    difficulty: 2
                },
                {
                    id: "cs229t-fin-code-2",
                    question: "补全以下代码，实现 Hoeffding 不等式的计算。",
                    code: "import numpy as np

def hoeffding_bound(n, epsilon, a=0, b=1):
    """计算Hoeffding不等式的右尾概率界
    
    Args:
        n: 样本量
        epsilon: 偏差大小
        a, b: 随机变量的上下界 [a, b]
    Returns:
        float: 概率上界
    """
    # Pr[|X_bar - mu| >= epsilon] <= 2 * exp(-2 * n * epsilon^2 / (b-a)^2)
    bound = ____
    return bound",
                    answer: "2 * np.exp(-2 * n * epsilon**2 / (b - a)**2)",
                    explanation: "Hoeffding 不等式给出了独立有界随机变量样本均值偏离总体均值的概率上界：Pr >= 2*exp(-2n*epsilon^2 / (b-a)^2)，与分布的具体形式无关。",
                    difficulty: 2
                }
            ]
        }
    },

    /* ================================================================
     * 16. CS246: Mining Massive Datasets (Stanford)
     *    Topics: MapReduce, SVD, LSH, recommendation systems,
     *            PageRank, stream processing
     * ================================================================ */
    "CS246: Mining Massive Datasets": {
        courseId: "cs246-mmds",
        domain: "data-science",
        mid: {
            choice: [
                {
                    id: "cs246-mid-c-1",
                    question: "MapReduce 编程模型中，Map 和 Reduce 阶段分别做什么？",
                    options: ["Map 存储数据，Reduce 查询数据", "Map 将输入键值对转换为中间键值对，Reduce 合并相同键的值", "Map 排序，Reduce 搜索", "Map 和 Reduce 做相同的事"],
                    answer: 1,
                    explanation: "Map 阶段将输入 (k1, v1) 映射为一组中间键值对 list(k2, v2)；Reduce 阶段将相同 k2 的所有 v2 合并为最终结果 list(v3)。",
                    difficulty: 1
                },
                {
                    id: "cs246-mid-c-2",
                    question: "在推荐系统中，协同过滤（Collaborative Filtering）的基本思想是什么？",
                    options: ["基于物品属性推荐", "基于用户-物品交互矩阵中相似用户/物品的模式进行推荐", "基于内容推荐", "随机推荐"],
                    answer: 1,
                    explanation: "协同过滤利用用户历史交互数据（评分矩阵），通过发现相似用户的偏好或相似物品的被评模式来预测用户对未见物品的偏好。",
                    difficulty: 1
                },
                {
                    id: "cs246-mid-c-3",
                    question: "在推荐系统的矩阵分解中，SVD 的作用是什么？",
                    options: ["排序", "将用户-物品评分矩阵分解为低秩近似，捕捉潜在特征", "分类", "聚类"],
                    answer: 1,
                    explanation: "SVD 将稀疏的用户-物品评分矩阵分解为 U * Sigma * V^T 的低秩近似，其中隐含了用户和物品在潜在特征空间中的表示。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-c-4",
                    question: "局部敏感哈希（LSH）的主要目的是什么？",
                    options: ["压缩数据", "在高维空间中高效近似最近邻搜索", "加密数据", "排序数据"],
                    answer: 1,
                    explanation: "LSH 通过设计特殊的哈希函数使得相似的点以高概率落入同一个桶中，从而在亚线性时间内找到近似最近邻，避免了穷举搜索的高维诅咒。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-c-5",
                    question: "在 PageRank 算法中，阻尼因子（Damping Factor）d 的作用是什么？",
                    options: ["控制迭代次数", "模拟用户以概率 d 沿链接浏览，以概率 1-d 随机跳转到任意页面", "控制学习率", "控制收敛速度"],
                    answer: 1,
                    explanation: "阻尼因子 d（通常 0.85）模拟用户的浏览行为：以概率 d 跟随当前页面的链接，以概率 1-d 随机跳转到网络中任意页面，确保 PageRank 有唯一解。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-c-6",
                    question: "在数据流处理中，Count-Min Sketch 的主要功能是什么？",
                    options: ["精确计数", "近似估计频率，保证高估但不低估", "排序", "去重"],
                    answer: 1,
                    explanation: "Count-Min Sketch 用多个哈希函数和计数器矩阵近似频率估计，只可能高估不会低估（对于正权重），空间效率远优于精确计数。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-c-7",
                    question: "在 A/B 测试中，选择样本量时需要考虑的最重要因素是什么？",
                    options: ["团队大小", "统计功效（Power），即检测到真实效应的概率", "实验持续时间", "用户活跃度"],
                    answer: 1,
                    explanation: "统计功效 = 1 - beta，即当存在真实效应时实验能检测到它的概率。通常要求功效 >= 0.8，样本量需要足够大才能满足此要求。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-c-8",
                    question: "在并行计算中，数据倾斜（Data Skew）问题指的是什么？",
                    options: ["数据格式错误", "某些 reducer 接收到的数据远多于其他 reducer，导致负载不均", "数据传输延迟", "内存不足"],
                    answer: 1,
                    explanation: "数据倾斜发生在某些键的出现频率远高于其他键时，导致对应的 reducer 处理时间远超其他 reducer，成为性能瓶颈。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-c-9",
                    question: "在大规模图计算中，Pregel 模型的核心抽象是什么？",
                    options: ["SQL 查询", "以顶点为中心的 BSP（批量同步并行）计算模型", "MapReduce", "流式处理"],
                    answer: 1,
                    explanation: "Pregel 以顶点为中心：每个顶点维护状态，在每轮 superstep 中接收消息、更新状态并发送消息。所有顶点在 superstep 边界同步。",
                    difficulty: 3
                },
                {
                    id: "cs246-mid-c-10",
                    question: "在 Spark 中，RDD（Resilient Distributed Dataset）的两个核心特性是什么？",
                    options: ["只能读不能写", "分区存储和转换/行动操作的惰性求值", "只能在单机上运行", "不支持迭代计算"],
                    answer: 1,
                    explanation: "RDD 的核心特性：(1) 分区分布在集群节点上，支持并行操作；(2) 惰性求值，转换操作记录计算图，行动操作时才真正执行，支持容错。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "cs246-mid-f-1",
                    question: "MapReduce 的 Shuffle 阶段负责将 Map 输出的中间数据按键进行____和传输。",
                    answer: "分组",
                    explanation: "Shuffle 是 MapReduce 最关键的阶段，将 Map 端的中间结果按键分组、排序后传输到对应 Reduce 端的 reducer 上。",
                    difficulty: 1
                },
                {
                    id: "cs246-mid-f-2",
                    question: "在 LSH 中，两个向量的余弦相似度可以用____（Random Hyperplane）哈希来近似。",
                    answer: "随机超平面",
                    explanation: "SimHash/Random Hyperplane LSH：用随机向量 r，h(v) = sign(r'v)。两个向量相似度越高，哈希值相同的概率越大，Pr[h(u)=h(v)] = 1 - theta/pi。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-f-3",
                    question: "在推荐系统中，____（RMSE）是评估预测评分准确性的常用指标。",
                    answer: "均方根误差",
                    explanation: "RMSE = sqrt(mean((r_ij - r^_ij)^2))，惩罚大误差更重，是 Netflix Prize 等推荐系统竞赛的主要评估指标。",
                    difficulty: 1
                },
                {
                    id: "cs246-mid-f-4",
                    question: "在 PageRank 中，整个计算可以表示为矩阵-向量乘法的迭代：r(t+1) = M * r(t)，其中 M 是____矩阵。",
                    answer: "转移",
                    explanation: "PageRank 将网络建模为马尔可夫链，转移矩阵 M 的每列是出链的均匀分布（加阻尼因子调整），迭代直到收敛。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-f-5",
                    question: "在数据流处理中，Bloom Filter 用于____（Membership Query）：判断元素是否在集合中。",
                    answer: "成员查询",
                    explanation: "Bloom Filter 用多个哈希函数和位数组实现空间高效的集合成员查询，支持无假阴性但可能有假阳性的近似查询。",
                    difficulty: 1
                },
                {
                    id: "cs246-mid-f-6",
                    question: "在矩阵分解推荐中，正则化的损失函数包含重建误差和____正则化项两部分。",
                    answer: "L2 / 平方",
                    explanation: "正则化矩阵分解最小化：sum_{(i,j) in observed} (r_ij - u_i'v_j)^2 + lambda(||U||^2 + ||V||^2)，正则化防止过拟合。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-f-7",
                    question: "在 A/B 测试中，____（p-value）是在零假设为真时观察到当前或更极端结果的概率。",
                    answer: "p 值",
                    explanation: "p 值衡量观测数据与零假设的不一致程度。p 值小于显著性水平 alpha（如 0.05）时，拒绝零假设，认为效应是显著的。",
                    difficulty: 1
                },
                {
                    id: "cs246-mid-f-8",
                    question: "在 Spark 中，____（DataFrame）是建立在 RDD 之上的结构化数据抽象，支持 SQL 风格操作。",
                    answer: "DataFrame",
                    explanation: "DataFrame 是 Spark SQL 的核心抽象，提供类似于 pandas DataFrame 的 API，底层基于 RDD 但使用 Catalyst 优化器进行查询优化。",
                    difficulty: 1
                },
                {
                    id: "cs246-mid-f-9",
                    question: "在 PageRank 中，不收敛的页面（如死胡同页面）通过____（Random Jump）机制处理。",
                    answer: "随机跳转",
                    explanation: "死胡同（没有出链的页面）会导致 PageRank 算法不收敛。解决方案是在每步添加阻尼因子引起的随机跳转，确保转移矩阵是随机的。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-f-10",
                    question: "在并行算法设计中，____（Speedup）定义为串行时间与并行时间之比。",
                    answer: "加速比",
                    explanation: "加速比 S(p) = T串行 / T并行(p)，其中 p 是处理器数量。线性加速比 S(p) = p 是理想情况，实际中通常有通信开销。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "cs246-mid-code-1",
                    question: "补全以下伪代码，实现 PageRank 的一次迭代更新。",
                    code: "import numpy as np

def pagerank_step(A, r, d=0.85):
    """PageRank单步迭代
    
    Args:
        A: 邻接矩阵 (n, n), A[i][j]=1 表示 j 链接到 i
        r: 当前PageRank向量 (n,)
        d: 阻尼因子
    Returns:
        r_new: 更新后的PageRank
    """
    n = len(r)
    # 计算转移矩阵（列归一化）
    col_sums = A.sum(axis=0)
    col_sums[col_sums == 0] = 1  # 处理死胡同
    M = A / col_sums
    
    # PageRank更新：r = d * M * r + (1-d) * (1/n) * ones
    r_new = d * (M @ r) + ____
    return r_new",
                    answer: "(1 - d) * np.ones(n) / n",
                    explanation: "PageRank 更新公式：r = d * M * r + (1-d) * (1/n) * 1。第一项是沿链接浏览，第二项是随机跳转到任意页面。",
                    difficulty: 2
                },
                {
                    id: "cs246-mid-code-2",
                    question: "补全以下伪代码，实现 ALS（交替最小二乘法）的一次迭代。",
                    code: "import numpy as np

def als_step(R, U, V, lam=0.1):
    """ALS的一次交替更新
    
    Args:
        R: 评分矩阵 (m, n)
        U: 用户因子矩阵 (m, k)
        V: 物品因子矩阵 (n, k)
        lam: L2正则化系数
    Returns:
        U_new, V_new
    """
    m, n = R.shape
    k = U.shape[1]
    
    # 固定V更新U：对每个用户 i，求解最小二乘
    # min_u_i sum_j (r_ij - u_i'v_j)^2 + lam*||u_i||^2
    U_new = np.zeros_like(U)
    VtV = V.T @ V + lam * np.eye(k)
    for i in range(m):
        # 只在已评分物品上计算
        mask = R[i, :] != 0
        V_masked = V[mask, :]
        r_masked = R[i, mask]
        U_new[i] = ____
    
    # 固定U更新V（对称操作类似）
    V_new = np.zeros_like(V)
    UtU = U_new.T @ U_new + lam * np.eye(k)
    for j in range(n):
        mask = R[:, j] != 0
        U_masked = U_new[mask, :]
        r_masked = R[mask, j]
        V_new[j] = np.linalg.solve(UtU, U_masked.T @ r_masked)
    
    return U_new, V_new",
                    answer: "np.linalg.solve(VtV, V_masked.T @ r_masked)",
                    explanation: "ALS 的每步：固定一个因子矩阵，对另一个的每一行求解带 L2 正则化的最小二乘问题。闭式解为 (V'V + lambda*I)^{-1} * V' * r。",
                    difficulty: 3
                }
            ]
        },
        final: {
            choice: [
                {
                    id: "cs246-fin-c-1",
                    question: "在 MinHash 算法中，如何估计两个集合的 Jaccard 相似度？",
                    options: ["计算集合大小之比", "两个集合 MinHash 值相等的概率等于 Jaccard 相似度", "计算交集大小", "计算并集大小"],
                    answer: 1,
                    explanation: "MinHash 的核心定理：对于随机排列 pi，Pr[min(pi(A)) = min(pi(B))] = |A ∩ B| / |A ∪ B| = J(A,B)。因此可以用 MinHash 值相同的频率来估计 Jaccard 相似度。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-c-2",
                    question: "在 SVD 用于推荐系统时，截断 SVD（Truncated SVD）保留前 k 个奇异值的目的是什么？",
                    options: ["增加噪声", "在降维的同时保留最重要的潜在特征", "减少训练时间", "增加参数"],
                    answer: 1,
                    explanation: "截断 SVD 只保留最大的 k 个奇异值及其对应的奇异向量，去除了噪声和次要模式，得到 k 秩最优近似矩阵。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-c-3",
                    question: "在数据流算法中，Reservoir Sampling 解决的是什么问题？",
                    options: ["排序问题", "从无限数据流中均匀随机采样 k 个元素", "去重问题", "频率统计问题"],
                    answer: 1,
                    explanation: "Reservoir Sampling 以恒定内存 O(k) 从大小未知或无限的数据流中均匀随机地维护 k 个样本，每个元素被选入的概率相等。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-c-4",
                    question: "在推荐系统中，冷启动（Cold Start）问题指的是什么？",
                    options: ["服务器启动慢", "新用户或新物品缺少交互数据导致无法有效推荐", "模型训练太慢", "评分数据过多"],
                    answer: 1,
                    explanation: "冷启动分两种：(1) 新用户冷启动——没有历史行为，无法建模偏好；(2) 新物品冷启动——没有被评价过，无法估计其特征。需要通过内容信息或混合方法解决。",
                    difficulty: 1
                },
                {
                    id: "cs246-fin-c-5",
                    question: "在 Spark 中，Shuffle 操作（如 groupByKey）的性能瓶颈主要来自什么？",
                    options: ["CPU 计算", "数据在节点间的网络传输和磁盘 I/O", "内存不足", "GPU 限制"],
                    answer: 1,
                    explanation: "Shuffle 需要将数据按键重新分区，涉及跨节点的网络传输和可能的磁盘溢写，是 Spark 作业中最昂贵的操作。减少 Shuffle 是性能优化的关键。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-c-6",
                    question: "在 A/B 测试中，多重比较问题（Multiple Comparisons Problem）需要如何处理？",
                    options: ["不需要处理", "使用 Bonferroni 校正或 FDR 控制来调整显著性水平", "增大样本量", "减小 alpha"],
                    answer: 1,
                    explanation: "同时检验多个假设会增加假阳性率。Bonferroni 校正将 alpha 除以检验次数，FDR（False Discovery Rate）控制提供更宽松但仍有控制的多重比较修正。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-c-7",
                    question: "在大规模图算法中，GraphX 的核心创新是什么？",
                    options: ["全新的图存储格式", "将图计算和数据并行统一在 Spark 的 RDD 抽象上", "不使用分布式计算", "只支持有向图"],
                    answer: 1,
                    explanation: "GraphX 将图表示为两个 RDD（顶点和边），结合了 Spark 的数据并行和图并行（Pregel）编程模型，支持图操作和 ETL 在同一框架中完成。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-c-8",
                    question: "在推荐系统中，基于内容的过滤（Content-Based Filtering）相比协同过滤的主要优势是什么？",
                    options: ["不需要用户数据", "能为新物品推荐（无冷启动问题），推荐可解释", "不需要物品信息", "更准确"],
                    answer: 1,
                    explanation: "基于内容的过滤利用物品的特征信息（如类别、标签、文本），即使没有用户交互数据也能推荐，且推荐结果容易解释（因为基于物品属性）。",
                    difficulty: 1
                },
                {
                    id: "cs246-fin-c-9",
                    question: "在分布式系统中，CAP 定理指出系统最多同时满足哪三个性质中的两个？",
                    options: ["速度、安全、可用", "一致性、可用性、分区容错性", "正确性、性能、可扩展性", "读取、写入、删除"],
                    answer: 1,
                    explanation: "CAP 定理：在分布式系统中，一致性（Consistency）、可用性（Availability）和分区容错性（Partition Tolerance）三者最多只能同时满足两个。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-c-10",
                    question: "在频繁项集挖掘中，Apriori 算法利用什么性质来剪枝候选集？",
                    options: ["排序性质", "向下封闭性（Apriori Property）：频繁项集的所有子集也必须频繁", "去重性质", "最大值性质"],
                    answer: 1,
                    explanation: "Apriori 性质（向下封闭性）：如果一个项集是频繁的，它的所有子集也必须是频繁的。反之，如果子集不频繁，则超集也不频繁，可以安全剪枝。",
                    difficulty: 2
                }
            ],
            fill: [
                {
                    id: "cs246-fin-f-1",
                    question: "在 LSH 中，_____族（Hash Family）是一组哈希函数，满足距离近的点对碰撞概率高于距离远的点对。",
                    answer: "LSH",
                    explanation: "LSH 函数族满足：若 d(p,q) <= r1，Pr[h(p)=h(q)] >= p1；若 d(p,q) >= r2，Pr[h(p)=h(q)] <= p2。这是 LSH 理论正确性的核心保证。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-f-2",
                    question: "在推荐系统中，SVD++ 扩展了 SVD，额外考虑了用户的____（Implicit Feedback）信息。",
                    answer: "隐式反馈",
                    explanation: "SVD++ 在用户因子中加入了隐式反馈项（如用户评过分的物品数量和物品索引集合），利用了用户行为的隐含信息。",
                    difficulty: 3
                },
                {
                    id: "cs246-fin-f-3",
                    question: "在数据流处理中，Flajolet-Martin 算法用于近似估计数据流中____（Distinct）元素的数量。",
                    answer: "不同",
                    explanation: "FM 算法基于哈希和位图，通过观察哈希值末尾零位的最大位置来估计不同元素数量，空间复杂度 O(log m)。",
                    difficulty: 3
                },
                {
                    id: "cs246-fin-f-4",
                    question: "在 PageRank 的幂迭代法中，转移矩阵是____矩阵（列和为 1）。",
                    answer: "随机",
                    explanation: "PageRank 的转移矩阵 M 是列随机矩阵（每列之和为 1），加阻尼因子后变为严格正的随机矩阵，保证了 Perron-Frobenius 定理的条件。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-f-5",
                    question: "在 Spark 中，____（Partition）是数据并行的基本单位，决定了数据在集群中的分布方式。",
                    answer: "分区",
                    explanation: "分区是 RDD 的基本组成单位，每个分区存储在集群的一个节点上，分区数量和策略直接影响并行度和 Shuffle 开销。",
                    difficulty: 1
                },
                {
                    id: "cs246-fin-f-6",
                    question: "在 A/B 测试中，____（Poisson Sampling）可以作为简单随机采样的高效近似替代。",
                    answer: "泊松",
                    explanation: "泊松采样为每个用户独立以概率 p 分配到实验组，当用户量很大时近似等价于简单随机分配，但实现更简单（无需知道总用户数）。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-f-7",
                    question: "在矩阵分解推荐中，交替最小二乘（ALS）通过交替固定一个因子矩阵来求解另一个，每步都是____问题。",
                    answer: "最小二乘",
                    explanation: "ALS 每步固定 U 求 V（或反之），将矩阵分解转化为多个独立的带正则化的线性最小二乘问题，每个可以高效求解。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-f-8",
                    question: "在推荐系统中，冷启动问题的一种常见解决方案是利用____信息（如物品类别、标签）进行推荐。",
                    answer: "内容",
                    explanation: "当交互数据不足时，利用物品的内容特征（类别、描述、标签）和用户画像（年龄、兴趣）进行基于内容的推荐，缓解冷启动问题。",
                    difficulty: 1
                },
                {
                    id: "cs246-fin-f-9",
                    question: "在 LSH 中，通过组合多个哈希表（多个哈希函数）可以提高____（Recall），减少漏报。",
                    answer: "召回率",
                    explanation: "多个哈希表中只要有一个表的桶匹配就作为候选对，这提高了真正相似对被选为候选的概率（召回率），同时保持精确率。",
                    difficulty: 2
                },
                {
                    id: "cs246-fin-f-10",
                    question: "在流式算法中，____（Sketch）是一种空间高效的数据结构，支持对数据流进行近似查询。",
                    answer: "摘要",
                    explanation: "数据流摘要（如 Count-Min Sketch、Bloom Filter、HyperLogLog）以远小于数据流大小的内存提供近似查询结果，是大数据处理的关键技术。",
                    difficulty: 1
                }
            ],
            code: [
                {
                    id: "cs246-fin-code-1",
                    question: "补全以下伪代码，实现 MinHash 签名的计算。",
                    code: "import numpy as np

def minhash_signature(shingle_sets, num_hashes=100):
    """计算MinHash签名矩阵
    
    Args:
        shingle_sets: 列表，每个元素是文档的shingle集合
        num_hashes: 哈希函数数量
    Returns:
        signature: 签名矩阵 (num_hashes, num_docs)
    """
    num_docs = len(shingle_sets)
    # 收集所有shingle
    all_shingles = set()
    for s in shingle_sets:
        all_shingles.update(s)
    all_shingles = list(all_shingles)
    num_shingles = len(all_shingles)
    
    # 初始化签名为无穷大
    signature = np.full((num_hashes, num_docs), np.inf)
    
    # 生成哈希函数 (hash_i(x) = (a*x + b) % p) % num_shingles
    np.random.seed(42)
    primes = [num_shingles + i for i in range(num_shingles) if all(num_shingles + i % j != 0 for j in range(2, int(np.sqrt(num_shingles+i))+1))]
    p = primes[0] if primes else num_shingles + 1
    a = np.random.randint(1, p, num_hashes)
    b = np.random.randint(0, p, num_hashes)
    
    for shingle_idx, shingle in enumerate(all_shingles):
        for doc_idx, doc_set in enumerate(shingle_sets):
            if shingle in doc_set:
                for h in range(num_hashes):
                    hash_val = (a[h] * shingle_idx + b[h]) % p
                    if hash_val < signature[h, doc_idx]:
                        signature[h, doc_idx] = ____
    
    return signature",
                    answer: "hash_val",
                    explanation: "MinHash 签名矩阵中，每个哈希函数对文档中所有 shingle 计算哈希值，取最小值作为签名。两个文档签名相同位置的匹配比例是 Jaccard 相似度的无偏估计。",
                    difficulty: 3
                },
                {
                    id: "cs246-fin-code-2",
                    question: "补全以下伪代码，实现 Count-Min Sketch 的查询功能。",
                    code: "import numpy as np

class CountMinSketch:
    def __init__(self, width, depth):
        """初始化Count-Min Sketch
        Args:
            width: 每行的桶数
            depth: 哈希函数数量
        """
        self.width = width
        self.depth = depth
        self.table = np.zeros((depth, width))
        self.hashes = []
        for i in range(depth):
            self.hashes.append(lambda x, seed=i: hash((x, seed)) % width)
    
    def update(self, item, count=1):
        """更新计数"""
        for i in range(self.depth):
            self.table[i, self.hashes[i](item)] += count
    
    def query(self, item):
        """查询频率估计"""
        estimates = []
        for i in range(self.depth):
            estimates.append(self.table[i, self.hashes[i](item)])
        # 返回所有行中的最小值作为估计
        return ____",
                    answer: "min(estimates)",
                    explanation: "Count-Min Sketch 的查询返回所有哈希行中的最小计数作为频率估计。由于哈希冲突只能导致高估，取最小值可以最小化高估的幅度。",
                    difficulty: 2
                }
            ]
        }
    }
};
