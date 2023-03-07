// rest 
    const countParams = (...args) => {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// --------------------------------------------------------------

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// ---------------------------------------------------------------

// Object destructuring
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']

  const weekDays = [...workDays, ...weekend];

  console.log(weekDays);


// Alterar o nome das propriedades utilizando desestruturação de objetos:
// Sintaxe: { propriedade:nomeVariável } = objeto
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: name1, b: classAssigned, c: subject } = student;
  
  console.log(name1); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática
  
// Valores do objeto como parâmetros de uma função:
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
 
  
// Exercício de fixação

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const userAndJobInfos = {
    ...user,
    ...jobInfos
}
console.log(userAndJobInfos);

const { name, age, nationality } = user;
const { profession, squad, squadInitials } = jobInfos;

const phrase = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}.
I work as ${profession} and my squad is ${squadInitials}-${squad}`;
console.log(phrase);

  


