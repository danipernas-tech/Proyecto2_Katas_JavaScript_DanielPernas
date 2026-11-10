const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

const divWithP = document.createElement("div");
const pInsideDiv = document.createElement("p");
pInsideDiv.textContent = "Soy una p dentro de un div";
divWithP.appendChild(pInsideDiv);
document.body.appendChild(divWithP);

const divWithSixP = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = "Párrafo " + i;
  divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

const dynamicP = document.createElement("p");
dynamicP.textContent = "Soy dinámico!";
document.body.appendChild(dynamicP);

const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

const nodesToRemove = document.querySelectorAll(".fn-remove-me");
for (const node of nodesToRemove) {
  node.remove();
}

const divs = document.querySelectorAll("div");
const middleP = document.createElement("p");
middleP.textContent = "Voy en medio!";
document.body.insertBefore(middleP, divs[1]);

const insertHereDivs = document.querySelectorAll("div.fn-insert-here");
for (const div of insertHereDivs) {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
}
