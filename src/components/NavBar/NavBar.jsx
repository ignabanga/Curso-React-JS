import React from "react"
import CardWidjet from "./CardWidjet/CardWidjet"
import { Link } from "react-router-dom"
import Dropdown from "./DropDown/Dropdown"


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid ">
        <span className="navbar-brand" user-selec="none">
          Sebastian Banga Page
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <Dropdown/>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contactenos
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CardWidjet />
    </nav>

  )
}
export default NavBar;