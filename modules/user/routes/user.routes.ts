import express, { Request, Response } from 'express';
import { } from '../middleware/user.middleware';
import { getUserDetails } from '../controller/user.controller';


const routes = express();

routes.get('/', getUserDetails);

routes.post('/', createUser);

export default routes;