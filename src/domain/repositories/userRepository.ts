import UserModel from '../models/user.model';


class UserRepository {

    async createUser(email: string, password: string) {
        try {
            const user = await UserModel.create({email, password});
            return user;
        } catch (error) {
            throw new Error('Failed to create user');
        }
    }

    async getUserById(id: number) {
        try {
            const user = await UserModel.findOne({where: {id}});
            console.log("user trouvé", user);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (e) {
            throw new Error('Failed to get user');
        }
    }

    async getUserByEmail(email: string) {
        try {
            const user = await UserModel.withScope('withPassword').findOne({where: {email}});

            if (!user) {
                throw new Error('User not found');
            }

            return user;
        } catch (e) {
            throw new Error('Failed to get user');
        }
    }

}

export default new UserRepository();


