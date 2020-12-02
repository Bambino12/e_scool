'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("factures",{
      id:{
          type:Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey:true   
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE, 
  })
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('factures')
  }
};
