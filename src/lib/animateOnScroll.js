// Animate elements on scroll //
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fade-in-up');
      }
  });
}, observerOptions);

// Observe elements for animation //
document.querySelectorAll('.animate-scroll').forEach((element) => {
  element.classList.add('opacity-0');
  observer.observe(element);
});
