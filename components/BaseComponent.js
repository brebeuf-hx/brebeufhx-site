class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.lang = navigator.language.split('-')[0] || 'en';
    }

    connectedCallback() {
        this.render();
        this.attachEventListeners();
        this.initializeLanguage();
    }

    render() {
        throw new Error('render() method must be implemented by child class');
    }

    attachEventListeners() {
        // Default implementation - can be overridden by child classes
    }

    // Common language handling methods
    initializeLanguage() {
        document.addEventListener('languageChanged', (e) => {
            this.lang = e.detail.language;
            this.updateLanguage();
        });
        
        // Set initial language based on the navbar's default
        const navbar = document.querySelector('navbar-component');
        if (navbar) {
            this.lang = navbar.lang;
        }
        this.updateLanguage();
    }

    updateLanguage() {
        // Update elements within this component
        this.querySelectorAll('[data-en][data-fr]').forEach(el => {
            const text = el.getAttribute(`data-${this.lang}`);
            if (text) {
                el.innerHTML = text;
            }
        });
        
        // Update placeholders for input elements within this component
        this.querySelectorAll('[data-en-placeholder][data-fr-placeholder]').forEach(el => {
            const placeholder = el.getAttribute(`data-${this.lang}-placeholder`);
            if (placeholder) {
                el.placeholder = placeholder;
            }
        });
    }
}

// customElements.define('base-component', BaseComponent);
