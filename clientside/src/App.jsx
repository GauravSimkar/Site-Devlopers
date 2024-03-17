import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Outlet} from 'react-router-dom'
import AuthcontextProvider from './components/contextAPI/Authcontext.jsx'


function App() {

  return (
    <AuthcontextProvider>  
      <Outlet/>
    </AuthcontextProvider>
  );
}

export default App
