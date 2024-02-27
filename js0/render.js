const h1DOM = document.querySelector('h1');
h1DOM.innerText = '🔙Movies... 👀';

const movies = [
    'Pretendent',
    'A Team',
    'Highlander',
    'Matrix',
    'Walker: Texas Ranger', 
    'Her name Nikita',
    'Shrek',
    'Mario', 
    'Sphere',
]

const ulDOM = document.getElementsByTagName('ul')[0];

let moviesHTML = '';

for (let i = 0; i < movies.length; i++) {
    const movieTitle = movies[i];
    moviesHTML += `<li>${movieTitle}</li>`;
}

ulDOM.innerHTML = moviesHTML;
