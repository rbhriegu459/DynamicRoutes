const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'rishita', {
    dialect:'mysql', 
    host:'localhost'
});

module.exports = sequelize;