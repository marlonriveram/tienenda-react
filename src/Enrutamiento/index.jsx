import {useRoutes} from 'react-router-dom'; // se importa UseRoutes
import { Home } from '../Paginas/Home';
import { IncioSesion } from '../Paginas/InicioSesion';
import { MiCuenta } from '../Paginas/MiCuenta';
import { MisOrdenes } from '../Paginas/MisOrdenes';
import { MiOrden } from '../Paginas/MiOrden'
import { NotFound } from '../Paginas/NotFound';

// permite hacer el enrutamiento mediante el hook useRoutes
const AppRoutes = () =>{
    let routes = useRoutes([
      {path: '/',element: <Home />},
      {path: '/inicio-sesion',element: <IncioSesion />}, // /?inicio-sesion' todos estos nombres los elegi uno
      {path: '/mi-cuenta',element: <MiCuenta />},
      {path: '/mis-ordenes',element: <MisOrdenes/>},
      {path: '/mi-orden',element: <MiOrden />},
      {path: '/mis-ordenes/ultimo',element: <MiOrden />},
      {path: '/mis-ordenes/:id',element: <MiOrden />},
      {path: '/*',element: <NotFound />},
    ]);
  
    return routes; // retirna la ruta
  }

  export {AppRoutes}