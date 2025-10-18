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
                      w-full`}>
      
        {/* Navbar */}
        <Navbar
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          executeScroll={[() => scrollTo('home'), () => scrollTo('about'), () => scrollTo('projects')]}
        />

        <section ref={setRef('home')}>
          <h1 className='text-[20rem]'>Home section</h1>
        </section>

        <section ref={setRef('about')}>
          <h1 className='text-[20rem]'>About section</h1>
        </section>

        <section ref={setRef('projects')}>
          <h1 className='text-[20rem]'>Projects section</h1>

        </section>
      </main> 
    </>
  )
}
