import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { Museums } from './pages/Museums'
import { Works } from './pages/Works'

function App() {

  return (
    <div className="App">
      < NavBar/>
      <Routes>
      <Route path="museums" element={<Museums />} />
      <Route path="works" element={<Works />} />
      </Routes>
     
    </div>
  )
}

export default App
