/**
 * Crée un système d'onglets
 * @param {Array} tabs - Tableau d'objets {id, label, content}
 * @returns {HTMLElement}
 */
export function createTabs(tabs) {
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'tabs-container';

    // Créer la barre d'onglets
    const tabsBar = document.createElement('div');
    tabsBar.className = 'tabs-bar';

    // Créer le conteneur de contenu
    const tabsContent = document.createElement('div');
    tabsContent.className = 'tabs-content';

    tabs.forEach((tab, index) => {
        // Créer le bouton d'onglet
        const tabButton = document.createElement('button');
        tabButton.className = 'tab-button';
        tabButton.dataset.tabId = tab.id;
        tabButton.textContent = tab.label;
        
        if (index === 0) {
            tabButton.classList.add('active');
        }

        tabButton.addEventListener('click', () => {
            switchTab(tab.id, tabsContainer);
        });

        tabsBar.appendChild(tabButton);

        // Créer le contenu de l'onglet
        const tabPanel = document.createElement('div');
        tabPanel.className = 'tab-panel';
        tabPanel.id = `tab-${tab.id}`;
        tabPanel.dataset.tabId = tab.id;
        
        if (index === 0) {
            tabPanel.classList.add('active');
        }

        // Ajouter le contenu
        if (typeof tab.content === 'function') {
            tab.content(tabPanel);
        } else if (tab.content instanceof HTMLElement) {
            tabPanel.appendChild(tab.content);
        } else {
            tabPanel.innerHTML = tab.content || '';
        }

        tabsContent.appendChild(tabPanel);
    });

    tabsContainer.appendChild(tabsBar);
    tabsContainer.appendChild(tabsContent);

    return tabsContainer;
}

/**
 * Change l'onglet actif
 * @param {string} tabId - ID de l'onglet à activer
 * @param {HTMLElement} container - Conteneur des onglets
 */
function switchTab(tabId, container) {
    // Désactiver tous les onglets
    const buttons = container.querySelectorAll('.tab-button');
    const panels = container.querySelectorAll('.tab-panel');

    buttons.forEach(btn => {
        if (btn.dataset.tabId === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    panels.forEach(panel => {
        if (panel.dataset.tabId === tabId) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
}

