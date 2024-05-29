const DB = process.env.DATABASE_NAME;
const PASSWORD = process.env.DATABASE_PASSWORD;
const USER = process.env.DATABASE_USER;
const HOST = process.env.DATABASE_HOST;
const PORT = process.env.DATABASE_PORT;
// console.log(HOST);
module.exports = {
  HOST,

  USER,
  PASSWORD,
  DB,
  PORT,

  dialect: "mysql",

  pool: {
    max: 10,
    min: 2,
    acquire: 30000,
    idle: 10000,
  },
};
