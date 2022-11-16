const { db } = require("../utils/database.util");
import { DataTypes } from "sequelize";

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

module.exports = { Product };
