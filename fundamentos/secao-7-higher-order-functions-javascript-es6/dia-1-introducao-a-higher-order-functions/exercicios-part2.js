const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const expectedResult = 'Stephen King';
const authorBornIn1947 = (array) => {
   const objAuthor = array.find((element) => element.author.birthYear === 1947);
    return Object.values(objAuthor).find((author) => author.name === expectedResult )
}

console.log(authorBornIn1947(books));



// Retorne o nome do livro com menor número de caracteres (menor nome).
const expectedResult2 = 'Duna';
const smallerName = (array) => {
  let nameBook;
    array.forEach((element, index) => {
        if (element.name.length <= expectedResult2.length) { nameBook = element.name }
    })
  return nameBook;
}

console.log(smallerName(books));

// Encontre o primeiro livro cujo nome possua 26 caracteres.
const expectedResult3 = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  const getNamedBook = (array) => array.find((element) => element.name.length === 26);
  

  console.log(getNamedBook(books));


// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

const expectedResult4 = false;

const everyoneWasBornOnSecXX = (array) => 
array
    .every((book) => 
      book.author.birthYear > 1901 
      && book.author.birthYear < 2001);


console.log(everyoneWasBornOnSecXX(books));

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedResult5 = true;

const someBookWasReleaseOnThe80s = (array) => 
array
    .some((book) => 
      book.releaseYear >= 1980 
      && book.releaseYear <= 1989);

console.log((someBookWasReleaseOnThe80s(books)));

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const expectedResult6 = false;

const authorUnique = (array) => {
    return array.every((book) => 
               !array.some((bookSome) => 
                  (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique(books));