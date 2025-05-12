export function initScrollReveal(selector = '.section__item') {
    const elements = document.querySelectorAll(selector);
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // Unobserve once visible
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    });
  
    elements.forEach(el => observer.observe(el));
}
  