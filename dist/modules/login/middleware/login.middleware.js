"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginParams = void 0;
const responseHandler_1 = require("../../../utils/responseHandler/responseHandler");
const commonUtils_1 = require("../../../utils/commonUtils/commonUtils");
const validateLoginParams = (req, res, next) => {
    try {
        const { email, mobileNumber, password, } = req.body;
        if (!email && !mobileNumber) {
            (0, commonUtils_1.throwValidationError)({ message: 'Enter atleast Email or Number' });
        }
        if (!password) {
            (0, commonUtils_1.throwValidationError)({ message: 'Missing Password' });
        }
        if (email && !(0, commonUtils_1.isValidEmail)(email)) {
            (0, commonUtils_1.throwValidationError)({ message: 'Invalid Email' });
        }
        if (mobileNumber && !(0, commonUtils_1.isValidMobileNumber)(mobileNumber)) {
            (0, commonUtils_1.throwValidationError)({ message: 'Invalid MobileNumber' });
        }
        return next();
    }
    catch (error) {
        (0, responseHandler_1.errorResponse)({
            res,
            error,
        });
    }
};
exports.validateLoginParams = validateLoginParams;
