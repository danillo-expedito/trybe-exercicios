// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

let sum = 0;

for (index = 1; index <= 50; index += 1) {
    sum += index;
}
console.log(sum);


//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let cont = []

for (index = 2; index <= 150; index += 1) {
    if (index % 3 === 0) {
        cont.push(index)
    }
}

console.log(cont);

if (cont.length === 50) {
    console.log("Only authorized people can read this message.")
}


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "papel";
let player2 = "pedra";

if (player1 === "pedra" && player2 === "tesoura" || player1 === "tesoura" && player2 === "papel" ||
player1 === "papel" && player2 === "pedra") {
    console.log("Player 1 won");
} else if (player2 === "pedra" && player1 === "tesoura" || player2 === "tesoura" && player1 === "papel" ||
player2 === "papel" && player1 === "pedra") {
    console.log("Player 2 won");
} else {
    console.log("A Ties");
}


//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idadeDaPessoa = 22;

 const maiorIdade = (idadeDaPessoa >= 18)
 ? 'A pessoa é maior de idade'
 : 'A pessoa é menor de idade'

 console.log(maiorIdade)

// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let carolzita = 26;
let flavio = 34;
let noel = 49;

if (carolzita < flavio && carolzita < noel) {
    console.log("carolzita é a mais nova");
} else if (flavio < noel && flavio < carolzita) {
    console.log("flavio é o mais novo");
} else {
    console.log("noel é o mais novo");
}

