const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// exercício 1
const addNightShift = (object, key, value) => object[key] = value;
addNightShift(lesson2, 'turno', 'noite')

console.log(lesson2);

// exercício 2
const listKeys = (object) => Object.keys(object);

console.log(listKeys(lesson1));

// exercício 3
const sizeOfObject = (object) => {
    const arrayOf = Object.keys(object);
    return arrayOf.length
}

console.log(sizeOfObject(lesson1));

// exercício 4
const showValues = (object) => Object.values(object);

// console.log(showValues(lesson3));

// exercício 5
const allLessons = {lesson1, lesson2, lesson3};

console.log(allLessons);

// exercício 6

const totalDeAlunos = (object) => {
    let sum = 0;
    const lessons = Object.values(object);
    lessons.forEach((element) => sum += element.numeroEstudantes);
    return sum;
}

console.log(totalDeAlunos(allLessons));

// exercício 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (object, posição) => {
    const value = Object.values(object);
    return value[posição];
}

console.log(getValueByNumber(lesson1, 0));

// exercício 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave.

const verifyPair = (object, key, value) => {
    const entries = Object.entries(object);
    let isEqual = false;
    entries.forEach((element) => {
        if (element[0] === key && element[1] === value) isEqual = true;
    })
    return isEqual;
}

console.log(verifyPair(lesson3, 'professor', 'Carlos'));    

// exercício bônus 1 - Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;
const frequencyInMathClass = (object) => {
   let sum = 0;
   const lesson = Object.values(object);
   lesson.forEach((element) => {
    if (element.materia === 'Matemática') sum += element.numeroEstudantes;
   })
   return sum;
}

console.log(frequencyInMathClass(allLessons));

// exercício bônus 2 - Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
const createReport = (object, teacher) => {
    const lesson = Object.values(object);
    const classes = [];
    let sumOfStudents = 0;
    lesson.forEach((element) => {
        if (element.professor === teacher) { 
            classes.push(element.materia); 
            sumOfStudents += element.numeroEstudantes
        }
    })

  return {
    professor: teacher,
    aulas: classes,
    estudantes: sumOfStudents,
  }
}


console.log(createReport(allLessons, 'Carlos'));