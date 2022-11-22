const { db } = require("../utils/database.util");
import { DataTypes } from "sequelize";

const columns = {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },  
};
const config = {
    tableName: "Favorites",
    timestamps: true,
    paranaoid: true
}
const Favorites = db.define("Favorite", columns, config);


export { Favorites };
