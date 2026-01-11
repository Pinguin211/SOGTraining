import { makePrompt } from '../../logic/prompt-maker.js';
import { PROMPT_CONTEXTS } from '../../data/prompt-context.js';
import { PROMPT_EXPECTED_FORMATS } from '../../data/prompt-expected.js';
import { PROMPT_PREF_KEY } from '../../data/constants.js';

/**
 * Charge les préférences de prompt depuis le localStorage
 * @returns {{contextId: string, formatId: string}}
 */
function loadPromptPreferences() {
    try {
        const saved = localStorage.getItem(PROMPT_PREF_KEY);
        if (saved) {
            const prefs = JSON.parse(saved);
            // Vérifier que les IDs existent dans les objets disponibles
            if (PROMPT_CONTEXTS[prefs.contextId] && PROMPT_EXPECTED_FORMATS[prefs.formatId]) {
                return {
                    contextId: prefs.contextId,
                    formatId: prefs.formatId
                };
            }
        }
    } catch (err) {
        console.error('Erreur lors du chargement des préférences:', err);
    }
    // Valeurs par défaut
    return {
        contextId: 'officier',
        formatId: 'standard'
    };
}

/**
 * Sauvegarde les préférences de prompt dans le localStorage
 * @param {string} contextId - ID du contexte sélectionné
 * @param {string} formatId - ID du format sélectionné
 */
function savePromptPreferences(contextId, formatId) {
    try {
        localStorage.setItem(PROMPT_PREF_KEY, JSON.stringify({
            contextId,
            formatId
        }));
    } catch (err) {
        console.error('Erreur lors de la sauvegarde des préférences:', err);
    }
}

/**
 * Crée un modal d'exportation avec formulaire
 * @param {Array<{question: string, answer: string}>} data - Données à exporter
 * @returns {HTMLElement}
 */
export function createExportModal(data) {
    // Vérifier si les données sont vides
    const isEmpty = !data || !Array.isArray(data) || data.length === 0;
    
    // Charger les préférences sauvegardées
    const savedPrefs = loadPromptPreferences();
    let selectedContextId = savedPrefs.contextId;
    let selectedFormatId = savedPrefs.formatId;
    
    // Fonction pour générer le prompt avec le contexte et format sélectionnés
    function generatePrompt() {
        const selectedContext = PROMPT_CONTEXTS[selectedContextId];
        const selectedFormat = PROMPT_EXPECTED_FORMATS[selectedFormatId];
        return makePrompt(selectedContext.content, selectedFormat.content, data);
    }
    
    // Générer le prompt initial
    let prompt = generatePrompt();
    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'export-modal-overlay';
    
    // Modal
    const modal = document.createElement('div');
    modal.className = 'export-modal';
    
    // En-tête
    const header = document.createElement('div');
    header.className = 'export-modal-header';
    
    const title = document.createElement('h2');
    title.textContent = 'Exportation des données';
    header.appendChild(title);
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'export-modal-close';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', () => {
        overlay.remove();
    });
    header.appendChild(closeBtn);
    
    // Corps du modal
    const body = document.createElement('div');
    body.className = 'export-modal-body';
    
    // Avertissement si les données sont vides
    if (isEmpty) {
        const warning = document.createElement('div');
        warning.className = 'export-warning';
        warning.innerHTML = `
            <div class="export-warning-icon">⚠️</div>
            <div class="export-warning-content">
                <strong>Aucune donnée à exporter</strong>
                <p>Vous n'avez pas encore répondu à des questions. Répondez à au moins une question pour pouvoir exporter vos données.</p>
            </div>
        `;
        body.appendChild(warning);
    }
    
    // Onglets pour basculer entre Prompt et JSON (Prompt par défaut)
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'export-tabs';
    
    const promptTab = document.createElement('button');
    promptTab.className = 'export-tab active';
    promptTab.textContent = 'Prompt';
    promptTab.dataset.tab = 'prompt';
    
    const jsonTab = document.createElement('button');
    jsonTab.className = 'export-tab';
    jsonTab.textContent = 'JSON';
    jsonTab.dataset.tab = 'json';
    
    tabsContainer.appendChild(promptTab);
    tabsContainer.appendChild(jsonTab);
    
    // Conteneur pour le contenu
    const contentContainer = document.createElement('div');
    contentContainer.className = 'export-content-container';
    
    // Zone de texte pour le JSON
    const jsonContainer = document.createElement('div');
    jsonContainer.className = 'export-content-panel';
    jsonContainer.dataset.panel = 'json';
    
    const jsonLabel = document.createElement('label');
    jsonLabel.textContent = 'JSON formaté (copiable)';
    jsonLabel.className = 'export-json-label';
    
    const jsonTextarea = document.createElement('textarea');
    jsonTextarea.className = 'export-json-textarea';
    jsonTextarea.readOnly = true;
    jsonTextarea.value = isEmpty ? '[]' : JSON.stringify(data, null, 2);
    if (isEmpty) {
        jsonTextarea.disabled = true;
    }
    
    // Bouton copier JSON
    const copyJsonBtn = document.createElement('button');
    copyJsonBtn.className = 'btn-copy-json';
    copyJsonBtn.textContent = 'Copier le JSON';
    if (isEmpty) {
        copyJsonBtn.disabled = true;
        copyJsonBtn.style.opacity = '0.5';
        copyJsonBtn.style.cursor = 'not-allowed';
    } else {
        copyJsonBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(jsonTextarea.value);
                copyJsonBtn.textContent = '✓ Copié !';
                setTimeout(() => {
                    copyJsonBtn.textContent = 'Copier le JSON';
                }, 2000);
            } catch (err) {
                console.error('Erreur lors de la copie :', err);
                alert("Erreur lors de la copie. Vérifiez la console.");
            }
        });
    }
    
    jsonContainer.appendChild(jsonLabel);
    jsonContainer.appendChild(jsonTextarea);
    jsonContainer.appendChild(copyJsonBtn);
    
    // Zone de texte pour le Prompt
    const promptContainer = document.createElement('div');
    promptContainer.className = 'export-content-panel active';
    promptContainer.dataset.panel = 'prompt';
    
    // Sélecteur de contexte
    const contextSelectorContainer = document.createElement('div');
    contextSelectorContainer.className = 'export-context-selector';
    
    const contextLabel = document.createElement('label');
    contextLabel.textContent = 'Contexte d\'analyse :';
    contextLabel.className = 'export-context-label';
    
    const contextSelect = document.createElement('select');
    contextSelect.className = 'export-context-select';
    if (isEmpty) {
        contextSelect.disabled = true;
    }
    
    Object.values(PROMPT_CONTEXTS).forEach(context => {
        const option = document.createElement('option');
        option.value = context.id;
        option.textContent = context.label;
        if (context.id === selectedContextId) {
            option.selected = true;
        }
        contextSelect.appendChild(option);
    });
    
    contextSelect.addEventListener('change', (e) => {
        selectedContextId = e.target.value;
        savePromptPreferences(selectedContextId, selectedFormatId);
        if (!isEmpty) {
            prompt = generatePrompt();
            promptTextarea.value = prompt;
        }
    });
    
    contextSelectorContainer.appendChild(contextLabel);
    contextSelectorContainer.appendChild(contextSelect);
    
    // Sélecteur de format
    const formatSelectorContainer = document.createElement('div');
    formatSelectorContainer.className = 'export-context-selector';
    
    const formatLabel = document.createElement('label');
    formatLabel.textContent = 'Format d\'analyse :';
    formatLabel.className = 'export-context-label';
    
    const formatSelect = document.createElement('select');
    formatSelect.className = 'export-context-select';
    if (isEmpty) {
        formatSelect.disabled = true;
    }
    
    Object.values(PROMPT_EXPECTED_FORMATS).forEach(format => {
        const option = document.createElement('option');
        option.value = format.id;
        option.textContent = format.label;
        if (format.id === selectedFormatId) {
            option.selected = true;
        }
        formatSelect.appendChild(option);
    });
    
    formatSelect.addEventListener('change', (e) => {
        selectedFormatId = e.target.value;
        savePromptPreferences(selectedContextId, selectedFormatId);
        if (!isEmpty) {
            prompt = generatePrompt();
            promptTextarea.value = prompt;
        }
    });
    
    formatSelectorContainer.appendChild(formatLabel);
    formatSelectorContainer.appendChild(formatSelect);
    
    const promptLabel = document.createElement('label');
    promptLabel.textContent = 'Prompt d\'analyse (copiable)';
    promptLabel.className = 'export-json-label';
    
    const promptTextarea = document.createElement('textarea');
    promptTextarea.className = 'export-json-textarea';
    promptTextarea.readOnly = true;
    promptTextarea.value = isEmpty ? 'Aucune donnée disponible pour générer le prompt.' : prompt;
    if (isEmpty) {
        promptTextarea.disabled = true;
    }
    
    // Bouton copier Prompt
    const copyPromptBtn = document.createElement('button');
    copyPromptBtn.className = 'btn-copy-json';
    copyPromptBtn.textContent = 'Copier le Prompt';
    if (isEmpty) {
        copyPromptBtn.disabled = true;
        copyPromptBtn.style.opacity = '0.5';
        copyPromptBtn.style.cursor = 'not-allowed';
    } else {
        copyPromptBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(promptTextarea.value);
                copyPromptBtn.textContent = '✓ Copié !';
                setTimeout(() => {
                    copyPromptBtn.textContent = 'Copier le Prompt';
                }, 2000);
            } catch (err) {
                console.error('Erreur lors de la copie :', err);
                alert("Erreur lors de la copie. Vérifiez la console.");
            }
        });
    }
    
    promptContainer.appendChild(contextSelectorContainer);
    promptContainer.appendChild(formatSelectorContainer);
    promptContainer.appendChild(promptLabel);
    promptContainer.appendChild(promptTextarea);
    promptContainer.appendChild(copyPromptBtn);
    
    contentContainer.appendChild(jsonContainer);
    contentContainer.appendChild(promptContainer);
    
    // Gestion des onglets
    jsonTab.addEventListener('click', () => {
        jsonTab.classList.add('active');
        promptTab.classList.remove('active');
        jsonContainer.classList.add('active');
        promptContainer.classList.remove('active');
    });
    
    promptTab.addEventListener('click', () => {
        promptTab.classList.add('active');
        jsonTab.classList.remove('active');
        promptContainer.classList.add('active');
        jsonContainer.classList.remove('active');
    });
    
    body.appendChild(tabsContainer);
    body.appendChild(contentContainer);
    
    // Footer
    const footer = document.createElement('div');
    footer.className = 'export-modal-footer';
    
    const closeFooterBtn = document.createElement('button');
    closeFooterBtn.className = 'btn-close-modal';
    closeFooterBtn.textContent = 'Fermer';
    closeFooterBtn.addEventListener('click', () => {
        overlay.remove();
    });
    footer.appendChild(closeFooterBtn);
    
    // Assemblage
    modal.appendChild(header);
    modal.appendChild(body);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    
    // Fermer en cliquant sur l'overlay
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
    
    // Fermer avec Escape
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    return overlay;
}

