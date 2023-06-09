const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "admin",
  database: "digi_power",
});

client
  .connect()
  .then(() => {
    console.log("Successfully connected to Database");
  })
  .catch((error) => {
    console.log("Database connection failed. Exiting now...");
    console.error(error);
    process.exit(1);
});

module.exports = client;
