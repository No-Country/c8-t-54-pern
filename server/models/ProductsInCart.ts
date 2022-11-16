import { db } from '../utils/database.util';
import { DataTypes } from 'sequelize' 
import { Cart } from './Carts';

const columns = {
    cartId: {
        type: DataTypes.UUID,
        references: {
            model: "Cart"
        }
    },
    productId: {
        type: DataTypes.UUID,
        references: {
            model: "Products"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
};
const config = {
    tableName: "ProductsInCarts",
    timestamps: true,
    paranaoid: true
}

const ProductsInCart = db.define('ProductsInCart', columns, config);

export {ProductsInCart}