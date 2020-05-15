'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('users', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER.UNSIGNED
          },
          name: {
              type: Sequelize.STRING
          },
          age: {
              type: Sequelize.STRING
          },
          created_at: {
              allowNull: true,
              type: Sequelize.DATE
          },
          updated_at: {
              allowNull: true,
              type: Sequelize.DATE
          }

      });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('users');

  }
};
