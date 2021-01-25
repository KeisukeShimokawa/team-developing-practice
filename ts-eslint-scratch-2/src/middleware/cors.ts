import { Request, Response, NextFunction } from 'express';

const allowCrossOrigin = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PORT');

  // preflight
  if (req.method === 'OPTIONS') {
    res.send(204);
  } else {
    next();
  }
};

export default allowCrossOrigin;
