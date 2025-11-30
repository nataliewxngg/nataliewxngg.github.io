import Experience from './Experience';

import fordImg1 from '../../assets/experiences/ford/1.jpg';
import fordImg2 from '../../assets/experiences/ford/2.jpg';
import fordImg3 from '../../assets/experiences/ford/3.jpg';

function Experiences(props) {
    const experiences = [
        {
            id: '1',
            title: 'Networking Software Engineer',
            company: 'Ford Motor Company',
            date: 'Sept. 2025 - Dec. 2025',
            img: [fordImg1, fordImg2, fordImg3]
        },
        // {
        //     id: '2',
        //     title: 'STEM Innovation Trends Research Assistant',
        //     company: 'BIASafe AI',
        //     date: 'Jan. 2025 - Apr. 2025',
        //     img: [fordImg1]
        // }
    ];

    function experiencesMapped() {
        return experiences.map(experience => 
            <Experience 
                key={experience.id}
                id={experience.id}
                title={experience.title}
                company={experience.company}
                date={experience.date}
                img={experience.img}
            />
        );
    }

    return <article className='flex flex-col gap-2'>
        {experiencesMapped()}
    </article>
}

export default Experiences;