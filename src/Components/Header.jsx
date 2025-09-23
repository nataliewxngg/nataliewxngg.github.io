import moonSVG from '../assets/moon.svg'
import sunSVG from '../assets/sun.svg'

export default function Header(props) {
    return (
        <header className={`${props.isDarkMode ? "dark" : ""} bg-bg dark:bg-bg-dark text-primary dark:text-primary-dark
         pt-30 flex justify-between items-center`}>
            <button onClick={props.toggleDarkMode}>
                <img src={props.isDarkMode ? sunSVG : moonSVG} 
                alt={props.isDarkMode ? "Sun" : "Moon"} 
                className="w-10 h-10 cursor-pointer" />
            </button>
        </header>
    )
}