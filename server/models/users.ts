const {db} = require('../utils/database.util')
import { DataTypes } from 'sequelize';

const columns = {
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
        type: DataTypes.INTEGER,
        },
        profilePic: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userRole: {
             type: DataTypes.STRING,
             allowNull: false
        }
    };

const config = {
    tableName: "Users",
    timestamps: true,
    paranoid: true
};

const User = db.define('User', columns, config);

// creamos la ralación con la tabla 
User.associate = (models)=>{
    User.hasMany(models.Order, {
        as: "Orders",
        foreignKey: "userId"
    })
};

module.exports = { User };