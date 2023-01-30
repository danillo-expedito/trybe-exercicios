// exercício 1 
const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    return frase.split('x').join(nome);
}

let firstName = 'Danillo';
console.log(substituaX(firstName));