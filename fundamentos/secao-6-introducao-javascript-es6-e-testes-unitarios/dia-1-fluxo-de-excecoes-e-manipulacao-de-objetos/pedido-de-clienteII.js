const clients = [
    {
      name: 'João da Silva',
      age: 28,
      email: 'joao.silva@gmail.com',
      phone: '(11) 5555-5555',
      address: {
        street: 'Rua dos Lírios',
        number: 123,
        neighborhood: 'Jardim Primavera',
        city: 'São Paulo',
        state: 'SP',
        cep: '01234-567',
      },
    },
    {
      name: 'Maria Souza',
      age: 35,
      email: 'maria.souza@hotmail.com',
      address: {
        street: 'Rua dos Cravos',
        number: 456,
        neighborhood: 'Copacabana',
        city: 'Rio de Janeiro',
        state: 'RJ',
        cep: '12345-678',
      },
    },
    {
      name: 'Pedro Oliveira',
      age: 42,
      email: 'pedro.oliveira@gmail.com',
      address: {
        street: 'Rua das Margaridas',
        number: 789,
        neighborhood: 'Boa Viagem',
        city: 'Recife',
        state: 'PE',
        cep: '23456-789',
      },
    },
    {
      name: 'Ana Santos',
      age: 25,
      email: 'ana.santos@gmail.com',
      phone: '(71) 5555-5555',
      address: {
        street: 'Rua dos Girassóis',
        number: 1011,
        neighborhood: 'Barra',
        city: 'Salvador',
        state: 'BA',
        cep: '34567-890',
      },
    },
    {
      name: 'Luiz Costa',
      age: 32,
      email: 'luiz.costa@hotmail.com',
      address: {
        street: 'Rua das Acácias',
        number: 1213,
        neighborhood: 'Centro',
        city: 'Belo Horizonte',
        state: 'MG',
        cep: '45678-901',
      },
    },
    {
      name: 'Isabela Almeida',
      age: 37,
      email: 'isabela.almeida@gmail.com',
      phone: '(21) 5555-5555',
      address: {
        street: 'Rua das Hortênsias',
        number: 1415,
        neighborhood: 'Botafogo',
        city: 'Rio de Janeiro',
        state: 'RJ',
        cep: '56789-012',
      },
    },
    {
      name: 'Rafael Ferreira',
      age: 29,
      email: 'rafael.ferreira@hotmail.com',
      address: {
        street: 'Rua das Orquídeas',
        number: 1617,
        neighborhood: 'Pinheiros',
        city: 'São Paulo',
        state: 'SP',
        cep: '67890-123',
      },
    },
  ];
  
  const findPersonByName = (nome) => {
    const selectedPerson = clients
      .find((person) => person.name === nome);

    if (!selectedPerson) { throw new Error('Pessoa não encontrada, tente novamente') };

    const { name, address } = selectedPerson;
    const { street, number, neighborhood, city, state, cep} = address;

    return `Destinatário: ${name}. Endereço: ${street}, ${number}, ${neighborhood}, ${
   city}, ${state}. CEP: ${cep}`;
  };
  
  const findPersonByPosition = (position) => {
    if (!clients[position]) { throw new Error('Posição inválida, tente novamente') };
    const { name, email } = clients[position];

    return `Cliente: ${name}. email: ${email}.`
  };
  
  const findPeopleByState = (state) => {
    const findByState = clients
    .filter((person) => person.address.state === state);
    
    if (!findByState.length) { throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro') };
    const personsByState = findByState.map((person) => person.name);
    
    return personsByState; 
  };

  console.log(findPeopleByState('SP'));