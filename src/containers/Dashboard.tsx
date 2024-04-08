import { useEffect, useState } from 'react';

import Ticket from '../components/Ticket';
import Loader from '../components/Loader';

interface TicketRecords {
  name: string;
  email: string;
  description: string;
  status: string;
  created_at: Date;
  _id: string;
}

function Dashboard() {
  const [ticketArr, setTickets] = useState([]);
  const getTickets = () => {
    fetch('/api/tickets')
      .then((data) => data.json())
      .then((tickets) => setTickets(tickets))
      .catch((err) => console.error(err));
  };
  useEffect(() => getTickets(), []);
  // create ticket component for each ticket from database
  const ticketComponents = ticketArr.map((t: TicketRecords, i) => (
    <section key={i}>
      <Ticket
        name={t.name}
        created_at={t.created_at}
        id={t._id}
        email={t.email}
        description={t.description}
        status={t.status}
        getTickets={getTickets}
      />
      <br />
    </section>
  ));

  return (
    <>
      <h2 className='tickets-title'> Admin Dashboard </h2>
      <div className='tickets-container'>
        <div className='tickets-tiles'>
          {ticketComponents ? (
            ticketComponents.length > 0 ? (
              ticketComponents
            ) : (
              <p>No HelpDesk tickets yet.</p>
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
