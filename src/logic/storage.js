import { STORAGE_KEY } from '../data/constants.js';

/**
 * Récupère toutes les données sauvegardées depuis le localStorage
 * @returns {Object} Objet contenant les réponses sauvegardées
 */
export function getSavedData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
}

/**
 * Sauvegarde une réponse pour une question donnée
 * Si la valeur trimée est vide, supprime la clé du tableau
 * @param {string} id - ID de la question
 * @param {string} value - Réponse de l'utilisateur
 */
export function saveAnswer(id, value) {
    const data = getSavedData();
    const trimmedValue = value.trim();
    
    if (trimmedValue === '') {
        // Si la valeur est vide après trim, supprimer la clé
        delete data[id];
    } else {
        // Sinon, sauvegarder la valeur
        data[id] = value;
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Efface une réponse spécifique
 * @param {string} id - ID de la question
 */
export function clearAnswer(id) {
    const data = getSavedData();
    delete data[id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Efface toutes les données sauvegardées
 */
export function clearAllData() {
    localStorage.removeItem(STORAGE_KEY);
}

