import { useEffect } from 'react';

import TechStack from './TechStack';
import Gallery from './Gallery';
import Experiences from './Experiences';

import lightModeAboutImg from '../../assets/lightModeAboutImg.jpg';
import darkModeAboutImg from '../../assets/darkModeAboutImg.jpg';
import galleryImg1 from '../../assets/galleryImgs/1.JPG';
import galleryImg2 from '../../assets/galleryImgs/2.JPG';
import galleryImg3 from '../../assets/galleryImgs/3.JPG';
import galleryImg4 from '../../assets/galleryImgs/4.JPG';
import galleryImg5 from '../../assets/galleryImgs/5.JPG';
import galleryImg6 from '../../assets/galleryImgs/6.JPG';
import galleryImg7 from '../../assets/galleryImgs/7.JPG';
import galleryImg8 from '../../assets/galleryImgs/8.JPG';

import AOS from 'aos';

function About(props) {
    useEffect(() => {
        AOS.init({duration:2000});
    }, []);

    let colsCount;
    let rowsCount;
    useEffect(() => {
        colsCount=window.innerWidth/100;
    }, [window.innerWidth])

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
                I build <span className='text-secondary dark:text-secondary-dark'>elegant, user-centric</span> websites out of passion.
            </p>
            <TechStack />

            <div
                className={`2xl:h-150 xl:h-100 lg:h-80 md:h-50 sm:h-40 h-30
                            2xl:mt-25 xl:mt-15 md:mt-10 mt-5
                            bg-cover bg-[center_20%] rounded-2xl
                            ${props.isDarkMode ? 'shadow-[0_0px_150px_rgba(255,255,255,0.35)]' : 'shadow-[0_0px_150px_rgba(0,0,0,0.2)]'}`}
                style={{ backgroundImage: props.isDarkMode ? `url(${darkModeAboutImg})` : `url(${lightModeAboutImg})` }}
                data-aos='fade-up'
            />  

            {/* <p className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-1xl'
            data-aos='fade-up'>
                Experience
            </p>
            <Experiences /> */}

            {/* Gallery */}
            {/* <Gallery
                img1={galleryImg1}
                img2={galleryImg2}
                img3={galleryImg3}
                img4={galleryImg4}
                img5={galleryImg5}
                img6={galleryImg6}
                img7={galleryImg7}
                img8={galleryImg8}
            /> */}

        </section>
    );
}

export default About;