import { useEffect } from 'react';

import TechStack from './TechStack';
import Gallery from './Gallery';

import myPortrait from '../../assets/me.jpg';
import galleryImg1 from '../../assets/galleryImgs/1.JPG';
import galleryImg2 from '../../assets/galleryImgs/2.JPG';
import galleryImg3 from '../../assets/galleryImgs/3.JPG';
import galleryImg4 from '../../assets/galleryImgs/4.JPG';
import galleryImg5 from '../../assets/galleryImgs/5.JPG';
import galleryImg6 from '../../assets/galleryImgs/6.JPG';
import galleryImg7 from '../../assets/galleryImgs/7.JPG';
import galleryImg8 from '../../assets/galleryImgs/8.JPG';
import galleryImg9 from '../../assets/galleryImgs/9.JPG';
import galleryImg10 from '../../assets/galleryImgs/10.JPG';
import galleryImg11 from '../../assets/galleryImgs/11.JPG';

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
                I build <span className='text-secondary dark:text-secondary-dark'>elegant, user-centric</span> websites out of passion.
            </p>
            <TechStack />

            {/* Light Mode Image */}
            {
                !props.isDarkMode &&
                <div
                    className='2xl:h-150 xl:h-100 lg:h-80 md:h-50 sm:h-40 h-30
                            2xl:mt-25 xl:mt-15 md:mt-10 my-5
                            bg-cover bg-[center_20%] rounded-2xl'
                    style={{ backgroundImage: `url(${myPortrait})` }}
                    data-aos='fade-up'
                />   
            }

            {/* Dark Mode Gallery */}
            {props.isDarkMode && <Gallery
                img1={galleryImg1} img1Span={2} img1AlignSelf='flex-end'
                img2={galleryImg2} img2Span={1} img2AlignSelf='flex-end'
                img3={galleryImg3} img3Span={1} img3AlignSelf='flex-end'
                img4={galleryImg4} img4Span={1} img4AlignSelf='flex-end'
                img5={galleryImg5} img5Span={1} img5AlignSelf='flex-end'
                img6={galleryImg6} img6Span={1} img6AlignSelf='flex-end'
                img7={galleryImg7} img7Span={2} img7AlignSelf='flex-start'
                img8={galleryImg8} img8Span={1} img8AlignSelf='flex-start'
                img9={galleryImg9} img9Span={1} img9AlignSelf='flex-start'
                img10={galleryImg10} img10Span={2} img10AlignSelf='flex-start'
                img11={galleryImg11} img11Span={1} img11AlignSelf='flex-start'
            />}

        </section>
    );
}

export default About;