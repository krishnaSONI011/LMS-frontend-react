import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Auth from './pages/Auth/Auth';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/auth/*' element={<Auth/>}/>
</Routes>
  <Navbar/>
<Routes>
  
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
