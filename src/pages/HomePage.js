/**
 * Initialise et affiche la page d'accueil
 */
export function initHomePage() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Element #content-area not found');
        return;
    }

    // Vider le contenu existant
    contentArea.innerHTML = '';

    // Créer le contenu de bienvenue
    const welcomeSection = document.createElement('div');
    welcomeSection.className = 'welcome-section';

    const h1 = document.createElement('h1');
    h1.textContent = 'Bienvenue';
    welcomeSection.appendChild(h1);

    const p = document.createElement('p');
    p.className = 'welcome-text';
    p.textContent = 'Bienvenue dans votre outil de préparation à l\'oral SOG. Utilisez la navigation pour accéder aux différentes sections.';
    welcomeSection.appendChild(p);

    const featuresList = document.createElement('ul');
    featuresList.className = 'features-list';
    
    const features = [
        'Révision de toutes les questions possibles',
        'Sauvegarde automatique de vos réponses',
        'Export de vos réponses au format JSON'
    ];

    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    welcomeSection.appendChild(featuresList);
    contentArea.appendChild(welcomeSection);

    // Masquer la barre d'actions sur la page d'accueil
    const actionBar = document.querySelector('.action-bar');
    if (actionBar) {
        actionBar.style.display = 'none';
    }
    
    // Afficher la navbar (la page d'accueil est dans la navbar)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = '';
    }
}
