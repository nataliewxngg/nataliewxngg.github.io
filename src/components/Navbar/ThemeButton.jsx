import moonSVG from '../../assets/moon.svg';
import sunSVG from '../../assets/sun.svg';

function ThemeButton(props) {
    return <button onClick={props.toggleDarkMode}>
        <img
            src={props.isDarkMode ? sunSVG : moonSVG} 
            alt={props.isDarkMode ? 'Sun' : 'Moon'} 
            className='w-10 h-10 cursor-pointer'
        />
    </button>
}

export default ThemeButton;