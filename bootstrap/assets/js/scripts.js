
console.log('Mensajes por consola')




let name = "Domingo";
let surname = "Uribe"
let age = 43;
let sport = "Rayuela Corta"

const myData = {
    name: "Domingo",
    surname: "Uribe",
    age: 43,
    sport: "running"
}


// prompt("Hola" + "" + name + " " + surname + "Tienes" + age + "y juegas a la" + sport)

// prompt(`Hola ${name}. Tienes ${age} y juegas ${sport}`)

let nameCaptured = prompt("Bienvenido. Ingresa tu nombre");
alert('Bienvenido' + " " + nameCaptured)
let surnameCaptured = prompt('Ingresa tu apellido')
alert('Bien, señor' + " " + surnameCaptured + ". " + "prosigamos")
let ageCaptured = prompt('Indica tu edad')
alert('Entonces, bienvenido' + " " + nameCaptured + " " + surnameCaptured + ". " + "Tienes" + " " + ageCaptured + " " + "años")
