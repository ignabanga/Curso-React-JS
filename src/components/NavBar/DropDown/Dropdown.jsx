import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categorias
              </a>
              <div className="dropdown-menu" style={{}}>
                <Link className="dropdown-item" to='/categoria/Remera'>
                  Remeras
                </Link>
                <Link className="dropdown-item" to='/categoria/Camisa'>
                  Camisas
                </Link>
                <Link className="dropdown-item" to='/categoria/Buzo'>
                  Buzos
                </Link>
                <Link className="dropdown-item" to='/categoria/Pantalon'>
                  Pantalones
                </Link>
              </div>
            </li>
        </>
    );
}

export default Dropdown;
