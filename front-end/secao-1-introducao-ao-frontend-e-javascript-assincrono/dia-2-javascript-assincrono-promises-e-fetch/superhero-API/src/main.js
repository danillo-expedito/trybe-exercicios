import './style.css';
import swal from 'sweetalert2';

const btn = document.querySelector('#button');
const cardName = document.querySelector('#heroName');
const cardImage = document.querySelector('#heroImage');


btn.addEventListener('click', (event) => {
    event.preventDefault();

    const randomId = Math.round((Math.random() * 800) + 1);

    const SUPERHERO_API = `https://superheroapi.com/api.php/935191664328133/${randomId}`;

    return fetch(SUPERHERO_API)
      .then(response => response.json())
      .then(data => {
        const { name, image } = data;

        cardName.innerHTML = name;
        cardImage.src = image.url;
      })
      .catch(error => swal.fire({
        title: 'Hero not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
      }));
        
});

