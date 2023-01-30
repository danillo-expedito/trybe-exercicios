// exercício 1
const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const convertRoman = (alg) => {
   const leng = alg.length;
   let sum = romanNumerals[alg[leng - 1]]
   let atual = romanNumerals[alg[leng - 1]]

   for (let index = 2; index < leng; index += 1) {
   const prox = romanNumerals[alg[leng - index]];
   if (atual <= prox) {
    sum += prox;
   } else {
    sum -= prox;
   }

   atual = prox;
 }
  return sum;
}

console.log(convertRoman(''))


// exercício 2
let vector = [[1,2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (vector) => {
    let evenArray = [];
   for (let index = 0; index < vector.length; index += 1) {
    const number = vector[index];
    
    for (let indexSecond = 0; indexSecond < number.length; indexSecond += 1){
       const numberSecond = number[indexSecond];
       if (numberSecond % 2 === 0) {
        evenArray.push(numberSecond)
       }
    }
    }
    return evenArray
   }

console.log(arrayOfNumbers(vector))
  





// exercício 3
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

const fruitsInBasket = {}

for (let index = 0; index < basket.length; index += 1) {
    let fruit = basket[index];
    if (!fruitsInBasket[fruit]) {
      fruitsInBasket[fruit] = 0;
    }
      fruitsInBasket[fruit] += 1;
}
    const fruitsArray = [];

  for (fruit in fruitsInBasket) {
    let text = `${fruitsInBasket[fruit]} ${fruit}`
    if (fruitsInBasket[fruit] > 1) text += 's';
    fruitsArray.push(text)
  }



console.log(`Sua cesta possui: ${fruitsArray.join(', ')}.`);


// exercício 4

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

let residentsBlockTwo = moradores.blocoDois;
let lastResidentBlockTwo =moradores.blocoDois[moradores.blocoDois.length - 1];

console.log(`O morador do bloco 2 de nome ${lastResidentBlockTwo.nome}
${lastResidentBlockTwo.sobrenome} mora no ${lastResidentBlockTwo.andar} ° andar, apartamento ${lastResidentBlockTwo.apartamento}`);

for (let morador = 0; morador < moradores.blocoUm.length; morador += 1) {
    console.log(`${moradores.blocoUm[morador].nome} ${moradores.blocoUm[morador].sobrenome}`)
}

for (let moradorBloco2 = 0; moradorBloco2 < moradores.blocoDois.length; moradorBloco2 += 1) {
    console.log(`${moradores.blocoDois[moradorBloco2].nome} ${moradores.blocoDois[moradorBloco2].sobrenome}`)
}

