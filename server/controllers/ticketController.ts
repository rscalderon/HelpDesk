import Ticket from '../database/TicketModel';

const ticketController = {
  // retrieve tickets from db
  getTickets: async (req, res, next) => {
    try {
      res.locals.tickets = await Ticket.find({});
    } catch (error) {
      return next({
        log: `Error occured in ticketController.getTickets, error ${error}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured when fetching tickets', // message to the user
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
        log: `Error occured in ticketController.addTicket, error ${error}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured when adding the ticket', // message to the user
        },
      });
    }
    return next();
  },
};

export default ticketController;
