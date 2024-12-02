import {Sequelize, DataType} from '@sequelize/core';
import {MySqlDialect} from '@sequelize/mysql';
import dotenv from "dotenv";

dotenv.config();

const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config = {
    development: {
        dialect: MySqlDialect,
        database: process.env.DB_NAME_DEV,
        user: process.env.DB_USER_DEV,
        password: process.env.DB_PASSWORD_DEV,
        host: process.env.DB_HOST_DEV,
        port: parseInt(process.env.DB_PORT_DEV || '3306'),
    },
    production: {
        dialect: MySqlDialect,
        database: process.env.DB_NAME_PROD,
        user: process.env.DB_USER_PROD,
        password: process.env.DB_PASSWORD_PROD,
        host: process.env.DB_HOST_PROD,
        port: parseInt(process.env.DB_PORT_PROD || '3306'),
    }
}

const sequelize = new Sequelize(config[environment]);

export default sequelize;