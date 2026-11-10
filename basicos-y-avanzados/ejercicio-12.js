const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(list) {
  const uniqueList = [];

  for (const item of list) {
    if (!uniqueList.includes(item)) {
      uniqueList.push(item);
    }
  }

  return uniqueList;
}

console.log(removeDuplicates(duplicates));
