import { useState } from 'react';
import Header from './components/Header';

export default function App() {

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
  function toggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  return (
    <main
      className={`${isDarkMode ? "dark" : ""} bg-bg dark:bg-bg-dark text-primary dark:text-primary-dark 
                  min-h-screen py-20 px-130 flex flex-col gap-20`}>
      
      {/* Header */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    
      <section className={`${isDarkMode ? "dark" : ""} bg-bg dark:bg-bg-dark text-primary dark:text-primary-dark py-10`}>
          <h1 className="text-[10rem] leading-[0.8] font-bold">Natalie <br></br><span>Wong</span></h1>
          <p className="mt-10 text-3xl font-extralight">Aspiring <span className="text-secondary dark:text-secondary-dark">full-stack developer</span> with a passion for creating web applications and discovering new technologies.</p>
      </section>
      
    </main>
  )
}
