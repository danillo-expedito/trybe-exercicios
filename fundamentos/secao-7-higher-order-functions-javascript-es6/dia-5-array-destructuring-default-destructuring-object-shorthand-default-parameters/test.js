const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
//   const { nationality } = person;
// console.log(nationality);

// default destructuring

const { nationality = 'Brazilian'} = person;

console.log(nationality);

// default destructuring in array
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0


// default parameters - Pré-definição de um parâmetro
// caso ele não seja preenchido na chamada da função;
const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!
