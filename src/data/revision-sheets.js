/**
 * Données des fiches de révision
 */
export const revisionSheets = [
    {
        id: 'formation-sog-2026',
        title: 'Formation SOG Gendarmerie (2026)',
        icon: '👮‍♂️',
        content: {
            title: 'Fiche Révision: Formation SOG Gendarmerie (2026)',
            duration: '12 mois (internat militaire)',
            salary: '~1635 € net/mois',
            phases: [
                {
                    number: 1,
                    title: 'Phase d\'Adaptation (Acculturation militaire)',
                    duration: '3-4 semaines',
                    objective: 'Transformer le civil en militaire capable d\'évoluer avec discipline.',
                    icon: '🪖',
                    color: 'light-blue',
                    content: [
                        'Apprentissage de la hiérarchie',
                        'Apprentissage du salut',
                        'Ordre serré (marcher au pas)',
                        'Maniement des armes de base',
                        'Topographie',
                        'Éthique militaire'
                    ]
                },
                {
                    number: 2,
                    title: 'Phase de Fondamentaux (Le cœur du métier)',
                    duration: '4-5 mois',
                    objective: null,
                    icon: '📚',
                    color: 'red',
                    content: [
                        {
                            category: 'Police Judiciaire (PJ)',
                            icon: '🔗',
                            items: [
                                'Rédiger procès-verbaux',
                                'Maîtriser droit pénal'
                            ]
                        },
                        {
                            category: 'Intervention Professionnelle (IP)',
                            icon: '🛡️',
                            items: [
                                'Techniques défense (MSAA)',
                                'Interpellation',
                                'Usage armes dotation et menottes'
                            ]
                        },
                        {
                            category: 'Sécurité Routière',
                            icon: '🚗',
                            items: [
                                'Procédures contrôle véhicules',
                                'Dépistages'
                            ]
                        }
                    ]
                },
                {
                    number: 3,
                    title: 'Phase de Spécialisation (Le choix d\'orientation)',
                    duration: null,
                    objective: 'Choix subdivision d\'arme selon classement.',
                    icon: '🛡️',
                    color: 'green',
                    content: [
                        {
                            category: 'Gendarmerie Départementale (GD)',
                            icon: '🏛️',
                            items: [
                                'Préparation travail brigade',
                                'Secours',
                                'Enquêtes proximité'
                            ]
                        },
                        {
                            category: 'Gendarmerie Mobile (GM)',
                            icon: '🚔',
                            items: [
                                'Formation maintien de l\'ordre',
                                'Manifestations',
                                'Dispositifs sécurité'
                            ]
                        },
                        {
                            category: 'Garde Républicaine',
                            icon: '🏛️',
                            items: [
                                'Régiments d\'honneur',
                                'Sécurité à Paris'
                            ]
                        }
                    ]
                },
                {
                    number: 4,
                    title: 'Phase de Terrain (L\'immersion opérationnelle)',
                    duration: 'Les 4 derniers mois',
                    objective: null,
                    icon: '👮‍♂️',
                    color: 'orange',
                    content: [
                        {
                            category: 'Statut',
                            icon: '👥',
                            items: [
                                'Stagiaire en binôme avec tuteur'
                            ]
                        },
                        {
                            category: 'Mise en pratique réelle',
                            icon: '⚡',
                            items: [
                                'Patrouilles',
                                'Accueil du public',
                                'Interventions d\'urgence'
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'organisation-gendarmerie',
        title: 'L\'Organisation de la Gendarmerie (Les Subdivisions)',
        icon: '🏛️',
        content: {
            title: 'Fiche 2 : L\'Organisation de la Gendarmerie (Les Subdivisions)',
            introduction: {
                text: 'La Gendarmerie est organisée de manière modulaire pour couvrir tout le spectre des crises, du quotidien à la haute intensité. Elle repose sur deux piliers principaux (GD et GM) et des formations spécialisées.',
                icon: '📌'
            },
            subdivisions: [
                {
                    number: 1,
                    name: 'La Gendarmerie Départementale (GD)',
                    nickname: '"La Blanche" (Galons argent/blancs)',
                    icon: '🗺️',
                    color: 'blue',
                    description: [
                        'Maillage territorial, force de proximité.',
                        'Compétence: 95% du territoire, 50% de la population.',
                        'Missions: Sécurité publique, Police Judiciaire, sécurité routière, renseignement, secours.'
                    ],
                    structure: {
                        title: 'Structure Hiérarchique',
                        levels: [
                            'Région (Général)',
                            '> Groupement (Colonel)',
                            '> Compagnie (Chef d\'Escadron)'
                        ]
                    },
                    unites: {
                        title: 'Unités de terrain',
                        items: [
                            { name: 'Brigades (Contact)', icon: '👮‍♂️' },
                            { name: 'PSIG (Intervention, SABRE)', icon: '🛡️' },
                            { name: 'BR (PJ Compagnie)', icon: '👮‍♂️' },
                            { name: 'SR (PJ Cour d\'Appel)', icon: '🏛️' }
                        ]
                    }
                },
                {
                    number: 2,
                    name: 'La Gendarmerie Mobile (GM)',
                    nickname: '"La Jaune" (Galons or/jaunes)',
                    icon: '🌍',
                    color: 'yellow',
                    description: [
                        'Réserve stratégique, force de projection.'
                    ],
                    missions: [
                        '- MO / RO (Manifestations, émeutes), Renfort GD (Sécurisation, événements)',
                        '- Projection Outre-mer et OPEX.'
                    ],
                    details: [
                        'L\'Unité: EGM (Escadron)',
                        'Particularité: Vie en caserne, grande disponibilité, déplacements constants (180-200 jours/an)'
                    ]
                },
                {
                    number: 3,
                    name: 'L\'Élite: Le GIGN (Groupe d\'Intervention)',
                    nickname: null,
                    icon: '🎯',
                    color: 'black',
                    description: [
                        'Unité d\'élite sous DGGN.'
                    ],
                    trilogie: {
                        title: 'La "Trilogie" des missions',
                        items: [
                            '- Intervention (Contre-terrorisme, forcenés, otages)',
                            '- Observation / Recherche (Traque, collecte de preuves)',
                            '- Protection (FSP : hautes personnalités, ambassadeurs en zones de guerre)'
                        ]
                    }
                },
                {
                    number: 4,
                    name: 'La Garde Républicaine (GR)',
                    nickname: null,
                    icon: '🐴',
                    color: 'red',
                    description: [
                        'Mission de prestige et de sécurité pour les hautes autorités (Élysée, Matignon, Sénat, AN).'
                    ],
                    missions: [
                        '- Sécurité palais, honneurs militaires.'
                    ],
                    composition: [
                        '- Deux régiments d\'infanterie',
                        '- Un régiment de cavalerie',
                        '- L\'escadron motocycliste'
                    ]
                },
                {
                    number: 5,
                    name: 'Les Gendarmeries Spécialisées',
                    nickname: null,
                    icon: '⚙️',
                    color: 'green',
                    description: [
                        'Placées auprès d\'autres ministères ou milieux spécifiques.'
                    ],
                    branches: [
                        '- Maritime (Police en mer)',
                        '- Air (Bases aériennes)',
                        '- Transports Aériens (GTA : Aéroports civils)',
                        '- Armement (Sites DGA)',
                        '- GSAN (Sécurité Armements Nucléaires)'
                    ]
                }
            ],
            conseil: {
                title: 'Le conseil "Oral & Entretien"',
                icon: '💡',
                text: 'Différence fondamentale GD vs GM : Le GD est généraliste et ancré territorialement (connaît circonscription, gère temps long/enquêtes). Le GM est spécialiste (ordre public) et projetable (intervient ponctuellement, gère l\'événementiel/crise)'
            }
        }
    },
    {
        id: 'geographie-competence',
        title: 'Géographie & Compétence',
        icon: '🗺️',
        content: {
            title: 'Fiche 5 : Géographie & Compétence',
            sectionTitle: 'Où travaille-t-on ?',
            zones: [
                {
                    name: 'Zone Gendarmerie (ZGN)',
                    icon: '🗺️',
                    color: 'light-blue',
                    items: [
                        '50% de la population française.',
                        '95% du territoire national.',
                        'Zones rurales et périurbaines.'
                    ],
                    illustrations: ['🏔️', '🏘️']
                },
                {
                    name: 'Zone Police (ZPN)',
                    icon: '🏙️',
                    color: 'light-blue',
                    items: [
                        'Villes de plus de 20 000 habitants.'
                    ],
                    illustrations: []
                }
            ]
        }
    },
    {
        id: 'valeurs-devoirs',
        title: 'Les Valeurs et Devoirs (Savoir-Être)',
        icon: '⚖️',
        content: {
            title: 'Fiche 6 : Les Valeurs et Devoirs (Savoir-Être)',
            sectionTitle: 'Le code du soldat.',
            valeurs: [
                {
                    number: 1,
                    name: 'Le Devoir de Réserve',
                    text: 'Un militaire ne donne pas son opinion politique ou religieuse en public/uniforme. Il est neutre.',
                    icons: ['🤫', '🚫']
                },
                {
                    number: 2,
                    name: 'La Disponibilité',
                    text: '"En tout temps et en tout lieu".',
                    icons: ['⏰', '🌍']
                },
                {
                    number: 3,
                    name: 'L\'Intégrité / La Probité',
                    text: 'Honnêteté absolue. Pas de corruption, pas de mensonge.',
                    icons: ['🤝', '💎']
                },
                {
                    number: 4,
                    name: 'L\'Obéissance',
                    text: 'On obéit aux ordres (sauf s\'ils sont manifestement illégaux).',
                    icons: ['👮‍♂️', '⚖️']
                }
            ]
        }
    },
    {
        id: 'trois-types-missions',
        title: 'Les 3 Types de Missions',
        icon: '🎯',
        content: {
            title: 'Fiche 4 : Les 3 Types de Missions',
            subtitle: 'Que fait un gendarme toute la journée ?',
            missions: [
                {
                    type: 'Police Administrative (PA)',
                    icon: '🛡️',
                    color: 'light-blue',
                    concept: {
                        label: 'C\'est la',
                        bold: 'Prévention',
                        text: '. Empêcher l\'infraction de se commettre.'
                    },
                    examples: [
                        'Patrouilles',
                        'Contrôles routiers',
                        'Surveillance générale',
                        'Renseignement'
                    ],
                    icons: ['🚔', '👮‍♂️']
                },
                {
                    type: 'Police Judiciaire (PJ)',
                    icon: '⚖️',
                    color: 'light-red',
                    concept: {
                        label: 'C\'est la',
                        bold: 'Répression',
                        text: '. L\'infraction est commise, on cherche les auteurs.'
                    },
                    examples: [
                        'Constatations (cambriolage, meurtre)',
                        'Gardes à vue',
                        'Perquisitions',
                        'Auditions'
                    ],
                    icons: ['🔍']
                },
                {
                    type: 'Défense Militaire',
                    icon: '🪖',
                    color: 'light-green',
                    concept: null,
                    examples: [
                        'Protection du territoire (DOT)',
                        'Opérations Extérieures (OPEX)',
                        'Lutte contre le terrorisme'
                    ],
                    icons: ['🔫', '🚙']
                }
            ]
        }
    },
    {
        id: 'hierarchie-grades',
        title: 'La Hiérarchie (Les Grades)',
        icon: '⭐',
        content: {
            title: 'Fiche 3 : La Hiérarchie (Les Grades)',
            warning: {
                text: 'Interdiction formelle de se tromper là-dessus. C\'est le respect militaire.',
                color: 'red'
            },
            categories: [
                {
                    number: 1,
                    title: 'Militaires du Rang',
                    subtitle: '(GAV)',
                    icon: '⬆️',
                    color: 'blue',
                    ranks: [
                        'Gendarme Adjoint (2e classe, 1ère classe)',
                        'Brigadier',
                        'Brigadier-Chef'
                    ]
                },
                {
                    number: 2,
                    title: 'Sous-Officiers',
                    subtitle: '(C\'est votre futur corps)',
                    icon: '💣',
                    color: 'red',
                    ranks: [
                        'Gendarme (d\'abord "Sous contrat" puis "de Carrière")',
                        'Maréchal des Logis-Chef (MDC)',
                        'Adjudant',
                        'Adjudant-Chef',
                        'Major'
                    ],
                    attention: {
                        text: 'Attention : On ne dit jamais "Mon Major". On dit "Major" ou "Monsieur le Major".',
                        icon: '⚠️'
                    }
                },
                {
                    number: 3,
                    title: 'Officiers',
                    subtitle: null,
                    icon: '⚔️',
                    color: 'gold',
                    subcategories: [
                        {
                            name: 'Subalternes',
                            ranks: [
                                'Sous-Lieutenant (Elève)',
                                'Lieutenant',
                                'Capitaine'
                            ]
                        },
                        {
                            name: 'Supérieurs',
                            ranks: [
                                'Chef d\'Escadron (Commandant)',
                                'Lieutenant-Colonel',
                                'Colonel'
                            ]
                        },
                        {
                            name: 'Généraux',
                            ranks: [
                                {
                                    text: 'Général de Brigade',
                                    stars: 2
                                },
                                {
                                    text: 'de Division',
                                    stars: 3
                                },
                                {
                                    text: 'de Corps d\'Armée',
                                    stars: 4
                                },
                                {
                                    text: 'd\'Armée',
                                    stars: 5
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 'identite-statut-gendarmerie',
        title: 'L\'Identité et le Statut de la Gendarmerie',
        icon: '🛡️',
        content: {
            title: 'FICHE 1 : L\'IDENTITÉ ET LE STATUT DE LA GENDARMERIE NATIONALE (Synthèse)',
            definition: {
                text: 'Force armée instituée pour veiller à l\'exécution des lois. (Compétence nationale)',
                icon: '💣'
            },
            doubleTutelle: {
                title: 'LA DOUBLE TUTELLE (Autorités distinctes)',
                ministries: [
                    {
                        name: 'MINISTÈRE DE L\'INTÉRIEUR',
                        subtitle: '(Autorité Organique & Opérationnelle)',
                        icon: '🚨',
                        items: [
                            'Emploi (Missions de police)',
                            'Budget opérationnel'
                        ]
                    },
                    {
                        name: 'MINISTÈRE DES ARMÉES',
                        subtitle: '(Autorité Statutaire)',
                        icon: '⚔️',
                        items: [
                            'Statut militaire',
                            'Discipline & Avancement',
                            'Missions de défense (OPEX)'
                        ]
                    }
                ]
            },
            symboles: {
                title: 'SYMBOLES, TRADITIONS ET CHEF',
                items: [
                    {
                        category: 'LA DEVISE',
                        icon: '📜',
                        text: 'Pour la Patrie, l\'Honneur et le Droit'
                    },
                    {
                        category: 'SAINTE PATRONNE',
                        icon: '🕯️',
                        text: 'Sainte-Geneviève (26 novembre)'
                    },
                    {
                        category: 'LE CHEF (DGGN)',
                        icon: '⭐',
                        text: 'Général d\'armée Hubert BONNEAU (En poste)'
                    }
                ]
            },
            statutMilitaire: {
                title: 'POURQUOI LE STATUT MILITAIRE ? (Les 5 Piliers)',
                piliers: [
                    {
                        name: 'DISPONIBILITÉ',
                        icon: '⏰',
                        text: 'Service H24, logement en caserne.'
                    },
                    {
                        name: 'MOBILITÉ',
                        icon: '🌍',
                        text: 'Intervention en tous lieux (Métropole, Outre-mer, OPEX).'
                    },
                    {
                        name: 'RIGUEUR',
                        icon: '✋',
                        text: 'Discipline, hiérarchie, ordre.'
                    },
                    {
                        name: 'ESPRIT DE CORPS',
                        icon: '🤝',
                        text: 'Cohésion forte, fraternité d\'armes.'
                    },
                    {
                        name: 'POLYVALENCE',
                        icon: '⚙️',
                        text: 'Capacité d\'adaptation (Paix ↔ Crise ↔ Guerre).'
                    }
                ]
            }
        }
    }
];

