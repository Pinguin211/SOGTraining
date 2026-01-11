import { router } from '../../logic/router.js';
import { revisionSheets } from '../../data/revision-sheets.js';

/**
 * Initialise et affiche la page de la fiche Organisation de la Gendarmerie
 */
export function initRevisionSheetOrganisation() {
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
    const sheet = revisionSheets.find(s => s.id === 'organisation-gendarmerie');
    if (!sheet || !sheet.content) {
        contentArea.innerHTML = '<p>Fiche non trouvée</p>';
        return;
    }

    const { title, introduction, subdivisions, conseil } = sheet.content;

    // Conteneur principal
    const sheetContainer = document.createElement('div');
    sheetContainer.className = 'revision-sheet-container organisation-sheet';

    // En-tête avec titre
    const header = document.createElement('div');
    header.className = 'organisation-header';
    
    const titleIcon = document.createElement('span');
    titleIcon.className = 'organisation-title-icon';
    titleIcon.textContent = '📝';
    
    const titleText = document.createElement('span');
    titleText.textContent = title;
    
    header.appendChild(titleIcon);
    header.appendChild(titleText);
    sheetContainer.appendChild(header);

    // Introduction
    const introBox = document.createElement('div');
    introBox.className = 'organisation-intro';
    
    const introIcon = document.createElement('span');
    introIcon.className = 'organisation-intro-icon';
    introIcon.textContent = introduction.icon;
    
    const introText = document.createElement('span');
    introText.className = 'organisation-intro-text';
    introText.textContent = introduction.text;
    
    introBox.appendChild(introIcon);
    introBox.appendChild(introText);
    sheetContainer.appendChild(introBox);

    // Container des subdivisions
    const subdivisionsContainer = document.createElement('div');
    subdivisionsContainer.className = 'organisation-subdivisions-container';

    subdivisions.forEach(subdivision => {
        const subCard = document.createElement('div');
        subCard.className = `organisation-sub-card organisation-sub-${subdivision.color}`;

        // En-tête
        const subHeader = document.createElement('div');
        subHeader.className = `organisation-sub-header organisation-header-${subdivision.color}`;
        
        const subNumber = document.createElement('span');
        subNumber.className = 'organisation-sub-number';
        subNumber.textContent = subdivision.number;
        
        const subNameContainer = document.createElement('div');
        subNameContainer.className = 'organisation-sub-name-container';
        
        const subName = document.createElement('div');
        subName.className = 'organisation-sub-name';
        subName.textContent = subdivision.name;
        
        if (subdivision.nickname) {
            const subNickname = document.createElement('div');
            subNickname.className = 'organisation-sub-nickname';
            subNickname.textContent = subdivision.nickname;
            subNameContainer.appendChild(subNickname);
        }
        
        subNameContainer.appendChild(subName);
        
        const subIcon = document.createElement('div');
        subIcon.className = 'organisation-sub-icon';
        subIcon.textContent = subdivision.icon;
        
        subHeader.appendChild(subNumber);
        subHeader.appendChild(subNameContainer);
        subHeader.appendChild(subIcon);
        subCard.appendChild(subHeader);

        // Contenu
        const subContent = document.createElement('div');
        subContent.className = `organisation-sub-content organisation-content-${subdivision.color}`;

        // Description
        if (subdivision.description) {
            subdivision.description.forEach(desc => {
                const descItem = document.createElement('div');
                descItem.className = 'organisation-desc-item';
                descItem.textContent = desc;
                subContent.appendChild(descItem);
            });
        }

        // Missions
        if (subdivision.missions) {
            subdivision.missions.forEach(mission => {
                const missionItem = document.createElement('div');
                missionItem.className = 'organisation-mission-item';
                missionItem.textContent = mission;
                subContent.appendChild(missionItem);
            });
        }

        // Structure hiérarchique
        if (subdivision.structure) {
            const structureBlock = document.createElement('div');
            structureBlock.className = 'organisation-structure-block';
            
            const structureTitle = document.createElement('div');
            structureTitle.className = 'organisation-structure-title';
            structureTitle.textContent = subdivision.structure.title + ' :';
            structureBlock.appendChild(structureTitle);
            
            subdivision.structure.levels.forEach(level => {
                const levelItem = document.createElement('div');
                levelItem.className = 'organisation-level-item';
                levelItem.textContent = level;
                structureBlock.appendChild(levelItem);
            });
            
            subContent.appendChild(structureBlock);
        }

        // Unités de terrain
        if (subdivision.unites) {
            const unitesBlock = document.createElement('div');
            unitesBlock.className = 'organisation-unites-block';
            
            const unitesTitle = document.createElement('div');
            unitesTitle.className = 'organisation-unites-title';
            unitesTitle.textContent = subdivision.unites.title + ' :';
            unitesBlock.appendChild(unitesTitle);
            
            const unitesList = document.createElement('div');
            unitesList.className = 'organisation-unites-list';
            
            subdivision.unites.items.forEach(unite => {
                const uniteItem = document.createElement('div');
                uniteItem.className = 'organisation-unite-item';
                
                const uniteIcon = document.createElement('span');
                uniteIcon.className = 'organisation-unite-icon';
                uniteIcon.textContent = unite.icon;
                
                const uniteName = document.createElement('span');
                uniteName.className = 'organisation-unite-name';
                uniteName.textContent = unite.name;
                
                uniteItem.appendChild(uniteIcon);
                uniteItem.appendChild(uniteName);
                unitesList.appendChild(uniteItem);
            });
            
            unitesBlock.appendChild(unitesList);
            subContent.appendChild(unitesBlock);
        }

        // Détails
        if (subdivision.details) {
            subdivision.details.forEach(detail => {
                const detailItem = document.createElement('div');
                detailItem.className = 'organisation-detail-item';
                detailItem.textContent = detail;
                subContent.appendChild(detailItem);
            });
        }

        // Trilogie (GIGN)
        if (subdivision.trilogie) {
            const trilogieBlock = document.createElement('div');
            trilogieBlock.className = 'organisation-trilogie-block';
            
            const trilogieTitle = document.createElement('div');
            trilogieTitle.className = 'organisation-trilogie-title';
            trilogieTitle.textContent = subdivision.trilogie.title + ' :';
            trilogieBlock.appendChild(trilogieTitle);
            
            subdivision.trilogie.items.forEach(item => {
                const trilogieItem = document.createElement('div');
                trilogieItem.className = 'organisation-trilogie-item';
                trilogieItem.textContent = item;
                trilogieBlock.appendChild(trilogieItem);
            });
            
            subContent.appendChild(trilogieBlock);
        }

        // Composition (GR)
        if (subdivision.composition) {
            const compositionBlock = document.createElement('div');
            compositionBlock.className = 'organisation-composition-block';
            
            const compositionTitle = document.createElement('div');
            compositionTitle.className = 'organisation-composition-title';
            compositionTitle.textContent = 'Composition :';
            compositionBlock.appendChild(compositionTitle);
            
            subdivision.composition.forEach(item => {
                const compItem = document.createElement('div');
                compItem.className = 'organisation-composition-item';
                compItem.textContent = item;
                compositionBlock.appendChild(compItem);
            });
            
            subContent.appendChild(compositionBlock);
        }

        // Branches (Spécialisées)
        if (subdivision.branches) {
            const branchesBlock = document.createElement('div');
            branchesBlock.className = 'organisation-branches-block';
            
            subdivision.branches.forEach(branch => {
                const branchItem = document.createElement('div');
                branchItem.className = 'organisation-branch-item';
                branchItem.textContent = branch;
                branchesBlock.appendChild(branchItem);
            });
            
            subContent.appendChild(branchesBlock);
        }

        subCard.appendChild(subContent);
        subdivisionsContainer.appendChild(subCard);
    });

    sheetContainer.appendChild(subdivisionsContainer);

    // Boîte de conseil
    const conseilBox = document.createElement('div');
    conseilBox.className = 'organisation-conseil-box';
    
    const conseilHeader = document.createElement('div');
    conseilHeader.className = 'organisation-conseil-header';
    
    const conseilIcon = document.createElement('span');
    conseilIcon.className = 'organisation-conseil-icon';
    conseilIcon.textContent = conseil.icon;
    
    const conseilTitle = document.createElement('span');
    conseilTitle.className = 'organisation-conseil-title';
    conseilTitle.textContent = conseil.title;
    
    conseilHeader.appendChild(conseilIcon);
    conseilHeader.appendChild(conseilTitle);
    
    const conseilText = document.createElement('div');
    conseilText.className = 'organisation-conseil-text';
    conseilText.textContent = conseil.text;
    
    conseilBox.appendChild(conseilHeader);
    conseilBox.appendChild(conseilText);
    sheetContainer.appendChild(conseilBox);

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

