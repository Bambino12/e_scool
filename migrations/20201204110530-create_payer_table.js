'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.createTable("payers",{
      id:{
          type:Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey:true   
      },
      facture_id: {
          allowNull:false,
          type: Sequelize.INTEGER(11),
          references:{
              model:'factures',
              key:'id'
          }
      },
      user_id:{
          allowNull:false,
          type:Sequelize.INTEGER(11),
          references:{
              model:'users',
              key:'id'
          }
      },
      formation_id:{
          allowNull:false,
          type:Sequelize.INTEGER(11),
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
  
    return  queryInterface.dropTable('payers');
  
  }
};
