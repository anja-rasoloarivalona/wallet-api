import Sequelize from 'sequelize';
import sequelize from './index.js'

const User = sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.STRING(32),
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING(64),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
    },
    {   
        timestamps: false,
        tableName: 'User'
    }
)

export {
    User
}