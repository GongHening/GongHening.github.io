/**
 * AI Learning Path Wizard Component
 * Multi-step quiz wizard that generates personalized learning paths
 * Results are persisted to localStorage
 */

const Wizard = {
    STORAGE_KEY: 'day_wizard_result',

    // State
    currentStep: -1, // -1 = welcome, 0-9 = questions, 10 = result
    answers: {},
    result: null,
    isOpen: false,

    /**
     * Initialize the wizard component
     */
    init() {
        this.overlay = document.getElementById('wizardOverlay');
        this.body = document.getElementById('wizardBody');
        this.prevBtn = document.getElementById('wizardPrev');
        this.nextBtn = document.getElementById('wizardNext');
        this.closeBtn = document.getElementById('wizardClose');
        this.progressFill = document.getElementById('wizardProgressFill');
        this.progressText = document.getElementById('wizardProgressText');

        if (!this.overlay || !this.body) return;

        // Bind events
        this.closeBtn?.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());

        // Escape to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.close();
        });

        // Bind trigger buttons
        this.bindTriggers();

        // Load saved result and render persistent card
        this.loadSavedResult();
    },

    /**
     * Bind all trigger buttons that open the wizard
     */
    bindTriggers() {
        document.querySelectorAll('[data-wizard-trigger]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });
    },

    /**
     * Load saved wizard result from localStorage
     */
    loadSavedResult() {
        const saved = Storage.get(this.STORAGE_KEY);
        if (saved && saved.result && saved.answers) {
            this.result = saved.result;
            this.answers = saved.answers;
            this.renderPersistentCard();
        }
    },

    /**
     * Save current result to localStorage
     */
    saveResult() {
        if (this.result && this.answers) {
            Storage.set(this.STORAGE_KEY, {
                result: this.result,
                answers: this.answers,
                savedAt: new Date().toISOString()
            });
            this.renderPersistentCard();
        }
    },

    /**
     * Clear saved result
     */
    clearSavedResult() {
        Storage.remove(this.STORAGE_KEY);
        this.result = null;
        this.answers = {};
        this.removePersistentCard();
    },

    /**
     * Render the persistent result card on the page
     */
    renderPersistentCard() {
        let container = document.getElementById('wizardPersistentCard');
        if (!container) {
            // Create container after dashboard section
            const dashboard = document.getElementById('dashboard');
            if (!dashboard) return;
            container = document.createElement('div');
            container.id = 'wizardPersistentCard';
            dashboard.parentNode.insertBefore(container, dashboard.nextSibling);
        }

        if (!this.result) {
            container.innerHTML = '';
            return;
        }

        const r = this.result;
        const saved = Storage.get(this.STORAGE_KEY);
        const savedDate = saved?.savedAt ? new Date(saved.savedAt).toLocaleDateString('zh-CN') : '';

        // Build compact course list
        const courseListHtml = r.courses.slice(0, 5).map(c =>
            `<span class="wpc-course-tag">${c.n}</span>`
        ).join('');
        const moreCount = r.courses.length - 5;
        const moreHtml = moreCount > 0 ? `<span class="wpc-course-tag wpc-course-tag--more">+${moreCount} 门</span>` : '';

        // Format days to readable string
        const daysText = r.totalDays <= 30 ? `约 ${r.totalDays} 天` :
                         r.totalWeeks <= 12 ? `约 ${r.totalWeeks} 周` :
                         `约 ${Math.ceil(r.totalWeeks / 4.3)} 个月`;

        container.innerHTML = `
            <section class="wpc-section">
                <div class="wpc-card">
                    <div class="wpc-card-header">
                        <div class="wpc-card-icon">🎯</div>
                        <div class="wpc-card-title-group">
                            <h3 class="wpc-card-title">你的 AI 学习路径</h3>
                            ${savedDate ? `<span class="wpc-card-date">测评于 ${savedDate}</span>` : ''}
                        </div>
                        <div class="wpc-card-actions">
                            <button class="btn btn-secondary btn-sm" onclick="Wizard.openForResult()">查看详情</button>
                            <button class="btn btn-primary btn-sm" onclick="Wizard.open()">重新测评</button>
                        </div>
                    </div>
                    <div class="wpc-card-body">
                        <div class="wpc-stats">
                            <div class="wpc-stat">
                                <span class="wpc-stat-value">${r.totalCourses}</span>
                                <span class="wpc-stat-label">门课程</span>
                            </div>
                            <div class="wpc-stat-divider"></div>
                            <div class="wpc-stat">
                                <span class="wpc-stat-value">${formatHours(r.totalHours)}</span>
                                <span class="wpc-stat-label">课程总时长</span>
                            </div>
                            <div class="wpc-stat-divider"></div>
                            <div class="wpc-stat">
                                <span class="wpc-stat-value">${daysText}</span>
                                <span class="wpc-stat-label">每日${r.dailyHours}h · 预计完成</span>
                            </div>
                            <div class="wpc-stat-divider"></div>
                            <div class="wpc-stat">
                                <span class="wpc-stat-value">${r.totalPhases} 阶段</span>
                                <span class="wpc-stat-label">${r.difficultyRange.label}</span>
                            </div>
                        </div>
                        <div class="wpc-courses">
                            ${courseListHtml}${moreHtml}
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    /**
     * Remove the persistent card
     */
    removePersistentCard() {
        const container = document.getElementById('wizardPersistentCard');
        if (container) container.innerHTML = '';
    },

    /**
     * Open wizard and jump directly to result page
     */
    openForResult() {
        if (!this.result) {
            this.open();
            return;
        }
        this.currentStep = WIZARD_QUESTIONS.length;
        this.isOpen = true;
        this.render();
        if (this.overlay) {
            this.overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    },

    /**
     * Open the wizard modal
     */
    open() {
        this.currentStep = -1;
        this.answers = {};
        this.result = null;
        this.isOpen = true;

        this.render();

        if (this.overlay) {
            this.overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    },

    /**
     * Close the wizard modal
     */
    close() {
        if (this.overlay) {
            this.overlay.classList.remove('show');
            document.body.style.overflow = '';
        }
        this.isOpen = false;
    },

    /**
     * Go to previous step
     */
    prev() {
        if (this.currentStep > -1) {
            this.currentStep--;
            this.render();
        }
    },

    /**
     * Go to next step
     */
    next() {
        if (this.currentStep === -1) {
            // Welcome -> first question
            this.currentStep = 0;
            this.render();
            return;
        }

        if (this.currentStep >= 0 && this.currentStep < WIZARD_QUESTIONS.length) {
            // Validate that an option is selected
            const q = WIZARD_QUESTIONS[this.currentStep];
            if (!this.answers[q.id]) {
                showToast('请先选择一个选项', 'warning', 2000);
                return;
            }

            if (this.currentStep < WIZARD_QUESTIONS.length - 1) {
                this.currentStep++;
                this.render();
            } else {
                // Last question -> generate result
                this.result = generateLearningPath(this.answers);
                this.currentStep = WIZARD_QUESTIONS.length;
                this.saveResult();
                this.render();
            }
            return;
        }

        if (this.currentStep === WIZARD_QUESTIONS.length) {
            // Result page -> close
            this.close();
        }
    },

    /**
     * Select an option for the current question
     * @param {string} questionId - Question ID
     * @param {string} value - Selected option value
     */
    selectOption(questionId, value) {
        this.answers[questionId] = value;

        // Update UI
        const options = this.body.querySelectorAll('.wizard-option');
        options.forEach(opt => {
            if (opt.dataset.value === value) {
                opt.classList.add('selected');
            } else {
                opt.classList.remove('selected');
            }
        });

        // Enable next button
        if (this.nextBtn) {
            this.nextBtn.disabled = false;
        }
    },

    /**
     * Render the current step
     */
    render() {
        if (!this.body) return;

        // Update progress
        this.updateProgress();

        // Update buttons
        this.updateButtons();

        // Render content with transition
        this.body.classList.add('wizard-fade-out');
        setTimeout(() => {
            if (this.currentStep === -1) {
                this.renderWelcome();
            } else if (this.currentStep >= 0 && this.currentStep < WIZARD_QUESTIONS.length) {
                this.renderQuestion(this.currentStep);
            } else {
                this.renderResult();
            }
            this.body.classList.remove('wizard-fade-out');
            this.body.classList.add('wizard-fade-in');
            setTimeout(() => this.body.classList.remove('wizard-fade-in'), 300);
        }, 150);
    },

    /**
     * Update progress bar
     */
    updateProgress() {
        const total = WIZARD_QUESTIONS.length;
        let current = this.currentStep;

        if (current < 0) current = 0;
        if (current > total) current = total;

        const percent = (current / total) * 100;

        if (this.progressFill) {
            this.progressFill.style.width = percent + '%';
        }
        if (this.progressText) {
            if (this.currentStep === -1) {
                this.progressText.textContent = '准备开始';
            } else if (this.currentStep >= total) {
                this.progressText.textContent = '测评完成';
            } else {
                this.progressText.textContent = `${current + 1} / ${total}`;
            }
        }
    },

    /**
     * Update button states
     */
    updateButtons() {
        if (this.prevBtn) {
            this.prevBtn.style.visibility = this.currentStep <= -1 ? 'hidden' : 'visible';
        }

        if (this.nextBtn) {
            if (this.currentStep === -1) {
                this.nextBtn.textContent = '开始测评 →';
                this.nextBtn.disabled = false;
            } else if (this.currentStep >= WIZARD_QUESTIONS.length) {
                this.nextBtn.textContent = '完成 ✓';
                this.nextBtn.disabled = false;
            } else {
                const isLast = this.currentStep === WIZARD_QUESTIONS.length - 1;
                this.nextBtn.textContent = isLast ? '查看结果 →' : '下一步 →';
                const q = WIZARD_QUESTIONS[this.currentStep];
                this.nextBtn.disabled = !this.answers[q.id];
            }
        }
    },

    /**
     * Render welcome page
     */
    renderWelcome() {
        const hasSaved = !!this.result;
        this.body.innerHTML = `
            <div class="wizard-welcome">
                <div class="wizard-welcome-icon">🧭</div>
                <h2 class="wizard-welcome-title">AI 学习路径测评</h2>
                <p class="wizard-welcome-desc">
                    回答 ${WIZARD_QUESTIONS.length} 个简单的问题，我们将为你生成一条个性化的 AI 学习路径。
                </p>
                <div class="wizard-welcome-features">
                    <div class="wizard-welcome-feature">
                        <span class="wizard-welcome-feature-icon">📋</span>
                        <span>${WIZARD_QUESTIONS.length} 道精选题目</span>
                    </div>
                    <div class="wizard-welcome-feature">
                        <span class="wizard-welcome-feature-icon">🎯</span>
                        <span>个性化课程推荐</span>
                    </div>
                    <div class="wizard-welcome-feature">
                        <span class="wizard-welcome-feature-icon">🗺️</span>
                        <span>分阶段学习路径</span>
                    </div>
                    <div class="wizard-welcome-feature">
                        <span class="wizard-welcome-feature-icon">⏱️</span>
                        <span>预计完成时间</span>
                    </div>
                </div>
                ${hasSaved ? '<p class="wizard-welcome-hint">💡 你之前已有测评结果，重新测评将覆盖之前的记录</p>' : ''}
                <p class="wizard-welcome-hint">预计需要 2-3 分钟完成</p>
            </div>
        `;
    },

    /**
     * Render a question step
     * @param {number} index - Question index
     */
    renderQuestion(index) {
        const q = WIZARD_QUESTIONS[index];
        const selected = this.answers[q.id];

        const optionsHtml = q.options.map(opt => {
            const isSelected = selected === opt.value;
            return `
                <div class="wizard-option ${isSelected ? 'selected' : ''}"
                     data-value="${opt.value}"
                     onclick="Wizard.selectOption('${q.id}', '${opt.value}')">
                    <div class="wizard-option-label">${opt.label}</div>
                    <div class="wizard-option-desc">${opt.desc}</div>
                    <div class="wizard-option-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                    </div>
                </div>
            `;
        }).join('');

        this.body.innerHTML = `
            <div class="wizard-question">
                <div class="wizard-question-header">
                    <span class="wizard-question-icon">${q.icon}</span>
                    <span class="wizard-question-number">问题 ${index + 1}</span>
                </div>
                <h2 class="wizard-question-title">${q.question}</h2>
                <div class="wizard-options">
                    ${optionsHtml}
                </div>
            </div>
        `;
    },

    /**
     * Render the result page
     */
    renderResult() {
        if (!this.result) return;

        const r = this.result;

        // Build phases HTML
        const phasesHtml = r.phases.map((phase, i) => {
            const coursesHtml = phase.courses.map(course => `
                <div class="wizard-result-course">
                    <div class="wizard-result-course-info">
                        <div class="wizard-result-course-name">${course.n}</div>
                        <div class="wizard-result-course-meta">
                            <span>${course.i}</span>
                            <span class="wizard-result-course-dot">·</span>
                            <span>${course.p}</span>
                        </div>
                    </div>
                    <div class="wizard-result-course-badges">
                        <span class="wizard-result-badge wizard-result-badge--hours">${formatHours(course.h)}</span>
                        <span class="wizard-result-badge wizard-result-badge--diff" style="--diff-color: ${getDifficultyColor(course.d)}">${getDifficultyLabel(course.d)}</span>
                    </div>
                    <a href="${course.u}" target="_blank" rel="noopener noreferrer" class="wizard-result-course-link" title="查看课程">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>
            `).join('');

            const phaseHours = phase.courses.reduce((sum, c) => sum + c.h, 0);
            const phaseDays = Math.ceil(phaseHours / r.dailyHours);
            const phaseTimeText = phaseDays <= 7 ? `${phaseDays} 天` :
                                  phaseDays <= 30 ? `${Math.ceil(phaseDays / 7)} 周` :
                                  `${Math.ceil(phaseDays / 30)} 个月`;

            return `
                <div class="wizard-phase">
                    <div class="wizard-phase-header">
                        <div class="wizard-phase-icon">${phase.icon}</div>
                        <div class="wizard-phase-info">
                            <h3 class="wizard-phase-title">阶段 ${i + 1}：${phase.name}</h3>
                            <p class="wizard-phase-desc">${phase.description}</p>
                        </div>
                        <div class="wizard-phase-meta">
                            <span class="wizard-phase-time">每日${r.dailyHours}h · 约${phaseTimeText}</span>
                            <span class="wizard-phase-hours">${formatHours(phaseHours)} 课程时长</span>
                        </div>
                    </div>
                    <div class="wizard-phase-courses">
                        ${coursesHtml}
                    </div>
                </div>
            `;
        }).join('');

        // Build skills HTML
        const skillsHtml = r.skills.map(skill =>
            `<span class="wizard-skill-tag">${skill}</span>`
        ).join('');

        // Format total days
        const totalDaysText = r.totalDays <= 30 ? `${r.totalDays} 天` :
                              r.totalWeeks <= 12 ? `${r.totalWeeks} 周` :
                              `${Math.ceil(r.totalWeeks / 4.3)} 个月`;

        this.body.innerHTML = `
            <div class="wizard-result">
                <div class="wizard-result-header">
                    <div class="wizard-result-icon">🎯</div>
                    <h2 class="wizard-result-title">你的个性化 AI 学习路径</h2>
                    <p class="wizard-result-summary">${r.summary}</p>
                </div>

                <div class="wizard-result-stats">
                    <div class="wizard-result-stat">
                        <div class="wizard-result-stat-value">${formatHours(r.totalHours)}</div>
                        <div class="wizard-result-stat-label">课程总时长</div>
                    </div>
                    <div class="wizard-result-stat">
                        <div class="wizard-result-stat-value">${totalDaysText}</div>
                        <div class="wizard-result-stat-label">每日${r.dailyHours}h 预计完成</div>
                    </div>
                    <div class="wizard-result-stat">
                        <div class="wizard-result-stat-value">${r.totalCourses}</div>
                        <div class="wizard-result-stat-label">推荐课程</div>
                    </div>
                    <div class="wizard-result-stat">
                        <div class="wizard-result-stat-value">${r.totalPhases} 阶段</div>
                        <div class="wizard-result-stat-label">${r.difficultyRange.label}</div>
                    </div>
                </div>

                <div class="wizard-result-phases">
                    ${phasesHtml}
                </div>

                <div class="wizard-result-skills">
                    <h3 class="wizard-result-skills-title">🏆 学完后你将掌握</h3>
                    <div class="wizard-result-skills-list">
                        ${skillsHtml}
                    </div>
                </div>

                <div class="wizard-result-actions">
                    <button class="btn btn-secondary" onclick="Wizard.restart()">
                        🔄 重新测评
                    </button>
                    <button class="btn btn-primary" onclick="Wizard.showCourses()">
                        📚 查看推荐课程
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Restart the wizard
     */
    restart() {
        this.currentStep = -1;
        this.answers = {};
        this.result = null;
        this.render();
    },

    /**
     * Show recommended courses in the main page
     */
    showCourses() {
        if (!this.result || !this.result.courses.length) return;

        // Close wizard
        this.close();

        // Filter courses in main view
        App.state.filteredCourses = this.result.courses;
        CourseCard.renderAll(App.state.filteredCourses);
        Filters.updateResultsCount(App.state.filteredCourses.length);

        // Scroll to courses
        scrollToElement('#courses');
        showToast(`已筛选 ${this.result.courses.length} 门推荐课程`, 'success', 3000);
    }
};
