const Sequelize = require('sequelize');
const sequelize = require('../database/connection');
const { Formation } = require('./relation');

module.exports  = sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    formation_id: {
        type: Sequelize.INTEGER(11),
        references:{
            model: 'formations',
            key: 'id',
        }
    },
    mail: {
        type:Sequelize.STRING(300),
        allowNull:false,
        unique: true,
    },numero: {
        type: Sequelize.INTEGER(11),
        unique:true,
        allowNull:false,
    },
    name: Sequelize.STRING(300),
    prenom: Sequelize.STRING(300),
    age: Sequelize.INTEGER(11),
    password: Sequelize.STRING(300),
    matricule: Sequelize.STRING(225),

},

{
    tableName: 'users', timestamps: false, underscored: false
})