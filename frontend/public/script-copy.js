const movieCardComponent = function (movieTitle, releaseYear, movieAbout, mainActor){
    return `
        <div class="card">
            <div class="movieTitle">${movieTitle}</div>
            <div class="releaseDate">${releaseYear}</div>
            <div class="movieAbout">${movieAbout}</div>
            <div class="mainActor">${mainActor}</div>
        </div>
    `
}

const movieTitleComponent = `<h1>Movies</h1>`;

const loadEvent = function() {
    const rootElement = document.getElementById("root");
    
    rootElement.insertAdjacentHTML("beforeend", movieTitleComponent)

    for (const movie of movies.cards) {
        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title, movie.sub, movie.text, movie.actor)) 
    }
}

window.addEventListener("load", loadEvent)