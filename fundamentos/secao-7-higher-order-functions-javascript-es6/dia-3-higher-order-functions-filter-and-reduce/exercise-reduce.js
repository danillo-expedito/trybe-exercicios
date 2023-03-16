// Fonte: <https://restcountries.com/v2/all>
const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

// Calcule a quantidade total da população de todos os países.
const expectedResult = 120797034;

const getPopulation = () => {
  const sumOfAllPopulations = countries
  .reduce((acc, curr) =>
    acc + curr.population, 0);

  return sumOfAllPopulations;
};

console.log(getPopulation());

// Calcule a área total de todos os países.
const expectedResult1 = 4311757;

const getTotalArea = () => {
  const sumOfAllAreas = countries
  .reduce((acc, curr) => acc + curr.area, 0);

  return sumOfAllAreas;
}

console.log(getTotalArea());

// Encontre o país com o maior nome.
const expectedResult2 = {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  }
  const longestName = () => {
    const biggestName = countries
    .reduce((acc, curr) => (acc.name.length > curr.name.length) ? acc : curr);

    return biggestName;
  }

  console.log(longestName());

//  Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
const expectedResult3 = 20;

const letterArray = names.join('').toLocaleLowerCase().split('');
  const countA = () => {
    return letterArray.reduce((acc, curr) => {
        return curr == 'a' ? acc + 1 : acc;
    }, 0)
  }

  console.log(countA());

// Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:
// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const expectedResult4 = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];
const studentAverage = () => {
  return averageGrades = students.map((student, i) => ({
    name: student,
    average: (grades[i].reduce((acc, curr) => acc + curr, 0) / grades[i].length),
  }));
};

console.log(studentAverage());