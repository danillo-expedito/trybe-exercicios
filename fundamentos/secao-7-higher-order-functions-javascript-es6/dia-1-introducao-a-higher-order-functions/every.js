// exemplo 1
const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false
  
  console.log(verifyGrades);


// exercicio 1 
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// exercicio 2
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
const verifyAges = (arr, age) => 
   arr.every((element) => element.age >= age)

  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));