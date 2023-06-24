import { Sequelize } from "sequelize";

const db = Sequelize('cruddb', 'root', '', {
    host : 'localhost',
    dialect: 'mysql'
});

export default db;