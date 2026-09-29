// ==========================================================
// Christian Missionary Bilingual School — Site Script
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {

  // --- Footer year ---
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Mobile nav toggle ---
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Highlight active nav link while scrolling ---
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.site-nav a:not(.btn)');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.style.color = link.getAttribute('href') === '#' + id ? 'var(--orange-dark)' : '';
          });
        }
      });
    }, { rootMargin: '-50% 0px -45% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

});
