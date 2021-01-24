import express, { NextFunction, Request, Response } from 'express';

interface Todo {
  items: {
    id: string;
    text: string;
  }[];
}

const PORT = process.env.PORT || 3000;

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('sample middleware');
  next();
});

app.get('/', (req: Request, res: Response) => {
  console.log(req.headers);
  res.status(200).json({
    sample: 'OK',
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
