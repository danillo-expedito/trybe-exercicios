// exercício 1
const imprimeIdade = () => {
    for(let idade = 30; idade <= 40; idade += 1) {
        console.log(`Idade dentro do for: ${idade}`)
    }
}
imprimeIdade()


// exercício 2
  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = 'Luna';
  pessoa.idade = '19';

  // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);


// exercício 3
let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);


// exercício 4 
const firstName = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${firstName} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é = ${soma(a,b)}`);


// exercício 5 - to arrow function
// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

const numeroAleatorio = () => Math.random();

console.log(numeroAleatorio());


// exercício 6 - to arrow function
// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

const hello = (nome) => `Olá, ${nome}!`;
let nome = 'Ivan';

console.log(hello(nome));


// exercício 7 - to arrow function
// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome1 = 'Ivan';
let sobrenome1 = 'Pires';

console.log(nomeCompleto(nome1, sobrenome1));


// exercício 8 - to ternary operator
// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

let speed = 90;

const speedCar = (speed) => speed >= 120 
? 'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida'

console.log(speedCar(speed));