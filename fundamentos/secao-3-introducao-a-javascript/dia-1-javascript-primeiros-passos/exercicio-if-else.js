// exercício 1

const num1 = 20;
const num2 = 34;

if (num1 > num2) {
    console.log("O num1 " + "(" + num1 + ")" + " é o maior número.");
} else {
    console.log("O num2 " + "(" + num2 + ")" + " é o maior número.");
}


// exercício 2

const num3 = 32;
const num4 = 23;
const num5 = 30;

if (num3 > num4 && num3 > num5) {
    console.log("O num3 " + "(" + num3 + ")" + " é o maior número.");
} else if (num4 > num3 && num4 > num5) {
    console.log("O num4 " + "(" + num4 + ")" + " é o maior número.");
} else {
    console.log("O num5 " + "(" + num5 + ")" + " é o maior número.");
}


// exercício 3

const loveIsReal = true;

if (loveIsReal === true) {
    console.log("Positive");
} else if (loveIsReal === false) {
    console.log("Negative");
} else {
    console.log("zero");
}


// exercício 4

const angulo1 = 70;
const angulo2 = 55;
const angulo3 = 55;

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else if (angulo1 <=0 || angulo2 <= 0 || angulo3 <= 0) {
    console.log("Ângulo inválido");   
} else if (angulo1 + angulo2 + angulo3 !== 180) {
    console.log(false);
} else {
    console.log("Erro inesperado, tente realocar as informações");
}


// exercício 5

let porcentagem = 86;
let nota;

if (porcentagem >= 90 && porcentagem < 100) {
    console.log(nota = "A");
} else if (porcentagem >= 80 && porcentagem < 90) {
    console.log(nota = "B");
} else if (porcentagem >= 70 && porcentagem < 80) {
    console.log(nota = "C");
} else if (porcentagem >= 60 && porcentagem < 70) {
    console.log(nota = "D");
} else if (porcentagem >= 50 && porcentagem < 60) {
    console.log(nota = "E");
} else if (porcentagem < 50 && porcentagem > 0) {
    console.log(nota = "F");
} else if (porcentagem > 100 || porcentagem < 0) {
    console.log("Erro, tente corrigir a nota")
} else {
    console.log("Erro inesperado");
}









