/**
 * Inspirational Quote Component
 * Displays a random inspirational quote on each page load with fade-in animation
 */

const InspirationalQuote = {

    quotes: [
        // AI & Technology
        { text: '人工智能是新的电力。一百年前，电力几乎改变了一切；今天，AI也将如此。', author: 'Andrew Ng' },
        { text: 'AI is the new electricity.', author: 'Andrew Ng' },
        { text: '机器学习将自动化自动化本身。', author: 'Eric Schmidt' },
        { text: 'The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.', author: 'Edsger W. Dijkstra' },
        { text: '技术本身不是目的，它是放大人类能力的手段。', author: 'Demis Hassabis' },
        { text: 'Artificial intelligence would be the ultimate version of Google.', author: 'Larry Page' },
        { text: '深度学习的美妙之处在于，它让机器从经验中学习，就像人类一样。', author: 'Geoffrey Hinton' },
        { text: 'The development of full artificial intelligence could spell the end of the human race. But the potential benefits are enormous.', author: 'Stephen Hawking' },

        // Learning & Growth
        { text: '活到老，学到老。学习是终身的旅程，而非终点。', author: '古谚' },
        { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
        { text: '千里之行，始于足下。每一个专家都曾是初学者。', author: '老子' },
        { text: 'Education is not the filling of a pail, but the lighting of a fire.', author: 'W.B. Yeats' },
        { text: '学而不思则罔，思而不学则殆。', author: '孔子' },
        { text: 'The beautiful thing about learning is that nobody can take it away from you.', author: 'B.B. King' },

        // Innovation & Creativity
        { text: '创新就是把事物联系起来。当你问有创造力的人是怎么做到的，他们会感到有点内疚，因为他们并没有真正去做，只是看到了一些东西。', author: 'Steve Jobs' },
        { text: 'Innovation distinguishes between a leader and a follower.', author: 'Steve Jobs' },
        { text: '预测未来最好的方式就是创造它。', author: 'Alan Kay' },
        { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
        { text: '失败是成功之母。每一次失败都是向正确方向迈进的一步。', author: 'Thomas Edison' },
        { text: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.', author: 'Thomas Edison' },

        // Philosophy & Life
        { text: 'Stay hungry, stay foolish. 求知若饥，虚心若愚。', author: 'Steve Jobs' },
        { text: '世界上最快乐的事，莫过于为理想而奋斗。', author: '苏格拉底' },
        { text: 'The only limit to our realization of tomorrow will be our doubts of today.', author: 'Franklin D. Roosevelt' },
        { text: '知之为知之，不知为不知，是知也。', author: '孔子' },
        { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
        { text: '不经一番寒彻骨，怎得梅花扑鼻香。', author: '黄檗禅师' },
        { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
        { text: '少年强则国强，少年进步则国进步。', author: '梁启超' },
        { text: 'The journey of a thousand miles begins with a single step.', author: 'Lao Tzu' },
        { text: '路漫漫其修远兮，吾将上下而求索。', author: '屈原' },
    ],

    /**
     * Initialize the inspirational quote component
     */
    init() {
        this.container = document.getElementById('inspirationalQuote');
        if (!this.container) return;

        this.render();
    },

    /**
     * Get a random quote from the collection
     */
    getRandomQuote() {
        const index = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[index];
    },

    /**
     * Render the quote with fade-in animation
     */
    render() {
        const quote = this.getRandomQuote();

        // Start invisible
        this.container.style.opacity = '0';
        this.container.style.transform = 'translateY(12px)';
        this.container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        this.container.innerHTML = `
            <div class="section-divider"></div>
            <div class="iq-card">
                <div class="iq-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                    </svg>
                </div>
                <p class="iq-text">${quote.text}</p>
                <span class="iq-author">-- ${quote.author}</span>
            </div>
        `;

        // Trigger fade-in
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.container.style.opacity = '1';
                this.container.style.transform = 'translateY(0)';
            });
        });
    }
};
