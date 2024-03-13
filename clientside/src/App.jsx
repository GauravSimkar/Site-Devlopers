
import './App.css'
 react-work
import { Outlet } from 'react-router-dom'
import Layout from './components/layout/layout'
import About from './pages/About'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/login'



 main
function App() {
  return (
    <>
 react-work
   <Outlet/>

    <>
     <About></About>
     {/* <Register/>   */}
     {/* <Login/> */}
    </>
      
 main
    </>
  );
}

export default App
