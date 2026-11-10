const API_URL = "https://thronesapi.com/api/v2/Characters";

const characterList = document.querySelector("#character-list");
const characterImage = document.querySelector(".character-image");

const getCharacters = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error " + response.status);
    }

    const characters = await response.json();
    printCharacters(characters);
  } catch (error) {
    console.error("No se han podido cargar los personajes:", error);
  }
};

const printCharacters = (characters) => {
  for (const character of characters) {
    const option = document.createElement("option");
    option.textContent = character.fullName;
    option.value = character.imageUrl;
    characterList.appendChild(option);
  }

  showCharacter();
};

const showCharacter = () => {
  const selectedOption = characterList.options[characterList.selectedIndex];
  characterImage.src = selectedOption.value;
  characterImage.alt = selectedOption.textContent;
};

characterList.addEventListener("change", showCharacter);

getCharacters();
