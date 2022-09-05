import React from "react"
import Form from "./Form"
import CardWidjet from "./CardWidjet"
import { Link } from "react-router-dom"


const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Sebastian Banga Page
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarColor02"
      aria-controls="navbarColor02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
    </ul>
      <Form contPlace="Productos" />
    </div>
  </div>
  <CardWidjet />
</nav>

)}
export default NavBar;