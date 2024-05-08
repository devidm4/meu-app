import React from "react";

import './portfolio.css'

import devid_avatar from '../../assets/avatar-devid.jpeg'

function Portfolio(){

    const portfolios = [
        {
            link: "https://academy.comeialabs.com.br/",
            image: '../../assets/avatar-devid.jpeg',
            title: 'Site de Portfólio',
        },    {
            link: "https://academy.comeialabs.com.br/",
            image: '../../assets/avatar-devid.jpeg',
            title: 'Site de Portfólio',
        },    {
            link: "https://academy.comeialabs.com.br/",
            image: '../../assets/avatar-devid.jpeg',
            title: 'Site de Portfólio'
        },
    ]


    return(
        <main>

        {portfolios.map(
            (portfolio) => 
                <div class="intem-portfólio"> 
                    <a href="https://academy.comeialabs.com.br/" target="_blank">
                        <img src={devid_avatar} alt="capa de Portfólio"/>
                        <p>Site de Portfólio</p>
                    </a>
                </div>
            )}
       

     </main>
    )

}
export default Portfolio
