import { FormEvent, useState } from 'react';

import zealthyLogo from '../../assets/ZealthyLogo2.jpeg';

import Banner from '../../components/Banner';

import { postTicket } from '../../utils/services';

import './Home.scss';

interface TicketFormOutput extends HTMLCollectionOf<HTMLFormElement> {
  newTicket: {
    name: { value: string };
    email: { value: string };
    description: { value: string };
  };
}

const Home = () => {
  const [showBanner, setBanner] = useState(false);

  /**
   * ************************************
   *
   * @module  createTicket
   * @param {FormEvent} e Form inputs
   * @description Create ticket in database based on form inputs
   * (name, email, description) and returns a promise
   *
   * ************************************
   */

  const createTicket = async (e: FormEvent) => {
    // prevent redirect and page refresh
    e.preventDefault();

    // extract form information
    const { newTicket } = document.forms as TicketFormOutput;
    const name = newTicket.name.value;
    newTicket.name.value = '';
    const email = newTicket.email.value;
    newTicket.email.value = '';
    const description = newTicket.description.value;
    newTicket.description.value = '';

    // create ticket in database
    await postTicket(name, email, description);

    // display banner for maximum of 5s
    setBanner(true);
    setTimeout(() => setBanner(false), 5000);
  };

  return (
    <div id='home'>
      {showBanner && (
        <Banner
          closeBanner={() => setBanner(false)}
          message='Your ticket has been received! You should expect to hear back within
        24-48hrs. Thank you for using the Zealthy Helpdesk.'
        />
      )}
      <p>
        Thank you for using the Zealthy HelpDesk! Please fill out the form
        below:
      </p>
      <>
        <form
          id='createTicketForm'
          className='form'
          name='newTicket'
          method='POST'
          onSubmit={(e) => createTicket(e)}
        >
          <div className='input-and-label'>
            <label htmlFor='name'>Name</label>

            <input
              type='text'
              id='name'
              name='name'
              placeholder='Jane Doe'
              autoFocus
              required
              autoComplete='on'
            />
          </div>

          <div className='input-and-label'>
            <label htmlFor='email'> Email</label>

            <input
              type='email'
              id='email'
              name='email'
              placeholder='johndoe@emailservice.com'
              required
              autoComplete='on'
            />
          </div>

          <div className='input-and-label'>
            <label htmlFor='description'>Description</label>

            <textarea
              id='description'
              name='description'
              placeholder='Describe the problem (the more details you provide, the better we can assist you!)'
              required
            />
          </div>

          <button type='submit' id='submit-button'>
            Submit
          </button>
        </form>

        <div>
          <a href='https://www.getzealthy.com/' target='_blank'>
            <img src={zealthyLogo} id='logo-zealthy' alt='zealthy logo' />
          </a>
        </div>
      </>
    </div>
  );
};

export default Home;
