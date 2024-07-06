// prompt('Desafío día 11 Notas Finales')
let studentName = prompt('Hola. Por favor indica tu nombre y apellido')
alert('Bienvenido ' + studentName + " " + "A continuación promediaremos tus calificaciones")


let htmlFirstGrade = parseFloat(prompt('Ingresa tu primera nota del módulo HTML'))
let htmlSecondGrade = parseFloat(prompt('Ingresa tu segunda nota del módulo HTML'))
let htmlThirdGrade = parseFloat(prompt('Ingresa tu tercera nota del módulo HTML'))
alert('Gracias. Ahora te pediremos las notas de los siguientes módulos. Atención:')

let cssFirstGrade = parseFloat(prompt('Ingresa tu primera nota del módulo CSS'))
let cssSecondGrade = parseFloat(prompt('Ingresa tu segunda nota del módulo CSS'))
let cssThirdGrade = parseFloat(prompt('Ingresa tu tercera nota del módulo CSS'))

alert('Gracias. Ahora te solicitaremos las notas del úlimo módulo: JavaScript:')

let jsFirstGrade = parseFloat(prompt('Ingresa tu primera nota del módulo javaScript'))
let jsSecondGrade = parseFloat(prompt('Ingresa tu segunda nota del módulo javaScript'))
let jsThirdGrade = parseFloat(prompt('Ingresa tu tercera nota del módulo javaScript'))

alert('¡Bien! A continuación podrás ver en la tabla las notas que ingresaste y el promedio de cada una y la nota final:')

// Variables con los promedios por ramo
let htmlTotal = (htmlFirstGrade + htmlSecondGrade + htmlThirdGrade) / 3
let cssTotal = (cssFirstGrade + cssSecondGrade + cssThirdGrade) / 3
let jsTotal = (jsFirstGrade + jsSecondGrade + jsThirdGrade) / 3

let finalGrade = (htmlTotal + cssTotal + jsTotal) / 3
let finalGradeFormated = finalGrade.toFixed(2)