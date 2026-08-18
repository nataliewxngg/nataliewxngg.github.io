import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProjectsCatalog from './pages/ProjectsCatalog';

import 'aos/dist/aos.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  function toggleDarkMode() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={<Homepage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path='/projects'
          element={<ProjectsCatalog isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        />
      </Routes>
    </HashRouter>
  );
}
