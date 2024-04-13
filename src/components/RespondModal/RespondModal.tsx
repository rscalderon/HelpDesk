import './RespondModal.scss';

interface RespondModalProps {
  name: string;
  email: string;
  description: string;
  hideModal: () => void;
  showBanner: () => void;
}

const RespondModal = ({
  name,
  email,
  description,
  hideModal,
  showBanner,
}: RespondModalProps) => {
  return (
    <div id='modal-message'>
      <h2>Respond to helpdesk</h2>
      <p>
        Helpdesk from user {name} ({email}): {description}
      </p>
      <form
        id='createTicketForm'
        className='form'
        name='newTicket'
        method='POST'
        onSubmit={() =>
          console.log(
            `Would normally email to ${email} with subject line: HelpDeskTicket: ${description}`
          )
        }
      >
        <div className='input-and-label'>
          <label htmlFor='name'>Subject Line</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder={`Email subject line`}
            defaultValue={`Response to helpdesk ticket: ${
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
          <label htmlFor='description'>Response</label>
          <textarea
            id='description'
            name='description'
            placeholder='Enter your response here'
            required
          />
        </div>
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();

            hideModal();
            showBanner();
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default RespondModal;
