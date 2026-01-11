// Positions 3-4 : Motivations et projet (Le futur proche)

export const II_pourquoi_gendarmerie = {
    text: "Pourquoi la gendarmerie et pas la police nationale ?",
    category: "Motivations et Projet",
    logic: {
        position: 3,
        next: null,
        followUp: false
    }
};

export const II_declic = {
    text: "Quel a été le déclic pour passer ce concours ?",
    category: "Motivations et Projet",
    logic: {
        position: 3,
        next: null,
        followUp: false
    }
};

export const II_uniforme = {
    text: "Que représente l'uniforme pour vous ?",
    category: "Motivations et Projet",
    logic: {
        position: 3,
        next: null,
        followUp: false
    }
};

export const II_statut_militaire = {
    text: "Qu'est-ce qui vous attire dans le statut militaire ?",
    category: "Motivations et Projet",
    logic: {
        position: 3,
        next: null,
        followUp: false
    }
};

export const II_arme = {
    text: "Le port de l'arme est-il une fin en soi pour vous ?",
    category: "Motivations et Projet",
    logic: {
        position: 3,
        next: null,
        followUp: false
    }
};

export const II_usage_force = {
    text: "Êtes-vous prêt à l'usage de la force, voire à donner la mort ?",
    category: "Motivations et Projet",
    logic: {
        position: 3,
        next: null,
        followUp: false
    }
};

export const II_dispo_24h = {
    text: "La disponibilité 24h/24 est-elle un frein pour vous ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_mobilite = {
    text: "Acceptez-vous d'être affecté n'importe où en France ou outre-mer ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_vie_caserne = {
    text: "Comment imaginez-vous votre vie en caserne ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_echec_concours = {
    text: "Que ferez-vous si vous échouez au concours cette année ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_unite_reve = {
    text: "Quelle unité rêveriez-vous d'intégrer après l'école ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_specialite = {
    text: "Pourquoi cette spécialité précise ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_connaissance_ecole = {
    text: "Que savez-vous de la formation en école de sous-officier ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_commander = {
    text: "Pensez-vous être capable de commander des hommes plus tard ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_bon_gendarme = {
    text: "Qu'est-ce qu'un bon gendarme selon vous ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_vocation = {
    text: "La gendarmerie est-elle une vocation ou un métier de sécurité de l'emploi ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_carriere_10ans = {
    text: "Comment voyez-vous votre carrière dans 10 ans ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_soldat_loi = {
    text: "Être \"soldat de la loi\", qu'est-ce que cela signifie pour vous ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_deplait = {
    text: "Quel est l'aspect du métier qui vous déplaît le plus ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_proches = {
    text: "Vos proches soutiennent-ils votre choix ?",
    category: "Motivations et Projet",
    logic: {
        position: 4,
        next: null,
        followUp: false
    }
};

export const II_valeurs_perso = {
    text: "Quelles sont les trois valeurs de la Gendarmerie qui correspondent le plus à votre personnalité ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: null, followUp: false }
};

export const II_choix_militaire = {
    text: "Pourquoi choisir le statut militaire plutôt que de devenir Gardien de la Paix ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: null, followUp: false }
};

export const II_uniforme_contrainte = {
    text: "L'uniforme gomme l'individualité. Cela vous dérange-t-il d'être avant tout un représentant de l'institution ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: null, followUp: false }
};

export const II_origine_vocation = {
    text: "Y a-t-il eu un événement particulier dans l'actualité qui a conforté votre choix de devenir gendarme ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: null, followUp: false }
};

export const II_usage_arme_ethique = {
    text: "Porter une arme est une lourde responsabilité. Dans quel état d'esprit l'appréhendez-vous ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: "II_arme_consequences", followUp: false }
};

export const II_arme_consequences = {
    text: "Si vous deviez faire usage de votre arme, seriez-vous capable d'en assumer les conséquences psychologiques ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: null, followUp: true }
};

export const II_servir_pays = {
    text: "Que signifie pour vous l'expression 'Servir son pays' ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: null, followUp: false }
};

export const II_discipline_militaire = {
    text: "La gendarmerie exige une discipline rigoureuse. Avez-vous déjà été confronté à un cadre aussi strict ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: null, followUp: false }
};

export const II_risques_metier = {
    text: "Le métier de gendarme est dangereux. Comment gérez-vous cette prise de risque ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: null, followUp: false }
};

export const II_sacrifice_personnel = {
    text: "Jusqu'où êtes-vous prêt à aller pour l'institution ?",
    category: "Motivations et Projet",
    logic: { position: 3, next: null, followUp: false }
};

// --- SECTION PROJET ET MISSIONS (Position 4) ---

export const II_mission_preferee = {
    text: "Parmi les missions de PA, PJ et Défense Militaire, laquelle vous attire le plus ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: "II_mission_justification", followUp: false }
};

export const II_mission_justification = {
    text: "Pourquoi cette mission en particulier plutôt qu'une autre ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: true }
};

export const II_interet_pa = {
    text: "La Police Administrative est centrée sur la prévention. En quoi est-ce essentiel selon vous ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_interet_pj = {
    text: "La Police Judiciaire vise la répression et la recherche des auteurs. Avez-vous les qualités pour mener des enquêtes ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_defense_militaire_opex = {
    text: "Le volet Défense Militaire inclut les OPEX. Seriez-vous prêt à partir plusieurs mois loin de chez vous ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_vie_caserne_famille = {
    text: "Comment comptez-vous concilier la vie en caserne et votre vie de couple ou de famille ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_mobilite_domtom = {
    text: "Une mutation en Outre-mer est possible. Est-ce une opportunité ou une contrainte pour vous ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_formation_ecole_duree = {
    text: "La formation dure 12 mois. Qu'est-ce qui vous semble le plus difficile dans ce cursus ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_apres_ecole = {
    text: "Une fois en unité, quel premier objectif vous fixez-vous ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_grade_ambition = {
    text: "Quel grade espérez-vous atteindre d'ici la fin de votre carrière ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_specialite_gm_gd = {
    text: "Hésitez-vous entre la Gendarmerie Départementale et la Mobile ? Pourquoi ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_gestion_indisponibilite = {
    text: "Comment réagirez-vous si vous êtes rappelé sur votre temps de repos pour une urgence ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_image_gendarme = {
    text: "Quelle image voulez-vous renvoyer à la population lors de vos patrouilles ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_autorité_chef = {
    text: "Qu'attendez-vous de votre premier commandant de brigade ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_echec_concours_rebond = {
    text: "Si vous échouez, représenterez-vous le concours l'année prochaine ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_vocation_tardive = {
    text: "Si votre vocation est tardive, qu'est-ce qui a changé dans votre vie pour déclencher ce projet ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_gendarmerie_famille = {
    text: "Y a-t-il des militaires ou des gendarmes dans votre famille ? En avez-vous discuté avec eux ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_reforme_statut = {
    text: "Que pensez-vous du maintien du statut militaire pour la gendarmerie malgré son rattachement à l'Intérieur ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_vision_10_ans = {
    text: "Où vous voyez-vous dans 10 ans au sein de l'institution ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_aspect_negatif = {
    text: "Chaque métier a ses mauvais côtés. Quel est celui que vous redoutez le plus ici ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_maitrise_soi_intervention = {
    text: "Le gendarme doit rester calme en toute circonstance. Pensez-vous avoir cette force de caractère ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_competences_transferables = {
    text: "Quelle compétence de votre ancienne vie sera la plus utile en gendarmerie ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_choix_subdivision = {
    text: "Si vous finissez dans les premiers de votre promotion, quelle subdivision choisirez-vous ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_disponibilite_contrainte = {
    text: "La vie de gendarme impose des horaires décalés. Est-ce un mode de vie qui vous convient ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_engagement_citoyen = {
    text: "Devenir gendarme, est-ce pour vous l'aboutissement d'un engagement citoyen ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_travail_equipe = {
    text: "Le gendarme travaille rarement seul. Pourquoi le travail en binôme est-il sécurisant ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_sens_patrie = {
    text: "Le drapeau français a-t-il une importance particulière à vos yeux ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_loyauté_institution = {
    text: "Que feriez-vous si vous n'étiez pas d'accord avec une consigne hiérarchique ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_limites_perso = {
    text: "Connaissez-vous vos limites physiques et morales ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_prevention_vs_repression = {
    text: "Préférez-vous empêcher une infraction (PA) ou en rechercher les auteurs (PJ) ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_contact_population = {
    text: "Le gendarme est au contact permanent de la population. Aimez-vous le relationnel ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_secret_professionnel = {
    text: "Comprenez-vous l'importance du secret professionnel dans ce métier ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_preparatifs_concours = {
    text: "Comment vous êtes-vous préparé pour ce concours ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_respect_loi = {
    text: "En tant que futur 'Soldat de la loi', quel exemple devez-vous donner hors service ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_cohésion_groupe = {
    text: "Quelle importance accordez-vous à la cohésion avec vos futurs collègues ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_neutralité_gendarme = {
    text: "Le gendarme doit être neutre. Saurez-vous mettre de côté vos opinions personnelles en intervention ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_autorité_naturelle = {
    text: "Pensez-vous avoir une autorité naturelle face à un public difficile ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_curiosité_institutionnelle = {
    text: "Que lisez-vous ou regardez-vous pour parfaire votre culture gendarmerie ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_adaptabilité_ecole = {
    text: "En école, vous serez logé en dortoir. Êtes-vous prêt pour la vie en collectivité ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};

export const II_vocation_service = {
    text: "Devenir gendarme, est-ce un choix de carrière ou un choix de vie ?",
    category: "Motivations et Projet",
    logic: { position: 4, next: null, followUp: false }
};