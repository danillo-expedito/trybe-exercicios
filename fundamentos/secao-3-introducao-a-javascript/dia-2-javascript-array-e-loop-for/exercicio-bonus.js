// exercício 1 - ordena em ordem crescente

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let position;

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

//   console.log(numbers);


  // exercício 2 - ordena em ordem decrescente

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let position;

// for (let index = 1; index < numbers.length; index += 1) {
//     for(let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (numbers[index] > numbers [secondIndex]) {
//             position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }
// }

// console.log(numbers);


// exercício 3 - multiplicar array

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbersMulti = [];

// for (let index = 0; index < numbers.length; index += 1) {
//     if (index + 1 < numbers.length) {
//     numbersMulti.push(numbers[index] * numbers[index + 1])
//     } else {
//         numbersMulti.push(numbers[index] * 2)
//     }

// } 

// console.log(numbersMulti);