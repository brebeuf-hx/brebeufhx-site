import { BaseComponent } from './BaseComponent.js';

class TimelineItem extends BaseComponent {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['time', 'title-en', 'title-fr', 'description-en', 'description-fr'];
    }

    render() {
        const time = this.getAttribute('time') || '9:00 AM';
        const titleEn = this.getAttribute('title-en') || 'Event';
        const titleFr = this.getAttribute('title-fr') || 'Événement';
        const descEn = this.getAttribute('description-en') || 'Description';
        const descFr = this.getAttribute('description-fr') || 'Description';
        const index = parseInt(this.getAttribute('index')) || 0;

        this.innerHTML = `
            <div class="flex items-center">
                <div class="w-5 h-5 bg-ice-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 shadow-lg border-2 border-white"></div>
                <div class="bg-gray-50 p-8 rounded-2xl shadow-lg border border-ice-blue-100 w-5/12 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}">
                    <h3 class="text-xl font-semibold mb-4 text-ice-blue-800" data-en="${titleEn}" data-fr="${titleFr}">${titleEn}</h3>
                    <p class="text-gray-600" data-en="${descEn}" data-fr="${descFr}">${descEn}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('timeline-item', TimelineItem); 
