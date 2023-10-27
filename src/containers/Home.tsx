import zealthyLogo from '../assets/ZealthyLogo2.jpeg';

const Home = () => {
  return (
    <div className='home'>
      <br />
      <p>
        Thank you for using the Zealthy HelpDesk! Enter your information below:
      </p>
      <br />
      <>
        <form autoComplete='off'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Bruce Wayne'
            autoFocus
            required
          />
          <br /> <br />
          <label htmlFor='email'> Email</label>
          <input
            type='email'
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
            name='description'
            placeholder='Describe the problem (the more details you provide, the better we
              can assist you!)'
            required
          />
          <br />
          <input type='submit' name='description' />
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
