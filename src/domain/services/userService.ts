// src/domain/services/userService.ts
import UserRepository from '../repositories/userRepository';
import UserModel, {UserModelAttributes} from "../models/user.model";

const bcrypt = require('bcrypt');

class UserService {

    static async createUser(email: string, password: string): Promise<Omit<UserModelAttributes, "password">> {
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        try {

            const userExist = await UserRepository.getUserByEmail(email);

            if (userExist) {
                throw new Error('User already exists');
            }

            const user = await UserRepository.createUser(email, password);
            return user;
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
        } catch (error) {
            throw new Error(error.message);
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

        const isPasswordValid = await bcrypt.compare(password, user.password).then((res: any) => {
            return res;
        });

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return user;
    }

}

export default UserService;
