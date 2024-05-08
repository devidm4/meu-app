import React from "react";

import './navigationBar.css'

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li className="button"><a href="#">Currículo</a></li>
                <li className="button"><a href="pages/portfólio.html">Portfólio</a></li>
                <li className="button"><a href="/pages/contato.html">Contato</a></li>
            </ul>
        </nav>
    )


}

export default NavigationBar