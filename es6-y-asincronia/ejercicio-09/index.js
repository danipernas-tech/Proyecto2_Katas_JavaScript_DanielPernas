const randomImage = document.querySelector(".random-image");

const getRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 151) + 1;

  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomId);

    if (!response.ok) {
      throw new Error("Error " + response.status);
    }

    const pokemon = await response.json();

    randomImage.src = pokemon.sprites.other["official-artwork"].front_default;
    randomImage.alt = pokemon.name;
  } catch (error) {
    console.error("No se ha podido cargar el Pokémon:", error);
  }
};

getRandomPokemon();
