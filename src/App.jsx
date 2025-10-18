import { useState, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';

export default function App() {

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);
    // useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  function toggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  // Scroll to Home ref
  const homeRef = useRef(null);
  function scrollToHome() {
    homeRef.current.scrollIntoView();
  }

  // Scroll to About ref
  const aboutRef = useRef(null);
  function scrollToAbout() {
    aboutRef.current.scrollIntoView();
  }

  const projectsRef = useRef(null);
  function scrollToProjects() {
    projectsRef.current.scrollIntoView();
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
                      w-full`}>
      
        {/* Navbar */}
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} executeScroll={[scrollToHome, scrollToAbout, scrollToProjects]} />  

        <section ref={homeRef}>
          <h1 className='text-[20rem]'>Home section</h1>
        </section>

        <section ref={aboutRef}>
          <h1 className='text-[20rem]'>About section</h1>
        </section>

        <section ref={projectsRef}>
          <h1 className='text-[20rem]'>Projects section</h1>

        </section>
      </main> 
    </>
  )
}
