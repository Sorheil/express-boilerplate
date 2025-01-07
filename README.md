# Express Boilerplate

Un boilerplate solide et modulaire pour démarrer rapidement un projet d'API avec **Express**, **MongoDB**, **JWT**, et d'autres outils essentiels pour le développement d'applications backend sécurisées.

## Table des matières

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Routes](#routes)
5. [Démarrer le serveur](#démarrer-le-serveur)
6. [Technologies utilisées](#technologies-utilisées)
7. [Tests](#tests)
8. [Contribuer](#contribuer)
9. [Licence](#licence)

## Introduction

Ce projet est un modèle de base pour créer des APIs REST sécurisées avec **Express**. Il fournit une architecture bien structurée qui inclut :

- Authentification et autorisation via **JWT**.
- Connexion à **MongoDB** avec **Mongoose**.
- Gestion des erreurs et middleware personnalisés.
- Sécurisation des routes avec des contrôles d'accès.
- Structure claire pour les routes, contrôleurs, modèles et middleware.

Il est conçu pour être facilement extensible et utilisé pour de nouveaux projets, tout en offrant des bases solides pour un développement rapide.

## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- **Node.js** (version 14 ou supérieure)
- **MongoDB** (ou utilisez un service de base de données MongoDB dans le cloud comme Atlas)

### Étapes d'installation

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/votre-utilisateur/express-boilerplate.git
   cd express-boilerplate
   ```

2. **Installez les dépendances** :
   Utilisez `npm` ou `yarn` pour installer toutes les dépendances du projet.
   ```bash
   npm install
   ```

3. **Créez votre fichier `.env`** :
   À la racine du projet, créez un fichier `.env` et ajoutez les variables suivantes :
   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/mydatabase
   JWT_SECRET=votre_cle_secrete
   ```

4. **Démarrez le serveur** :
   Une fois l'installation terminée, vous pouvez démarrer le serveur avec la commande suivante :
   ```bash
   npm start
   ```

   Le serveur sera disponible à `http://localhost:5000`.

## Configuration

Ce projet utilise **MongoDB** pour la base de données et **JWT** pour l'authentification. Vous pouvez personnaliser le fichier `.env` pour ajuster la configuration du projet :

- **PORT** : Le port sur lequel l'application écoute. Par défaut, c'est `5000`.
- **MONGO_URI** : L'URI de connexion à votre base de données MongoDB (exemple : `mongodb://localhost:27017/mydatabase`).
- **JWT_SECRET** : La clé secrète utilisée pour signer les tokens JWT. Vous devez la garder secrète.

## Routes

### 1. `POST /api/users`

Crée un nouvel utilisateur. Les informations doivent être envoyées dans le corps de la requête.

#### Exemple de requête
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Réponse
```json
{
  "_id": "60c72b2f9b1d8c001c8d8c9b",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "$2b$10$5hXzVKlFpMX1.LT0kh/.nTjYXlVp4h7z7bl7fm7e.jRkKjCy3W1Fm",
  "__v": 0
}
```

### 2. `POST /api/auth/login`

Permet à un utilisateur de se connecter en utilisant son email et mot de passe. Retourne un token JWT en cas de succès.

#### Exemple de requête
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Réponse
```json
{
  "token": "jwt_token_here"
}
```

### 3. `GET /api/protected`

Route protégée qui nécessite un token JWT valide pour accéder aux données.

#### Exemple de requête
En-tête de la requête :
```
Authorization: Bearer jwt_token_here
```

Réponse :
```json
{
  "message": "Accès autorisé à la route protégée"
}
```

## Démarrer le serveur

Une fois le fichier `.env` configuré et les dépendances installées, vous pouvez démarrer le serveur en utilisant :

```bash
npm start
```

Cela démarrera le serveur sur le port spécifié dans le fichier `.env` (par défaut `5000`), et vous pourrez accéder à l'API à l'adresse suivante : `http://localhost:5000`.

## Technologies utilisées

- **Express** : Framework minimaliste pour Node.js.
- **MongoDB** : Base de données NoSQL utilisée pour le stockage des données.
- **Mongoose** : ODM (Object Data Modeling) pour MongoDB.
- **JWT (JSON Web Tokens)** : Authentification par token sécurisé.
- **Bcryptjs** : Utilisé pour le hachage des mots de passe.
- **Dotenv** : Permet de charger les variables d'environnement.
- **Cors** : Middleware pour la gestion des permissions de cross-origin (CORS).

## Tests

Vous pouvez utiliser **Jest** pour effectuer des tests unitaires et d'intégration dans ce projet. Pour lancer les tests, exécutez la commande suivante :

```bash
npm test
```

Les tests sont configurés pour tester les routes principales et la logique d'authentification.

## Contribuer

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer à ce projet :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`).
3. Commitez vos changements (`git commit -am 'Ajout d\'une nouvelle fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/ma-fonctionnalité`).
5. Ouvrez une Pull Request pour que nous puissions examiner vos modifications.

### Problèmes et suggestions

Si vous avez trouvé un bug ou si vous avez une suggestion, ouvrez un problème (issue) dans GitHub.

## Licence

Ce projet est sous la licence **MIT**. Vous êtes libre de l'utiliser, de le modifier et de le distribuer, tant que vous incluez la licence dans vos versions dérivées.
