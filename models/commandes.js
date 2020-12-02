const Sequelize = require('sequelize');
const sequelize = require('../src/database/connection');


module.exports = sequelize.define("commandes",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primarykey: true
    }
})