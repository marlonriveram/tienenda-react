import React,{ useContext } from 'react';
import { tiendaContext } from '../../Context';
import { Card } from '../../Componentes/Card';
import {Layout} from '../../Componentes/Layout';

// function useApi(api){ // costom hook
//    const [dataApi,setDataApi] = React.useState(null)

//     // para consumir una api siempre se usa useEffect
//     useEffect(() =>{
//       fetch(api)
//       .then(respose => respose.json())
//       .then(data => setDataApi(data))

//   },[])
//   return(
//     {dataApi}
//   )
// }

function Home() {
  // const {dataApi} = useApi('https://fakestoreapi.com/products');
  const { 
    dataApi
  } = React.useContext(tiendaContext);

 
return (
    <Layout className='bg-yellow-300'>
      Home
      <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg '>
      {
        dataApi?.map((product) =>(  // Nota: ? verifica si dataApi existe osea diferente a null o undefined para poder renderizar
           <Card 
            key={product.id}
            data = {product}
           />
        )) 
      }
      </div>
    </Layout>
    
  )
}

export {Home};

