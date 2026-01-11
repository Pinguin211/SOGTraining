import { router } from '../../logic/router.js';
import { revisionSheets } from '../../data/revision-sheets.js';

/**
 * Initialise et affiche la page de la fiche Géographie & Compétence
 */
export function initRevisionSheetGeographie() {
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
    const sheet = revisionSheets.find(s => s.id === 'geographie-competence');
    if (!sheet || !sheet.content) {
        contentArea.innerHTML = '<p>Fiche non trouvée</p>';
        return;
    }

    const { title, sectionTitle, zones } = sheet.content;

    // Conteneur principal
    const sheetContainer = document.createElement('div');
    sheetContainer.className = 'revision-sheet-container geographie-sheet';

    // En-tête avec titre
    const header = document.createElement('div');
    header.className = 'geographie-header';
    
    const titleIcon = document.createElement('span');
    titleIcon.className = 'geographie-title-icon';
    titleIcon.textContent = '📝';
    
    const titleText = document.createElement('span');
    titleText.textContent = title;
    
    header.appendChild(titleIcon);
    header.appendChild(titleText);
    sheetContainer.appendChild(header);

    // Section principale
    const mainSection = document.createElement('div');
    mainSection.className = 'geographie-main-section';

    // Titre de section
    const sectionTitleElement = document.createElement('div');
    sectionTitleElement.className = 'geographie-section-title';
    sectionTitleElement.textContent = sectionTitle;
    mainSection.appendChild(sectionTitleElement);

    // Zones
    zones.forEach(zone => {
        const zoneCard = document.createElement('div');
        zoneCard.className = `geographie-zone-card geographie-zone-${zone.color}`;

        // En-tête de la zone
        const zoneHeader = document.createElement('div');
        zoneHeader.className = 'geographie-zone-header';
        
        const zoneIcon = document.createElement('div');
        zoneIcon.className = 'geographie-zone-icon';
        zoneIcon.textContent = zone.icon;
        
        const zoneName = document.createElement('div');
        zoneName.className = 'geographie-zone-name';
        zoneName.textContent = `${zone.name} :`;
        
        zoneHeader.appendChild(zoneIcon);
        zoneHeader.appendChild(zoneName);
        zoneCard.appendChild(zoneHeader);

        // Contenu de la zone
        const zoneContent = document.createElement('div');
        zoneContent.className = 'geographie-zone-content';

        // Liste des items
        const itemsList = document.createElement('ul');
        itemsList.className = 'geographie-items-list';
        
        zone.items.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.className = 'geographie-item';
            itemElement.textContent = item;
            itemsList.appendChild(itemElement);
        });
        
        zoneContent.appendChild(itemsList);

        // Illustrations
        if (zone.illustrations && zone.illustrations.length > 0) {
            const illustrationsContainer = document.createElement('div');
            illustrationsContainer.className = 'geographie-illustrations';
            
            zone.illustrations.forEach(illustration => {
                const icon = document.createElement('span');
                icon.className = 'geographie-illustration-icon';
                icon.textContent = illustration;
                illustrationsContainer.appendChild(icon);
            });
            
            zoneContent.appendChild(illustrationsContainer);
        }

        zoneCard.appendChild(zoneContent);
        mainSection.appendChild(zoneCard);
    });

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

