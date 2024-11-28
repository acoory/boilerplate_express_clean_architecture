import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/database";
import appRouter from "./src/app";
import middleware from "./src/interfaces/middleware/authMiddleware";
import {models} from './src/domain/models/index';


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Route de l'application
app.use('/api/client/', appRouter);
app.use('/api/dashboard/', middleware, appRouter);

// Vérifier si la création de la base de données est activée
const createDb = process.env.CREATE_DB === 'true';

// Authentification à la base de données
sequelize.authenticate()
    .then(() => {
        console.log("Database connected!");
        if (createDb) {
            models.createDatabase();
            console.log("Database created!");
        }

        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });

    })
    .catch((err: Error) => {
        console.error("Error connecting to the database:", err);
    });
