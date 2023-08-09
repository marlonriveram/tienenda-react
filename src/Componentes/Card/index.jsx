import { tiendaContext } from '../../Context';
import { IoIosAddCircle } from "react-icons/io";
import React,{ useContext } from 'react';

function Card ({data}) {
    const contexto = React.useContext(tiendaContext);
 
    const mostrarProducto = (producto) =>{
        contexto.mostrarDetalleProducto()
        contexto. setMostrarProducto(producto)
    };
    return(
        <div 
        className='bg-white cursor-pointer w-40 h-80'
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xm m-2 p-1'>{data.catagory}</span>
                <img 
                  onClick={() => mostrarProducto (data)}
                className='w-full h-full object-cover rounded-lg' src={data.image} alt='celulares'/>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-transparent w-6 h-6 rounded-full m-2'
                onClick={() => contexto.setContador(contexto.contador + 1) }
                >
                    < IoIosAddCircle color='blue' size='2rem' />
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-xs font-light'>{data.title}</span>
                <span className='text-sm font-light'>${data.price}</span>
            </p>
        </div>
    );
}

export {Card}