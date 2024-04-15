import Ticket from '../database/TicketModel';

const ticketController = {
  // retrieve tickets from db
  getTickets: async (req, res, next) => {
    try {
      res.locals.tickets = await Ticket.find({});
    } catch (error) {
      return next({
        log: `Error occured in ticketController.getTickets, error ${error}`,
        status: 500,
        message: {
          err: 'an error occured when fetching tickets',
        },
      });
    }
    return next();
  },
  // create new ticket in db
  addTicket: async (req, res, next) => {
    const { name, email, description } = req.body;

    try {
      res.locals.userID = await Ticket.create({
        name: name,
        email: email,
        description: description,
        status: 'new',
      });
    } catch (error) {
      return next({
        log: `Error occured in ticketController.addTicket, error ${error}`,
        status: 500,
        message: {
          err: 'an error occured when adding the ticket',
        },
      });
    }
    return next();
  },
  // update ticket status
  updateTicket: async (req, res, next) => {
    const { _id, status } = req.body;
    try {
      res.locals.id = await Ticket.updateOne({ _id }, { status });
    } catch (error) {
      return next({
        log: `Error occured in ticketController.updateTicket, error ${error}`,
        status: 500,
        message: {
          err: 'an error occured when updating the ticket',
        },
      });
    }
    return next();
  },
  deleteTicket: async (req, res, next) => {
    const { _id } = req.body;
    try {
      res.locals.tickets = await Ticket.deleteOne({ _id });
    } catch (error) {
      return next({
        log: `Error occured in ticketController.deleteTicket, error ${error}`,
        status: 500,
        message: {
          err: 'an error occured when deleting this ticket',
        },
      });
    }
    return next();
  },
};

export default ticketController;
