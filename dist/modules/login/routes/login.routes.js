"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_middleware_1 = require("../middleware/login.middleware");
const login_controller_1 = require("../controller/login.controller");
const routes = (0, express_1.default)();
routes.post('/', login_middleware_1.validateLoginParams, login_controller_1.checkLogin);
exports.default = routes;
