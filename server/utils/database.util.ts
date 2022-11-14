import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
import {Database} from '../interfaces/database.interface'

dotenv.config({path: '.config/env'})

const db = new Sequelize ({
    host: 'localhost',
    port: 4321,
    dialect: 'postgres',
    logging: false,
    database: 'c8-54-pern',
    username: 'postgres',
    password: 'topaarna'
})


module.exports = {db}