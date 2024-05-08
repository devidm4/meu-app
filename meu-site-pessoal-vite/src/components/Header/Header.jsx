import React from "react";
import devid_avatar from '../../assets/avatar-devid.jpeg'
import './Header.css'



function Header(){
    return (
        <header>
            <img src={devid_avatar} alt="Foto de Devid"/>
            <h1>Devid Matheus</h1>
            <h3>Licenciando Matemática.</h3>
        </header>
    )
}

export default Header