import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Outlet} from 'react-router-dom'
import AuthcontextProvider from './components/contextAPI/Authcontext.jsx'
import CartContextProvider from './components/contextAPI/Cartcontext.jsx';
import { SearchProvider } from './components/contextAPI/search.jsx';


function App() {

  return (
    
    <AuthcontextProvider> 
   
    <CartContextProvider>
         <Outlet/>
      </CartContextProvider>
 
     </AuthcontextProvider>
  );
}

export default App
