import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  // Ausência do token
  if (!authorization) {
    return res.status(401).json({
      error: 'Falha na autenticação, token não informado.',
    });
  }

  // Desestruturação de vetor (Bearer, ...token)
  const [, token] = authorization.split(' ');

  try {

    const { id } = await promisify(jwt.verify)(token, authConfig.secret);
 
    req.userId = id;
 
  } catch (error) {
    return res.status(401).json({
      error: 'Falha na autenticação, token inválido!',
    });
  }
  return next();
};