import { updateTextLanguage } from '../lib/i18n.js';

export class BaseComponent extends HTMLElement {
    constructor() {
        super();
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
            updateTextLanguage(this);
        });
        updateTextLanguage(this);
    }
}
