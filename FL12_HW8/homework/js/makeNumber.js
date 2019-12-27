
function makeNumber(inputString) {
  if (inputString) {
    let resultValue = '';
    for (const symbol of inputString) {
      if (!isNaN(+symbol)) {
        resultValue += symbol;
      }
    }
    return resultValue;
  }
}
makeNumber();