import UserModel from './user.model'; // Assurez-vous que le chemin est correct
import dotenv from "dotenv";

dotenv.config();

const createDatabase = async () => {
    try {
        await UserModel.sync({force: true});
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}

export const models = {
    createDatabase,
    User: UserModel,
};
