import express, { Request, Response } from 'express';
import { validateLoginParams } from '../middleware/loginSignUp.middleware';
import { checkLogin } from '../controller/loginSignUp.controller';


const routes = express();

routes.post('/', validateLoginParams, checkLogin);

export default routes;