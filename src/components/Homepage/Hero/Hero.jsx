import lightModeBg from '../../../assets/lightModeBg.gif';
import darkModeBg from '../../../assets/darkModeBg.gif';

function Home(props) {
    return (
        <section className='relative min-h-screen w-full tracking-tighter pl-5 self-start
                            2xl:text-[16rem] xl:text-[13rem] lg:text-[10rem] md:text-9xl sm:text-8xl text-6xl
                            bg-no-repeat bg-center
                            bg-contain sm:bg-auto'
                 style={{ backgroundImage: props.isDarkMode ? `url(${darkModeBg})` : `url(${lightModeBg})` }}
                 ref={props.ref}>

            <h1 className='absolute bottom-7'>
                <span>Natalie</span>
                <span className='text-secondary dark:text-secondary-dark'>Wong</span>
            </h1>

        </section>
    )
}

export default Home;