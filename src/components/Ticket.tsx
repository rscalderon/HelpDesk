import './Ticket.scss';

// declare ticket interface
interface TicketProps {
  name: string;
  email: string;
  description: string;
  status: string;
  key: number;
}

function Ticket(props: TicketProps): JSX.Element {
  // respond to ticket
  const ticketRespond = () => {};
  return (
    <section className='ticket'>
      <>
        <p>
          Name: {props.name} Email: {props.email}
        </p>
        <p>Status: {props.status}</p>
      </>
      <p>Description: {props.description}</p>
      <button onClick={() => ticketRespond()}>Respond</button>
    </section>
  );
}

export default Ticket;
