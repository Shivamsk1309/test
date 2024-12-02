import express, { Request, Response } from 'express';
import { validateLoginParams } from '../middleware/login.middleware';
import { checkLogin } from '../controller/login.controller';


const routes = express();

routes.post('/', validateLoginParams, checkLogin);

export default routes;