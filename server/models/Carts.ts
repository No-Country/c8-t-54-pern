const { db } =require( '../utils/database.util');
import { DataTypes } from 'sequelize' 
import { User } from './users';

import { ProductsInCart } from './ProductsInCart';
import { Product } from './products';


const columns = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    status: {
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

const Cart = db.define('Cart', columns, config);

Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: ProductsInCart })

export {Cart}
