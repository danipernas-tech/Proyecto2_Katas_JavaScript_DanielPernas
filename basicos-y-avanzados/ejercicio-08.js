const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longest = stringList[0];

  for (const word of stringList) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(findLongestWord(avengers));
