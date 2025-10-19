import myPortrait from '../../assets/me.jpg'

function About(props) {
    return (
        <section className='bg-white dark:bg-black w-full 
                            2xl:py-40
                            xl:py-30
                            md:py-20
                            py-15
                            2xl:px-30
                            xl:px-20
                            md:px-15
                            px-10'
                ref={props.ref}>

            <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-1xl">
                I love to mess around with new technologies <br />and build elegant, user-centric websites.
            </p>

            <div
                className='2xl:h-150 xl:h-100 lg:h-80 md:h-50 sm:h-40 h-30
                           2xl:my-40 xl:my-30 md:my-20 my-15
                           bg-cover bg-[center_20%] rounded-2xl mx-auto'
                style={{ backgroundImage: `url(${myPortrait})` }}
            />

            {/* TODO: REMOVE - placeholder text */}
            <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-1xl">
                I like to <span className='text-secondary dark:text-secondary-dark'>move it</span> move it.
            </p>

        </section>
    );
}

export default About;