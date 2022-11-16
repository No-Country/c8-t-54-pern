import { db } from '../utils/database.util';
import { DataTypes } from 'sequelize' 
import { User } from './Users';
import { Product } from './products';
import { ProductsInCart } from './ProductsInCart';


const columns = {
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE
    }
};
const config = {};

const Cart = db.define('Cart', columns, config);

Cart.belongsTo(User);
Cart.belongsToMany/* ACA va hasMany? */(Product, { through: ProductsInCart })

export {Cart}