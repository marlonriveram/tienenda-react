import React,{ useContext } from 'react';
import { tiendaContext } from '../../Context';
import { Link } from 'react-router-dom';
import { CarritoPedidos } from '../../Componentes/CarritoPedidos'
import {Layout} from '../../Componentes/Layout'
function MisOrdenes() {
  const contexto= React.useContext(tiendaContext);
 
    return (
      <Layout>
        <div className='flex w-80 items-center relative justify-center mb-5'>
          <h1 className='font-medium text-xl'> Mis Ordenes</h1>
        </div>
        {
          contexto.orden?.map((orden,index) =>(
            <Link 
            key={index}
            to ={`/tienenda-react/mis-ordenes/${index}`}>
            <CarritoPedidos
            precioaTotal={orden.totalPrecio}
            totalProductos={orden.totalProductos}
            />
            </Link>
          ))
        }
      </Layout>
      )
    }
    
    export {MisOrdenes}
    
    