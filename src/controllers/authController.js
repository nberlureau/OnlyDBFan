const User = require('../models/User');

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Inscrire un nouvel utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé
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

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connecter un utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        // Note: En production, il faudrait vérifier le mot de passe hashé
        if (user.password !== password) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        res.status(200).json({
            message: "Connexion réussie",
            userId: user._id,
            username: user.username
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};