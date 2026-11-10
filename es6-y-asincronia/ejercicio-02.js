const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };
console.log(toyCopy);

const pointsList2 = [54, 87, 99, 65, 32];
const allPoints = [...pointsList, ...pointsList2];
console.log(allPoints);

const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
const toyMerged = { ...toy, ...toyUpdate };
console.log(toyMerged);

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const colorsWithoutPosition2 = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsWithoutPosition2);
console.log(colors);
