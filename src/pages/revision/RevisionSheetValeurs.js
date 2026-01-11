import { router } from '../../logic/router.js';
import { revisionSheets } from '../../data/revision-sheets.js';

/**
 * Initialise et affiche la page de la fiche Valeurs et Devoirs
 */
export function initRevisionSheetValeurs() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Element #content-area not found');
        return;
    }

    contentArea.innerHTML = '';

    // Bouton retour
    const backButton = document.createElement('button');
    backButton.className = 'btn-back-revision';
    backButton.textContent = '← Retour aux fiches';
    backButton.addEventListener('click', () => {
        router.navigate('revision');
    });
    contentArea.appendChild(backButton);

    // Récupérer les données de la fiche
    const sheet = revisionSheets.find(s => s.id === 'valeurs-devoirs');
    if (!sheet || !sheet.content) {
        contentArea.innerHTML = '<p>Fiche non trouvée</p>';
        return;
    }

    const { title, sectionTitle, valeurs } = sheet.content;

    // Conteneur principal
    const sheetContainer = document.createElement('div');
    sheetContainer.className = 'revision-sheet-container valeurs-sheet';

    // En-tête avec titre
    const header = document.createElement('div');
    header.className = 'valeurs-header';
    
    const titleIcon = document.createElement('span');
    titleIcon.className = 'valeurs-title-icon';
    titleIcon.textContent = '📝';
    
    const titleText = document.createElement('span');
    titleText.textContent = title;
    
    header.appendChild(titleIcon);
    header.appendChild(titleText);
    sheetContainer.appendChild(header);

    // Section principale
    const mainSection = document.createElement('div');
    mainSection.className = 'valeurs-main-section';

    // Titre de section
    const sectionTitleElement = document.createElement('div');
    sectionTitleElement.className = 'valeurs-section-title';
    sectionTitleElement.textContent = sectionTitle;
    mainSection.appendChild(sectionTitleElement);

    // Liste des valeurs
    const valeursContainer = document.createElement('div');
    valeursContainer.className = 'valeurs-container';

    valeurs.forEach(valeur => {
        const valeurCard = document.createElement('div');
        valeurCard.className = 'valeurs-card';

        // Numéro et nom
        const valeurHeader = document.createElement('div');
        valeurHeader.className = 'valeurs-card-header';
        
        const valeurNumber = document.createElement('span');
        valeurNumber.className = 'valeurs-number';
        valeurNumber.textContent = `${valeur.number}.`;
        
        const valeurName = document.createElement('span');
        valeurName.className = 'valeurs-name';
        valeurName.textContent = `"${valeur.name}" :`;
        
        valeurHeader.appendChild(valeurNumber);
        valeurHeader.appendChild(valeurName);
        valeurCard.appendChild(valeurHeader);

        // Texte
        const valeurText = document.createElement('div');
        valeurText.className = 'valeurs-text';
        valeurText.textContent = valeur.text;
        valeurCard.appendChild(valeurText);

        // Icônes
        const valeurIcons = document.createElement('div');
        valeurIcons.className = 'valeurs-icons';
        
        valeur.icons.forEach(icon => {
            const iconElement = document.createElement('span');
            iconElement.className = 'valeurs-icon';
            iconElement.textContent = icon;
            valeurIcons.appendChild(iconElement);
        });
        
        valeurCard.appendChild(valeurIcons);
        valeursContainer.appendChild(valeurCard);
    });

    mainSection.appendChild(valeursContainer);
    sheetContainer.appendChild(mainSection);
    contentArea.appendChild(sheetContainer);

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

