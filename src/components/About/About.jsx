import { useEffect } from 'react';

import TechStack from './TechStack';
import myPortrait from '../../assets/me.jpg';

import AOS from 'aos';

function About(props) {
    useEffect(() => {
        AOS.init({duration:2000});
    }, []);

    return (
        <section className='w-full 
                            2xl:py-25
                            xl:py-15
                            md:py-10
                            py-5
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
                I build elegant, user-centric websites out of <span className='text-secondary dark:text-secondary-dark'>passion</span>.
            </p>

            {/* <div
                className='2xl:h-150 xl:h-100 lg:h-80 md:h-50 sm:h-40 h-30
                           2xl:my-25 xl:my-15 md:my-10 my-5
                           bg-cover bg-[center_20%] rounded-2xl mx-auto'
                style={{ backgroundImage: `url(${myPortrait})` }}
                data-aos='fade-up'
            /> */}
            
            <TechStack />

            {/* TODO: REMOVE - placeholder text */}
            {/* <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-1xl" data-aos='fade-up'>
                I like to <span className='text-secondary dark:text-secondary-dark'>move it</span> move it.
            </p> */}

        </section>
    );
}

export default About;