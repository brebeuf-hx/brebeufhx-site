const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

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
