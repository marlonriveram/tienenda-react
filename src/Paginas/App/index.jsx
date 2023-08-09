import {BrowserRouter} from 'react-router-dom' // libreria de react router dom, que permite el enrutamiento
import './App.css';
import { AppRoutes } from '../../Enrutamiento';
import { NavBar } from '../../Componentes/NavBar';
import { Contexto } from '../../Context';
import { SideMenu } from '../../Componentes/SideMenu';





function App() {
return (
   <Contexto >
   <BrowserRouter>
      <AppRoutes /> 
      <NavBar />
      <SideMenu />
   </BrowserRouter>

   </Contexto>
   
  )
}

export default App
