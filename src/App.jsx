import { useState, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Projects';

import 'aos/dist/aos.css';

export default function App() {

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  function toggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  // Scroll to Home ref
  const sectionRef = useRef({});
  function setRef(name) {
    return el => { sectionRef.current[name] = el; };
  }

  function scrollTo(name) {
    const el = sectionRef.current[name];
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {/* Homepage - Hero */}
      <main className={`${isDarkMode ? 'dark' : ''} 
                      bg-bg 
                      dark:bg-bg-dark 
                      text-primary 
                      dark:text-primary-dark
                      min-h-screen
                      w-full
                      flex
                      flex-col
                      justify-center
                      items-center`}>
      
        {/* Navbar */}
        <Navbar
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          executeScroll={[() => scrollTo('home'), () => scrollTo('about'), () => scrollTo('projects')]}
        />

        <Home ref={setRef('home')} isDarkMode={isDarkMode} />
        <About ref={setRef('about')} />
        {/* <Project ref={setRef('projects')} /> */}
      </main> 
    </>
  )
}
