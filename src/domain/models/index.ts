import UserModel from './user.model'; // Assurez-vous que le chemin est correct
import dotenv from "dotenv";

dotenv.config();

const createDatabase = async () => {
    if (process.env.NODE_ENV !== 'development') {
        console.log('Skipping database creation in non-development environment');
        return;
    }

    try {
        await UserModel.sync({force: true});
        console.log("Database created!");
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
};


export const models = {
    createDatabase,
    User: UserModel,
};
