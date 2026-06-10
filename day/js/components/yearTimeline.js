/* ==========================================================================
   Year Timeline — Annual progress bar component
   ========================================================================== */

const YearTimeline = (() => {
  const MONTHS = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  const MONTHS_SHORT = ['1','2','3','4','5','6','7','8','9','10','11','12'];

  // Season definitions (meteorological, Northern Hemisphere)
  // Spring: Mar-May, Summer: Jun-Aug, Autumn: Sep-Nov, Winter: Dec-Feb
  const SEASONS = [
    { name: '春', color: '#34c759', months: [2, 3, 4] },   // Mar(2), Apr(3), May(4)
    { name: '夏', color: '#ff9f0a', months: [5, 6, 7] },   // Jun(5), Jul(6), Aug(7)
    { name: '秋', color: '#af52de', months: [8, 9, 10] },  // Sep(8), Oct(9), Nov(10)
    { name: '冬', color: '#0071e3', months: [11, 0, 1] },  // Dec(11), Jan(0), Feb(1)
  ];

  function getSeasonForMonth(monthIndex) {
    return SEASONS.find(s => s.months.includes(monthIndex));
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  function getDaysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  function getMonthPositions(year) {
    const totalDays = getDaysInYear(year);
    const positions = [];
    for (let m = 0; m < 12; m++) {
      const dayStart = getDayOfYear(new Date(year, m, 1));
      positions.push((dayStart / totalDays) * 100);
    }
    return positions;
  }

  function formatDate(date) {
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${m}月${d}日`;
  }

  function buildHTML(container, data) {
    const { year, dayOfYear, totalDays, percentage, monthPositions, today } = data;
    const currentMonth = today.getMonth();
    const currentSeason = getSeasonForMonth(currentMonth);

    let seasonLabelsHTML = '';
    SEASONS.forEach(s => {
      const startMonth = s.months[0];
      const endMonth = s.months[s.months.length - 1];
      const startPos = monthPositions[startMonth];
      const endPos = endMonth === 11 ? 100 : monthPositions[endMonth + 1];
      const width = endPos - startPos;
      seasonLabelsHTML += `
        <div class="yt-season-label" style="left:${startPos}%;width:${width}%;--season-color:${s.color}">
          <span class="yt-season-dot" style="background:${s.color}"></span>
          <span class="yt-season-name">${s.name}</span>
        </div>`;
    });

    let monthTicksHTML = '';
    MONTHS_SHORT.forEach((label, i) => {
      const pos = monthPositions[i];
      const isCurrent = i === currentMonth;
      monthTicksHTML += `
        <div class="yt-month-tick${isCurrent ? ' yt-month-tick--current' : ''}" style="left:${pos}%">
          <div class="yt-month-tick-line"></div>
          <div class="yt-month-tick-label">${label}</div>
        </div>`;
    });

    container.innerHTML = `
      <div class="yt-card">
        <div class="yt-header">
          <div class="yt-header-left">
            <span class="yt-header-icon">📅</span>
            <span class="yt-header-title">每年时间进度</span>
          </div>
          <div class="yt-header-right">
            <span class="yt-year">${year}</span>
          </div>
        </div>

        <div class="yt-body">
          <div class="yt-info-row">
            <div class="yt-info-item">
              <span class="yt-info-value" id="ytDays">${dayOfYear}</span>
              <span class="yt-info-label">已过天数</span>
            </div>
            <div class="yt-info-divider"></div>
            <div class="yt-info-item">
              <span class="yt-info-value">${totalDays}</span>
              <span class="yt-info-label">全年天数</span>
            </div>
            <div class="yt-info-divider"></div>
            <div class="yt-info-item">
              <span class="yt-info-value" id="ytPercent">${percentage.toFixed(1)}%</span>
              <span class="yt-info-label">已完成</span>
            </div>
            <div class="yt-info-divider"></div>
            <div class="yt-info-item">
              <span class="yt-info-value" style="color:${currentSeason.color}">${currentSeason.name}</span>
              <span class="yt-info-label">当前季节</span>
            </div>
          </div>

          <div class="yt-track-wrapper">
            <div class="yt-seasons-row">
              ${seasonLabelsHTML}
            </div>
            <div class="yt-track">
              <div class="yt-track-fill" id="ytTrackFill" style="width:0%"></div>
              <div class="yt-months-row">
                ${monthTicksHTML}
              </div>
              <div class="yt-current-marker" id="ytMarker" style="left:${percentage}%">
                <div class="yt-marker-label">${formatDate(today)}</div>
                <div class="yt-marker-arrow"></div>
                <div class="yt-marker-dot"></div>
              </div>
            </div>
          </div>

          <div class="yt-footer-row">
            <span class="yt-footer-text">还剩 <strong>${totalDays - dayOfYear}</strong> 天</span>
            <span class="yt-footer-text">今天：${today.getFullYear()}年${formatDate(today)}</span>
          </div>
        </div>
      </div>`;
  }

  function animate(container) {
    const fill = container.querySelector('#ytTrackFill');
    const marker = container.querySelector('#ytMarker');
    const daysEl = container.querySelector('#ytDays');
    const percentEl = container.querySelector('#ytPercent');

    if (!fill) return;

    const now = new Date();
    const totalDays = getDaysInYear(now.getFullYear());
    const dayOfYear = getDayOfYear(now);
    const targetPercent = (dayOfYear / totalDays) * 100;

    // Respect reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      fill.style.width = targetPercent + '%';
      return;
    }

    // Animate the fill bar from 0 to target
    const duration = 1200;
    const startTime = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const currentPercent = targetPercent * eased;
      const currentDay = Math.round(dayOfYear * eased);

      fill.style.width = currentPercent + '%';

      if (daysEl) daysEl.textContent = currentDay;
      if (percentEl) percentEl.textContent = (currentPercent).toFixed(1) + '%';

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  function init() {
    const container = document.getElementById('yearTimeline');
    if (!container) return;

    const now = new Date();
    const year = now.getFullYear();
    const totalDays = getDaysInYear(year);
    const dayOfYear = getDayOfYear(now);
    const percentage = (dayOfYear / totalDays) * 100;
    const monthPositions = getMonthPositions(year);

    buildHTML(container, {
      year,
      dayOfYear,
      totalDays,
      percentage,
      monthPositions,
      today: now,
    });

    // Use IntersectionObserver to trigger animation when visible
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animate(container);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(container);
    } else {
      animate(container);
    }
  }

  return { init };
})();
