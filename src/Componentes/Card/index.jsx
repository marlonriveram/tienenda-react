function Card () {
    return(
        <div className='bg-white cursor-pointer w-56 h-60'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xm m-2 p-1'>Electricos</span>
                <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/10902946/pexels-photo-10902946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='celulares'/>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'>+</div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>celulares</span>
                <span className='text-sm font-light'>$ 500</span>
            </p>
        </div>
    );
}

export {Card}