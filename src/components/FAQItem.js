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
            <div class="bg-white hover:bg-ice-blue-50 border border-ice-blue-200 px-6 py-4 rounded-2xl overflow-hidden">
                <button class="faq-question relative w-full text-left transition-colors flex justify-between items-center">
                    <span class="font-semibold text-gray-800" data-en="${questionEn}" data-fr="${questionFr}">${questionEn}</span>
                    <span class="faq-icon text-ice-blue-500 text-xl transition-transform duration-300">+</span>
                    <div class="faq-spacer hidden absolute bottom-0 left-6 right-6 h-[0.0625rem] rounded-full bg-ice-blue-200"></div>
                </button>
                <div class="faq-answer hidden">
                    <p class="text-gray-600 leading-relaxed" data-en="${answerEn}" data-fr="${answerFr}">${answerEn}</p>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        this.querySelector('.faq-question').addEventListener('click', this.toggleOpenState.bind(this));
    }

    toggleOpenState() {
        this.isOpen = !this.isOpen;
        const answerDiv = this.querySelector('.faq-answer');
        const icon = this.querySelector('.faq-icon');

        if (this.isOpen) {
            answerDiv.classList.remove('hidden');
            icon.textContent = '−';
            icon.style.transform = 'rotate(180deg) translateY(-2px)';
        } else {
            answerDiv.classList.add('hidden');
            icon.textContent = '+';
            icon.style.transform = 'rotate(0deg)';
        }
    }
}

customElements.define('faq-item', FAQItem);
