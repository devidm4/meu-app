import { } from 'react'

import './App.css'

import Header from './components/Header/Header'
import NavigationBar from './components/navigationBar/navigationBar'
import Curriculum from './components/curriculum/curriculum'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'


import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {

  return (
    <>
      <Header></Header>

      <BrowserRouter>

        <NavigationBar></NavigationBar>

        <Routes>
          <Route path="" element={<></>} />
          <Route path="Curriculum" element={<Curriculum />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </>
  )
}

export default App
