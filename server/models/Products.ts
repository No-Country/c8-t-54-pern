import { db } from "../utils/database.util";
import { DataTypes } from "sequelize";
import { Categories } from "./Categories";
import { ProductImgs } from "./ProductImgs";
import { Order } from "./Orders";
import { User } from "./Users";
import { Colour } from "./Colours";
import { Size } from "./Sizes";
import { Cart } from "./Carts";

const config = {
  tableName: "Products",
  timestamps: true,
  paranoid: true
};

const Product = db.define("Product", {
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
    get() {
      const rawValue = this.getDataValue('price');
      return rawValue ? parseFloat(rawValue) : null;
    },
    allowNull: false,
  }, 
  deletedAt: {
    type: DataTypes.STRING,
  }
}, config);

Product.belongsToMany(Categories, { through: "ProductCategories", foreignKey: "productId", otherKey: "categoryId" });
Product.belongsToMany(Cart, { through: "ProductsInCart", foreignKey: "productId", otherKey: "cartId", });
Cart.belongsToMany(Product, { through: "ProductsInCart", foreignKey: "cartId", otherKey: "productId", });

const ProductImgsAssoc = Product.hasMany(ProductImgs, {as:"ProductImgs", foreignKey: "ProductId" });

Product.belongsToMany(Size, {as:  "Size", through: "ProductSize", foreignKey: "productId", otherKey: "sizeId", });

Product.belongsToMany(Colour, {
  through: "ProductColours",
  foreignKey: "productId",
  otherKey: "colourId",
});

Product.belongsToMany(User, {
  through: "Favorites",
  foreignKey: "productId",
  otherKey: "userId",
});

Product.belongsToMany(Order, {
  through: "ProductsInOrder",
  foreignKey: "productId",
  otherKey: "orderId",
});


export { Product, ProductImgs, ProductImgsAssoc };
