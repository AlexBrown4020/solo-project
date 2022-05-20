require("dotenv").config({path: "./.env.local"});
  

  /**
   * @type { Object.<string, import("knex").Knex.Config> }
   */
module.exports = {
    client: "pg",
    connection: process.env.DATABASE_URL || 
      {
        host: process.env.DB_HOST || "127.0.0.1",
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
    searchPath: "public",
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
};