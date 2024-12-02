import UserModel from '../models/user.model';


class UserRepository {

    async createUser(email: string, password: string) {
        try {
            const user = await UserModel.create({email, password});

            if (!user) {
                throw new Error('Failed to create user');
            }
            return user;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getUserById(id: number) {
        try {
            const user = await UserModel.findOne({where: {id}});

            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getUserByEmail(email: string) {
        try {
            const user = await UserModel.withScope('withPassword').findOne({where: {email}});

            return user || null;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }


}

export default new UserRepository();


