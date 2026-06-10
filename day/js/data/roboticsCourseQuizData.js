/**
 * Robotics Course Quiz Data
 * Generates quizzes for 8 robotics courses
 */

var ROBOTICS_COURSE_QUIZZES = {
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
};

// Make globally accessible
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ROBOTICS_COURSE_QUIZZES };
}
