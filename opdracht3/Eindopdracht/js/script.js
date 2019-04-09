//script.js
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var main = document.querySelector("main"); //Alles zie je in de main
console.log(main);

// In en uitklappen van de film informatie

//var laatZien = document.querySelector("Cover");;
//
//function uitklappen() {
//    var sort = document.querySelector("p");;
//    if (sort.style.display === "none") {
//        sort.style.display = "block";
//    } else {
//        sort.style.display = "none";
//    }
//}
//
//laatZien.addEventListener('click', uitklappen);


function laadnu() {

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () { // Dit is een listener
        console.log(request.response);
        showMovies(request.response);
    } //end onload
} //end function laadnu

function showMovies(moviejson) {
    var movies = moviejson;
    console.log("hoe lang ben jij?", moviejson.length) // Er zijn 6 films
    for (var i = 0; i < movies.length; i++) { // Een loop waar de sections doorheen gaan.
        console.log("node", i);
        console.log("title", movies[i].title); // Je ziet de title nu in de console
        console.log("plot", movies[i].plot);
        console.log("cover", movies[i].cover);

        console.log('gelukt!');
        var mySection = document.createElement('section'); // elke film heeft een eigen section

        var filmCover = document.createElement('img');
        filmCover.src = movies[i].cover; // Nu krijg je de img te zien inplaats van de link > Je kan de src ook class of id noemen

        var filmTitle = document.createElement('h2'); // De titel komt in een h2 tezien > Zie console in de browser
        filmTitle.textContent = movies[i].title;

        var filmPlot = document.createElement('p');
        filmPlot.textContent = movies[i].plot;

        mySection.appendChild(filmCover);
        mySection.appendChild(filmTitle);
        mySection.appendChild(filmPlot);
        main.appendChild(mySection);

    } //end for loop
} //end function showMovies

var button = document.querySelector("button");

button.onclick = function () {
    laadnu()
}



// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
