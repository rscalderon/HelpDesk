import { useNavigate } from 'react-router-dom';
import './Home/Home.scss';

// Placeholder authentication page

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
              autoComplete='on'
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
          <button className='login-form-button'>Log In</button>
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
