// exercício 1

let num = 10;
let sum;

for (let index = num - 1; index >= 1; index -= 1) {
    num = num * index // ou num *= index
}

console.log(num);

// exercício 2

let word = "tryber";
let invert = "";

for (index = word.length - 1; index >= 0; index -= 1) {
    invert = invert + word.charAt(index)
}

console.log(invert);


// exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0]
let menor = array[0]


for (index = 0; index < array.length; index += 1) {
    if (array[index].length > maior.length) {
      maior = array[index]
    }
}

for (index = 0; index < array.length; index += 1) {
    if (array[index].length < menor.length)
      menor = array[index]
}

console.log(maior);
console.log(menor);


// exercício 4 // gabarito (por motivos de estudo e compreensão da lógica)

let maiorNumPrimo = 0;

for (index = 2; index <= 50; index += 1) {
    let numPrimo = true;
    for (let indexDiv = 2; indexDiv < index; indexDiv += 1) {
        if (index % indexDiv === 0) {
            numPrimo = false;
        }
    }
    if (numPrimo) {
        maiorNumPrimo = index;
    }
}

console.log(maiorNumPrimo)






