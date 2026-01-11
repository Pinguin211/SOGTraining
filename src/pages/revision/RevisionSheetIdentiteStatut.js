import { router } from '../../logic/router.js';
import { revisionSheets } from '../../data/revision-sheets.js';

/**
 * Initialise et affiche la page de la fiche Identité et Statut
 */
export function initRevisionSheetIdentiteStatut() {
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
    const sheet = revisionSheets.find(s => s.id === 'identite-statut-gendarmerie');
    if (!sheet || !sheet.content) {
        contentArea.innerHTML = '<p>Fiche non trouvée</p>';
        return;
    }

    const { title, definition, doubleTutelle, symboles, statutMilitaire } = sheet.content;

    // Conteneur principal
    const sheetContainer = document.createElement('div');
    sheetContainer.className = 'revision-sheet-container identite-statut-sheet';

    // En-tête avec bannière bleue
    const header = document.createElement('div');
    header.className = 'identite-statut-header';
    header.textContent = title;
    sheetContainer.appendChild(header);

    // Définition centrale
    const definitionBox = document.createElement('div');
    definitionBox.className = 'identite-definition-box';
    
    const definitionIcon = document.createElement('div');
    definitionIcon.className = 'identite-definition-icon';
    definitionIcon.textContent = definition.icon;
    
    const definitionContent = document.createElement('div');
    definitionContent.className = 'identite-definition-content';
    
    const definitionLabel = document.createElement('div');
    definitionLabel.className = 'identite-definition-label';
    definitionLabel.textContent = 'DÉFINITION CENTRALE :';
    
    const definitionText = document.createElement('div');
    definitionText.className = 'identite-definition-text';
    definitionText.textContent = definition.text;
    
    definitionContent.appendChild(definitionLabel);
    definitionContent.appendChild(definitionText);
    definitionBox.appendChild(definitionIcon);
    definitionBox.appendChild(definitionContent);
    sheetContainer.appendChild(definitionBox);

    // Section deux colonnes
    const twoColumnsSection = document.createElement('div');
    twoColumnsSection.className = 'identite-two-columns';

    // Colonne gauche : Double tutelle
    const leftColumn = document.createElement('div');
    leftColumn.className = 'identite-column identite-column-left';
    
    const tutelleTitle = document.createElement('h2');
    tutelleTitle.className = 'identite-section-title';
    tutelleTitle.textContent = doubleTutelle.title;
    leftColumn.appendChild(tutelleTitle);

    doubleTutelle.ministries.forEach(ministry => {
        const ministryBox = document.createElement('div');
        ministryBox.className = 'identite-ministry-box';
        
        const ministryIcon = document.createElement('div');
        ministryIcon.className = 'identite-ministry-icon';
        ministryIcon.textContent = ministry.icon;
        
        const ministryContent = document.createElement('div');
        ministryContent.className = 'identite-ministry-content';
        
        const ministryName = document.createElement('div');
        ministryName.className = 'identite-ministry-name';
        ministryName.textContent = ministry.name;
        
        const ministrySubtitle = document.createElement('div');
        ministrySubtitle.className = 'identite-ministry-subtitle';
        ministrySubtitle.textContent = ministry.subtitle;
        
        const ministryList = document.createElement('ul');
        ministryList.className = 'identite-ministry-list';
        ministry.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            ministryList.appendChild(listItem);
        });
        
        ministryContent.appendChild(ministryName);
        ministryContent.appendChild(ministrySubtitle);
        ministryContent.appendChild(ministryList);
        
        ministryBox.appendChild(ministryIcon);
        ministryBox.appendChild(ministryContent);
        leftColumn.appendChild(ministryBox);
    });

    // Colonne droite : Symboles, Traditions et Chef
    const rightColumn = document.createElement('div');
    rightColumn.className = 'identite-column identite-column-right';
    
    const symbolesTitle = document.createElement('h2');
    symbolesTitle.className = 'identite-section-title';
    symbolesTitle.textContent = symboles.title;
    rightColumn.appendChild(symbolesTitle);

    symboles.items.forEach(item => {
        const symbolBox = document.createElement('div');
        symbolBox.className = 'identite-symbol-box';
        
        const symbolIcon = document.createElement('div');
        symbolIcon.className = 'identite-symbol-icon';
        symbolIcon.textContent = item.icon;
        
        const symbolContent = document.createElement('div');
        symbolContent.className = 'identite-symbol-content';
        
        const symbolCategory = document.createElement('div');
        symbolCategory.className = 'identite-symbol-category';
        symbolCategory.textContent = item.category;
        
        const symbolText = document.createElement('div');
        symbolText.className = 'identite-symbol-text';
        symbolText.textContent = item.text;
        
        symbolContent.appendChild(symbolCategory);
        symbolContent.appendChild(symbolText);
        
        symbolBox.appendChild(symbolIcon);
        symbolBox.appendChild(symbolContent);
        rightColumn.appendChild(symbolBox);
    });

    twoColumnsSection.appendChild(leftColumn);
    twoColumnsSection.appendChild(rightColumn);
    sheetContainer.appendChild(twoColumnsSection);

    // Section des 5 piliers
    const piliersSection = document.createElement('div');
    piliersSection.className = 'identite-piliers-section';
    
    const piliersTitle = document.createElement('h2');
    piliersTitle.className = 'identite-section-title identite-piliers-title';
    piliersTitle.textContent = statutMilitaire.title;
    piliersSection.appendChild(piliersTitle);
    
    const piliersContainer = document.createElement('div');
    piliersContainer.className = 'identite-piliers-container';
    
    statutMilitaire.piliers.forEach(pilier => {
        const pilierBox = document.createElement('div');
        pilierBox.className = 'identite-pilier-box';
        
        const pilierHeader = document.createElement('div');
        pilierHeader.className = 'identite-pilier-header';
        
        const pilierIcon = document.createElement('div');
        pilierIcon.className = 'identite-pilier-icon';
        pilierIcon.textContent = pilier.icon;
        
        const pilierName = document.createElement('div');
        pilierName.className = 'identite-pilier-name';
        pilierName.textContent = pilier.name;
        
        pilierHeader.appendChild(pilierIcon);
        pilierHeader.appendChild(pilierName);
        
        const pilierText = document.createElement('div');
        pilierText.className = 'identite-pilier-text';
        pilierText.textContent = pilier.text;
        
        pilierBox.appendChild(pilierHeader);
        pilierBox.appendChild(pilierText);
        piliersContainer.appendChild(pilierBox);
    });
    
    piliersSection.appendChild(piliersContainer);
    sheetContainer.appendChild(piliersSection);

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

