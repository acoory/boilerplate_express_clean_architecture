import {Router, Request, Response} from 'express';

const router: Router = Router();

// Exemple de route GET pour récupérer tous les utilisateurs
router.get("/create", (req: Request, res: Response) => {
    res.json([{id: 1, name: 'John Doe'}]);
});

// Exemple de route POST pour ajouter un utilisateur
router.post("/users", (req: Request, res: Response) => {
    const {name} = req.body;
    res.status(201).json({message: `User ${name} created successfully`});
});

export default router;
