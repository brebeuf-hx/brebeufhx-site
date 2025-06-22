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

        // Listen for custom event to close this FAQ item when another one opens
        document.addEventListener('faqItemOpened', (e) => {
            if (e.detail.openedItem !== this && this.isOpen) {
                this.close();
            }
        });
    }

    toggleOpenState() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.isOpen = true;
        const answerDiv = this.querySelector('.faq-answer');
        const icon = this.querySelector('.faq-icon');
        // const question = this.querySelector('.faq-question');
        // const spacer = this.querySelector('.faq-spacer');

        // question.classList.add('bg-ice-blue-50');
        // question.classList.remove('bg-white');
        // spacer.classList.remove('hidden');
        answerDiv.classList.remove('hidden');
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg) translateY(-2px)';

        // Dispatch custom event to close other FAQ items
        document.dispatchEvent(new CustomEvent('faqItemOpened', {
            detail: { openedItem: this }
        }));
    }

    close() {
        this.isOpen = false;
        const answerDiv = this.querySelector('.faq-answer');
        const icon = this.querySelector('.faq-icon');
        // const question = this.querySelector('.faq-question');
        // const spacer = this.querySelector('.faq-spacer');
        
        // question.classList.remove('bg-ice-blue-50');
        // question.classList.add('bg-white');
        // spacer.classList.add('hidden');
        answerDiv.classList.add('hidden');
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    }
}

customElements.define('faq-item', FAQItem); 
