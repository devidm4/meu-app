import React from "react";

import './navigationBar.css'
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li className="button"><Link to="/">INICIO</Link></li>
                <li className="button"><Link to="/Curriculum">CURRÍCULO</Link></li>
                <li className="button"><Link to="/Portfolio">PORTFÓLIO</Link></li>
                <li className="button"><Link to="/contact">CONTATO</Link></li>
            </ul>
        </nav>
    )


}

export default NavigationBar