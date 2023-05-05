const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsWliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Client = require('../models/client.models.js')(sequelize, Sequelize);

module.exports = db;