import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=494';

axios.get(URL)
  .then(response => {
    console.log('Datos recibidos:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud:', error.message);
  });
