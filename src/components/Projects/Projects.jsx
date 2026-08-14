import { useEffect } from 'react';

import AccordionGallery from './AccordionGallery';

import AOS from 'aos';

import blinkyOnImg from '../../assets/projects/blinkyOnImg.png';
import calculatorImg from '../../assets/projects/calculatorImg.png';
import chefClaudeImg from '../../assets/projects/chefClaudeImg.png';
import etchASketchImg from '../../assets/projects/etchASketchImg.png';

function Projects(props) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const items = [
        { image: blinkyOnImg, label: 'BlinkON', link: '#' },
        { image: calculatorImg, label: 'Calculator', link: '#' },
        { image: chefClaudeImg, label: 'Chef Claude', link: '#' },
        { image: etchASketchImg, label: 'Etch-a-Sketch', link: '#' },
        { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline', link: '#' }
    ];

    return <section className='w-full 2xl:px-30 xl:px-20 md:px-15 px-10 2xl:pb-25 xl:pb-15 md:pb-10' ref={props.ref}>

        <h1 className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-1xl pt-3 pb-5' data-aos='fade-up'>Featured Work</h1>

        <AccordionGallery
            items={items}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#ffffff"
            overlayColor="#060010"
            textColor="#ffffff"
            grayscale
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={460}
            gap={10}
            radius={16}
            orientation="horizontal"
        />
        
    </section>
}

export default Projects;