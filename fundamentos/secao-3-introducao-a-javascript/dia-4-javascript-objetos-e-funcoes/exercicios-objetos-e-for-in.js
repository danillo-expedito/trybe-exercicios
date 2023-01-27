// exercício 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log("Bem vinda, " + info.personagem);

info['recorrente'] = 'Sim';

console.log(info);

for (let keys in info) {
    console.log(keys)
}

for (let keys in info) {
    console.log(keys + ":" + ' ' + info[keys]);
}

let infoSecond = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}


console.log(info.personagem + ' e ' + infoSecond.personagem);
console.log(info.origem + ' e ' + infoSecond.origem);
console.log(info.nota + ' e ' + infoSecond.nota);

   if (info.recorrente === 'Sim' && infoSecond.recorrente === 'Sim') {
     console.log("Ambos recorrentes");
   } else if (info.recorrente === 'Sim' && infoSecond.recorrente !== 'Sim') {
    console.log("Apenas a " + info.personagem + " é recorrente");
   } else if (info.recorrente !== 'Sim' && infoSecond.recorrente === 'Sim') {
    console.log("Apenas o " + infoSecond.personagem + " é recorrent");
   } else {
    console.log("Nenhum dos personagens é recorrente");
   }
