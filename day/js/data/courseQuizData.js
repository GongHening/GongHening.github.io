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
    }

};
