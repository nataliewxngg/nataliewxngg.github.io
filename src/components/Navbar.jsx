import moonSVG from '../assets/moon.svg'
import sunSVG from '../assets/sun.svg'

export default function Navbar(props) {
    return (
        <nav className='fixed w-full top-2 flex justify-around items-center'>

            {/* Dark/Light mode button */}
            <button onClick={props.toggleDarkMode}>
                <img
                    src={props.isDarkMode ? sunSVG : moonSVG} 
                    alt={props.isDarkMode ? 'Sun' : 'Moon'} 
                    className='w-10 h-10 cursor-pointer'
                />
            </button>

            {/* Contact button */}
            <button className='bg-button-bg dark:bg-button-bg-dark mr-3'>
                <a href='mailto:natalieltwong@gmail.com'>
                    contact
                </a>
            </button>

        </nav>
    )
}