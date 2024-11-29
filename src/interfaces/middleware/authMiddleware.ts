// src/interfaces/middlewares/authMiddleware.ts
import e, {Request, Response, NextFunction} from "express";

const jwt = require("jsonwebtoken");

const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({message: "Token is required"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
    }
};

export default authMiddleware;
