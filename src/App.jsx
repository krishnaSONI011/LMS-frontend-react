import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
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
function App() {
  const isAdminRoute = () => {
    // Check if the current route is /admin
    return window.location.pathname.includes('/admin');
  };
  return (
   <>
<BrowserRouter>
<DarkProvider>
<AuthProvider>
<Routes>
  <Route path='/auth/*' element={<Auth/>}/>
  <Route path='/admin/*' element={<Admin/>} />
</Routes>

{!isAdminRoute() && <Navbar />}
  {/* <Navbar/> */}
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/courses' element={<Courses/>} />  
  <Route path='/courses/:coursesSlug' element={<Single/>} />
</Routes>
< ToastContainer />
</AuthProvider>
</DarkProvider>
</BrowserRouter>
   </>
  );
}

export default App;
