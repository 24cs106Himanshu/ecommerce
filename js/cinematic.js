/* =====================================================
   NEXUSGEAR · CINEMATIC JS — Clean rewrite
   Scroll animations, parallax, counters, home chips
   ===================================================== */

(function() {

  /* ── IntersectionObserver for reveal animations ── */
  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        if (!entry.target.classList.contains('product-card')) {
          revealObs.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function observeAll() {
    var selectors = [
      '.reveal-up', '.slide-from-left', '.slide-from-right',
      '.slide-from-bottom', '.c-feature-full__img-wrap', '.product-card'
    ];
    document.querySelectorAll(selectors.join(',')).forEach(function(el) {
      revealObs.observe(el);
    });
  }

  /* ── Hero image fade-in ── */
  function initHero() {
    var img = document.getElementById('heroImg');
    if (!img) return;
    function onLoad() { img.classList.add('loaded'); }
    if (img.complete && img.naturalWidth > 0) onLoad();
    else img.addEventListener('load', onLoad);
  }

  /* ── Header: transparent → solid on scroll ── */
  function initHeader() {
    var header = document.getElementById('siteHeader');
    if (!header) return;
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── Counter animation ── */
  function animateCount(el) {
    var target = +el.dataset.count;
    var start = performance.now();
    var duration = 1600;
    function tick(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var counterObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  function initCounters() {
    document.querySelectorAll('.c-stat__num').forEach(function(el) {
      counterObs.observe(el);
    });
  }

  /* ── Subtle parallax on hero image ── */
  function initHeroParallax() {
    var img = document.getElementById('heroImg');
    if (!img) return;
    window.addEventListener('scroll', function() {
      img.style.transform = 'scale(1) translateY(' + (window.scrollY * 0.22) + 'px)';
    }, { passive: true });
  }

  /* ── Home: category chip filter ── */
  function initHomeChips() {
    var wrap = document.getElementById('homeCatChips');
    var grid = document.getElementById('homeProductGrid');
    if (!wrap || !grid || !window.PRODUCTS) return;

    var activeCat = 'all';

    function renderHome() {
      var list = window.PRODUCTS;
      if (activeCat === 'new')  list = list.filter(function(p) { return p.tag === 'new'; });
      else if (activeCat === 'sale') list = list.filter(function(p) { return p.tag === 'sale'; });
      else if (activeCat !== 'all')  list = list.filter(function(p) { return p.cat === activeCat; });
      list = list.slice(0, 8);

      grid.innerHTML = list.map(function(p) { return window.productCardHTML(p); }).join('');
      window.attachCardEvents(grid);

      // Stagger + observe new cards
      setTimeout(function() {
        grid.querySelectorAll('.product-card').forEach(function(card, i) {
          card.style.transitionDelay = (i * 0.07) + 's';
          revealObs.observe(card);
        });
      }, 30);
    }

    wrap.addEventListener('click', function(e) {
      var chip = e.target.closest('.c-chip');
      if (!chip) return;
      wrap.querySelectorAll('.c-chip').forEach(function(c) { c.classList.remove('active'); });
      chip.classList.add('active');
      activeCat = chip.dataset.cat;
      renderHome();
    });

    renderHome();
  }

  /* ── Newsletter ── */
  function initNewsletter() {
    var form = document.getElementById('nlForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('nlEmail');
      if (window.toast) window.toast('Subscribed with ' + email.value + ' 🎮', 'success');
      email.value = '';
    });
  }

  /* ── Boot ── */
  document.addEventListener('DOMContentLoaded', function() {
    initHero();
    initHeader();
    initCounters();
    initHeroParallax();
    initHomeChips();
    initNewsletter();
    setTimeout(observeAll, 100);
  });

  // Expose so external code can re-observe after DOM changes
  window.cinematicObserveAll = observeAll;

})();
