const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports  = sequelize.define("catalogues",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true  
    },
    libelle: {
        allowNull: false,
        type: Sequelize.STRING(30),
    },
    noveau: {
        type:Sequelize.STRING(30),
        allowNull:false,
    }
},
)