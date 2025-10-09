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
        <div class="overflow-hidden relative p-6 bg-ice-blue-50 rounded-lg border backdrop-blur-sm border-ice-blue-300">
            <h3 class="mb-4 text-2xl font-bold text-ice-blue-800" data-en="${titleEn}" data-fr="${titleFr}">${titleEn}</h3>
            <p class="text-base leading-relaxed text-gray-600" data-en="${descEn}" data-fr="${descFr}">${descEn}</p>
        </div>
        `;
    }
}

customElements.define('feature-card', FeatureCard); 
