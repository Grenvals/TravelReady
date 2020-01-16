function Fighter(props) {
  const name = props.name,
        agility = props.agility,
        strength = props.strength,
        maxLifeCount = lifeCount,
        damage = props.damage;
  let lifeCount = props.lifeCount,
      lose = 0,
      passPlayers = 0;

  return {
    getName: () => name,
    getAgility: () => agility,
    getDamage: () => damage,
    getStrength: () => strength,
    getHealth: () => lifeCount,
    attack: fighter => {
      const successLimit = 100;
      const maxSuccess = 1;
      let success = maxSuccess - (agility + strength) / successLimit;
      if (Math.random() <= success) {
        fighter.dealDamage(damage);
        console.log(`${name} makes ${damage} damage to ${fighter.getName()}`);
      } else {
        console.log(`${name} attack missed`);
      }
    },
    logCombatHistory: () => console.log(`Name: ${name}, ` + `passPlayers: ${passPlayers}, ` + `lose: ${lose}`),
    heal: amount => {
      amount + lifeCount <= maxLifeCount ? lifeCount += amount : lifeCount = maxLifeCount;
    },
    dealDamage: amount => {
      lifeCount - amount >= 0 ? lifeCount -= amount : lifeCount = 0;
    },
    addWin: () => passPlayers++,
    addLoss: () => lose++
  };
}

function battle(fighterOne, fighterTwo) {
  if (fighterOne.getHealth() === 0 || fighterTwo.getHealth() === 0) {
    fighterOne.getHealth() === 0 ?
      console.log(`${fighterOne.getName()} is dead and can't fight.`) :
      console.log(`${fighterTwo.getName()} is dead and can't fight.`);
    return;
  }
  while (fighterOne.getHealth() > 0 && fighterTwo.getHealth() > 0) {
    fighterOne.attack(fighterTwo);
    if (fighterTwo.getHealth() > 0) {
      fighterTwo.attack(fighterOne);
      if (fighterOne.getHealth() === 0) {
        fighterOne.addLoss();
        fighterTwo.addWin();
        console.log(`${fighterTwo.getName()} has won!`);
      }
    } else {
      fighterTwo.addLoss();
      fighterOne.addWin();
      console.log(`${fighterOne.getName()} has won!`);
    }
  }
}