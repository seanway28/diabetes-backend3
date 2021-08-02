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
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    port: process.env.DB_PORT,
  }
);

// const sequelize = new Sequelize(process.env.DB_URI)


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