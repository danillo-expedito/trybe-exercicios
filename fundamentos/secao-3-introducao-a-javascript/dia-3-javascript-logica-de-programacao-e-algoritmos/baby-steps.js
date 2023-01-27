// Adicionar o array;
// Criar uma variável com valor 0;
// Criar um loop que percorre o array;
// Incrementar a variável com o valor correspondente a cada loop;
// Criar um if com a condição de a variável ser maior que 15;
// Caso a variável obedeça à condição:
// Imprimir a variável
// Caso não obedeça à condição:
// Imprimir a mensagem “valor menor que 16”.


let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (index = 0; index < fruits.length; index += 1) {
    sum += fruits[index];
}

if (sum > 15) {
   console.log(sum);
} else {
   console.log("valor menor que 16");
}

