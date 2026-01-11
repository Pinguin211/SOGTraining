/**
 * Crée une carte de question spécifique pour les tests
 * Le textarea est toujours visible et prêt à écrire
 * @param {HTMLElement} container - Conteneur parent
 * @param {string} id - ID de la question
 * @param {string} questionText - Texte de la question
 * @param {string} savedValue - Valeur sauvegardée (optionnelle)
 * @param {number} maxChars - Nombre maximum de caractères (défaut: 5000)
 */
export function createTestQuestionCard(container, id, questionText, savedValue = '', maxChars = 5000) {
    const card = document.createElement('div');
    card.className = 'test-question-card';

    // En-tête de la question
    const questionHeader = document.createElement('div');
    questionHeader.className = 'test-question-header';

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = questionText;
    label.className = 'test-question-label';

    questionHeader.appendChild(label);

    // Conteneur du textarea
    const textareaContainer = document.createElement('div');
    textareaContainer.className = 'test-textarea-container';

    const textarea = document.createElement('textarea');
    textarea.id = id;
    textarea.value = savedValue || '';
    textarea.placeholder = "Votre réponse ici...";
    textarea.className = 'test-question-textarea';
    textarea.maxLength = maxChars;

    // Compteur de caractères
    const charCounter = document.createElement('div');
    charCounter.className = 'test-char-counter';
    charCounter.id = `${id}-counter`;
    
    function updateCharCounter(value) {
        const currentLength = value.length;
        charCounter.textContent = `${currentLength} / ${maxChars}`;

        charCounter.classList.remove('warning', 'error');
        if (currentLength >= maxChars * 0.9) {
            charCounter.classList.add('warning');
        }
        if (currentLength >= maxChars) {
            charCounter.classList.add('error');
        }
    }

    updateCharCounter(savedValue || '');

    textarea.addEventListener('input', (e) => {
        updateCharCounter(e.target.value);
    });

    textareaContainer.appendChild(textarea);
    textareaContainer.appendChild(charCounter);

    card.appendChild(questionHeader);
    card.appendChild(textareaContainer);
    container.appendChild(card);

    // Retourner une fonction pour obtenir la valeur
    return {
        getValue: () => textarea.value,
        setValue: (value) => {
            textarea.value = value || '';
            updateCharCounter(textarea.value);
        },
        focus: () => textarea.focus()
    };
}

