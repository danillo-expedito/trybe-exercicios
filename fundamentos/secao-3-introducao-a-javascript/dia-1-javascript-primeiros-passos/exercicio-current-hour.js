const currentHour = 16;
let message;


if (currentHour >= 22) {
    console.log(message = "Não deveríamos comer nada, é hora de dormir");
} else if (currentHour >= 18 && currentHour < 22) {
    console.log(message = "Rango da noite, vamos jantar :D"); 
} else if (currentHour >= 14 && currentHour < 18) {
    console.log(message = "Vamos fazer um bolo para o café da tarde?");
} else if (currentHour >= 11 && currentHour < 14) {
    console.log(message = "Hora do almoço!!");
} else {
    console.log(message = "Hmmm, cheiro de café recém-passado");
}
