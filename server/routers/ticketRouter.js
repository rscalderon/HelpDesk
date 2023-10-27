import { Router } from 'express';
import ticketController from '../controllers/ticketController';

const ticketRouter = Router();

ticketRouter.get('/', ticketController.picOfDay, (req, res) => {
  return res.status(200).json(res.locals.returnObject);
});

ticketRouter.get('/search', ticketController.getData, (req, res) => {
  console.log('inside the ticketRouter');
  return res.status(200).json(res.locals.resultsObject);
});
// localhost:3000/api/search?=

export default ticketRouter;
