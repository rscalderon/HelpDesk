import { Router } from 'express';
import ticketController from '../controllers/ticketController';

// localhost:3001/api/tickets
const ticketRouter = Router();

ticketRouter.get('/', ticketController.getTickets, (req, res) =>
  res.status(200).send(res.locals.tickets)
);

ticketRouter.post('/', ticketController.addTicket, (req, res) =>
  res.status(200).send(res.locals.newTicket)
);
ticketRouter.patch('/', ticketController.updateTicket, (req, res) =>
  res.status(200).send(res.locals.newTicket)
);
ticketRouter.delete('/', ticketController.deleteTicket, (req, res) =>
  res.status(200).send(res.locals.newTicket)
);

export default ticketRouter;
