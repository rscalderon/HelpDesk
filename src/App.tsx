// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

import './App.scss';
import Navbar from './containers/Navbar';
import NotFound from './containers/NotFound';
import Home from './containers/Home';
import Login from './containers/Login.tsx';

function App() {
  // const [user, setUser] = useState('');
  // const [cookies, setCookie, removeCookie] = useCookies(['user']);

  return (
    <>
      <Navbar />
      {/* Home route  */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* 404 unknown route */}
        <Route
          path='*'
          element={
            <NotFound
            // user={user}
            // setUser={setUser}
            // cookies={cookies}
            // setCookie={setCookie}
            // removeCookie={removeCookie}
            />
          }
        />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
