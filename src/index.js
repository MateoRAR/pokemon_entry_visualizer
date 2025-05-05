import { PokemonCardList } from "./components";
import axios from 'axios';
import './styles/styles.css';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=493';

axios.get(URL)
  .then(response => {
    console.log('Datos recibidos:');
    const pokemonList = response.data.results;
    console.log(response.data);
    document.body.appendChild(PokemonCardList(pokemonList));
  })
  .catch(error => {
    console.error('Error al hacer la solicitud:', error.message);
});

