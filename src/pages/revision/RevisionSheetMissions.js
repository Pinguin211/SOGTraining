import { router } from '../../logic/router.js';
import { revisionSheets } from '../../data/revision-sheets.js';

/**
 * Initialise et affiche la page de la fiche Les 3 Types de Missions
 */
export function initRevisionSheetMissions() {
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
    const sheet = revisionSheets.find(s => s.id === 'trois-types-missions');
    if (!sheet || !sheet.content) {
        contentArea.innerHTML = '<p>Fiche non trouvée</p>';
        return;
    }

    const { title, subtitle, missions } = sheet.content;

    // Conteneur principal
    const sheetContainer = document.createElement('div');
    sheetContainer.className = 'revision-sheet-container missions-sheet';

    // En-tête avec titre et sous-titre
    const header = document.createElement('div');
    header.className = 'missions-header';
    
    const titleElement = document.createElement('div');
    titleElement.className = 'missions-title';
    titleElement.textContent = title;
    
    const subtitleElement = document.createElement('div');
    subtitleElement.className = 'missions-subtitle';
    subtitleElement.textContent = subtitle;
    
    header.appendChild(titleElement);
    header.appendChild(subtitleElement);
    sheetContainer.appendChild(header);

    // Section des trois missions
    const missionsContainer = document.createElement('div');
    missionsContainer.className = 'missions-container';

    missions.forEach(mission => {
        const missionCard = document.createElement('div');
        missionCard.className = `mission-card mission-${mission.color}`;

        // En-tête de la mission
        const missionHeader = document.createElement('div');
        missionHeader.className = `mission-header mission-header-${mission.color}`;
        
        const missionIcon = document.createElement('div');
        missionIcon.className = 'mission-icon';
        missionIcon.textContent = mission.icon;
        
        const missionType = document.createElement('div');
        missionType.className = 'mission-type';
        missionType.textContent = `${mission.type} :`;
        
        missionHeader.appendChild(missionIcon);
        missionHeader.appendChild(missionType);
        missionCard.appendChild(missionHeader);

        // Contenu de la mission
        const missionContent = document.createElement('div');
        missionContent.className = `mission-content mission-content-${mission.color}`;

        // Concept (Prévention/Répression)
        if (mission.concept) {
            const conceptBox = document.createElement('div');
            conceptBox.className = 'mission-concept';
            
            const conceptLabel = document.createElement('span');
            conceptLabel.className = 'mission-concept-label';
            conceptLabel.textContent = mission.concept.label + ' ';
            
            const conceptBold = document.createElement('strong');
            conceptBold.className = 'mission-concept-bold';
            conceptBold.textContent = mission.concept.bold;
            
            const conceptText = document.createElement('span');
            conceptText.className = 'mission-concept-text';
            conceptText.textContent = ' ' + mission.concept.text;
            
            conceptBox.appendChild(conceptLabel);
            conceptBox.appendChild(conceptBold);
            conceptBox.appendChild(conceptText);
            missionContent.appendChild(conceptBox);
        }

        // Icône principale
        if (mission.icons && mission.icons.length > 0) {
            const mainIcon = document.createElement('div');
            mainIcon.className = 'mission-main-icon';
            mainIcon.textContent = mission.icons[0];
            missionContent.appendChild(mainIcon);
        }

        // Exemples
        const examplesLabel = document.createElement('div');
        examplesLabel.className = 'mission-examples-label';
        examplesLabel.textContent = '• Exemples :';
        missionContent.appendChild(examplesLabel);

        const examplesList = document.createElement('ul');
        examplesList.className = 'mission-examples-list';
        
        mission.examples.forEach(example => {
            const exampleItem = document.createElement('li');
            exampleItem.className = 'mission-example-item';
            exampleItem.textContent = example;
            examplesList.appendChild(exampleItem);
        });
        
        missionContent.appendChild(examplesList);

        // Icônes secondaires
        if (mission.icons && mission.icons.length > 1) {
            const secondaryIcons = document.createElement('div');
            secondaryIcons.className = 'mission-secondary-icons';
            
            for (let i = 1; i < mission.icons.length; i++) {
                const icon = document.createElement('span');
                icon.className = 'mission-secondary-icon';
                icon.textContent = mission.icons[i];
                secondaryIcons.appendChild(icon);
            }
            
            missionContent.appendChild(secondaryIcons);
        }

        missionCard.appendChild(missionContent);
        missionsContainer.appendChild(missionCard);
    });

    sheetContainer.appendChild(missionsContainer);
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

