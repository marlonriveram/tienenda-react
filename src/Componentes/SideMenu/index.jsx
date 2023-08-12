import React,{ useContext } from 'react';
import { tiendaContext } from '../../Context';
import { IoCloseCircleOutline } from "react-icons/io5";
import './styles.css'
import { CarritoPedidos } from '../CarritoPedidos';
function SideMenu () {
    const contexto= React.useContext(tiendaContext);
    // quitar productos del carrito si el id del producto seleccioando (click eliminar)es difrerente al id de los productos del carrito
    const quitarProductoCarro = (id) =>{
            const filtradoProductos = contexto.productosCarro.filter((producto) =>(producto.id != id)) 
            console.log(filtradoProductos)
            contexto.setProductosCarro(filtradoProductos)
        }
  
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
            <div className='p-6 overflow-y-auto'>

            {
                contexto.productosCarro.map((producto) =>(
                    <CarritoPedidos 
                    key={producto.id}
                    quitarProductoCarro={quitarProductoCarro}
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