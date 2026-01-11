// Positions 5-6 : Connaissances institutionnelles (Le savoir)

export const III_dggn = {
    text: "Qui est le Directeur Général de la Gendarmerie Nationale (DGGN) ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 5,
        next: null,
        followUp: false
    }
};

export const III_ministere = {
    text: "De quel ministère dépend la gendarmerie ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 5,
        next: null,
        followUp: false
    }
};

export const III_missions = {
    text: "Citez les trois grandes missions de la gendarmerie.",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 5,
        next: null,
        followUp: false
    }
};

export const III_diff_pa_pj = {
    text: "Quelle est la différence entre police administrative et police judiciaire ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 5,
        next: null,
        followUp: false
    }
};

export const III_gign = {
    text: "Qu'est-ce que le GIGN ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 5,
        next: null,
        followUp: false
    }
};

export const III_psig = {
    text: "Qu'est-ce qu'un PSIG ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 5,
        next: null,
        followUp: false
    }
};

export const III_gm = {
    text: "Quelles sont les missions de la gendarmerie mobile ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 5,
        next: null,
        followUp: false
    }
};

export const III_grades = {
    text: "Citez trois grades de sous-officiers.",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_diff_brigade = {
    text: "Quelle est la différence entre une brigade territoriale et une brigade de recherches ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_reserve = {
    text: "Qu'est-ce la réserve opérationnelle ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_date_rattachement = {
    text: "En quelle année la gendarmerie a-t-elle été rattachée au ministère de l'Intérieur ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_ministre = {
    text: "Qui est le ministre de l'Intérieur actuel ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_opex = {
    text: "Citez une opération extérieure (OPEX) récente où la gendarmerie est présente.",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_deontologie = {
    text: "Qu'est-ce que le code de déontologie ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_opj = {
    text: "Qu'est-ce que l'habilitation OPJ ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_formation_spe = {
    text: "Citez deux formations spécialisées de la gendarmerie (ex: maritime, air).",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_histoire = {
    text: "Quelle est l'origine historique de la gendarmerie ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_comgend = {
    text: "Qu'est-ce qu'un COMGEND ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_epg = {
    text: "Que signifie l'acronyme EPG ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

export const III_valeurs = {
    text: "Quelles sont les valeurs de la gendarmerie ?",
    category: "Connaissances Institutionnelles",
    logic: {
        position: 6,
        next: null,
        followUp: false
    }
};

// Positions 5-6 : Connaissances institutionnelles (Le savoir)

// --- SECTION MISSIONS (Basée sur Fiche 4) ---

export const III_pa_renseignement = {
    text: "Dans le cadre de la Police Administrative, quel est le but du renseignement ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_pa_securite_routiere = {
    text: "Pourquoi le contrôle routier est-il considéré comme de la Police Administrative ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: "III_pa_infraction_routiere", followUp: false }
};

export const III_pa_infraction_routiere = {
    text: "Si vous constatez une alcoolémie lors d'un contrôle, dans quelle mission basculez-vous ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: true }
};

export const III_pj_audition = {
    text: "Quel est l'objectif d'une audition en Police Judiciaire ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_pj_perquisition = {
    text: "Qu'est-ce qu'une perquisition et quel est son cadre légal simplifié ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_pj_constatations = {
    text: "Pourquoi les constatations (cambriolage, meurtre) sont-elles cruciales en PJ ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_dm_dot = {
    text: "Que signifie l'acronyme DOT dans les missions de défense militaire ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_dm_terrorisme = {
    text: "Quel est le rôle de la gendarmerie dans la lutte contre le terrorisme au quotidien ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

// --- SECTION ORGANISATION ET UNITÉS ---

export const III_region_gendarmerie = {
    text: "Qu'est-ce qu'une Région de Gendarmerie ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_groupement = {
    text: "À quoi correspond un Groupement de Gendarmerie Départementale ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: "III_compagnie", followUp: false }
};

export const III_compagnie = {
    text: "Et qu'est-ce qu'une Compagnie ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: true }
};

export const III_unite_spe_montagne = {
    text: "Citez une unité spécialisée intervenant en zone de montagne.",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_unite_spe_nautique = {
    text: "Quelles sont les missions des brigades nautiques ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_cyber_gendarmerie = {
    text: "Qu'est-ce que l'unité ComCyberGend ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_ircgn = {
    text: "Que signifie IRCGN et où est-ce situé ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_garde_republicaine = {
    text: "Quelles sont les missions principales de la Garde Républicaine ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_gendarmerie_transports_aeriens = {
    text: "Qu'est-ce que la GTA ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_gendarmerie_maritime = {
    text: "La gendarmerie maritime dépend de quel autre ministère en plus de l'Intérieur ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_gendarmerie_air = {
    text: "Quelle est la mission de la Gendarmerie de l'Air ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

export const III_gendarmerie_armement = {
    text: "Existe-t-il une gendarmerie de l'Armement ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 5, next: null, followUp: false }
};

// --- SECTION GRADES ET HIÉRARCHIE (Position 6) ---

export const III_grades_officiers = {
    text: "Citez les trois premiers grades des officiers de gendarmerie.",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_grades_gav = {
    text: "Quels sont les grades des Gendarmes Adjoints Volontaires (GAV) ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_maj_vst = {
    text: "Quelle est la différence entre un Major et un Adjudant-chef ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_sous_officier_definition = {
    text: "Que signifie être 'Sous-Officier' par rapport à 'Militaire du Rang' ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_couleur_grades = {
    text: "Quelle est la différence de couleur des galons entre la GD et la GM ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

// --- SECTION ÉTHIQUE ET STATUT (Position 6) ---

export const III_devoir_reserve = {
    text: "Qu'est-ce que le devoir de réserve pour un gendarme ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_obéisance_hierarchique = {
    text: "Le devoir d'obéissance est-il absolu ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_secret_defense = {
    text: "Qu'est-ce que l'habilitation Secret Défense en gendarmerie ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_iggn = {
    text: "Que signifie IGGN et quel est son rôle ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_droits_syndicaux = {
    text: "Les gendarmes ont-ils le droit de se syndiquer ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

// --- SECTION HISTOIRE ET SYMBOLES (Position 6) ---

export const III_devise_gendarmerie = {
    text: "Quelle est la devise de la Gendarmerie Nationale ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_grenade_bois_de_cerf = {
    text: "Que représente le symbole de la grenade 'bois de cerf' ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_sainte_genevieve = {
    text: "Qui est la sainte patronne des gendarmes ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_maréchaussée = {
    text: "Quel était le nom de la gendarmerie avant la Révolution Française ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_loi_germinal = {
    text: "Quelle loi de 1798 organise la gendarmerie ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

// --- SECTION COOPÉRATION ET ACTUALITÉ (Position 6) ---

export const III_europol_interpol = {
    text: "Quelle est la différence entre Europol et Interpol ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_cooperation_transfrontaliere = {
    text: "Qu'est-ce qu'un Centre de Coopération Policière et Douanière (CCPD) ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_fievre_jaune_guyane = {
    text: "Citez une mission actuelle de la gendarmerie en Guyane (ex: Harpie).",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_securite_evenements = {
    text: "Comment la gendarmerie se prépare-t-elle aux grands événements (ex: JO) ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_proximite_numerique = {
    text: "Qu'est-ce que la Brigade Numérique ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

// --- SECTION RECRUTEMENT ET FORMATION (Position 6) ---

export const III_ecoles_sog = {
    text: "Pouvez-vous citer trois villes accueillant une école de sous-officiers ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_formation_initiale_contenu = {
    text: "Quelles sont les deux grandes phases de la formation en école ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_bilinguisme_atout = {
    text: "En quoi être bilingue est-il un atout en gendarmerie ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_concours_interne_externe = {
    text: "Quelle est la différence entre le concours SOG interne et externe ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_contrat_engagement = {
    text: "Pour combien de temps s'engage un premier contrat de sous-officier ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

// --- QUESTIONS DE SYNTHÈSE (Position 6) ---

export const III_maillage_territorial = {
    text: "Pourquoi dit-on que la gendarmerie assure le maillage territorial de la France ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_militarite_atout = {
    text: "En quoi la militarité est-elle une force pour la sécurité intérieure ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_police_proximite = {
    text: "Qu'est-ce que le dispositif de gestion des événements (DGE) ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_interoperabilite = {
    text: "Que signifie l'interopérabilité avec la Police Nationale ?",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};

export const III_modernisation_numerique = {
    text: "Citez un outil numérique utilisé par le gendarme sur le terrain (ex: NEO).",
    category: "Connaissances Institutionnelles",
    logic: { position: 6, next: null, followUp: false }
};