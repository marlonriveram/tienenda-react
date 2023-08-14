import React,{ useContext } from 'react';
import { tiendaContext } from '../../Context';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import {Layout} from '../../Componentes/Layout'
import { CarritoPedido } from '../../Componentes/CarritoPedido';

function MiOrden() {
      const contexto= React.useContext(tiendaContext);
      console.log('orden:',contexto.orden.slice(-1)[0].productos)
    return (
      <Layout className=''>
         <div className='flex w-80 items-center relative justify-center m-8'>
          <Link 
           to = '/mis-ordenes'
           className='absolute left-0'>
           <VscChevronLeft className='h-6 w-6 text-black cursor-pointer'/>
          </Link>
          <h1> Mi Orden</h1>
        </div>
            
    <div className='px-6 '>
      {
        contexto.orden.slice(-1)[0].productos.map((producto) =>(
            <CarritoPedido 
            key={producto.id}
            title={producto.title}
            image={producto.image}
            price={producto.price}
            id={producto.id}
            />
            ))
        }
        </div>
      </Layout>   
      )
    }
    
    export {MiOrden}
