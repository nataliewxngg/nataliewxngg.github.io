import moonSVG from '../assets/moon.svg'
import sunSVG from '../assets/sun.svg'

export default function Header(props) {
    return (
        <header className="flex justify-between items-center">
            <button onClick={props.toggleDarkMode} className="bg-bg dark:bg-bg-dark">
                <img src={props.isDarkMode ? sunSVG : moonSVG} 
                alt={props.isDarkMode ? "Sun" : "Moon"} 
                className="w-10 h-10 cursor-pointer" />
            </button>
            <button className="bg-button-bg dark:bg-button-bg-dark">contact</button>
        </header>
    )
}