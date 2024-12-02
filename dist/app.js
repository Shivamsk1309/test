"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const config_1 = __importDefault(require("./config"));
const database_1 = __importDefault(require("./database"));
const authMiddleware_1 = require("./middleware/authMiddleware");
const responseHandler_1 = require("./utils/responseHandler/responseHandler");
const routes_1 = __importDefault(require("./routes"));
(0, database_1.default)(config_1.default.database);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use(body_parser_1.default.json({ limit: '5mb' }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/auth', authMiddleware_1.authMiddleware);
(0, routes_1.default)(app);
app.use('/', (req, res) => {
    (0, responseHandler_1.errorResponse)({
        res,
        code: responseHandler_1.STATUS_CODES.STATUS_CODE_DATA_NOT_FOUND,
        message: 'Route not found',
    });
});
const { port } = config_1.default;
try {
    app.listen(port, () => {
        console.log(`server starting on port ${port}`);
    });
}
catch (err) {
    console.log(`Error in starting the server ${err}`);
    process.exit(1);
}
exports.default = app;
