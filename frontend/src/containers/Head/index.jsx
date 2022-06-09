import * as URL from '../../constants/urls'
import Head from 'next/head'

const HeadContainer = () => (
  <Head>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="keywords" content="Joshua Nilsson, Portfolio, Front-End, Software Engineer, Web Developer, Web Designer, UX, UI MERN Stack, MongoDB, ExpressJS, ReactJS, NodeJS, NextJS" />
    <meta name="description" content="Joshua Nilsson's Front-End Software Engineer Portfolio Showcase"/>
    <meta name="author" content="Joshua Nilsson"/>
    <title>Joshua Nilsson | Front-End Software Engineer Portfolio</title>
    <link rel="icon" href={`${URL.LOGO}/logo-initials.svg`} alt="Joshua Nilsson's Portfolio Favicon With Initials"/>

    {/* OPEN GRAPH META TAGS */}
    <meta property="og:title" content="Joshua Nilsson | Front-End Software Engineer Portfolio"/>
    <meta property="og:site_name" content="Joshua Nilsson's Front-End Software Engineer Portfolio"/>
    <meta property="og:description" content="Joshua Nilsson's Front-End Software Engineer Project Portfolio Showcase"/>
    <meta property="og:image" content={`${URL.LOGO}/logo-initials-alt.svg`}/>
    <meta property="og:image:secure_url" content={`${URL.LOGO}/logo-initials-alt.svg`}/>
    <meta property="og:image:alt" content="Joshua Nilsson's Portfolio Logo With Initials"/>
    <meta property="og:image:type" content="image/svg"/>
    <meta property="og:url" content="https://www.joshuanilsson.com"/>
    <meta property="og:type" content="website"/>
    <meta property="og:locale" content="en_US"/>

    {/* TWITTER META TAGS */}
    <meta name="twitter:creator" content="@joshuanilssonx"/>
    <meta name="twitter:site" content="@joshuanilssonx"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="Joshua Nilsson | Front-End Software Engineer Portfolio"/>
    <meta name="twitter:description" content="Joshua Nilsson's Front-End Software Engineer Project Portfolio Showcase"/>
    <meta name="twitter:image" content={`${URL.LOGO}/logo-initials-alt.svg`}/>
    <meta name="twitter:image:alt" content="Joshua Nilsson's Portfolio Logo With Initials"/>
  </Head>
)

HeadContainer.propTypes = {}

export default HeadContainer