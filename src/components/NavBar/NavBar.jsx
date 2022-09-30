import React from "react"
import CardWidjet from "./CardWidjet/CardWidjet"
import { Link } from "react-router-dom"
import Dropdown from "./DropDown/Dropdown"


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid ">
        <span className="navbar-brand" user-selec="none">
           Ecommerce React  <img src="https://firebasestorage.googleapis.com/v0/b/proyectofinalcoder-b92b0.appspot.com/o/iconoRopa.ico?alt=media&token=9065e2a4-5613-4833-8994-e6fa957f5e0f" alt="Ropa" /> 
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
          </ul>
        </div>
      </div>
      <CardWidjet />
    </nav>

  )
}
export default NavBar;