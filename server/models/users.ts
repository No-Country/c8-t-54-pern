const { db } = require('../utils/database.util');
import { DataTypes } from 'sequelize';
import { Cart } from './Carts';
import { Order } from './Orders';


const columns = {
        id: {
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

User.hasOne(Cart, {
    foreignKey: 'userId'
});

User.hasMany(Order, {
    foreignKey: "userId"
});

export { User };