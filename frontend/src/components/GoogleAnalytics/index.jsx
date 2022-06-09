import Script from "next/script"
import PropTypes from 'prop-types'

const GoogleAnalytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}, {
          page_path: window.location.pathname,
        });
      `}
    </Script>
  </>
)

GoogleAnalytics.propTypes = {}

export default GoogleAnalytics