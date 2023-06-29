import React from "react"
import { Link } from "react-router-dom"
import "../../styles/landing.css"

export const Landing = () => {
  return (
    <div className="container mt-5 scale-in-center">
      <h1 className="text-center m-5 scale-in-center">
        Welcome to the PokéDex{" "}
      </h1>
      <h1 className="text-center m-5 scale-in-center">
        Please register to save your favorite Pokémons!
      </h1>

      <div className="container">
        <div className="row d-flex flex-lg-row justify-content-around">
          <Link
            to="/pokemon"
            className="bg-success-subtle col-3 m-1 p-1 text-center"
          >
            <h2>see all pokemon</h2>
          </Link>

          <Link
            to="/register"
            className="bg-success-subtle col-3 m-1 p-1 text-center"
          >
            <h2>register</h2>{" "}
          </Link>
        </div>
      </div>
    </div>
  )
}


