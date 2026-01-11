import { questionsDB } from '../data/questions/index.js';
import { getSavedData } from './storage.js';

/**
 * Récupère les données questions/réponses au format d'export
 * Ne retourne que les questions qui ont une réponse sauvegardée
 * @returns {Array<{question: string, answer: string}>}
 */
export function getQuestionResponseDataForExport() {
    const data = getSavedData();
    
    // Création d'un tableau d'objets uniquement pour les questions avec réponse
    // Format: [{question: "Texte de la question", answer: "Réponse utilisateur"}]
    const exportArray = Object.keys(questionsDB)
        .filter(key => {
            // Filtrer : ne garder que les questions qui ont une réponse sauvegardée
            const answer = data[key];
            return answer && answer.trim() !== '';
        })
        .map(key => {
            return {
                question: questionsDB[key],
                answer: data[key]
            };
        });
    
    return exportArray;
}
