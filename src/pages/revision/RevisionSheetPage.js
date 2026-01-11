import { router } from '../../logic/router.js';
import { initRevisionSheetFormationSOG } from './RevisionSheetFormationSOG.js';
import { initRevisionSheetIdentiteStatut } from './RevisionSheetIdentiteStatut.js';
import { initRevisionSheetHierarchie } from './RevisionSheetHierarchie.js';
import { initRevisionSheetMissions } from './RevisionSheetMissions.js';
import { initRevisionSheetGeographie } from './RevisionSheetGeographie.js';
import { initRevisionSheetValeurs } from './RevisionSheetValeurs.js';
import { initRevisionSheetOrganisation } from './RevisionSheetOrganisation.js';

/**
 * Initialise et affiche une page pour une fiche de révision
 * @param {string} sheetId - ID de la fiche
 */
export function initRevisionSheetPage(sheetId) {
    // Rediriger vers la page spécifique selon l'ID
    if (sheetId === 'formation-sog-2026') {
        initRevisionSheetFormationSOG();
        return;
    }
    
    if (sheetId === 'identite-statut-gendarmerie') {
        initRevisionSheetIdentiteStatut();
        return;
    }
    
    if (sheetId === 'hierarchie-grades') {
        initRevisionSheetHierarchie();
        return;
    }
    
    if (sheetId === 'trois-types-missions') {
        initRevisionSheetMissions();
        return;
    }
    
    if (sheetId === 'geographie-competence') {
        initRevisionSheetGeographie();
        return;
    }
    
    if (sheetId === 'valeurs-devoirs') {
        initRevisionSheetValeurs();
        return;
    }
    
    if (sheetId === 'organisation-gendarmerie') {
        initRevisionSheetOrganisation();
        return;
    }

    // Page temporaire par défaut pour les autres fiches
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Element #content-area not found');
        return;
    }

    contentArea.innerHTML = '';

    // Bouton retour
    const backButton = document.createElement('button');
    backButton.className = 'btn-back-revision';
    backButton.textContent = '← Retour';
    backButton.addEventListener('click', () => {
        router.navigate('revision');
    });
    contentArea.appendChild(backButton);

    // Contenu temporaire
    const content = document.createElement('div');
    content.className = 'revision-sheet-content';

    const title = document.createElement('h1');
    title.textContent = 'Fiche de Révision - Page Temporaire';
    content.appendChild(title);

    const message = document.createElement('p');
    message.className = 'revision-sheet-message';
    message.textContent = `Cette page est temporaire. ID de la fiche : ${sheetId}`;
    content.appendChild(message);

    contentArea.appendChild(content);

    // Masquer la barre d'actions
    const actionBar = document.querySelector('.action-bar');
    if (actionBar) {
        actionBar.style.display = 'none';
    }

    // Afficher la navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = '';
    }
}

