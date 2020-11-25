const Sequelize = require('sequelize');
const sequelize = require('../database/connection');
const { User, Modalite, Repartition } = require('./relation');

module.exports  = sequelize.define("formations",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    teaser: Sequelize.STRING(255),
    code: Sequelize.STRING(255),
    type: Sequelize.STRING(255),
    intitule: Sequelize.STRING(255),
    duree: Sequelize.DATE,
    public_cible: Sequelize.STRING(255),
    prerequis: Sequelize.STRING(255),
    volume_horaire: Sequelize.TIME,
    objectif_G: Sequelize.STRING(255),
    objectif_S: Sequelize.STRING(255),
    materiel_pedagogique: Sequelize.STRING(255),
    ressource_pedagogique: Sequelize.STRING(255),
    image:Sequelize.STRING(255),
    niveau: Sequelize.STRING(255),
    prix: Sequelize.INTEGER(11), 
    user_id: {
        type: Sequelize.INTEGER(11),
        references:{
            models: 'userss',
            key:'id'
        }
    },
    modalite_id: {
        type: Sequelize.INTEGER(11),
        references:{
            models: 'modalitess',
            key:'id'
        }
    },
    repartition_id: {
        type: Sequelize.INTEGER(11),
        references:{
            models: 'repartitionss',
            key:'id',
        }
    }

})