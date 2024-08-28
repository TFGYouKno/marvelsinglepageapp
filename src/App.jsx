
import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import BrowseCharacters from './components/BrowseCharacters'
import NotFound from './components/NotFound'
import CharacterDetail from './components/CharacterDetail'
import Comics from './components/Comics'
import './styles/App.css'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/characters" element={<BrowseCharacters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />

        <Route path="/comics" element={<Comics />} />


        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App;