import './RespondModal.scss';

interface RespondModalProps {
  name: string;
  email: string;
  description: string;
  created_at: string;
  hideModal: () => void;
  showBanner: () => void;
}

const RespondModal = ({
  name,
  email,
  description,
  created_at,
  hideModal,
  showBanner,
}: RespondModalProps) => {
  return (
    <div id='modal-message'>
      <h2>Respond to helpdesk</h2>
      <p>
        Helpdesk from user {name} ({email}):{' '}
        {description.length > 50
          ? description.slice(0, 100) + '...'
          : description}
      </p>
      <form
        className='form'
        name='ticketRespond'
        onSubmit={(e) => {
          e.preventDefault();
          hideModal();
          showBanner();
          console.log(
            `Would normally send email to ${email} and copy admin with default subject line (user can customize in modal): Response to helpdesk ticket created at ${created_at}: ${
              description.length > 20
                ? description.slice(0, 10) + '...'
                : description
            }`
          );
        }}
      >
        <div className='input-and-label'>
          <label htmlFor='subject'>Subject Line</label>
          <input
            type='text'
            id='subject'
            name='subject'
            placeholder={`Email subject line`}
            defaultValue={`Response to helpdesk ticket created at ${created_at}: ${
              description.length > 20
                ? description.slice(0, 10) + '...'
                : description
            }`}
            autoFocus
            required
            autoComplete='on'
          />
        </div>
        <div className='input-and-label'>
          <label htmlFor='response'>Response</label>
          <textarea
            id='response'
            name='response'
            placeholder='Enter your response here'
            required
          />
        </div>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default RespondModal;
