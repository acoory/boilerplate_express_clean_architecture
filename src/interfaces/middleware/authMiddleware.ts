// src/interfaces/middlewares/authMiddleware.ts
import e, {Request, Response, NextFunction} from "express";

const jwt = require("jsonwebtoken");

const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
    const token = req.headers.authorization?.split(" ")[1]; // Récupération du token Bearer

    console.log(token);
    if (!token) {
        return res.status(403).json({message: "Token is required"}); // Réponse d'erreur si pas de token
    }

    try {
        // Si vous utilisez JWT, vous pouvez vérifier le token avec jwt.verify()
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string); // Remplacez par votre secret
        // req.user = decoded; // Vous pouvez ajouter des informations à la requête si besoin
        next(); // Passe au middleware suivant ou à la route
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"}); // Réponse d'erreur si token invalide
    }
};

export default authMiddleware;
