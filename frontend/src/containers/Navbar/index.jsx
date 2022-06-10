import { Confetti } from "../../styles/globalThemeStyles"
import { Navbar } from '../../components'
import * as URL from '../../constants/urls'
import navigation from "../../fixtures/navigation"
import { useState, useEffect, useCallback, useRef } from "react"
import { AiFillHome } from "react-icons/ai"
import { MdFolder, MdPersonPin } from "react-icons/md"
import { IoNewspaper } from "react-icons/io5"
import { BiCodeBlock } from "react-icons/bi"
import Link from "next/link"
import PropTypes from 'prop-types'

const NavbarContainer = ({ children, ...props }) => {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();
  const [isActive, setIsActive] = useState(false)
  
  const Icons = [<AiFillHome/>, <MdFolder/>, <IoNewspaper/>, <BiCodeBlock/>, <MdPersonPin/>];

  const getInstance = useCallback(instance => refAnimationInstance.current = instance, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) setIntervalId(setInterval(nextTickAnimation, 400));

    // After 4 Bursts Clear Animation, Then Reset Animation Instance
    setTimeout(() => {
      clearInterval(intervalId);
      setIntervalId(null);
      setTimeout(() => refAnimationInstance.current && refAnimationInstance.current.reset(), 1600);
    }, 1600);
  }, [intervalId, nextTickAnimation]);

  useEffect(() => () => clearInterval(intervalId), [intervalId]);

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const getAnimationSettings = (originXA, originXB) => {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2
      }
    };
  }

  const handleClick = () => {
    startAnimation()
    setIsActive(true)
    setTimeout(() => setIsActive(false), 2750)
  }

  return (
    <section {...props}>
      {children}
      <Navbar
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut'
        }}
      >
        <Navbar.Menu>
          <Navbar.List>
            {navigation?.map((nav, index) => (
              <Navbar.ListItem key={nav?.name + index} passHref>
                <Link href={nav?.url} passHref>
                  <Navbar.ListItemLink aria-label={nav?.label}>
                    <Navbar.ListItemIcon>{Icons[index]}</Navbar.ListItemIcon>
                    <Navbar.ListItemText>{nav?.name}</Navbar.ListItemText>
                  </Navbar.ListItemLink>
                </Link>
              </Navbar.ListItem>
            ))}
            <Navbar.Disk/>
          </Navbar.List>
        </Navbar.Menu>
        <Navbar.Link href="#projects" aria-label="Story Forge Jump Link To Project" onClick={handleClick}>
          <Navbar.Image src={isActive ? `${URL.MISC}/confetti.svg` : `${URL.LOGO}/story-forge.svg`} alt="Story Forge Logo For Jump Link To Projects Section" isActive={isActive}/>
        </Navbar.Link>
      </Navbar>
      <Confetti refConfetti={getInstance}/>
    </section>
  )
}

Navbar.Image.propTypes = {
  isActive: PropTypes.bool.isRequired,
}

Confetti.propTypes = {
  refConfetti: PropTypes.func.isRequired,
}

export default NavbarContainer