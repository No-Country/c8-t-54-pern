import { db } from '../utils/database.util';
import { DataTypes } from 'sequelize'
import { Product } from './Products';


const columns = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
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
const Categories = db.define('Categories', columns, config);



export { Categories };
