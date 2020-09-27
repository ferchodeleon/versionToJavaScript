
//flat

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());

//flat map, permite mapear el elemento, asignar la función para retornar el resultado

let array = [1,2,3,4,5];
console.log(array.flatMap(value=> [value, value * 2]));

//trimStart permite eliminar los espacios en blanco de un string

let hello = '     helloWorld';
console.log(hello);
console.log(hello.trimStart());

//Tambien tenemos la opción para borrar los espacios en los string al final.

let hello = 'helloWorld     ';
console.log(hello)
console.log(hello.trimEnd())

//try/catch opcional catch be permite pasar de forma opcional el valor de catch

try{

}catch(error){
  error
}

//Ahora no es necesario implementar el parametro error, ya javaScript sabe que es el parametro
try {
  
}catch{
  error
}

//fromEntiEtris el cual trnsforma clave valor en objetos
//resultado del ejemplo: { name: 'oscar', age: 32 }

let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries))

//Obejeto de tipo simbolo el cual nos permite agregar una descripción

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);