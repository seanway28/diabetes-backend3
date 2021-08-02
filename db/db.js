require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
        ssl: true
    },
    port: 5432,
    native: true
  }
);


async function testAuthentication() {
    try {
        await sequelize.authenticate();
        console.log('db connection established')
    } catch (error) {
        console.log('unable to connect to database: ', error);
    }
}

module.exports = {
    sequelize,
    testAuthentication
}