import { Welcome, Summary } from '../../components'
import { client } from '../../client'
import * as URL from '../../constants/urls'
import techstack from '../../fixtures/techstack'
import { useState, useEffect } from 'react'
import { TiArrowSortedDown } from "react-icons/ti"
import ReactTypingEffect from 'react-typing-effect'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { track } from '@vercel/analytics'

const OverviewContainer = () => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
      const queryOverview = "*[_type == 'overview'] | order(order asc)";
      client.fetch(queryOverview).then(data => setCards(data));
  }, [])

  return (
    <>
      <Welcome>
        <Welcome.Group>
          <Welcome.Howdy>
            <ReactTypingEffect
              text={["<Howdy>"]}
              typingDelay={100}
              eraseDelay={7500}
              cursorRenderer={cursor => <pre>{cursor}</pre>}
              displayTextRenderer={text => <pre>{text}</pre>}
            />
          </Welcome.Howdy>
          <Welcome.HeyThere>
            Hey there!
            <Welcome.Handwave
              src={`${URL.MISC_PARAMS}/handwave.png`}
              alt="Welcome Handwave Emoji"
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{
                delay: 3,
                duration: 1.25,
                repeat: Infinity,
                repeatDelay: 9,
              }}
            />
            <br/>
            I'm <span>Joshua</span></Welcome.HeyThere>
          <Welcome.Howdy>
            <ReactTypingEffect
              text={["</Howdy>"]}
              typingDelay={100}
              speed={190}
              eraseDelay={7500}
              eraseSpeed={155}
              cursorRenderer={cursor => <pre>{cursor}</pre>}
              displayTextRenderer={text => <pre>{text}</pre>}
            />  
          </Welcome.Howdy>
          <Welcome.Image
            id="me"
            src={`${URL.MISC}/me.png`}
            alt="Joshua Nilsson"
          />
          <Welcome.Techstack>
            {techstack?.map((tech, index) => (
              <Welcome.TechstackGroup key={tech?.title + index}>
                <Welcome.TechstackTooltip
                  id={`${tech?.title}-tooltip-${index}`}
                  place="top"
                  type="dark"
                  effect="solid"
                  backgroundColor="#222222"
                  arrowColor="#222222"
                />
                <Welcome.TechstackIcon
                  src={URL.LOGO + tech?.image}
                  alt={tech?.alt}
                  variation={tech?.color}
                  data-tip={tech?.title}
                  data-for={`${tech?.title}-tooltip-${index}`}
                />
                <Welcome.TechstackLetter css={{ color: tech?.color }}>{tech?.letter}</Welcome.TechstackLetter>
              </Welcome.TechstackGroup>
            ))}
          </Welcome.Techstack>
          <Welcome.ButtonGroup>
            <Link href="#projects" passHref>
              <Welcome.Button
                role="link"
                aria-label="Jump To My Projects"
                variation="primary"
				onClick={ () => track(`Project-JumpLink`) }
              >
                 Projects
                <TiArrowSortedDown />
              </Welcome.Button>
            </Link>
            <Link href="#experience" passHref>
              <Welcome.Button
                role="link"
                aria-label="Jump To My Experience"
                variation="secondary"
				onClick={ () => track(`Experience-JumpLink`) }
              >
                Experience
                <TiArrowSortedDown />
              </Welcome.Button>
            </Link>
          </Welcome.ButtonGroup>
        </Welcome.Group>
        <Welcome.CircleGroup>
          <Welcome.Circle
            src={`${URL.MISC}/circle.svg`}
            alt="Small Animated Purple Circle"
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
          <Welcome.Circle
            src={`${URL.MISC}/circle.svg`}
            alt="Medium Animated Purple Circle"
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
          <Welcome.Circle
            src={`${URL.MISC}/circle.svg`}
            alt="Large Animated Purple Circle"
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
        </Welcome.CircleGroup>
      </Welcome>
      <Summary
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {cards?.map((card, index) => (
          <Summary.Card key={card?.title + index}>
            <Summary.Bar/>
            <Summary.Frame>
              <Summary.Heading>
                <span>{card?.highlightedTitle}</span>
                <br/>
                {card?.title}
              </Summary.Heading>
              <Summary.Line />
              <Summary.Image
                src={card?.imageURL}
                alt={card?.title}
              />
              <Summary.Techstack>
                <Summary.TechstackTooltip
                  id={`${card?.title}-tooltip-${index}`}
                  place="top"
                  type="dark"
                  effect="solid"
                  backgroundColor="#222222"
                  arrowColor="#222222"
                  tw="rounded-xl! font-semibold tracking-wide"
                />
                {card?.icons?.map(icon =>
                  <Summary.TechstackIcon
                    src={icon?.iconURL}
                    alt={`${icon?.iconTitle} Summary Techstack Logo`}
                    width={50}
                    height={50}
                    loading="lazy"
                    data-tip={icon?.iconTitle}
                    data-for={`${card?.title}-tooltip-${index}`}
                    key={icon?.iconTitle + icon?.index}
                  />
                )}
              </Summary.Techstack>
            </Summary.Frame>
            <Summary.Bar/>
          </Summary.Card>
        ))}
      </Summary>
    </>
  )
}

Welcome.TechstackIcon.propTypes = {
  variation: PropTypes.string.isRequired,
}

Welcome.Button.propTypes = {
  variation: PropTypes.string.isRequired,
}

export default OverviewContainer