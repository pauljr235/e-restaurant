import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
