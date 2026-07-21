/**
 * Cosmic Particle Field — Hero background effect
 * Renders floating particles with connections on a canvas
 */

const Particles = {
  canvas: null,
  ctx: null,
  particles: [],
  mouse: { x: -1000, y: -1000 },
  dpr: 1,
  width: 0,
  height: 0,
  animId: null,

  CONFIG: {
    count: 60,
    maxSpeed: 0.25,
    size: { min: 1.5, max: 3 },
    connectDistance: 120,
    mouseRadius: 150,
    colors: ['rgba(0,113,227,', 'rgba(88,86,214,', 'rgba(175,82,222,'],
  },

  init() {
    this.canvas = document.getElementById('particleCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  },

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.ctx.scale(this.dpr, this.dpr);
  },

  createParticles() {
    this.particles = [];
    const { count, maxSpeed, size, colors } = this.CONFIG;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * maxSpeed,
        vy: (Math.random() - 0.5) * maxSpeed,
        size: size.min + Math.random() * (size.max - size.min),
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.15 + Math.random() * 0.25,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }
  },

  bindEvents() {
    const hero = this.canvas.parentElement;
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    hero.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.resize();
        this.createParticles();
      }, 200);
    });
  },

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const p of this.particles) {
      // Pulse alpha
      p.pulse += p.pulseSpeed;
      const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;

      // Mouse repulsion
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < this.CONFIG.mouseRadius) {
        const force = (1 - dist / this.CONFIG.mouseRadius) * 0.8;
        p.vx += (dx / dist) * force * 0.15;
        p.vy += (dy / dist) * force * 0.15;
      }

      // Damping
      p.vx *= 0.995;
      p.vy *= 0.995;

      // Speed limit
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > this.CONFIG.maxSpeed * 2) {
        p.vx = (p.vx / speed) * this.CONFIG.maxSpeed * 2;
        p.vy = (p.vy / speed) * this.CONFIG.maxSpeed * 2;
      }

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color + currentAlpha + ')';
      this.ctx.fill();
    }

    // Draw connections
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i];
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.CONFIG.connectDistance) {
          const alpha = (1 - dist / this.CONFIG.connectDistance) * 0.08;
          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.strokeStyle = `rgba(0, 113, 227, ${alpha})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }

    this.animId = requestAnimationFrame(() => this.animate());
  },

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  },
};
