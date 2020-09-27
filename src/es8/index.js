
//** Object.entries el cual permise retornar el nombre y la clave de nuestra matriz **//

const data = {
  frontend: 'Fernando',
  backend: 'Isabel',
  design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);

//Con object.entries tambieb podemos saber de cuantos elementos disponemos en la matriz

console.log(entries.length)

//**Object.values devuelve los valores del obejeto a un arreglo **//

const data = {
  frontend: 'Fernando',
  backend: 'Isabel',
  design: 'Ana'
}

const value = Object.values(data);
console.log(value);

//**Async await **//

//Esta es una de las formas de realizar Async Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello world'), 3000)
      : reject((new Error('Test Error')))
  })
}

const helloAsync = async() => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

//Otra forma, y una de las más usadas

const anotherFunction = async() => {
  try{
    const hello = await helloWorld();
    console.log(hello);
  }catch(error) {
    console.log(error);
  }
}

anotherFunction();