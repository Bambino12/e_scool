const Sequelize = require('sequelize');
const sequelize = require('../src/database/connection');


module.exports = sequelize.define("admins",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primarykey: true
    },
    nom:{
        allowNull:false,
        type: Sequelize.STRING(30),
    },
    password:{
        allowNull:false,
        type: Sequelize.STRING(30),
    },
    email:{
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(30)
    }
})