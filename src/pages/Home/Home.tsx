import { FormEvent, useState } from 'react';

import zealthyLogo from '../../assets/ZealthyLogo2.jpeg';

import Banner from '../../components/Banner';

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
  // request backend to create new ticket based on form inputs
  const createTicket = (e: FormEvent) => {
    // prevent redirect and page refresh
    e.preventDefault();
    const formInfo = (document.forms as TicketFormOutput).newTicket;
    // extract form information
    const name = formInfo.name.value;
    formInfo.name.value = '';
    const email = formInfo.email.value;
    formInfo.email.value = '';
    const description = formInfo.description.value;
    formInfo.description.value = '';

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
      .then(() => {
        console.log(document.body);
        setBanner(true);
        setTimeout(() => setBanner(false), 5000);
        console.log(
          `Would normally send email here with: \n \n Title: 'New Helpdesk Ticket' \n \n Body: New helpdesk ticket from ${name} (${email}): \n \n ${description} \n \n You can respond directly to this email address or log on to the zealthy helpdesk portal to respond.`
        );
      })
      .catch((e) =>
        console.error(
          `Would normally log to monitoring service: ${{
            error: `Error creating helpdesk ticket:${e} Please try again later`,
          }}`
        )
      );
  };

  return (
    <div id='home'>
      {showBanner && <Banner closeBanner={() => setBanner(false)} />}
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
              placeholder='Bruce Wayne'
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
              placeholder='Iam@batman.com'
              required
              autoComplete='on'
            />
          </div>

          <div className='input-and-label'>
            <label htmlFor='description'>Description</label>

            <input
              type='text'
              id='description'
              name='description'
              placeholder='Describe the problem (the more details you provide, the better we can assist you!)'
              required
            />
          </div>

          <button type='submit' id='submitButton'>
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
