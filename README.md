# OnlyDBFan �

Une application de réseau social moderne et élégante, refondue avec un thème sombre unifié et une architecture React robuste.

## 🎨 Nouveau Design & Thème

Le projet a évolué vers une esthétique "Premium Dark" pour une expérience utilisateur immersive et cohérente.

*   **Thème Global** : Fond sombre profond (`#050816`) unifié sur toutes les pages.
*   **Typographie** : Texte clair (`gray-100`) pour une lisibilité optimale.
*   **Navigation** : Barre de navigation supérieure fixe avec effet de flou (glassmorphism) et logo intégré.
*   **Composants** : Cartes et conteneurs avec des fonds transparents ou semi-transparents (`white/5`) pour s'intégrer harmonieusement.

## � Fonctionnalités & Pages

L'application est structurée autour de plusieurs pages clés, toutes accessibles via une navigation fluide :

*   **🏠 Home** : Fil d'actualité principal avec publications, stories et suggestions.
*   **compass Explore** : Page de découverte avec tendances et créateurs suggérés.
*   **💬 Messages** : Interface de messagerie instantanée avec liste de conversations et zone de chat.
*   **👤 Profile** : Page de profil utilisateur détaillée avec grille de médias et statistiques.
*   **➕ Create Post** : Interface dédiée à la création de nouveau contenu.
*   **🔔 Notifications** : Centre de notifications avec filtrage (Aujourd'hui, Hier).
*   **⚙️ Settings** : Panneau de configuration complet (Compte, Préférences, Sécurité).
*   **🔐 Login** : Page d'authentification stylisée.

## 🛠️ Stack Technique

*   **[React](https://react.dev/)** : Bibliothèque UI principale.
*   **[Vite](https://vitejs.dev/)** : Build tool ultra-rapide.
*   **[Tailwind CSS](https://tailwindcss.com/)** : Styling utilitaire pour le thème sombre personnalisé.
*   **[React Router](https://reactrouter.com/)** : Gestion du routage côté client (SPA).

## � Structure du Projet

L'architecture a été refondue pour plus de clarté et de maintenabilité :

```text
src/
├── components/
│   ├── AppLayout.jsx   # Layout global (Navbar + Outlet)
│   └── Navbar.jsx      # Barre de navigation supérieure
├── pages/              # Vues principales
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── Messages.jsx
│   ├── Profile.jsx
│   ├── CreatePost.jsx
│   ├── Notifications.jsx
│   ├── Settings.jsx
│   └── Login.jsx
├── assets/             # Images et logos (logo_sombre.png)
├── App.jsx             # Configuration des routes
└── index.css           # Styles globaux et variables Tailwind
```

## 📦 Installation & Démarrage

1.  **Installer les dépendances** :
    ```bash
    npm install
    ```
    *(Assurez-vous d'avoir installé `react-router-dom` si ce n'est pas déjà fait)*

2.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```

3.  **Accéder à l'application** :
    Ouvrez `http://localhost:5173` dans votre navigateur.