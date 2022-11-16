'use strict';

import {
    Model, UUIDV4
} from 'sequelize';
import { UserDataInterface } from "../helpers/interfaces"

module.exports = (sequelize: any, DataTypes: any) => {
    class User extends Model<UserDataInterface>
        implements UserDataInterface {
        firstName!: string;
        lastName!: string;
        userName!: string;
        phoneNumber!: number;
        userRole!: string;
        profilePic!: string;
        userId!: string;
        email!: string;
        password!: string;
        // static associate(models: any) {
        //     User.hasMany(models.Order, {
        //         as: "Orders",
        //         foreignKey: "userId"
        //     })
        // }
    };
    User.init({
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
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};