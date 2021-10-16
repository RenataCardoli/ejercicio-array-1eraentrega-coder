
class Usuario {

    constructor(nombre) {
    this.nombre = nombre;
        }

    saludar() {
    alert(`Hola! ${this.nombre}, Bienvenida!`);
    }

}
const nUsuario = new Usuario('Renata Cardoso');
nUsuario.saludar();

/*
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

alert("Bienvenido, estamos en el mes de " + meses[09] +"! ya podes agregar nuevos Gastos!");*/

function calcularGasto() {
    let gasto =  parseInt(prompt("Cantidad de gastos que desea sumar: "));
    let vector = new Array(gasto);

    // recorriendo el array
    for(let count=0; count<gasto; count++)
    vector[count] = parseFloat( prompt("Valor del Gasto $" + ":") )
    
    // Somando todos los elementos
    let soma = vector.reduce((v, g) => v + g,0);
    
    document.querySelector("#result").innerHTML = `
        <h2>Cantidad de Gastos sumados: ${gasto}</h2>
        <h2>Total: $${soma}</h2>`;
} 

//Incluida la funcion agregarGasto() ordenando las cuentas por nombre para usar el method sort: https://www.w3schools.com/js/js_array_sort.asp

function agregarGasto() {
    let nombrePrompt = 4,
    nombre         = [ ];

while( nombrePrompt-- ) {
    nombre.push( prompt('Insira el nombre del Gasto, ej: "Agua"') );
}

nombre.sort( xNombre );
document.querySelector("#msg").innerHTML = `
<h2>Agregaste las cuentas a seguir, ordenamos por orden alfabético: ${nombre}</h2>`;

function xNombre( a, z ) {
    return a.localeCompare( z ); //Comparacion de string con el metodo localeCompare()
}
} 

//class

/*
class Gastos {
    constructor(ano, mes, dia, tipo, descripcion, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descripcion = descripcion
        this.valor = valor
    }
}

function registrarGasto() {

	const gastos = new Gastos(
	gastos.push(Gastos)
	)
    
}
*/

