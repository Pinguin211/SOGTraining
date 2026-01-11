// Formulations attendues pour la structure du rapport de sortie

// 1. Le format classique (Équilibré)
export const PROMPT_EXPECTED_STANDARD = `# STRUCTURE DU RAPPORT DE SORTIE 
Pour chaque question du JSON :
---
### QUESTION : [Texte de la question]
- **Analyse du profil** : Ce que cette réponse révèle selon mon expertise.
- **Points Critiques** : Ce qui pose problème ou ce qui est absent.
- **Conseils & Reformulation** : Comment transformer cette réponse pour qu'elle soit exemplaire.
---
# SYNTHÈSE FINALE DU JURY
- **Note Globale Estimée** : /20.
- **Bilan pédagogique** : Résumé des axes de progression prioritaires.
- **Mots-clés manquants** : Liste de termes à intégrer (ex: "Disponibilité", "Cadre légal", "Discrétion").`;

// 2. Le format "Drill" (Focalisé sur la phrase parfaite et le vocabulaire)
export const PROMPT_EXPECTED_DRILL = `# STRUCTURE DU RAPPORT DE SORTIE (MODE ENTRAÎNEMENT INTENSIF)
L'objectif est de donner les "mots clés" et les phrases exactes à apprendre.

Pour chaque question du JSON :
---
### QUESTION : [Texte de la question]
- **Ce qu'il ne faut SURTOUT pas dire** : Identifie la maladresse ou le mot "civil" à bannir.
- **Le vocabulaire Militaire/Pro à utiliser** : Liste les termes techniques précis (ex: dire "Intervention" au lieu de "Bagarre", "Hiérarchie" au lieu de "Chef").
- **LA RÉPONSE EN OR (A mémoriser)** : Rédige un paragraphe parfait, prêt à l'emploi, que le candidat pourrait apprendre par cœur.
---
# BILAN VOCABULAIRE
- **Score de professionnalisme** : /10 (basé sur le niveau de langue).
- **Top 3 des expressions à acquérir** : Les termes institutionnels indispensables.`;

// 3. Le format "Flash" (Rapide, visuel, efficace pour la révision)
export const PROMPT_EXPECTED_FLASH = `# STRUCTURE DU RAPPORT DE SORTIE (MODE FLASH)
Analyse ultra-rapide avec un système de feux tricolores.

Pour chaque question du JSON :
---
### 🚦 QUESTION : [Texte de la question]
- **Verdict** : [VALIDE] ou [FRAGILE] ou [ÉLIMINATOIRE].
- **Pourquoi ?** : Une seule phrase choc pour expliquer le verdict.
- **Le "Quick Win"** : La petite modification qui sauve la réponse immédiatement.
---
# SCORE RAPIDE
- **Note** : /20
- **Décision du jury** : Admis / Ajourné / Éliminé.`;

// 4. Le format "Comportemental" (Focalisé sur le non-verbal et la posture)
export const PROMPT_EXPECTED_BEHAVIOR = `# STRUCTURE DU RAPPORT DE SORTIE (ANALYSE POSTURE)
Ne juge pas le fond, mais la forme et ce que cela dit de la personnalité.

Pour chaque question du JSON :
---
### QUESTION : [Texte de la question]
- **Image renvoyée** : (Ex: Arrogant, Timide, Instable, Trop scolaire, Solide).
- **Le risque psychologique** : Pourquoi cette réponse peut faire peur au jury (ex: "Risque d'insubordination", "Manque de résistance au stress").
- **Correction d'attitude** : Quel état d'esprit adopter pour répondre (ex: "Être plus humble", "Montrer plus de détermination").
---
# PROFIL PSYCHOLOGIQUE PERÇU
- **Stabilité émotionnelle** : Faible / Moyenne / Forte.
- **Maturité** : Faible / Moyenne / Forte.
- **Avis final** : Apte ou Inapte psychologiquement.`;


// Objet pour faciliter l'accès aux formats
export const PROMPT_EXPECTED_FORMATS = {
    standard: {
        id: 'standard',
        label: 'Analyse Standard (Complète)',
        content: PROMPT_EXPECTED_STANDARD
    },
    drill: {
        id: 'drill',
        label: 'Mode Drill (Reformulation & Vocabulaire)',
        content: PROMPT_EXPECTED_DRILL
    },
    flash: {
        id: 'flash',
        label: 'Mode Flash (Rapide / Verdict)',
        content: PROMPT_EXPECTED_FLASH
    },
    behavior: {
        id: 'behavior',
        label: 'Analyse Comportementale (Posture)',
        content: PROMPT_EXPECTED_BEHAVIOR
    }
};