const Sequelize = require('sequelize');
const sequelize = require('../src/database/connection');


module.exports = sequelize.define("factures",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primarykey: true
    },
    prix_factur:{
        allowNull:false,
        type: Sequelize.INTEGER(11),
    },
})