function Home(props) {
    return (
        <section className='relative min-h-screen w-full font-semibold pl-5 self-start'
                 ref={props.ref}>

            <h1 className='absolute bottom-10'>
                
                <span className='block leading-[0.65]
                                 2xl:text-[24rem]
                                 xl:text-[20rem]
                                 lg:text-[16rem]
                                 md:text-[13rem]
                                 sm:text-[10rem]
                                 text-8xl
                                 '>Natalie</span>
                
                <span className='block font-medium italic text-secondary dark:text-secondary-dark
                                 2xl:text-[18rem]
                                 xl:text-[14rem]
                                 lg:text-[12rem] 
                                 md:text-[10rem]
                                 sm:text-8xl
                                 text-7xl'>Wong</span>
                
            </h1>

        </section>
    )
}

export default Home;