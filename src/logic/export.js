import { questionsDB } from '../data/questions/index.js';
import { getSavedData } from './storage.js';

/**
 * Exporte toutes les questions et réponses au format JSON
 * @returns {Promise<void>}
 */
export async function exportData() {
    const data = getSavedData();
    
    // Création d'un tableau d'objets
    // Format: [{question: "Texte de la question", answer: "Réponse utilisateur"}]
    const exportArray = Object.keys(questionsDB).map(key => {
        return {
            question: questionsDB[key],
            answer: data[key] || "" // Réponse sauvegardée ou chaîne vide
        };
    });

    const jsonString = JSON.stringify(exportArray, null, 2);

    // Copier dans le presse-papier
    try {
        await navigator.clipboard.writeText(jsonString);
        alert("✅ Données copiées !\n\nFormat exporté : Tableau d'objets (Array)\n[{question: '...', answer: '...'}, ...]");
    } catch (err) {
        console.error('Erreur lors de la copie :', err);
        alert("Erreur lors de la copie. Vérifiez la console.");
    }
}

