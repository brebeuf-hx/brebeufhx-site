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
            <div class="text-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group">
                <div class="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">${number}</div>
                <div class="text-lg text-ice-blue-100 font-semibold tracking-wide uppercase" data-en="${labelEn}" data-fr="${labelFr}">${labelEn}</div>
            </div>
        `;
    }
}

customElements.define('stats-card', StatsCard); 
