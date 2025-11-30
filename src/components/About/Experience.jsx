import { useEffect } from 'react';

import AOS from 'aos';

function Experience(props) {

    useEffect(() => {
        AOS.init({duration:2000});
    }, []);

    function imgsMapped() {
        return props.img.map((img, i) => (
            // TODO: Fill out alt for img 
            <img key={i} src={img} alt='' className='h-full w-full object-cover' />
        ));
    }

    return <div data-aos='fade-up' className='flex flex-row items-center gap-20'>
        <div>
            <h1 className='italic'>{props.title}</h1>
            <p>{props.company}</p>
            <p>{props.date}</p>
        </div>

        <div data-aos='fade-left' className='grid grid-cols-3 auto-rows-[17rem] gap-1 pl-20 border-l-1 border-secondary dark:border-secondary-dark w-full'>
            {imgsMapped()}
        </div>
    </div>
}

export default Experience;