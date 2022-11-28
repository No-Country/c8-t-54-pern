import { User } from './Users';
import { Cart } from './Carts';
import { Order } from './Orders';
import { Product } from './Products';
import { Categories } from './Categories';
import { Colour } from './Colours';

//         USER ASSOCIATIONS 

User.hasMany(Order, { foreignKey: "userId" });

User.hasMany(Product, { foreignKey: 'userId' });

//          CART ASSOCIATIONS 
Cart.hasMany(Product, { foreignKey: "cartId" });
Cart.belongsTo(User, { foreignKey: "userId" });


Categories.hasMany(Product, {foreignKey: "categoryId"});

//          ORDERS 
Order.belongsToMany(Product, { through: 'ProductsInOrder', foreignKey: 'orderId', otherKey: 'productId' });

Product.hasMany(Colour, {foreignKey: 'productId'});
Colour.belongsToMany(Product, {through: "ProductColours", foreignKey: "colourId", otherKey: "productId"})


export { User, Cart, Categories, Order , Colour, Product};