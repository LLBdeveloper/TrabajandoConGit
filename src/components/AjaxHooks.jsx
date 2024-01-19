import { useState, useEffect } from 'react';
import axios from 'axios';

function AjaxHooks() {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            setPokemonData(response.data);
        } catch (error) {
            console.error('Error fetching Pokémon data:', error.message);
        }
        };

        fetchPokemonData();
    }, []);

    return (
        <div>
        <h1>Pokémon Information</h1>
        {pokemonData ? (
            <div>
            <h2>{pokemonData.name}</h2>
            <h3>{pokemonData.id}</h3>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
            </div>
        ) : (
            <p>Loading Pokémon data...</p>
            
        )}
        </div>
    );
}

export default AjaxHooks;
0