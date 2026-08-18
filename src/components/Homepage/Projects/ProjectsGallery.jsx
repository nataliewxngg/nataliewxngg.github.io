import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiArrowTopRight } from '@mdi/js';

export default function ProjectsGallery({ featuredProjects, activeProject, setActiveProject }) {
    return (
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-2'>
            {featuredProjects.map(project => {
                const isActive = activeProject.label === project.label;

                return (
                    <button
                        key={project.label}
                        type='button'
                        onClick={() => setActiveProject(project)}
                        className={`group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl border p-0 text-left transition duration-300 ${
                            isActive
                                ? 'border-secondary shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_20px_60px_rgba(0,0,0,0.25)]'
                                : 'border-white/10 hover:border-white/30'
                        }`}
                    >

                        <img
                            src={project.image}
                            alt={project.label}
                            className={`absolute inset-0 block h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                                isActive ? '' : 'grayscale opacity-70'
                            }`}
                        />
                        <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition duration-500 ${
                                isActive ? 'opacity-100' : 'opacity-90'
                            }`}
                        />
                        
                        <div className='absolute inset-x-0 bottom-0 p-4'>
                            <p className='text-[0.65rem] uppercase tracking-[0.35em] text-secondary-dark'>Preview</p>
                            <h2 className='mt-1 text-lg font-semibold text-primary-dark'>{project.label}</h2>
                        </div>
                    </button>
                );
            })}

            <Link
                to='/projects'
                className='group relative overflow-hidden rounded-3xl border border-white/10 bg-secondary-bg/85 text-left transition duration-300 hover:border-secondary/60 hover:bg-secondary-bg dark:bg-secondary-bg-dark/85'
            >
                <div className='absolute inset-0 bg-gradient-to-br from-secondary/15 via-transparent to-secondary/35 dark:from-secondary-dark/10 dark:to-secondary-dark/30' />
                <div className='absolute right-4 top-4 rounded-full border border-white/15 bg-bg/70 p-2 text-primary transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 dark:bg-bg-dark/70 dark:text-primary-dark'>
                    <Icon path={mdiArrowTopRight} size='1.1rem' />
                </div>
                <div className='flex h-full min-h-[14rem] flex-col justify-end p-4 md:min-h-[18rem]'>
                    <p className='text-[0.65rem] uppercase tracking-[0.35em] text-secondary dark:text-secondary-dark'>View more</p>
                    <h2 className='mt-2 text-lg font-semibold text-primary dark:text-primary-dark'>Browse the full catalog</h2>
                    <p className='mt-2 max-w-[14rem] text-sm text-primary/70 dark:text-primary-dark/70'>
                        For a greater collection of projects.
                    </p>
                </div>
            </Link>
        </div>
    );
}