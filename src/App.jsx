import { useState } from 'react';
import Navbar from './components/Navbar';

export default function App() {

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  function toggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  return (
    <>
      {/* Homepage - Hero */}
      <main
        className={`${isDarkMode ? 'dark' : ''} bg-bg dark:bg-bg-dark text-primary dark:text-primary-dark 
                    min-h-screen`}>
      
        {/* Header */}
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        
      </main> 
    </>
  )
}
