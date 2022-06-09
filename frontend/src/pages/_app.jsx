import "../styles/globalStyles.css"
import { GlobalStyles } from "twin.macro"
import { GoogleAnalytics } from "../components"
import { useEffect } from "react"
import Router from "next/router"

const App = ({ Component, pageProps }) => {

  useEffect(() => {
    const { pathname } = Router
    pathname !== '/' && Router.push('/')
  }, []);

  return (
    <>
      <GlobalStyles/>
      <GoogleAnalytics/>
      <Component {...pageProps}/>
    </>
  )
}

export default App