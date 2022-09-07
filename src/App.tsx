import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import { Home } from './pages/Home'
import { Museums } from './pages/Museums'
import { Works } from './pages/Works'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element= {<Home />} />
      <Route path="museums" element={<Museums />} />
      <Route path="works" element={<Works />} />
      </Routes>
     
    </div>
  )
}

export default App
