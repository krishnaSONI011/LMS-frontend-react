import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Auth from './pages/Auth/Auth';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import { DarkProvider } from './components/context/DarkMode';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
function App() {
  return (
   <>
<BrowserRouter>
<DarkProvider>

<Routes>
  <Route path='/auth/*' element={<Auth/>}/>
</Routes>
  <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/courses' element={<Courses/>} />  
</Routes>
</DarkProvider>
</BrowserRouter>
   </>
  );
}

export default App;
