alert("Bienvenidos a Vinoteca Romano")
let nombre = prompt("Ingresa tu Nombre")
let apellido = prompt("Ingresa tu Apellido")
let dni = prompt("Ingresa tu Documento")
let edad = prompt("Ingresa tu Edad")
alert("Mi nombre es " + nombre + " Mi apellido es " + apellido + " Mi dni es " + dni + " Mi edad es " + edad) 



function validarEdad(edad) {
    if (edad >= 18) {
        return true

    }else{
    return false
        }
    
}

let edadValida = validarEdad (edad)

if (!edadValida) {
    alert("Edad no apta para comprar")
    }


let seguirComprando = true
let totalCompra =0


while (seguirComprando) {
    let productos = prompt("Ingrese el producto que desea comprar : \n (1) Fernet \n (2) Gin \n (3) Vodka \n (4) Cervezas \n (5) Whisky")

    let monto =0

    switch (productos) {
        case "1":  monto = 500;
        break;
        case "2":  monto = 1000;
        break;
        case "3":  monto = 1500;
        break; 
        case "4":  monto = 2000;
        break;  
        case "5":  monto = 2500;
        break;       
        
    
        default:
        alert("Valor incorrecto " + productos);
        
    }
    alert("Productos elegidos " + productos)
    
    let continuarCompra = prompt("Quiere seguir comprando? : \n si \n no")
    if (continuarCompra == "si") {
        seguirComprando = true
        } else seguirComprando = false

        totalCompra += monto
        
}

alert("total a pagar " + totalCompra)