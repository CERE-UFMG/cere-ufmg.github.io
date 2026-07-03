/* ============================================================
   CERE — Centro de Estudos em Real Estate | UFMG
   main.js — Language toggle, navigation, UI components
   ============================================================ */

/* ----------------------------------------------------------
   LANGUAGE TOGGLE
   ---------------------------------------------------------- */
const html = document.documentElement;
const langBtns = document.querySelectorAll('.lang-btn');

function setLang(lang) {
  html.classList.remove('lang-pt', 'lang-en');
  html.classList.add('lang-' + lang);
  html.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  localStorage.setItem('cere-lang', lang);
  langBtns.forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

langBtns.forEach(function (btn) {
  btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
});

/* Restore saved language or default to PT */
const savedLang = localStorage.getItem('cere-lang') || 'pt';
setLang(savedLang);

/* ----------------------------------------------------------
   MOBILE HAMBURGER NAV
   ---------------------------------------------------------- */
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

if (hamburger && mainNav) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
  });

  /* Mobile: tap on dropdown parent to toggle dropdown */
  document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = link.parentElement;
        parent.classList.toggle('open');
      }
    });
  });

  /* Close nav when a leaf link is clicked on mobile */
  mainNav.querySelectorAll('.dropdown a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove('open');
        mainNav.classList.remove('open');
      }
    });
  });
}

/* ----------------------------------------------------------
   ACCORDION
   ---------------------------------------------------------- */
document.querySelectorAll('.accordion-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');

    /* Close all in same accordion */
    const accordion = btn.closest('.accordion');
    accordion.querySelectorAll('.accordion-btn').forEach(function (b) {
      b.classList.remove('open');
      b.nextElementSibling.style.maxHeight = null;
    });

    /* Open clicked if it was closed */
    if (!isOpen) {
      btn.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

/* ----------------------------------------------------------
   TABS
   ---------------------------------------------------------- */
document.querySelectorAll('.tab-group').forEach(function (group) {
  group.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.dataset.tab;
      group.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
      group.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      const panel = group.querySelector('[data-panel="' + target + '"]');
      if (panel) panel.classList.add('active');
    });
  });
});

/* ----------------------------------------------------------
   SMOOTH SCROLL for anchor links
   ---------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
