import UserService from '../../src/domain/services/userService';
import UserRepository from '../../src/domain/repositories/userRepository';


jest.mock('../../src/domain/repositories/userRepository');

describe('UserService - createUser', () => {
    it('should create a user successfully', async () => {
        const mockCreateUser = jest.spyOn(UserRepository, 'createUser').mockResolvedValue({
            id: 1,
            email: 'test@example.com',
            password: 'test',
        });

        const response = await UserService.createUser('test@example.com', 'test');

        expect(mockCreateUser).toHaveBeenCalledTimes(1);
        expect(response).toEqual({
            "id": 1,
            "email": "test@example.com",
        });
    });

    it('should throw an error if email or password is missing', async () => {
        await expect(UserService.createUser('', '')).rejects.toThrow('Email and password are required');
    });
});
