function newFuncion(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}

// es6
function newFuncion2(name = 'Oscar', age = 32, country= 'MX'){
  console.log(name, age, country);
}

newFuncion2(); //Si no le paso parametros el dejara por defecto los que estan en la función
newFuncion2('Fernando', '27', 'Colombia');

//anterior forma de concatenar string
let hello = 'Hello'; //Se declaran las variables
let world = 'World';
let epicPhrase = hello + ' ' + world; //Concateno por medio de +
console.log(epicPhrase); //Imprimo en consola

//Nueva forma de concatenar string
//Se utilizan las comillas francesas `` y el código a mostras con ${}
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

//****Multilinea en ecmaScritp 6 ****//

//Forma antigua
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "Otra frase epica que necesitamos."

//Forma nueva en es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

//** Desestructuración de elementos **//

//Forma antigua de realizarlo
let person = {
  'name': 'oscar',
  'age' : 32,
  'country': 'MX'
}

console.log(person.name, person.age, person.country);

//Forma nueva en ES6

//se declara la variable de los datos a desestructurar = a nombre del objeto
let {name, age} = person;
console.log(name, age);

//** Operador de propagación **//

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

//Por medio de "..." puedo traer todos los datos necesarios de otras variables
let education = ['David', ...team1, ...team2];

console.log(education);

//** ¿Qué es Let? **//

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet)
}

console.log(globalVar)


//** Parametros en objetos **//

let name = 'Oscar';
let age = 32;

//es5
obj = {name: name, age: age};

//es6
obj2 = {name, age};
console.log(obj2);

//** Arrow function, funciones de flecha **//

const names = [
  {name: 'Oscar', age: 32},
  {name: 'Yesica', age: 27}
]

//Forma antigua
let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

//Forma de una función tipo arrow con parametros
const listOfNames3 = (name, age, country) => {
  //código para listOfName3
}

//Arrow function con un solo parametro, no necesita los parentesis
const listOfNames4 = name => {

}

//Arrow function con return
const square = num => num * num;

//** Promesas **//

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve('Hey!')
    }else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hola')) //Puedo agregar varios then en caso de necesitarlo
  .catch(error => console.log(error));

class calculadora {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
     this.valueA = valueA;
     this.valueB = valueB;
     return this.valueA + this.valueB;
  }
}

const calc = new calculadora();
console.log(calc.sum(2 , 3));

//** Generator **//

function* helloWorld() {
  if(true) {
    yield 'Hello';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);