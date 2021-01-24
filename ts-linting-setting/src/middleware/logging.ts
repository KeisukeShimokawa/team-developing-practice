import { Request, Response, NextFunction } from 'express';

const loggingHandler = (option: string) => {
  console.log(option);

  return (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers);
    next();
  };
};

export default loggingHandler;
