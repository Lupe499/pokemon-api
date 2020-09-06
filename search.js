let url = new URLSearchParams(window.location.search);

if (url.get("keyword")) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
    .then(res => res.json())
    .then(function(data) {
        let results = data.results;
        let matches = results.filter(function(result) {
            return result.name.includes(url.get("keyword").toLocaleLowerCase());

        });
        let templateCard = document.querySelector("#template");
            matches.forEach(function(match){
            let array = match.url.split("/");
            //console.log(array);
            let id = array[array.length - 2];

            let clone = templateCard.content.cloneNode(true);
            let pokeName = clone.querySelector(".pokeName");

            pokeName.innerText = match.name;
            clone.querySelector(".pokeName").href = `/character-sheet.html?id=${id}`;
            document.querySelector(".pokeList").appendChild(clone);
        });
    });
}