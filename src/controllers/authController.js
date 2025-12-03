const User = require('../models/User');

/**
 * @swagger
 * /auth/register:
 * post:
 * summary: Inscrire un nouvel utilisateur
 * tags: [Auth]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * username:
 * type: string
 * email:
 * type: string
 * password:
 * type: string
 * responses:
 * 201:
 * description: Utilisateur créé
 */
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newUser = new User({ username, email, password });

        await newUser.save();

        res.status(201).json({ message: "Utilisateur créé !", userId: newUser._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};