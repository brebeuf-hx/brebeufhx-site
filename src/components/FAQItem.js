import { BaseComponent } from './BaseComponent.js';

class FAQItem extends BaseComponent {
    constructor() {
        super();
        this.isOpen = false;
    }

    static get observedAttributes() {
        return ['question-en', 'question-fr', 'answer-en', 'answer-fr'];
    }

    render() {
        const questionEn = this.getAttribute('question-en') || 'Question?';
        const questionFr = this.getAttribute('question-fr') || 'Question?';
        const answerEn = this.getAttribute('answer-en') || 'Answer.';
        const answerFr = this.getAttribute('answer-fr') || 'Réponse.';

        this.innerHTML = /*html*/`
            <details class="overflow-hidden px-6 py-4 bg-white rounded-lg border-2 shadow-ice-blue-600 shadow-[0_5px_0_0] hover:shadow-0hover:bg-ice-blue-50 border-ice-blue-600">
                <summary class="flex relative justify-between items-center w-full text-left transition-colors faq-question hover:cursor-pointer">
                    <span class="text-xl font-semibold text-gray-800" data-en="${questionEn}" data-fr="${questionFr}">${questionEn}</span>
                    <span class="text-xl transition-transform duration-300 faq-icon text-ice-blue-500">+</span>
                    <div class="faq-spacer hidden absolute bottom-0 left-6 right-6 h-[0.0625rem] rounded-full bg-ice-blue-200"></div>
                </summary>
                <p class="pt-4 text-base leading-relaxed text-gray-600 faq-answer" data-en="${answerEn}" data-fr="${answerFr}">${answerEn}</p>
            </details>
        `;
    }

    attachEventListeners() {
        this.querySelector('.faq-question').addEventListener('click', this.toggleOpenState.bind(this));
        // this.querySelector('details').addEventListener('mouseenter', (e) => {
        //     e.target.style.transform = 'scale(1.025)';
        // });
        // this.querySelector('details').addEventListener('mouseleave', (e) => {
        //     e.target.style.transform = '';
        // });
    }

    toggleOpenState() {
        this.isOpen = !this.isOpen;
        const icon = this.querySelector('.faq-icon');

        if (this.isOpen) {
            icon.textContent = '−';
            icon.style.transform = 'rotate(180deg) translateY(-2px)';
        } else {
            icon.textContent = '+';
            icon.style.transform = 'rotate(0deg)';
        }
    }
}

customElements.define('faq-item', FAQItem);
