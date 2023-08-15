import { IoCloseCircleOutline } from "react-icons/io5";
import { VscChevronRight } from "react-icons/vsc";
function CarritoPedidos ({precioaTotal,totalProductos} ){
    
    return(
        <div className='flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4'>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                <span className='font-light'> 13.08.23</span>
                <span  className='font-light'>{totalProductos} articulos</span>
                </div>
                <div className='flex items-center'>
                <span className='text-2xl font-medium '>${precioaTotal}</span>
                <VscChevronRight size={'2rem'}/>
                </div>
            </div>
        </div>
    );

}

export {CarritoPedidos}