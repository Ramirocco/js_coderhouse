//prompt y alert
/*
let nombre= prompt("ingrese nombre");
let edadExperiencia = prompt("ingrese años de experienca en programacion");
let tuEdad = prompt("ingrese su edad");
let edadComienzo = Number(tuEdad) - Number(edadExperiencia);
let mensajeCompleto = `${edadComienzo} años tenia cuando empezó a programar ${nombre}`;
alert(mensajeCompleto);
*/


//bucle for

//let pares
//for (pares = 0; pares <= 6; pares++) {
//   if (pares % 2 == 0) {
//     alert( `el numero ${pares} es par`);
//    }
//    else { alert ( `el numero ${pares} es impar`)}
//}

/*
// opcional complementario de condicion

let edad = Number (prompt (`ingrese la edad de usted`))

if (edad == ``){alert(`ingrese valor`)}
else if(edad!='' && edad < 3 ){ alert (`usted es bebe`)}
else if (edad!=''&& edad < 10){ alert(`usted es niño joven`)}
else if (edad!=''&& edad < 15){ alert(`usted es adolescente joven`)}
else if (edad!=''&& edad < 18){alert(`usted es adolescente`)}
else if(edad!=''&& edad< 25){alert(`usted es adolescente tardio`)}
else if(edad!=''&& edad<40){ alert(`usted es adulto`)}
else if(edad!=''&& edad<50){ alert(`usted es adulto joven `)}
else if(edad!=''&& edad<60){ alert(`usted es adulto viejo`)}
else if(edad!=''&& edad<70){ alert(`usted es viejo joven`)}
else if(edad!=''&& edad<80){alert(`usted es viejo`)}
else (`usted es viejo viejo`)

//SWITCH

let genero
genero = prompt("ingrese su genero")

switch (genero){
    case "masculino":
        alert ("sos cis genero");
        break
    case "femenino":
        alert ("sos cis genero");
        break
    case "mujer trans":
        alert ("sos trans genero");
        break
    case "hombre trans":
        alert ("sos trans genero");
        break
    default:
        alert( "sos no binario o agenero")
}
*/

//declaracion de variables//
const precioKm = 50;
const dto = 0.10;
const plus = 0.5;
const comision = 0.05;
let lugares = 0;
let apellido;
let nombre
let dni;
let rol;
let acompañado; //si o no para ingresar al bucle para generar variables de los acompannn1antes
let acompañantes; // variable predeterminada si ingresa no
let elapellido="";
let elnombre="";
let eldni="";
//constructor de usuario
class Usuario {
    constructor(Apellido, Nombre, Dni, Rol) {
        this.Apellido = apellido;
        this.Nombre = nombre;
        this.Dni = dni;
        this.Rol = rol;
    };
}
//funcion para pedir datos de usuario
function PedirDatos() {
    apellido = prompt(`ingrese su apellido`).toLowerCase();
    nombre = prompt(`ingrese su nombre`).toLowerCase();
    dni = prompt(`ingrese su dni`);
    rol = prompt(`ingrese si su rol es de  "conductor" o "pasajero"`).toLowerCase();
    if (rol == "conductor") {
        lugares = Number(prompt(`ingrese lugares disponibles en su vehiculo`))
    }
    else if (rol == "pasajero") {
        acompañado = prompt(`ingrese "si" si viaja acompañado o "no" si viaja solo`).toLowerCase();
        if (acompañado == "si") {
            acompañantes = Number(prompt(`con cuantas personas viaja?`)), lugares = acompañantes; //aca iria el ciclo pidiendo datos de acompa;antes//
        } else if (acompañado == "no") { lugares = 1 }
    } else {
        alert("ingrese rol valido")
    };
}
//pedir trayecto
let lugarDePartida;
let lugarDeLlegada;
let kilometraje;
function PedirTrayecto() {
    lugarDePartida = prompt("ingrese su origen del viaje: BUE, MDQ, MDZ, BRC, CDB").toLowerCase();
    lugarDeLlegada = prompt("ingrese su destino del viaje: BUE, MDQ, MDZ, BRC, CDB").toLowerCase();
};
//funcion para pedir adtos acompañantes
function PedirDatosAcompañante() {
    elapellido = prompt(`ingrese apellido del acompañante`).toLowerCase();
    elnombre = prompt(`ingrese nombre del acompañante`).toLowerCase();
    eldni = prompt(`ingrese dni del acompañante`);
};
// funcion para el array de acompañntes
function ArrayAcompañantes() {
    for (let index = 0; index < acompañantes; index++) {
        elid= index + 1;
        PedirDatosAcompañante();
        let obj = {
            elid: elid,
            elapellido: elapellido,
            elnombre: elnombre,
            eldni: eldni,
        };
        pasajerosAcompañantes.push(obj);
    }
};
//pido datos del usuario y mostrarlo
PedirDatos();
let usuario = new Usuario(apellido, nombre, dni, rol);
alert(`BIENVENIDO ` + `usted es ` + usuario.Apellido + ` ` + usuario.Nombre + `su dni es ` + usuario.Dni + ` su rol es ` + usuario.Rol);
//pido datos acompañante
let pasajerosAcompañantes = [];
//agrupo los datos al usuario
ArrayAcompañantes();
console.log(pasajerosAcompañantes);
//busqueda y filtrado
const listaDePasajeros = pasajerosAcompañantes.map( acompañante => acompañante.elnombre);
console.log (listaDePasajeros);
console.log (listaDePasajeros[0]);
PedirTrayecto();
if (lugarDePartida == "bue" || "mdq" || "mdz" || "brc" || "cdb" && lugarDeLlegada == "bue" || "mdq" || "mdz" || "brc" || "cdb") {
    alert("trayecto validado")
} else { alert("Puntos no validados, ingrese kilometraje propio"); kilometraje = Number(prompt(`ingrese el kilometraje`)) };
// valores de lugares//
const kmbue = 0;
const kmmdq = 500;
const kmmdz = 1200;
const kmbrc = 1400;
const kmcdb = 800;
//valores de puntos de trayectos//
let kmOrigen = 0;
let kmDestino = 0;
// asignacion de kilometrajes segun puntos de trayectos//
if (lugarDePartida == "bue") { kmOrigen = kmbue }
else if (lugarDePartida == "mdq") { kmOrigen = kmmdq }
else if (lugarDePartida == "mdz") { kmOrigen = kmmdz }
else if (lugarDePartida == "brc") { kmOrigen = kmbrc }
else if (lugarDePartida == "cdb") { kmOrigen = kmcdb }
else (alert("ingreso erroneo"));
if (lugarDeLlegada == "bue") { kmDestino = kmbue }
else if (lugarDeLlegada == "mdq") { kmDestino = kmmdq }
else if (lugarDeLlegada == "mdz") { kmDestino = kmmdz }
else if (lugarDeLlegada == "brc") { kmDestino = kmbrc }
else if (lugarDeLlegada == "cdb") { kmDestino = kmcdb }
else (alert("ingreso erroneo"));
//kilometraje es resultado de trayecto//
kilometraje = kmDestino - kmOrigen
function calculadoraKm() { if (kilometraje < 0) { kilometraje * -1 } };
calculadoraKm();
alert(`su distacia del viaje es de` + kilometraje + `km`);
// precios del viaje
let precioDeViaje = kilometraje * lugares * precioKm;
let precioBruto = 0;
let precioFinal = 0;
//pedido del codigo de dto.
let codigo = prompt(`ingrese el código de descuento o plus si tiene, sino pulse en aceptar`).toUpperCase();
function saberPrecioBruto() {
    if ((rol == "conductor") && (codigo == "MIPRIMERVIAJE" || codigo === "HELLOCARRY")) {
        alert('su beneficio ha sido aplicado');
        precioBruto = (precioDeViaje + (precioDeViaje * plus));
    } else if ((rol == "pasajero") && (codigo == "MIPRIMERVIAJE" || codigo === "HELLOCARRY")) {
        alert('su descuento ha sido aplicado');
        precioBruto = (precioDeViaje - (precioDeViaje * dto));
    } else if ((codigo == "") || (codigo != "MIPRIMERVIAJE") || (codigo != "HELLOCARRRY")) {
        alert(`usted no ha presentado un codigo válido`);
        precioBruto = precioDeViaje;
    } else { };
}
//funcion para saber el precio final si es pasajero o conductor
function saberPrecioFinal() {
    if (rol == "pasajero") {
        precioFinal = precioBruto + (precioBruto * comision);
        alert(`Viajar en un Carry le saldrá $` + precioFinal);
    } else if (rol == "conductor") {
        precioFinal = precioBruto - (precioBruto * comision);
        alert(`usted ganará en su viaje completo $` + precioFinal);
    } else { };
}
saberPrecioBruto();
saberPrecioFinal();
// //constructor objeto viaje//
// class Viajes {
//     constructor(origen, destino, km, precio, lugaresDisp, id) {
//         this.origen = origen;
//         this.destino = destino;
//         this.km = km;
//         this.precio = precio;
//         this.lugaresDisp = lugaresDisp;
//         this.id = id;
//     }
// };
// const idViaje = () => { return Math.round(Math.random() * 10000) };
// let viaje = new Viajes(lugarDePartida, lugarDeLlegada, kilometraje, precioDeViaje, lugares, idViaje);
//declaracion de objeto acompañante//

// const Acompañante1 = new UsuarioAcompañante(apellidoA1, nombreA1, dniA1, rolA1);
// const Acompañante2 = new UsuarioAcompañante(apellidoA2, nombreA2, dniA2, rolA2);
// const Acompañante3 = new UsuarioAcompañante(apellidoA3, nombreA3, dniA3, rolA3);
// const Acompañante4 = new UsuarioAcompañante(apellidoA4, nombreA4, dniA4, rolA4);
// //funcion para pedir datos de Acompaniante1
//function PedirDatosAcompañante() {
//     const apellido = prompt(`ingrese su apellido`).toLowerCase();
//     const nombre = prompt(`ingrese su nombre`).toLowerCase();
//     const dni = prompt(`ingrese su dni`);
//     };
// //funcion para pedir datos de Acompaniante2
// function PedirDatosAcompañante2() {
//     const apellidoA2 = prompt(`ingrese su apellido`).toLowerCase();
//     const nombreA2 = prompt(`ingrese su nombre`).toLowerCase();
//     const dniA2 = prompt(`ingrese su dni`);
//     const rolA2 = prompt(`ingrese si su rol es de  "conductor" o "pasajero"`).toLowerCase()
// };
// //funcion para pedir datos de Acompaniante3
// function PedirDatosAcompañante3() {
//     const apellidoA3 = prompt(`ingrese su apellido`).toLowerCase();
//     const nombreA3 = prompt(`ingrese su nombre`).toLowerCase();
//     const dniA3 = prompt(`ingrese su dni`);
//     const rolA3 = prompt(`ingrese si su rol es de  "conductor" o "pasajero"`).toLowerCase()
// };
// //funcion para pedir datos de Acompaniante4
// function PedirDatosAcompañante4() {
//     const apellidoA4 = prompt(`ingrese su apellido`).toLowerCase();
//     const nombreA4 = prompt(`ingrese su nombre`).toLowerCase();
//     const dniA4 = prompt(`ingrese su dni`);
//     const rolA4 = prompt(`ingrese si su rol es de  "conductor" o "pasajero"`).toLowerCase()
// };
// function PedirDatosPorAcompañante (){
// if (acompañantes == 1) {
//     alert('Usted ingresará los datos del unico acompañate');
//     PedirDatosAcompañante1()
// } else if (acompañantes == 2) {
//     alert('Usted ingresará los datos del compañate 1');
//     PedirDatosAcompañante1()
//     alert('Usted ingresará los datos del acompañnate 2');
//     PedirDatosAcompañante2()
// } else if (acompañantes == 3) {
//     alert('Usted ingresará los datos del compañate 1');
//     PedirDatosAcompañante1()
//     alert('Usted ingresará los datos del acompañnate 2');
//     PedirDatosAcompañante2()
//     alert('Usted ingresará los datos del acompañnate 3');
//     PedirDatosAcompañante3()
// } else if (acompañantes == 4) {
//     alert('Usted ingresará los datos del compañate 1');
//     PedirDatosAcompañante1()
//     alert('Usted ingresará los datos del acompañate 2');
//     PedirDatosAcompañante2()
//     alert('Usted ingresará los datos del acompañate 3');
//     PedirDatosAcompañante3()
//     alert('Usted ingresará los datos del acompañate 4');
//     PedirDatosAcompañante4()
// };}
// const pasajerosAcompañantes = [{Acompañante1}, {Acompañante2}, {Acompañante3}, {Acompañante4}];
// console.log(pasajerosAcompañantes); 


// let contenedor = document.getElementById("contenedor");
// let productos = [
//   { id: 1, nombre: "camisa", precio: 1500 },
//   { id: 2, nombre: "pantalon", precio: 2000 },
//   { id: 3, nombre: "gorra", precio: 700 },
//   { id: 4, nombre: "zapato", precio: 100 },
// ];

// let precio = parseInt(prompt("Ingrese el valor minimo"));
// let filtrados = productos.filter(item => item.precio > precio);

// for(const producto of filtrados){
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${producto.id}</h2>
//     <p>Producto: ${producto.nombre}</p>
//     <b>$${producto.precio}</b>
//   `;

//   contenedor.append(div);
// }
//sacvar el km del proyeco anterioir, poner la variable nueva de la resta. y agregar un promp que pregunte si es un viaje personalizado.. pero no se si para esta entrega