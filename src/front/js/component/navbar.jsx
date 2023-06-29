import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="navbar p-3 bg-body-tertiary sticky-top">
		  <div className="container-fluid container-nav">
			<a className="navbar-brand" href="/">
			  PokéDex
			</a>
			<button
			  className="navbar-toggler"
			  type="button"
			  data-bs-toggle="offcanvas"
			  data-bs-target="#offcanvasNavbar"
			  aria-controls="offcanvasNavbar"
			  aria-label="Toggle navigation"
			>
			  <span className="navbar-toggler-icon"></span>
			</button>
			<div
			  className="offcanvas offcanvas-end"
			  tabIndex="-1"
			  id="offcanvasNavbar"
			  aria-labelledby="offcanvasNavbarLabel"
			>
			  <div className="offcanvas-header">
				<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
				  Menu
				</h5>
				<button
				  type="button"
				  className="btn-close"
				  data-bs-dismiss="offcanvas"
				  aria-label="Close"
				></button>
			  </div>
			  <div className="offcanvas-body">
				<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
				  <li className="nav-item">
					<a
					  className="nav-link active"
					  aria-current="page"
					  href="/pokemon"
					>
					  Pokémons
					</a>
				  </li>
	
				  <li className="nav-item dropdown">
					<a
					  className="nav-link dropdown-toggle"
					  href="#"
					  role="button"
					  data-bs-toggle="dropdown"
					  aria-expanded="false"
					>
					  Dropdown
					</a>
					<ul className="dropdown-menu">
					  <li>
						<a className="dropdown-item" href="#">
						  Action
						</a>
					  </li>
					  <li>
						<a className="dropdown-item" href="#">
						  Another action
						</a>
					  </li>
					  <li>
						<hr className="dropdown-divider" />
					  </li>
					  <li>
						<a className="dropdown-item" href="#">
						  Something else here
						</a>
					  </li>
					</ul>
				  </li>
				</ul>
			  </div>
			</div>
		  </div>
		</nav>
	  )
};
