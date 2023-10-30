import { Router } from 'express';
import ticketController from '../controllers/ticketController';

const ticketRouter = Router();

ticketRouter.get('/', ticketController.getTickets, (req, res) =>
  res.status(200).send(res.locals.tickets)
);

ticketRouter.post('/', ticketController.addTicket, (req, res) =>
  res.status(200).send(res.locals.newTicket)
);
ticketRouter.post('/update', ticketController.updateTicket, (req, res) =>
  res.status(200).send(res.locals.newTicket)
);
ticketRouter.post('/delete', ticketController.deleteTicket, (req, res) =>
  res.status(200).send(res.locals.newTicket)
);

export default ticketRouter;
