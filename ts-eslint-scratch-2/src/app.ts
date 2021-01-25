import express from 'express';
import errorHandler from './middleware/error';
import loggingHandler from './middleware/logging';
import allowCrossOrigin from './middleware/cors';

const app = express();

app.use(loggingHandler('default'));
app.use(allowCrossOrigin);
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`listening on port`);
});
