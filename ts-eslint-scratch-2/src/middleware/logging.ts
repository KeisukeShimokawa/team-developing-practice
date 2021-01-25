import { Request, Response, NextFunction, RequestHandler } from 'express';

const loggingHandler = (option: string): RequestHandler => {
  console.log(`setting: ${option}`);

  return (req: Request, res: Response, next: NextFunction): void => {
    console.log(res.header);
    next();
  };
};

export default loggingHandler;
