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
  }
};

// Make globally accessible
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ROBOTICS_COURSE_QUIZZES };
}
