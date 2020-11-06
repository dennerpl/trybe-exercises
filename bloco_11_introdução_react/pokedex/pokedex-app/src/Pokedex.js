import React from 'react';
import Pokemon from './Pokemon';
import informations from './data';

const pokemonsList = informations;

class Pokedex extends React.Component {
    render() {
        return (pokemonsList.map((pokemonData) => {
            return (            <div>
                <Pokemon pokemons={pokemonData} />
                </div>)
        }))
    }
};

export default Pokedex;