// Point d'entrée de l'application
import { createNavbar, createSaveStatus, createActionBar } from './components/index.js';
import { router } from './logic/router.js';

/**
 * Initialise l'application
 */
function init() {
    // Créer et ajouter le statut de sauvegarde
    const saveStatus = createSaveStatus();
    document.body.appendChild(saveStatus);

    // Créer et ajouter la navbar
    const navbar = createNavbar((pageId) => {
        router.navigate(pageId);
    });
    const app = document.getElementById('app');
    if (app) {
        app.insertBefore(navbar, app.firstChild);
    }

    // Créer et ajouter la barre d'actions (sera masquée sur certaines pages)
    const actionBar = createActionBar();
    document.body.appendChild(actionBar);

    // Initialiser le routeur
    router.init();
}

// Lancer l'application quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
