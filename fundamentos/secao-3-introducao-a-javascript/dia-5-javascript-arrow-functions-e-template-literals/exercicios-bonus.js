// exercício 1 
const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    return frase.split('x').join(nome);
}

let firstName = 'Danillo';
console.log(substituaX(firstName));


// exercício 2

const minhasSkills = (substituaX) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let phrase = `${substituaX} Minhas três principais habilidades são:
    ${skills[0]};
    ${skills[1]};
    ${skills[2]};`
    return phrase;
}

console.log(minhasSkills(substituaX(firstName)));