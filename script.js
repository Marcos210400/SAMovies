document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("header-video");
    const toggleSoundButton = document.getElementById("toggle-sound");

    toggleSoundButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            toggleSoundButton.textContent = "🔇";
        } else {
            video.muted = true;
            toggleSoundButton.textContent = "🔊";
        }
    });

    const watchNowButton = document.getElementById("watch-now");

    watchNowButton.addEventListener("click", function() {
        // Lógica para redirigir al usuario a la película o serie, etc.
        alert("Redirigiendo al usuario...");
    });
});

/*Buscador de peliculas */
const movies = [
    { title: "El Padrino", year: 1972 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "Interestelar", year: 2014 },
    { title: "La La Land", year: 2016 },
    // Agregar más
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

function searchMovies(query) {
    resultsContainer.innerHTML = '';
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    filteredMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `<h2>${movie.title} (${movie.year})</h2>`;
        resultsContainer.appendChild(movieElement);
    });
}

searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim();
    if (query.length > 0) {
        searchMovies(query);
    } else {
        resultsContainer.innerHTML = '';
    }
});

