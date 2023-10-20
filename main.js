async function handleData() {
    await fetch("./data.json")
        .then(response => response.json())
        .then(json => renderPokemons(json))
}

function renderPokemons(json) {

    json.map(pokemon => {
        const card = pokemons.appendChild(document.createElement("div"))
        card.id = "card"
        const img = card.appendChild(document.createElement("img"))
        const name = card.appendChild(document.createElement("h2"))
        const type = card.appendChild(document.createElement("h3"))

        img.id = "pokemon-picture"

        img.src = pokemon.picture;

        img.width = "200";

        img.alt = "This is pokemon " + pokemon.name

        name.innerText = pokemon.name

        img.id = "pokemon-name"

        type.innerText = pokemon.type

    })



}

handleData()