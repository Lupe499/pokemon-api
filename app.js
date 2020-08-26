fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(function(results){
        let template = document.querySelector("#template");
        let templateCard = document.querySelector(".templateCard");

        results.forEach(function(results){
            let clone = templateCard.content.cloneNode(true);
            let pokeName = document.querySelector(".pokeName");
            pokeName.innerText = results.name;

        });
    });



/* function getPokeNames() {
    return fetch("https://pokeapi.co/api/v2/pokemon")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        return data.results;
    });
}
 */