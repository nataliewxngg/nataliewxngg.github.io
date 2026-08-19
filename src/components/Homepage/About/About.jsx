import { useEffect } from 'react';

import TechStack from './TechStack';

import lightModeAboutImg from '../../../assets/lightModeAboutImg.jpg';
import darkModeAboutImg from '../../../assets/darkModeAboutImg.jpg';

import AOS from 'aos';

function About(props) {
    useEffect(() => {
        AOS.init({duration:2000});
    }, []);

    return (
        <section className='section-anchor 
                            w-full 
                            2xl:pt-25
                            xl:pt-15
                            md:pt-10
                            pt-5
                            2xl:px-30
                            xl:px-20
                            md:px-15
                            px-10
                            flex
                            flex-col
                            gap-3'
                ref={props.ref}>

            <p className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-1xl'
            data-aos='fade-up'>
                Turning <span className='text-secondary dark:text-secondary-dark'>ideas</span> into <span className='text-secondary dark:text-secondary-dark'>reality</span>, one at a time.
            </p>
            <TechStack />

            {/* TODO: Refactor the About img to conditionally change image on theme change */}
            {props.isDarkMode && <div
                className={`2xl:h-150 xl:h-100 lg:h-80 md:h-50 sm:h-40 h-30
                            2xl:my-25 xl:my-15 md:my-10 my-5
                            bg-cover bg-[center_20%] rounded-2xl
                            ${props.isDarkMode ? 'shadow-[0_0px_150px_rgba(255,255,255,0.35)]' : 'shadow-[0_0px_150px_rgba(0,0,0,0.2)]'}`}
                style={{ backgroundImage: `url(${darkModeAboutImg})`}}
                data-aos='fade-up'
            />}  

            {!props.isDarkMode && <div
                className={`2xl:h-150 xl:h-100 lg:h-80 md:h-50 sm:h-40 h-30
                            2xl:my-25 xl:my-15 md:my-10 my-5
                            bg-cover bg-[center_20%] rounded-2xl
                            ${props.isDarkMode ? 'shadow-[0_0px_150px_rgba(255,255,255,0.35)]' : 'shadow-[0_0px_150px_rgba(0,0,0,0.2)]'}`}
                style={{ backgroundImage: `url(${lightModeAboutImg})` }}
                data-aos='fade-up'
            />  }

        </section>
    );
}

export default About;