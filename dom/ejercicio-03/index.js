const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const countriesList = document.createElement("ul");
for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  countriesList.appendChild(li);
}
document.body.appendChild(countriesList);

document.querySelector(".fn-remove-me").remove();

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const printHere = document.querySelector('[data-function="printHere"]');
const carsList = document.createElement("ul");
for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  carsList.appendChild(li);
}
printHere.appendChild(carsList);

const countriesWithImages = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const item of countriesWithImages) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h4");
  title.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.imgUrl;
  img.alt = item.title;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Eliminar";
  removeButton.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(removeButton);
  document.body.appendChild(card);
}

const removeLastButton = document.createElement("button");
removeLastButton.textContent = "Eliminar el último";
removeLastButton.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});
document.body.insertBefore(removeLastButton, document.querySelector(".card"));
