import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const db = new Sequelize(
  {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    dialect: "postgres",
    logging: false,
  }
);

module.exports = { db };
