import {DataTypes} from '@sequelize/core';
import sequelize from '../../config/database';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export type UserModelAttributes = {
    id: number;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

const UserModel: any = sequelize.define(
    'user',
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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