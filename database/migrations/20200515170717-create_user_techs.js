'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('user_tech', {
            id: Sequelize.INTEGER.UNSIGNED,
            user_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {
                    model: "users",
                    key: "id"
                },
                allowNull: false,
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
           tech_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {
                    model: "teches",
                    key: "id"
                },
                allowNull: false,
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

        return queryInterface.dropTable('user_tech');
    }
};
/*model tabel name*/
