'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("formations",{
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("formations")
  }
};
