"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
;
const createConnection = (config) => {
    const databaseConfig = {
        user: config.user,
        password: config.password,
        host: config.host,
        port: config.port,
        database: config.database,
        ssl: {
            rejectUnauthorized: false,
        }
    };
    const client = new pg_1.Client(databaseConfig);
    client.connect()
        .then(() => console.log('Connected to PostgreSQL database'))
        .catch((err) => console.error('Connection error', err.stack));
};
exports.default = createConnection;
