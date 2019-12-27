function makeNumber(numberString) {
  if (numberString) {
    let valueStringOutput = '';
    for (const symbol of numberString) {
      if (!isNaN(+symbol)) {
        valueStringOutput += symbol;
      }
    }
    return valueStringOutput;
  }
}

function countNumbers(numberString) {
  if (numberString) {
    console.log(numberString);
    const numberString = Array.from(makeNumber(numberString)).sort();
    console.log(numberString);
    
    let output = {};
    for (let number of numberString) {
      if (!Object.prototype.hasOwnProperty.call(output, `'${number}'`)) {
        Object.defineProperty(output, `'${number}'`, {
          writable: true,
          value: 1
        });
      } else {
        Object.defineProperty(output, `'${number}'`, {
          value: (output[`'${number}'`] + 1)
        });
      }
    }
    return output ;
  } else if (numberString === '') {
    return new Object();
  }
}

countNumbers();

