"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]; // Récupération du token Bearer
    console.log(token);
    if (!token) {
        return res.status(403).json({ message: "Token is required" }); // Réponse d'erreur si pas de token
    }
    try {
        // Si vous utilisez JWT, vous pouvez vérifier le token avec jwt.verify()
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Remplacez par votre secret
        // req.user = decoded; // Vous pouvez ajouter des informations à la requête si besoin
        next(); // Passe au middleware suivant ou à la route
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized" }); // Réponse d'erreur si token invalide
    }
};
exports.default = authMiddleware;
