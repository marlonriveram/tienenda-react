import { IoCloseCircleOutline } from "react-icons/io5";
function CarritoPedido ({title,image,price,id,quitarProductoCarro} ){
    
    return(
        <div className='flex justify-between w-full mb-3 items-center'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-e-lg object-cover'src={image} alt={title} />
                </figure>
                <p className='text-xs font-light mx-2'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                {quitarProductoCarro && <IoCloseCircleOutline  className='h-6 w-6 text-black cursor-pointer'onClick={() => quitarProductoCarro (id)}/>}
            </div>

        </div>
    );

}

export {CarritoPedido}