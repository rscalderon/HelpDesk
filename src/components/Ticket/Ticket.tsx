import { ChangeEvent, useState } from 'react';

import Modal from '../Modal/Modal';
import Banner from '../Banner/Banner';
import RespondModal from '../RespondModal';

import { changeTicketStatus, deleteTicket } from '../../utils/services';

import './Ticket.scss';

interface TicketProps {
  name: string;
  email: string;
  description: string;
  status: string;
  created_at: Date;
  id: string;
  getTicketsAfterDelete: () => void;
}

function Ticket({
  name,
  email,
  description,
  status,
  created_at,
  id,
  getTicketsAfterDelete,
}: TicketProps): JSX.Element {
  const [displayedStatus, setStatus] = useState(status);
  const [showRespondModal, setRespondModal] = useState(false);
  const [showBanner, setBanner] = useState(false);

  const changeTicketDropdownStatus = (e: ChangeEvent) => {
    const newStatus = (e.target as HTMLInputElement).value;
    changeTicketStatus(newStatus, id).then(() => setStatus(newStatus));
  };

  return (
    <div className='ticket'>
      {showRespondModal && (
        <Modal hideModal={() => setRespondModal(false)}>
          <RespondModal
            name={name}
            email={email}
            description={description}
            created_at={created_at.toString().substring(0, 10)}
            hideModal={() => setRespondModal(false)}
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
      <div className='ticket-top-labels'>
        <p className='ticket-label'>Name: {name}</p>
        <p className='ticket-label'>Email: {email}</p>
        <p className='ticket-label'>
          Date created: {created_at.toString().substring(0, 10)}
        </p>
        <form className='ticket-label'>
          <label htmlFor='status'>Status: </label>
          <select
            name='status'
            id='status'
            value={displayedStatus}
            onChange={changeTicketDropdownStatus}
          >
            <option value='new'>New</option>
            <option value='in progress'>In progress</option>
            <option value='resolved'>Resolved</option>
          </select>
        </form>
      </div>
      <details>
        <summary> Description (click to expand):</summary>
        <p>{description}</p>
      </details>
      <br />
      <button className='respond-button' onClick={() => setRespondModal(true)}>
        Respond
      </button>
      <button
        className='delete-button'
        onClick={() => deleteTicket(id).then(getTicketsAfterDelete)}
      >
        Delete
      </button>
    </div>
  );
}

export default Ticket;
