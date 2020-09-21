
let url = new URLSearchParams(window.location.search);

let offset = url.get("offset") ? url.get("offset") : 0;
let prevOffset, nextOffset;
let nextLink = document.querySelector(".nextLink");
let prevLink = document.querySelector(".prevLink");

let spinner = document.querySelector(".spinner");

fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
    .then(res => res.json())
    .then(function(data){
        spinner.remove();
        let maxOffset = data.count - (data.count % 20);

        nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 20;
        prevOffset = offset <= 0 ? 0 : parseInt(offset) - 20;
        nextLink.href = `?offset=${nextOffset}`;
        prevLink.href = `?offset=${prevOffset}`;

    


    /* if(offset >= maxOffset) {
        offset = maxOffset
    }else{
        offset = parseInt(offset) + 20;
    } */
    
    

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


