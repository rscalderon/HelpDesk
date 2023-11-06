import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';

import ticketRouter from './server/routers/ticketRouter';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tickets', ticketRouter);

if (process.env.NODE_ENV === 'production') {
  // use helmet for protection
  app.use(helmet());
  // rate limiter
  app.use(
    RateLimit({
      windowMs: 1 * 60 * 1000, // 1 minute
      max: 20,
    })
  );
}
app.use(express.static(path.resolve('./dist')));

// console.log(process.env.NODE_ENV);

// // Serve static assets
// app.use(express.static(path.resolve('../dist/assets')));

// Serve index.html
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve('./dist/index.html'))
);

// Catch-all route
app.get('*', (req, res) =>
  res.status(404).send('This page could not be found')
);

// Global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
