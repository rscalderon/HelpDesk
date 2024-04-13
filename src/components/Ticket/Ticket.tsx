import { ChangeEvent, useState } from 'react';

import './Ticket.scss';

import Modal from '../Modal/Modal';

import Banner from '../Banner/Banner';
import RespondModal from '../RespondModal/RespondModal';

interface TicketProps {
  name: string;
  email: string;
  description: string;
  status: string;
  created_at: Date;
  id: string;
  getTicketsAfterDelete: () => void;
}

function Ticket(props: TicketProps): JSX.Element {
  const [status, setStatus] = useState(props.status);
  const [showModal, setModal] = useState(false);
  const [showBanner, setBanner] = useState(false);

  const respondTicket = () => setModal(true);

  const deleteTicket = async () => {
    await fetch('/api/tickets/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: props.id }),
    });
    props.getTicketsAfterDelete();
  };

  const changeTicketStatus = (e: ChangeEvent) => {
    const newStatus = (e.target as HTMLInputElement).value;

    fetch('/api/tickets/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: props.id,
        newStatus,
      }),
    });

    setStatus(newStatus);
  };

  return (
    <div className='ticket'>
      {showModal && (
        <Modal hideModal={() => setModal(false)}>
          <RespondModal
            name={props.name}
            email={props.email}
            description={props.description}
            hideModal={() => setModal(false)}
            showBanner={() => {
              setBanner(true);
              setTimeout(() => setBanner(false), 5000);
            }}
          />
        </Modal>
      )}
      {showBanner && (
        <Banner
          closeBanner={() => setBanner(false)}
          message='Your response has been sent!'
        />
      )}
      <div className='ticketTopLabels'>
        <p className='ticket-label'>Name: {props.name}</p>
        <p className='ticket-label'>Email: {props.email}</p>
        <form className='ticket-label'>
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
      <details>
        <summary> Description (click to expand):</summary>
        <p>{props.description}</p>
      </details>
      <br />
      <button className='respond-button' onClick={respondTicket}>
        Respond
      </button>
      <button className='delete-button' onClick={deleteTicket}>
        Delete
      </button>
    </div>
  );
}

export default Ticket;
