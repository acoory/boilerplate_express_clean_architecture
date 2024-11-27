"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./src/config/database"));
const app_1 = __importDefault(require("./src/app"));
const authMiddleware_1 = __importDefault(require("./src/interfaces/middleware/authMiddleware"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use('/api/client', app_1.default);
app.use('/api/dashboard', authMiddleware_1.default, app_1.default);
database_1.default.authenticate()
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
