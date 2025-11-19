# 🚀 OnlyDBFan - Backend API

Bienvenue sur le dépôt Backend du projet **OnlyDBFan**.
Ce projet est une API de réseau social construite avec une architecture de microservices simulée via Docker, utilisant la polyglotte persistence (MongoDB, Cassandra, Redis).

## 🛠 Stack Technique ( A Check peut changer)

* **Runtime :** Node.js (v20)
* **Framework :** Express.js
* **Document DB :** MongoDB (Profils, Groupes, Métadonnées)
* **Wide-Column DB :** Cassandra (Messagerie, Timeline, Logs)
* **Key-Value Store :** Redis (Cache, Sessions, Compteurs live)
* **DevOps :** Docker & Docker Compose

---

## ⚡️ Installation & Démarrage

Pré-requis : Avoir **Docker** et **Docker Compose** installés.

1.  **Cloner le projet :**
    ```bash
    git clone git@github.com:G7b-IUT-Limoges/OnlyDBFan.git
    cd OnlyDBFan
    ```

2.  **Configuration :**
    Copier le fichier d'exemple d'environnement.
    ```bash
    cp .env.example .env
    ```

3.  **Lancer la stack (BDD + API) :**
    ```bash
    docker-compose up --build
    ```
    *L'API sera accessible sur `http://localhost:3000`.*
    *La documentation Swagger sera sur `http://localhost:3000/api-docs`.*

---

## 📐 Architecture du Code (Changement Possible)

Le projet suit une **Clean Architecture** simplifiée (Pattern Controller-Service-Repository) pour gérer la complexité des 3 bases de données.

```text
src/
├── config/         # Connexions BDD (Mongo, Cassandra, Redis)
├── controllers/    # Validation des entrées (Zod) & Réponses HTTP
├── services/       # Logique métier pure
├── repositories/   # Requêtes BDD (Une source de vérité par DB)
├── models/         # Schémas (Mongoose)
├── routes/         # Définitions des endpoints
└── app.js          # Point d'entrée

Tag,Signification,Exemple
[FEAT],Nouvelle fonctionnalité,[FEAT] Ajout de la route login
[FIX],Correction de bug,[FIX] Correction du crash Redis
[WIP],Travail en cours (ne pas merge),[WIP] Dev du service Chat
[REFACTOR],Amélioration du code sans changer le comportement,[REFACTOR] Nettoyage du controller User
[DOCS],Documentation uniquement,[DOCS] Mise à jour du Swagger
[CHORE],"Maintenance (dépendances, config...)",[CHORE] Update docker-compose