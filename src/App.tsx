import { Route, Routes } from 'react-router-dom';

// styles
import './App.scss';

// containers
import Navbar from './components/Navbar.tsx';
import NotFound from './components/NotFound.tsx';
import Home from './containers/Home';
import Login from './containers/Login.tsx';
import Dashboard from './containers/Dashboard.tsx';

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
