import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import AboutMe from "./Pages/AboutMe"
import Projects from "./Pages/Projects"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </Router>
  )
}
