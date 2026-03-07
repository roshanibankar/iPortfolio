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

  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return (
    <>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/backpacking" element={<Backpacking />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/writings/:slug" element={<WritingPage />} />
      </Routes>
    </>
  )
}

export default App