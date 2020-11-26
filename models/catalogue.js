const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports  = sequelize.define("offres",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    usersId:{
        allowNull:true,
        type:Sequelize.INTEGER(11),
        references:{
            model:'users',
            key:'id'
        }
    }
    
},
)