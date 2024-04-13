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

app.use('/api/tickets', ticketRouter);

// Serve static assets
app.use(express.static(path.resolve('./dist')));

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
  app.use(
    RateLimit({
      windowMs: 1 * 60 * 1000, // 1 minute
      max: 20,
    })
  );
  // Catch-all route (frontend handles routing)
  app.get('*', (_req, res) =>
    res.status(200).sendFile(path.resolve('./dist/index.html'))
  );
}

// Catch-all route (frontend handles routing)
app.get('*', (_req, res) =>
  res.status(200).sendFile(path.resolve('./index.html'))
);

// Global error handler
app.use((err, _req, res, _next) => {
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
