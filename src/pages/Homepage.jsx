import { useRef } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Homepage/Hero/Hero';
import About from '../components/Homepage/About/About';
import Projects from '../components/Homepage/Projects/Projects';

export default function Homepage({ isDarkMode, toggleDarkMode }) {

    // Scroll to Home, About, Projects ref
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
            <Navbar
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
                executeScroll={[() => scrollTo('home'), () => scrollTo('about'), () => scrollTo('projects')]}
            />

            <Home ref={setRef('home')} isDarkMode={isDarkMode} />
            <About ref={setRef('about')} isDarkMode={isDarkMode} />
            <Projects ref={setRef('projects')} />

            <footer className='bg-secondary-bg dark:bg-secondary-bg-dark w-full 
                                flex flex-col gap-2
                                2xl:py-10 xl:py-8 py-7
                                2xl:px-30 xl:px-20 md:px-15 px-10
                                2xl:text-[0.9rem] lg:text-[0.8rem] md:text-[0.7rem] text-[0.6rem]'
                    data-aos='fade-left'>
            <a href='mailto:natalieltwong@gmail.com'>natalieltwong@gmail.com</a>

            <div className='flex flex-col'>
                <a href='https://github.com/nataliewxngg'>Github</a>
                <a href='https://www.linkedin.com/in/nataliewxngg/'>LinkedIn</a>
            </div>

            <p className='text-bg dark:text-bg-dark 2xl:text-[0.8rem] lg:text-[0.7rem] md:text-[0.6rem] text-[0.5rem]'>@ 2026 - All Rights Reserved</p>
            </footer>
        </main>
    );
}