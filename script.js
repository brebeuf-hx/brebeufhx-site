// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation //
document.querySelectorAll('.animate-scroll').forEach(el => {
    observer.observe(el);
});

// Global language management //
let currentLang = 'en';

function updateGlobalLanguage() {
    // Update all elements with data-en and data-fr attributes that are not inside components
    document.querySelectorAll(':not(faq-item):not(timeline-item):not(navbar-component):not(feature-card):not(navbar-component):not(base-component) [data-en][data-fr]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) {
            el.innerHTML = text;
        }
    });
    
    // Update placeholders for input elements
    document.querySelectorAll(':not(faq-item):not(timeline-item):not(navbar-component):not(feature-card):not(navbar-component):not(base-component) [data-en-placeholder][data-fr-placeholder]').forEach(el => {
        const placeholder = el.getAttribute(`data-${currentLang}-placeholder`);
        if (placeholder) {
            el.placeholder = placeholder;
        }
    });
}

// Set initial language based on navbar's default
const navbar = document.querySelector('navbar-component');
if (navbar) {
    currentLang = navbar.lang || 'en';
}
updateGlobalLanguage();

// Listen for language changes
document.addEventListener('languageChanged', (e) => {
    currentLang = e.detail.language;
    updateGlobalLanguage();
});
