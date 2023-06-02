import * as URL from '../../constants/urls'
import logo from "../../fixtures/logo"
import navigation from "../../fixtures/navigation"
import { ThemeProvider } from "styled-components"
import { Footer, Navigation } from "../../components"
import { AiFillGithub } from "react-icons/ai"
import { IoLogoLinkedin } from "react-icons/io5"
import { HiOutlineExternalLink } from "react-icons/hi"
import Link from 'next/link'
import PropTypes from 'prop-types'
import { trackEvent } from '../../utils'

const FooterContainer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Footer
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Footer.CircleGroup>
        <Footer.BackgroundImage src="https://res.cloudinary.com/joshuanilsson/portfolio/misc/blob-alt.svg" alt="Decorative Footer Blob Background" />
        <Footer.Circle
          src={`${URL.MISC}/circle.svg`}
          alt="Small Decorative Purple Circle"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [-64, 0, 36, 0],
            y: [0, -36, 0, 36]
          }}
          transition={{
            ease: [0.445, 0.050, 0.550, 0.950],
            duration: 18,
            delay: 0.5,
            repeatType: "reverse",
            repeat: Infinity
          }}
        />
        <Footer.Circle
          src={`${URL.MISC}/circle.svg`}
          alt="Medium Decorative Purple Circle"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -48, 0, 12],
            y: [-24, 0, -24, 0]
          }}
          transition={{
            ease: [0.445, 0.050, 0.550, 0.950],
            duration: 18,
            delay: 0.5,
            repeatType: "reverse",
            repeat: Infinity
          }}
        />
        <Footer.Circle
          src={`${URL.MISC}/circle.svg`}
          alt="Large Decorative Purple Circle"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -24, 0, 64],
            y: [-12, 0, -64, 0]
          }}
          transition={{
            ease: [0.445, 0.050, 0.550, 0.950],
            duration: 18,
            delay: 0.5,
            repeatType: "reverse",
            repeat: Infinity
          }}
        />
      </Footer.CircleGroup>
      <Footer.Expander>
        <ThemeProvider theme={{ navigationType: "footer" }}>
          <Navigation area="footer">
            <Link href="#home" passHref>
              <Navigation.IconLink
			    aria-label="Footer Logo - Jump To Home"
				dangerouslySetInnerHTML={{ __html: logo.imageAlt }}
				onClick={ () => trackEvent(`Home-FooterLogoLink`) }
			  />
            </Link>
            <Navigation.NavigationGroup>
              <Navigation.Menu aria-label="Home Navigation">
                <Navigation.List>
                  {navigation?.map((nav, index) => (
                    <Navigation.ListItem key={nav?.name + index}>
                      <Link href={nav?.url} passHref>
                        <Navigation.ListItemLink aria-label={nav?.label} onClick={ () => trackEvent(`${nav?.name}-FooterLink`) }>
                          {nav?.name}
                        </Navigation.ListItemLink>
                      </Link>
                    </Navigation.ListItem>
                  ))}
                </Navigation.List>
              </Navigation.Menu>
              <Footer.Box>
                <Footer.Info>Crafted with <strong>React</strong> &#43; <br/> <strong>Tailwind</strong> &amp; <strong>Styled-Components</strong></Footer.Info>
                <Footer.Info>Copyright <sup>&reg;</sup> {currentYear} | Joshua Nilsson</Footer.Info>
                <Footer.Link
                  href={URL.PORTFOLIO_PROTOTYPE}
                  rel="external"
                  aria-label="Preview Joshua Nilsson's Portfolio Prototype With Figma"
                  target="_blank"
				  onClick={ () => trackEvent(`Figma-FooterLink`) }
				>
                  <Footer.Image src={`${URL.LOGO_PARAMS}/figma.png`} alt="Figma Logo For Joshua Nilsson's Porfolio Prototype" />
                  &nbsp;Figma Prototype&nbsp;
                  <HiOutlineExternalLink />
                </Footer.Link>
              </Footer.Box>
            </Navigation.NavigationGroup>
            <Navigation.SocialGroup>
              <Navigation.SocialLink
                href={URL.GITHUB}
                rel="external"
                aria-label="Visit Joshua Nilsson's GitHub Repository"
                title="GitHub"
                target="_blank"
				onClick={ () => trackEvent(`GitHub-FooterLink`) }
			  >
                <AiFillGithub />
              </Navigation.SocialLink>
              <Navigation.SocialLink
                href={URL.LINKEDIN}
                rel="external"
                aria-label="Visit Joshua Nilsson's LinkedIn Profile"
                title="LinkedIn"
                target="_blank"
				onClick={ () => trackEvent(`LinkedIn-FooterLink`) }
			  >
                <IoLogoLinkedin />
              </Navigation.SocialLink>
            </Navigation.SocialGroup>
          </Navigation>
        </ThemeProvider>
      </Footer.Expander>
    </Footer>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.shape({
    navigationType: PropTypes.string.isRequired,
  })
}

Navigation.propTypes = {
  area: PropTypes.string.isRequired,
}

export default FooterContainer