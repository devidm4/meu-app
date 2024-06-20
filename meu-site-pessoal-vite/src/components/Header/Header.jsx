import React from "react";

import './Header.css'

function Header(Props){

 const {nome, cargo, foto} = Props.informacoes

    return (
        <header>
            <img src={foto} alt="Foto de Devid"/>
            <h1 id="nome-perfil">{nome}</h1>
            <h3 id="aventoSubtitulo">{cargo}</h3>
        </header>
    )
}

export default Header