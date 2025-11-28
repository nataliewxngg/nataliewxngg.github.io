import GalleryImg from './GalleryImg';

function Gallery(props) {

    return (
        <article className='grid grid-cols-7 grid-rows-auto gap-3 grid-flow-row
                            2xl:mt-25 xl:mt-15 md:mt-10 my-5
                            '>
            <GalleryImg img={props.img1} gridSpan={props.img1Span} alignSelf={props.img1AlignSelf} fade='r' />
            <GalleryImg img={props.img2} gridSpan={props.img2Span} alignSelf={props.img2AlignSelf} fade='r' />
            <GalleryImg img={props.img3} gridSpan={props.img3Span} alignSelf={props.img3AlignSelf} fade='r' />
            <GalleryImg img={props.img4} gridSpan={props.img4Span} alignSelf={props.img4AlignSelf} fade='r' />
            <GalleryImg img={props.img5} gridSpan={props.img5Span} alignSelf={props.img5AlignSelf} fade='r' />
            <GalleryImg img={props.img6} gridSpan={props.img6Span} alignSelf={props.img6AlignSelf} fade='r' />
            <GalleryImg img={props.img7} gridSpan={props.img7Span} alignSelf={props.img7AlignSelf} fade='l' />
            <GalleryImg img={props.img8} gridSpan={props.img8Span} alignSelf={props.img8AlignSelf} fade='l' />
            <GalleryImg img={props.img9} gridSpan={props.img9Span} alignSelf={props.img9AlignSelf} fade='l' />
            <GalleryImg img={props.img10} gridSpan={props.img10Span} alignSelf={props.img10AlignSelf} fade='l' />
            <GalleryImg img={props.img11} gridSpan={props.img11Span} alignSelf={props.img11AlignSelf} fade='l' />
            <GalleryImg img={props.img12} gridSpan={props.img12Span} alignSelf={props.img12AlignSelf} fade='l' />
        </article>
    )
}

export default Gallery;