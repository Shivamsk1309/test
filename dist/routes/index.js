"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_routes_1 = __importDefault(require("../modules/login/routes/login.routes"));
const router = (app) => {
    app.use('/login', login_routes_1.default);
};
exports.default = router;
