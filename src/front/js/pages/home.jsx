import React, { useEffect, useState } from "react";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css"

export const Home = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState(0) 
  const limit = 20

  useEffect(() => {
    const fetchPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
        currentPage * limit
      }`
      const response = await fetch(url)
      const data = await response.json()
      const newPokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url)
          const pokemonData = await pokemonResponse.json()
          return {
            ...pokemon,
            imageUrl: pokemonData.sprites.front_default,
            types: pokemonData.types.map((type) => type.type.name),
          }
        })
      )
      setPokemon(newPokemonData)
    }

    fetchPokemon()
  }, [currentPage])

  return (
    <div className="container">
      <h1 className="text-center m-3">PokéDex</h1>
      <div className="row">
        <div className="col-3">Filters</div>
        <div className="col-9 d-flex flex-column align-items-center ">
          {" "}
          <div className="row">
            {pokemon.map((poke, index) => (
              <Card key={index} pokemon={poke} />
            ))}
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center mt-3 mb-3">
        {" "}
        <button
          className="btn btn-success-subtle "
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-success-subtle "
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
};
