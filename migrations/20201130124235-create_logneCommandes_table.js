'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("ligneCommandes",{
      id:{
          type:Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey:true   
      },
      qteCommande:{
          allowNull:false,
          type: Sequelize.INTEGER(11)
      },
      commande_id: {
        allowNull:false,
        type: Sequelize.INTEGER(11),
        references:{
            model:'commandes',
            key:'id'
        }
    },
        formation_id: {
        allowNull:false,
        type: Sequelize.INTEGER(11),
        references:{
            model:'formations',
            key:'id'
        }
    },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
  })
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('ligneCommandes')
  }
};
