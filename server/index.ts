import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import ticketRouter from './routers/ticketRouter';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/tickets', ticketRouter);

// Serve static assets
app.use('/dist', express.static(path.resolve('../dist')));

// // Serve index.html
app.use('/', express.static(path.join('../index.html')));

// Catch-all route
app.get('*', (req, res) => res.sendStatus(404));

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
