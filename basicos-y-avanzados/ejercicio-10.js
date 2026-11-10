const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let total = 0;

  for (const number of numberList) {
    total += number;
  }

  return total / numberList.length;
}

console.log(average(numbers));
