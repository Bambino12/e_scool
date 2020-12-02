'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("admins",{
      id:{
          type:Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey:true   
      },
      nom:{
          allowNull:false,
          type: Sequelize.STRING(30),
      },
      password:{
          allowNull:false,
          type: Sequelize.STRING(30),
      },
      email:{
          allowNull: false,
          unique: true,
          type: Sequelize.STRING(30)
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE, 
  })
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('admins')
  }
};