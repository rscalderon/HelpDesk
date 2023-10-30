import { Router } from 'express';
import ticketController from '../controllers/ticketController';

// localhost:3001/api/tickets
const ticketRouter = Router();

ticketRouter.get('/', ticketController.getTickets, (req, res) => {
  return res.status(200).send(res.locals.tickets);
});

ticketRouter.post('/', ticketController.addTicket, (req, res) => {
  // console.log('sending response to POST request');
  return res.status(200).send(res.locals.newTicket);
});

export default ticketRouter;