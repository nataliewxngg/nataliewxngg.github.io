import blinkyOnImg from '../../assets/projects/blinkyOnImg.png';
import calculatorImg from '../../assets/projects/calculatorImg.png';
import chefClaudeImg from '../../assets/projects/chefClaudeImg.png';
import etchASketchImg from '../../assets/projects/etchASketchImg.png';

// Link can be replaced with '#' or '/placeholder'

const projectData = [
    {
        image: blinkyOnImg,
        label: 'BlinkyON',
        summary: 'A dynamic, pausable single-player game that utilizes the arrow keys to navigate a vehicle through busy one-way traffic, built with Java Swing.',
        highlights: ['Java Swing', 'OOP', 'Dynamic Gameplay'],
        link: 'https://github.com/nataliewxngg/blinky-on'
    },
    {
        image: calculatorImg,
        label: 'Calculator',
        summary: 'A compact calculator engineered using vanilla HTML, CSS, and JavaScript, featuring basic arithmetic functionality with robust error handling, animations, and a comprehensive UI that provides a promising user experience.',
        highlights: ['HTML/CSS/JavaScript', 'DOM Manipulation', 'Event Handling'],
        link: 'https://github.com/nataliewxngg/calculator'
    },
    {
        image: chefClaudeImg,
        label: 'Chef Claude',
        summary: 'A web application powered by OpenAI\'s gpt-oss-120b that recommends recipes based on a list of available ingredients inputted by the user — driven by conditional rendering, states, refs, and secure api integration through netlify deployment.',
        highlights: ['React', 'API Integration', 'AI-powered'],
        link: 'https://github.com/nataliewxngg/react-course'
    },
    {
        image: etchASketchImg,
        label: 'Etch-a-Sketch',
        summary: 'A nostalgic web application that allows desktop users to create pixel art through an interactive browser experience.',
        highlights: ['HTML/CSS/JavaScript', 'DOM Manipulation', 'Interactive UI'],
        link: 'https://github.com/nataliewxngg/etch-a-sketch'
    }
];

export default projectData;