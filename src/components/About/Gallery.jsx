import GalleryImg from './GalleryImg';

function Gallery(props) {

    return (
        <article className='grid
                            grid-cols-5 grid-rows-2 
                            gap-1 lg:gap-2 
                            grid-flow-row
                            2xl:mt-25 xl:mt-15 md:mt-10 my-5'>
            <GalleryImg img={props.img1} gridSpan={2} alignSelf='flex-end' fade='fade-right' />
            <GalleryImg img={props.img2} gridSpan={1} alignSelf='flex-end' fade='fade-down' />
            <GalleryImg img={props.img3} gridSpan={1} alignSelf='flex-end' fade='fade-down' />
            <GalleryImg img={props.img4} gridSpan={1} alignSelf='flex-end' fade='fade-left' />
            <GalleryImg img={props.img5} gridSpan={1} alignSelf='flex-start' fade='fade-right' />
            <GalleryImg img={props.img6} gridSpan={1} alignSelf='flex-start' fade='fade-up' />
            <GalleryImg img={props.img7} gridSpan={2} alignSelf='flex-start' fade='fade-up' />
            <GalleryImg img={props.img8} gridSpan={1} alignSelf='flex-start' fade='fade-left' />
        </article>
    )
}

export default Gallery;