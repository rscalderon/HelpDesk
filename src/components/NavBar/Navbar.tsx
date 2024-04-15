import { useNavigate } from 'react-router-dom';

import './NavBar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className='navbar'>
        <p className='navbar-title' onClick={() => navigate('/')}>
          Zealthy Help Desk
        </p>
        <nav id='navbar-right'>
          <p className='navbar-element' onClick={() => navigate('/login')}>
            Login
          </p>
          <p className='navbar-element' onClick={() => navigate('/dashboard')}>
            Dashboard
          </p>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
