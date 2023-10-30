import { ChangeEvent, useState } from 'react';
import './Ticket.scss';

// declare ticket interface
interface TicketProps {
  name: string;
  email: string;
  description: string;
  status: string;
  created_at: Date;
  id: string;
  getTickets: () => void;
}

function Ticket(props: TicketProps): JSX.Element {
  const [status, setStatus] = useState(props.status);
  // respond to ticket
  const ticketRespond = () => {
    window.open(
      `mailto:${props.email}?subject=HelpDeskTicket:${props.description}`
    );
    console.log(
      'Would normally render popup and send email with input text as email body'
    );
  };
  const deleteTicket = () => {
    fetch('/api/tickets/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: props.id }),
    });
    props.getTickets();
  };
  // change ticket status
  const changeStatus = (e: ChangeEvent) => {
    fetch('/api/tickets/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: props.id, status: e.target.value }),
    });
    setStatus(e.target.value);
  };
  return (
    <section className='ticket'>
      <article>
        Name: {props.name} Email: {props.email}
        <form>
          <label htmlFor='status'> Status: </label>
          <select
            name='status'
            id='status'
            value={status}
            onChange={changeStatus}
          >
            <option value='new'>New</option>
            <option value='in progress'>In progress</option>
            <option value='resolved'>Resolved</option>
          </select>
        </form>
      </article>
      <details>
        <summary>Description:</summary>
        <p>{props.description}</p>
      </details>
      <button onClick={ticketRespond}>Respond</button>
      <button onClick={deleteTicket}>Delete</button>
    </section>
  );
}

export default Ticket;
