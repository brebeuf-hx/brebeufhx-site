/** @type {import('tailwindcss').Config} */
export default {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'ice-blue': {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                }
            },
            animation: {
                'snowfall': 'snowfall 8s linear infinite',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'blink': 'blink 1s infinite',
            },
            keyframes: {
                snowfall: {
                    '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                blink: {
                    '0%': { opacity: '1' },
                    '50%': { opacity: '0' },
                    '100%': { opacity: '1' }
                }
            }
        }
    },
    plugins: [],
}
