/*
Render Login page container

Here administrators can log in, and once they do they are redirected to the Dashboard.

Note: For the sake of time, I built the UI but did not implement the auth business logic
*/

import { useNavigate } from 'react-router-dom';
import './Home.scss';

function Login() {
  const navigate = useNavigate();
  return (
    <div className='form-container'>
      <div className='login-container'>
        <h2>Admin Login</h2>
        <form
          className='form'
          name='login'
          onSubmit={() => navigate('/dashboard')}
        >
          <div className='input-and-label'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email here'
              autoFocus
              required
            ></input>
          </div>
          <div className='input-and-label'>
            <label htmlFor='password'>Password</label>
            <input
              type='text'
              id='password'
              name='password'
              placeholder='Enter your password here'
              required
            ></input>
          </div>
          <button
            className='login-form-button'
            // Note: With more time, this would be replaced with a robust authentication and authorization feature
          >
            Log In
          </button>
        </form>
        <div className='login-form-links'>
          <button onClick={() => console.log('Trigger reset password feature')}>
            Forgot your password?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
