/**
 * Crée un système de dropdown pour sélectionner les sections
 * @param {Array} options - Tableau d'objets {id, label, content}
 * @param {Function} onSelect - Callback appelé lors de la sélection
 * @returns {HTMLElement}
 */
export function createDropdown(options, onSelect) {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'dropdown-container';

    // Créer le bouton dropdown
    const dropdownButton = document.createElement('button');
    dropdownButton.className = 'dropdown-button';
    dropdownButton.type = 'button';
    dropdownButton.id = 'dropdown-button';
    
    // Icône flèche
    const arrowIcon = document.createElement('span');
    arrowIcon.className = 'dropdown-arrow';
    arrowIcon.innerHTML = '▼';

    // Afficher le label de l'option sélectionnée (première par défaut)
    const selectedLabel = document.createElement('span');
    selectedLabel.className = 'dropdown-selected';
    selectedLabel.textContent = options[0]?.label || 'Sélectionner';
    dropdownButton.appendChild(selectedLabel);
    dropdownButton.appendChild(arrowIcon);

    // Créer le menu déroulant
    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';
    dropdownMenu.id = 'dropdown-menu';

    // Créer les options
    options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'dropdown-option';
        if (index === 0) {
            optionElement.classList.add('active');
        }
        optionElement.dataset.optionId = option.id;
        optionElement.textContent = option.label;
        
        optionElement.addEventListener('click', () => {
            // Mettre à jour le label sélectionné
            selectedLabel.textContent = option.label;
            
            // Mettre à jour l'option active
            dropdownMenu.querySelectorAll('.dropdown-option').forEach(opt => {
                opt.classList.remove('active');
            });
            optionElement.classList.add('active');
            
            // Fermer le menu
            dropdownMenu.classList.remove('show');
            dropdownButton.classList.remove('active');
            
            // Appeler le callback
            if (onSelect) {
                onSelect(option.id, option);
            }
        });

        dropdownMenu.appendChild(optionElement);
    });

    // Toggle du menu au clic sur le bouton
    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
        dropdownButton.classList.toggle('active');
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            dropdownButton.classList.remove('active');
        }
    });

    dropdownContainer.appendChild(dropdownButton);
    dropdownContainer.appendChild(dropdownMenu);

    return dropdownContainer;
}

