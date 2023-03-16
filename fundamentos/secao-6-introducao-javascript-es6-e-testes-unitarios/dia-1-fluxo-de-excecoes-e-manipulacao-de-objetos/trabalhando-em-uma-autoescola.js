const studentRegister = (name, age) => {
    if (name === undefined || age === undefined) { 
        throw new Error('Todas as informações são necessárias');
    };
    if (name && age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    };

    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  };

  console.log(studentRegister('Lavinia', 19));