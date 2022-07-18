

let productos = ["Pantuflas conejo"];


function agregarAlCarrito(producto){


    productos.push(producto);
    console.log(producto)
    
}

agregarAlCarrito({id: 1, name: "Pollera Sofia", price: 1200})
agregarAlCarrito({id: 2, name: "Remera Umma", price: 1000})
agregarAlCarrito({id: 3, name: "Pantalón Berlin", price: 2500})
agregarAlCarrito({id: 4, name: "Short Melina", price: 2000})



function borrarProductoDelCarrito(idDelProducto){
    const index = productos.findIndex(producto => producto.id === idDelProducto);
    if(index !== -1) { 
        productos.splice(index, 1);
    }
    console.log(productos)
}

borrarProductoDelCarrito(2)

console.log("Existencia del producto seleccionado: " + productos.includes("Remera Umma"))
console.log("Existencia del producto seleccionado: " + productos.includes("Pantuflas conejo"))

