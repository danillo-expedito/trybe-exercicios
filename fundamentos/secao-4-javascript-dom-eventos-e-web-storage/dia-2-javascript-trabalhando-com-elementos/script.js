// Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById("elementoOndeVoceEsta"));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
console.log(document.getElementById("elementoOndeVoceEsta").parentNode.style.color = 'green')

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
console.log(document.getElementById("primeiroFilhoDoFilho").innerText = 'Barabam');

// Acesse o primeiroFilho a partir de pai.
console.log(document.getElementById("pai").firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.
console.log(document.getElementById("pai").firstElementChild.nextElementSibling.nextElementSibling);

// Crie um irmão para elementoOndeVoceEsta.
let newSibling = document.createElement('section');
newSibling.innerHTML = 'Olá, sou o novo irmão';
let dad = document.getElementById("pai");
dad.append(newSibling);

// Crie um filho para elementoOndeVoceEsta.
let where = document.getElementById("elementoOndeVoceEsta")
let newChild = document.createElement('p');
newChild.innerText = 'ultimo filho do elementoOndeVoceEsta';
where.appendChild(newChild);

// Crie um filho para primeiroFilhoDoFilho.
let firstChild = document.getElementById("primeiroFilhoDoFilho");
let newborn = document.createElement('article');
newborn.innerText = 'Primeiro Neto';
firstChild.appendChild(newborn);

// A partir desse filho criado, acesse terceiroFilho.
const artigo = document.getElementsByTagName('article');
artigo[0].parentNode.parentNode.nextElementSibling;