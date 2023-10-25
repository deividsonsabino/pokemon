var pokemons = []

async function handleData() {
    await fetch("./data.json")
        .then(response => response.json())
        .then(json => myDexPokemons(json))
}

function cauthPokemons(pokemon) {
    if (pokemon != "") {
        pokemons.push(pokemon)
    }
}

async function myDexPokemons(pokes) {
    console.log(pokes)
    await pokes.map(poke => {
        pokemonsDiv = document.getElementById("pokemons")
        const card = pokemonsDiv.appendChild(document.createElement("div"))
        card.id = poke.name
        card.className = "pokemon-card"
        const img = card.appendChild(document.createElement("img"))
        img.src = poke.picture;

        img.width = "200";

        img.alt = "This is pokemon " + poke.name
        const pokemonName = card.appendChild(document.createElement("h3"))

        pokemonName.innerText = poke.name
        pokemonName.id = poke.name

        const pokemonPrice = card.appendChild(document.createElement("p")).innerText = "preco :" + poke.price + "K"


        var button = card.appendChild(document.createElement("button"))
        button.id = poke.name
        button.innerText = "Vender"

        button.addEventListener("click", () => sellPokemons(poke.name))
    })
}

function sellPokemons(pokemon) {
    var filterPokemons = pokemons.filter(poke => poke != pokemon)
    pokemons = filterPokemons
    var sell = document.getElementById(pokemon)
    sell.innerText = ""


}


handleData()

cauthPokemons("kadabra")
myDexPokemons()