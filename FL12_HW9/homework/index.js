function convert() {
  let resultValue = [];
  for (const elements of arguments) {
    if (typeof elements === 'string') {
      resultValue.push(parseInt(elements));
    } else {
      resultValue.push(`${elements}`);
    }
  }
  return resultValue;
}

function executeforEach(inputValue, modificator) {
  for (let resultValue of inputValue) {
    modificator(resultValue);
  }
}

function mapArray(inputValue, mappers) {
  let finalArrey = [];
  function toNumb(elementsValue) {
    if (typeof elementsValue === 'string') {
      elementsValue = parseInt(elementsValue);
    }
    finalArrey.push(mappers(elementsValue));
  }
  executeforEach(inputValue, toNumb);
  return finalArrey;
}

function filterArray(array, filter) {
  let resArrey = [];
  function checker(elementArr) {
    if (filter(elementArr)) {
      resArrey.push(elementArr);
    }
  }
  executeforEach(array, checker);
  return resArrey;
}

function flipOver(inputValue) {
  let outputValue = '';
  for (let i = inputValue.length - 1; i >= 0; i--) {
    outputValue += inputValue[i];
  }
  return outputValue;
}

function makeListFromRange(rangeValue) {
  let resultValue = [];
  for (let i = rangeValue[0]; i <= rangeValue[1]; i++) {
    resultValue.push(i);
  }
  return resultValue;
}

function getArrayOfKeys(inputArr, key) {
  let resultValue = [];
  function returnKey(elements) {
    resultValue.push(elements[key]);
  }
  executeforEach(inputArr, returnKey);
  return resultValue;
}

function substitute(numbers) {
  const minValues = 30;
  function compareNumber(inputMinNumbers) {
    if (inputMinNumbers < minValues) {
      inputMinNumbers = '*';
    }
    return inputMinNumbers;
  }
  return mapArray(numbers, compareNumber);
}

function getPastDay(defaultDate, daysAgo) {
  const dayMiliseconds = 86400000;
  const defaultMiliseconds = defaultDate.valueOf();
  const searchedDate = new Date(defaultMiliseconds - dayMiliseconds * daysAgo);
  return searchedDate.getDate();
}

function formatDate(input) {
  const formaterValue = 10;
  const date = `${input.getFullYear()}/${input.getMonth() + 1}/${input.getDate()} `;
  const hours = `${input.getHours() < formaterValue ? '0' + input.getHours() : input.getHours()}:`;
  const minutes = `${input.getMinutes() < formaterValue ? '0' + input.getMinutes() : input.getMinutes()}`;
  return date + hours + minutes;
}