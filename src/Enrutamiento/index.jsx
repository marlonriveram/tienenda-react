import {useRoutes} from 'react-router-dom';
import { Home } from '../Paginas/Home';
import { IncioSesion } from '../Paginas/InicioSesion';
import { MiCuenta } from '../Paginas/MiCuenta';
import { MisOrdenes } from '../Paginas/MisOrdenes';
import { MiOrden } from '../Paginas/MiOrden'
import { NotFound } from '../Paginas/NotFound';
const AppRoutes = () =>{
    let routes = useRoutes([
      {path: '/',element: <Home />},
      {path: '/inicio-sesion',element: <IncioSesion />},
      {path: '/mi-cuenta',element: <MiCuenta />},
      {path: '/mis-ordenes',element: <MisOrdenes/>},
      {path: '/mi-orden',element: <MiOrden />},
      {path: '/*',element: <NotFound />},
    ]);
  
    return routes;
  }

  export {AppRoutes}