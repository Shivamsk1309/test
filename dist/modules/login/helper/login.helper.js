"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoginHelper = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const commonUtils_1 = require("../../../utils/commonUtils/commonUtils");
const jwtUtils_1 = require("../../../utils/jwt/jwtUtils");
const checkLoginHelper = async ({ mobileNumber, password, email, }) => {
    const user = { email: '', password: '' };
    const { password: hashPassword, email: userEmail } = user;
    const isValidPassword = bcrypt_1.default.compareSync(password, hashPassword);
    if (!isValidPassword) {
        (0, commonUtils_1.throwValidationError)({
            message: 'Invalid Password',
        });
    }
    const token = (0, jwtUtils_1.createJwtToken)({ tokenParams: { email: userEmail } });
    return { authToken: token };
};
exports.checkLoginHelper = checkLoginHelper;
