//this file is responsible for providing the connection to server through sequelize

//importing sequelize
const Sequelize = require('sequelize')

//create connection to db
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

//export model
module.exports = sequelize;