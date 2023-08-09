import React,{ useContext } from 'react';
import { tiendaContext } from '../../Context';
import { Card } from '../../Componentes/Card';
import {Layout} from '../../Componentes/Layout';
import { DetallesProducto } from '../../Componentes/DetallesProducto';


function Home() {
  const { 
    dataApi
  } = React.useContext(tiendaContext);

 
return (
    <Layout className='bg-yellow-300'>
      Home
      <div className='grid gap-3 grid-cols-4 justify-center w-full max-w-screen-lg '>
      {
        dataApi?.map((product) =>(  // Nota: ? verifica si dataApi existe osea diferente a null o undefined para poder renderizar
           <Card 
            key={product.id}
            data = {product}
            
           />
        )) 
      }
      </div>
      <DetallesProducto />
    </Layout>
    
  )
}

export {Home};

