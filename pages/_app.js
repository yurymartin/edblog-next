import Header from "../components/section/Header"

function App({Component, pageProps}){
    return (
        <>
            <Header />
            <Component {...pageProps}/>
        </>
    )
}
export default App