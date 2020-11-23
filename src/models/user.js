const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports  = sequelize.define("user.js",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    mail: {
        type:Sequelize.STRING(300),
        allowNull:false,
        unique: true,
    },
    numero: {
        type: Sequelize.NUMBER()
    },
    name: Sequelize.STRING(300),
    prenom: Sequelize.STRING(300),
    age: Sequelize.INTEGER(11),
    password: Sequelize.STRING(300),
    matricule: Sequelize.STRING(225),
    
})