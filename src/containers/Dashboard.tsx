import { useEffect, useState } from 'react';

import Ticket from '../components/Ticket';
import Loader from '../components/Loader';
import { ErrorBoundary } from 'react-error-boundary';

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
      <ErrorBoundary
        fallback={<p>Oops! There was an error loading this ticket.</p>}
        onError={(e) =>
          console.error(
            'This would normally log the error to an external service as opposed to on the browser',
            { error: e }
          )
        }
      >
        <Ticket
          name={t.name}
          created_at={t.created_at}
          id={t._id}
          email={t.email}
          description={t.description}
          status={t.status}
          getTickets={getTickets}
        />
      </ErrorBoundary>

      <br />
    </section>
  ));

  return (
    <>
      <h2 className='tickets-title'> Admin Dashboard </h2>
      <div className='tickets-container'>
        <div className='tickets-tiles'>
          <ErrorBoundary
            fallback={
              <p>Oops! There was an error loading the helpdesk tickets.</p>
            }
            onError={(e) =>
              console.error(
                'This would normally log the error to an external service as opposed to on the browser',
                { error: e }
              )
            }
          >
            {ticketComponents ? (
              ticketComponents.length > 0 ? (
                ticketComponents
              ) : (
                <p>No HelpDesk tickets yet.</p>
              )
            ) : (
              <Loader />
            )}
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
