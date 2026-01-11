/**
 * Crée la barre de navigation
 * @param {Function} onNavigate - Callback appelé lors du clic sur un lien
 * @returns {HTMLElement}
 */
export function createNavbar(onNavigate) {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';

    // Bouton Hamburger pour mobile
    const hamburger = document.createElement('button');
    hamburger.className = 'navbar-hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    hamburger.setAttribute('aria-label', 'Menu');

    // Overlay pour fermer le menu en cliquant à côté
    const overlay = document.createElement('div');
    overlay.className = 'navbar-overlay';

    const navList = document.createElement('ul');
    navList.className = 'nav-list';

    const navItems = [
        { id: 'home', label: 'Accueil', href: '#home' },
        { id: 'all-questions', label: 'Questions', href: '#all-questions' },
        { id: 'test-config', label: 'Test', href: '#test-config' },
        { id: 'revision', label: 'Révision', href: '#revision' }
    ];

    function toggleMenu() {
        const isOpen = navList.classList.contains('open');
        if (isOpen) {
            navList.classList.remove('open');
            overlay.classList.remove('open');
            hamburger.classList.remove('open');
            document.body.style.overflow = ''; // Réactiver le scroll
        } else {
            navList.classList.add('open');
            overlay.classList.add('open');
            hamburger.classList.add('open');
            document.body.style.overflow = 'hidden'; // Désactiver le scroll quand menu ouvert
        }
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    navItems.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.label;
        link.className = 'nav-link';
        link.dataset.page = item.id;
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (navList.classList.contains('open')) {
                toggleMenu(); // Fermer le menu sur mobile après clic
            }
            onNavigate(item.id);
        });

        li.appendChild(link);
        navList.appendChild(li);
    });

    navbar.appendChild(hamburger);
    navbar.appendChild(overlay);
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

