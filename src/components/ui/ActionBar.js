import { clearAllData } from '../../logic/storage.js';
import { getQuestionResponseDataForExport } from '../../logic/export.js';
import { createExportModal } from '../form/ExportModal.js';

/**
 * Crée la barre d'actions flottante avec les boutons
 * @returns {HTMLElement}
 */
export function createActionBar() {
    const actionBar = document.createElement('div');
    actionBar.className = 'action-bar';

    const exportBtn = document.createElement('button');
    exportBtn.className = 'btn-export';
    exportBtn.textContent = 'Exportation';
    exportBtn.addEventListener('click', () => {
        const data = getQuestionResponseDataForExport();
        const modal = createExportModal(data);
        document.body.appendChild(modal);
    });

    const clearBtn = document.createElement('button');
    clearBtn.className = 'btn-clear';
    clearBtn.textContent = 'Tout effacer';
    clearBtn.addEventListener('click', () => {
        if(confirm("Attention ! Cela va effacer toutes vos réponses définitivement. Êtes-vous sûr ?")) {
            clearAllData();
            location.reload();
        }
    });

    actionBar.appendChild(exportBtn);
    actionBar.appendChild(clearBtn);

    return actionBar;
}

