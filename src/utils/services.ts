/**
 * ************************************
 *
 * @module  getTickets
 * @description Retrieves tickets from database
 * and returns a promise that resolves to an object
 * of ticket information
 *
 * ************************************
 */

export const getTickets = () => {
  return fetch('/api/tickets')
    .then((data) => data.json())
    .catch((e) =>
      console.error(
        `Would normally log to monitoring service: ${{
          error: `Error retrieving helpdesk tickets: ${e}`,
        }}`
      )
    );
};

/**
 * ************************************
 *
 * @module  postTicket
 * @param  {string} name Author name
 * @param  {string} email Author email
 * @param  {string} description Ticket description
 * @description Adds ticket to database and "sends notification email".
 * Returns a promise
 *
 * ************************************
 */

export const postTicket = (
  name: string,
  email: string,
  description: string
) => {
  return fetch('/api/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      description: description,
    }),
  })
    .then(() =>
      console.log(
        `Would normally send email here to administrator with copy to ticket author with: \n \n Title: 'New Helpdesk Ticket' \n \n Body: New helpdesk ticket from ${name} (${email}): \n \n ${description} \n \n You can respond directly to this email address or log on to the zealthy helpdesk portal to respond.`
      )
    )
    .catch((e) =>
      console.error(
        `Would normally log to monitoring service: ${{
          error: `Error creating helpdesk ticket: ${e}`,
        }}`
      )
    );
};

/**
 * ************************************
 *
 * @module  deleteTicket
 * @param  {string} _id helpdesk ticket database ID
 * @description Deletes ticket from database. Returns a promise
 *
 * ************************************
 */

export const deleteTicket = (_id: string) => {
  return fetch('/api/tickets/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id }),
  });
};

/**
 * ************************************
 *
 * @module  changeTicketStatus
 * @param  {string} _id helpdesk ticket database ID
 * @param  {string} status updated ticket status
 * @description Updates ticket from database. Returns a promise
 *
 * ************************************
 */

export const changeTicketStatus = (status: string, _id: string) => {
  return fetch('/api/tickets/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _id,
      status,
    }),
  });
};
