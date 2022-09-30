import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='container divFooter'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center mt-3 mb-1 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-md-0 text-muted">© 2022 Ecommerce React, Coderhouse</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="https://twitter.com/SebaBanga" target='_blank' rel="noreferrer">
                            <img src="https://firebasestorage.googleapis.com/v0/b/proyectofinalcoder-b92b0.appspot.com/o/twitter.png?alt=media&token=85052f99-bd8d-4aa2-9bb7-b677653e8d8a" alt="twit" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://instagram.com/SebaBanga" target='_blank' rel="noreferrer">
                            <img src="https://firebasestorage.googleapis.com/v0/b/proyectofinalcoder-b92b0.appspot.com/o/instagram.png?alt=media&token=e2c221d4-be8b-477b-b550-6f71598a62f2" alt="insta" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://facebook.com/SebaBanga" target='_blank' rel="noreferrer">
                            <img src="https://firebasestorage.googleapis.com/v0/b/proyectofinalcoder-b92b0.appspot.com/o/facebook.png?alt=media&token=d318dd93-9c7c-4db8-91c4-ff254675f19d" alt="face" />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
