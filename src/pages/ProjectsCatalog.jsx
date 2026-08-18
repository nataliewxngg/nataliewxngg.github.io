import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';

import moonSVG from '../assets/moon.svg';
import sunSVG from '../assets/sun.svg';
import projectData from '../components/ProjectsCatalog/projectData';

function ProjectsCatalog({ isDarkMode, toggleDarkMode }) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <main className={`${isDarkMode ? 'dark' : ''} bg-bg dark:bg-bg-dark text-primary dark:text-primary-dark min-h-screen w-full`}>
            <header className='w-full border-b border-black/10 bg-bg/85 px-10 py-6 backdrop-blur dark:border-white/10 dark:bg-bg-dark/85 md:px-15 xl:px-20 2xl:px-30' data-aos='fade-down'>
                <div className='flex flex-wrap items-center justify-between gap-4'>
                    <div>
                        <p className='text-[0.65rem] uppercase tracking-[0.35em] text-secondary dark:text-secondary-dark'>Projects</p>
                        <h1 className='mt-2 text-3xl font-semibold sm:text-4xl'>Bigger catalog</h1>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button onClick={toggleDarkMode} aria-label='Toggle color theme'>
                            <img
                                src={isDarkMode ? sunSVG : moonSVG}
                                alt={isDarkMode ? 'Sun' : 'Moon'}
                                className='h-10 w-10 cursor-pointer'
                            />
                        </button>

                        <Link
                            to='/'
                            className='inline-flex items-center rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition hover:bg-secondary hover:text-white dark:border-secondary-dark dark:text-secondary-dark dark:hover:bg-secondary-dark dark:hover:text-bg-dark'
                        >
                            Back home
                        </Link>
                    </div>
                </div>
            </header>

            <section className='px-10 py-12 md:px-15 xl:px-20 2xl:px-30' data-aos='fade-up'>
                <div className='max-w-3xl space-y-3'>
                    <p className='text-sm uppercase tracking-[0.35em] text-secondary dark:text-secondary-dark'>Featured catalog</p>
                    <p className='text-base text-primary/70 dark:text-primary-dark/70'>
                        A larger, card-based view of the projects with more room for summaries, highlights, and direct links.
                    </p>
                </div>

                <div className='mt-10 grid gap-6 md:grid-cols-2'>
                    {projectData.map(project => (
                        <article
                            key={project.label}
                            className='overflow-hidden rounded-[2rem] border border-white/10 bg-secondary-bg/90 shadow-[0_18px_50px_rgba(0,0,0,0.16)] dark:bg-secondary-bg-dark/90'
                            data-aos='fade-up'
                        >
                            <img
                                src={project.image}
                                alt={project.label}
                                className='h-72 w-full object-cover sm:h-80'
                            />

                            <div className='space-y-5 p-6 md:p-8'>
                                <div className='space-y-2'>
                                    <p className='text-[0.65rem] uppercase tracking-[0.35em] text-secondary dark:text-secondary-dark'>Project</p>
                                    <h2 className='text-3xl font-semibold'>{project.label}</h2>
                                    <p className='text-sm md:text-base text-primary/75 dark:text-primary-dark/75'>{project.summary}</p>
                                </div>

                                <ul className='flex flex-wrap gap-2'>
                                    {project.highlights.map(highlight => (
                                        <li
                                            key={highlight}
                                            className='rounded-full border border-white/10 bg-bg/60 px-3 py-1 text-xs text-primary/80 dark:bg-bg-dark/60 dark:text-primary-dark/80'
                                        >
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={project.link}
                                    className='inline-flex items-center rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition hover:bg-secondary hover:text-white dark:border-secondary-dark dark:text-secondary-dark dark:hover:bg-secondary-dark dark:hover:text-bg-dark'
                                >
                                    Open project
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ProjectsCatalog;