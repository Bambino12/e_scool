const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports  = sequelize.define("offres",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    intitule: Sequelize.STRING(255),
    prix: Sequelize.INTEGER(11),
    
},
{tableName: 'user', timestamps: false, underscored: true}
)