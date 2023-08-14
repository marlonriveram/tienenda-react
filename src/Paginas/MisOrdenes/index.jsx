import React,{ useContext } from 'react';
import { tiendaContext } from '../../Context';
import { Link } from 'react-router-dom';
import { CarritoPedidos } from '../../CarritoPedidos'
import {Layout} from '../../Componentes/Layout'
function MisOrdenes() {
  const contexto= React.useContext(tiendaContext);
    return (
      <Layout>
        <div className='flex w-80 items-center relative justify-center'>
          <h1> Mis Ordenes</h1>
        </div>
        {
          contexto.orden.map((orden,index) =>{
            <Link 
            key={index}
            to ={`/mis-ordenes/${orden.id}`}>
            <CarritoPedidos
            precioaTotal={orden.totalPrecio}
            totalProductos={orden.totalProductos}
            />
            </Link>
          })
        }
      </Layout>
      )
    }
    
    export {MisOrdenes}
    
    