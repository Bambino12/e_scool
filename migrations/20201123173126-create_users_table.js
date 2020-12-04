'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",{
      id:{
          type:Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey:true   
      },
      mail: {
          type:Sequelize.STRING(30),
          allowNull:false,
          unique: true,
      },
      name: Sequelize.STRING(30),
      prenom: Sequelize.STRING(30),
      naissence_etud:Sequelize.STRING(30),
      password: Sequelize.STRING(30),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE, 
  })
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('users')
  }
};
