const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navbar = document.querySelector('#navbar');
const logo = document.querySelector('#logo');
const hx = document.querySelector('#hx');
const langBtn = document.querySelector('#lang-btn');

// Navbar background //
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
