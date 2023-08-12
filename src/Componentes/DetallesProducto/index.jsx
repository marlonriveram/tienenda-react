import React,{ useContext } from 'react';
import { tiendaContext } from '../../Context';
import { IoCloseCircleOutline } from "react-icons/io5";
import './style.css'
function DetallesProducto () {
    const contexto= React.useContext(tiendaContext);
   
    return (
        <aside className={`${contexto.detalleProductoAbierto ? 'fixed' :'hidden'}   detalle-producto flex flex-col items-center  bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6 w-full'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <div>
                    <IoCloseCircleOutline 
                      className='cursor-pointer'
                      onClick={() =>contexto.ocultarDetalleProducto() }
                    color="red" size='2rem'/>
                </div>
            </div>
            <figure className='w-2/4 h-2/6'>
                <img 
                className=' w-full h-full rounded-lg'
                src={contexto.mostrarProducto.image} alt="Imagen del Producto" />
            </figure>
            <p className='flex flex-col p-6'>
                <span
                className='font-medium text-2xl'
                >$ {contexto.mostrarProducto.price}</span>
                <span className='font-medium text-md'>{contexto.mostrarProducto.title}</span>
                <span className='font-ligth text-xs'>{contexto.mostrarProducto.description}</span>
                
                </p>
        </aside>
    );
}

export {DetallesProducto}