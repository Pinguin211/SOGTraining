/**
 * Crée un titre de section
 * @param {string} title - Titre de la section
 * @returns {HTMLElement}
 */
export function createSectionTitle(title) {
    const h2 = document.createElement('h2');
    h2.textContent = title;
    return h2;
}

