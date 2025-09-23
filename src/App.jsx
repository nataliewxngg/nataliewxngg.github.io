import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./Pages/Home"
import AboutMe from "./Pages/AboutMe"
import Projects from "./Pages/Projects"

export default function App() {

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
  function toggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} />}/>

        {/* About Me Page */} 
        <Route path="/about-me" element={<AboutMe isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} />}/>

        {/* Projects Page */}
        <Route path="/projects" element={<Projects isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} />}/>
      </Routes>
    </Router>
  )
}
