export default function Home(props) {
    return (
        <>
            <header>
                <button onClick={props.toggleDarkMode}>
                    Toggle Dark Mode
                </button>
            </header>
            <main className={`${props.isDarkMode ? "dark" : ""} bg-bg dark:bg-bg-dark text-primary dark:text-primary-dark`}>
                <h1>Home Page</h1>
            </main>
        </>
    )
}