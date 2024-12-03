import express, {Express} from "express";
import userRoutes from './interfaces/routes/userRouter';
import {urlencoded} from 'express';

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(urlencoded({extended: true}));


app.use('/user', userRoutes);

export default app;
