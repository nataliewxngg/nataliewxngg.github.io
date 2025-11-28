import { useEffect } from 'react';
import AOS from 'aos';

function GalleryImg(props) {
    useEffect(() => {
        AOS.init({duration:2000});
    }, []);

    const span = props.gridSpan ?? 1;

    return (
        <img
            src={props.img}
            className={props.className ?? 'w-full h-auto object-cover'}
            style={{ gridColumn: `span ${span}`, alignSelf: props.alignSelf }}
            data-aos={props.fade == 'r' ? 'fade-right' : 'fade-left'}
            alt={props.alt ?? ''}
        />
    );
}

export default GalleryImg;