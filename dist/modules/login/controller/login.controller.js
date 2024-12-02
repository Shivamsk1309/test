"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = void 0;
const responseHandler_1 = require("../../../utils/responseHandler/responseHandler");
const login_helper_1 = require("../helper/login.helper");
const checkLogin = async (req, res) => {
    try {
        const { email, password, mobileNumber } = req.body;
        const data = await (0, login_helper_1.checkLoginHelper)({
            email, password, mobileNumber,
        });
        (0, responseHandler_1.successResponse)({
            res,
            data,
            message: 'Logged in Successfully',
        });
    }
    catch (error) {
        (0, responseHandler_1.errorResponse)({
            error,
            res,
        });
    }
};
exports.checkLogin = checkLogin;
