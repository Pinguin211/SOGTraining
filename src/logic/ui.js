/**
 * Affiche le statut de sauvegarde
 */
export function showSaveStatus() {
    const status = document.getElementById('save-status');
    if (status) {
        status.style.opacity = '1';
        setTimeout(() => {
            status.style.opacity = '0';
        }, 2000);
    }
}

