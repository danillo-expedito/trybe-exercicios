const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math
.floor((Math.random() * ((dragon.strength + 1) - 15)) + 15);

const warriorDamage = () => Math
.floor((Math
    .random() * ((warrior
        .strength * warrior
        .weaponDmg) - warrior.strength) + warrior.strength));

const mageDamage = () => {
  const intelligence = mage.intelligence;
  const damage = Math
  .floor((Math.random() * ((intelligence * 2) - intelligence)) + intelligence);

  return damage;
}   

const mana = mage.mana;
const mageMana = (currMana) => {
    if (currMana > 15) {
      return currMana - 15;
    }
    return 'Não possui mana suficiente';
}

const mageObject = () => ({ damage: mageDamage(), mana: mageMana(mana) })

const gameActions = {
   warriorTurn: (warriorDamage) => {
    const warriorDmg = warriorDamage();
       dragon.healthPoints -= warriorDmg;
       warrior.damage = warriorDmg;
    },

   mageTurn: (mageDamage) => {
    const mageDmg = mageDamage();
      dragon.healthPoints -= mageDmg;
      mage.damage = mageDmg;
      mage.mana = mageMana(mage.mana);
    },

   dragonTurn: (dragonDamage) => {
    const dragonDmg = dragonDamage();
        dragon.damage = dragonDmg;
        warrior.healthPoints -= dragonDmg;
        mage.healthPoints -= dragonDmg;
    },

    results: () => battleMembers,
  };


console.log(gameActions.warriorTurn(warriorDamage));
console.log(gameActions.mageTurn(mageDamage));
console.log(gameActions.dragonTurn(dragonDamage));

console.log(gameActions.results());