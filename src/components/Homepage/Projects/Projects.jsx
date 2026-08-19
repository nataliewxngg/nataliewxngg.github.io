import { useEffect, useState } from 'react';

import AOS from 'aos';

import projectData from '../../ProjectsCatalog/projectData';
import ProjectsGallery from './ProjectsGallery.jsx';
import ProjectPreview from './ProjectPreview.jsx';

function Projects(props) {
    const projects = projectData;
    const featuredProjects = projects.slice(0, 3);

    const [activeProject, setActiveProject] = useState(featuredProjects[0]);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section
            className='section-anchor w-full 2xl:px-30 xl:px-20 md:px-15 px-10 2xl:pb-25 xl:pb-15 md:pb-10'
            ref={props.ref}
        >
            <div className='flex flex-col gap-2 py-6
            ' data-aos='fade-up'>
                <h1 className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-1xl'>Featured Work</h1>
                <p className='max-w-2xl text-sm md:text-base text-secondary dark:text-secondary-dark'>
                    Ideas that made it out of my head.
                </p>
            </div>

            <div className='grid gap-6 xl:grid-cols-[1.1fr_0.9fr]' data-aos='fade-up'>
                <ProjectsGallery featuredProjects={featuredProjects} activeProject={activeProject} setActiveProject={setActiveProject} />

                <ProjectPreview activeProject={activeProject} />
            </div>
        </section>
    );
}

export default Projects;