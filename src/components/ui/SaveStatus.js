/**
 * Crée et retourne l'élément de statut de sauvegarde
 * @returns {HTMLElement}
 */
export function createSaveStatus() {
    const status = document.createElement('div');
    status.id = 'save-status';
    status.textContent = 'Sauvegardé ✔';
    return status;
}

