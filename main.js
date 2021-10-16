
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

alert("Hola! Bienvenido, estamos en el mes de " + meses[09] +"! ya podes agregar nuevos Gastos!");


const cuentas =  [
{  id: 1,  producto: "Agua", precio: 300 },
{  id: 2,  producto: "Internet", precio: 2800 },
{  id: 3,  producto: "Energia"  , precio: 250},
{  id: 4,  producto: "Celular" , precio: 1700}];

const cuentasBaratas = cuentas.filter(cuentas => cuentas.precio < 1000); 
console.log(cuentasBaratas);


function calcularGasto() {
    let gasto =  parseInt(prompt("Cantidad de gastos que desea sumar: "));
    let vetor = new Array(gasto);

    // recorriendo el array
    for(let count=0; count<gasto; count++)
    vetor[count] = parseFloat( prompt("Valor del Gasto $" + ":") )
    
    // Somando todos los elementos
    let soma = vetor.reduce((v, g) => v + g,0);
    
    document.querySelector("#result").innerHTML = `
        <h2>Cantidad de Gastos sumados: ${gasto}</h2>
        <h2>Total: $${soma}</h2>`;
} 

function agregarGasto() {
alert("Ops! Esta funcion todavia no esta funcionando!")
return
} //voy agregar en la proxima entrega cuando sea posible usar eventos y DOM

