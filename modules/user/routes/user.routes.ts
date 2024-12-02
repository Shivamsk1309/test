import express, { Request, Response } from 'express';
import { } from '../middleware/user.middleware';
import {
  getUserDetails,
  updateUserDetails,
} from '../controller/user.controller';


const routes = express();

routes.get('/', getUserDetails);
routes.patch('/', updateUserDetails);

export default routes;