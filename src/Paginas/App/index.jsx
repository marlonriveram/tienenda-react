import {BrowserRouter} from 'react-router-dom' // libreria de react router dom, que permite el enrutamiento
import './App.css';
import { AppRoutes } from '../../Enrutamiento';
import { NavBar } from '../../Componentes/NavBar';
import { Contexto } from '../../Context';




function App() {
return (
   <Contexto >
   <BrowserRouter>
      <AppRoutes />
      <NavBar />
   </BrowserRouter>

   </Contexto>
   
  )
}

export default App
