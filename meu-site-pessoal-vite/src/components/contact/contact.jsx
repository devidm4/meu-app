import React from "react";

import './contact.css'

function Contact(){
    return(
        <>
           
           <form action="">
             <fieldset>
                <label for="input-nome">Nome</label>
                <input type="text" name="input-nome" id="input-nome" oninput="validar_nome()"/>
                <span class="span-required">Nome deve ter no mínimo 3 caracteres</span>
             </fieldset>

             <fieldset>
                <label for="input-email">E-mail</label>
                <input type="email" name="input-email" id="input-email" oninput="validar_email()"/>
                <span class="span-required">E-mail inválido</span>
             </fieldset>

             <fieldset>
                <label for="input-tel">Telefone</label>
                <input type="tel" name="input-tel" id="input-tel"/>
                <span class="span-required">Numero de Telefone inválido</span>
             </fieldset>

             <fieldset>
                <label for="input-msg">Mensagem</label>
                <textarea name="input-msg" id="input-msg" cols="30" rows="10"></textarea>
             </fieldset>

                <center>
                    <input type="submit" value="ENVIAR" class="button" onclick="enviarFormulario()"/>
                </center>

           </form>

        </>
    )
}export default Contact