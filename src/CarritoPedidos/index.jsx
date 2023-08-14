import { IoCloseCircleOutline } from "react-icons/io5";
function CarritoPedidos ({precioaTotal,totalProductos} ){
    
    return(
        <div className='flex justify-between w-full mb-3 items-center border border-black'>
            <p>
                <span> 13.08.23</span>
                <span>{totalProductos}</span>
                <span>{precioaTotal}</span>
            </p>
        </div>
    );

}

export {CarritoPedidos}