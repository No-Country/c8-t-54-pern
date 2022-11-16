const { db } =require( '../utils/database.util');
import { DataTypes } from 'sequelize' 
import { User } from './Users';
import { Product } from './Products';
import { ProductsInCart } from './ProductsInCart';


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
<<<<<<< HEAD:server/models/cart.ptm
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
=======
>>>>>>> dev:server/models/Carts.ts
    date: {
        type: DataTypes.DATE
    }
};
const config = {};

const Cart = db.define('Cart', columns, config);

<<<<<<< HEAD:server/models/cart.ptm
//module.exports = {Cart}
module.exports =  Cart;
=======
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: ProductsInCart })

export {Cart}
>>>>>>> dev:server/models/Carts.ts
