import { db } from '../utils/database.util';
import { DataTypes } from 'sequelize' 
import { User } from './Users';
import { Product } from './products';

const columns = {
    orderId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    productId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE
    }
};
const config = {};

const ProductsInOrder = db.define('ProductsInOrder', columns, config);

export {ProductsInOrder}