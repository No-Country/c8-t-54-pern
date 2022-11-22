const { db } = require("../utils/database.util");
import { DataTypes } from "sequelize";
import { User } from "./Users";

import { ProductsInCart } from "./ProductsInCart";
import { Product } from "./Products";

const columns = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
  },
};
const config = {};

const Cart = db.define("Cart", columns, config);

Cart.associate = (models: any) => {
  Cart.belongsTo(models.User, { foreignKey: "userId" });

  Cart.belongsToMany(models.Product, {
    through: "ProductsInCart",
    foreignKey: "cartId",
    otherKey: "productId",
  });
};

export { Cart };
