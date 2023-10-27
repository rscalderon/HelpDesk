import { useNavigate } from 'react-router-dom';

import './NavBar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className='navbar'>
        <h1 className='navbar-title' onClick={() => navigate('/')}>
          Zealthy Help Desk
        </h1>
        <div className='navbar-menu-dropdown'>
          <button className='navbar-menu'>
            <i
              className='fa-solid-fa-bars-fa-2xl'
              style={{ color: '#eee' }}
            ></i>
          </button>
          <div className='navbar-menu-dropdown-content'>
            <ul>
              <li onClick={() => navigate('/login')}>Login</li>
              <li onClick={() => navigate('/dashboard')}>Dashboard</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
