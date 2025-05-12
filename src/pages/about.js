import App from '../components/App.js';
import { initNavbar } from './_navbar.js';
import { initScrollReveal } from '../utils/scrollReveal.js';

document.addEventListener('DOMContentLoaded', () => {
  new App().init();
  initScrollReveal(); // uses default selector
  console.log('Page initialized');

  initNavbar(); // Initialize the navbar functionality    
});
