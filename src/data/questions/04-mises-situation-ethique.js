// Positions 7-8 : Mises en situation et éthique (Le savoir-être / Réaction)

export const IV_faute_binome = {
    text: "Votre binôme commet une faute grave (ex: vol, violence injustifiée), que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 7,
        next: null,
        followUp: false
    }
};

export const IV_ami_pv = {
    text: "Un ami de votre famille vous demande de faire sauter un PV, quelle est votre réaction ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 7,
        next: null,
        followUp: false
    }
};

export const IV_agressif = {
    text: "Vous contrôlez un individu très agressif verbalement, comment gérez-vous la situation ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 7,
        next: null,
        followUp: false
    }
};

export const IV_ordre_illegal = {
    text: "Un supérieur vous donne un ordre manifestement illégal, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 7,
        next: null,
        followUp: false
    }
};

export const IV_refus_obtemperer = {
    text: "Face à un refus d'obtempérer, dans quel cadre pouvez-vous faire usage de votre arme ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 7,
        next: null,
        followUp: false
    }
};

export const IV_vif = {
    text: "Une victime de violences intra-familiales refuse de porter plainte, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 7,
        next: null,
        followUp: false
    }
};

export const IV_ivresse_collegue = {
    text: "Vous trouvez un collègue en état d'ivresse avant de prendre le service, comment agissez-vous ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 7,
        next: null,
        followUp: false
    }
};

export const IV_manif = {
    text: "Comment réagiriez-vous si vous étiez pris à partie lors d'une manifestation ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 7,
        next: null,
        followUp: false
    }
};

export const IV_racisme = {
    text: "Vous êtes témoin de propos racistes au sein de votre brigade, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 7,
        next: null,
        followUp: false
    }
};

export const IV_mission_ingrate = {
    text: "On vous demande d'effectuer une mission ingrate (nettoyage, garde statique longue), quelle est votre attitude ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_repos_agression = {
    text: "Vous êtes en repos et vous assistez à une agression, intervenez-vous ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_erreur_procedure = {
    text: "Que faites-vous si vous faites une erreur dans une procédure judiciaire ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_corruption = {
    text: "Un suspect tente de vous corrompre, comment réagissez-vous ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_deces = {
    text: "Comment gérez-vous l'annonce d'un décès à une famille ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_ordre_incompris = {
    text: "On vous donne un ordre que vous ne comprenez pas, comment réagissez-vous ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_pression_elu = {
    text: "Comment gérez-vous la pression d'un élu local lors d'une intervention ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_filme = {
    text: "Un individu vous filme pendant une intervention, que lui dites-vous ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_legitime_defense = {
    text: "Que pensez-vous de la légitime défense ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_secret_pro = {
    text: "Quelle importance accordez-vous au secret professionnel ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

export const IV_sacrifice = {
    text: "Êtes-vous prêt à sacrifier votre vie pour la mission ?",
    category: "Mises en situation et Éthique",
    logic: {
        position: 8,
        next: null,
        followUp: false
    }
};

// Positions 7-8 : Mises en situation et éthique (Le savoir-être / Réaction)

// --- POSITION 7 : RÉACTIONS IMMÉDIATES ET DÉONTOLOGIE ---

export const IV_accident_temoin = {
    text: "Témoin d'un accident de la route hors service, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: null, followUp: false }
};

export const IV_usage_force_proportionne = {
    text: "Un individu refuse de sortir de son véhicule lors d'un contrôle de PA, jusqu'où va l'usage de la force ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: null, followUp: false }
};

export const IV_conflit_interne = {
    text: "Vous n'êtes pas d'accord avec la méthode d'intervention de votre chef de patrouille, comment réagissez-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: "IV_conflit_debrief", followUp: false }
};

export const IV_conflit_debrief = {
    text: "Attendriez-vous le retour à la brigade pour en parler ou le feriez-vous devant l'usager ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: null, followUp: true }
};

export const IV_cadeau_remerciement = {
    text: "Une personne que vous avez aidée vous offre un cadeau pour vous remercier, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: null, followUp: false }
};

export const IV_reseaux_sociaux = {
    text: "Pouvez-vous poster une photo de vous en uniforme sur vos réseaux sociaux personnels ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: null, followUp: false }
};

export const IV_critique_institution = {
    text: "Un citoyen critique ouvertement la gendarmerie devant vous, quelle est votre attitude ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: null, followUp: false }
};

export const IV_perte_materiel = {
    text: "Vous perdez un équipement de dotation (ex: radio) en intervention, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: null, followUp: false }
};

export const IV_outrage_reaction = {
    text: "Vous êtes victime d'un outrage lors d'une surveillance générale, déposez-vous plainte systématiquement ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: null, followUp: false }
};

export const IV_info_famille = {
    text: "Votre famille vous questionne sur une enquête de PJ en cours, que leur dites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 7, next: null, followUp: false }
};

// --- POSITION 8 : ÉTHIQUE ET RESPONSABILITÉ PROFESSIONNELLE ---

export const IV_pj_pression_procureur = {
    text: "Le procureur vous demande d'accélérer une procédure de PJ, mais il vous manque des éléments, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_dot_mobilisation = {
    text: "Dans le cadre de la DOT, on vous demande de protéger un point sensible sous une menace imminente, quelle est votre priorité ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_opex_eloignement = {
    text: "En OPEX, vous êtes confronté à une détresse humaine extrême, comment protégez-vous votre moral ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_droit_retrait = {
    text: "Pensez-vous que le droit de retrait existe pour un gendarme en mission dangereuse ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_usage_arme_sommation = {
    text: "Devez-vous obligatoirement faire des sommations avant de faire usage de votre arme ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_connaissance_loi = {
    text: "Vous ne connaissez pas la loi applicable à une situation précise en patrouille, comment réagissez-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_stress_fusillade = {
    text: "Pris sous un feu nourri, vous êtes tétanisé par la peur, comment surmontez-vous cela ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_neutralite_manif = {
    text: "Vous devez encadrer une manifestation dont vous partagez les revendications, comment restez-vous neutre ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_interpellation_proche = {
    text: "Vous devez interpeller un membre de votre famille dans le cadre d'une PJ, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_garde_a_vue_droit = {
    text: "Un gardé à vue demande un droit que vous jugez inutile, respectez-vous la procédure à la lettre ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_fouille_ethique = {
    text: "Une personne refuse de se laisser fouiller par un gendarme de sexe opposé, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_usage_camera = {
    text: "Quand décidez-vous d'activer votre caméra piéton lors d'une intervention ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_deontologie_propos = {
    text: "Un collègue tient des propos déplacés sur une victime, quelle est votre réaction ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_alcool_conduite_collegue = {
    text: "Vous voyez un collègue prendre le volant alors qu'il a consommé de l'alcool hors service, intervenez-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_menottage_systematique = {
    text: "Le menottage est-il systématique lors d'une interpellation en PJ ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_urgence_vitesse = {
    text: "En mission de secours, pouvez-vous griller un feu rouge sans avertisseur sonore ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_corruption_indirecte = {
    text: "Un commerçant vous propose une réduction permanente 'entre professionnels', acceptez-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_religion_uniforme = {
    text: "Un collègue porte un signe religieux visible sous son uniforme, que lui dites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_ordre_contraire_loi = {
    text: "Un ordre vous semble contraire au code de déontologie mais n'est pas pénalement illégal, obéissez-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_vie_privee_gendarme = {
    text: "Votre comportement en soirée privée peut-il impacter votre carrière ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_audition_mineur = {
    text: "Quelles précautions prenez-vous lors de l'audition d'un mineur victime ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_usage_force_fuite = {
    text: "Un suspect de vol s'enfuit en courant, faites-vous usage de votre arme ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_denonciation_hierarchie = {
    text: "Dénoncer un collègue qui commet une faute, est-ce un manque de cohésion ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_temoin_violences_police = {
    text: "Vous voyez des policiers nationaux utiliser une force disproportionnée, intervenez-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_secret_medical_victime = {
    text: "Une victime vous confie une information médicale secrète, la notez-vous au rapport de PJ ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_garde_statique_ennui = {
    text: "Comment restez-vous vigilant lors d'une garde statique de 8 heures sans incident ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_pression_media = {
    text: "Un journaliste vous harcèle de questions sur une scène de crime, que répondez-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_usage_internet_brigade = {
    text: "Pouvez-vous utiliser l'ordinateur de service pour vos besoins personnels ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_refus_mission_conviction = {
    text: "On vous demande d'expulser une famille, cela va contre vos convictions, que faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_maitrise_soi_crachat = {
    text: "Un individu vous crache au visage, quelle est votre réaction immédiate ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: "IV_maitrise_force", followUp: false }
};

export const IV_maitrise_force = {
    text: "Utiliserez-vous la force pour le contraindre ou attendrez-vous des renforts ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: true }
};

export const IV_perquisition_respect = {
    text: "Comment conciliez-vous l'efficacité d'une perquisition et le respect de la vie privée de la famille présente ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_solidarite_interarmes = {
    text: "Un militaire d'une autre arme est en difficulté, intervenez-vous de la même manière que pour un civil ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_objectivite_temoignage = {
    text: "Vous réalisez que votre témoignage va innocenter quelqu'un que vous n'aimez pas, le maintenez-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_loyaute_hierarchie_erreur = {
    text: "Votre supérieur fait une erreur tactique, le couvrez-vous devant le commandant de compagnie ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_gestion_foule_panique = {
    text: "En cas de mouvement de foule lors d'une mission de PA, comment donnez-vous vos ordres ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_ethique_interrogatoire = {
    text: "Un suspect refuse de parler, pouvez-vous utiliser la ruse ou le mensonge pour obtenir des aveux ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_arme_famille_risque = {
    text: "Garderiez-vous votre arme de service à domicile si vous avez des enfants ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_respect_hierarchie_jeune = {
    text: "Un gendarme plus jeune mais plus gradé que vous vous donne un ordre, comment réagissez-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};

export const IV_denonciation_corruption = {
    text: "Vous soupçonnez un collègue de corruption mais n'avez pas de preuve, qu'en faites-vous ?",
    category: "Mises en situation et Éthique",
    logic: { position: 8, next: null, followUp: false }
};