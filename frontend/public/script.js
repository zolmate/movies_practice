console.log(movies)

// első lépés: meg kell terveznünk 1 db sör komponenseit
//ha ez nem függvény lenne, hanem sima string, akkor nem lehetne  beletenni változó értékeket paramméterként (name, company, type)
// a függvény paramétereinek (name, company, type) bármilyen nevet használhatunk, csak azt következetesen kell használni
// ${} - template literal
const movieCardComponent = function (movieTitle, releaseYear, movieAbout){
    return `
        <div class="card">
            <div class="movieTitle">${movieTitle}</div>
            <div class="releaseDate">${releaseYear}</div>
            <div class="movieAbout">${movieAbout}</div>
        </div>
    `
}
// ezek a változó nevek (movieTitle, releaseYear, movieAbout) csak a függvény belsejében érvényesek - azon kívül nem tudunk rájuk hivatkozni

const movieTitleComponent = `<h1>Movies</h1>`;
// most a movieTitleComponent néven létrehoztunk egy változót, amit fentebb "határoztunk meg"
// ehelyett az is egy jó megoldás lett volna, ha nem változót hozunk létre argumentumként, hanem a backtick (``) között lévő részt illesztjük be a változó nevének helyére (a rootElement.insertAdjacentHtml beforeend után)

const loadEvent = function() {
    const rootElement = document.getElementById("root");
    console.log(rootElement)
    rootElement.insertAdjacentHTML("beforeend", movieTitleComponent)

    console.log(movies.cards); //a movies-on belül található tömbre (=array), azon belül cardsra hivatkozás
    console.log(movies.logo); //a beers-en belül található

    for (const movie of movies.cards) { 
        //sima for loop
        //iterator (első érték): tetszőleges érték, itt: movie - még "nem létezik"
        //object (of után): movies.cards (elérési útvonal)
        console.log(movie);
        /*console.log(movies.cards[0].title) //mivel a cards egy tömb, az elérési útvonalba kell a [] - a 0 viszont csak az első indexen lévőt írja ki: Mango Bay*/
        //ennek a helyére kreáltuk a "beer" iterátort
        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title, movie.sub, movie.text)) 
    }
}

// Ezzel a ciklussal végiglépkedünk a tömb elemein. Ennek a tömbnek az elérési útvonala a movies nevű változó cards kulcsán lévő tömb. Ezt a folyamatot valahogy el kell nevezni egy "iterátorral", ami bármi lehet. Itt: "movie" (egyesszámban feljebb), amire később hivatkozunk (movie.title, movie.sub, movie.text)


// instertAdjacentHTML: ez egy metódus, 2 dolgot kér: az első egy position string, és egy olyan stringet (argumentumot), amit html kóddá tud konvertálni
// a `` (backtick) utána azért kell, mert többsoros kódot szeretnénk berakni

// for ciklusok (loop):
// van adat és nem kell számolni: "for...of" loop
// nincs adat és el kell számolni X-ig (pl.: a naptárnál a hónapok, napok száma) sima "for" loop -> i++


window.addEventListener("load", loadEvent)
console.log(window)
// oldal betöltődése JS szempontjából: a) a JS létrehoz egy "window" objektumot
// minden JS scriptben benne kell lennie a window.addEventListener("load", loadEvent)-nek
//eseményfigyelő (eventlistener) - 


// Feladat: for és for of ciklusok átnézése
// Extra feladat: ugyanilyen adatstruktúrájú "dolog"
// Új repository-ba ugyanezt próbáljuk megcsinálni - a feladatban mozi filmcímek lesznek