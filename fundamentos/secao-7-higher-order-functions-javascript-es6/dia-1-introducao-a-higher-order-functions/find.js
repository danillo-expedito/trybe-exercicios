// exercicio 1
const numbers = [19, 21, 30, 3, 45, 22, 15];
// numbers.find((number) => number / 15 === 0);

console.log(numbers.find((number) => number % 3 === 0 && number % 5 === 0));


// exercicio 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const count = names.find((nome) => nome.length === 5);
console.log(count);

// exercicio 3
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];

  const verificaId = musicas.find((musica) => musica.id === '31031685');
  console.log(verificaId);   