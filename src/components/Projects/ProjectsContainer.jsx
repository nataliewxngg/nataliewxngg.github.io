import Project from './Project';

import chefClaudeImg from '../../assets/projects/chefClaudeImg.png';
import blinkyOnImg from '../../assets/projects/blinkyOnImg.png';
import etchASketchImg from '../../assets/projects/etchASketchImg.png';
import calculatorImg from '../../assets/projects/calculatorImg.png';

function ProjectsContainer() {
    return <article className='grid grid-cols-4 items-stretch 2xl:my-20 xl:my-10 md:my-5'>
        <Project name='Chef Claude' img={chefClaudeImg} />
        <Project name='Blinky-ON' img={blinkyOnImg} />
        <Project name='Etch-a-Sketch' img={etchASketchImg} />
        <Project name='Calculator' img={calculatorImg} />
    </article>
}

export default ProjectsContainer;