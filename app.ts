import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import config from "./config";
import { createDatabaseConnection } from "./database/config/database";
import { authMiddleware } from "./middleware/authMiddleware";
import {
  errorResponse,
  STATUS_CODES,
} from "./utils/responseHandler/responseHandler";
import router from "./routes";

createDatabaseConnection();
const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", authMiddleware);

router(app);

app.use("/", (req, res) => {
  errorResponse({
    res,
    code: STATUS_CODES.STATUS_CODE_DATA_NOT_FOUND,
    message: "Route not found",
  });
});

const { port } = config;

try {
  app.listen(port, () => {
    console.log(`server starting on port ${port}`);
  });
} catch (err) {
  console.log(`Error in starting the server ${err}`);
  process.exit(1);
}

export default app;
