import { useCallback, useEffect, useRef, useState } from "react"
import { Confetti } from "../../styles/globalThemeStyles"
import { Wrapper, Icon, Headline } from './styles'
import PropTypes from 'prop-types'
import trackEvent from '../../utils'

const Banner = ({ children, ...props }) => {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback(instance => refAnimationInstance.current = instance, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
	trackEvent('FeaturedProject-BannerLink');

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

  return (
    <>
      <Wrapper
        id="home"
        href="#projects"
        aria-label="NEW! Featured Project Jump Link"
        onClick={startAnimation}
        {...props}
        >
          {children}
        </Wrapper>
      <Confetti refConfetti={getInstance}/>
    </>
  )
}

Banner.Icon = ({ ...props }) => <Icon {...props}/>
Banner.Headline = ({ children, ...props }) => <Headline {...props}>{children}</Headline>

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
}

Banner.Icon.propTypes = {
  props: PropTypes.object,
}

Banner.Headline.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
}

Confetti.propTypes = {
  refConfetti: PropTypes.func.isRequired,
}

export default Banner