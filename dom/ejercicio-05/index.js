const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumsSection = document.querySelector("#discos");
const albumsList = document.createElement("ul");
albumsList.classList.add("albums-list");

for (const album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  albumsList.appendChild(li);
}

albumsSection.appendChild(albumsList);
