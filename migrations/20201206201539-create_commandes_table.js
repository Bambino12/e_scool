'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    queryInterface.createTable("commandes",{
      qte_commande:{
          type: Sequelize.INTEGER(11),
          allowNull:false,
      },
      factures_id: {
          allowNull:false,
          type: Sequelize.INTEGER(11),
          primarykey: true
      },
      formations_id: {
          allowNull:false,
          type: Sequelize.INTEGER(11),
          primarykey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
  });
   
  },

  down: async (queryInterface, Sequelize) => {
 
    queryInterface.dropTable('commandes');
    
  }
};
