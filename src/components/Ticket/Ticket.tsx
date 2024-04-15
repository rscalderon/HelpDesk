import { ChangeEvent, useState } from 'react';
import './Ticket.scss';

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

  const ticketRespond = () => {
    window.open(
      `mailto:${props.email}?subject=HelpDeskTicket: ${props.description}`
    );
    console.log(
      'Would normally render modal with input text boxes for title and body that can be sent directly as an email'
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

  const changeTicketStatus = (e: ChangeEvent) => {
    const status = (e.target as HTMLInputElement).value;

    fetch('/api/tickets/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: props.id,
        status,
      }),
    });

    setStatus(status);
  };
  return (
    <div className='ticket'>
      <div className='ticketTopLabels'>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <form>
          <label htmlFor='status'>Status: </label>
          <select
            name='status'
            id='status'
            value={status}
            onChange={changeTicketStatus}
          >
            <option value='new'>New</option>
            <option value='in progress'>In progress</option>
            <option value='resolved'>Resolved</option>
          </select>
        </form>
      </div>
      <br />
      <details>
        <summary> Description (click to expand):</summary>
        <p>{props.description}</p>
      </details>
      <br />
      <button onClick={ticketRespond}>Respond</button>
      <button onClick={deleteTicket}>Delete</button>
    </div>
  );
}

export default Ticket;
