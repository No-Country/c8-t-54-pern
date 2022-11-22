const { db } = require('../utils/database.util')
import { DataTypes } from 'sequelize';
import { Categorie } from './Categories';
import { Cart } from './Carts';
import { ProductsInCart } from './ProductsInCart';
import { ProductImgs } from './ProductImgs';
import { Order } from './Orders';
import { ProductsInOrder } from './ProductsInOrder';
import { User } from './Users';

const columns = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantityInStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
};

const config = {};

const Product = db.define("Product", columns, config);

Product.belongsTo(Categorie);

Product.associate = (models: any) => {
  Product.hasMany(models.ProductImgs, { foreignKey: "ProductId", });

  Product.belongsToMany(models.User, { through: 'Favorites', foreignKey: 'ProductId', otherKey: 'userId' });

  Product.belongsToMany(models.Cart, { through: 'ProductsInCart', foreignKey: 'productId', otheKey: 'cartId'});

  Product.belongsToMany(models.Order, { through: 'ProductsInOrder', foreignKey: 'productId', otherKey: 'orderId' });
}





export { Product };
