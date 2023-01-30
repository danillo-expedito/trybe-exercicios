// exercício 1
const twenty = 20;
const eight = 8;

// soma
function sum(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

console.log(sum(twenty,eight));

// subtração
function sub(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}

console.log(sub(twenty,eight));

// multiplicação
function mult(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

console.log(mult(twenty,eight));

// divisão
function div(num1, num2) {
    let resultado = num1 / num2;
    return resultado;
}

console.log(div(twenty,eight));

// módulo
function modl(num1, num2) {
    let resultado = num1 % num2;
    return resultado;
}

console.log(modl(twenty,eight));


// exercício 2

const eleven = 11;
const twentyone = 21;

function maior(num1, num2) {
    if (num1 > num2) {
        return "O número " + eleven + " é o maior";
    } else if (num1 < num2) {
        return "O número " + twentyone + " é o maior"
    } else {
        return "Os números são iguais"
    }
}

console.log(maior(eleven, twentyone))


// exercício 3

const twelve = 12;
const one = 1;
const nine = 9;

function maior(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return "O número " + twelve + " é o maior";
    } else if (num2 > num1 && num2 > num3) {
        return "O número " + one + " é o maior"
    } else if (num3 > num1 && num3 > num2) {
        return "O número " + nine + " é o maior";
    } else {
        return "Os números são iguais"
    }
}

console.log(maior(twelve, one, nine))


// exercício 4

function verify(num1) {
    if (num1 > 0) {
        return "positive";
    } else if (num1 < 0) {
        return "negative";
    } else {
        return "zero"
    }
}

console.log(verify(-9));


// exercício 5

const ang1 = 55;
const ang2 = 70;
const ang3 = 55;

function triangle(met1, met2, met3) {
    if (met1 + met2 + met3 === 180) {
        return true;
    } else if (met1 <= 0 || met2 <= 0 || met3 <= 0) {
        return "ângulo inválido."
    } else {
        return false;
    }   
}

console.log(triangle(ang1, ang2, ang3));

