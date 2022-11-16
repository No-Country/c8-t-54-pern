const { db } = require('../utils/database.util');
import { DataTypes } from 'sequelize' 
import { Product } from './Products';


const columns = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};
const config = {
    tableName: "Categories",
    timestamps: true,
    paranaoid: true
}
const Categorie = db.define('Categorie', columns, config);

Categorie.hasMany(Product);

export {Categorie};