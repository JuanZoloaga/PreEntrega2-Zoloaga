let comprar = false;
let cantidadProducto = 0;
let carritoCompras = [];
const producto = [];



const cliente = {nombre : " ",
                apellido : " ",
                edad : " "}
                   
const productos = [ 
    { id: "0", nombre: "Oreo SIN TACC", grupoProducto:"galletitas", precio: 4500, cantidad: 0},
    { id: "1", nombre: "Veganitas", grupoProducto:"galletitas", precio: 4000, cantidad: 0},
    { id: "2", nombre: "Fideos integrales", grupoProducto:"fideos", precio: 4000, cantidad: 0},
    { id: "3", nombre: "Fideos de arroz", grupoProducto:"fideos", precio: 3000, cantidad: 0},
    { id: "4", nombre: "Budin integral", grupoProducto:"budines", precio: 6500, cantidad: 0},
    { id: "5", nombre: "Budin Angiola", grupoProducto:"budines", precio: 5500, cantidad: 0},
    { id: "6", nombre: "Miel 200gr", grupoProducto:"miel", precio: 3500, cantidad: 0},
    { id: "7", nombre: "Miel 400gr", grupoProducto:"miel", precio: 5000, cantidad: 0}];

function consultarCompra() {
    comprar = confirm("¿Desea comprar algo?");
};

function consultarNombre(){
    cliente["nombre"] = prompt("Perfecto! Por favor, indique su nombre.");
    cliente["apellido"] = prompt("Ahora por favor, ingrese su apellido.");
    cliente["edad"] = parseInt(prompt("¿Cuantos años tiene?"));
    if (isNaN(cliente["edad"]) || (cliente["edad"])<7) {
        do {
            cliente["edad"] = parseInt(prompt("¿Podría agregar correctamente su edad?"));
        } while (isNaN(cliente["edad"]))
            if (cliente["edad"]<7) {
                alert("Los menores de 7 años no pueden comprar");
                window.close();
            }
    }
};

function elegirProductos(){

    alert("Podrá ver nuestros productos por consola.");
    for (let i=0; i<productos.length; i++){
        console.log(productos[i]);
    }


    idElegido = prompt("Indique un número de id del producto a elegir.");
    if (idElegido>7) {
        do {
            idElegido = prompt("Indique un número correcto de id del producto a elegir.");
        } while (idElegido>7);
    }

    let cantidadProducto = parseInt(prompt("Indique la cantidad de producto a elegir."));

    const preseleccion1 = productos.find(producto => producto.id.includes(idElegido));

    preseleccion1["cantidad"] = cantidadProducto;

    let consultaAgregarCarrito = confirm("Desea agregar el producto al Carrito de compras?")
    if (consultaAgregarCarrito == true) {
        carritoCompras.push(preseleccion1);
    } else {
        alert("Podrá seleccionar nuevamente su producto");
    }

}

function actualizarCarrito() {
    carritoDisplay = carritoCompras.map(producto => "* "+producto.nombre+"   $"+producto.precio+"   "+producto.cantidad+" unidad/es.");
    alert("Actualmente su carrito figura de la siguiente forma:\n\n"+ carritoDisplay.join("\n"));
}





alert("Bienvenido/a! Usted ingresó a Dietética Cúrcuma.");

consultarCompra();
while (comprar == false){
    consultarCompra();
};

consultarNombre();

alert("Su nombre y edad se reflejará en la consola.");
console.log(cliente);


let continuarConUsuario = confirm("¿Desea comprar con el Usuario creado?");
switch (continuarConUsuario) {
    case false:
        alert("Le solicitaremos crear un nuevo usuario.")
        consultarNombre();
        break;

    case true:
        alert("Perfecto, continuamos.");
        break;
}


    elegirProductos();

    actualizarCarrito();

    consultarSeguirComprando = confirm("Desea seguir comprando?");
if (consultarSeguirComprando == true) {
    do {
        elegirProductos();
        actualizarCarrito();
        consultarSeguirComprando = confirm("Desea seguir comprando?");

    } while (consultarSeguirComprando == true);
}

alert("Vamos a proceder con la cuenta a pagar.");
alert("Se le cobrará los siguientes productos:\n\n"+ carritoDisplay.join("\n"));

sumarCarrito = 0;

for(i=0; i<carritoCompras.length; i++){
    sumarCarrito += carritoCompras[i].precio * carritoCompras[i].cantidad
}

alert("Señor/a" + cliente.nombre+ " " + cliente.apellido + "deberá pagar un total de $"+ sumarCarrito+"\n. Por los productos:\n"+carritoDisplay.join("\n"))
alert("gracias por su compra!! :)");


























   
