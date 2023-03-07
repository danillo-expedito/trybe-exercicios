// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Manga', 'Kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Leite em pó', 'Calda de morango'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));