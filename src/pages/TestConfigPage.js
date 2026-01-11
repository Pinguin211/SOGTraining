import { sectionsStructure } from '../data/sections.js';
import { router } from '../logic/router.js';
import { createExportModal } from '../components/index.js';

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

    // Nom du test
    const nameGroup = document.createElement('div');
    nameGroup.className = 'form-group';
    
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'test-name');
    nameLabel.textContent = 'Nom du test';
    nameLabel.className = 'form-label';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'test-name';
    nameInput.name = 'test-name';
    nameInput.className = 'form-input';
    nameInput.placeholder = 'Ex: Test d\'entraînement 1';
    nameInput.required = true;
    
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);

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
    form.appendChild(nameGroup);
    form.appendChild(typeGroup);
    form.appendChild(countGroup);
    form.appendChild(buttonGroup);
    
    contentArea.appendChild(form);

    // Fonction pour démarrer le test
    function startTest() {
        const testName = nameInput.value.trim();
        const testType = typeSelect.value;
        const testCount = parseInt(countSelect.value, 10);
        
        if (!testName) {
            alert('Veuillez entrer un nom pour le test');
            return;
        }
        
        // Stocker la configuration dans sessionStorage
        sessionStorage.setItem('testConfig', JSON.stringify({
            name: testName,
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

        let tests = {};
        try {
            tests = JSON.parse(testsStr);
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

        // Trier les tests par ordre inverse (plus récent en premier)
        const testEntries = Object.entries(tests);
        if (testEntries.length === 0) {
            const noTestsMsg = document.createElement('p');
            noTestsMsg.className = 'no-tests-message';
            noTestsMsg.textContent = 'Aucun test effectué pour le moment.';
            testsList.appendChild(noTestsMsg);
        } else {
            testEntries.forEach(([testName, testData]) => {
                if (!Array.isArray(testData)) {
                    return; // Format invalide
                }

                const testItem = document.createElement('div');
                testItem.className = 'test-history-item';

                const testInfo = document.createElement('div');
                testInfo.className = 'test-history-info';

                const testNameEl = document.createElement('div');
                testNameEl.className = 'test-history-name';
                testNameEl.textContent = testName;

                const testCountEl = document.createElement('div');
                testCountEl.className = 'test-history-count';
                testCountEl.textContent = `${testData.length} question${testData.length > 1 ? 's' : ''}`;

                testInfo.appendChild(testNameEl);
                testInfo.appendChild(testCountEl);

                const buttonsContainer = document.createElement('div');
                buttonsContainer.className = 'test-history-buttons';

                const exportButton = document.createElement('button');
                exportButton.className = 'btn-export-test';
                exportButton.textContent = 'Exportation';
                exportButton.addEventListener('click', () => {
                    // Convertir les données du test au format attendu par le modal
                    const exportData = testData.map(item => ({
                        question: item.question,
                        answer: item.answer || '' // S'assurer que answer existe
                    }));

                    // Ouvrir le modal d'export avec les données du test
                    const exportModal = createExportModal(exportData);
                    document.body.appendChild(exportModal);
                });

                const deleteButton = document.createElement('button');
                deleteButton.className = 'btn-delete-test';
                deleteButton.textContent = 'Supprimer';
                deleteButton.addEventListener('click', () => {
                    if (confirm(`Êtes-vous sûr de vouloir supprimer le test "${testName}" ? Cette action est irréversible.`)) {
                        // Charger les tests existants
                        const existingTestsStr = localStorage.getItem('testResults');
                        if (existingTestsStr) {
                            try {
                                const existingTests = JSON.parse(existingTestsStr);
                                // Supprimer le test spécifique
                                delete existingTests[testName];
                                // Sauvegarder
                                localStorage.setItem('testResults', JSON.stringify(existingTests));
                                // Rafraîchir l'affichage
                                const existingSection = contentArea.querySelector('.test-history-section');
                                if (existingSection) {
                                    existingSection.remove();
                                }
                                displayTestHistory();
                            } catch (e) {
                                console.error('Erreur lors de la suppression du test:', e);
                                alert('Erreur lors de la suppression du test.');
                            }
                        }
                    }
                });

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

