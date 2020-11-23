const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports  = sequelize.define("user.js",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    duree_CM: Sequelize.TIME,
    duree_TD: Sequelize.TIME,
    duree_TP: Sequelize.TIME,
})