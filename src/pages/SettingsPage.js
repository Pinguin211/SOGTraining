import { router } from '../logic/router.js';

/**
 * Initialise et affiche la page des paramètres
 */
export function initSettingsPage() {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) {
        console.error('Element #content-area not found');
        return;
    }

    contentArea.innerHTML = '';

    // Titre
    const h1 = document.createElement('h1');
    h1.textContent = 'Paramètres';
    contentArea.appendChild(h1);

    // Section de gestion des données
    const dataSection = document.createElement('div');
    dataSection.className = 'settings-section';

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'Gestion des données';
    dataSection.appendChild(sectionTitle);

    const sectionDescription = document.createElement('p');
    sectionDescription.className = 'settings-description';
    sectionDescription.textContent = 'Vous pouvez supprimer toutes les données sauvegardées de l\'application. Cette action est irréversible et supprimera toutes vos réponses et tests.';
    dataSection.appendChild(sectionDescription);

    // Bouton pour vider le localStorage
    const clearDataButton = document.createElement('button');
    clearDataButton.className = 'btn-clear-data';
    clearDataButton.textContent = 'Vider toutes les données';
    clearDataButton.addEventListener('click', () => {
        if (confirm('Êtes-vous sûr de vouloir supprimer toutes les données ? Cette action est irréversible.\n\nCela supprimera :\n- Toutes vos réponses aux questions\n- Tous vos tests effectués\n- Toutes vos préférences')) {
            // Vider tout le localStorage
            localStorage.clear();
            
            // Afficher un message de confirmation
            alert('Toutes les données ont été supprimées avec succès.');
            
            // Rediriger vers la page d'accueil
            router.navigate('home');
        }
    });

    dataSection.appendChild(clearDataButton);
    contentArea.appendChild(dataSection);

    // Masquer la barre d'actions
    const actionBar = document.querySelector('.action-bar');
    if (actionBar) {
        actionBar.style.display = 'none';
    }

    // Afficher la navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = '';
    }
}
