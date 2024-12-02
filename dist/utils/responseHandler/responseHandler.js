"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS_CODES = exports.errorResponse = exports.successResponse = void 0;
const { NODE_ENV } = process.env;
const STATUS_CODES = {
    STATUS_CODE_INVALID_PROMPT: 113,
    STATUS_CODE_SUCCESS: 200,
    STATUS_CODE_SUCCESS_CREATED: 201,
    STATUS_CODE_INVALID_FORMAT: 400,
    STATUS_CODE_UNAUTHORIZED: 401,
    STATUS_CODE_FORBIDDEN: 403,
    STATUS_CODE_DATA_NOT_FOUND: 404,
    STATUS_CODE_FAILURE: 500,
    STATUS_CODE_PRECONDITION_FAILED: 412,
    STATUS_CODE_DATA_SOFT_DELETE: 421,
    STATUS_CODE_VALIDATION_FAILED: 422,
    STATUS_CODE_NOT_ACCEPTABLE: 406,
};
exports.STATUS_CODES = STATUS_CODES;
;
const successResponse = ({ res, data = {}, code = 200, message = '', }) => res.status(code).json({
    data,
    message,
});
exports.successResponse = successResponse;
;
const errorResponse = ({ res, data = {}, code = STATUS_CODES.STATUS_CODE_FAILURE, message = 'Internal server error', error = null, }) => {
    code = (error && ((error.error && error.error.code) || error.statusCode || error.code)) || code;
    message = (error && error.error && error.error.message) || (error && error.message) || message;
    data = (error && error.data) || data;
    return res.status(code).json({
        data,
        message,
    });
};
exports.errorResponse = errorResponse;
