// Positions 1-2 : Personnalité et parcours (Le passé)

export const I_choix_metier = {
    text: "Pourquoi avez-vous choisi ce diplôme/ce métier initial ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 1,
        next: null,
        followUp: false
    }
};

export const I_lien_experience = {
    text: "Quel lien faites-vous entre votre expérience passée et la gendarmerie ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 1,
        next: null,
        followUp: false
    }
};

export const I_succes = {
    text: "Quel est votre plus grand succès personnel ou professionnel ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 1,
        next: null,
        followUp: false
    }
};

export const I_echec = {
    text: "Avez-vous déjà vécu un échec ? Comment l'avez-vous géré ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 1,
        next: null,
        followUp: false
    }
};

export const I_qualites = {
    text: "Citez trois de vos qualités.",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_defauts = {
    text: "Citez trois de vos défauts.",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_employeur = {
    text: "Que dirait votre dernier employeur sur vous ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_stress = {
    text: "Comment gérez-vous le stress au quotidien ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_pourquoi_vous = {
    text: "Pourquoi vous et pas un autre candidat ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_sport = {
    text: "Pratiquez-vous un sport ? À quelle fréquence ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_culture = {
    text: "Quel est le dernier livre que vous avez lu ou le dernier film que vous avez vu ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_famille = {
    text: "Quelle place occupe votre famille dans votre projet ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_redoute = {
    text: "Que redoutez-vous le plus dans le métier de gendarme ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_discipline = {
    text: "Êtes-vous quelqu'un de discipliné ? Donnez un exemple.",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_critique = {
    text: "Comment réagissez-vous face à la critique ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_role_groupe = {
    text: "Quel est votre rôle habituel dans un groupe (leader, exécutant, médiateur) ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_violence_vecue = {
    text: "Avez-vous déjà été confronté à la violence ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_honnetete = {
    text: "Qu'est-ce que l'honnêteté pour vous ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

export const I_associatif = {
    text: "Avez-vous des engagements associatifs ou bénévoles ?",
    category: "Personnalité et Parcours",
    logic: {
        position: 2,
        next: null,
        followUp: false
    }
};

// Positions 1-2 : Personnalité et parcours (Le passé)

export const I_valeur_travail = {
    text: "Quelle place accordez-vous au travail dans votre vie ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_matiere_preferee = {
    text: "Quelle était votre matière préférée à l'école et pourquoi ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_activite_extra = {
    text: "Pratiquez-vous une activité associative ou culturelle ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_responsabilite_jeune = {
    text: "Avez-vous déjà eu des responsabilités (délégué, capitaine, encadrant) étant plus jeune ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: "I_responsabilite_lecon", followUp: false }
};

export const I_responsabilite_lecon = {
    text: "Qu'avez-vous appris sur vous-même en exerçant ces responsabilités ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: true }
};

export const I_job_ete = {
    text: "Qu'avez-vous appris de votre premier job d'été ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_voyage_marquant = {
    text: "Parlez-nous d'un voyage qui a changé votre perception des choses.",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_autonomie = {
    text: "À quel âge êtes-vous devenu indépendant financièrement ou personnellement ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_sport_collectif = {
    text: "Préférez-vous les sports collectifs ou individuels ? Pourquoi ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_choix_etudes = {
    text: "Si vous deviez recommencer vos études, feriez-vous les mêmes choix ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_environnement_grandit = {
    text: "Dans quel type d'environnement avez-vous grandi (urbain, rural) et qu'est-ce que cela vous a apporté ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_engagement_citoyen = {
    text: "Avez-vous déjà effectué un Service National Universel (SNU) ou un Service Civique ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_langues_etrangeres = {
    text: "Parlez-vous une langue étrangère ? Est-ce un atout pour un gendarme selon vous ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_lecture_actuelle = {
    text: "Quel est le dernier livre ou documentaire qui vous a marqué ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_fierte_perso = {
    text: "De quoi êtes-vous le plus fier dans votre vie actuelle ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_difficulte_surmontee = {
    text: "Quelle est la plus grande difficulté que vous ayez surmontée au cours des deux dernières années ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: "I_difficulte_methode", followUp: false }
};

export const I_difficulte_methode = {
    text: "Quelle méthode avez-vous utilisée pour résoudre ce problème ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: true }
};

export const I_modele_vie = {
    text: "Avez-vous un modèle ou une figure d'inspiration ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_curiosite = {
    text: "Comment vous tenez-vous informé de l'actualité ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_relation_hierarchie_passee = {
    text: "Comment se passaient vos relations avec vos anciens supérieurs ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_critere_succes = {
    text: "Pour vous, qu'est-ce qu'une vie réussie ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_demenagement = {
    text: "Avez-vous déjà dû déménager souvent ? Comment l'avez-vous vécu ?",
    category: "Personnalité et Parcours",
    logic: { position: 1, next: null, followUp: false }
};

export const I_calme_stress = {
    text: "Comment vos proches décrivent-ils votre attitude sous la pression ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_emotif = {
    text: "Vous considérez-vous comme quelqu'un d'émotif ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_impatience = {
    text: "Êtes-vous de nature impatiente ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_prise_decision = {
    text: "Préférez-vous prendre une décision seul ou après avoir consulté les autres ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_entete = {
    text: "Vous arrive-t-il d'être têtu ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_esprit_equipe = {
    text: "Que faites-vous si un membre de votre équipe ne travaille pas assez ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: "I_equipe_conflit", followUp: false }
};

export const I_equipe_conflit = {
    text: "Et si malgré votre intervention la situation ne s'améliore pas, quelle est l'étape suivante ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: true }
};

export const I_ponctualite = {
    text: "Quelle importance accordez-vous à la ponctualité ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_rancunier = {
    text: "Êtes-vous rancunier ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_maitrise_soi = {
    text: "Quelle est la dernière fois où vous avez perdu votre sang-froid ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: "I_maitrise_analyse", followUp: false }
};

export const I_maitrise_analyse = {
    text: "Avec le recul, comment auriez-vous pu agir différemment ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: true }
};

export const I_sens_devoir = {
    text: "Donnez-moi votre propre définition du mot 'Devoir'.",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_optimiste = {
    text: "Voyez-vous le verre à moitié plein ou à moitié vide ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_regret = {
    text: "Avez-vous un regret majeur ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_adaptation = {
    text: "Comment réagissez-vous face à un changement imprévu de planning ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_solitude = {
    text: "Supportez-vous bien la solitude ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_autorite = {
    text: "Quelle est votre définition d'une autorité légitime ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_perfectionniste = {
    text: "Le perfectionnisme est-il pour vous un défaut ou une qualité ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_pression_sociale = {
    text: "Savez-vous dire 'non' quand tout le monde dit 'oui' ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: "I_pression_exemple", followUp: false }
};

export const I_pression_exemple = {
    text: "Pouvez-vous nous citer un exemple concret où vous avez dû vous opposer à l'avis général ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: true }
};

export const I_remise_question = {
    text: "Quelle est la dernière fois où vous avez reconnu avoir tort ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_valeur_principale = {
    text: "Si vous ne deviez garder qu'une seule valeur morale, laquelle serait-ce ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_limite_physique = {
    text: "Avez-vous déjà atteint vos limites physiques ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_humour = {
    text: "Quelle place l'humour occupe-t-il dans vos relations de travail ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_ambition = {
    text: "Vous considérez-vous comme quelqu'un d'ambitieux ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_confiance_autrui = {
    text: "Accordez-vous votre confiance facilement ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_orgueil = {
    text: "Êtes-vous quelqu'un d'orgueilleux ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_sens_ordre = {
    text: "Êtes-vous ordonné dans votre vie privée ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_patience_pedagogie = {
    text: "Avez-vous déjà dû expliquer quelque chose plusieurs fois à quelqu'un qui ne comprenait pas ? Comment avez-vous réagi ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_stress_examen = {
    text: "Comment avez-vous géré votre stress ce matin avant de venir ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_influence = {
    text: "Pensez-vous être facilement influençable ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_empathie = {
    text: "L'empathie est-elle une faiblesse pour un gendarme ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};

export const I_introverti_extraverti = {
    text: "Vous définiriez-vous comme plutôt introverti ou extraverti ?",
    category: "Personnalité et Parcours",
    logic: { position: 2, next: null, followUp: false }
};
