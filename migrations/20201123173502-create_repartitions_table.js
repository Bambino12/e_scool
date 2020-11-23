'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.createTable("repartitions",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    duree_CM: Sequelize.TIME,
    duree_TD: Sequelize.TIME,
    duree_TP: Sequelize.TIME,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('repartitions')
  }
};
