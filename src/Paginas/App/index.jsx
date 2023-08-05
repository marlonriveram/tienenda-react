import {BrowserRouter} from 'react-router-dom' // libreria de react router dom, que permite el enrutamiento
import './App.css';
import { AppRoutes } from '../../Enrutamiento';
import { NavBar } from '../../Componentes/NavBar';



function App() {
return (
   <BrowserRouter>
      <AppRoutes />
      <NavBar />
   </BrowserRouter>
  )
}

export default App
