import {DataTypes} from '@sequelize/core';
import sequelize from '../../config/database';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export type UserModelAttributes = {
    email: string;
    password: string;
};

const UserModel: any = sequelize.define(
    'user',
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },

    {
        defaultScope: {
            attributes: {exclude: ['password']},
        },
        scopes: {
            withPassword: {
                attributes: {
                    include: ['password']
                },
            },
        },
    },
);

export default UserModel;