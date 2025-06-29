import { BaseComponent } from './BaseComponent.js';

class StatsCard extends BaseComponent {
    constructor() {
        super();
        this.rotation = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 1);
    }

    static get observedAttributes() {
        return ['number', 'label-en', 'label-fr'];
    }

    render() {
        const number = this.getAttribute('number') || '0';
        const labelEn = this.getAttribute('label-en') || 'Stat';
        const labelFr = this.getAttribute('label-fr') || 'Stat';

        this.innerHTML = /*html*/`
            <div class="overflow-hidden relative p-8 text-center bg-gradient-to-br rounded-3xl border shadow-2xl backdrop-blur-md transition-all duration-500 transform hover:bg-gradient-to-br from-white/20 to-white/10 hover:from-ice-blue-600/20 hover:to-ice-blue-600/10 border-white/30 hover:border-ice-blue-100/30 hover:scale-105 hover:rotate-[${this.rotation}deg] hover:shadow-3xl hover:-translate-y-2 group">
                <div class="mb-3 text-5xl font-extrabold text-white drop-shadow-lg transition-transform duration-300 md:text-6xl group-hover:scale-110">${number}</div>
                <div class="text-lg font-semibold tracking-wide uppercase text-ice-blue-100" data-en="${labelEn}" data-fr="${labelFr}">${labelEn}</div>
            </div>
        `;
    }
}

customElements.define('stats-card', StatsCard); 
