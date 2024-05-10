import React from "react";

import './itemPortfolio.css'


function ItemPortfolio(props){
    return(
        <div className="item-portfólio"> 
                    <a href={props.link} target="_blank">
                        <img src={props.image} alt="capa de Portfólio"/>
                        <p>Site de Portfólio</p>
                    </a>
                </div>
    )
}
export default ItemPortfolio