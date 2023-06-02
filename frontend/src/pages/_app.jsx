import "../styles/globalStyles.css"
import { GlobalStyles } from "twin.macro"
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from "react"
import Router from "next/router"
import { GoogleAnalytics, event } from "nextjs-google-analytics";
import TagManager from 'react-gtm-module';

export function reportWebVitals({ id, name, label, value }) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

const App = ({ Component, pageProps }) => {

  useEffect(() => {
    const { pathname } = Router
    pathname !== '/' && Router.push('/')
	TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  }, []);

  return (
    <>
      <GlobalStyles/>
	  <Analytics />
	  <GoogleAnalytics
		gaMeasurementId={ process.env.NEXT_PUBLIC_GA_ID }
		trackPageViews
	  />
      <Component {...pageProps}/>
    </>
  )
}

export default App