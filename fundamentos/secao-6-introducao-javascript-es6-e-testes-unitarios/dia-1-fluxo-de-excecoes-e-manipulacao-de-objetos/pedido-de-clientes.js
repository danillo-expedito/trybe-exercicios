const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informaçõ es necessárias.
    const infos = Object.values(order);
    return `Olá ${infos[3].delivery.deliveryPerson}, entrega para: ${infos[0]},
    Telefone: ${infos[1]}, R. ${infos[2].street}, Número: ${infos[2].number}, AP: ${infos[2].apartment}`
  };
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    const newAmountOfPayment = order.payment.total = 50;
    const newClient = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const drink = Object.values(order.order.drinks.coke);
    console.log(`Olá ${newClient}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e
    ${drink[0]} é R$ ${newAmountOfPayment},00.`)
  };
  
  orderModifier(order);
