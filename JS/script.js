// pedir nombre, edad
let suma = 0;

const infoFamilia = []

class Familiar{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = parseInt(edad);
    }
}

function acumuladorTotal() {
    suma = suma + edad;
}

function resultado(a, b) {
    return a / b
}
function construirFamiliar() {
    nombre = prompt("Ingresa el nombre de tu familiar")
    edad = parseInt(prompt("Ingresa la edad de tu familiar"))

    return new Familiar(nombre, edad);
}



alert("Calculemos el promedio de edad de tu familia")

let cant = parseInt(prompt("Ingresa la cantidad de personas que conforman tu familia"))

for (let i = 0; i < cant; i++) {
    infoFamilia.push(new construirFamiliar());
    acumuladorTotal();
    console.log(suma);
}
console.log(infoFamilia);

alert(`Y el promedio de edad de tu familia es de ${resultado(suma, cant)} y en total suman ${suma} años`)
console.log(`El promedio de edad es ${resultado(suma, cant)}`);