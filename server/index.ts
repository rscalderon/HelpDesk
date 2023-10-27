import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import ticketRouter from './routers/ticketRouter';

dotenv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;

// init const app as express server
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets
// eslint-disable-next-line no-undef
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// Serve index.html
// eslint-disable-next-line no-undef
app.use('/', express.static(path.join(__dirname, '../src/index.html')));

// ticketRouter
app.use('/tickets', ticketRouter);

// Catch-all route
app.get('*', (req, res) => {
  res.sendStatus(404);
});

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
