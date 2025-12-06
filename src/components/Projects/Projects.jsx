import { useEffect } from 'react';

import ProjectsContainer from './ProjectsContainer';

import AOS from 'aos';

function Projects(props) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return <section className='w-full 2xl:px-30 xl:px-20 md:px-15 px-10 2xl:pb-25 xl:pb-15 md:pb-10 pb-5' ref={props.ref}>

        <h1 className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-1xl' data-aos='fade-up'>Featured Work</h1>

        <ProjectsContainer />
        
    </section>
}

export default Projects;