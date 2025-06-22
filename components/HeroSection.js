class HeroSection extends BaseComponent {
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        this.createSnowflakes();
        setInterval(this.createSnowflake.bind(this), 500);
    }

    render() {
        this.innerHTML = `
            <section id="home" class="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-ice-blue-400 via-ice-blue-500 to-ice-blue-700 overflow-hidden">
                <!-- Snow Background -->
                <div id="snowflakes" class="absolute inset-0">
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 10%; animation-delay: 0s; animation-duration: 8s;">❄</div>
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 20%; animation-delay: 1s; animation-duration: 12s;">❅</div>
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 30%; animation-delay: 2s; animation-duration: 10s;">❆</div>
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 40%; animation-delay: 3s; animation-duration: 9s;">❄</div>
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 50%; animation-delay: 4s; animation-duration: 11s;">❅</div>
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 60%; animation-delay: 5s; animation-duration: 8s;">❆</div>
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 70%; animation-delay: 6s; animation-duration: 12s;">❄</div>
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 80%; animation-delay: 7s; animation-duration: 10s;">❅</div>
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 90%; animation-delay: 8s; animation-duration: 9s;">❆</div>
                    <div class="snowflake absolute text-white text-2xl opacity-0 animate-snowfall" style="left: 95%; animation-delay: 9s; animation-duration: 11s;">❄</div>
                </div>
                
                <!-- Ice Crystals -->
                <div id="ice-crystals" class="absolute inset-0">
                    <div class="crystal absolute text-3xl opacity-0" style="top: 20%; left: 15%; animation-delay: 0s;">🧊</div>
                    <div class="crystal absolute text-3xl opacity-0" style="top: 60%; left: 85%; animation-delay: 3s;">💎</div>
                    <div class="crystal absolute text-3xl opacity-0" style="top: 80%; left: 25%; animation-delay: 6s;">🧊</div>
                    <div class="crystal absolute text-3xl opacity-0" style="top: 30%; left: 75%; animation-delay: 9s;">💎</div>
                </div>

                <div class="text-center text-white relative z-10 max-w-4xl px-5 py-6 my-auto">
                    <h1 class="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        <span class="drop-shadow-lg" data-en="Québec's Biggest" data-fr="Le plus grand">Québec's Biggest</span>
                        <span class="bg-gradient-to-r from-white to-ice-blue-100 bg-clip-text text-transparent drop-shadow-lg" data-en="Pre-University Hackathon" data-fr="hackathon pré-universitaire">Pre-University Hackathon</span>
                    </h1>
                    <p class="text-xl mb-8 opacity-90 drop-shadow-md" data-en="24 hours of coding, creating, and connecting. Build solutions that change the world." data-fr="24 heures de programmation, de création et de connexion. Construisez des solutions qui changent le monde.">
                        24 hours of coding, creating, and connecting. Build solutions that change the world.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <!-- <a href="#register" class="flex items-center justify-center bg-gradient-to-r from-white to-ice-blue-100 text-ice-blue-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all" data-en="❄️ Register" data-fr="❄️ S'inscrire">❄️ Register</a>
                        <a href="#about" class="flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-ice-blue-700 transition-all" data-en="Learn More" data-fr="En savoir plus">Learn More</a> -->

                        <!-- Email signup for registration notifications -->
                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <input type="email" placeholder="Enter your email" data-en-placeholder="Enter your email" data-fr-placeholder="Ton courriel" class="px-6 py-3 rounded-full text-lg border-2 border-white bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-ice-blue-200 transition-all">
                            <button class="flex items-center justify-center bg-gradient-to-r from-white to-ice-blue-100 text-ice-blue-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all" data-en="❄️ Get Notified" data-fr="❄️ M'abonner">❄️ Get Notified</button>
                        </div>
                    </div>
                    <p class="text-white/80 text-sm mt-4 mx-auto" data-en="We'll notify you when registration opens and share exclusive updates!" data-fr="On te notifiera quand l'inscription ouvre et on te partagera des mises à jour exclusives!">We'll notify you when registration opens and share exclusive updates!</p>
                </div>
            </section>
        `;
    }

    createSnowflakes() {
        const snowflakeCount = 50;
        for (let i = 0; i < snowflakeCount; i++) {
            this.createSnowflake();
        }
    }

    createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake absolute text-white text-xl opacity-0 animate-snowfall';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDelay = Math.random() * 10 + 's';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.innerHTML = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
        this.querySelector('#snowflakes').appendChild(snowflake);

        setTimeout(() => {
            snowflake.parentNode?.removeChild(snowflake);
        }, 10e3); // 10s
    }
}

customElements.define('hero-section', HeroSection); 
