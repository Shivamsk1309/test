import { Response, NextFunction } from 'express';
import { errorResponse, STATUS_CODES } from '../utils/responseHandler/responseHandler';
import { throwValidationError } from '../utils/commonUtils/commonUtils';
import jwt from 'jsonwebtoken';
import config from '../config';
import { CustomRequest } from '../utils/commonInterfaces';

const validateTokenFromDb = async ({ userId, token }: { userId: string, token: string }) => {
  const userData = { token: '' };
  // get token with userId TODO
  if (!userData || userData.token !== token) {
    throwValidationError({
      message: 'Unauthorized Access',
      code: STATUS_CODES.STATUS_CODE_UNAUTHORIZED,
    });
  }
}

const authMiddleware = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const { authorization: token = '' } = req.headers;
    if (!token) {
      throwValidationError({
        message: 'Unauthorized Access',
        code: STATUS_CODES.STATUS_CODE_UNAUTHORIZED,
      });
    }
    const decodedData: any = jwt.verify(token, config.jwt.secret, {
      ignoreExpiration: true,
    });
    const { userId } = decodedData;
    if (!userId) {
      throwValidationError({
        message: 'Unauthorized Access',
        code: STATUS_CODES.STATUS_CODE_UNAUTHORIZED,
      });
    }
    await validateTokenFromDb({ userId, token });
    req.userId = userId;
    return next();
  } catch (error) {
    errorResponse({
      res,
      error,
    });
  }
};

export {
  authMiddleware,
};
