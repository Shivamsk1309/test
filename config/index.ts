const config = {
  port: 6001,
  database: {
    user: process.env.databaseUserName,
    password: process.env.databasePassword,
    port: Number(process.env.databasePort),
    host: process.env.databaseHost,
    database: process.env.databaseName,
  },
  jwt: {
    secret: String(process.env.jwtSecret)
  }
};

export default config;