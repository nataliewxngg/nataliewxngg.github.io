import Header from "../Components/Header"

export default function Home(props) {
    return (
        <>
            <Header isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />
            <section className={`${props.isDarkMode ? "dark" : ""} bg-bg dark:bg-bg-dark text-primary dark:text-primary-dark py-10`}>
                <h1 className="text-[10rem] font-extrabold leading-[0.8]">Natalie <br></br><span>Wong</span></h1>
            </section>
        </>
    )
}