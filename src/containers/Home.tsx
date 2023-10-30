// assets
import { FormEvent } from 'react';
import zealthyLogo from '../assets/ZealthyLogo2.jpeg';

interface TicketFormOutput extends HTMLCollectionOf<HTMLFormElement> {
  newTicket: {
    name: { value: string };
    email: { value: string };
    description: { value: string };
  };
}

// Home page container
const Home = () => {
  // request backend to create new ticket based on form inputs
  const createTicket = (e: FormEvent) => {
    // prevent redirect and page refresh
    e.preventDefault();
    const formInfo = (document.forms as TicketFormOutput).newTicket;
    // extract form information
    const name = formInfo.name.value;
    const email = formInfo.email.value;
    const description = formInfo.description.value;
    // send request to backend
    fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        description: description,
      }),
    })
      .then(() =>
        alert(
          'Your ticket has been received. Thank you for using the Zealthy Helpdesk'
        )
      )
      .catch((e) =>
        console.error(
          `Error creating helpdesk ticket:${e} Please try again later`
        )
      );
  };

  return (
    <div className='home'>
      <br />
      <p>
        Thank you for using the Zealthy HelpDesk! Please fill out the form
        below:
      </p>
      <br />
      <>
        <form
          autoComplete='off'
          name='newTicket'
          method='POST'
          onSubmit={(e) => createTicket(e)}
        >
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='nameInput'
            name='name'
            placeholder='Bruce Wayne'
            autoFocus
            required
          />
          <br /> <br />
          <label htmlFor='email'> Email</label>
          <input
            type='email'
            id='emailInput'
            name='email'
            placeholder='Iam@batman.com'
            required
          />
          <br />
          <br />
          <label htmlFor='description'>Description</label>
          <br />
          <input
            type='text'
            id='descriptionInput'
            name='description'
            placeholder='Describe the problem (the more details you provide, the better we can assist you!)'
            required
          />
          <br />
          <input type='submit' name='submit' />
        </form>
        <br />
        <a href='https://www.getzealthy.com/' target='_blank'>
          <img src={zealthyLogo} className='logo zealthy' alt='zealthy logo' />
        </a>
      </>
    </div>
  );
};

export default Home;
