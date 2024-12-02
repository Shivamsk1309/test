"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const createJwtToken = ({ tokenParams }) => {
    const options = {};
    const { jwt: { secret: jwtSecret } } = config_1.default;
    const token = jsonwebtoken_1.default.sign(tokenParams, jwtSecret, options);
    return token;
};
exports.createJwtToken = createJwtToken;
