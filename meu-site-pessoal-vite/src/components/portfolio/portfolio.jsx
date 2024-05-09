import React from "react";

import './portfolio.css'

import devid_avatar from '../../assets/avatar-devid.jpeg'
import ItemPortfolio from "../itemPortfolio/itemportfolio";

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
            (portfolio) => <ItemPortfolio></ItemPortfolio>

            )}
       

     </main>
    )

}
export default Portfolio
