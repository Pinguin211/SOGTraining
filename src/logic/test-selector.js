import { questionsArray } from '../data/questions/index.js';
import { sectionsStructure } from '../data/sections.js';

/**
 * Sélectionne les questions pour un test selon les règles définies
 * @param {number} count - Nombre de questions à sélectionner
 * @param {string|null} sectionId - ID de la section (null pour toutes les sections)
 * @returns {Array} Tableau de questions sélectionnées avec leur ordre
 */
export function selectQuestionsForTest(count, sectionId = null) {
    // 1. Filtrer les questions selon la section
    let availableQuestions = questionsArray;
    
    if (sectionId && sectionId !== 'tous') {
        const section = sectionsStructure.find(s => s.id === sectionId);
        if (section) {
            availableQuestions = questionsArray.filter(q => q.id.startsWith(section.prefix));
        }
    }
    
    // 2. Trier par position (chronologie)
    const sortedByPosition = [...availableQuestions].sort((a, b) => {
        const posA = a.logic?.position ?? 999;
        const posB = b.logic?.position ?? 999;
        return posA - posB;
    });
    
    // 3. Sélectionner les questions selon les règles
    const selected = [];
    const selectedIds = new Set();
    const pendingFollowUps = new Map(); // Questions qui doivent suivre d'autres questions
    
    // Fonction pour ajouter une question et gérer son chaînage
    function addQuestion(question, checkLimit = true) {
        // Vérifier si on a déjà atteint la limite (sauf si checkLimit est false)
        if (checkLimit && selected.length >= count) {
            return; // Limite atteinte
        }
        
        if (selectedIds.has(question.id)) {
            return; // Déjà ajoutée
        }
        
        selected.push(question);
        selectedIds.add(question.id);
        
        // Règle 2: Chaînage forcé (logic.next)
        // Vérifier si on peut encore ajouter des questions avant d'ajouter la question suivante
        if (question.logic?.next && selected.length < count) {
            const nextQuestion = availableQuestions.find(q => q.id === question.logic.next);
            if (nextQuestion && !selectedIds.has(nextQuestion.id)) {
                // Ajouter la question suivante automatiquement seulement si on n'a pas atteint la limite
                addQuestion(nextQuestion, true);
            }
        }
        
        // Règle 3: Gérer les follow-ups en attente
        // Vérifier si on peut encore ajouter des questions avant d'ajouter les follow-ups
        if (pendingFollowUps.has(question.id) && selected.length < count) {
            const followUps = pendingFollowUps.get(question.id);
            followUps.forEach(followUp => {
                if (!selectedIds.has(followUp.id) && selected.length < count) {
                    addQuestion(followUp, true);
                }
            });
            pendingFollowUps.delete(question.id);
        }
    }
    
    // 4. Traiter les questions par position
    // D'abord, identifier les questions avec followUp qui doivent être liées
    availableQuestions.forEach(question => {
        if (question.logic?.followUp === true) {
            // Pour l'instant, on les traite comme des questions normales
            // mais on pourrait implémenter une logique plus complexe ici
        }
    });
    
    // 5. Sélectionner les questions de manière aléatoire, toutes positions confondues
    // Les questions avec position 0 ne sont plus forcées, elles sont sélectionnées aléatoirement
    // Mélanger toutes les questions disponibles pour une sélection vraiment aléatoire
    const allQuestionsShuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
    
    // Sélectionner les questions jusqu'à atteindre le nombre demandé
    for (const question of allQuestionsShuffled) {
        if (selected.length >= count) break;
        addQuestion(question);
    }
    
    // 8. Réorganiser selon l'ordre chronologique final
    return selected.sort((a, b) => {
        const posA = a.logic?.position ?? 999;
        const posB = b.logic?.position ?? 999;
        if (posA !== posB) {
            return posA - posB;
        }
        // Si même position, garder l'ordre d'ajout
        return selected.indexOf(a) - selected.indexOf(b);
    });
}

