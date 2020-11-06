import React from 'react';

class Pokemon extends React.Component {
    render() {
        const {id, name, type, averageWeight, image, moreInfo} = this.props.pokemons;
        return <div className='pokemonContainer'><div className='pokemon'><div>{name}</div><div>{type}</div><div>{averageWeight.value}{averageWeight.measurementUnit}</div></div><div><img src={image}></img></div></div>
    }
}

export default Pokemon;