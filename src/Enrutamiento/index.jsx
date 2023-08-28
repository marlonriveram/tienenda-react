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
      {path: '/tienenda-react/',element: <Home />},
      {path: '/tienenda-react/ropa-hombre',element: <Home />},
      {path: '/tienenda-react/ropa-mujer',element: <Home />},
      {path: '/tienenda-react/electronicos',element: <Home />},
      {path: '/tienenda-react/joyeria',element: <Home />},
      {path: '/inicio-sesion',element: <IncioSesion />}, // /?inicio-sesion' todos estos nombres los elegi uno
      {path: '/mi-cuenta',element: <MiCuenta />},
      {path: '/mis-ordenes',element: <MisOrdenes/>},
      {path: '/tienenda-react/mi-orden',element: <MiOrden />},
      {path: '/tienenda-react/mis-ordenes/ultimo',element: <MiOrden />},
      {path: '/tienenda-react/mis-ordenes/:id',element: <MiOrden />},
      {path: '/tienenda-react/*',element: <NotFound />},
    ]);
  
    return routes; // retirna la ruta
  }

  export {AppRoutes}