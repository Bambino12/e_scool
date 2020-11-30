'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    queryInterface.createTable("catalogues",{
      id:{
          type:Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey:true  
      },
      libelle: {
          allowNull: false,
          type: Sequelize.STRING(30),
      },
      noveau: {
          type:Sequelize.STRING(30),
          allowNull:false,
      }
  });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
