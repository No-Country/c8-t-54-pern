import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config({path: './config.env'})

const db = new Sequelize ({
    host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})


module.exports = {db}
