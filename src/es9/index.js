//En esta forma se puede extraer el dato que no necesitas y mostrar lo que si

const obj = {
  name: 'oscar',
  age: 32,
  country: 'MX'
};

let { name, ...all} = obj;
console.log(name, all);


//De esta forma podemos traer los datos de obj a obj1 con ... y mezclar los dos

const obj = {
  name: 'oscar',
  age: 32
};

const obj1 = {
  ...obj,
  country: 'MX'
};

console.log(obj1)


// Promise.finally

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? resolve('Hello World')
    : reject(new Error('Test Error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo')) //Esto muestra lo que necesitemos cuando la petición ya finalizo

//Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //Elemento que va a tener que va a contener
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day)