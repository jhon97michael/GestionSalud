import React from "react";
import  '../assets/styles/header.css';
import logo from '../assets/images/logo.png'



function Header() {
    return (
        <div>
            <header>
                <nav>
                    <img className="logo" src={logo} alt="Logo de la empresa" />
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Acera de </a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
} 

export { Header };