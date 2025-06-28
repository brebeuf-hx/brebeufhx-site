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
            <div class="bg-gradient-to-br from-white to-ice-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-5 border border-ice-blue-100/50 backdrop-blur-sm relative overflow-hidden group">
                <div class="text-4xl mb-6 transform group-hover:scale-125 transition-all duration-300 origin-left">${icon}</div>
                <h3 class="text-2xl font-bold text-ice-blue-800 mb-4 group-hover:text-ice-blue-700 transition-colors duration-300" data-en="${titleEn}" data-fr="${titleFr}">${titleEn}</h3>
                <p class="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" data-en="${descEn}" data-fr="${descFr}">${descEn}</p>
            </div>
        `;
    }
}

customElements.define('feature-card', FeatureCard); 
