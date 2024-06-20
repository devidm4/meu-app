import React, {  } from 'react'

import api from './api'

import './App.css'

import Header from './components/Header/Header'
import NavigationBar from './components/navigationBar/navigationBar'
import Curriculum from './components/curriculum/curriculum'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'


import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {

  const [informacoes, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const [portifolio, setPortifolio] = React.useState([]);

  const fetchDados = async () => {
    try {
      const informacao = await api.get(`/informacoes/1`);
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo
      });

      const experienciaAcademica = await api.get(`/experiencias?tipo=Academico`);
      const experienciaProfissional = await api.get(`/experiencias?tipo=Profissional`);

      setCurriculo({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data
      });

      const portifolio = await api.get(`/portifolio`);
      setPortifolio(portifolio.data);

    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  React.useEffect(() => {
    fetchDados();
  }, []);

  return (
    <>
      <Header informacoes={informacoes}></Header>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="Curriculum" element={<Curriculum curriculo={curriculo} />} />
          <Route path="Portfolio" element={<Portfolio portifolio={portifolio} />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </>
  )
}

export default App;
