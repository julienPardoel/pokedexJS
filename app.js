const grid = document.getElementById("grid");

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((data) => {
    const results = data.results;
    // console.log(results);
    results.forEach((pokemon, index) => {
      // item
      const ceil = document.createElement("div");
      ceil.classList.add("item");
      const pokemonNumber = ++index;

      //   number
      const number = document.createElement("div");
      number.classList.add("number");
      number.innerText = `#${pokemonNumber}`;

      //   img
      const img = document.createElement("img");
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

      //   name
      const name = document.createElement("div");
      const pokemonName = pokemon.name;
      name.innerText = pokemonName;

      //   newItem
      grid.appendChild(ceil);
      ceil.appendChild(number);
      ceil.appendChild(img);
      ceil.appendChild(name);
    });
  });
