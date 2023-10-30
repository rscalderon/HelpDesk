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
}

function Ticket(props: TicketProps): JSX.Element {
  const [status, setStatus] = useState(props.status);
  // respond to ticket
  const ticketRespond = () =>
    console.log(
      'render popup where administrator can write email and send to listed email address'
    );
  // change ticket status
  const changeStatus = (e: ChangeEvent) => {
    fetch('/api/tickets', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
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
      <button onClick={() => ticketRespond()}>Respond</button> {'   '}
    </section>
  );
}

export default Ticket;
