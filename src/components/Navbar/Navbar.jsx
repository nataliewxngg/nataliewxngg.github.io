// import moonSVG from '../assets/moon.svg'
// import sunSVG from '../assets/sun.svg'

import ThemeButton from './ThemeButton';
import NavLinks from './NavLinks';

export default function Navbar(props) {
    return (
        <nav className='sticky w-full top-3 md:top-5 flex justify-around items-center'>

            {/* Dark/Light mode button */}
            <ThemeButton toggleDarkMode={props.toggleDarkMode} isDarkMode={props.isDarkMode} />

            {/* Nav links */}
            <NavLinks executeScroll={props.executeScroll} />

            {/* Contact button */}
            <button className='bg-button-bg dark:bg-button-bg-dark mr-3'>
                <a href='mailto:natalieltwong@gmail.com'>
                    contact
                </a>
            </button>

        </nav>
    )
}