import './index.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Backpacking from './pages/Backpacking'
import Resume from './pages/Resume'
import Writings from './pages/Writings'
import WritingPage from "./pages/WritingPage"
import Navbar from './components/Navbar'

function App() {

  // ✅ Typed state + default dark mode + persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("darkMode")
    return saved ? JSON.parse(saved) : true
  })

  // ✅ Apply class + save preference
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode)
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  // ✅ Clean toggle (no TS error)
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/backpacking" element={<Backpacking darkMode={darkMode} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/writings/:slug" element={<WritingPage />} />
      </Routes>
    </>
  )
}

export default App