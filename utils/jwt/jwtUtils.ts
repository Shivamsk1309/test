import jwt from 'jsonwebtoken';
import config from '../../config';

interface createJwtTokenParams {
  tokenParams: {
    email: string,
  }
}

const createJwtToken = ({ tokenParams }: createJwtTokenParams) => {
  const options = {};
  const { jwt: { secret: jwtSecret } } = config;
  const token = jwt.sign(
    tokenParams,
    jwtSecret,
    options
  );
  return token;
}

export {
  createJwtToken,
}