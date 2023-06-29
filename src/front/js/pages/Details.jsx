import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../../styles/details.css"

export const Details = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      setPokemon(data)
      // console.log(data)
    }

    fetchPokemon()
  }, [id])

  if (!pokemon) {
    return <div>Loading...</div>
  }

  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="container text-center">
        <h1>{pokemon.name.toUpperCase()}</h1>
      </div>
      <div className="container d-flex justify-content-center">
        <img
          className="poke-details"
          src={pokemon.sprites.front_default}
          alt=""
        />
      </div>
    </div>
  )
}
