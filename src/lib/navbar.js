import { hamburgerIsOpen } from "./mobileNavMenu.js";

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navbar = document.querySelector('#navbar');
const logo = document.querySelector('#logo');
const hx = document.querySelector('#hx');
const langBtn = document.querySelector('#lang-btn');

const navLinks = Array.from(navMenu.querySelectorAll('a'))
const hamburgerLayers = Array.from(hamburger.querySelectorAll('span'));

// to avoid those bugs caused by scrolling, and then opening and closing the hamburger menu on mobile etc. so basically redundancy
let navbarBackgroundWasAdded = false;
let navbarBackgroundWasRemoved = true;

export function addNavbarBackground(mobileMenu) {
    if (navbarBackgroundWasAdded) {
        return;
    }
    navbarBackgroundWasAdded = true;
    navbarBackgroundWasRemoved = false;

    navbar.classList.add('bg-white/95', 'backdrop-blur-md');
    if (!mobileMenu) {
        navbar.classList.add('border-b-2', 'border-ice-blue-100');
    }
    logo.classList.add('text-gray-800');
    logo.classList.remove('text-white');

    hamburgerLayers.forEach((l) => {
        l.classList.add('bg-gray-800');
        l.classList.remove('bg-white');
    });
    navLinks.forEach((l) => {
        l.classList.add('text-gray-800', 'hover:text-ice-blue-500');
        l.classList.remove('text-gray-200', 'hover:text-white');
    });

    hx.classList.add('from-ice-blue-400','to-ice-blue-600');
    hx.classList.remove('from-ice-blue-100','to-ice-blue-200');
    langBtn.classList.add('bg-ice-blue-500', 'text-white');
    langBtn.classList.remove('bg-white', 'text-ice-blue-500');
}

export function removeNavbarBackground() {
    if (navbarBackgroundWasRemoved) {
        return;
    }
    navbarBackgroundWasRemoved = true;
    navbarBackgroundWasAdded = false;

    navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-b-2', 'border-ice-blue-100');
    logo.classList.add('text-white');
    logo.classList.remove('text-gray-800');

    hamburgerLayers.forEach((l) => {
        l.classList.add('bg-white');
        l.classList.remove('bg-gray-800');
    });
    navLinks.forEach((l) => {
        l.classList.add('text-gray-200', 'hover:text-white');
        l.classList.remove('text-gray-800', 'hover:text-ice-blue-500');
    });

    hx.classList.add('from-ice-blue-100','to-ice-blue-200');
    hx.classList.remove('from-ice-blue-400','to-ice-blue-600');
    langBtn.classList.add('bg-white', 'text-ice-blue-500');
    langBtn.classList.remove('bg-ice-blue-500', 'text-white');
}

// Navbar background //
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        addNavbarBackground();
    } else if (!hamburgerIsOpen) {
        removeNavbarBackground();
    }
});
