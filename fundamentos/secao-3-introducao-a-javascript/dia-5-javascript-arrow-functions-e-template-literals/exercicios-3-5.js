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

console.log(numeroAleatorio())
