export default function ProjectPreview({ activeProject }) {
    return (
        <article className='overflow-hidden rounded-[2rem] border border-white/10 bg-secondary-bg/90 shadow-[0_25px_80px_rgba(0,0,0,0.2)] dark:bg-secondary-bg-dark/90'>
            <img
                src={activeProject.image}
                alt={activeProject.label}
                className='h-72 w-full object-cover sm:h-80'
            />

            <div className='space-y-5 p-6 md:p-8'>
                <div className='space-y-2'>
                    <p className='text-[0.65rem] uppercase tracking-[0.35em] text-secondary dark:text-secondary-dark'>Selected project</p>
                    <h2 className='text-3xl font-semibold'>{activeProject.label}</h2>
                    <p className='text-sm md:text-base text-primary/75 dark:text-primary-dark/75'>{activeProject.summary}</p>
                </div>

                <ul className='flex flex-wrap gap-2'>
                    {activeProject.highlights.map(highlight => (
                        <li
                            key={highlight}
                            className='rounded-full border border-white/10 bg-bg/60 px-3 py-1 text-xs text-primary/80 dark:bg-bg-dark/60 dark:text-primary-dark/80'
                        >
                            {highlight}
                        </li>
                    ))}
                </ul>

                <a
                    href={activeProject.link}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='inline-flex items-center rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition hover:bg-secondary hover:text-white dark:border-secondary-dark dark:text-secondary-dark dark:hover:bg-secondary-dark dark:hover:text-bg-dark'
                >
                    Open project
                </a>
            </div>
        </article>
    );
}