function Project(props) {
    return <div className='text-center h-full'>
        {/* TODO: Update the alt for the image */}
        <img src={props.img} alt='' className='w-full h-full aspect-square object-cover rounded-xl' />
    </div>
}

export default Project;