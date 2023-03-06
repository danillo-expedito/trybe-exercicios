const pessoaEstudante = {};

const firstName = 'Danillo';
const lastName = 'Santos';
const email = 'dnashy@hotmail.com';
const tel = '(11) 93957-0588';
const github = 'danillo-expedito';
const linkedIn = '';

const addKeys = (objeto, key, valor) => {
    objeto[key] = valor;
}

let newKey = 'firstName';
addKeys(pessoaEstudante, newKey, firstName);

newKey = 'lastName';
addKeys(pessoaEstudante, newKey, lastName);

newKey = 'email';
addKeys(pessoaEstudante, newKey, email);

newKey = 'tel';
addKeys(pessoaEstudante, newKey, tel);

newKey = 'github';
addKeys(pessoaEstudante, newKey, github);

console.log(pessoaEstudante);