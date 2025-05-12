import App from '../components/App.js';
import { initNavbar } from './_navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  new App().init();

  console.log("Requested animation frame");
  initNavbar(); // Initialize the navbar functionality    
});
