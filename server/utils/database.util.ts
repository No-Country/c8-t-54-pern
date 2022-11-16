import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { stringify } from "querystring";

dotenv.config({ path: "./config.env" });

const db = new Sequelize(
  "alkemy_nayit_no_country",
  "alkemy_nayit_db",
  "nayitNoCountry",
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

export { db };
