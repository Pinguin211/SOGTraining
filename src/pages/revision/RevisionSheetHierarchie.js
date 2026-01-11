import { router } from '../../logic/router.js';
import { revisionSheets } from '../../data/revision-sheets.js';

/**
 * Initialise et affiche la page de la fiche Hiérarchie et Grades
 */
export function initRevisionSheetHierarchie() {
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
    const sheet = revisionSheets.find(s => s.id === 'hierarchie-grades');
    if (!sheet || !sheet.content) {
        contentArea.innerHTML = '<p>Fiche non trouvée</p>';
        return;
    }

    const { title, warning, categories } = sheet.content;

    // Conteneur principal
    const sheetContainer = document.createElement('div');
    sheetContainer.className = 'revision-sheet-container hierarchie-sheet';

    // En-tête avec titre
    const header = document.createElement('div');
    header.className = 'hierarchie-header';
    
    const titleIcon = document.createElement('span');
    titleIcon.className = 'hierarchie-title-icon';
    titleIcon.textContent = '📝';
    
    const titleText = document.createElement('span');
    titleText.textContent = title;
    
    header.appendChild(titleIcon);
    header.appendChild(titleText);
    sheetContainer.appendChild(header);

    // Bannière d'avertissement rouge
    const warningBanner = document.createElement('div');
    warningBanner.className = 'hierarchie-warning-banner';
    warningBanner.textContent = warning.text;
    sheetContainer.appendChild(warningBanner);

    // Section des trois colonnes
    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'hierarchie-categories-container';

    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = `hierarchie-category-card hierarchie-category-${category.color}`;

        // En-tête de la catégorie
        const categoryHeader = document.createElement('div');
        categoryHeader.className = `hierarchie-category-header hierarchie-header-${category.color}`;
        
        const categoryIcon = document.createElement('div');
        categoryIcon.className = 'hierarchie-category-icon';
        categoryIcon.textContent = category.icon;
        
        const categoryTitleContainer = document.createElement('div');
        categoryTitleContainer.className = 'hierarchie-category-title-container';
        
        const categoryNumber = document.createElement('div');
        categoryNumber.className = 'hierarchie-category-number';
        categoryNumber.textContent = `${category.number}.`;
        
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'hierarchie-category-title';
        categoryTitle.textContent = category.title;
        
        if (category.subtitle) {
            const categorySubtitle = document.createElement('div');
            categorySubtitle.className = 'hierarchie-category-subtitle';
            categorySubtitle.textContent = category.subtitle;
            categoryTitleContainer.appendChild(categorySubtitle);
        }
        
        categoryTitleContainer.appendChild(categoryNumber);
        categoryTitleContainer.appendChild(categoryTitle);
        
        categoryHeader.appendChild(categoryIcon);
        categoryHeader.appendChild(categoryTitleContainer);
        categoryCard.appendChild(categoryHeader);

        // Contenu de la catégorie
        const categoryContent = document.createElement('div');
        categoryContent.className = `hierarchie-category-content hierarchie-content-${category.color}`;

        // Si la catégorie a des rangs simples
        if (category.ranks) {
            const ranksList = document.createElement('ul');
            ranksList.className = 'hierarchie-ranks-list';
            
            category.ranks.forEach(rank => {
                const rankItem = document.createElement('li');
                rankItem.className = 'hierarchie-rank-item';
                rankItem.textContent = rank;
                ranksList.appendChild(rankItem);
            });
            
            categoryContent.appendChild(ranksList);
        }

        // Si la catégorie a des sous-catégories (Officiers)
        if (category.subcategories) {
            category.subcategories.forEach(subcat => {
                const subcatBlock = document.createElement('div');
                subcatBlock.className = 'hierarchie-subcategory-block';
                
                const subcatTitle = document.createElement('div');
                subcatTitle.className = 'hierarchie-subcategory-title';
                subcatTitle.textContent = `${subcat.name} :`;
                subcatBlock.appendChild(subcatTitle);
                
                const subcatList = document.createElement('ul');
                subcatList.className = 'hierarchie-ranks-list';
                
                subcat.ranks.forEach(rank => {
                    const rankItem = document.createElement('li');
                    rankItem.className = 'hierarchie-rank-item';
                    
                    if (typeof rank === 'string') {
                        rankItem.textContent = rank;
                    } else {
                        // Rang avec étoiles (Généraux)
                        const rankText = document.createElement('span');
                        rankText.textContent = rank.text;
                        rankItem.appendChild(rankText);
                        
                        if (rank.stars) {
                            const starsContainer = document.createElement('span');
                            starsContainer.className = 'hierarchie-stars';
                            for (let i = 0; i < rank.stars; i++) {
                                const star = document.createElement('span');
                                star.textContent = '⭐';
                                starsContainer.appendChild(star);
                            }
                            rankItem.appendChild(starsContainer);
                        }
                    }
                    
                    subcatList.appendChild(rankItem);
                });
                
                subcatBlock.appendChild(subcatList);
                categoryContent.appendChild(subcatBlock);
            });
        }

        // Boîte d'attention pour les Sous-Officiers
        if (category.attention) {
            const attentionBox = document.createElement('div');
            attentionBox.className = 'hierarchie-attention-box';
            
            const attentionIcon = document.createElement('div');
            attentionIcon.className = 'hierarchie-attention-icon';
            attentionIcon.textContent = category.attention.icon;
            
            const attentionText = document.createElement('div');
            attentionText.className = 'hierarchie-attention-text';
            attentionText.textContent = category.attention.text;
            
            attentionBox.appendChild(attentionIcon);
            attentionBox.appendChild(attentionText);
            categoryContent.appendChild(attentionBox);
        }

        categoryCard.appendChild(categoryContent);
        categoriesContainer.appendChild(categoryCard);
    });

    sheetContainer.appendChild(categoriesContainer);
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

