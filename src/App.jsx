import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'app dark-theme' : 'app light-theme'}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>Kunj Desai &copy; 2026 | Practical 3 - API Integration</p>
      </footer>
    </div>
  )
}

export default App
