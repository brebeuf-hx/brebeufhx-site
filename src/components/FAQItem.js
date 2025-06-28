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

        this.innerHTML = `
            <details class="bg-white hover:bg-ice-blue-50 border border-ice-blue-200 px-6 py-4 rounded-2xl overflow-hidden">
                <summary class="faq-question relative w-full text-left transition-colors flex justify-between items-center hover:cursor-pointer">
                    <span class="text-xl font-semibold text-gray-800" data-en="${questionEn}" data-fr="${questionFr}">${questionEn}</span>
                    <span class="faq-icon text-ice-blue-500 text-xl transition-transform duration-300">+</span>
                    <div class="faq-spacer hidden absolute bottom-0 left-6 right-6 h-[0.0625rem] rounded-full bg-ice-blue-200"></div>
                </summary>
                <p class="faq-answer text-base text-gray-600 leading-relaxed pt-4" data-en="${answerEn}" data-fr="${answerFr}">${answerEn}</p>
            </details>
        `;
    }

    attachEventListeners() {
        this.querySelector('.faq-question').addEventListener('click', this.toggleOpenState.bind(this));
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
