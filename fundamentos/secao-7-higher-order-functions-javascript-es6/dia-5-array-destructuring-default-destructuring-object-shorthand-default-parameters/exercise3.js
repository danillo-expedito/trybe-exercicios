// escreva greet abaixo
const greet = (nome, mensagem) => {
  if (mensagem !== undefined) { return `${mensagem} ${nome}` };
  return `${nome}`;
}


// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'