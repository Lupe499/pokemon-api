let offset = 0;

fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
    .then(res => res.json())
    .then(function(data){
        let templateCard = document.querySelector("#template");
        console.log(data)
        data.results.forEach(function(result){
            let array = result.url.split("/");
            //console.log(array);
            let id = array[array.length - 2];

            let clone = templateCard.content.cloneNode(true);
            let pokeName = clone.querySelector(".pokeName");

            pokeName.innerText = result.name;
            clone.querySelector(".pokeName").href = `/character-sheet.html?id=${id}`;
            document.querySelector(".pokeList").appendChild(clone);
        });
    });


