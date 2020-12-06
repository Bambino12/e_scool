'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'formations',
      'univercite_id',
      {
        type:Sequelize.INTEGER,
        references:{
          model:'univercites',
          key:'id',
        },
        onUpate:'CASCADE',
        onDelete:'SET NULL',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn(
      'formations',
      'univercite_id'
    )
  }
};
