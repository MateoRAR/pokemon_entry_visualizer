import axios from 'axios';

export function Card(){
    let container = document.createElement("div");
    let title = document.createElement("h1");
    let description = document.createElement("p");
    let button = document.createElement("button");
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(button);

    title.innerHTMl = "Card";
    description.innerHTML = "This is a card component";
    button.innerHTML = "Click me";
}

export function CardList(array) {
    array.push({});

    array.forEach((item) => { 
        let card = Card(item);
        document.body.appendChild(card);
    })
}

export function PokemonCard(pokemonData) {
    const card = document.createElement('div');
    card.className = 'card';

    const header = document.createElement('div');
    header.className = 'card-header';

    const title = document.createElement('h3');
    title.textContent = pokemonData.name.toUpperCase();

    const pokedexId = document.createElement('p');
    pokedexId.innerHTML = `<strong>ID:</strong> ${pokemonData.id}`;

    header.appendChild(title);
    header.appendChild(pokedexId);

    const content = document.createElement('div');
    content.className = 'card-content';

    const left = document.createElement('div');
    left.className = 'card-left';

    const img = document.createElement('img');
    img.src = pokemonData.sprites.front_default;
    img.alt = pokemonData.name;

    const img_shiny = document.createElement('img');
    img_shiny.src = pokemonData.sprites.front_shiny;
    img_shiny.alt = pokemonData.name;

    const typeText = document.createElement('p');
    typeText.innerHTML = `<strong>Type:</strong> ${pokemonData.types.map(t => t.type.name).join(', ')}`;

    const abilityText = document.createElement('p');
    abilityText.innerHTML = `<strong>Abilities:</strong> ${pokemonData.abilities.map(a => a.ability.name).join(', ')}`;

    const weightText = document.createElement('p');
    weightText.innerHTML = `<strong>Weight:</strong> ${pokemonData.weight} Kg`;

    left.appendChild(img);
    left.appendChild(img_shiny);
    left.appendChild(typeText);
    left.appendChild(abilityText);
    left.appendChild(weightText);

    const right = document.createElement('div');
    right.className = 'card-right';

    const stats = pokemonData.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join('<br>');
    const statsText = document.createElement('p');
    statsText.innerHTML = `<strong>Stats:</strong><br>${stats}`;

    const totalStats = pokemonData.stats.reduce((acc, stat) => acc + stat.base_stat, 0);
    const totalStatsText = document.createElement('p');
    totalStatsText.innerHTML = `<strong>Total:</strong> ${totalStats}`;

    right.appendChild(statsText);
    right.appendChild(totalStatsText);

    content.appendChild(left);
    content.appendChild(right);

    card.appendChild(header);
    card.appendChild(content);

    return card;
}



export function PokemonCardList(pokemonList) {
    const container = document.createElement('div');
    container.className = 'card-list';
  
    pokemonList.forEach(pokemon => {
        axios.get(pokemon.url)
            .then(response => {
            const data = response.data;
            const card = PokemonCard(data);
            container.appendChild(card);
            })
            .catch(error => console.error('Error fetching Pokémon:', error));
    });

    return container;
}