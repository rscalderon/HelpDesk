import { Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home route  */}
        <Route path='/' element={<Home />} />
        {/* Login route  */}
        <Route path='login' element={<Login />} />
        {/* Dashboard route  */}
        <Route path='dashboard' element={<Dashboard />} />
        {/* 404 unknown route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
