"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Exemple de route GET pour récupérer tous les utilisateurs
router.get("/create", (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }]);
});
// Exemple de route POST pour ajouter un utilisateur
router.post("/users", (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: `User ${name} created successfully` });
});
exports.default = router;
