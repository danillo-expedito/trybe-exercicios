// exercício 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }


// exercício 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }

// console.log(sum);

  
// exercício 3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let media;

// for (let index = 0; index < numbers.length; index += 1) {
//      media = (sum += numbers[index]) / numbers.length;
// }

// console.log(media);


// exercício 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0
// let media;

// for (let index = 0; index < numbers.length; index += 1) {
//      media = (sum += numbers[index]) / numbers.length;
// }
//      if (media > 20) {
//         console.log("valor maior que 20");
//      } else if (media <= 20) {
//         console.log("valor menor ou igual a 20")
//      }

// console.log(media);


// exercício 5 

// let numbers = [5, 2, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero;
 
// valor máximo
// for (let index = 0; index < numbers.length; index += 1) {
//     Math.max.apply(Math, numbers);
// }

// console.log(Math.max.apply(Math, numbers));


// valor mínimo
// for (let index = 0; index < numbers.length; index += 1) {
//     Math.min.apply(Math, numbers);
// }

// console.log(Math.min.apply(Math, numbers));


// exercício 6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let oddNumbers = [];
// let result = 0;

// for (index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         result += 1;
//         oddNumbers.push(numbers[index]);
//     }
// }

// if (result === 0) {
//   console.log("nenhum valor ímpar encontrado");
// } else {
//   console.log("temos " + result + " números ímpares");
//   console.log(oddNumbers);
// }


// exercício 7

let numbers = []
let divisao = []

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}

console.log(numbers);

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2)
}



