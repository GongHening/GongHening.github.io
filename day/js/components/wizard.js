/**
 * AI Learning Path Wizard Component
 * Multi-step quiz wizard that generates personalized learning paths
 */

const Wizard = {
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
                this.render();
            }
            return;
        }

        if (this.currentStep === WIZARD_QUESTIONS.length) {
            // Result page -> close or restart
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
                        <span>预计学习时长</span>
                    </div>
                </div>
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

            return `
                <div class="wizard-phase">
                    <div class="wizard-phase-header">
                        <div class="wizard-phase-icon">${phase.icon}</div>
                        <div class="wizard-phase-info">
                            <h3 class="wizard-phase-title">阶段 ${i + 1}：${phase.name}</h3>
                            <p class="wizard-phase-desc">${phase.description}</p>
                        </div>
                        <div class="wizard-phase-meta">
                            <span class="wizard-phase-time">${phase.weeks}</span>
                            <span class="wizard-phase-hours">${formatHours(phaseHours)}</span>
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
                        <div class="wizard-result-stat-label">总学习时长</div>
                    </div>
                    <div class="wizard-result-stat">
                        <div class="wizard-result-stat-value">${r.totalCourses}</div>
                        <div class="wizard-result-stat-label">推荐课程</div>
                    </div>
                    <div class="wizard-result-stat">
                        <div class="wizard-result-stat-value">${r.difficultyRange.label}</div>
                        <div class="wizard-result-stat-label">难度范围</div>
                    </div>
                    <div class="wizard-result-stat">
                        <div class="wizard-result-stat-value">${r.totalPhases}</div>
                        <div class="wizard-result-stat-label">学习阶段</div>
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
