import { getText } from '../utils/DataStore.js';

export function initNavbar() {
    fetch('/src/navbar.html', { cache: 'force-cache' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            const navbar_container = document.getElementById('navbar-container');
            navbar_container.innerHTML = html;
            console.log('Navbar loaded');
        })
        .then(() => {
            // Ensure the navbar is rendered before proceeding
            requestAnimationFrame(() => {
                const toggleBlurBtn = document.getElementById('toggle-blur');

                if (toggleBlurBtn) {
                    toggleBlurBtn.addEventListener('click', () => {
                        document.body.classList.toggle('blur');
                    });
                }
            });
        });
}