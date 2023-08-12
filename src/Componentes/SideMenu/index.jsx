import React,{ useContext } from 'react';
import { tiendaContext } from '../../Context';
import { IoCloseCircleOutline } from "react-icons/io5";
import './styles.css'
import { CarritoPedidos } from '../CarritoPedidos';
function SideMenu () {
    const contexto= React.useContext(tiendaContext);
   
    return (
        <aside className={`${contexto.sideMenuAbierto ? 'fixed' :'hidden'} side-menu flex flex-col items-center  bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6 w-full'>
                <h2 className='font-medium text-xl'>Mi Orden</h2>
                <div>
                    <IoCloseCircleOutline 
                      className='cursor-pointer'
                      onClick={() =>contexto.ocultarsideMenu() }
                    color="red" size='2rem'/>
                </div>
            </div>
            <div className='p-4 '>

            {
                contexto.productosCarro.map((producto) =>(
                    <CarritoPedidos 
                    key={producto.id}
                    title={producto.title}
                    image={producto.image}
                    price={producto.price}
                    id={producto.id}
                    />
                    ))
                }
                </div>
        </aside>
    );
}

export {SideMenu}