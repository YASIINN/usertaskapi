'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('todos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED
            },
            title: {
                type: Sequelize.STRING
            },
            descraption: {
                type: Sequelize.STRING
            },
            user_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {
                    model:"user",
                    key:"id"
                },
                allowNull:false,
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
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

        return queryInterface.dropTable('todos');
    }
};
