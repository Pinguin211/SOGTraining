import { questionsArray } from '../data/questions/index.js';
import { sectionsStructure } from '../data/sections.js';
import { getSavedData } from './storage.js';

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
        // Si une question a un "next", ajouter automatiquement la question suivante
        // Cela inclut les questions avec followUp: true qui sont liées via next
        if (question.logic?.next && selected.length < count) {
            const nextQuestion = availableQuestions.find(q => q.id === question.logic.next);
            if (nextQuestion && !selectedIds.has(nextQuestion.id)) {
                // Ajouter la question suivante automatiquement seulement si on n'a pas atteint la limite
                addQuestion(nextQuestion, true);
            }
        }
    }
    
    // 4. Exclure les questions avec followUp: true de la sélection aléatoire
    // Ces questions ne doivent être ajoutées que via le chaînage (règle 2)
    const questionsWithoutFollowUp = availableQuestions.filter(
        question => question.logic?.followUp !== true
    );
    
    // 5. Règle : Filtrer les questions déjà répondues
    // Récupérer les données sauvegardées
    const savedData = getSavedData();
    
    // Séparer les questions en deux groupes : non répondues et déjà répondues
    const unansweredQuestions = questionsWithoutFollowUp.filter(
        question => !savedData[question.id] || savedData[question.id].trim() === ''
    );
    const answeredQuestions = questionsWithoutFollowUp.filter(
        question => savedData[question.id] && savedData[question.id].trim() !== ''
    );
    
    // Mélanger les questions non répondues pour une sélection aléatoire
    const unansweredShuffled = [...unansweredQuestions].sort(() => Math.random() - 0.5);
    
    // Sélectionner d'abord les questions non répondues
    for (const question of unansweredShuffled) {
        if (selected.length >= count) break;
        addQuestion(question);
    }
    
    // Si on n'a pas assez de questions non répondues, compléter avec des questions déjà répondues
    if (selected.length < count) {
        // Mélanger les questions déjà répondues
        const answeredShuffled = [...answeredQuestions].sort(() => Math.random() - 0.5);
        
        // Ajouter les questions déjà répondues jusqu'à atteindre le count
        for (const question of answeredShuffled) {
            if (selected.length >= count) break;
            addQuestion(question);
        }
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

