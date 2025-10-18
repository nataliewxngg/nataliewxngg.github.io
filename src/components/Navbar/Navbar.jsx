import moonSVG from '../../assets/moon.svg';
import sunSVG from '../../assets/sun.svg';

import NavLinks from './NavLinks';

export default function Navbar(props) {
    return (
        <nav className='fixed z-1 w-full top-3 md:top-5 flex justify-between 2xl:px-50 lg:px-40 md:px-10 px-5 items-center'>

            {/* Dark/Light mode button */}
            <button onClick={props.toggleDarkMode}>
                <img
                    src={props.isDarkMode ? sunSVG : moonSVG} 
                    alt={props.isDarkMode ? 'Sun' : 'Moon'} 
                    className='w-10 h-10 cursor-pointer'
                />
            </button>

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