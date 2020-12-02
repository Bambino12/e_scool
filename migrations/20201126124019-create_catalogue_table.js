'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.createTable("catalogues",{
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
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

  });  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("catalogues")
  }
};
