class Navbar extends HTMLElement {
    constructor() {
        super();
        this.lang = navigator.language.split('-')[0] || 'en';
    }

    connectedCallback() {
        this.render();
        this.attachEventListeners();
        this.updateLanguage();
    }

    render() {
        this.innerHTML = `
            <nav id="navbar" class="fixed top-0 w-full z-50 py-4 transition-all duration-300">
                <div class="max-w-6xl mx-auto px-5 flex justify-between items-center">
                    <div id="logo" class="text-2xl font-extrabold text-white">
                        ❄️ Brébeuf<span id="hx" class="bg-gradient-to-r bg-clip-text text-transparent from-ice-blue-100 to-ice-blue-200">Hx</span>
                    </div>
                    <ul id="nav-menu" class="hidden md:flex space-x-8">
                        <li><a href="#home" class="text-gray-200 font-medium hover:text-white transition-colors" data-en="Home" data-fr="Accueil">Home</a></li>
                        <li><a href="#about" class="text-gray-200 font-medium hover:text-white transition-colors" data-en="About" data-fr="À propos">About</a></li>
                        <li><a href="#schedule" class="text-gray-200 font-medium hover:text-white transition-colors" data-en="Schedule" data-fr="Horaire">Schedule</a></li>
                        <li><a href="#register" class="text-gray-200 font-medium hover:text-white transition-colors" data-en="Register" data-fr="S'inscrire">Register</a></li>
                        <li><a href="#faq" class="text-gray-200 font-medium hover:text-white transition-colors" data-en="FAQ" data-fr="FAQ">FAQ</a></li>
                    </ul>
                    <button id="lang-btn" class="bg-white text-ice-blue-500 px-4 py-2 ml-8 rounded-full font-semibold text-sm transition-all" data-fr="🇺🇸" data-en="🇫🇷">🇺🇸</button>
                    <div id="hamburger" class="md:hidden flex flex-col cursor-pointer">
                        <span class="w-6 h-0.5 bg-gray-800 mb-1 transition-all"></span>
                        <span class="w-6 h-0.5 bg-gray-800 mb-1 transition-all"></span>
                        <span class="w-6 h-0.5 bg-gray-800 transition-all"></span>
                    </div>
                </div>
            </nav>
        `;
    }

    attachEventListeners() {
        const hamburger = this.querySelector('#hamburger');
        const navMenu = this.querySelector('#nav-menu');
        const navbar = this.querySelector('#navbar');
        const logo = this.querySelector('#logo');
        const hx = this.querySelector('#hx');
        const langBtn = this.querySelector('#lang-btn');

        // Event listener for language button
        langBtn.addEventListener('click', () => {
            this.switchLanguage();
        });

        // Mobile navigation
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('flex');
            navMenu.classList.toggle('flex-col');
            navMenu.classList.toggle('absolute');
            navMenu.classList.toggle('top-full');
            navMenu.classList.toggle('left-0');
            navMenu.classList.toggle('right-0');
            navMenu.classList.toggle('bg-white');
            navMenu.classList.toggle('shadow-lg');
            navMenu.classList.toggle('p-4');
            navMenu.classList.toggle('space-y-4');
            navMenu.classList.toggle('space-x-8');
        });

        // Smooth scrolling
        this.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'border-b-2', 'border-ice-blue-100');
                logo.classList.add('text-gray-800');
                logo.classList.remove('text-white');

                navMenu.querySelectorAll('a').forEach(a => {
                    a.classList.add('text-gray-800', 'hover:text-ice-blue-500');
                    a.classList.remove('text-gray-200', 'hover:text-white');
                });

                hx.classList.add('from-ice-blue-400','to-ice-blue-600');
                hx.classList.remove('from-ice-blue-100','to-ice-blue-200');
                langBtn.classList.add('bg-ice-blue-500', 'text-white');
                langBtn.classList.remove('bg-white', 'text-ice-blue-500');
            } else {
                navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-b-2', 'border-ice-blue-100');
                logo.classList.add('text-white');
                logo.classList.remove('text-gray-800');
                
                navMenu.querySelectorAll('a').forEach(a => {
                    a.classList.add('text-gray-200', 'hover:text-white');
                    a.classList.remove('text-gray-800', 'hover:text-ice-blue-500');
                });

                hx.classList.add('from-ice-blue-100','to-ice-blue-200');
                hx.classList.remove('from-ice-blue-400','to-ice-blue-600');
                langBtn.classList.add('bg-white', 'text-ice-blue-500');
                langBtn.classList.remove('bg-ice-blue-500', 'text-white');
            }
        });
    }

    switchLanguage() {
        const langBtn = this.querySelector('#lang-btn');
        this.lang = this.lang === 'fr' ? 'en' : 'fr';

        // Update button text
        langBtn.textContent = this.lang === 'en' ? '🇫🇷' : '🇺🇸';

        // Update all translatable elements
        this.updateLanguage();

        // Dispatch custom event for other components
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: this.lang } }));
    }

    updateLanguage() {
        this.querySelectorAll('[data-en][data-fr]').forEach(el => {
            const text = el.getAttribute(`data-${this.lang}`);
            if (text) {
                el.innerHTML = text;
            }
        });
    }
}

customElements.define('navbar-component', Navbar); 
