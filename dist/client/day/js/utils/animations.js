/**
 * Animation Utilities
 * Handle scroll animations and visual effects
 */

/**
 * Intersection Observer for scroll animations
 * Adds 'visible' class to elements when they enter viewport
 */
class ScrollAnimator {
    constructor(options = {}) {
        this.options = {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px 0px -50px 0px',
            animateClass: options.animateClass || 'visible',
            ...options
        };

        this.observer = null;
        this.elements = new Set();

        this.init();
    }

    /**
     * Initialize the observer
     */
    init() {
        if (!('IntersectionObserver' in window)) {
            // Fallback: show all elements immediately
            this.showAll();
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: this.options.threshold,
                rootMargin: this.options.rootMargin
            }
        );
    }

    /**
     * Handle intersection entries
     * @param {Array} entries - IntersectionObserver entries
     */
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(this.options.animateClass);
                this.observer.unobserve(entry.target);
                this.elements.delete(entry.target);
            }
        });
    }

    /**
     * Observe an element
     * @param {HTMLElement} element - Element to observe
     */
    observe(element) {
        if (!element) return;

        if (!this.observer) {
            // Fallback: show immediately
            element.classList.add(this.options.animateClass);
            return;
        }

        this.elements.add(element);
        this.observer.observe(element);
    }

    /**
     * Observe multiple elements
     * @param {NodeList|Array} elements - Elements to observe
     */
    observeAll(elements) {
        elements.forEach(el => this.observe(el));
    }

    /**
     * Show all observed elements immediately
     */
    showAll() {
        this.elements.forEach(el => {
            el.classList.add(this.options.animateClass);
        });
        this.elements.clear();
    }

    /**
     * Disconnect the observer
     */
    disconnect() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.elements.clear();
    }
}

/**
 * Animate a counter from start to end value
 * @param {HTMLElement} element - Element to animate
 * @param {number} endValue - Target value
 * @param {number} duration - Animation duration in ms
 * @param {string} suffix - Suffix to add (e.g., '+')
 */
function animateCounter(element, endValue, duration = 1000, suffix = '') {
    if (!element) return;

    const startValue = parseInt(element.textContent) || 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const eased = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.round(startValue + (endValue - startValue) * eased);
        element.textContent = formatNumber(currentValue) + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/**
 * Animate element opacity and transform
 * @param {HTMLElement} element - Element to animate
 * @param {Object} from - Starting styles
 * @param {Object} to - Ending styles
 * @param {number} duration - Animation duration in ms
 * @returns {Promise} Resolves when animation completes
 */
function animateStyles(element, from, to, duration = 300) {
    return new Promise(resolve => {
        if (!element) {
            resolve();
            return;
        }

        // Apply starting styles
        Object.entries(from).forEach(([key, value]) => {
            element.style[key] = value;
        });

        // Force reflow
        element.offsetHeight;

        // Set transition
        element.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

        // Apply ending styles
        Object.entries(to).forEach(([key, value]) => {
            element.style[key] = value;
        });

        // Clean up after animation
        setTimeout(() => {
            element.style.transition = '';
            resolve();
        }, duration);
    });
}

/**
 * Fade in an element
 * @param {HTMLElement} element - Element to fade in
 * @param {number} duration - Animation duration in ms
 * @returns {Promise} Resolves when animation completes
 */
function fadeIn(element, duration = 300) {
    return animateStyles(
        element,
        { opacity: '0', transform: 'translateY(10px)' },
        { opacity: '1', transform: 'translateY(0)' },
        duration
    );
}

/**
 * Fade out an element
 * @param {HTMLElement} element - Element to fade out
 * @param {number} duration - Animation duration in ms
 * @returns {Promise} Resolves when animation completes
 */
function fadeOut(element, duration = 300) {
    return animateStyles(
        element,
        { opacity: '1', transform: 'translateY(0)' },
        { opacity: '0', transform: 'translateY(10px)' },
        duration
    );
}

/**
 * Slide down an element (show)
 * @param {HTMLElement} element - Element to slide down
 * @param {number} duration - Animation duration in ms
 * @returns {Promise} Resolves when animation completes
 */
function slideDown(element, duration = 300) {
    if (!element) return Promise.resolve();

    element.style.display = 'block';
    const height = element.scrollHeight;

    return animateStyles(
        element,
        { height: '0', opacity: '0', overflow: 'hidden' },
        { height: height + 'px', opacity: '1', overflow: 'hidden' },
        duration
    ).then(() => {
        element.style.height = '';
        element.style.overflow = '';
    });
}

/**
 * Slide up an element (hide)
 * @param {HTMLElement} element - Element to slide up
 * @param {number} duration - Animation duration in ms
 * @returns {Promise} Resolves when animation completes
 */
function slideUp(element, duration = 300) {
    if (!element) return Promise.resolve();

    const height = element.scrollHeight;

    return animateStyles(
        element,
        { height: height + 'px', opacity: '1', overflow: 'hidden' },
        { height: '0', opacity: '0', overflow: 'hidden' },
        duration
    ).then(() => {
        element.style.display = 'none';
        element.style.height = '';
        element.style.overflow = '';
    });
}

/**
 * Add a ripple effect to an element
 * @param {HTMLElement} element - Element to add ripple to
 * @param {Event} event - Click event
 */
function addRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Stagger animation for multiple elements
 * @param {NodeList|Array} elements - Elements to animate
 * @param {number} delay - Delay between each element in ms
 * @param {Function} animationFn - Animation function to apply
 */
function staggerAnimation(elements, delay = 50, animationFn = fadeIn) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            animationFn(element);
        }, index * delay);
    });
}

/**
 * Typewriter effect for text
 * @param {HTMLElement} element - Element to add effect to
 * @param {string} text - Text to type
 * @param {number} speed - Typing speed in ms per character
 * @returns {Promise} Resolves when typing completes
 */
function typewriterEffect(element, text, speed = 50) {
    return new Promise(resolve => {
        if (!element) {
            resolve();
            return;
        }

        let index = 0;
        element.textContent = '';

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }

        type();
    });
}

/**
 * Smooth number transition
 * @param {HTMLElement} element - Element to animate
 * @param {number} targetValue - Target number
 * @param {number} duration - Animation duration in ms
 */
function smoothNumberTransition(element, targetValue, duration = 500) {
    if (!element) return;

    const startValue = parseInt(element.textContent) || 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.round(startValue + (targetValue - startValue) * eased);
        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/**
 * Parallax scroll effect
 * @param {HTMLElement} element - Element to apply parallax to
 * @param {number} speed - Parallax speed (0-1)
 */
function parallaxScroll(element, speed = 0.5) {
    if (!element) return;

    function update() {
        const scrolled = window.pageYOffset;
        const rect = element.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const offset = (centerY - window.innerHeight / 2) * speed;

        element.style.transform = `translateY(${offset}px)`;
    }

    window.addEventListener('scroll', update, { passive: true });
    update();

    return () => window.removeEventListener('scroll', update);
}

/**
 * Create a loading skeleton
 * @param {string} type - Type: 'text', 'title', 'avatar', 'card'
 * @returns {HTMLElement} Skeleton element
 */
function createSkeleton(type = 'text') {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton';

    const templates = {
        text: '<div class="skeleton skeleton-text"></div>',
        title: '<div class="skeleton skeleton-title"></div>',
        avatar: '<div class="skeleton skeleton-avatar"></div>',
        card: `
            <div style="padding: 20px;">
                <div class="skeleton skeleton-avatar" style="margin-bottom: 12px;"></div>
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text" style="width: 60%;"></div>
            </div>
        `
    };

    skeleton.innerHTML = templates[type] || templates.text;
    return skeleton;
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ScrollAnimator,
        animateCounter,
        animateStyles,
        fadeIn,
        fadeOut,
        slideDown,
        slideUp,
        addRippleEffect,
        staggerAnimation,
        typewriterEffect,
        smoothNumberTransition,
        parallaxScroll,
        createSkeleton
    };
}