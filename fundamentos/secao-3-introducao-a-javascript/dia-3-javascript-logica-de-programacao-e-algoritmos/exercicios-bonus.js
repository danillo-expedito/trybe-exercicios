// exercício 1 

// let num = 5;
// let linha = '';

// for (index = 0; index < num; index += 1) {
//     linha = linha + '*'
// }
// for (index = 0; index < num; index += 1) {
//     console.log(linha)
// }

// exercício 2

// let num = 5;
// let linha = '';
// let simbolo = '*'

// for (let index = 0; index <= num; index += 1) {
//     console.log(linha);
//     linha = linha + simbolo;
// }

// exercício 3 // consulta * prioridade de estudo

// let num = 5;
// let linha = '';
// let simbolo = '*'
// let posicao = num;

// for (let index = 0; index < num; index += 1) {
//     for (indexPosicao = 0; indexPosicao <= num; indexPosicao +=1) {
//         if(indexPosicao < posicao) {
//           linha = linha + ' ';
//         } else {
//            linha = linha + simbolo;
//         }
//     }
//     console.log(linha);
//     linha = '';
//     posicao -= 1;
// }

// exercício 4 // gabarito (por motivos de estudo e compreensão da lógica)

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };


// exercício 5 // gabarito (por motivos de estudo e compreensão da lógica)

// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }


// exercício 6


let divisor = 1;
let num = 17;


for (let index = 2; index <= num; index += 1) {
    if(num % index === 0) divisor += 1;
    
}
    if (divisor === 2) {
      console.log("o número " + num + ' é primo!') 
    } else {
      console.log("o número " + num + ' não é primo!')
    }




