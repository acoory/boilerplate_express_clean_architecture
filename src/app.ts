import express, {Express, Request, Response} from "express";
import userRoutes from './interfaces/routes/userRouter'; // Exemple de routes utilisateur pour l'API
// import dashboardRoutes from './interfaces/routes/dashboardRoutes'; // Routes pour le dashboard
import {urlencoded} from 'express';

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(urlencoded({extended: true}));

// Routes pour l'API
app.use('/user', userRoutes);

export default app;
