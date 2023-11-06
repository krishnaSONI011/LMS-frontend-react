import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Auth from './pages/Auth/Auth';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/auth/*' element={<Auth/>}/>
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
