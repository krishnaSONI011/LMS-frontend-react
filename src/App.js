import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Auth from './pages/Auth/Auth';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import { DarkProvider } from './components/context/DarkMode';
import Home from './pages/Home/Home';
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
</Routes>
</DarkProvider>
</BrowserRouter>
   </>
  );
}

export default App;
