import React from "react";

import './curriculum.css'
import data from './curriculum.json'

function Curriculum (){
    return(
        <>
            <section>
        <h2>Resumo</h2>
            <p>
             <p>{data.resumo}</p>
         </p>
        </section>

        <section>
            <h2>Acadêmico</h2>
            <ul>
                {data.academico.map((item, index) =>(
                    <li key={index}>
                     <b>({item.dataInicio}-{item.dataFim} )</b>{item.titulo}
                    </li>
                ))}
             </ul>

        </section>

        <section>
            <h2>Profissional</h2>
                <ul>
                {data.Profissional.map((item, index) =>(
                    <li key={index}>
                     {item.titulo}
                    </li>
                ))}
                </ul>
        </section>
        </>
    )
}

export default Curriculum