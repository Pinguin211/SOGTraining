import { sectionsStructure } from '../data/sections.js';
import { router } from '../logic/router.js';
import { createExportModal } from '../components/index.js';
import { questionsArray } from '../data/questions/index.js';

/**
 * Initialise et affiche la page de configuration du test
 */
export function initTestConfigPage() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Element #content-area not found');
        return;
    }

    contentArea.innerHTML = '';

    // Titre
    const h1 = document.createElement('h1');
    h1.textContent = 'Configuration du Test';
    contentArea.appendChild(h1);

    // Formulaire
    const form = document.createElement('form');
    form.className = 'test-config-form';
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        startTest();
    });

    // Type de section
    const typeGroup = document.createElement('div');
    typeGroup.className = 'form-group';
    
    const typeLabel = document.createElement('label');
    typeLabel.setAttribute('for', 'test-type');
    typeLabel.textContent = 'Type de questions';
    typeLabel.className = 'form-label';
    
    const typeSelect = document.createElement('select');
    typeSelect.id = 'test-type';
    typeSelect.name = 'test-type';
    typeSelect.className = 'form-select';
    
    // Option "Tous"
    const optionAll = document.createElement('option');
    optionAll.value = 'tous';
    optionAll.textContent = 'Tous';
    optionAll.selected = true;
    typeSelect.appendChild(optionAll);
    
    // Options pour chaque section
    sectionsStructure.forEach(section => {
        const option = document.createElement('option');
        option.value = section.id;
        option.textContent = section.title;
        typeSelect.appendChild(option);
    });
    
    typeGroup.appendChild(typeLabel);
    typeGroup.appendChild(typeSelect);

    // Nombre de questions
    const countGroup = document.createElement('div');
    countGroup.className = 'form-group';
    
    const countLabel = document.createElement('label');
    countLabel.setAttribute('for', 'test-count');
    countLabel.textContent = 'Nombre de questions';
    countLabel.className = 'form-label';
    
    const countSelect = document.createElement('select');
    countSelect.id = 'test-count';
    countSelect.name = 'test-count';
    countSelect.className = 'form-select';
    
    // Options de 5 à 50 par pas de 5
    for (let i = 5; i <= 50; i += 5) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (i === 10) {
            option.selected = true; // Valeur par défaut
        }
        countSelect.appendChild(option);
    }
    
    countGroup.appendChild(countLabel);
    countGroup.appendChild(countSelect);

    // Bouton Start
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'form-group form-group-button';
    
    const startButton = document.createElement('button');
    startButton.type = 'submit';
    startButton.className = 'btn-start-test';
    startButton.textContent = 'Commencer le test';
    
    buttonGroup.appendChild(startButton);

    // Assemblage du formulaire
    form.appendChild(typeGroup);
    form.appendChild(countGroup);
    form.appendChild(buttonGroup);
    
    contentArea.appendChild(form);

    // Fonction pour démarrer le test
    function startTest() {
        const testType = typeSelect.value;
        const testCount = parseInt(countSelect.value, 10);
        
        // Stocker la configuration dans sessionStorage
        sessionStorage.setItem('testConfig', JSON.stringify({
            type: testType,
            count: testCount
        }));
        
        // Naviguer vers la page de test
        router.navigate('test');
    }

    // Afficher la liste des tests effectués
    displayTestHistory();

    // Masquer la barre d'actions
    const actionBar = document.querySelector('.action-bar');
    if (actionBar) {
        actionBar.style.display = 'none';
    }
    
    // Afficher la navbar (la page de configuration est dans la navbar)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = '';
    }

    /**
     * Affiche la liste des tests effectués
     */
    function displayTestHistory() {
        // Récupérer les tests sauvegardés
        const testsStr = localStorage.getItem('testResults');
        if (!testsStr) {
            return; // Pas de tests sauvegardés
        }

        let tests = [];
        try {
            tests = JSON.parse(testsStr);
            if (!Array.isArray(tests)) {
                // Format invalide, réinitialiser
                tests = [];
            }
        } catch (e) {
            console.error('Erreur lors du chargement des tests:', e);
            return;
        }

        // Créer la section des tests
        const testsSection = document.createElement('div');
        testsSection.className = 'test-history-section';

        const testsTitle = document.createElement('h2');
        testsTitle.textContent = 'Tests effectués';
        testsSection.appendChild(testsTitle);

        const testsList = document.createElement('div');
        testsList.className = 'test-history-list';

        // Les tests sont déjà triés par date (plus récent en premier grâce à unshift)
        if (tests.length === 0) {
            const noTestsMsg = document.createElement('p');
            noTestsMsg.className = 'no-tests-message';
            noTestsMsg.textContent = 'Aucun test effectué pour le moment.';
            testsList.appendChild(noTestsMsg);
        } else {
            // Afficher les tests avec les questions importées
            tests.forEach((testResult) => {
                    if (!testResult.date || !testResult.questions) {
                        return; // Format invalide
                    }

                    const testItem = document.createElement('div');
                    testItem.className = 'test-history-item';

                    const testInfo = document.createElement('div');
                    testInfo.className = 'test-history-info';

                    // Formater la date pour l'affichage
                    const testDate = new Date(testResult.date);
                    const formattedDate = testDate.toLocaleString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    });

                    const testNameEl = document.createElement('div');
                    testNameEl.className = 'test-history-name';
                    testNameEl.textContent = formattedDate;

                    const testCountEl = document.createElement('div');
                    testCountEl.className = 'test-history-count';
                    const questionCount = Object.keys(testResult.questions).length;
                    testCountEl.textContent = `${questionCount} question${questionCount > 1 ? 's' : ''}`;

                    testInfo.appendChild(testNameEl);
                    testInfo.appendChild(testCountEl);

                    const buttonsContainer = document.createElement('div');
                    buttonsContainer.className = 'test-history-buttons';

                    const exportButton = document.createElement('button');
                    exportButton.className = 'btn-export-test';
                    exportButton.textContent = 'Exportation';
                    exportButton.addEventListener('click', () => {
                        // Convertir les données du test au format attendu par le modal
                        // Format: [{question: string, answer: string}]
                        const exportData = Object.entries(testResult.questions).map(([questionId, answer]) => {
                            // Trouver la question correspondante pour récupérer le texte
                            const question = questionsArray.find(q => q.id === questionId);
                            return {
                                question: question ? question.text : `Question ${questionId}`,
                                answer: answer || '' // S'assurer que answer existe
                            };
                        });

                        // Ouvrir le modal d'export avec les données du test
                        const exportModal = createExportModal(exportData);
                        document.body.appendChild(exportModal);
                    });

                    const restartButton = document.createElement('button');
                    restartButton.className = 'btn-restart-test';
                    restartButton.textContent = 'Recommencer';
                    restartButton.addEventListener('click', () => {
                        // Récupérer les IDs des questions du test
                        const questionIds = Object.keys(testResult.questions);
                        
                        // Stocker la configuration dans sessionStorage avec les questions spécifiques
                        sessionStorage.setItem('testConfig', JSON.stringify({
                            questionIds: questionIds,
                            type: null, // Pas utilisé quand questionIds est fourni
                            count: questionIds.length
                        }));
                        
                        // Naviguer vers la page de test
                        router.navigate('test');
                    });

                    const deleteButton = document.createElement('button');
                    deleteButton.className = 'btn-delete-test';
                    deleteButton.textContent = 'Supprimer';
                    deleteButton.addEventListener('click', () => {
                        if (confirm(`Êtes-vous sûr de vouloir supprimer le test du ${formattedDate} ? Cette action est irréversible.`)) {
                            // Charger les tests existants
                            const existingTestsStr = localStorage.getItem('testResults');
                            if (existingTestsStr) {
                                try {
                                    const existingTests = JSON.parse(existingTestsStr);
                                    // Supprimer le test en trouvant celui avec la même date
                                    if (Array.isArray(existingTests)) {
                                        const indexToDelete = existingTests.findIndex(t => t.date === testResult.date);
                                        if (indexToDelete !== -1) {
                                            existingTests.splice(indexToDelete, 1);
                                            // Sauvegarder
                                            localStorage.setItem('testResults', JSON.stringify(existingTests));
                                            // Rafraîchir l'affichage
                                            const existingSection = contentArea.querySelector('.test-history-section');
                                            if (existingSection) {
                                                existingSection.remove();
                                            }
                                            displayTestHistory();
                                        }
                                    }
                                } catch (e) {
                                    console.error('Erreur lors de la suppression du test:', e);
                                    alert('Erreur lors de la suppression du test.');
                                }
                            }
                        }
                    });

                    buttonsContainer.appendChild(restartButton);
                    buttonsContainer.appendChild(exportButton);
                    buttonsContainer.appendChild(deleteButton);

                    testItem.appendChild(testInfo);
                    testItem.appendChild(buttonsContainer);
                    testsList.appendChild(testItem);
                });
        }

        testsSection.appendChild(testsList);
        contentArea.appendChild(testsSection);
    }
}

