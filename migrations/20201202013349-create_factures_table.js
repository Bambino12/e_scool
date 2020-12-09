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
      prix_factur:{
        allowNull:false,
        type: Sequelize.INTEGER(11),
      },
      users_id: {
        allowNull:false,
        type: Sequelize.INTEGER(11),
        references:{
            model:'users',
            key:'id'
        }
      },
      mode_paie:{
        type:Sequelize.STRING(30),
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE, 
  })
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('factures')
  }
};
