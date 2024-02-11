let boton = document.getElementById("ingresar").addEventListener("click", respuestaClick)
function respuestaClick() {
        usuario.innerText = prompt("Ingresa Nombre y Apellido")
    console.log(usuario.innerText)
    total.innerText = Number(prompt("Ingresa el monto a abonar"))
    console.log(total.innerText)
}
let padre = document.getElementById("fecha");
const fecha = ["01/02/2024", "23/01/2024", "20/01/2024", "12/01/2024"];
for (const fechaAgregada of fecha) {
    let li = document.createElement("li");
    li.innerHTML = fechaAgregada
    padre.appendChild(li);
    
}
let padre2 = document.getElementById("descripcion");
const descripcion = ["Aerolíneas ARG", "COTO Web", "Kiosco Furianeta", "Adidas SUC 07"];
for (const descripcionAgregada of descripcion) {
    let li = document.createElement("li");
    li.innerHTML = descripcionAgregada
    padre2.appendChild(li);
    
}
let padre3 = document.getElementById("monto");
const monto = [281684, 34054, 6200, 120871];
for (const montoAgregado of monto) {
    let li = document.createElement("li");
    li.innerHTML = montoAgregado
    padre3.appendChild(li);
    
}
let boton2 = document.getElementById("btn1").addEventListener("click", respuestaClick2)
function respuestaClick2() {
 
        let nuevaFecha = prompt("Ingresa dd/mm/aaaa");
        let li = document.createElement("li");
        li.innerHTML = nuevaFecha;
        padre.appendChild(li);
        
   
        let nuevaDescrip = prompt("Ingresa descripción");
        let li2 = document.createElement("li");
        li2.innerHTML = nuevaDescrip;
        padre2.appendChild(li2);
        

        let nuevoMonto = prompt("Ingresa monto");
        let li3 = document.createElement("li");
        li3.innerHTML = nuevoMonto;
        padre3.appendChild(li3);


        padre2.push(li);
        padre.push(li);
        padre3.push(li);
}

console.log(fecha.length)
console.log(descripcion.length)
console.log(monto.length)
let boton3 = document.getElementById("btn2").addEventListener("click", respuestaClick3)
function respuestaClick3() {
    alert("Ya pagaste!")        
    padre2.remove();
    padre.remove();
    padre3.remove();
    
}
const detalle = [{fecha},{descripcion},{monto}];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaGastos", JSON.stringify(detalle));


