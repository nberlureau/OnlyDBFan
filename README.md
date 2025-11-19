# OnlyDBFan 🎨

Une application de réseau social moderne, développée en React, qui met l'accent sur une interface intuitive, des couleurs pastel apaisantes et des interactions fluides.

Ce projet a été initialisé avec **Vite** pour des performances optimales.

## 📋 Fonctionnalités

Le projet respecte un cahier des charges précis orienté UX/UI :

* **Design Pastel** : Une palette douce (Menthe, Lilas, Crème) pour un confort visuel maximal.
* **Interface Web (3 colonnes)** :
    * **Sidebar Gauche** : Navigation intuitive (Accueil, Recherche, Profil...).
    * **Feed Central** : Flux d'actualité centré avec focus sur le contenu visuel.
    * **Sidebar Droite** : Suggestions d'amis et mises en avant.
* **Micro-Interactions** :
    * Animation "Heart Beat" au double-clic sur une image.
    * Changement d'état visuel (couleurs) pour les Likes et Favoris.
    * Effets de survol fluides sur la navigation.

## 🛠️ Stack Technique

* [React](https://react.dev/) - Bibliothèque JavaScript pour l'interface utilisateur.
* [Vite](https://vitejs.dev/) - Environnement de développement rapide.
* [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire pour le styling rapide.
* [Lucide React](https://lucide.dev/) - Bibliothèque d'icônes légère et cohérente.

## 🚀 Guide d'Installation

Suivez ces étapes pour installer et lancer le projet sur votre machine locale.

### Prérequis

* **Node.js** (version 16 ou supérieure recommandée)
* **npm** (inclus avec Node.js)

### Installation pas à pas

1.  **Cloner le dépôt**
    Récupérez le code source sur votre machine :
    ```bash
    git clone [https://github.com/votre-compte/OnlyDBFan.git](https://github.com/votre-compte/OnlyDBFan.git)
    cd OnlyDBFan
    ```

2.  **Installer les dépendances**
    Cette commande installe React, Tailwind, Lucide et tous les outils nécessaires listés dans le `package.json` :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    Démarrez l'application en mode local :
    ```bash
    npm run dev
    ```

4.  **Accéder à l'application**
    Ouvrez votre navigateur et allez sur l'adresse indiquée dans le terminal (généralement) :
    > http://localhost:5173/

## 📂 Structure du Projet

Voici comment est organisé le code source dans le dossier `src/` :

```text
src/
├── components/         # Composants d'interface réutilisables
│   ├── Sidebar.jsx     # Barre de navigation latérale (Gauche)
│   ├── RightBar.jsx    # Panneau de suggestions (Droite)
│   └── PostCard.jsx    # Carte de publication avec interactions
├── App.jsx             # Mise en page principale (Layout 3 colonnes)
├── index.css           # Configuration Tailwind et variables CSS
└── main.jsx            # Point d'entrée de l'application