document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(data => {
            const pokemonList = document.getElementById('pokemonList');
            pokemonList.innerHTML = ''; // Limpiar lista anterior

            data.results.forEach((pokemon, index) => {
                const pokemonDiv = document.createElement('div');
                pokemonDiv.classList.add('pokemon');
                pokemonDiv.innerHTML = `
                    <h3>${index + 1}. ${pokemon.name}</h3>
                    <a href="${pokemon.url}" target="_blank">${pokemon.url}</a>
                `;
                pokemonList.appendChild(pokemonDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
