import Header from "../Components/Header"

export default function Home(props) {
    return (
        <>
            <Header isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />
        </>
    )
}