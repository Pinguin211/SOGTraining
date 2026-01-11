# GitHub Actions Workflows

## Déploiement automatique sur GitHub Pages

Le workflow `deploy.yml` déploie automatiquement l'application sur GitHub Pages à chaque push sur les branches `main` ou `master`.

### Configuration requise

1. **Activer GitHub Pages dans les paramètres du repository** :
   - Allez dans Settings > Pages
   - Source : sélectionnez "GitHub Actions"

2. **Le workflow se déclenche automatiquement** :
   - À chaque push sur `main` ou `master`
   - Ou manuellement via l'onglet "Actions"

### Structure du workflow

- **Build** : Installe les dépendances et build l'application avec Vite
- **Deploy** : Déploie le dossier `dist` sur GitHub Pages

### Base path automatique

Le workflow configure automatiquement le base path selon le nom du repository, permettant à l'application de fonctionner correctement sur GitHub Pages même si le repository n'est pas à la racine de l'utilisateur.

