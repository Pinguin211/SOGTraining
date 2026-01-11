import { questionsDB } from '../data/questions/index.js';
import { sectionsStructure } from '../data/sections.js';
import { getSavedData } from '../logic/storage.js';
import { createQuestionCard, createSectionTitle, createDropdown } from '../components/index.js';

/**
 * Initialise et affiche la page avec toutes les questions organisées par dropdown
 */
export function initAllQuestionsPage() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Element #content-area not found');
        return;
    }

    // Vider le contenu existant
    contentArea.innerHTML = '';

    // Ajouter le titre
    const h1 = document.createElement('h1');
    h1.textContent = 'Question d\'entrainement entretien oral';
    contentArea.appendChild(h1);

    const savedData = getSavedData();

    // Créer le conteneur pour le contenu des questions
    const questionsContainer = document.createElement('div');
    questionsContainer.id = 'questions-container';
    questionsContainer.className = 'questions-content';

    // Fonction pour afficher les questions d'une section
    function displayQuestions(sectionPrefix) {
        questionsContainer.innerHTML = '';
        
        if (sectionPrefix === 'tous') {
            // Afficher toutes les questions avec les titres de section
            sectionsStructure.forEach(section => {
                // Ajouter le titre de section
                const sectionTitle = createSectionTitle(section.title);
                questionsContainer.appendChild(sectionTitle);
                
                // Ajouter les questions de cette section
                Object.keys(questionsDB).forEach(key => {
                    if (key.startsWith(section.prefix)) {
                        createQuestionCard(
                            questionsContainer,
                            key,
                            questionsDB[key],
                            savedData[key] || ""
                        );
                    }
                });
            });
        } else {
            // Afficher les questions d'une section spécifique avec son titre
            const section = sectionsStructure.find(s => s.id === sectionPrefix);
            if (section) {
                // Ajouter le titre de section
                const sectionTitle = createSectionTitle(section.title);
                questionsContainer.appendChild(sectionTitle);
                
                // Ajouter les questions de cette section
                Object.keys(questionsDB).forEach(key => {
                    if (key.startsWith(section.prefix)) {
                        createQuestionCard(
                            questionsContainer,
                            key,
                            questionsDB[key],
                            savedData[key] || ""
                        );
                    }
                });
            }
        }
    }

    // Créer les options du dropdown
    const dropdownOptions = [
        {
            id: 'tous',
            label: 'Tous',
            content: () => displayQuestions('tous')
        },
        ...sectionsStructure.map(section => ({
            id: section.id,
            label: section.title,
            content: () => displayQuestions(section.id)
        }))
    ];

    // Créer le dropdown
    const dropdown = createDropdown(dropdownOptions, (selectedId, option) => {
        if (option.content) {
            option.content();
        }
    });

    contentArea.appendChild(dropdown);
    contentArea.appendChild(questionsContainer);

    // Afficher toutes les questions par défaut
    displayQuestions('tous');

    // Afficher la barre d'actions
    const actionBar = document.querySelector('.action-bar');
    if (actionBar) {
        actionBar.style.display = 'flex';
    }
}
