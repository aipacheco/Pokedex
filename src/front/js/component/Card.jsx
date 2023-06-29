import React from "react"
import { Link } from "react-router-dom"
import "../../styles/card.css"

export const Card = ({ pokemon }) => {
  const { name, url, imageUrl, types } = pokemon
  // console.log(pokemon.url)
  const id = url.replace(/\/+$/, "").split("/").pop()


  return (
    <div className="col-3 col-card">
      <Link to={`/pokemon/${id}`}>
        <div className="card m-3">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body text-center text-fluid">
            <h6 className="card-title">{name.toUpperCase()}</h6>
            <p> {types.join(", ")}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
