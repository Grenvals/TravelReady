function getMin() {
  const arbitraryNumber = [...arguments];
  let smallValue = arbitraryNumber[0];
  
  for (let i = 1; i < arbitraryNumber.length; i++) {
    if (arbitraryNumber[i] < smallValue) {
      smallValue = arbitraryNumber[i];
    }
  }
  return smallValue;
}
getMin();