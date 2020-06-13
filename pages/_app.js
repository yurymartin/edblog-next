import Header from "../components/sectiones/Header"
import "../styles/styles.scss"

function App({Component, pageProps}){
    return (
        <>
            <Header />
            <Component {...pageProps}/>
        </>
    )
}
export default App