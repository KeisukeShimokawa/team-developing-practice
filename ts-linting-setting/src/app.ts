import express from 'express';
import errorHandler from './middleware/error';
import loggingHandler from './middleware/logging';

const app = express();

app.use(loggingHandler('default'));

app.use(errorHandler);

app.listen(3000, () => {
  console.log('listening');
});
