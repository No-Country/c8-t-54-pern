const {db} = require ('../utils/database.util')
import { DataTypes } from 'sequelize' 


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
const config = {}

const Cart = db.define('Cart', columns, config);

module.exports = {Cart}