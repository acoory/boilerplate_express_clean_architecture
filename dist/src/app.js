"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./interfaces/routes/userRouter")); // Exemple de routes utilisateur pour l'API
// import dashboardRoutes from './interfaces/routes/dashboardRoutes'; // Routes pour le dashboard
const express_2 = require("express");
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
app.use((0, express_2.urlencoded)({ extended: true }));
// Routes pour l'API
app.use('/user', userRouter_1.default);
exports.default = app;
