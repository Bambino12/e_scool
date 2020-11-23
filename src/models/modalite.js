const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports  = sequelize.define("modalites",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    type_evaluation: Sequelize.STRING(255),
    
})