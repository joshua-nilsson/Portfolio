import { HeaderTheme as Header } from '../../styles/globalThemeStyles'
import { Banner, Navigation } from "../../components"
import * as URL from '../../constants/urls'
import logo from "../../fixtures/logo"
import navigation from "../../fixtures/navigation"
import { ThemeProvider } from "styled-components"
import { AiFillGithub } from "react-icons/ai"
import { IoLogoLinkedin } from "react-icons/io5"
import Link from 'next/link'
import PropTypes from 'prop-types'
import va from '@vercel/analytics'

const HeaderContainer = () => (
  <>
    <Banner>
      <Banner.Icon src={`${URL.MISC}/confetti.svg`} alt="Confetti Icon"/>
      <Banner.Headline><strong>NEW</strong> FEATURED PROJECT</Banner.Headline>
      <Banner.Icon src={`${URL.MISC_PARAMS}/jump-arrow.svg`} alt="Jump Icon To Featured Project"/>
    </Banner>
    <Header>
      <ThemeProvider theme={{ navigationType: "header" }}>
        <Navigation area="header">
          <Link href="#home" passHref>
            <Navigation.IconLink aria-label="Home Logo - Jump To Home" dangerouslySetInnerHTML={{ __html: logo.image }}/>
          </Link>
          <Navigation.NavigationGroup>
            <Navigation.Menu aria-label="Home Navigation">
              <Navigation.List>
                {navigation?.map((nav, index) => (
                  <Navigation.ListItem key={nav?.name + index}>
                    <Link href={nav?.url} passHref>
                      <Navigation.ListItemLink aria-label={nav?.label} onClick={ () => va.track(`${nav?.name}-HeaderNavigationLink`) }>
                        {nav?.name}
                      </Navigation.ListItemLink>
                    </Link>
                  </Navigation.ListItem>
                ))}
              </Navigation.List>
            </Navigation.Menu>
          </Navigation.NavigationGroup>
          <Navigation.SocialGroup>
            <Navigation.SocialLink
              href={URL.GITHUB}
              rel="external"
              aria-label="Visit Joshua Nilsson's GitHub Repository"
              title="GitHub"
              target="_blank">
              <AiFillGithub />
            </Navigation.SocialLink>
            <Navigation.SocialLink
              href={URL.LINKEDIN}
              rel="external"
              aria-label="Visit Joshua Nilsson's LinkedIn Profile"
              title="LinkedIn"
              target="_blank">
              <IoLogoLinkedin />
            </Navigation.SocialLink>
          </Navigation.SocialGroup>
        </Navigation>
      </ThemeProvider>
    </Header>
  </>
)

ThemeProvider.propTypes = {
  theme: PropTypes.shape({
    navigationType: PropTypes.string.isRequired,
  })
}

Navigation.propTypes = {
  area: PropTypes.string.isRequired,
}

export default HeaderContainer