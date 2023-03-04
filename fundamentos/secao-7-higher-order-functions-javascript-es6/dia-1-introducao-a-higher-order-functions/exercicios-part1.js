// Exercício 1 - Nova pessoa contratada
const emailGenerator = (fullName) => `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`;


const newEmployees = () => {
    const employees = {
      id1: emailGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: emailGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: emailGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(emailGenerator));

// Exercício 2 - Sorteador de loteria
const luckyNum = () => Math.round(Math.random() * (5 - 1) + 1);

const lottery = (chosenNum, drawnNum) => {
   if (chosenNum === drawnNum) { return `Parabéns, você ganhou!`}

   return `Tente novamente`;
}

console.log(luckyNum())
console.log(lottery(2, luckyNum()));

// Exercício 3 - Corretor automático de exame

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (right, given) => {
    if ( right === given) { return 1 };
    if ( given === 'N.A') { return 0 };
   return -0.5
};

const counterOfPoints = (right, given, compare) => {
    let counter = 0;
    for (let i = 0; i < right.length; i += 1) {
        const compareReturn = compare(right[i], given[i]);
        counter += compareReturn;
    }
    return `Resultado: ${counter} pontos`;
}


console.log(counterOfPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));