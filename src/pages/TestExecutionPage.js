import { selectQuestionsForTest } from '../logic/test-selector.js';
import { createTestQuestionCard } from '../components/form/TestQuestionCard.js';
import { getSavedData, saveAnswer } from '../logic/storage.js';
import { router } from '../logic/router.js';
import { questionsArray } from '../data/questions/index.js';

/**
 * Initialise et affiche la page d'exécution du test
 */
export function initTestExecutionPage() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Element #content-area not found');
        return;
    }

    // Récupérer la configuration du test
    const testConfigStr = sessionStorage.getItem('testConfig');
    if (!testConfigStr) {
        // Pas de configuration, rediriger vers la page de configuration
        router.navigate('test-config');
        return;
    }

    const testConfig = JSON.parse(testConfigStr);
    const { type, count, questionIds } = testConfig;

    // Sélectionner les questions
    let selectedQuestions;
    if (questionIds && Array.isArray(questionIds) && questionIds.length > 0) {
        // Utiliser les questions spécifiées (pour repasser un test)
        selectedQuestions = questionIds
            .map(id => questionsArray.find(q => q.id === id))
            .filter(q => q !== undefined) // Filtrer les questions non trouvées
            .sort((a, b) => {
                // Trier par position pour maintenir l'ordre chronologique
                const posA = a.logic?.position ?? 999;
                const posB = b.logic?.position ?? 999;
                if (posA !== posB) {
                    return posA - posB;
                }
                // Si même position, garder l'ordre des IDs
                return questionIds.indexOf(a.id) - questionIds.indexOf(b.id);
            });
    } else {
        // Sélectionner les questions normalement
        selectedQuestions = selectQuestionsForTest(count, type);
    }

    if (selectedQuestions.length === 0) {
        contentArea.innerHTML = `
            <div class="test-error">
                <h2>Aucune question disponible</h2>
                <p>Il n'y a pas assez de questions disponibles pour ce test.</p>
                <button class="btn-back" onclick="window.location.hash = '#test-config'">Retour à la configuration</button>
            </div>
        `;
        return;
    }

    // État du test
    let currentQuestionIndex = 0;
    const testTimestamp = Date.now();
    const savedData = getSavedData();
    const testAnswers = {}; // Stockage temporaire des réponses du test
    const questionCards = {}; // Stockage des références aux cartes de questions

    // Fonction pour afficher la question actuelle
    function displayCurrentQuestion() {
        contentArea.innerHTML = '';

        const question = selectedQuestions[currentQuestionIndex];
        const questionId = question.id;
        const testQuestionId = `test_${testTimestamp}_${questionId}_${currentQuestionIndex}`;
        
        // Vérifier si la question existe déjà dans les réponses sauvegardées
        const existingAnswer = savedData[questionId] || '';
        const hasExistingAnswer = existingAnswer.trim() !== '';
        
        // En-tête du test
        const testHeader = document.createElement('div');
        testHeader.className = 'test-header';
        
        const testTitle = document.createElement('h1');
        testTitle.textContent = 'Test d\'entraînement';
        testHeader.appendChild(testTitle);
        
        const testInfo = document.createElement('div');
        testInfo.className = 'test-info';
        testInfo.innerHTML = `
            <span class="test-progress">Question ${currentQuestionIndex + 1} / ${selectedQuestions.length}</span>
        `;
        testHeader.appendChild(testInfo);
        
        contentArea.appendChild(testHeader);

        // Conteneur de la question
        const questionContainer = document.createElement('div');
        questionContainer.id = 'test-question-container';
        questionContainer.className = 'test-question-content';
        
        // Numéro de question
        const questionNumber = document.createElement('div');
        questionNumber.className = 'test-question-number';
        questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
        questionContainer.appendChild(questionNumber);

        // Avertissement si réponse existante
        if (hasExistingAnswer) {
            const warningDiv = document.createElement('div');
            warningDiv.className = 'test-existing-answer-warning';
            
            const warningText = document.createElement('p');
            warningText.textContent = '⚠️ Vous avez déjà une réponse sauvegardée pour cette question.';
            warningDiv.appendChild(warningText);
            
            const toggleContainer = document.createElement('div');
            toggleContainer.className = 'test-replace-toggle';
            
            const toggleLabel = document.createElement('label');
            toggleLabel.className = 'toggle-label';
            
            const toggleInput = document.createElement('input');
            toggleInput.type = 'checkbox';
            toggleInput.id = 'replace-answer-toggle';
            toggleInput.checked = true; // Par défaut, on remplace
            toggleInput.className = 'toggle-input';
            
            const toggleSpan = document.createElement('span');
            toggleSpan.className = 'toggle-slider';
            
            const toggleText = document.createElement('span');
            toggleText.className = 'toggle-text';
            toggleText.textContent = 'Remplacer ma réponse actuelle';
            
            toggleLabel.appendChild(toggleInput);
            toggleLabel.appendChild(toggleSpan);
            toggleLabel.appendChild(toggleText);
            toggleContainer.appendChild(toggleLabel);
            
            warningDiv.appendChild(toggleContainer);
            questionContainer.appendChild(warningDiv);
        }
        
        // Créer la carte de question pour le test (toujours ouverte, prête à écrire)
        const questionWrapper = document.createElement('div');
        questionWrapper.className = 'test-question-wrapper';
        
        // Déterminer quelle réponse afficher
        // Priorité : réponse du test en cours > réponse existante (si toggle non coché) > vide
        let currentAnswer = testAnswers[questionId] || '';
        if (!currentAnswer && hasExistingAnswer) {
            // Vérifier le toggle pour savoir si on doit charger la réponse existante
            const toggle = document.getElementById('replace-answer-toggle');
            if (toggle && !toggle.checked) {
                currentAnswer = existingAnswer;
                testAnswers[questionId] = existingAnswer;
            }
        }
        
        // Créer le composant de question de test (textarea toujours visible)
        const questionCard = createTestQuestionCard(
            questionWrapper,
            questionId,
            question.text,
            currentAnswer
        );
        
        // Gérer le toggle si une réponse existante existe
        if (hasExistingAnswer) {
            const toggle = document.getElementById('replace-answer-toggle');
            if (toggle) {
                toggle.addEventListener('change', (e) => {
                    if (!e.target.checked) {
                        // Toggle décoché : charger la réponse existante
                        questionCard.setValue(existingAnswer);
                        testAnswers[questionId] = existingAnswer;
                    } else {
                        // Toggle coché : vider pour permettre une nouvelle réponse
                        if (testAnswers[questionId] === existingAnswer) {
                            questionCard.setValue('');
                            delete testAnswers[questionId];
                        }
                    }
                });
            }
        }
        
        // Stocker la référence à la carte de question
        questionCards[questionId] = questionCard;
        
        questionContainer.appendChild(questionWrapper);
        
        // Focus automatique sur le textarea
        setTimeout(() => {
            questionCard.focus();
        }, 100);
        contentArea.appendChild(questionContainer);

        // Navigation
        const navigationContainer = document.createElement('div');
        navigationContainer.className = 'test-navigation';
        
        // Bouton Précédent
        const prevButton = document.createElement('button');
        prevButton.className = 'btn-nav btn-prev';
        prevButton.textContent = '← Précédent';
        prevButton.disabled = currentQuestionIndex === 0;
        prevButton.addEventListener('click', () => {
            saveCurrentAnswer();
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayCurrentQuestion();
            }
        });
        
        // Bouton Suivant / Terminer
        const nextButton = document.createElement('button');
        nextButton.className = 'btn-nav btn-next';
        
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            nextButton.textContent = 'Terminer le test';
            nextButton.className += ' btn-finish';
            nextButton.addEventListener('click', () => {
                saveCurrentAnswer();
                finishTest();
            });
        } else {
            nextButton.textContent = 'Suivant →';
            nextButton.addEventListener('click', () => {
                saveCurrentAnswer();
                currentQuestionIndex++;
                displayCurrentQuestion();
            });
        }
        
        navigationContainer.appendChild(prevButton);
        navigationContainer.appendChild(nextButton);
        contentArea.appendChild(navigationContainer);
    }

    // Fonction pour sauvegarder la réponse actuelle
    function saveCurrentAnswer() {
        const question = selectedQuestions[currentQuestionIndex];
        const questionId = question.id;
        
        // Récupérer la réponse depuis le composant de question
        const questionCard = questionCards[questionId];
        if (questionCard) {
            const answer = questionCard.getValue() || '';
            
            // Vérifier si on doit remplacer la réponse existante
            const replaceToggle = document.getElementById('replace-answer-toggle');
            const shouldReplace = !replaceToggle || replaceToggle.checked;
            
            // Sauvegarder dans question_responses_data (localStorage) à chaque clic sur "Suivant"
            if (answer.trim() !== '') {
                // Stocker dans les réponses du test
                testAnswers[questionId] = answer;
                
                // Sauvegarder dans question_responses_data
                const existingAnswer = savedData[questionId] || '';
                if (shouldReplace || existingAnswer.trim() === '') {
                    saveAnswer(questionId, answer);
                }
            } else {
                // Si la réponse est vide, on peut la supprimer si elle existait
                if (testAnswers[questionId]) {
                    delete testAnswers[questionId];
                }
            }
        }
    }

    // Fonction pour terminer le test
    function finishTest() {
        if (confirm('Êtes-vous sûr de vouloir terminer le test ?')) {
            // Récupérer les données sauvegardées à jour
            const currentSavedData = getSavedData();
            
            // Construire l'objet questions selon le nouveau format
            // Format: {id_question: reponse}
            const questions = {};
            
            selectedQuestions.forEach(question => {
                const questionId = question.id;
                // Récupérer la réponse depuis le composant de question si disponible
                let answer = '';
                const questionCard = questionCards[questionId];
                if (questionCard) {
                    answer = questionCard.getValue() || '';
                } else {
                    // Fallback : récupérer depuis testAnswers ou currentSavedData
                    answer = testAnswers[questionId] || currentSavedData[questionId] || '';
                }
                
                // Toujours ajouter la question, même si la réponse est vide
                questions[questionId] = answer || ''; // S'assurer que answer est au moins une chaîne vide
            });
            
            // Créer le nouvel objet de test avec la date
            const testDate = new Date().toISOString();
            const newTestResult = {
                date: testDate,
                questions: questions
            };
            
            // Charger les résultats existants
            const existingTestsStr = localStorage.getItem('testResults');
            let existingTests = [];
            
            if (existingTestsStr) {
                try {
                    const parsed = JSON.parse(existingTestsStr);
                    if (Array.isArray(parsed)) {
                        existingTests = parsed;
                    } else {
                        // Format invalide, réinitialiser
                        existingTests = [];
                    }
                } catch (e) {
                    console.error('Erreur lors du chargement des résultats:', e);
                    existingTests = [];
                }
            }
            
            // Ajouter le nouveau test au début du tableau
            existingTests.unshift(newTestResult);
            
            // Sauvegarder
            localStorage.setItem('testResults', JSON.stringify(existingTests));
            
            // Retourner à la page de configuration
            sessionStorage.removeItem('testConfig');
            router.navigate('test-config');
        }
    }

    // Afficher la première question
    displayCurrentQuestion();

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

