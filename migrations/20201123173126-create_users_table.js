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
          type:Sequelize.STRING(300),
          allowNull:false,
          unique: true,
      },
      name: Sequelize.STRING(255),
      prenom: Sequelize.STRING(255),
      age: Sequelize.INTEGER(11),
      password: Sequelize.STRING(255),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE, 
  })
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('users')
  }
};
