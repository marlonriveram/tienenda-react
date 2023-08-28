import { BsFillCartDashFill } from "react-icons/bs";
import { tiendaContext } from '../../Context';
import React,{ useContext } from 'react';
import { NavLink } from "react-router-dom"; // se importa navlink libreria de react router dom


function NavBar () {
    const activeStyle = 'underline underline-offset-4'
    const contexto = React.useContext(tiendaContext);

    return(
     <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
         <ul className='flex items-center gap-3'>
             <li className='font-semibold text-lg'>
             <NavLink 
             onClick={()=>contexto.setFiltroCategoria("")} 
             to = '/tienenda-react/'>
               Tienda
             </NavLink>
             </li>
             <li>
             <NavLink
               onClick={()=>contexto.setFiltroCategoria("men's clothing")} 
             to = '/tienenda-react/ropa-hombre'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Ropa Hombre
             </NavLink>
             </li>
             <li>
             <NavLink 
             onClick={()=>contexto.setFiltroCategoria("women's clothing")} 
             to = '/tienenda-react/ropa-mujer'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Ropa Mujer
             </NavLink>
             </li>
             <li>
             <NavLink 
             onClick={()=>contexto.setFiltroCategoria("electronics")} 
             to = '/tienenda-react/electronicos'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Electronicos
             </NavLink>
             </li>
             <li>
             <NavLink 
             onClick={()=>contexto.setFiltroCategoria("jewelery")} 
             to = '/tienenda-react/joyeria'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Joyeria
             </NavLink>
             </li>
         </ul>
        
         <ul className='flex items-center gap-3'> 
             <li className='text-black/60'>
                marlonmosquera@gmail.com
             </li>
             <li>
             <NavLink to = '/mis-ordenes'>
                Mis Ordenes
             </NavLink>
             </li>
             <li>
             <NavLink to = '/mi-cuenta'>
                Mi Cuenta
             </NavLink>
             </li>
             <li>
             <NavLink to = '/inicio-sesion'>
                Inicio Sesion
             </NavLink>
             </li>
             <li className='flex gap-2'>
                <BsFillCartDashFill /> {contexto.contador} 
             </li>
         </ul>
    </nav>
    );
}

export {NavBar};