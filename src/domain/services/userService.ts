// src/domain/services/userService.ts
import UserRepository from '../repositories/userRepository';
import UserModel, {UserModelAttributes} from "../models/user.model";

const bcrypt = require('bcrypt');

class UserService {
    // Créer un utilisateur en validant les paramètres
    static async createUser(email: string, password: string): Promise<Omit<UserModelAttributes, "password">> {
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        try {
            const user = await UserRepository.createUser(email, password);
            return user;
        } catch (error) {
            throw new Error('Failed to create user');
        }
    }

    static async getUserById(id: number): Promise<UserModelAttributes> {
        try {
            const user = await UserRepository.getUserById(id);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw new Error('Failed to get user');
        }
    }

    static async login(email: string, password: string): Promise<UserModelAttributes> {

        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        const user = await UserRepository.getUserByEmail(email);


        if (!user) {
            throw new Error('User not found');
        }

        console.log({
            user: user.password,
            password: password
        })
        const isPasswordValid = await bcrypt.compare(password, user.password).then((res: any) => {
            return res;
        });

        console.log(isPasswordValid);

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return user;
    }

}

export default UserService;
