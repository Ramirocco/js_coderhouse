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


const precioKm = 100;
const dto = 0.10;
const plus = 0.5;
const comision = 0.05;
let lugares = 0;
let apellido;
let nombre
let dni;
let rol;
let acompañado;
let acompañantes = 0
let usuarioAcompañante;
let apellidoAcompañante;
let nombreAcompañante;
let dniAcompañante;
let rolAcompañante;
class Usuario {
    constructor(suApellido, suNombre, suDni, suRol) {
        this.suApellido = suApellido;
        this.suNombre = suNombre;
        this.suDni = suDni;
        this.suRol = suRol;
    }
};
class UsuarioAcompañante {
    constructor(suApellido, suNombre, suDni, suRol) {
        this.suApellido = suApellido;
        this.suNombre = suNombre;
        this.suDni = suDni;
        this.suRol = suRol;
    }
};
function PedirDatos() {
    apellido = prompt(`ingrese su apellido`).toLowerCase();
    nombre = prompt(`ingrese su nombre`).toLowerCase();
    dni = prompt(`ingrese su dni`);
    rol = prompt(`ingrese si su rol es de  "conductor" o "pasajero"`).toLowerCase()
    if (rol == "conductor") {
        lugares = prompt(`ingrese lugares disponibles en su vehiculo`)
    }
    else if (rol === "pasajero") {
        acompañado = prompt(`ingrese "si" si viaja acompañado o "no" si viaja solo`).toLowerCase();
        if (acompañado === "si") {
            acompañantes = Number(prompt(`con cuantas personas viaja?`), lugares = acompañantes); //aca iria el ciclo pidiendo datos de acompa;antes//
        } else if (acompañado === "no") {lugares = 1 }
    } else {
        alert("ingrese rol valido")
    };
}
function PedirDatosAcompañante() {
    apellido = prompt(`ingrese su apellido`).toLowerCase();
    nombre = prompt(`ingrese su nombre`).toLowerCase();
    dni = prompt(`ingrese su dni`);
    rol = prompt(`ingrese si su rol es de  "conductor" o "pasajero"`).toLowerCase()
};
PedirDatos();
let usuario = new Usuario(apellido, nombre, dni, rol);
alert(`BIENVENIDO ` + `usted es ` + usuario.suApellido + ` ` + usuario.suNombre + `su dni es ` + usuario.suDni + ` su rol es ` + usuario.suRol);
let km = Number(prompt(`ingrese la distancia de su viaje`));
let precioDeViaje = km * lugares * precioKm;
let precioBruto = 0;
let precioFinal = 0;
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
//viajes:// 
let lugarDePartida;
let lugarDeLlegada;
function PedirTrayecto() {
    lugarDePartida = prompt("ingrese su origen del viaje: BUE, MDQ, MDZ, BRC, CDB").toLowerCase();
    lugarDeLlegada = prompt("ingrese su destino del viaje: BUE, MDQ, MDZ, BRC, CDB").toLowerCase();
};
PedirTrayecto();
if (((lugarDePartida) || (lugarDeLlegada) != "bue") || ((lugarDePartida) || (lugarDeLlegada) != "mdq") || ((lugarDePartida) || (lugarDeLlegada) != "mdz") || ((lugarDePartida) || (lugarDeLlegada) != "brc") || ((lugarDePartida) || (lugarDeLlegada) != "cdb")) { alert("ingrese locacion valida") }
else { alert("su trayecto fue validado") }
const kmbue = 0;
const kmmdq = 500;
const kmmdz = 1200;
const kmbrc = 1400;
const kmcdb = 800;
let kilometraje = 0;
let kmOrigen = 0;
let kmDestino = 0;
if (lugarDePartida = "bue") { kmOrigen = kmbue }
else if (lugarDePartida = "mdq") { kmOrigen = kmmdq }
else if (lugarDePartida = "mdz") { kmOrigen = kmmdz }
else if (lugarDePartida = "brc") { kmOrigen = kmbrc }
else if (lugarDePartida = "cdb") { kmOrigen = kmcdb };
if (lugarDeLlegada = "bue") { kmDestino = kmbue }
else if (lugarDeLlegada = "mdq") { kmDestino = kmmdq }
else if (lugarDeLlegada = "mdz") { kmDestino = kmmdz }
else if (lugarDeLlegada = "brc") { kmDestino = kmbrc }
else if (lugarDeLlegada = "cdb") { kmDestino = kmcdb }
function calculadoraKm() { kilometraje = kmOrigen - kmDestino };
calculadoraKm();
alert(`su distacia del viaje es de` + kilometraje + `km`);
class Viajes {
    constructor(origen, destino, km, precio, lugaresDisp, id) {
        this.origen = origen;
        this.destino = destino;
        this.km = km;
        this.precio = precio;
        this.lugaresDisp = lugaresDisp;
        this.id = id;
    }
};
const idViaje = () => { return Math.round(Math.random() * 10000) };
let viaje = new Viajes(lugarDePartida, lugarDeLlegada, calculadoraKm(), precioDeViaje, lugares, idViaje);
for (let i = 0; i = acompañantes; i++){
    PedirDatosAcompañante();
    usuarioAcompañante = new UsuarioAcompañante(apellidoAcompañante, nombreAcompañante, dniAcompañante, rolAcompañante);
};
//sacvar el km del proyeco anterioir, poner la variable nueva de la resta. y agregar un promp que pregunte si es un viaje personalizado.. pero no se si para esta entrega//