import { BaseComponent } from './BaseComponent.js';

class FeatureCard extends BaseComponent {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['title-en', 'title-fr', 'description-en', 'description-fr'];
    }

    render() {
        const titleEn = this.getAttribute('title-en') || 'Feature';
        const titleFr = this.getAttribute('title-fr') || 'Fonctionnalité';
        const descEn = this.getAttribute('description-en') || 'Description';
        const descFr = this.getAttribute('description-fr') || 'Description';

        this.innerHTML = /*html*/`
        <div class="overflow-hidden relative p-8 bg-ice-blue-50 rounded-3xl border backdrop-blur-sm transition-all duration-500 transform hover:scale-105 border-ice-blue-100/50 group hover:-translate-y-2">
            <h3 class="mb-4 text-2xl font-bold transition-colors duration-300 text-ice-blue-800 group-hover:text-ice-blue-700" data-en="${titleEn}" data-fr="${titleFr}">${titleEn}</h3>
            <p class="text-base leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700" data-en="${descEn}" data-fr="${descFr}">${descEn}</p>
        </div>
        `;
    }
}

customElements.define('feature-card', FeatureCard); 
