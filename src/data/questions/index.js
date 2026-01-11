// Import de toutes les questions
import * as presentation from './00-presentation.js';
import * as personnalite from './01-personnalite-parcours.js';
import * as motivations from './02-motivations-projet.js';
import * as connaissances from './03-connaissances-institution.js';
import * as misesSituation from './04-mises-situation-ethique.js';
import * as pieges from './05-pieges.js';
import * as conclusion from './06-conclusion.js';

// Fusionner tous les objets de questions
const allQuestionsObjects = {
    ...presentation,
    ...personnalite,
    ...motivations,
    ...connaissances,
    ...misesSituation,
    ...pieges,
    ...conclusion
};

// Création d'un objet questionsDB pour compatibilité avec l'ancien code
// Format: { "I_presentation": "Présentez-vous en 2 ou 3 minutes.", ... }
export const questionsDB = {};
Object.keys(allQuestionsObjects).forEach(key => {
    questionsDB[key] = allQuestionsObjects[key].text;
});

// Création d'un tableau avec toutes les questions et leur structure complète
export const questionsArray = Object.keys(allQuestionsObjects).map(key => ({
    id: key,
    ...allQuestionsObjects[key]
}));

// Export des questions individuelles pour utilisation directe
export {
    presentation,
    personnalite,
    motivations,
    connaissances,
    misesSituation,
    pieges,
    conclusion
};
