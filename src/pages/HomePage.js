import { questionsArray } from '../data/questions/index.js';
import { getSavedData } from '../logic/storage.js';
import { createQuestionCard } from '../components/form/QuestionCard.js';
import { sectionsStructure } from '../data/sections.js';
import { router } from '../logic/router.js';
import { revisionSheets } from '../data/revision-sheets.js';

/**
 * Initialise et affiche la page d'accueil
 */
export function initHomePage() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Element #content-area not found');
        return;
    }

    // Vider le contenu existant
    contentArea.innerHTML = '';

    // Créer le contenu de bienvenue
    const welcomeSection = document.createElement('div');
    welcomeSection.className = 'welcome-section';

    const h1 = document.createElement('h1');
    h1.textContent = 'Bienvenue';
    welcomeSection.appendChild(h1);

    const p = document.createElement('p');
    p.className = 'welcome-text';
    p.textContent = 'Bienvenue dans votre outil de préparation à l\'oral SOG. Utilisez la navigation pour accéder aux différentes sections.';
    welcomeSection.appendChild(p);

    contentArea.appendChild(welcomeSection);

    // Container principal avec grid
    const mainContainer = document.createElement('div');
    mainContainer.className = 'home-main-container';

    // 1. Composant Question Aléatoire
    const randomQuestionSection = createRandomQuestionSection();
    mainContainer.appendChild(randomQuestionSection);

    // 2. Formulaire de test
    const testFormSection = createTestFormSection();
    mainContainer.appendChild(testFormSection);

    // 3. Composant Fiches de révision
    const revisionSheetsSection = createRevisionSheetsSection();
    mainContainer.appendChild(revisionSheetsSection);

    contentArea.appendChild(mainContainer);

    // Masquer la barre d'actions sur la page d'accueil
    const actionBar = document.querySelector('.action-bar');
    if (actionBar) {
        actionBar.style.display = 'none';
    }
    
    // Afficher la navbar (la page d'accueil est dans la navbar)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = '';
    }
}

/**
 * Crée le composant de question aléatoire
 */
function createRandomQuestionSection() {
    const section = document.createElement('div');
    section.className = 'home-section home-random-question';

    const title = document.createElement('h2');
    title.textContent = 'Question du jour';
    section.appendChild(title);

    const savedData = getSavedData();
    
    // Trouver les questions non répondues
    const unansweredQuestions = questionsArray.filter(q => {
        const answer = savedData[q.id];
        return !answer || answer.trim() === '';
    });

    // Sélectionner une question
    let selectedQuestion;
    if (unansweredQuestions.length > 0) {
        // Question aléatoire parmi les non répondues
        const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
        selectedQuestion = unansweredQuestions[randomIndex];
    } else {
        // Toutes les questions sont répondues, prendre une question aléatoire
        const randomIndex = Math.floor(Math.random() * questionsArray.length);
        selectedQuestion = questionsArray[randomIndex];
    }

    const questionInfo = document.createElement('div');
    questionInfo.className = 'random-question-info';
    
    if (unansweredQuestions.length > 0) {
        questionInfo.textContent = `Question non répondue (${unansweredQuestions.length} restante${unansweredQuestions.length > 1 ? 's' : ''})`;
        questionInfo.className += ' unanswered';
    } else {
        questionInfo.textContent = 'Toutes les questions ont été répondues - Question aléatoire';
        questionInfo.className += ' all-answered';
    }
    
    section.appendChild(questionInfo);

    // Container pour la carte de question
    const questionContainer = document.createElement('div');
    questionContainer.className = 'random-question-container';
    
    const savedValue = savedData[selectedQuestion.id] || '';
    createQuestionCard(questionContainer, selectedQuestion.id, selectedQuestion.text, savedValue);
    
    section.appendChild(questionContainer);

    return section;
}

/**
 * Crée le formulaire pour démarrer un nouveau test
 */
function createTestFormSection() {
    const section = document.createElement('div');
    section.className = 'home-section home-test-form';

    const title = document.createElement('h2');
    title.textContent = 'Démarrer un nouveau test';
    section.appendChild(title);

    const form = document.createElement('form');
    form.className = 'home-test-form';
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        startTest();
    });

    // Type de section
    const typeGroup = document.createElement('div');
    typeGroup.className = 'form-group';
    
    const typeLabel = document.createElement('label');
    typeLabel.setAttribute('for', 'home-test-type');
    typeLabel.textContent = 'Type de questions';
    typeLabel.className = 'form-label';
    
    const typeSelect = document.createElement('select');
    typeSelect.id = 'home-test-type';
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
    countLabel.setAttribute('for', 'home-test-count');
    countLabel.textContent = 'Nombre de questions';
    countLabel.className = 'form-label';
    
    const countSelect = document.createElement('select');
    countSelect.id = 'home-test-count';
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
    
    section.appendChild(form);

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

    return section;
}

/**
 * Crée le composant avec 2 fiches de révision aléatoires
 */
function createRevisionSheetsSection() {
    const section = document.createElement('div');
    section.className = 'home-section home-revision-sheets';

    const title = document.createElement('h2');
    title.textContent = 'Fiches de révision';
    section.appendChild(title);

    // Sélectionner 2 fiches aléatoires
    const availableSheets = revisionSheets.filter(sheet => sheet.content);
    const shuffled = [...availableSheets].sort(() => Math.random() - 0.5);
    const selectedSheets = shuffled.slice(0, 2);

    const sheetsContainer = document.createElement('div');
    sheetsContainer.className = 'home-revision-sheets-container';

    selectedSheets.forEach(sheet => {
        const sheetCard = document.createElement('div');
        sheetCard.className = 'home-revision-sheet-card';
        sheetCard.addEventListener('click', () => {
            router.navigate(`revision-sheet-${sheet.id}`);
        });

        const sheetIcon = document.createElement('div');
        sheetIcon.className = 'home-revision-sheet-icon';
        sheetIcon.textContent = sheet.icon;

        const sheetTitle = document.createElement('div');
        sheetTitle.className = 'home-revision-sheet-title';
        sheetTitle.textContent = sheet.title;

        sheetCard.appendChild(sheetIcon);
        sheetCard.appendChild(sheetTitle);
        sheetsContainer.appendChild(sheetCard);
    });

    section.appendChild(sheetsContainer);

    return section;
}
