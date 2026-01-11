import { router } from '../logic/router.js';
import { revisionSheets } from '../data/revision-sheets.js';

/**
 * Initialise et affiche la page de révision
 */
export function initRevisionPage() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Element #content-area not found');
        return;
    }

    contentArea.innerHTML = '';

    // Titre
    const h1 = document.createElement('h1');
    h1.textContent = 'Fiches de Révision';
    contentArea.appendChild(h1);

    // Liste des fiches de révision
    const revisionList = document.createElement('div');
    revisionList.className = 'revision-list';

    if (revisionSheets.length === 0) {
        const noSheetsMsg = document.createElement('p');
        noSheetsMsg.className = 'no-sheets-message';
        noSheetsMsg.textContent = 'Aucune fiche de révision disponible pour le moment.';
        revisionList.appendChild(noSheetsMsg);
    } else {
        revisionSheets.forEach(sheet => {
            const sheetItem = document.createElement('div');
            sheetItem.className = 'revision-sheet-item';
            sheetItem.addEventListener('click', () => {
                // Naviguer vers la page de la fiche
                router.navigate(`revision-sheet-${sheet.id}`);
            });

            const sheetIcon = document.createElement('div');
            sheetIcon.className = 'revision-sheet-icon';
            sheetIcon.textContent = sheet.icon;

            const sheetTitle = document.createElement('div');
            sheetTitle.className = 'revision-sheet-title';
            sheetTitle.textContent = sheet.title;

            sheetItem.appendChild(sheetIcon);
            sheetItem.appendChild(sheetTitle);
            revisionList.appendChild(sheetItem);
        });
    }

    contentArea.appendChild(revisionList);

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

