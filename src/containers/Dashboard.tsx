import { useState } from 'react';

// components
import Ticket from '../components/Ticket';
import Loader from '../components/Loader';

// declare ticket interface

// The Dashboard container fetches tickets from the database and renders them
function Dashboard() {
  const [ticketArr, setTickets] = useState([]);
  // fetch tickets from backend
  const getTickets = () => {
    fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      // parse into JS from JSON
      .then((res) => res.json())
      // update state to incoming tickets
      .then((tickets) => {
        console.log(tickets);
        setTickets(tickets);
      })
      .catch((err) => console.error(err));
  };
  try {
    getTickets();
  } catch (e) {
    console.error(e);
  }
  // create ticket component for each ticket from database
  const ticketComponents = ticketArr.map(() => <Ticket />);

  return (
    <>
      <h1 className='tickets-title'>Dashboard</h1>
      <div className='tickets-container'>
        <div className='tickets-tiles'>
          {!ticketComponents.length ? ticketComponents : <Loader />}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
