"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const responseHandler_1 = require("../utils/responseHandler/responseHandler");
const commonUtils_1 = require("../utils/commonUtils/commonUtils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const validateTokenFromDb = async ({ email, token }) => {
    const userData = { token: '' };
    // get token with email TODO
    if (!userData || userData.token !== token) {
        (0, commonUtils_1.throwValidationError)({
            message: 'Unauthorized Access',
            code: responseHandler_1.STATUS_CODES.STATUS_CODE_UNAUTHORIZED,
        });
    }
};
const authMiddleware = async (req, res, next) => {
    try {
        const { authorization: token = '' } = req.headers;
        if (!token) {
            (0, commonUtils_1.throwValidationError)({
                message: 'Unauthorized Access',
                code: responseHandler_1.STATUS_CODES.STATUS_CODE_UNAUTHORIZED,
            });
        }
        const decodedData = jsonwebtoken_1.default.verify(token, config_1.default.jwt.secret, {
            ignoreExpiration: true,
        });
        const { email } = decodedData;
        if (!email) {
            (0, commonUtils_1.throwValidationError)({
                message: 'Unauthorized Access',
                code: responseHandler_1.STATUS_CODES.STATUS_CODE_UNAUTHORIZED,
            });
        }
        await validateTokenFromDb({ email, token });
        req.email = email;
        return next();
    }
    catch (error) {
        (0, responseHandler_1.errorResponse)({
            res,
            error,
        });
    }
};
exports.authMiddleware = authMiddleware;
