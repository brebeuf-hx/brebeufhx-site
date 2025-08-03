import { addNavbarBackground, removeNavbarBackground } from "./navbar.js";

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

export let hamburgerIsOpen = false;

hamburger.addEventListener('click', () => {
  hamburgerIsOpen = !hamburgerIsOpen;

  if (hamburgerIsOpen) {
    addNavbarBackground(true);
  } else if (window.scrollY <= 50) {
    removeNavbarBackground();
  }

  // existing classes
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('space-x-8');
  navMenu.classList.toggle('md:flex');
  // mobile menu classes
  navMenu.classList.toggle('flex');
  navMenu.classList.toggle('flex-col');
  navMenu.classList.toggle('absolute');
  navMenu.classList.toggle('top-full');
  navMenu.classList.toggle('left-0');
  navMenu.classList.toggle('right-0');
  navMenu.classList.toggle('space-y-4');
  navMenu.classList.toggle('p-4');
  navMenu.classList.toggle('bg-white/95');
  navMenu.classList.toggle('backdrop-blur-md');
  navMenu.classList.toggle('shadow-lg');
});
