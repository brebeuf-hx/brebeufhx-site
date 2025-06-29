import { BaseComponent } from './BaseComponent.js';

class FeatureCard extends BaseComponent {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['icon', 'title-en', 'title-fr', 'description-en', 'description-fr'];
    }

    render() {
        const icon = this.getAttribute('icon') || '💡';
        const titleEn = this.getAttribute('title-en') || 'Feature';
        const titleFr = this.getAttribute('title-fr') || 'Fonctionnalité';
        const descEn = this.getAttribute('description-en') || 'Description';
        const descFr = this.getAttribute('description-fr') || 'Description';

        this.innerHTML = /*html*/`
            <div class="overflow-hidden relative p-8 bg-gradient-to-br from-white rounded-3xl border shadow-xl backdrop-blur-sm transition-all duration-500 transform to-ice-blue-50 hover:shadow-2xl hover:-translate-y-5 border-ice-blue-100/50 group">
                <div class="mb-6 text-4xl transition-all duration-300 transform origin-left group-hover:scale-125">${icon}</div>
                <h3 class="mb-4 text-2xl font-bold transition-colors duration-300 text-ice-blue-800 group-hover:text-ice-blue-700" data-en="${titleEn}" data-fr="${titleFr}">${titleEn}</h3>
                <p class="text-base leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700" data-en="${descEn}" data-fr="${descFr}">${descEn}</p>
            </div>
        `;
    }
}

customElements.define('feature-card', FeatureCard); 
