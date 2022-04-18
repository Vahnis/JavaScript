//alert("Hola mundo") //Esto genera una alerta, una pantalla que se abre sobre la ventana, y que tiene un botón de aceptar

let alumno = "Fede" //creo una variable llamada alumno, cuyo valor es Fede. puedo crear sólo la variable con let alumno = ""

alumno = "Fede"

let nota = "8"
console.log("El nombre del alumno es: " + alumno + " " + nota) //Esto me permite hacer que en la consola, al inspeccionar, aparezca un mensaje. Concateno el string con el valor de la variable

const entidad = "Gobierno Ciudad" //Esto hace una constante, que nadie va a cambiar.

let nombreAlumno = "camelCase"

let user = "Juan Carlos"

let _usuario = "Vahnis"

let $user = "Roberto"

let NombreApellido = "Mario"

let nombre_apellido = "Sanke case" //No se pueden usar números, ni sumas/restas, ni palabras reservadas para el nombre de las variables

// String = Palabras
let str1 = "String con comillas dobles"
let str2 = 'String con comillas simples'
let str3 = `String con backticks`
let str4 = `${str1} y ${str2}` //Puedo concatenar sin necesidad de hacer todo lo otro de ponerlo abajo con diferentes cosas.
console.log (str1 + " y " + str2) // lo tengo que poner entre paréntesis
console.log (str4)

//Number
let num1 = 2
let num2 = 3.14 //No distingue entre float, long or int. No debo usar comillas para que no lo tome como letras

//Operaciones básicas
console.log(num1 + num2)
let suma = num1 + num2
let resta = num1 - num2
let mult = num1 * num2
let div = num1 / num2

console.log("La suma es: " + suma)
console.log("La resta es: " + resta)
console.log("La multiplicación es: " + mult)
console.log("La división es: " + div)

let num3 = parseInt (prompt("Ingrese el primer número"))
let num4 = parseFloat (prompt("Ingrese el segundo número")) // El parseInt me convierte a lo que ingrese en un número entero, si no, lo deja como un string. Si uso el parseFloat lo hace número decimal

let sumaInput = num3 + num4
console.log("La suma ingresada es: " + sumaInput)