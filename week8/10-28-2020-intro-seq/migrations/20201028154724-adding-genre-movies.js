'use strict';

module.exports = {
  // perform/run the migration 
  up: async (queryInterface, Sequelize) => {
    // Movies is the table name 
    // genre is the column name 
      return queryInterface.addColumn('Movies','genre',{
        type: Sequelize.STRING
      })
  },

  // undo the migration 
  down: async (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Movies','genre')
  }
};
