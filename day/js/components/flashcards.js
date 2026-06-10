/**
 * Day — Do AI Yourself
 * Flashcards Component
 */

var Flashcards = {
    STORAGE_KEY: 'day_flashcard_progress',
    cards: [],
    filteredCards: [],
    currentIndex: 0,
    currentDomain: null,
    filter: 'all',
    isFlipped: false,

    init: function() {
        this.container = document.getElementById('flashcardContainer');
        if (!this.container) return;
        this.renderDomainTabs();
    },

    renderDomainTabs: function() {
        var html = '<div class="fc-wrapper">';
        html += '<div class="fc-domain-tabs">';

        var domains = (typeof DOMAINS !== 'undefined') ? DOMAINS : [];
        for (var i = 0; i < domains.length; i++) {
            var d = domains[i];
            var count = (FLASHCARDS[d.id] || []).length;
            if (count === 0) continue;
            html += '<button class="fc-domain-tab" onclick="Flashcards.loadDomain(\'' + d.id + '\')" data-domain="' + d.id + '">';
            html += d.icon + ' ' + d.name + ' <span class="fc-domain-count">(' + count + ')</span>';
            html += '</button>';
        }

        html += '</div>';
        html += '<div class="fc-content" id="fcContent">';
        html += '<div class="fc-empty">👆 选择一个领域开始学习</div>';
        html += '</div>';
        html += '</div>';

        this.container.innerHTML = html;
    },

    loadDomain: function(domainId) {
        this.currentDomain = domainId;
        this.cards = getFlashcardsByDomain(domainId);
        this.filteredCards = this.cards.slice();
        this.currentIndex = 0;
        this.filter = 'all';
        this.isFlipped = false;

        var tabs = this.container.querySelectorAll('.fc-domain-tab');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.toggle('active', tabs[i].dataset.domain === domainId);
        }

        this.renderCard();
    },

    renderCard: function() {
        var content = document.getElementById('fcContent');
        if (!content) return;

        if (!this.filteredCards.length) {
            content.innerHTML = '<div class="fc-empty">该领域暂无卡片</div>';
            return;
        }

        var card = this.filteredCards[this.currentIndex];
        var progress = this.getCardProgress(card.id);
        var stats = this.getStats();
        var domain = getDomainById ? getDomainById(card.domain) : null;
        var domainColor = domain ? domain.color : 'var(--accent)';

        var html = '';

        // Filter bar
        html += '<div class="fc-filter-bar">';
        html += '<button class="fc-filter-btn' + (this.filter === 'all' ? ' active' : '') + '" onclick="Flashcards.setFilter(\'all\')">全部 (' + this.cards.length + ')</button>';
        html += '<button class="fc-filter-btn' + (this.filter === 'review' ? ' active' : '') + '" onclick="Flashcards.setFilter(\'review\')">需复习 (' + stats.review + ')</button>';
        html += '<button class="fc-filter-btn' + (this.filter === 'mastered' ? ' active' : '') + '" onclick="Flashcards.setFilter(\'mastered\')">已掌握 (' + stats.mastered + ')</button>';
        html += '</div>';

        // Card counter
        html += '<div class="fc-counter">' + (this.currentIndex + 1) + ' / ' + this.filteredCards.length + '</div>';

        // Flashcard with 3D flip
        html += '<div class="fc-card' + (this.isFlipped ? ' fc-card--flipped' : '') + '" onclick="Flashcards.flipCard()">';
        html += '<div class="fc-card-inner">';

        // Front
        html += '<div class="fc-card-front">';
        html += '<span class="fc-card-domain" style="background:' + domainColor + '22;color:' + domainColor + '">' + (domain ? domain.name : card.domain) + '</span>';
        html += '<div class="fc-card-concept">' + card.concept + '</div>';
        html += '<div class="fc-card-hint">点击查看定义 →</div>';
        html += '</div>';

        // Back
        html += '<div class="fc-card-back">';
        html += '<div class="fc-card-concept-back">' + card.concept + '</div>';
        html += '<div class="fc-card-definition">' + card.definition + '</div>';
        if (card.formula) {
            html += '<div class="fc-card-formula">' + card.formula + '</div>';
        }
        if (card.keyPoints && card.keyPoints.length) {
            html += '<ul class="fc-card-points">';
            for (var j = 0; j < card.keyPoints.length; j++) {
                html += '<li>' + card.keyPoints[j] + '</li>';
            }
            html += '</ul>';
        }
        html += '</div>';

        html += '</div>'; // fc-card-inner
        html += '</div>'; // fc-card

        // Navigation
        html += '<div class="fc-nav">';
        html += '<button class="fc-nav-btn" onclick="Flashcards.prevCard()" ' + (this.currentIndex === 0 ? 'disabled' : '') + '>← 上一张</button>';
        html += '<div class="fc-nav-actions">';
        html += '<button class="fc-mark-btn fc-mark-btn--review' + (progress === 'review' ? ' active' : '') + '" onclick="Flashcards.markReview()">🔄 需复习</button>';
        html += '<button class="fc-mark-btn fc-mark-btn--mastered' + (progress === 'mastered' ? ' active' : '') + '" onclick="Flashcards.markMastered()">✅ 已掌握</button>';
        html += '</div>';
        html += '<button class="fc-nav-btn" onclick="Flashcards.nextCard()" ' + (this.currentIndex >= this.filteredCards.length - 1 ? 'disabled' : '') + '>下一张 →</button>';
        html += '</div>';

        content.innerHTML = html;
    },

    flipCard: function() {
        this.isFlipped = !this.isFlipped;
        var card = this.container.querySelector('.fc-card');
        if (card) card.classList.toggle('fc-card--flipped', this.isFlipped);
    },

    markMastered: function() {
        var card = this.filteredCards[this.currentIndex];
        this.updateCardProgress(card.id, 'mastered');
        this.showToastForMark('✅ 已标记为掌握');
        this.applyFilter();
        if (this.currentIndex >= this.filteredCards.length) this.currentIndex = Math.max(0, this.filteredCards.length - 1);
        this.isFlipped = false;
        this.renderCard();
    },

    markReview: function() {
        var card = this.filteredCards[this.currentIndex];
        this.updateCardProgress(card.id, 'review');
        this.showToastForMark('🔄 已标记需复习');
        this.nextCard();
    },

    nextCard: function() {
        if (this.currentIndex < this.filteredCards.length - 1) {
            this.currentIndex++;
            this.isFlipped = false;
            this.renderCard();
        }
    },

    prevCard: function() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.isFlipped = false;
            this.renderCard();
        }
    },

    setFilter: function(filter) {
        this.filter = filter;
        this.currentIndex = 0;
        this.isFlipped = false;
        this.applyFilter();
        this.renderCard();
    },

    applyFilter: function() {
        var self = this;
        if (this.filter === 'all') {
            this.filteredCards = this.cards.slice();
        } else {
            this.filteredCards = this.cards.filter(function(c) {
                return self.getCardProgress(c.id) === self.filter;
            });
        }
    },

    getCardProgress: function(cardId) {
        var all = Storage.get(this.STORAGE_KEY, {});
        return all[cardId] || 'new';
    },

    updateCardProgress: function(cardId, status) {
        var all = Storage.get(this.STORAGE_KEY, {});
        all[cardId] = status;
        Storage.set(this.STORAGE_KEY, all);
    },

    getStats: function() {
        var all = Storage.get(this.STORAGE_KEY, {});
        var mastered = 0, review = 0;
        for (var key in all) {
            if (all[key] === 'mastered') mastered++;
            else if (all[key] === 'review') review++;
        }
        return { total: this.cards.length, mastered: mastered, review: review };
    },

    showToastForMark: function(msg) {
        if (typeof showToast === 'function') {
            showToast(msg, 'success', 1500);
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Flashcards;
}
