import { NavLink } from "react-router-dom";


function NavBar () {
    const activeStyle = 'underline underline-offset-4'
    return(
     <nav className='flex justify-between items-center fixed z-10  w-full py-5 px-8 text-sm font-light'>
         <ul className='flex items-center gap-3'>
             <li className='font-semibold text-lg'>
             <NavLink 
             to = '/'>
               Tienda
             </NavLink>
             </li>
             <li>
             <NavLink 
             to = '/todo'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Todo
             </NavLink>
             </li>
             <li>
             <NavLink 
             to = '/ropa'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Ropa
             </NavLink>
             </li>
             <li>
             <NavLink 
             to = '/electronica'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Electronica
             </NavLink>
             </li>
             <li>
             <NavLink 
             to = '/muebles'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Muebles
             </NavLink>
             </li>
             <li>
             <NavLink 
             to = '/jueguetes'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Jueguetes
             </NavLink>
             </li>
             <li>
             <NavLink 
             to = '/otros'
                className={({ isActive}) =>
                isActive ? activeStyle : undefined
              }>
                Otros
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
             <li>
                🛒 0
             </li>
         </ul>
    </nav>
    );
}

export {NavBar};