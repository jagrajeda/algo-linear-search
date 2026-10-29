function linearSearch(searchTerm, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      return i
    } 
  }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  const matchingValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      matchingValues.push(i)
    }
  }
  return matchingValues;
}

module.exports = { linearSearch, globalLinearSearch };
