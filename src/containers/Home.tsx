// assets
import { FormEvent } from 'react';
import zealthyLogo from '../assets/ZealthyLogo2.jpeg';

// Home page container
const Home = () => {
  // request backend to create new ticket based on form inputs
  const createTicket = (e: FormEvent) => {
    // prevent redirect and page refresh
    e.preventDefault();
    // extract form information
    const name = document.forms.newTicket.name.value;
    const email = document.forms.newTicket.email.value;
    const description = document.forms.newTicket.description.value;
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
    });
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
          action='/api/tickets'
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
            placeholder='Describe the problem (the more details you provide, the better we
              can assist you!)'
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
