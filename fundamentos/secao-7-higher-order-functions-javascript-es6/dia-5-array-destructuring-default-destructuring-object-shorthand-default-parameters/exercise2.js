const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([carro, montadora, ano]) => {
    return {
        carro,
        montadora,
        ano,
    }
}

console.log(toObject(chiron));