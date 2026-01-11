/**
 * Génère un prompt pour l'analyse des réponses
 * @param {string} context - Contexte de l'analyse (ROLE + CONTEXTE & ANGLE D'ATTAQUE)
 * @param {string} expected - Formulations attendues (STRUCTURE DU RAPPORT)
 * @param {Array<{question: string, answer: string}>} data - Données à analyser
 * @returns {string} - Prompt complet formaté
 */
export function makePrompt(context, expected, data) {
    // Convertir les données en JSON formaté
    const dataJson = JSON.stringify(data, null, 2);
    
    // Construire le prompt complet
    const prompt = `${context}

${expected}

# DONNÉES À ANALYSER (FORMAT JSON)

${dataJson}`;

    return prompt;
}

