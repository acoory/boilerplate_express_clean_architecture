"use strict";
const { Sequelize } = require('sequelize');
// Charger les variables d'environnement
const DATABASE = process.env.DB_NAME;
const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST || 'localhost';
const DIALECT = process.env.DB_DIALECT || 'mysql';
// Instance Sequelize
const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    logging: false, // Désactiver les logs SQL en console (facultatif)
});
module.exports = sequelize;
