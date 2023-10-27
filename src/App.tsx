// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

import './App.scss';
import Navbar from './containers/Navbar.tsx';
import NotFound from './containers/NotFound.tsx';
import Home from './containers/Home.tsx';

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
      </Routes>
    </>
  );
}

export default App;
