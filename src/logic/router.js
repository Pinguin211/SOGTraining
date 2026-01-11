import { initHomePage } from '../pages/HomePage.js';
import { initAllQuestionsPage } from '../pages/AllQuestionsPage.js';
import { updateNavbarActive } from '../components/index.js';

/**
 * Gestionnaire de routage simple
 */
class Router {
    constructor() {
        this.currentPage = 'home';
        this.routes = {
            'home': initHomePage,
            'all-questions': initAllQuestionsPage
        };
    }

    /**
     * Navigue vers une page
     * @param {string} pageId - ID de la page
     */
    navigate(pageId) {
        if (this.routes[pageId]) {
            this.currentPage = pageId;
            this.routes[pageId]();
            updateNavbarActive(pageId);
            // Mettre à jour l'URL sans recharger la page
            window.history.pushState({ page: pageId }, '', `#${pageId}`);
        }
    }

    /**
     * Initialise le routeur
     */
    init() {
        // Gérer les clics sur les liens de navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link')) {
                e.preventDefault();
                const pageId = e.target.dataset.page;
                if (pageId) {
                    this.navigate(pageId);
                }
            }
        });

        // Gérer le bouton retour du navigateur
        window.addEventListener('popstate', (e) => {
            const pageId = e.state?.page || this.getPageFromHash();
            if (pageId) {
                this.navigate(pageId);
            }
        });

        // Charger la page initiale
        const initialPage = this.getPageFromHash() || 'home';
        this.navigate(initialPage);
    }

    /**
     * Récupère la page depuis le hash de l'URL
     * @returns {string|null}
     */
    getPageFromHash() {
        const hash = window.location.hash.slice(1);
        return hash && this.routes[hash] ? hash : null;
    }
}

export const router = new Router();

