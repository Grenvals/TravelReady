const contMaxRank = {
        '3': 1,
        '2': 2,
        '1': 4
      },
      countDef = 8,
      countIncr = 4,
      resultMod= 2,
      resultDef= 100,
      countMin = 0;
     
let count = 0,
    resultRandom = 100,
    countMax = 8,
    inGame = true,
    player = true,
    result = 0,
    resultBot = 0,
    hasRes;

if (confirm('Do you want to play a game?')) {
  while (inGame) {
    while (player) {
      count = Math.floor(Math.random() * (countMax + 1));
      for (let i = 3; i >= 1; i--) {
        resultBot = prompt(`
      Choose a roulette pocket number from 0 to ${countMax}
      Attempts left: ${i}
      Total count: ${result}$
      Possible count on current attempt: ${resultRandom}$
      `, '0');
        let isInvalid = !resultBot || isNaN(+resultBot);
        if (!isInvalid && parseInt(resultBot, 10) === count) {
          result += resultRandom;
          hasRes = true;
          resultRandom = resultRandom * contMaxRank[i];
          break;
        }
        resultRandom = resultRandom / resultMod
        hasRes = false;
      }
      if (hasRes) {
        if (confirm(`Congratulation, you won! Your count is: ${result}$. Do you want to continue?`)) {
          countMax += countIncr;
          resultRandom = resultRandom * resultMod
        } else {
          player = false;
        }
      } else {
        player = false;
      }
    }
    alert(`Thank you for your participation. Your count is: ${result}$`);
    if (confirm('Do you want to play again?')) {
      result = 0;
      player = true;
      inGame = true;
      countMax = countDef;
      resultRandom = resultDef;
    } else {
      inGame = false;
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}