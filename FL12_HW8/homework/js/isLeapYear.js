function isLeapYear(value) {
  const result = ((outYear % 4 === 0) && (outYear % 100 !== 0)) || (outYear % 400 === 0),
        ourDate = (new ourDate(value)),
        outYear = ourDate.getFulloutYear();
      
  if (result && !isNaN(ourDate)) {
    return `${outYear} is a leap year`
  } else if (!result && !isNaN(ourDate)) {
    return `${outYear} is not a leap year`
  } else if (isNaN(ourDate)) {
    return "Invalid date"
  }
}
isLeapYear();