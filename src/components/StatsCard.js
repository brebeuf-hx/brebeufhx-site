import { BaseComponent } from './BaseComponent.js';

class StatsCard extends BaseComponent {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['number', 'label-en', 'label-fr'];
    }

    render() {
        const number = this.getAttribute('number') || '0';
        const labelEn = this.getAttribute('label-en') || 'Stat';
        const labelFr = this.getAttribute('label-fr') || 'Stat';

        this.innerHTML = `
            <div class="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">${number}</div>
                <div class="text-base text-ice-blue-100 font-medium" data-en="${labelEn}" data-fr="${labelFr}">${labelEn}</div>
            </div>
        `;
    }
}

customElements.define('stats-card', StatsCard); 
