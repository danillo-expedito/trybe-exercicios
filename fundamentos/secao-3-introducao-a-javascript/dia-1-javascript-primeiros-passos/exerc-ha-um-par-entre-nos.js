// exercício 1

const num1 = 7;
const num2 = 13;
const num3 = 22;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}


//exercício 2

const num4 = 12;
const num5 = 17;
const num6 = 30;

if (num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}


// exercício 3

const valorCusto = 66
const imposto = valorCusto * 0.20;
const valorVenda = (valorCusto + imposto) * 2.5;
let lucro;
let qtdVendas = 1000;

if (valorCusto > 0 && valorVenda > valorCusto + imposto) {
    console.log(lucro = (valorVenda - (valorCusto + imposto)) * qtdVendas);
} else {
    console.log("Erro, não obtivemos lucro");
}


// exercício 4

const salarioBruto = 5130.40;
let impostoINSS;
let salarioBase;
let impostoIR;
let salarioLiquido;

if (salarioBruto < 1556.94) {
    console.log(salarioBase = (salarioBruto -(salarioBruto *(impostoINSS = 0.08))));
} else if (salarioBruto > 1556.95 && salarioBruto < 2594.92) {
    console.log(salarioBase = (salarioBruto -(salarioBruto *(impostoINSS = 0.09))));
} else if (salarioBruto > 2594,93 && salarioBruto < 5189.82) {
    console.log(salarioBase = (salarioBruto -(salarioBruto *(impostoINSS = 0.11))));
} else if (salarioBruto > 5189.82) {
    console.log(salarioBase = (salarioBruto -(salarioBruto *(impostoINSS = 570,88))));
}

if (salarioBase < 1903.98) {
    console.log(salarioLiquido = salarioBase - (impostoIR = 0));
} else if (salarioBase > 1903.99 && salarioBase < 2826.65) {
    console.log(salarioLiquido = salarioBase - (impostoIR = salarioBase * 0.075 - 142.80));
} else if (salarioBase > 2826.66 && salarioBase < 3751.05) {
    console.log(salarioLiquido = salarioBase - (impostoIR = salarioBase * 0.15 - 354.80));
} else if (salarioBase > 3751.06 && salarioBase < 4664.68) {
    console.log(salarioLiquido = salarioBase - (impostoIR = salarioBase * 0.225 - 636.13));
} else if (salarioBase > 4664.68) {
    console.log(salarioLiquido = salarioBase - (impostoIR = salarioBase * 0.275 - 869.36));
}


