import { useEffect, useState } from 'react';

// components
import Ticket from '../components/Ticket';
import Loader from '../components/Loader';

interface t {
  name: string;
  email: string;
  description: string;
  status: string;
}

// The Dashboard container fetches tickets from the database and renders them
function Dashboard() {
  const [ticketArr, setTickets] = useState([]);
  // fetch tickets from backend
  const getTickets = () => {
    fetch('/api/tickets')
      // parse into JS from JSON
      .then((data) => data.json())
      // update state to incoming tickets
      .then((tickets) => {
        console.log(tickets);
        setTickets(tickets);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => getTickets(), []);
  // create ticket component for each ticket from database
  const ticketComponents: JSX.Element[] = ticketArr.map((t: t, i) => (
    <Ticket
      name={t.name}
      email={t.email}
      key={i}
      description={t.description}
      status={t.status}
    />
  ));

  return (
    <>
      <h1 className='tickets-title'>Dashboard</h1>
      <div className='tickets-container'>
        <div className='tickets-tiles'>
          {ticketComponents.length ? ticketComponents : <Loader />}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
