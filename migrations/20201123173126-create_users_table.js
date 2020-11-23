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
      numero: {
          type: Sequelize.INTEGER(11),
          unique:true,
          allowNull:false,
      },
      name: Sequelize.STRING(300),
      prenom: Sequelize.STRING(300),
      age: Sequelize.INTEGER(11),
      password: Sequelize.STRING(300),
      matricule: Sequelize.STRING(225),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,  
  })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('users')
  }
};
