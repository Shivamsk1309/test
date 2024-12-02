"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = exports.isValidMobileNumber = exports.throwValidationError = void 0;
const responseHandler_1 = require("../responseHandler/responseHandler");
const throwValidationError = ({ message, code = responseHandler_1.STATUS_CODES.STATUS_CODE_VALIDATION_FAILED }) => {
    throw {
        code,
        message,
    };
};
exports.throwValidationError = throwValidationError;
const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};
exports.isValidEmail = isValidEmail;
const isValidMobileNumber = (mobileNumber) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobileNumber);
};
exports.isValidMobileNumber = isValidMobileNumber;
