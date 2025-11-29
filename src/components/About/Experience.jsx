import { useEffect } from 'react';

import AOS from 'aos';

function Experience(props) {

    useEffect(() => {
        AOS.init({duration:2000});
    }, []);

    function imgsMapped() {
        return props.imgs.map((img, i) => (
            <img key={i} src={img} alt={`experience-img-${i}`} />
        ));
    }

    return <div data-aos='fade-up' className='flex odd:flex-row even:flex-row-reverse justify-between items-center gap-1 border-r-1 last:border-r-0 px-10 first:pl-0 last:pr-0 border-secondary dark:border-secondary-dark'>
        <div>
            <h1 className='italic'>{props.title}</h1>
            <p>{props.company}</p>
            <p>{props.date}</p>

            {/* TODO: Fill out alt */}
            {/* <img src={props.img} alt='' /> */}
        </div>
    </div>
}

export default Experience;