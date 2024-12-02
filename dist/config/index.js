"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = config;
