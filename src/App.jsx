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
import {driver} from 'driver.js'
import Mail from './pages/Mail/Mail';
function App() {
  
  const driverObj = driver({
    showProgress: true,
    
    steps: [
        { element: 'center', popover: { title: 'Welcome', description: 'This is a simple guide to our website ', side: "left", align: 'end' }},
      { element: '#btn-enroll', popover: { title: 'Enroll Your Self', description: 'Here you can Enroll yourself by login or register yourSelf', side: "left", align: 'end' }},
      {element:'#course-btn',popover:{title:'All Course',description:'here you can browse all our offer course',side:'left',align:'end'}}
      
    ]
  });
  React.useEffect(()=>{

      driverObj.drive();
  },[])

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
              <Route path='/mail/*' element={<Mail />} />
            </Routes>
            <ToastContainer />
          </AuthProvider>
        </DarkProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
