// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter(driver => {
    return (driver.toLowerCase() === name.toLowerCase())
  })
}

const fuzzyMatch = (drivers, letters) => {
  return drivers.filter(driver => {
    let i = 0;
    let matchStatus = true;
    do {
      if (driver[i] !== letters[i]) {
        matchStatus = false;
      }
      i++;
    }
    while (i < letters.length && matchStatus === true);
    return matchStatus;
  })
}

const matchName = (driverObj, string) => {
  return driverObj.filter(driver => {
    return driver.name === string;
  })
}