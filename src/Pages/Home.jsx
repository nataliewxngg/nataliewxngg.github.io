import Header from "../Components/Header"

export default function Home(props) {
    return (
        <main className={`${props.isDarkMode ? "dark" : ""} bg-bg dark:bg-bg-dark text-primary dark:text-primary-dark 
            min-h-screen py-20 px-130
            flex flex-col gap-20`}>
            <Header toggleDarkMode={props.toggleDarkMode} isDarkMode={props.isDarkMode} />
            <section className={`${props.isDarkMode ? "dark" : ""} bg-bg dark:bg-bg-dark text-primary dark:text-primary-dark py-10`}>
                <h1 className="text-[10rem] font-extrabold leading-[0.8]">Natalie <br></br><span>Wong</span></h1>
                <p className="mt-10 text-3xl font-medium">Aspiring <span className="text-secondary dark:text-secondary-dark">full-stack developer</span> with a passion for creating web applications and discovering new technologies.</p>
            </section>
        </main>
    )
}