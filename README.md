# Express Boilerplate

A solid and modular boilerplate to quickly start an API project with **Express**, **MongoDB**, **JWT**, and other essential tools for developing secure backend applications.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Routes](#routes)
5. [Start the Server](#start-the-server)
6. [Technologies Used](#technologies-used)
7. [Tests](#tests)
8. [Contribute](#contribute)
9. [License](#license)

## Introduction

This project is a base template for creating secure REST APIs with **Express**. It provides a well-structured architecture that includes:

- Authentication and authorization via **JWT**.
- Connection to **MongoDB** with **Mongoose**.
- Error handling and custom middleware.
- Securing routes with access control.
- A clear structure for routes, controllers, models, and middleware.

It is designed to be easily extensible and used for new projects, while providing a solid foundation for rapid development.

## Installation

### Prerequisites

Before you begin, make sure you have installed the following tools on your machine:

- **Node.js** (version 14 or higher)
- **MongoDB** (or use a cloud MongoDB service like Atlas)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/express-boilerplate.git
   cd express-boilerplate
   ```

2. **Install dependencies**:
   Use `npm` or `yarn` to install all the project dependencies.
   ```bash
   npm install
   ```

3. **Create your `.env` file**:
   In the `config` folder of the project, create a `.env` file and add the following variables:
   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/mydatabase
   JWT_SECRET=your_secret_key
   ```

4. **Start the server**:
   Once the installation is complete, you can start the server with the following command:
   ```bash
   npm start
   ```

   The server will be available at `http://localhost:5000`.

## Configuration

This project uses **MongoDBAtlas** for the database and **JWT** for authentication. You can customize the `.env` file to adjust the project configuration:

- **PORT**: The port the application listens on. By default, it is `5000`.
- **MONGO_URI**: The connection URI to your MongoDB database (example: `mongodb+srv://<db_username>:<db_password>@cluster0.5nram.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).
- **JWT_SECRET**: The secret key used to sign the JWT tokens. You must keep it secret.

## Base Routes for Authentication

### 1. `POST /api/auth/register`

Creates a new user. Information must be sent in the request body.

#### Example request
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Response
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

Allows a user to log in using their email and password. Returns a JWT token on success.

#### Example request
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Response
```json
{
  "token": "jwt_token_here"
}
```

### 3. `GET /api/protected`

A protected route that requires a valid JWT token to access the data.

#### Example request
Request header:
```
Authorization: Bearer jwt_token_here
```

Response:
```json
{
  "message": "Access granted to the protected route"
}
```

## Start the Server

Once the `.env` file is configured and dependencies are installed, you can start the server using:

```bash
npm start
```

This will start the server using `Nodemon` on the port specified in the `.env` file (default `5000`), and you can access the API at: `http://localhost:5000`.

## Technologies Used

- **Express**: Minimalist framework for Node.js.
- **MongoDB**: NoSQL database used for data storage.
- **Mongoose**: ODM (Object Data Modeling) for MongoDB.
- **JWT (JSON Web Tokens)**: Authentication using secure tokens.
- **Bcryptjs**: Used for hashing passwords.
- **Dotenv**: Loads environment variables.
- **Cors**: Middleware for handling cross-origin permissions (CORS).
- **Morgan**: Middleware for logging HTTP requests, useful for debugging and server monitoring.
- **Helmet**: Middleware that helps secure applications by setting various HTTP headers to protect against common web vulnerabilities.

## Tests

You can use **Jest** to perform unit and integration tests in this project. To run the tests, execute the following command:

## Contribute

Contributions are welcome! Here's how you can contribute to this project:

1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push your branch (`git push origin feature/my-feature`).
5. Open a Pull Request for us to review your changes.

### Issues and Suggestions

If you found a bug or have a suggestion, open an issue on GitHub.

## License

This project is under the **MIT** license. You are free to use, modify, and distribute it, as long as you include the license in your derived versions.
