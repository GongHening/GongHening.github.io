/**
 * Code Exercises Data
 * 18 Python exercises covering ML and DL domains
 * All code uses NumPy, executed in-browser via Pyodide
 */

const CODE_EXERCISES = [
    // ========== ML Domain ==========
    {
        id: 'numpy-basics',
        title: 'NumPy 基础操作',
        domain: 'ml',
        difficulty: 1,
        estimatedMinutes: 10,
        description: '练习 NumPy 数组的基本操作，包括创建、索引和运算。',
        setup: `import numpy as np`,
        template: `# 任务：创建一个 3x3 的单位矩阵
# 提示：使用 np.eye()

matrix = None  # TODO: 在此实现

print("单位矩阵:")
print(matrix)
print("形状:", matrix.shape)`,
        tests: `# 自动测试
assert matrix is not None, "matrix 未定义"
assert matrix.shape == (3, 3), f"形状应为 (3,3)，实际为 {matrix.shape}"
assert np.allclose(matrix, np.eye(3)), "不是单位矩阵"
print("✅ 测试通过！")`,
        hints: ['使用 np.eye(3) 创建 3x3 单位矩阵', '单位矩阵是对角线为 1，其余为 0 的方阵'],
        solution: `matrix = np.eye(3)`
    },
    {
        id: 'array-operations',
        title: '数组运算与广播',
        domain: 'ml',
        difficulty: 1,
        estimatedMinutes: 10,
        description: '练习 NumPy 数组的算术运算、广播机制和聚合函数。',
        setup: `import numpy as np`,
        template: `# 任务：对以下矩阵进行标准化（Z-score）
# 公式: normalized = (data - mean) / std
# 对每一列分别标准化

data = np.array([
    [1.0, 2.0, 3.0],
    [4.0, 5.0, 6.0],
    [7.0, 8.0, 9.0],
    [10.0, 11.0, 12.0]
])

normalized = None  # TODO: 在此实现
# 提示: 使用 axis=0 计算每列的 mean 和 std

print("标准化结果:")
print(normalized)
print("每列均值:", normalized.mean(axis=0))`,
        tests: `assert normalized is not None, "normalized 未定义"
assert normalized.shape == (4, 3), f"形状应为 (4,3)，实际为 {normalized.shape}"
assert np.allclose(normalized.mean(axis=0), 0, atol=1e-10), "每列均值应接近 0"
assert np.allclose(normalized.std(axis=0), 1, atol=1e-10), "每列标准差应接近 1"
print("✅ 标准化测试通过！")`,
        hints: ['计算每列均值: col_mean = data.mean(axis=0)', '计算每列标准差: col_std = data.std(axis=0)', 'NumPy 会自动广播减法和除法'],
        solution: `col_mean = data.mean(axis=0)
col_std = data.std(axis=0)
normalized = (data - col_mean) / col_std`
    },
    {
        id: 'linear-regression',
        title: '线性回归从零实现',
        domain: 'ml',
        difficulty: 2,
        estimatedMinutes: 15,
        description: '用 NumPy 实现简单的线性回归，包括正规方程法。',
        setup: `import numpy as np`,
        template: `def linear_regression(X, y):
    """
    使用正规方程实现线性回归
    theta = (X^T X)^{-1} X^T y
    X: 特征矩阵 (n_samples, n_features) — 已含偏置列
    y: 目标向量 (n_samples,)
    返回: 权重向量 theta
    """
    # TODO: 在此实现正规方程
    theta = None
    return theta

# 测试数据: y = 2*x + 1
X = np.array([[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]])
y = np.array([3, 5, 7, 9, 11])

theta = linear_regression(X, y)
print(f"权重: {theta}")
print(f"预测 x=6: {theta[0] + theta[1] * 6}")`,
        tests: `assert theta is not None, "theta 未定义"
assert len(theta) == 2, "应有 2 个权重（含偏置）"
assert abs(theta[0] - 1.0) < 0.5, f"偏置应接近 1，实际为 {theta[0]}"
assert abs(theta[1] - 2.0) < 0.5, f"斜率应接近 2，实际为 {theta[1]}"
print("✅ 线性回归测试通过！")`,
        hints: ['正规方程公式: theta = inv(X.T @ X) @ X.T @ y', '也可以用 np.linalg.solve 求解', 'X 已经包含偏置列（全 1 列）'],
        solution: `theta = np.linalg.inv(X.T @ X) @ X.T @ y`
    },
    {
        id: 'gradient-descent',
        title: '实现梯度下降',
        domain: 'ml',
        difficulty: 2,
        estimatedMinutes: 15,
        description: '用 NumPy 实现一个简单的梯度下降算法来最小化均方误差。',
        setup: `import numpy as np`,
        template: `def gradient_descent(X, y, lr=0.01, epochs=100):
    """
    实现梯度下降算法
    X: 特征矩阵 (n_samples, n_features)
    y: 目标向量 (n_samples,)
    lr: 学习率
    epochs: 迭代次数
    返回: (weights, bias)
    """
    n_samples, n_features = X.shape
    weights = np.zeros(n_features)
    bias = 0

    # TODO: 在此实现梯度下降
    # 提示：
    # 1. 计算预测值: y_pred = X @ weights + bias
    # 2. 计算梯度: dw = (1/n) * X.T @ (y_pred - y), db = (1/n) * sum(y_pred - y)
    # 3. 更新参数: weights -= lr * dw, bias -= lr * db

    return weights, bias

# 测试
X = np.array([[1, 2], [3, 4], [5, 6]])
y = np.array([5, 11, 17])
w, b = gradient_descent(X, y, lr=0.01, epochs=1000)
print(f"权重: {w}")
print(f"偏置: {b:.4f}")`,
        tests: `assert len(w) == 2, "权重维度错误"
assert abs(b - 1.0) < 0.5, f"偏置应接近 1，实际为 {b}"
print("✅ 梯度下降实现正确！")`,
        hints: ['梯度公式: dw = (1/n_samples) * X.T @ (y_pred - y)', '别忘记偏置的梯度: db = (1/n_samples) * sum(y_pred - y)'],
        solution: `for _ in range(epochs):
    y_pred = X @ weights + bias
    dw = (1/n_samples) * X.T @ (y_pred - y)
    db = (1/n_samples) * np.sum(y_pred - y)
    weights -= lr * dw
    bias -= lr * db`
    },
    {
        id: 'logistic-regression',
        title: '逻辑回归实现',
        domain: 'ml',
        difficulty: 2,
        estimatedMinutes: 15,
        description: '实现逻辑回归的前向传播和损失计算。',
        setup: `import numpy as np`,
        template: `def sigmoid(z):
    """Sigmoid 激活函数"""
    # TODO: 实现 sigmoid
    return None

def logistic_regression_loss(X, y, weights, bias):
    """
    计算二元交叉熵损失
    X: (n_samples, n_features)
    y: (n_samples,) — 0 或 1
    weights: (n_features,)
    bias: scalar
    返回: 平均损失值
    """
    # TODO: 实现交叉熵损失
    # 提示: loss = -1/n * sum(y*log(p) + (1-y)*log(1-p))
    return None

# 测试
X = np.array([[1, 2], [3, 4], [5, 6]])
y = np.array([0, 0, 1])
weights = np.array([0.5, -0.3])
bias = 0.1

s = sigmoid(np.array([0, 2, -2]))
loss = logistic_regression_loss(X, y, weights, bias)
print(f"Sigmoid(0)={s[0]:.2f}, Sigmoid(2)={s[1]:.2f}, Sigmoid(-2)={s[2]:.2f}")
print(f"损失: {loss:.4f}")`,
        tests: `assert s is not None, "sigmoid 返回 None"
assert abs(s[0] - 0.5) < 0.01, f"Sigmoid(0) 应为 0.5，实际为 {s[0]}"
assert abs(s[1] - 0.88) < 0.02, f"Sigmoid(2) 应约 0.88"
assert abs(s[2] - 0.12) < 0.02, f"Sigmoid(-2) 应约 0.12"
assert loss is not None, "loss 返回 None"
assert loss > 0, "损失应为正数"
print("✅ 逻辑回归测试通过！")`,
        hints: ['sigmoid 公式: 1 / (1 + np.exp(-z))', '交叉熵: -mean(y * log(p) + (1-y) * log(1-p))', '在 log 中加一个极小值 eps 防止 log(0)'],
        solution: `def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def logistic_regression_loss(X, y, weights, bias):
    z = X @ weights + bias
    p = sigmoid(z)
    eps = 1e-15
    loss = -np.mean(y * np.log(p + eps) + (1 - y) * np.log(1 - p + eps))
    return loss`
    },
    {
        id: 'kmeans-clustering',
        title: 'K-Means 聚类算法',
        domain: 'ml',
        difficulty: 3,
        estimatedMinutes: 20,
        description: '实现 K-Means 聚类算法的核心逻辑。',
        setup: `import numpy as np
np.random.seed(42)`,
        template: `def kmeans(X, k=3, max_iters=50):
    """
    K-Means 聚类
    X: 数据点 (n_samples, n_features)
    k: 簇数量
    返回: (labels, centroids)
    """
    n_samples = X.shape[0]

    # 随机初始化质心
    indices = np.random.choice(n_samples, k, replace=False)
    centroids = X[indices].copy()

    for _ in range(max_iters):
        # TODO: 1. 分配每个点到最近的质心
        # 提示: 计算每个点到每个质心的欧氏距离
        labels = None  # 在此实现

        # TODO: 2. 更新质心为簇内均值
        new_centroids = None  # 在此实现

        # 检查收敛
        if np.allclose(centroids, new_centroids):
            break
        centroids = new_centroids

    return labels, centroids

# 生成测试数据
from numpy.random import multivariate_normal
X1 = multivariate_normal([2, 2], [[0.5, 0], [0, 0.5]], 30)
X2 = multivariate_normal([8, 8], [[0.5, 0], [0, 0.5]], 30)
X3 = multivariate_normal([2, 8], [[0.5, 0], [0, 0.5]], 30)
X = np.vstack([X1, X2, X3])

labels, centroids = kmeans(X, k=3)
print(f"标签分布: {np.bincount(labels)}")
print(f"质心:\\n{centroids}")`,
        tests: `assert labels is not None, "labels 未定义"
assert centroids is not None, "centroids 未定义"
assert len(labels) == 90, f"应有 90 个标签，实际为 {len(labels)}"
assert centroids.shape == (3, 2), f"质心形状应为 (3,2)，实际为 {centroids.shape}"
assert len(np.unique(labels)) == 3, "应有 3 个不同的簇"
print("✅ K-Means 测试通过！")`,
        hints: ['距离计算: np.linalg.norm(X[:, np.newaxis] - centroids, axis=2)', '分配标签: np.argmin(distances, axis=1)', '更新质心: 对每个簇取均值'],
        solution: `        distances = np.linalg.norm(X[:, np.newaxis] - centroids, axis=2)
        labels = np.argmin(distances, axis=1)
        new_centroids = np.array([X[labels == i].mean(axis=0) for i in range(k)])`
    },
    {
        id: 'decision-tree-impurity',
        title: '决策树：计算不纯度',
        domain: 'ml',
        difficulty: 2,
        estimatedMinutes: 15,
        description: '实现决策树中的信息增益和基尼不纯度计算。',
        setup: `import numpy as np`,
        template: `def gini_impurity(y):
    """
    计算基尼不纯度
    y: 标签数组
    返回: 基尼不纯度值 (0 ~ 1)
    """
    # TODO: 在此实现
    # 提示: Gini = 1 - sum(p_i^2)
    return None

def information_gain(y, y_left, y_right):
    """
    计算信息增益
    y: 父节点标签
    y_left: 左子节点标签
    y_right: 右子节点标签
    返回: 信息增益值
    """
    # TODO: 在此实现
    # 提示: IG = Gini(parent) - weighted_avg(Gini(left), Gini(right))
    return None

# 测试
y = np.array([0, 0, 0, 1, 1, 1, 1, 1])
y_left = np.array([0, 0, 0, 1])
y_right = np.array([1, 1, 1, 1])

gini = gini_impurity(y)
ig = information_gain(y, y_left, y_right)
print(f"父节点基尼不纯度: {gini:.4f}")
print(f"信息增益: {ig:.4f}")`,
        tests: `assert gini is not None, "gini 返回 None"
assert ig is not None, "ig 返回 None"
assert abs(gini - 0.46875) < 0.01, f"基尼不纯度应约 0.4688，实际为 {gini}"
assert ig > 0, "信息增益应为正数"
assert ig < gini, "信息增益不应超过父节点不纯度"
print("✅ 不纯度计算测试通过！")`,
        hints: ['基尼不纯度: Gini = 1 - sum((count_i / total)^2)', '可用 np.unique 和 return_counts 获取各类别计数', '信息增益 = 父节点不纯度 - 加权子节点不纯度'],
        solution: `def gini_impurity(y):
    classes, counts = np.unique(y, return_counts=True)
    probs = counts / len(y)
    return 1 - np.sum(probs ** 2)

def information_gain(y, y_left, y_right):
    n = len(y)
    w_left = len(y_left) / n
    w_right = len(y_right) / n
    return gini_impurity(y) - w_left * gini_impurity(y_left) - w_right * gini_impurity(y_right)`
    },
    {
        id: 'data-preprocessing',
        title: 'Pandas 数据预处理',
        domain: 'ml',
        difficulty: 1,
        estimatedMinutes: 10,
        description: '练习使用 NumPy 进行常见的数据预处理操作。',
        setup: `import numpy as np`,
        template: `# 模拟一个带缺失值的数据集
np.random.seed(0)
raw_data = np.random.randn(10, 4).astype(float)
raw_data[2, 1] = np.nan
raw_data[5, 3] = np.nan
raw_data[7, 0] = np.nan

print("原始数据:")
print(raw_data)

# 任务: 完成以下预处理步骤
# 1. 用列均值填充缺失值 (NaN)
# 2. 对每列进行 Min-Max 归一化到 [0, 1]

def fill_nan_with_mean(data):
    """用每列均值填充 NaN"""
    # TODO: 在此实现
    filled = None
    return filled

def min_max_normalize(data):
    """Min-Max 归一化"""
    # TODO: 在此实现
    normalized = None
    return normalized

filled = fill_nan_with_mean(raw_data.copy())
result = min_max_normalize(filled)
print("\\n预处理结果:")
print(np.round(result, 3))`,
        tests: `assert filled is not None, "filled 返回 None"
assert result is not None, "result 返回 None"
assert not np.any(np.isnan(filled)), "填充后不应有 NaN"
assert np.all(result >= -0.01) and np.all(result <= 1.01), "归一化后应在 [0,1] 范围"
assert np.allclose(result.min(axis=0), 0, atol=0.01), "每列最小值应接近 0"
print("✅ 数据预处理测试通过！")`,
        hints: ['填充 NaN: 用 np.nanmean 计算每列均值', '用 np.where(np.isnan(data), col_mean, data) 填充', 'Min-Max: (data - data.min(axis=0)) / (data.max(axis=0) - data.min(axis=0))'],
        solution: `def fill_nan_with_mean(data):
    col_means = np.nanmean(data, axis=0)
    nan_mask = np.isnan(data)
    data[nan_mask] = np.take(col_means, np.where(nan_mask)[1])
    return data

def min_max_normalize(data):
    col_min = data.min(axis=0)
    col_max = data.max(axis=0)
    return (data - col_min) / (col_max - col_min + 1e-10)`
    },
    {
        id: 'regularization',
        title: '正则化 (L1/L2)',
        domain: 'ml',
        difficulty: 2,
        estimatedMinutes: 15,
        description: '实现 L1 (Lasso) 和 L2 (Ridge) 正则化，理解正则化对梯度的影响。',
        setup: `import numpy as np`,
        template: `def compute_gradients(X, y, weights, bias, reg_type='l2', lambda_=0.1):
    """
    计算带正则化的线性回归梯度
    X: (n_samples, n_features)
    y: (n_samples,)
    weights: (n_features,)
    bias: scalar
    reg_type: 'l1' 或 'l2'
    lambda_: 正则化强度
    返回: (dw, db)
    """
    n_samples = X.shape[0]
    y_pred = X @ weights + bias
    error = y_pred - y

    # 基础梯度
    dw = (1 / n_samples) * (X.T @ error)
    db = (1 / n_samples) * np.sum(error)

    # TODO: 添加正则化项到 dw
    # L2 正则化梯度: lambda_ * weights
    # L1 正则化梯度: lambda_ * sign(weights)

    return dw, db

# 测试
X = np.array([[1, 2], [3, 4], [5, 6]])
y = np.array([5, 11, 17])
w = np.array([1.0, 1.0])
b = 0.0

dw_l2, db_l2 = compute_gradients(X, y, w, b, 'l2', 0.1)
dw_l1, db_l1 = compute_gradients(X, y, w, b, 'l1', 0.1)
print(f"L2 梯度: {dw_l2}")
print(f"L1 梯度: {dw_l1}")`,
        tests: `assert dw_l2 is not None, "L2 梯度未计算"
assert dw_l1 is not None, "L1 梯度未计算"
# L2 的梯度应包含 lambda_ * weights 项
# L1 的梯度应包含 lambda_ * sign(weights) 项
base_dw = (1/3) * (X.T @ (X @ w + b - y))
expected_l2 = base_dw + 0.1 * w
expected_l1 = base_dw + 0.1 * np.sign(w)
assert np.allclose(dw_l2, expected_l2, atol=1e-6), f"L2 梯度不正确"
assert np.allclose(dw_l1, expected_l1, atol=1e-6), f"L1 梯度不正确"
print("✅ 正则化梯度测试通过！")`,
        hints: ['L2 正则化在基础梯度上加 lambda_ * weights', 'L1 正则化在基础梯度上加 lambda_ * np.sign(weights)', '注意只对 weights 正则化，不对 bias 正则化'],
        solution: `    if reg_type == 'l2':
        dw += lambda_ * weights
    elif reg_type == 'l1':
        dw += lambda_ * np.sign(weights)`
    },

    // ========== DL Domain ==========
    {
        id: 'activation-functions',
        title: '激活函数实现',
        domain: 'dl',
        difficulty: 1,
        estimatedMinutes: 10,
        description: '实现常见的神经网络激活函数及其导数。',
        setup: `import numpy as np`,
        template: `def relu(x):
    """ReLU 激活函数"""
    # TODO: 实现 ReLU: max(0, x)
    return None

def relu_derivative(x):
    """ReLU 的导数"""
    # TODO: 实现 ReLU 导数: x > 0 时为 1，否则为 0
    return None

def softmax(x):
    """Softmax 激活函数"""
    # TODO: 实现 Softmax
    # 提示: 减去 max 防止溢出
    return None

# 测试
x = np.array([-2, -1, 0, 1, 2])
r = relu(x)
rd = relu_derivative(x)
s = softmax(np.array([1, 2, 3]))
print(f"ReLU({x}): {r}")
print(f"ReLU'({x}): {rd}")
print(f"Softmax([1,2,3]): {np.round(s, 4)}")`,
        tests: `assert r is not None, "relu 返回 None"
assert rd is not None, "relu_derivative 返回 None"
assert s is not None, "softmax 返回 None"
assert np.allclose(r, [0, 0, 0, 1, 2]), f"ReLU 结果错误: {r}"
assert np.allclose(rd, [0, 0, 0, 1, 1]), f"ReLU 导数错误: {rd}"
assert abs(np.sum(s) - 1.0) < 0.01, f"Softmax 总和应为 1，实际为 {np.sum(s)}"
print("✅ 激活函数测试通过！")`,
        hints: ['ReLU: np.maximum(0, x)', 'ReLU 导数: (x > 0).astype(float)', 'Softmax: exp(x - max(x)) / sum(exp(x - max(x)))'],
        solution: `def relu(x):
    return np.maximum(0, x)

def relu_derivative(x):
    return (x > 0).astype(float)

def softmax(x):
    e_x = np.exp(x - np.max(x))
    return e_x / e_x.sum()`
    },
    {
        id: 'loss-functions',
        title: '损失函数实现',
        domain: 'dl',
        difficulty: 1,
        estimatedMinutes: 10,
        description: '实现深度学习中常用的损失函数。',
        setup: `import numpy as np`,
        template: `def mse_loss(y_pred, y_true):
    """均方误差损失"""
    # TODO: 实现 MSE = mean((y_pred - y_true)^2)
    return None

def cross_entropy_loss(y_pred, y_true):
    """
    交叉熵损失 (多分类)
    y_pred: softmax 输出 (n_samples, n_classes)
    y_true: one-hot 标签 (n_samples, n_classes)
    """
    # TODO: 实现交叉熵 = -mean(sum(y_true * log(y_pred)))
    return None

# 测试
y_pred_reg = np.array([2.5, 0.0, 2.1])
y_true_reg = np.array([3.0, -0.5, 2.0])
mse = mse_loss(y_pred_reg, y_true_reg)

y_pred_clf = np.array([[0.7, 0.2, 0.1], [0.1, 0.8, 0.1]])
y_true_clf = np.array([[1, 0, 0], [0, 1, 0]])
ce = cross_entropy_loss(y_pred_clf, y_true_clf)

print(f"MSE Loss: {mse:.4f}")
print(f"Cross Entropy Loss: {ce:.4f}")`,
        tests: `assert mse is not None, "mse_loss 返回 None"
assert ce is not None, "cross_entropy_loss 返回 None"
expected_mse = np.mean((y_pred_reg - y_true_reg) ** 2)
assert abs(mse - expected_mse) < 1e-6, f"MSE 应为 {expected_mse}"
assert ce > 0, "交叉熵应为正数"
assert ce < 1, "本例交叉熵应小于 1"
print("✅ 损失函数测试通过！")`,
        hints: ['MSE: np.mean((y_pred - y_true) ** 2)', '交叉熵中加 eps 防止 log(0)', '交叉熵: -np.mean(np.sum(y_true * np.log(y_pred + eps), axis=1))'],
        solution: `def mse_loss(y_pred, y_true):
    return np.mean((y_pred - y_true) ** 2)

def cross_entropy_loss(y_pred, y_true):
    eps = 1e-15
    return -np.mean(np.sum(y_true * np.log(y_pred + eps), axis=1))`
    },
    {
        id: 'nn-forward-pass',
        title: '神经网络前向传播',
        domain: 'dl',
        difficulty: 2,
        estimatedMinutes: 15,
        description: '实现一个简单的两层神经网络的前向传播。',
        setup: `import numpy as np
np.random.seed(42)`,
        template: `def forward_pass(X, W1, b1, W2, b2):
    """
    两层神经网络前向传播
    X: 输入 (n_samples, n_features)
    W1, b1: 第一层权重和偏置
    W2, b2: 第二层权重和偏置
    返回: 输出 (n_samples, n_outputs)
    """
    # TODO: 实现前向传播
    # 1. 隐藏层: z1 = X @ W1 + b1, a1 = relu(z1)
    # 2. 输出层: z2 = a1 @ W2 + b2, output = sigmoid(z2)
    output = None
    return output

# 创建测试网络
X = np.array([[0.5, 0.3], [0.9, 0.1]])
W1 = np.array([[0.1, 0.2, 0.3], [0.4, 0.5, 0.6]])
b1 = np.array([0.01, 0.02, 0.03])
W2 = np.array([[0.7], [0.8], [0.9]])
b2 = np.array([0.05])

output = forward_pass(X, W1, b1, W2, b2)
print(f"输出: {output}")`,
        tests: `assert output is not None, "output 返回 None"
assert output.shape == (2, 1), f"输出形状应为 (2,1)，实际为 {output.shape}"
assert np.all(output >= 0) and np.all(output <= 1), "sigmoid 输出应在 [0,1]"
# 手动验证
z1 = X @ W1 + b1
a1 = np.maximum(0, z1)
z2 = a1 @ W2 + b2
expected = 1 / (1 + np.exp(-z2))
assert np.allclose(output, expected, atol=1e-6), "输出与手动计算不符"
print("✅ 前向传播测试通过！")`,
        hints: ['隐藏层线性变换: z1 = X @ W1 + b1', 'ReLU 激活: a1 = np.maximum(0, z1)', '输出层: sigmoid(a1 @ W2 + b2)'],
        solution: `    z1 = X @ W1 + b1
    a1 = np.maximum(0, z1)
    z2 = a1 @ W2 + b2
    output = 1 / (1 + np.exp(-z2))
    return output`
    },
    {
        id: 'backpropagation',
        title: '反向传播 (单层)',
        domain: 'dl',
        difficulty: 3,
        estimatedMinutes: 20,
        description: '实现单层神经网络的反向传播，计算权重梯度。',
        setup: `import numpy as np
np.random.seed(0)`,
        template: `def backward_pass(X, y, W, b):
    """
    单层网络反向传播 (MSE 损失)
    X: 输入 (n_samples, n_features)
    y: 目标 (n_samples, n_outputs)
    W: 权重 (n_features, n_outputs)
    b: 偏置 (n_outputs,)
    返回: (dW, db) 权重梯度
    """
    n_samples = X.shape[0]

    # 前向
    z = X @ W + b
    y_pred = z  # 线性输出

    # 损失梯度 dL/dy_pred
    dL_dy = 2 * (y_pred - y) / n_samples

    # TODO: 反向传播计算 dW 和 db
    # 提示: 链式法则
    dW = None  # 在此实现
    db = None  # 在此实现

    return dW, db

# 测试
X = np.array([[1, 2], [3, 4]])
y = np.array([[5], [11]])
W = np.array([[0.5], [0.3]])
b = np.array([0.1])

dW, db = backward_pass(X, y, W, b)
print(f"dW: {dW}")
print(f"db: {db}")`,
        tests: `assert dW is not None, "dW 返回 None"
assert db is not None, "db 返回 None"
assert dW.shape == W.shape, f"dW 形状应为 {W.shape}，实际为 {dW.shape}"
assert db.shape == b.shape, f"db 形状应为 {b.shape}"
# 手动验证
z = X @ W + b
dL = 2 * (z - y) / 2
expected_dW = X.T @ dL
expected_db = np.sum(dL, axis=0)
assert np.allclose(dW, expected_dW, atol=1e-6), "dW 计算不正确"
assert np.allclose(db, expected_db, atol=1e-6), "db 计算不正确"
print("✅ 反向传播测试通过！")`,
        hints: ['dW = X.T @ dL_dy（链式法则：dL/dW = dL/dy * dy/dW）', 'db = np.sum(dL_dy, axis=0)', 'dL_dy 已经计算好了：2 * (y_pred - y) / n_samples'],
        solution: `    dW = X.T @ dL_dy
    db = np.sum(dL_dy, axis=0)`
    },
    {
        id: 'cnn-convolution',
        title: '卷积运算实现',
        domain: 'dl',
        difficulty: 3,
        estimatedMinutes: 20,
        description: '实现 2D 卷积运算，这是 CNN 的核心操作。',
        setup: `import numpy as np`,
        template: `def conv2d(image, kernel, stride=1, padding=0):
    """
    2D 卷积运算
    image: 输入图像 (H, W)
    kernel: 卷积核 (kH, kW)
    stride: 步长
    padding: 填充大小
    返回: 卷积结果
    """
    if padding > 0:
        image = np.pad(image, padding, mode='constant')

    H, W = image.shape
    kH, kW = kernel.shape

    out_H = (H - kH) // stride + 1
    out_W = (W - kW) // stride + 1

    output = np.zeros((out_H, out_W))

    # TODO: 实现卷积运算
    # 提示: 对每个输出位置，计算对应窗口与核的元素乘积之和

    return output

# 测试: 边缘检测
image = np.array([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
], dtype=float)

kernel = np.array([
    [-1, -1, -1],
    [-1,  8, -1],
    [-1, -1, -1]
], dtype=float)

result = conv2d(image, kernel)
print("卷积结果:")
print(result)`,
        tests: `assert result is not None, "result 返回 None"
assert result.shape == (3, 3), f"输出形状应为 (3,3)，实际为 {result.shape}"
# 手动验证中心值
expected_center = np.sum(image[1:4, 1:4] * kernel)
assert abs(result[1, 1] - expected_center) < 1e-6, "中心值计算不正确"
print("✅ 卷积运算测试通过！")`,
        hints: ['用两层循环遍历输出的每个位置', '每个位置: output[i, j] = sum(image[i*s:i*s+kH, j*s:j*s+kW] * kernel)', '用 np.pad 做填充'],
        solution: `    for i in range(out_H):
        for j in range(out_W):
            window = image[i*stride:i*stride+kH, j*stride:j*stride+kW]
            output[i, j] = np.sum(window * kernel)`
    },
    {
        id: 'batch-norm',
        title: 'Batch Normalization',
        domain: 'dl',
        difficulty: 2,
        estimatedMinutes: 15,
        description: '实现 Batch Normalization 的前向传播。',
        setup: `import numpy as np
np.random.seed(42)`,
        template: `def batch_norm(x, gamma=1.0, beta=0.0, eps=1e-5):
    """
    Batch Normalization 前向传播
    x: 输入 (n_samples, n_features)
    gamma: 缩放参数
    beta: 偏移参数
    eps: 防止除零的小常数
    返回: 归一化后的输出
    """
    # TODO: 实现 BatchNorm
    # 1. 计算 batch 均值
    # 2. 计算 batch 方差
    # 3. 标准化: (x - mean) / sqrt(var + eps)
    # 4. 缩放偏移: gamma * normalized + beta
    output = None
    return output

# 测试
x = np.array([
    [1.0, 2.0, 3.0],
    [4.0, 5.0, 6.0],
    [7.0, 8.0, 9.0],
    [10.0, 11.0, 12.0]
])

output = batch_norm(x)
print("BatchNorm 输出:")
print(np.round(output, 4))`,
        tests: `assert output is not None, "output 返回 None"
assert output.shape == x.shape, f"形状应为 {x.shape}"
# 标准化后每列均值应接近 0
assert np.allclose(output.mean(axis=0), 0, atol=1e-4), "每列均值应接近 0"
# 标准化后每列方差应接近 1
assert np.allclose(output.var(axis=0), 1, atol=0.1), "每列方差应接近 1"
print("✅ BatchNorm 测试通过！")`,
        hints: ['均值: mu = x.mean(axis=0)', '方差: var = x.var(axis=0)', '归一化: (x - mu) / np.sqrt(var + eps)'],
        solution: `    mu = x.mean(axis=0)
    var = x.var(axis=0)
    x_norm = (x - mu) / np.sqrt(var + eps)
    output = gamma * x_norm + beta
    return output`
    },
    {
        id: 'attention-mechanism',
        title: '简化注意力机制',
        domain: 'dl',
        difficulty: 3,
        estimatedMinutes: 20,
        description: '实现简化的缩放点积注意力机制 (Scaled Dot-Product Attention)。',
        setup: `import numpy as np
np.random.seed(0)`,
        template: `def softmax(x, axis=-1):
    """数值稳定的 softmax"""
    e_x = np.exp(x - np.max(x, axis=axis, keepdims=True))
    return e_x / np.sum(e_x, axis=axis, keepdims=True)

def scaled_dot_product_attention(Q, K, V):
    """
    缩放点积注意力
    Q: Query (n, d_k)
    K: Key (m, d_k)
    V: Value (m, d_v)
    返回: 注意力输出 (n, d_v)
    """
    d_k = K.shape[-1]

    # TODO: 实现注意力计算
    # 1. 计算注意力分数: scores = Q @ K.T / sqrt(d_k)
    # 2. 应用 softmax 得到权重
    # 3. 加权求和: output = weights @ V
    output = None
    return output

# 测试
Q = np.array([[1, 0, 1], [0, 1, 1]], dtype=float)
K = np.array([[1, 0, 0], [0, 1, 0], [0, 0, 1]], dtype=float)
V = np.array([[1, 2], [3, 4], [5, 6]], dtype=float)

output = scaled_dot_product_attention(Q, K, V)
print("注意力输出:")
print(np.round(output, 4))`,
        tests: `assert output is not None, "output 返回 None"
assert output.shape == (2, 2), f"输出形状应为 (2,2)，实际为 {output.shape}"
# 手动验证
d_k = 3
scores = Q @ K.T / np.sqrt(d_k)
weights = softmax(scores)
expected = weights @ V
assert np.allclose(output, expected, atol=1e-6), "注意力计算不正确"
print("✅ 注意力机制测试通过！")`,
        hints: ['缩放因子: sqrt(d_k)，d_k = K.shape[-1]', '注意力分数: scores = Q @ K.T / np.sqrt(d_k)', '输出: softmax(scores) @ V'],
        solution: `    scores = Q @ K.T / np.sqrt(d_k)
    weights = softmax(scores)
    output = weights @ V
    return output`
    },
    {
        id: 'word2vec-simplified',
        title: '简化 Word2Vec',
        domain: 'dl',
        difficulty: 3,
        estimatedMinutes: 20,
        description: '实现简化的 Skip-gram Word2Vec 模型的前向传播和损失计算。',
        setup: `import numpy as np
np.random.seed(42)`,
        template: `def softmax(x, axis=-1):
    e_x = np.exp(x - np.max(x, axis=axis, keepdims=True))
    return e_x / np.sum(e_x, axis=axis, keepdims=True)

def skipgram_forward(center_word_idx, W_input, W_output):
    """
    Skip-gram 前向传播
    center_word_idx: 中心词索引 (int)
    W_input: 输入嵌入矩阵 (vocab_size, embed_dim)
    W_output: 输出嵌入矩阵 (embed_dim, vocab_size)
    返回: 词汇表上每个词的概率分布
    """
    # TODO: 实现 Skip-gram 前向传播
    # 1. 获取中心词的嵌入向量
    # 2. 计算输出层得分
    # 3. 应用 softmax
    probs = None
    return probs

# 测试: 5 个词的词汇表, 嵌入维度 3
vocab_size = 5
embed_dim = 3
W_in = np.random.randn(vocab_size, embed_dim) * 0.1
W_out = np.random.randn(embed_dim, vocab_size) * 0.1

probs = skipgram_forward(2, W_in, W_out)
print(f"词 2 的上下文概率分布: {np.round(probs, 4)}")
print(f"概率总和: {np.sum(probs):.4f}")`,
        tests: `assert probs is not None, "probs 返回 None"
assert probs.shape == (5,), f"概率分布形状应为 (5)，实际为 {probs.shape}"
assert abs(np.sum(probs) - 1.0) < 0.01, f"概率总和应为 1，实际为 {np.sum(probs)}"
assert np.all(probs >= 0) and np.all(probs <= 1), "概率应在 [0,1] 范围"
print("✅ Word2Vec 测试通过！")`,
        hints: ['获取嵌入向量: embed = W_input[center_word_idx]', '计算得分: scores = embed @ W_output', '应用 softmax 得到概率分布'],
        solution: `    embed = W_input[center_word_idx]
    scores = embed @ W_output
    probs = softmax(scores)
    return probs`
    },
    {
        id: 'dropout',
        title: 'Dropout 实现',
        domain: 'dl',
        difficulty: 2,
        estimatedMinutes: 10,
        description: '实现 Dropout 正则化技术的前向和反向传播。',
        setup: `import numpy as np
np.random.seed(42)`,
        template: `def dropout_forward(x, drop_rate=0.5, training=True):
    """
    Dropout 前向传播
    x: 输入
    drop_rate: 丢弃概率
    training: 是否处于训练模式
    返回: (输出, mask) — mask 用于反向传播
    """
    if not training:
        return x, None

    # TODO: 实现 Dropout
    # 1. 生成 mask: 以 (1 - drop_rate) 的概率保留
    # 2. 应用 mask 并缩放: output = x * mask / (1 - drop_rate)
    mask = None
    output = None
    return output, mask

def dropout_backward(dout, mask, drop_rate=0.5):
    """Dropout 反向传播"""
    # TODO: 实现反向传播
    return None

# 测试
x = np.ones((2, 5)) * 2
output, mask = dropout_forward(x, drop_rate=0.5)
print(f"输入: {x[0]}")
print(f"Mask: {mask[0].astype(int)}")
print(f"输出: {np.round(output[0], 2)}")`,
        tests: `assert output is not None, "output 返回 None"
assert mask is not None, "mask 返回 None"
assert output.shape == x.shape, f"形状应为 {x.shape}"
# 训练模式：大约一半元素应为 0
# 推理模式应直接返回输入
_, test_mask = dropout_forward(x, drop_rate=0.5, training=False)
assert test_mask is None, "推理模式不应生成 mask"
print("✅ Dropout 测试通过！")`,
        hints: ['生成 mask: (np.random.rand(*x.shape) > drop_rate).astype(float)', '输出需要缩放: output = x * mask / (1 - drop_rate)', '反向传播: dout * mask / (1 - drop_rate)'],
        solution: `    mask = (np.random.rand(*x.shape) > drop_rate).astype(float)
    output = x * mask / (1 - drop_rate)
    return output, mask`
    }
];
