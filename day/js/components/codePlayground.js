/**
 * CodePlayground Component
 * Built-in Python code playground powered by Pyodide (in-browser Python)
 * Provides interactive ML/DL coding exercises with auto-testing
 */

const CodePlayground = {
    STORAGE_KEY: 'day_code_exercises',
    pyodide: null,
    isLoading: false,
    isPyodideLoaded: false,
    currentExercise: null,
    currentHintIndex: 0,
    peekedSolution: false,

    /**
     * Domain labels and colors
     */
    DOMAINS: {
        ml: { name: '机器学习', color: '#6366f1', icon: '🤖' },
        dl: { name: '深度学习', color: '#ec4899', icon: '🧠' }
    },

    DIFFICULTY_LABELS: {
        1: '入门',
        2: '初级',
        3: '中级',
        4: '高级',
        5: '专家'
    },

    /**
     * Initialize the code playground component
     */
    init() {
        this.container = document.getElementById('cpContainer');
        if (!this.container) return;
        this.render();
    },

    /**
     * Get user progress data from storage
     */
    getProgress() {
        return Storage.get(this.STORAGE_KEY, {});
    },

    /**
     * Save progress data to storage
     */
    saveProgress(data) {
        Storage.set(this.STORAGE_KEY, data);
    },

    /**
     * Mark an exercise as completed
     */
    markCompleted(exerciseId) {
        const progress = this.getProgress();
        if (!progress[exerciseId]) {
            progress[exerciseId] = {
                completed: true,
                peekedSolution: this.peekedSolution,
                completedAt: new Date().toISOString()
            };
        }
        this.saveProgress(progress);
        this.updateStats();
    },

    /**
     * Get completion statistics
     */
    getStats() {
        const progress = this.getProgress();
        const total = CODE_EXERCISES.length;
        const completed = Object.values(progress).filter(p => p.completed).length;
        return { total, completed };
    },

    /**
     * Get count of completed exercises
     * @returns {number} Completed count
     */
    getCompletedCount() {
        return this.getStats().completed;
    },

    /**
     * Update stats display
     */
    updateStats() {
        const stats = this.getStats();
        const el = document.getElementById('cpStats');
        if (el) {
            el.textContent = `已完成 ${stats.completed} / ${stats.total}`;
        }
    },

    /**
     * Render the full component
     */
    render() {
        const stats = this.getStats();
        this.container.innerHTML = `
            <div class="cp-header-bar">
                <div class="cp-stats" id="cpStats">已完成 ${stats.completed} / ${stats.total}</div>
                <div class="cp-filter-group">
                    <button class="cp-filter-btn active" data-filter="all">全部</button>
                    <button class="cp-filter-btn" data-filter="ml">机器学习</button>
                    <button class="cp-filter-btn" data-filter="dl">深度学习</button>
                </div>
                <div class="cp-filter-group">
                    <button class="cp-diff-btn active" data-diff="0">全部难度</button>
                    <button class="cp-diff-btn" data-diff="1">入门</button>
                    <button class="cp-diff-btn" data-diff="2">初级</button>
                    <button class="cp-diff-btn" data-diff="3">中级</button>
                </div>
            </div>
            <div class="cp-exercise-grid" id="cpExerciseGrid">
                ${this.renderExerciseCards()}
            </div>
            <div class="cp-workspace" id="cpWorkspace" style="display:none;">
                <div class="cp-workspace-header">
                    <button class="cp-back-btn" id="cpBackBtn">← 返回列表</button>
                    <h3 class="cp-workspace-title" id="cpWorkspaceTitle"></h3>
                    <div class="cp-workspace-meta" id="cpWorkspaceMeta"></div>
                </div>
                <div class="cp-workspace-body">
                    <div class="cp-editor-section">
                        <div class="cp-editor-toolbar">
                            <span class="cp-editor-label">代码编辑器</span>
                            <div class="cp-editor-actions">
                                <button class="cp-btn cp-btn-hint" id="cpHintBtn" title="查看提示">提示</button>
                                <button class="cp-btn cp-btn-reset" id="cpResetBtn" title="重置代码">重置</button>
                                <button class="cp-btn cp-btn-solution" id="cpSolutionBtn" title="查看答案">查看答案</button>
                                <button class="cp-btn cp-btn-run" id="cpRunBtn" title="运行代码">运行 ▶</button>
                            </div>
                        </div>
                        <div class="cp-editor-wrap">
                            <div class="cp-line-numbers" id="cpLineNumbers"></div>
                            <textarea class="cp-editor" id="cpEditor" spellcheck="false" autocomplete="off" autocapitalize="off" wrap="off"></textarea>
                        </div>
                    </div>
                    <div class="cp-output-section">
                        <div class="cp-output-toolbar">
                            <span class="cp-output-label">输出</span>
                            <span class="cp-output-status" id="cpOutputStatus"></span>
                        </div>
                        <div class="cp-output" id="cpOutput">点击 "运行" 按钮执行代码...</div>
                    </div>
                    <div class="cp-hint-panel" id="cpHintPanel" style="display:none;">
                        <div class="cp-hint-header">
                            <span>提示</span>
                            <button class="cp-hint-close" id="cpHintClose">✕</button>
                        </div>
                        <div class="cp-hint-content" id="cpHintContent"></div>
                    </div>
                    <div class="cp-solution-panel" id="cpSolutionPanel" style="display:none;">
                        <div class="cp-solution-header">
                            <span>参考答案</span>
                            <button class="cp-solution-close" id="cpSolutionClose">✕</button>
                        </div>
                        <pre class="cp-solution-code" id="cpSolutionCode"></pre>
                    </div>
                </div>
            </div>
            <div class="cp-loading-overlay" id="cpLoading" style="display:none;">
                <div class="cp-spinner"></div>
                <p class="cp-loading-text">正在加载 Python 运行时...</p>
            </div>
        `;
        this.bindEvents();
    },

    /**
     * Render exercise cards grid
     */
    renderExerciseCards(domainFilter = 'all', diffFilter = 0) {
        const progress = this.getProgress();
        const filtered = CODE_EXERCISES.filter(ex => {
            if (domainFilter !== 'all' && ex.domain !== domainFilter) return false;
            if (diffFilter > 0 && ex.difficulty !== diffFilter) return false;
            return true;
        });

        if (filtered.length === 0) {
            return '<div class="cp-empty">没有匹配的练习</div>';
        }

        return filtered.map(ex => {
            const domainInfo = this.DOMAINS[ex.domain] || { name: ex.domain, icon: '📝', color: '#86868b' };
            const isCompleted = progress[ex.id] && progress[ex.id].completed;
            const peeked = progress[ex.id] && progress[ex.id].peekedSolution;
            const diffStars = Array.from({ length: 3 }, (_, i) =>
                `<span class="cp-star ${i < ex.difficulty ? 'filled' : ''}">●</span>`
            ).join('');

            return `
                <div class="cp-card ${isCompleted ? 'cp-card--completed' : ''}"
                     data-id="${ex.id}" data-domain="${ex.domain}" data-diff="${ex.difficulty}">
                    <div class="cp-card-top">
                        <span class="cp-card-domain" style="background:${domainInfo.color}15;color:${domainInfo.color}">
                            ${domainInfo.icon} ${domainInfo.name}
                        </span>
                        ${isCompleted
                            ? `<span class="cp-card-badge ${peeked ? 'cp-card-badge--peeked' : 'cp-card-badge--done'}">${peeked ? '已查看答案' : '已完成'}</span>`
                            : ''
                        }
                    </div>
                    <h4 class="cp-card-title">${ex.title}</h4>
                    <p class="cp-card-desc">${ex.description}</p>
                    <div class="cp-card-footer">
                        <div class="cp-card-diff">${diffStars}</div>
                        <span class="cp-card-time">约 ${ex.estimatedMinutes} 分钟</span>
                    </div>
                </div>
            `;
        }).join('');
    },

    /**
     * Bind all event listeners
     */
    bindEvents() {
        const grid = document.getElementById('cpExerciseGrid');
        const workspace = document.getElementById('cpWorkspace');

        // Card clicks
        if (grid) {
            grid.addEventListener('click', (e) => {
                const card = e.target.closest('.cp-card');
                if (card) {
                    this.selectExercise(card.dataset.id);
                }
            });
        }

        // Filter buttons
        this.container.addEventListener('click', (e) => {
            const filterBtn = e.target.closest('.cp-filter-btn');
            if (filterBtn) {
                this.container.querySelectorAll('.cp-filter-btn').forEach(b => b.classList.remove('active'));
                filterBtn.classList.add('active');
                this.applyFilters();
            }
            const diffBtn = e.target.closest('.cp-diff-btn');
            if (diffBtn) {
                this.container.querySelectorAll('.cp-diff-btn').forEach(b => b.classList.remove('active'));
                diffBtn.classList.add('active');
                this.applyFilters();
            }
        });

        // Back button
        const backBtn = document.getElementById('cpBackBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.showList());
        }

        // Run button
        const runBtn = document.getElementById('cpRunBtn');
        if (runBtn) {
            runBtn.addEventListener('click', () => this.runCode());
        }

        // Hint button
        const hintBtn = document.getElementById('cpHintBtn');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => this.showHint());
        }

        // Solution button
        const solutionBtn = document.getElementById('cpSolutionBtn');
        if (solutionBtn) {
            solutionBtn.addEventListener('click', () => this.showSolution());
        }

        // Reset button
        const resetBtn = document.getElementById('cpResetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetCode());
        }

        // Hint close
        const hintClose = document.getElementById('cpHintClose');
        if (hintClose) {
            hintClose.addEventListener('click', () => {
                document.getElementById('cpHintPanel').style.display = 'none';
            });
        }

        // Solution close
        const solutionClose = document.getElementById('cpSolutionClose');
        if (solutionClose) {
            solutionClose.addEventListener('click', () => {
                document.getElementById('cpSolutionPanel').style.display = 'none';
            });
        }

        // Editor line numbers
        const editor = document.getElementById('cpEditor');
        if (editor) {
            editor.addEventListener('input', () => this.updateLineNumbers());
            editor.addEventListener('scroll', () => this.syncScroll());
            editor.addEventListener('keydown', (e) => {
                // Tab support
                if (e.key === 'Tab') {
                    e.preventDefault();
                    const start = editor.selectionStart;
                    const end = editor.selectionEnd;
                    editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
                    editor.selectionStart = editor.selectionEnd = start + 4;
                    this.updateLineNumbers();
                }
            });
        }
    },

    /**
     * Apply current filters to the exercise grid
     */
    applyFilters() {
        const grid = document.getElementById('cpExerciseGrid');
        if (!grid) return;

        const activeFilter = this.container.querySelector('.cp-filter-btn.active');
        const activeDiff = this.container.querySelector('.cp-diff-btn.active');
        const domainFilter = activeFilter ? activeFilter.dataset.filter : 'all';
        const diffFilter = activeDiff ? parseInt(activeDiff.dataset.diff) : 0;

        grid.innerHTML = this.renderExerciseCards(domainFilter, diffFilter);
    },

    /**
     * Select and load an exercise
     */
    selectExercise(id) {
        const exercise = CODE_EXERCISES.find(ex => ex.id === id);
        if (!exercise) return;

        this.currentExercise = exercise;
        this.currentHintIndex = 0;
        this.peekedSolution = false;

        const grid = document.getElementById('cpExerciseGrid');
        const workspace = document.getElementById('cpWorkspace');
        const headerBar = this.container.querySelector('.cp-header-bar');

        if (grid) grid.style.display = 'none';
        if (headerBar) headerBar.style.display = 'none';
        if (workspace) workspace.style.display = 'block';

        // Set title and meta
        const titleEl = document.getElementById('cpWorkspaceTitle');
        const metaEl = document.getElementById('cpWorkspaceMeta');
        const domainInfo = this.DOMAINS[exercise.domain] || { name: exercise.domain, icon: '📝', color: '#86868b' };
        if (titleEl) titleEl.textContent = exercise.title;
        if (metaEl) {
            metaEl.innerHTML = `
                <span class="cp-meta-tag" style="background:${domainInfo.color}15;color:${domainInfo.color}">${domainInfo.icon} ${domainInfo.name}</span>
                <span class="cp-meta-tag">${this.DIFFICULTY_LABELS[exercise.difficulty] || '未知'}</span>
                <span class="cp-meta-tag">约 ${exercise.estimatedMinutes} 分钟</span>
            `;
        }

        // Load template into editor
        const editor = document.getElementById('cpEditor');
        if (editor) {
            editor.value = exercise.template;
            this.updateLineNumbers();
        }

        // Reset output
        const output = document.getElementById('cpOutput');
        if (output) output.textContent = '点击 "运行" 按钮执行代码...';
        const status = document.getElementById('cpOutputStatus');
        if (status) status.textContent = '';

        // Hide panels
        var hintPanel = document.getElementById('cpHintPanel');
        var solutionPanel = document.getElementById('cpSolutionPanel');
        if (hintPanel) hintPanel.style.display = 'none';
        if (solutionPanel) solutionPanel.style.display = 'none';

        // Focus editor
        if (editor) editor.focus();
    },

    /**
     * Show the exercise list view
     */
    showList() {
        const grid = document.getElementById('cpExerciseGrid');
        const workspace = document.getElementById('cpWorkspace');
        const headerBar = this.container.querySelector('.cp-header-bar');

        if (grid) grid.style.display = '';
        if (headerBar) headerBar.style.display = '';
        if (workspace) workspace.style.display = 'none';

        // Refresh grid to update completion status
        this.applyFilters();
        this.currentExercise = null;
    },

    /**
     * Load Pyodide runtime (lazy loaded on first run)
     */
    async loadPyodide() {
        if (this.pyodide) return true;
        if (this.isLoading) return false;

        this.isLoading = true;
        const loading = document.getElementById('cpLoading');
        if (loading) loading.style.display = 'flex';

        try {
            // Check if loadPyodide is available
            if (typeof window.loadPyodide !== 'function') {
                throw new Error('Pyodide script not loaded');
            }

            this.pyodide = await window.loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
            });

            // Set up stdout capture
            this.pyodide.runPython(`
import sys, io
class StdoutCapture:
    def __init__(self):
        self.buffer = io.StringIO()
    def write(self, s):
        self.buffer.write(s)
    def getvalue(self):
        val = self.buffer.getvalue()
        self.buffer = io.StringIO()
        return val
    def flush(self):
        pass
sys.stdout = StdoutCapture()
`);

            this.isPyodideLoaded = true;
            return true;
        } catch (e) {
            console.error('Failed to load Pyodide:', e);
            if (typeof showToast === 'function') {
                showToast('Python 运行时加载失败，请检查网络连接后重试', 'error', 5000);
            }
            return false;
        } finally {
            this.isLoading = false;
            if (loading) loading.style.display = 'none';
        }
    },

    /**
     * Run the code in the editor
     */
    async runCode() {
        if (!this.currentExercise) return;

        const editor = document.getElementById('cpEditor');
        const output = document.getElementById('cpOutput');
        const status = document.getElementById('cpOutputStatus');
        const runBtn = document.getElementById('cpRunBtn');

        if (!editor || !output) return;

        const code = editor.value;

        // Disable run button during execution
        if (runBtn) {
            runBtn.disabled = true;
            runBtn.textContent = '运行中...';
        }
        output.textContent = '正在执行...';
        if (status) {
            status.textContent = '';
            status.className = 'cp-output-status';
        }

        // Load Pyodide if needed
        if (!this.isPyodideLoaded) {
            const loaded = await this.loadPyodide();
            if (!loaded) {
                output.textContent = '错误: Python 运行时加载失败。请检查网络连接后刷新页面重试。';
                if (status) {
                    status.textContent = '加载失败';
                    status.className = 'cp-output-status cp-status-error';
                }
                if (runBtn) {
                    runBtn.disabled = false;
                    runBtn.textContent = '运行 ▶';
                }
                return;
            }
        }

        try {
            // Clear previous stdout
            this.pyodide.runPython('sys.stdout.getvalue()');

            // Run setup code first
            if (this.currentExercise.setup) {
                await this.pyodide.runPythonAsync(this.currentExercise.setup);
            }

            // Run user code
            await this.pyodide.runPythonAsync(code);

            // Run tests
            let testPassed = false;
            if (this.currentExercise.tests) {
                try {
                    await this.pyodide.runPythonAsync(this.currentExercise.tests);
                    testPassed = true;
                } catch (testError) {
                    const stdout = this.pyodide.runPython('sys.stdout.getvalue()');
                    let errorMsg = testError.message;
                    // Clean up Pyodide error messages
                    errorMsg = errorMsg.replace(/PythonError: Traceback.*\n/g, '');
                    output.textContent = stdout + '\n--- 测试失败 ---\n' + errorMsg;
                    if (status) {
                        status.textContent = '测试失败';
                        status.className = 'cp-output-status cp-status-error';
                    }
                    return;
                }
            }

            // Get stdout
            const stdout = this.pyodide.runPython('sys.stdout.getvalue()');
            output.textContent = stdout || '(无输出)';

            if (testPassed) {
                if (status) {
                    status.textContent = '全部通过';
                    status.className = 'cp-output-status cp-status-success';
                }
                this.markCompleted(this.currentExercise.id);
            } else {
                if (status) {
                    status.textContent = '运行完成';
                    status.className = 'cp-output-status cp-status-info';
                }
            }

        } catch (e) {
            let errorMsg = e.message;
            // Clean up Pyodide error messages for readability
            errorMsg = errorMsg.replace(/PythonError: Traceback.*\n/g, '');
            // Try to get any partial stdout
            let stdout = '';
            try {
                stdout = this.pyodide.runPython('sys.stdout.getvalue()');
            } catch (_) {}
            output.textContent = (stdout ? stdout + '\n' : '') + '--- 错误 ---\n' + errorMsg;
            if (status) {
                status.textContent = '运行错误';
                status.className = 'cp-output-status cp-status-error';
            }
        } finally {
            if (runBtn) {
                runBtn.disabled = false;
                runBtn.textContent = '运行 ▶';
            }
        }
    },

    /**
     * Show the next hint
     */
    showHint() {
        if (!this.currentExercise || !this.currentExercise.hints) return;

        const panel = document.getElementById('cpHintPanel');
        const content = document.getElementById('cpHintContent');

        if (this.currentHintIndex >= this.currentExercise.hints.length) {
            this.currentHintIndex = 0; // cycle
        }

        const hint = this.currentExercise.hints[this.currentHintIndex];
        const hintNum = this.currentHintIndex + 1;
        const totalHints = this.currentExercise.hints.length;

        content.innerHTML = `
            <p class="cp-hint-text">${hint}</p>
            <div class="cp-hint-nav">
                <span class="cp-hint-counter">提示 ${hintNum} / ${totalHints}</span>
                <button class="cp-hint-next" id="cpHintNext">下一个提示 →</button>
            </div>
        `;

        panel.style.display = 'block';
        this.currentHintIndex++;

        // Bind next hint button
        const nextBtn = document.getElementById('cpHintNext');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.showHint());
        }
    },

    /**
     * Show the solution
     */
    showSolution() {
        if (!this.currentExercise) return;

        this.peekedSolution = true;

        const panel = document.getElementById('cpSolutionPanel');
        const code = document.getElementById('cpSolutionCode');

        code.textContent = this.currentExercise.solution;
        panel.style.display = 'block';

        // Auto-insert solution button
        const insertBtn = document.createElement('button');
        insertBtn.className = 'cp-hint-next';
        insertBtn.textContent = '插入到编辑器';
        insertBtn.style.marginTop = '12px';
        insertBtn.addEventListener('click', () => {
            const editor = document.getElementById('cpEditor');
            if (editor) {
                // Find the TODO line and replace it with solution
                const lines = editor.value.split('\n');
                const todoIndex = lines.findIndex(l => l.includes('TODO'));
                if (todoIndex >= 0) {
                    // Insert solution lines after the TODO comment
                    const indent = lines[todoIndex].match(/^(\s*)/)[1];
                    const solutionLines = this.currentExercise.solution.split('\n').map(l => indent + l);
                    lines.splice(todoIndex + 1, 0, ...solutionLines);
                    // Remove the TODO comment line
                    lines.splice(todoIndex, 1);
                    editor.value = lines.join('\n');
                } else {
                    // Just append
                    editor.value += '\n' + this.currentExercise.solution;
                }
                this.updateLineNumbers();
                panel.style.display = 'none';
            }
        });
        code.after(insertBtn);
    },

    /**
     * Reset the editor to the exercise template
     */
    resetCode() {
        if (!this.currentExercise) return;

        const editor = document.getElementById('cpEditor');
        if (editor) {
            editor.value = this.currentExercise.template;
            this.updateLineNumbers();
        }

        // Reset output
        const output = document.getElementById('cpOutput');
        if (output) output.textContent = '代码已重置，点击 "运行" 按钮执行...';
        const status = document.getElementById('cpOutputStatus');
        if (status) {
            status.textContent = '';
            status.className = 'cp-output-status';
        }

        // Reset hints
        this.currentHintIndex = 0;
        var hintPanel = document.getElementById('cpHintPanel');
        var solutionPanel = document.getElementById('cpSolutionPanel');
        if (hintPanel) hintPanel.style.display = 'none';
        if (solutionPanel) solutionPanel.style.display = 'none';
    },

    /**
     * Update line numbers display
     */
    updateLineNumbers() {
        const editor = document.getElementById('cpEditor');
        const lineNumbers = document.getElementById('cpLineNumbers');
        if (!editor || !lineNumbers) return;

        const lines = editor.value.split('\n').length;
        const numbers = Array.from({ length: lines }, (_, i) => i + 1).join('\n');
        lineNumbers.textContent = numbers;
    },

    /**
     * Sync scroll between line numbers and editor
     */
    syncScroll() {
        const editor = document.getElementById('cpEditor');
        const lineNumbers = document.getElementById('cpLineNumbers');
        if (editor && lineNumbers) {
            lineNumbers.scrollTop = editor.scrollTop;
        }
    }
};
