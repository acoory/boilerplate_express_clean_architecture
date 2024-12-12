import UserRepository from '../repositories/userRepository';
import {UserModelAttributes} from "../models/user.model";

const bcrypt = require('bcrypt');

class UserService {

    static async createUser(email: string, password: string): Promise<Omit<any, "createdAt" | "password" | "updatedAt">> {
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        if (!this.verifEmail(email)) {
            throw new Error('Invalid email');
        }

        try {
            const userExist = await UserRepository.getUserByEmail(email);

            if (userExist) {
                throw new Error('User already exists');
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await UserRepository.createUser(email, hashedPassword);

            return {
                id: user.id,
                email: user.email,
            };
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async getUserById(id: number): Promise<UserModelAttributes> {
        try {
            const user = await UserRepository.getUserById(id);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async login(email: string, password: string): Promise<Omit<any, "createdAt" | "updatedAt">> {

        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        const user = await UserRepository.getUserByEmail(email);


        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password).then((res: any) => {
            return res;
        });

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return {
            id: user.id,
            email: user.email,
        };
    }

    static verifEmail(email: string): boolean {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

}

export default UserService;
