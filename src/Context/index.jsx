import React,{ useEffect, useState } from "react";
import { createContext} from "react";

const tiendaContext = createContext();

function Contexto ({children}) {
  // Contador del cantidad de productos en el carrito
    const [contador,setContador] = React.useState(0); 

    // Detalles del producto abrir/cerrar
    const [detalleProductoAbierto,setDetalleProductoAbierto] = React.useState(false); // saber si detalle de producto esta abierta
   
    const mostrarDetalleProducto = () =>{
      setDetalleProductoAbierto(true);
    };
    const ocultarDetalleProducto = () =>{
      setDetalleProductoAbierto(false);
    };

        // Detalles del sideMenu abrir/cerrar
        const [sideMenuAbierto,setSideMenuAbierto] = React.useState(false); // saber si detalle de producto esta abierta
   
        const mostrarsideMenu = () =>{
          setSideMenuAbierto(true);
        };
        const ocultarsideMenu = () =>{
          setSideMenuAbierto(false);
        };
    // mostrar Producto selecionado. Detalle Producto
    const [mostrarProducto,setMostrarProducto] = React.useState({});
    // añadir productos al carrito . Carrito Pedidos
    const [productosCarro,setProductosCarro] = React.useState([]);

    // mostrar productos en mis ordenes
    const [orden,setOrden] = React.useState([]);

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
        }}
        >
            {children}
        </tiendaContext.Provider>
    )
}

export {tiendaContext,Contexto}