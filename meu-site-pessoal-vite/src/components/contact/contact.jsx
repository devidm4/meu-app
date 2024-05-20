import { useState } from "react";

import './contact.css'

function Contact() {

   const [nome, setNome] = useState("")
   const [email, setEmail] = useState("")
   const [Telefone, setTelefone] = useState("")
   const [mensagem, setMensagem] = useState("")

   function enviarFormulario(event) {
      event.preventDefault()
  
      const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${Telefone}\nMensagem: ${mensagem}`;
    
      const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER 

      const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  
      window.open(linkWhatsApp, '_blank' );


   }


   return (
      <>

         <form onSubmit={enviarFormulario}>
            <fieldset>
               <label htmlFor="input-nome">Nome</label>
               <input
                  type="text"
                  name="input-nome"
                  id="input-nome"
                  required
                  minLength={2}
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  
               />
               <span className="span-required">Nome deve ter no mínimo 3 caracteres</span>
            </fieldset>

            <fieldset>
               <label htmlFor="input-email">E-mail</label>
               <input
                  type="email"
                  name="input-email"
                  id="input-email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
               />
               <span className="span-required">E-mail inválido</span>
            </fieldset>

            <fieldset>
               <label htmlFor="input-tel">Telefone</label>
               <input
                  type="tel"
                  name="input-tel"
                  id="input-tel"
                  placeholder="(99) 99999-9999"
                  required
                  maxLength={15}
                  value={Telefone}
                  onChange={(event) => setTelefone(event.target.value)}
               />
               <span className="span-required">Numero de Telefone inválido</span>
            </fieldset>

            <fieldset>
               <label htmlFor="input-msg">Mensagem</label>
               <textarea
                  name="input-msg"
                  id="input-msg"
                  cols="30"
                  rows="10"
                  value={mensagem}
                  onChange={(event) => setMensagem(event.target.value)}>
               </textarea>
            </fieldset>

            <center>
               <input type="submit" value="ENVIAR" className="button" />
            </center>

         </form>

      </>
   )
} export default Contact