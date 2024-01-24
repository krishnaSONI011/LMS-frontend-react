import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import React from 'react';
import Auth from './pages/Auth/Auth';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import { DarkProvider } from './components/context/DarkMode';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import { ToastContainer } from 'react-toastify';
import Single from './pages/Single-course-page/Single';
import { AuthProvider } from './components/context/authContext';
import Admin from './admin/Admin';
import Account from './pages/Account/Account';
import LearnPortal from './pages/LearnPortal/LearnPortal';
import NavbarHolder from './components/NavbarHolder';
import "driver.js/dist/driver.css";
function App() {
  


  return (
    <>
      <BrowserRouter>
        <DarkProvider>
          <AuthProvider>
            <Routes>
              <Route path='/auth/*' element={<Auth />} />
              <Route path='/admin/*' element={<Admin />} />
              <Route path='/learn/*' element={<LearnPortal />} />
            </Routes>
            <NavbarHolder>

            <Navbar />
            </NavbarHolder>
            <Routes>
            
              <Route path='/' element={<Home />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/courses/:coursesSlug' element={<Single />} />
              <Route path='/account' element={<Account />} />
            </Routes>
            <ToastContainer />
          </AuthProvider>
        </DarkProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
