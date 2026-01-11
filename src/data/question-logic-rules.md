# Règles de Logique pour les Questions

Ce document décrit les règles de logique qui régissent la structure, la sélection et l'ordonnancement des questions dans le système de préparation à l'oral SOG.

## Structure d'une Question

Chaque question est un objet JavaScript exporté avec la structure suivante :

```javascript
export const I_nom_question = {
    text: "Texte de la question",
    category: "Catégorie de la question",
    logic: {
        position: 0,        // Position chronologique (0-9)
        next: null,         // ID de la question suivante (chaînage)
        followUp: false     // Indique si c'est une question de suivi
    }
};
```

### Propriétés

- **`text`** (string, requis) : Le texte de la question posée au candidat
- **`category`** (string, requis) : La catégorie thématique de la question
- **`logic`** (object, requis) : Objet contenant les règles de logique

## Propriétés de l'Objet `logic`

### `position` (number)

Définit l'ordre chronologique dans lequel la question doit être posée lors d'un test.

**Valeurs possibles :**
- `0` : Présentation (introduction obligatoire)
- `1-2` : Personnalité et parcours (Le passé)
- `3-4` : Motivations et projet (Le futur proche)
- `5-6` : Connaissances institutionnelles (Le savoir)
- `7-8` : Mises en situation et éthique (Le savoir-être / Réaction)
- `9` : Conclusion et questions pièges

**Règles :**
- Les questions sont triées par position croissante après sélection
- Si `position` n'est pas définie, la valeur par défaut est `999` (fin de liste)
- Les questions de même position sont ordonnées selon leur ordre d'ajout

**Exemple :**
```javascript
logic: {
    position: 1,  // Question sur le passé
    next: null,
    followUp: false
}
```

### `next` (string | null)

Définit un chaînage forcé : si une question est sélectionnée, la question référencée par `next` sera automatiquement ajoutée à la suite.

**Valeurs possibles :**
- `null` : Pas de question suivante forcée
- `"I_autre_question"` : ID de la question qui doit suivre

**Règles :**
- Le chaînage est automatique lors de la sélection
- La question suivante est ajoutée uniquement si la limite de questions n'est pas atteinte
- Si la question suivante est déjà sélectionnée, elle n'est pas ajoutée en double

**Exemple :**
```javascript
logic: {
    position: 3,
    next: "II_question_suivante",  // Cette question sera forcément posée après
    followUp: false
}
```

### `followUp` (boolean)

Indique si la question est une question de suivi qui doit être liée à une autre question.

**Valeurs possibles :**
- `false` : Question indépendante (par défaut)
- `true` : Question de suivi (à implémenter selon les besoins)

**Règles :**
- Actuellement, cette propriété est définie mais la logique complète n'est pas encore implémentée
- Les questions avec `followUp: true` peuvent être utilisées pour créer des enchaînements logiques

**Exemple :**
```javascript
logic: {
    position: 4,
    next: null,
    followUp: true  // Question de suivi
}
```

## Règles de Sélection

### 1. Filtrage par Section

Les questions peuvent être filtrées par section (préfixe de l'ID) :
- `I_` : Présentation et Parcours
- `II_` : Motivations et Projet
- `III_` : Connaissances de l'Institution
- `IV_` : Mises en situation et Éthique
- `V_` : Questions de Personnalité et "Pièges"

### 2. Sélection Aléatoire

- Les questions sont sélectionnées de manière aléatoire parmi les questions disponibles
- Le mélange est effectué avant la sélection
- Les questions avec `position: 0` ne sont plus forcées, elles participent à la sélection aléatoire

### 3. Limite de Questions

- Le nombre de questions sélectionnées est limité par le paramètre `count`
- Les chaînages (`next`) et follow-ups respectent cette limite
- Si la limite est atteinte, aucune nouvelle question n'est ajoutée

### 4. Éviter les Doublons

- Chaque question ne peut être sélectionnée qu'une seule fois
- Un système de suivi (`selectedIds`) empêche les doublons

## Règles d'Ordonnancement

### Tri Final

Après la sélection, les questions sont réorganisées selon les règles suivantes :

1. **Tri par position** : Les questions sont triées par `position` croissante
2. **Conservation de l'ordre** : Pour les questions de même position, l'ordre d'ajout est conservé

### Ordre Chronologique

L'ordre final respecte la chronologie de l'entretien :

```
Position 0 → Position 1-2 → Position 3-4 → Position 5-6 → Position 7-8 → Position 9
```

## Exemples de Questions

### Question Simple

```javascript
export const I_choix_metier = {
    text: "Pourquoi avez-vous choisi ce diplôme/ce métier initial ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 1,
        next: null,
        followUp: false
    }
};
```

### Question avec Chaînage

```javascript
export const II_premiere_question = {
    text: "Pourquoi la gendarmerie ?",
    category: "Motivations et Projet",
    logic: {
        position: 3,
        next: "II_question_suivante",  // Force la question suivante
        followUp: false
    }
};

export const II_question_suivante = {
    text: "Quel a été le déclic ?",
    category: "Motivations et Projet",
    logic: {
        position: 3,
        next: null,
        followUp: false
    }
};
```

### Question de Présentation

```javascript
export const I_presentation = {
    text: "Présentez-vous en 2 ou 3 minutes.",
    category: "Présentation",
    logic: {
        position: 0,  // Position 0 pour l'introduction
        next: null,
        followUp: false
    }
};
```

## Implémentation Technique

### Fichier de Sélection

La logique de sélection est implémentée dans `src/logic/test-selector.js` :

- Fonction `selectQuestionsForTest(count, sectionId)`
- Gestion des chaînages automatiques
- Tri final par position
- Respect des limites

### Structure des Fichiers

Les questions sont organisées par fichier selon leur section :
- `00-presentation.js` : Position 0
- `01-personnalite-parcours.js` : Positions 1-2
- `02-motivations-projet.js` : Positions 3-4
- `03-connaissances-institution.js` : Positions 5-6
- `04-mises-situation-ethique.js` : Positions 7-8
- `05-pieges.js` : Position 9
- `06-conclusion.js` : Position 9

## Notes Importantes

1. **Position 0** : Bien que la position 0 soit définie pour la présentation, elle n'est plus forcée automatiquement. Elle participe à la sélection aléatoire.

2. **Chaînage** : Le chaînage via `next` est automatique mais respecte la limite de questions. Si la limite est atteinte, la question suivante ne sera pas ajoutée.

3. **Follow-up** : La propriété `followUp` est définie mais la logique complète n'est pas encore implémentée. Elle peut être utilisée pour des développements futurs.

4. **Compatibilité** : Le système maintient une compatibilité avec l'ancien format `questionsDB` tout en supportant la nouvelle structure avec `logic`.

## Évolutions Futures Possibles

- Implémentation complète de la logique `followUp`
- Support de conditions de sélection plus complexes
- Gestion de groupes de questions mutuellement exclusifs
- Pondération des questions selon leur importance

