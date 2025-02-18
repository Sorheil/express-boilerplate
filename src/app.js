// Import dependencies
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
// Routes
const userRoutes = require('./routes/authRoutes');
//middleware
const authMiddleware = require('./middleware/authMiddleware');

// Load environment variables from .env file
dotenv.config();

// MongoDB connection
connectDB();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to your Express boilerplate!' });
});

// Routes
app.use('/api/auth', userRoutes);

// Route protégée
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Accès autorisé à la route protégée' });
});


// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).json({ error: 'Resource not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An internal server error occurred' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app;
