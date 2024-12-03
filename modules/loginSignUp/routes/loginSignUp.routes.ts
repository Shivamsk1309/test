import express, { Request, Response } from 'express';
import { validateLoginParams } from '../middleware/loginSignUp.middleware';
import { checkLogin, sendVerficationCode } from '../controller/loginSignUp.controller';


const routes = express();

routes.post('/', validateLoginParams, checkLogin);
routes.post('/send-code', sendVerficationCode);

export default routes;