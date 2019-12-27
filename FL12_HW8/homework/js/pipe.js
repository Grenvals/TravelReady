function addOne(value1) {
  return value1 + 1;
}

function pipe() {
  let inputValue = [...arguments],
      result = inputValue.shift();

  for (let i = 0; i < inputValue.length; i++) {
    console.log('before', result);

    result = addOne(result);
    console.log('after', result);
  }
  return result;
}

pipe();