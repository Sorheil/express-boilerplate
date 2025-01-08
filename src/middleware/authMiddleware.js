function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token manquant ou invalide' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // verification du token
        req.user = decoded; // stockage of the user
        next(); // pass to the next middleware
    } catch (err) {
        return res.status(403).json({ message: 'Token invalide' });
    }
}

module.exports = authMiddleware;