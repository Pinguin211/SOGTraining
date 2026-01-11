import { router } from '../../logic/router.js';
import { revisionSheets } from '../../data/revision-sheets.js';

/**
 * Initialise et affiche la page de la fiche Formation SOG
 */
export function initRevisionSheetFormationSOG() {
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
    const sheet = revisionSheets.find(s => s.id === 'formation-sog-2026');
    if (!sheet || !sheet.content) {
        contentArea.innerHTML = '<p>Fiche non trouvée</p>';
        return;
    }

    const { title, duration, salary, phases } = sheet.content;

    // Conteneur principal
    const sheetContainer = document.createElement('div');
    sheetContainer.className = 'revision-sheet-container';

    // En-tête avec icône
    const header = document.createElement('div');
    header.className = 'revision-sheet-header';
    
    const icon = document.createElement('div');
    icon.className = 'revision-sheet-header-icon';
    icon.textContent = sheet.icon;
    
    const headerContent = document.createElement('div');
    headerContent.className = 'revision-sheet-header-content';
    
    const mainTitle = document.createElement('h1');
    mainTitle.className = 'revision-sheet-main-title';
    mainTitle.textContent = title;
    
    const metaInfo = document.createElement('div');
    metaInfo.className = 'revision-sheet-meta';
    
    const durationEl = document.createElement('div');
    durationEl.className = 'revision-meta-item';
    durationEl.innerHTML = `<span class="meta-label">⏱️ Durée totale :</span> <span class="meta-value">${duration}</span>`;
    
    const salaryEl = document.createElement('div');
    salaryEl.className = 'revision-meta-item';
    salaryEl.innerHTML = `<span class="meta-label">💰 Rémunération :</span> <span class="meta-value">${salary}</span>`;
    
    metaInfo.appendChild(durationEl);
    metaInfo.appendChild(salaryEl);
    
    headerContent.appendChild(mainTitle);
    headerContent.appendChild(metaInfo);
    
    header.appendChild(icon);
    header.appendChild(headerContent);
    sheetContainer.appendChild(header);

    // Phases
    const phasesContainer = document.createElement('div');
    phasesContainer.className = 'revision-phases-container';

    phases.forEach((phase, index) => {
        const phaseCard = document.createElement('div');
        phaseCard.className = 'revision-phase-card';
        phaseCard.dataset.phaseNumber = phase.number;
        
        // Ajouter la classe de couleur si définie
        if (phase.color) {
            phaseCard.classList.add(`phase-${phase.color}`);
        }

        // Numéro et titre de la phase avec icône
        const phaseHeader = document.createElement('div');
        phaseHeader.className = 'revision-phase-header';
        
        // Icône de la phase
        if (phase.icon) {
            const phaseIcon = document.createElement('div');
            phaseIcon.className = 'revision-phase-icon';
            phaseIcon.textContent = phase.icon;
            phaseHeader.appendChild(phaseIcon);
        }
        
        const phaseNumber = document.createElement('div');
        phaseNumber.className = 'revision-phase-number';
        phaseNumber.textContent = phase.number;
        
        const phaseTitle = document.createElement('h2');
        phaseTitle.className = 'revision-phase-title';
        phaseTitle.textContent = phase.title;
        
        phaseHeader.appendChild(phaseNumber);
        phaseHeader.appendChild(phaseTitle);
        phaseCard.appendChild(phaseHeader);

        // Durée
        if (phase.duration) {
            const phaseDuration = document.createElement('div');
            phaseDuration.className = 'revision-phase-duration';
            phaseDuration.textContent = `⏱️ ${phase.duration}`;
            phaseCard.appendChild(phaseDuration);
        }

        // Objectif
        if (phase.objective) {
            const phaseObjective = document.createElement('div');
            phaseObjective.className = 'revision-phase-objective';
            phaseObjective.innerHTML = `<strong>Objectif :</strong> ${phase.objective}`;
            phaseCard.appendChild(phaseObjective);
        }

        // Contenu
        const phaseContent = document.createElement('div');
        phaseContent.className = 'revision-phase-content';

        if (Array.isArray(phase.content)) {
            phase.content.forEach(item => {
                if (typeof item === 'string') {
                    // Contenu simple (liste)
                    const contentItem = document.createElement('div');
                    contentItem.className = 'revision-content-item';
                    contentItem.textContent = item;
                    phaseContent.appendChild(contentItem);
                } else if (item.category) {
                    // Contenu avec catégorie
                    const categoryBlock = document.createElement('div');
                    categoryBlock.className = 'revision-category-block';
                    
                    const categoryHeader = document.createElement('div');
                    categoryHeader.className = 'revision-category-header';
                    
                    // Icône de la catégorie si présente
                    if (item.icon) {
                        const categoryIcon = document.createElement('span');
                        categoryIcon.className = 'revision-category-icon';
                        categoryIcon.textContent = item.icon;
                        categoryHeader.appendChild(categoryIcon);
                    }
                    
                    const categoryTitle = document.createElement('h3');
                    categoryTitle.className = 'revision-category-title';
                    categoryTitle.textContent = item.category;
                    categoryHeader.appendChild(categoryTitle);
                    
                    categoryBlock.appendChild(categoryHeader);
                    
                    if (item.items && Array.isArray(item.items)) {
                        item.items.forEach(subItem => {
                            const subItemEl = document.createElement('div');
                            subItemEl.className = 'revision-content-item';
                            subItemEl.textContent = subItem;
                            categoryBlock.appendChild(subItemEl);
                        });
                    }
                    
                    phaseContent.appendChild(categoryBlock);
                }
            });
        }

        phaseCard.appendChild(phaseContent);
        phasesContainer.appendChild(phaseCard);
    });

    sheetContainer.appendChild(phasesContainer);
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

