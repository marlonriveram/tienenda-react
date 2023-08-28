import React,{ useContext } from 'react';
import { Contexto, tiendaContext } from '../../Context';
import { Card } from '../../Componentes/Card';
import {Layout} from '../../Componentes/Layout';
import { DetallesProducto } from '../../Componentes/DetallesProducto';


function Home() {
  const contextoHome = React.useContext(tiendaContext);
  const showProductos = () =>{
    if(contextoHome.filtrarProductos){
      if(contextoHome.filtrarProductos.length > 0 ){
        return(
          contextoHome.filtrarProductos?.map((product) =>(  // Nota: ? verifica si dataApi existe osea diferente a null o undefined para poder renderizar
          <Card 
           key={product.id}
            data = {product}
          />
      )))

      }else{
        return(
          <div>No se encontro el producto</div>
        )
      }

    }else{
      return(
        contextoHome.dataApi?.map((product) =>(  // Nota: ? verifica si dataApi existe osea diferente a null o undefined para poder renderizar
        <Card 
          key={product.id}
          data = {product}
          />
      )))
    }
  }
 
return (
    <Layout className='bg-yellow-300'>
    <h1 className='font-medium text-xl mb-4'> Home</h1>
    <input 
    className='rounded-lg border border-black w-80 p-4 focus:outline-none'
      value={contextoHome.buscador}
      onChange={(evento)=>{
        contextoHome.setBuscador(evento.target.value)
     }}
    type="text" placeholder=' Buscar Producto' />
      <div className='grid gap-3 grid-cols-4 justify-center items-center w-full max-w-screen-lg mt-8'>
      {
       showProductos()
      }
      </div>
      <DetallesProducto />
    </Layout>
    
  )
}

export {Home};

