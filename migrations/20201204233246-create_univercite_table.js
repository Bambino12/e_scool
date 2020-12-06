'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      queryInterface.createTable("univercites",{
        id:{
            type:Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey:true   
        },
        nom:{
            allowNull: false,
            type: Sequelize.STRING(30)
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE, 
    });
  
  },

  down: async (queryInterface, Sequelize) => {
 
    queryInterface.dropTable('univercites');
   
  }
};
