import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/database";
import appRouter from "./src/app"
import middleware from "./src/interfaces/middleware/authMiddleware"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/api/client', appRouter);
app.use('/api/dashboard', middleware, appRouter);
sequelize.authenticate()
    .then(() => console.log("Database connected!"))
    .catch((err: Error) => console.log(err));

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});