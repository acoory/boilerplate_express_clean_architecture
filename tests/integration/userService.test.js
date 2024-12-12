import UserService from '../../src/domain/services/userService';
import UserRepository from '../../src/domain/repositories/userRepository';
import {describe} from "node:test";
import bcrypt from 'bcrypt';


jest.mock('../../src/domain/repositories/userRepository');
jest.mock('bcrypt', () => ({
    hash: jest.fn().mockResolvedValue('hashedPassword'), // Simule le hachage du mot de passe
    compare: jest.fn().mockResolvedValue(true), // Simule la comparaison des mots de passe
}));

describe('UserService', () => {
    describe('createUser', () => {
        test('should create a user successfully', async () => {
            const mockCreateUser = jest.spyOn(UserRepository, 'createUser').mockResolvedValue({
                id: 1,
                email: 'test@example.com',
                password: 'test',
            });

            const response = await UserService.createUser('test@example.com', 'test');

            expect(mockCreateUser).toHaveBeenCalledTimes(1);
            expect(response).toEqual({
                id: 1,
                email: 'test@example.com',
            });
        });
    });

    describe('login', () => {
            test('should login a user successfully', async () => {
                    const mockLogin = jest.spyOn(UserRepository, 'getUserByEmail').mockResolvedValue({
                        id: 1,
                        email: 'test@example.com',
                        password: 'test',
                    });

                    const response = await UserService.login('test@example.com', 'test');

                    expect(mockLogin).toHaveBeenCalledTimes(1);
                    expect(bcrypt.compare).toHaveBeenCalledWith('test', 'test');
                    expect(response).toEqual({
                        id: 1,
                        email: 'test@example.com',
                    })
                }
            )
        }
    )
})