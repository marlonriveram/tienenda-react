import React,{ useEffect, useState } from "react";
import { createContext} from "react";

const tiendaContext = createContext();

function Contexto ({children}) {

  // -------------ESTADOS----------------------------------------------------------------

  // Contador del cantidad de productos en el carrito
  const [contador,setContador] = React.useState(0); 

  // Detalles del producto abrir/cerrar
  const [detalleProductoAbierto,setDetalleProductoAbierto] = React.useState(false); // saber si detalle de producto esta abierta

  // Detalles del sideMenu abrir/cerrar
  const [sideMenuAbierto,setSideMenuAbierto] = React.useState(false); // saber si detalle de producto esta abierta

  // mostrar Producto selecionado. Detalle Producto
  const [mostrarProducto,setMostrarProducto] = React.useState({});

  // añadir productos al carrito . Carrito Pedidos
  const [productosCarro,setProductosCarro] = React.useState([]);

  // mostrar productos en mis ordenes
  const [orden,setOrden] = React.useState([]);

  // Buscar Productos. filtro por titulo
  const [buscador,setBuscador] = React.useState('');

  //Filtrar Por categoria
  const [filtroCategoria,setFiltroCategoria] = useState('');
  // fitrar Productos
  const [filtrarProductos,setFiltrarProductos] = useState(null);

  //---------------------------SUB ESTADOS------------------------------------------------------------------

  // Sub Estado. DetalleProducto
    const mostrarDetalleProducto = () =>{
      setDetalleProductoAbierto(true);
    };
    const ocultarDetalleProducto = () =>{
      setDetalleProductoAbierto(false);
    };

  // Sub Estado. DetalleProducto
    const mostrarsideMenu = () =>{
          setSideMenuAbierto(true);
    };

    const ocultarsideMenu = () =>{
          setSideMenuAbierto(false);
    };
   
    // cosumo de la api
    function useApi(api){ // costom hook

        const [dataApi,setDataApi] = React.useState(null)

        // para consumir una api siempre se usa useEffect
        useEffect(() =>{
          fetch(api)
          .then(respose => respose.json())
          .then(data => setDataApi(data))
      
        },[])
        return(
          {dataApi}
        )
      };

     const {dataApi} = useApi('https://fakestoreapi.com/products'); // llamado costom hook
    
  
     const filtrarPorTitulo = (dataApi,buscador) => dataApi?.filter((producto) => (producto.title.toLowerCase().includes(buscador.toLowerCase())));
     const filtrarPorCategoria = (dataApi,filtroCategoria) => dataApi?.filter((producto) =>(producto.category === filtroCategoria))

     // tipo de filtro a aplicar 
     const tipoFiltro = (filtroPor,dataApi,buscador,filtroCategoria)=>{
      if(filtroPor === 'porTitulo'){return filtrarPorTitulo(dataApi,buscador)}
      if(filtroPor === 'porCategoria'){return filtrarPorCategoria(dataApi,filtroCategoria)}
      if(filtroPor === 'porCategoriaYTitulo'){return filtrarPorCategoria(dataApi,filtroCategoria).filter((producto) =>(producto.title.toLowerCase().includes(buscador.toLowerCase())))}
      if(filtroPor === null){return dataApi}
    }
    
     useEffect(() =>{
      if(buscador && !filtroCategoria) {setFiltrarProductos(tipoFiltro('porTitulo',dataApi,buscador,filtroCategoria))}
      if(filtroCategoria && !buscador) {setFiltrarProductos(tipoFiltro('porCategoria',dataApi,buscador,filtroCategoria))}
      if(!buscador && !filtroCategoria) {setFiltrarProductos(tipoFiltro(null,dataApi,buscador,filtroCategoria))}
      if(filtroCategoria && buscador) {setFiltrarProductos(tipoFiltro('porCategoriaYTitulo',dataApi,buscador,filtroCategoria))}
    },[dataApi,buscador,filtroCategoria])

 
    
    console.log('titulo:',!!buscador)
    console.log('categoria:',!!filtroCategoria)

    return(
        <tiendaContext.Provider value={{
            dataApi,
            contador,
            setContador,
            mostrarDetalleProducto,
            ocultarDetalleProducto,
            detalleProductoAbierto,
            mostrarProducto,
            setMostrarProducto,
            productosCarro,
            setProductosCarro,
            sideMenuAbierto,
            mostrarsideMenu,
            ocultarsideMenu,
            orden,
            setOrden,
            buscador,
            setBuscador,
            filtrarProductos,
            setFiltroCategoria,
        }}
        >
            {children}
        </tiendaContext.Provider>
    )
}

export {tiendaContext,Contexto}