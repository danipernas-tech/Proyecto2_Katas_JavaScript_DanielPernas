function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

console.log("Dado de 6 caras:", rollDice(6));
console.log("Dado de 20 caras:", rollDice(20));
console.log("Dado de 100 caras:", rollDice(100));
