const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Imports des routes
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// --- 1. CONFIGURATION SWAGGER ---
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'OnlyDBFan API',
            version: '1.0.0',
            description: 'API du réseau social (Mongo/Cassandra/Redis)',
        },
        servers: [
            { url: 'http://localhost:3000' }
        ],
    },
    // Indique où sont tes commentaires @swagger (dans les routes et controllers)
    apis: ['./src/routes/*.js', './src/controllers/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
// Route pour afficher la doc : http://localhost:3000/api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// --- 2. CONNEXION MONGO ---
mongoose.connect('mongodb://localhost:27017/onlydbfan')
    .then(() => console.log('✅ MongoDB Connecté'))
    .catch(err => console.error('❌ Erreur Mongo:', err));


// --- 3. ROUTES ---
app.use('/api/auth', authRoutes);


// --- 4. START ---
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    console.log(`📄 Swagger disponible sur http://localhost:${PORT}/api-docs`);
});