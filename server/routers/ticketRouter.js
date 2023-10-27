import { Router } from 'express';
import ticketController from '../controllers/ticketController';

// localhost:3001/api/tickets
const ticketRouter = Router();

ticketRouter.get('/', ticketController.getTickets, (req, res) => {
  return res.status(200).json();
});

ticketRouter.post('/', ticketController.addTicket, (req, res) => {
  console.log('inside the ticketRouter');
  return res.status(200).json();
});

export default ticketRouter;
