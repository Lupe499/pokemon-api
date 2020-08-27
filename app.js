fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(function(data){
        let templateCard = document.querySelector("#template");
        console.log(data)
        data.results.forEach(function(result){
            let clone = templateCard.content.cloneNode(true);
            let pokeName = clone.querySelector(".pokeName");
            pokeName.innerText = result.name;

            document.querySelector(".pokeList").appendChild(clone);
        });
    });


