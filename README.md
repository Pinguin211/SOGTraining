# 📚 Préparation Oral SOG - Question Training

Application web de préparation à l'oral SOG (Sous-officier de Gendarmerie par voie externe). Cet outil vous permet de réviser les questions d'entretien, de vous entraîner avec des tests personnalisés, d'accéder à des fiches de révision et d'obtenir une correction IA de vos réponses.

## 🌐 Accès à l'application

**Application en ligne :** [Accéder à l'application sur GitHub Pages](https://Pinguin211.github.io/SOGTraining/)

## 🚀 Guide d'utilisation

### Page d'accueil

La page d'accueil vous donne un accès rapide à trois fonctionnalités principales :

1. **Question du jour** : Répondez à une question aléatoire non répondue directement depuis la page d'accueil
2. **Démarrer un nouveau test** : Lancez rapidement un test d'entraînement personnalisé
3. **Fiches de révision** : Accédez rapidement à 2 fiches de révision sélectionnées aléatoirement

### Répondre aux questions

#### Depuis la page "Toutes les questions"

1. Naviguez vers la section **"Toutes les questions"** dans le menu
2. Parcourez les questions organisées par sections :
   - Présentation et Parcours
   - Motivations et Projet
   - Connaissances de l'Institution
   - Mises en situation et Éthique
   - Questions de Personnalité et "Pièges"
3. Cliquez sur **"Répondre"** pour une question
4. Saisissez votre réponse dans le champ texte
5. Votre réponse est **sauvegardée automatiquement** quand vous quittez le champ
6. Vous pouvez **modifier** ou **effacer** votre réponse à tout moment

#### Depuis un test d'entraînement

1. Créez un nouveau test depuis la page d'accueil ou la section "Test"
2. Configurez votre test :
   - Donnez un nom à votre test
   - Choisissez le type de questions (toutes ou par section)
   - Définissez le nombre de questions (5 à 50)
3. Répondez aux questions une par une
4. Naviguez entre les questions avec les boutons "Précédent" / "Suivant"
5. Vos réponses sont sauvegardées automatiquement

### Tests d'entraînement

Les tests simulent un entretien oral réel :

- **Création** : Configurez votre test selon vos besoins
- **Exécution** : Répondez aux questions dans l'ordre
- **Sauvegarde** : Tous vos tests sont sauvegardés avec leurs réponses
- **Historique** : Consultez tous vos tests passés depuis la page "Test"
- **Réutilisation** : Si vous avez déjà répondu à une question, vous pouvez choisir de réutiliser votre réponse ou d'en écrire une nouvelle

### Fiches de révision

Accédez à des fiches de révision complètes sur différents thèmes :

- Formation SOG
- Identité et Statut de la Gendarmerie
- Organisation et Subdivisions
- Hiérarchie et Grades
- Les 3 Types de Missions
- Géographie et Compétence
- Valeurs et Devoirs

Naviguez vers la section **"Révision"** dans le menu pour voir toutes les fiches disponibles.

## 🤖 Correction IA des réponses

L'application intègre un système de génération de prompts pour l'analyse IA de vos réponses. Cette fonctionnalité vous permet d'obtenir une correction professionnelle de vos réponses en utilisant un outil d'IA externe (comme ChatGPT, Claude, etc.).

### Comment utiliser la correction IA

1. **Répondez aux questions** : Commencez par répondre aux questions qui vous intéressent
2. **Exportez vos réponses** : 
   - Depuis la page "Toutes les questions", cliquez sur le bouton **"Exporter"**
   - Depuis l'historique des tests, cliquez sur **"Exporter"** pour un test spécifique
3. **Configurez l'analyse** :
   - **Contexte d'analyse** : Choisissez le point de vue de l'expert qui analysera vos réponses :
     - **Officier supérieur (Colonel)** : Évalue l'éthique, la déontologie et la hauteur de vue
     - **Psychologue clinicien** : Analyse la stabilité émotionnelle et les motivations profondes
     - **Major de Gendarmerie (25 ans terrain)** : Juge la capacité d'intégration et la connaissance des missions
     - **Enquêteur IGGN** : Évalue l'éthique et le respect de la déontologie
     - **Conseiller Recrutement (CIR)** : Analyse la communication et le dynamisme
     - **Analyste** : Évalue l'ouverture d'esprit et la culture générale
   
   - **Format d'analyse** : Choisissez le type de rapport souhaité :
     - **Analyse Standard** : Rapport complet avec analyse du profil, points critiques et conseils
     - **Mode Drill** : Focalisé sur le vocabulaire professionnel et les phrases à mémoriser
     - **Mode Flash** : Analyse rapide avec verdict (VALIDE/FRAGILE/ÉLIMINATOIRE)
     - **Analyse Comportementale** : Focalisé sur la posture et l'image renvoyée

4. **Copiez le prompt** : Cliquez sur **"Copier le Prompt"** pour copier le prompt généré
5. **Collez dans un outil d'IA** : 
   - Ouvrez ChatGPT, Claude, ou tout autre outil d'IA conversationnelle
   - Collez le prompt copié
   - L'IA analysera vos réponses selon le contexte et le format choisis

### Exemple d'utilisation

```
1. Vous répondez à 10 questions sur l'application
2. Vous exportez vos réponses
3. Vous choisissez "Officier supérieur" + "Mode Drill"
4. Vous copiez le prompt généré
5. Vous le collez dans ChatGPT
6. ChatGPT vous donne une analyse détaillée avec :
   - Le vocabulaire professionnel à utiliser
   - Les phrases parfaites à mémoriser
   - Les erreurs à éviter
```

### Avantages de la correction IA

- **Analyse professionnelle** : Vos réponses sont analysées selon différents points de vue d'experts
- **Personnalisation** : Choisissez le contexte et le format qui vous convient
- **Amélioration continue** : Obtenez des conseils précis pour améliorer vos réponses
- **Vocabulaire institutionnel** : Apprenez les termes et expressions professionnelles à utiliser

## 💾 Sauvegarde des données

Toutes vos réponses sont sauvegardées automatiquement dans votre navigateur (localStorage) :

- ✅ **Sauvegarde automatique** : Vos réponses sont enregistrées dès que vous quittez un champ
- ✅ **Persistance** : Vos données restent disponibles entre les sessions
- ✅ **Export** : Vous pouvez exporter toutes vos réponses au format JSON ou générer un prompt IA
- ⚠️ **Stockage local** : Les données sont stockées uniquement sur votre appareil (supprimées si vous videz le cache du navigateur)

## 📱 Application Progressive Web App (PWA)

L'application est installable comme une application native :

- **Installation** : Ajoutez l'application à l'écran d'accueil de votre appareil
- **Mode hors ligne** : Fonctionne sans connexion internet (après premier chargement)
- **Mises à jour automatiques** : L'application se met à jour automatiquement en arrière-plan
- **Expérience optimale** : Interface adaptée mobile et desktop

### Comment installer la PWA

**Sur mobile (Android/iOS) :**
1. Ouvrez l'application dans votre navigateur
2. Appuyez sur le menu (⋮ ou ⋯)
3. Sélectionnez "Ajouter à l'écran d'accueil" ou "Installer l'application"

**Sur desktop :**
1. Ouvrez l'application dans Chrome/Edge
2. Cliquez sur l'icône d'installation dans la barre d'adresse
3. Confirmez l'installation

## 🛠️ Technologies utilisées

- **Vite** : Build tool et serveur de développement
- **JavaScript (ES6+)** : Langage de programmation
- **CSS3** : Styles et responsive design
- **Progressive Web App (PWA)** : Support offline et installation
- **LocalStorage** : Sauvegarde des données côté client

## 🚀 Installation et développement local

### Prérequis

- Node.js (version 20 ou supérieure)
- npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/Pinguin211/QuestionTraining.git
cd QuestionTraining

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build de production

```bash
# Créer le build de production
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

### Prévisualisation du build

```bash
# Prévisualiser le build de production
npm run preview
```

## 📂 Structure du projet

```
QuestionTraining/
├── src/
│   ├── components/      # Composants réutilisables
│   ├── data/            # Données (questions, fiches de révision, prompts)
│   ├── logic/           # Logique métier (router, storage, export, prompt-maker)
│   ├── pages/           # Pages de l'application
│   └── styles/         # Fichiers CSS
├── public/             # Fichiers statiques (icônes, favicon)
├── dist/               # Build de production
└── .github/workflows/  # GitHub Actions pour le déploiement
```

## 🔄 Déploiement automatique

L'application est déployée automatiquement sur GitHub Pages via GitHub Actions :
- Déploiement à chaque push sur `main` ou `master`
- Build automatique avec Vite
- Configuration PWA incluse

Voir [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) pour plus de détails.

## 📝 Licence

Ce projet est destiné à un usage personnel pour la préparation à l'oral SOG.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer les questions existantes
- Ajouter de nouvelles fiches de révision

## 📞 Support

Pour toute question ou problème, ouvrez une [issue](https://github.com/Pinguin211/QuestionTraining/issues) sur GitHub.

---

**Bon courage pour votre préparation à l'oral SOG ! 🎯**
