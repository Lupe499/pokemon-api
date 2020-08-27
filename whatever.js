let url = new URLSearchParams(window.location.search);

if (url.has("id")) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${url.get("id")}`)
    .then(res => res.json())
    .then(function(data) {
        console.log(data)
        let Abilities = document.querySelector(".abilities");
        Abilities.innerText = data.abilities[0].ability.name;
    });
}

/* 
.then(function(data){
    let templateCard = document.querySelector("#template");
    //console.log(data)
    data.results.forEach(function(result){
        let array = result.url.split("/");
        //console.log(array);
        let id = array[array.length - 2];
        //console.log(id);
        let clone = templateCard.content.cloneNode(true);
        let pokeName = clone.querySelector(".pokeName");
        pokeName.innerText = result.name;
        clone.querySelector(".pokeName").href = `/character-sheet.html?id=${id}`;
        document.querySelector(".pokeList").appendChild(clone);
    });
}); */