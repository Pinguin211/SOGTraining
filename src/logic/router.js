import { initHomePage } from '../pages/HomePage.js';
import { initAllQuestionsPage } from '../pages/AllQuestionsPage.js';
import { initTestConfigPage } from '../pages/TestConfigPage.js';
import { initTestExecutionPage } from '../pages/TestExecutionPage.js';
import { initRevisionPage } from '../pages/RevisionPage.js';
import { initRevisionSheetPage } from '../pages/revision/RevisionSheetPage.js';
import { initSettingsPage } from '../pages/SettingsPage.js';
import { updateNavbarActive } from '../components/index.js';

/**
 * Gestionnaire de routage simple
 */
class Router {
    constructor() {
        this.currentPage = 'home';
        this.routes = {
            'home': initHomePage,
            'all-questions': initAllQuestionsPage,
            'test-config': initTestConfigPage,
            'test': initTestExecutionPage,
            'revision': initRevisionPage,
            'settings': initSettingsPage
        };
    }

    /**
     * Navigue vers une page
     * @param {string} pageId - ID de la page
     */
    navigate(pageId) {
        // Gérer les pages de fiches de révision (format: revision-sheet-{id})
        if (pageId.startsWith('revision-sheet-')) {
            const sheetId = pageId.replace('revision-sheet-', '');
            this.currentPage = pageId;
            initRevisionSheetPage(sheetId);
            updateNavbarActive('revision');
            window.history.pushState({ page: pageId }, '', `#${pageId}`);
            return;
        }

        if (this.routes[pageId]) {
            this.currentPage = pageId;
            this.routes[pageId]();
            // Ne mettre à jour la navbar que si la page est dans la navbar
            // La page 'test' n'est pas dans la navbar
            if (pageId !== 'test') {
                updateNavbarActive(pageId);
            }
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
        if (!hash) return null;
        
        // Vérifier si c'est une page de fiche de révision
        if (hash.startsWith('revision-sheet-')) {
            return hash;
        }
        
        return hash && this.routes[hash] ? hash : null;
    }
}

export const router = new Router();

