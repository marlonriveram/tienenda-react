/**
 * Esta funcio es para calcular el precio total de lo que hay en el carrito
 *  @param {Array} productos 
 * @returns {number} Precio total 
 */

function PrecioTotal (productos){
    let sum = 0;
    productos.forEach((producto) =>sum+= producto.price);
    return sum;
}

export default PrecioTotal