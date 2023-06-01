import "../styles/globalStyles.css"
import { GlobalStyles } from "twin.macro"
import { Analytics } from '@vercel/analytics/react';
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
	  <Analytics />
      <GoogleAnalytics/>
      <Component {...pageProps}/>
    </>
  )
}

export default App