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

        this.innerHTML = `
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-ice-blue-100">
                <div class="text-3xl mb-4">${icon}</div>
                <h3 class="text-2xl font-bold text-ice-blue-800 mb-3" data-en="${titleEn}" data-fr="${titleFr}">${titleEn}</h3>
                <p class="text-base text-gray-600 leading-relaxed" data-en="${descEn}" data-fr="${descFr}">${descEn}</p>
            </div>
        `;
    }
}

customElements.define('feature-card', FeatureCard); 
