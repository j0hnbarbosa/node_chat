module.exports = {
  host: "localhost",
  database: "postgres",
  username: "postgres",
  password: "postgres",
  dialect: "postgres",
  
  pool: {
    max: 5,
    min: 0,
    idle: 5000
  },
};
