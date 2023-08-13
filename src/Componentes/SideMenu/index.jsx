import React,{ useContext } from 'react';
import { tiendaContext } from '../../Context';
import { IoCloseCircleOutline } from "react-icons/io5";
import { CarritoPedidos } from '../CarritoPedidos';
import PrecioTotal from '../../Utiles/index'
import './styles.css'

function SideMenu () {
    const contexto= React.useContext(tiendaContext);
    // quitar productos del carrito si el id del producto seleccioando (click eliminar)es difrerente al id de los productos del carrito
    const quitarProductoCarro = (id) =>{
            contexto.setContador(contexto.contador - 1)
            const filtradoProductos = contexto.productosCarro.filter((producto) =>(producto.id != id)) 
            console.log(filtradoProductos)
            contexto.setProductosCarro(filtradoProductos)
        };

        const verificarProducto = () =>{
            const agregarOrden = {
                fecha:'13.08.23',
                productos:contexto.productosCarro,
                totalProductos:contexto.productosCarro.length,
                totalPrecio:PrecioTotal(contexto.productosCarro),
            };
            contexto.setOrden([...contexto.orden,agregarOrden]);
            console.log(typeof agregarOrden)
            contexto.setProductosCarro([])
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
            <div className='px-6 overflow-y-auto flex-1'>

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
                <div className='p-2  w-full'>
                    <p className='flex justify-between'>
                        <span className='font-light'>Total:</span>
                        <span className='font-medium text-2'>${PrecioTotal(contexto.productosCarro)}</span> 
                    </p>
                    <button
                    className='w-full bg-black py-3 text-white rounded-lg'
                    onClick={() => verificarProducto ()}
                    >checkout</button>
                </div>
        </aside>
    );
}

export {SideMenu}