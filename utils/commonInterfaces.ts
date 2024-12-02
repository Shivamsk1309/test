import { Request } from 'express';

interface CustomRequest extends Request {
  email ?: string,
}

export {
  CustomRequest,
}