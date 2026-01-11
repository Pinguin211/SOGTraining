import { saveAnswer, clearAnswer } from '../../logic/storage.js';
import { showSaveStatus } from '../../logic/ui.js';

/**
 * Crée une carte de question avec son textarea
 * @param {HTMLElement} container - Conteneur parent
 * @param {string} id - ID de la question
 * @param {string} questionText - Texte de la question
 * @param {string} savedValue - Valeur sauvegardée
 */
export function createQuestionCard(container, id, questionText, savedValue) {
    const card = document.createElement('div');
    card.className = 'question-card';

    // En-tête de la question avec label et boutons
    const questionHeader = document.createElement('div');
    questionHeader.className = 'question-header';

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = questionText;

    // Conteneur pour les boutons (aligné à droite)
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'question-buttons';

    // Bouton "Répondre" / "Modifier ma réponse"
    const replyBtn = document.createElement('button');
    replyBtn.className = 'btn-reply';
    replyBtn.textContent = savedValue && savedValue.trim() !== '' ? 'Modifier ma réponse' : 'Répondre';
    
    // Bouton "Effacer ma réponse"
    const clearBtn = document.createElement('button');
    clearBtn.className = 'btn-clear-answer';
    clearBtn.textContent = 'Effacer ma réponse';

    // Bouton "Enregistrer" (visible uniquement en mode édition)
    const saveBtn = document.createElement('button');
    saveBtn.className = 'btn-save-answer';
    saveBtn.textContent = 'Enregistrer';
    saveBtn.style.display = 'none';

    // Div pour afficher la réponse (non-éditable)
    const answerDisplay = document.createElement('div');
    answerDisplay.className = 'answer-display';
    answerDisplay.id = `${id}-display`;

    // Conteneur pour le textarea et le compteur
    const textareaContainer = document.createElement('div');
    textareaContainer.className = 'textarea-container';

    // Textarea (seulement en mode édition)
    const textarea = document.createElement('textarea');
    textarea.id = id;
    textarea.value = savedValue || '';
    textarea.placeholder = "Votre réponse ici...";
    textarea.className = 'question-textarea';
    textarea.maxLength = 5000;
    
    // Compteur de caractères
    const charCounter = document.createElement('div');
    charCounter.className = 'char-counter';
    charCounter.id = `${id}-counter`;
    updateCharCounter(id, savedValue || '');

    // Événement pour mettre à jour le compteur
    textarea.addEventListener('input', (e) => {
        updateCharCounter(id, e.target.value);
    });
    
    // Événement pour sauvegarder quand on quitte le textarea
    textarea.addEventListener('blur', () => {
        const value = textarea.value;
        // Sauvegarder automatiquement
        saveAnswer(id, value);
        showSaveStatus();
        // Passer en mode affichage
        const trimmedValue = value.trim();
        exitEditMode(id, trimmedValue);
    });

    textareaContainer.appendChild(textarea);
    textareaContainer.appendChild(charCounter);

    // Bouton "Répondre" / "Modifier ma réponse"
    replyBtn.addEventListener('click', () => {
        enterEditMode(id);
    });

    // Bouton "Effacer ma réponse"
    clearBtn.addEventListener('click', () => {
        if (confirm('Êtes-vous sûr de vouloir effacer votre réponse ?')) {
            clearAnswer(id);
            textarea.value = '';
            exitEditMode(id, '');
        }
    });

    // Bouton "Enregistrer"
    saveBtn.addEventListener('click', () => {
        const value = textarea.value;
        // Sauvegarder
        saveAnswer(id, value);
        showSaveStatus();
        // Passer en mode affichage
        const trimmedValue = value.trim();
        exitEditMode(id, trimmedValue);
    });

    buttonsContainer.appendChild(replyBtn);
    buttonsContainer.appendChild(clearBtn);
    buttonsContainer.appendChild(saveBtn);

    questionHeader.appendChild(label);
    questionHeader.appendChild(buttonsContainer);

    card.appendChild(questionHeader);
    card.appendChild(answerDisplay);
    card.appendChild(textareaContainer);
    container.appendChild(card);

    // Initialiser l'état d'affichage
    if (savedValue && savedValue.trim() !== '') {
        // Il y a une réponse : afficher la réponse et les deux boutons
        answerDisplay.textContent = savedValue;
        answerDisplay.style.display = 'block';
        textareaContainer.style.display = 'none';
        replyBtn.textContent = 'Modifier ma réponse';
        replyBtn.style.display = 'inline-block';
        clearBtn.style.display = 'inline-block';
    } else {
        // Pas de réponse : masquer tout sauf le bouton "Répondre"
        answerDisplay.style.display = 'none';
        textareaContainer.style.display = 'none';
        replyBtn.textContent = 'Répondre';
        replyBtn.style.display = 'inline-block';
        clearBtn.style.display = 'none';
    }
}

/**
 * Passe en mode édition
 * @param {string} id - ID de la question
 */
function enterEditMode(id) {
    const textarea = document.getElementById(id);
    if (!textarea) return;

    const card = textarea.closest('.question-card');
    if (!card) return;

    const answerDisplay = card.querySelector('.answer-display');
    const replyBtn = card.querySelector('.btn-reply');
    const clearBtn = card.querySelector('.btn-clear-answer');
    const saveBtn = card.querySelector('.btn-save-answer');

    const textareaContainer = card.querySelector('.textarea-container');
    
    if (textarea && answerDisplay && textareaContainer) {
        // Masquer l'affichage de la réponse
        answerDisplay.style.display = 'none';
        // Afficher le conteneur du textarea
        textareaContainer.style.display = 'block';
        textarea.focus();
        // Masquer les boutons "Répondre" et "Effacer", afficher "Enregistrer"
        if (replyBtn) replyBtn.style.display = 'none';
        if (clearBtn) clearBtn.style.display = 'none';
        if (saveBtn) saveBtn.style.display = 'inline-block';
        // Faire défiler jusqu'au textarea
        textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/**
 * Sort du mode édition
 * @param {string} id - ID de la question
 * @param {string} value - Valeur de la réponse
 */
function exitEditMode(id, value) {
    const textarea = document.getElementById(id);
    if (!textarea) return;

    const card = textarea.closest('.question-card');
    if (!card) return;

    const answerDisplay = card.querySelector('.answer-display');
    const replyBtn = card.querySelector('.btn-reply');
    const clearBtn = card.querySelector('.btn-clear-answer');
    const saveBtn = card.querySelector('.btn-save-answer');

    if (!answerDisplay) return;

    // Masquer le bouton "Enregistrer" et réafficher les autres boutons
    if (saveBtn) saveBtn.style.display = 'none';

    const textareaContainer = card.querySelector('.textarea-container');
    
    if (value && value.trim() !== '') {
        // Il y a une réponse : afficher la réponse et les deux boutons
        answerDisplay.textContent = value;
        answerDisplay.style.display = 'block';
        if (textareaContainer) textareaContainer.style.display = 'none';
        if (replyBtn) {
            replyBtn.textContent = 'Modifier ma réponse';
            replyBtn.style.display = 'inline-block';
        }
        if (clearBtn) clearBtn.style.display = 'inline-block';
    } else {
        // Pas de réponse : masquer tout sauf le bouton "Répondre"
        answerDisplay.style.display = 'none';
        if (textareaContainer) textareaContainer.style.display = 'none';
        if (replyBtn) {
            replyBtn.textContent = 'Répondre';
            replyBtn.style.display = 'inline-block';
        }
        if (clearBtn) clearBtn.style.display = 'none';
    }
    
    // Mettre à jour le compteur
    updateCharCounter(id, value);
}

/**
 * Met à jour le compteur de caractères
 * @param {string} id - ID de la question
 * @param {string} value - Valeur du textarea
 */
function updateCharCounter(id, value) {
    const counter = document.getElementById(`${id}-counter`);
    if (!counter) return;
    
    const length = value.length;
    const maxLength = 5000;
    counter.textContent = `${length} / ${maxLength}`;
    
    // Changer la couleur si on approche de la limite
    counter.classList.remove('warning', 'error');
    if (length > maxLength * 0.9) {
        counter.classList.add('warning');
    }
    if (length >= maxLength) {
        counter.classList.add('error');
    }
}
