/**
 * Crée la barre de navigation
 * @param {Function} onNavigate - Callback appelé lors du clic sur un lien
 * @returns {HTMLElement}
 */
export function createNavbar(onNavigate) {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';

    const navList = document.createElement('ul');
    navList.className = 'nav-list';

    const navItems = [
        { id: 'home', label: 'Accueil', href: '#home' },
        { id: 'all-questions', label: 'Questions', href: '#all-questions' }
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.label;
        link.className = 'nav-link';
        link.dataset.page = item.id;
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            onNavigate(item.id);
        });

        li.appendChild(link);
        navList.appendChild(li);
    });

    navbar.appendChild(navList);
    return navbar;
}

/**
 * Met à jour l'état actif de la navbar
 * @param {string} activePageId - ID de la page active
 */
export function updateNavbarActive(activePageId) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.dataset.page === activePageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

