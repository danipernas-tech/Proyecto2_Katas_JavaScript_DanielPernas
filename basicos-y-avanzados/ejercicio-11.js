const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let total = 0;

  for (const element of list) {
    if (typeof element === "number") {
      total += element;
    } else {
      total += element.length;
    }
  }

  return total;
}

console.log(averageWord(mixedElements));
