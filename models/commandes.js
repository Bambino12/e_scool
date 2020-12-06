const { Sequelize } = require(".");

const Sequelize = require('sequelize');
const sequelize = require('../src/database/connection');

module.exports = sequelize.define("ligneCommandes",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primarykey: true
    },
    qte_commande:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
    },
    factureId: {
        allowNull:false,
        type: Sequelize.INTEGER(11),
        references:{
            model:'commandes',
            key:'id'
        }
    },
    formationId: {
        allowNull:false,
        type: Sequelize.INTEGER(11),
        references:{
            model:'formations',
            key:'id'
        }
    }
})