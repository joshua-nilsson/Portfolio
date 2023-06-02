import { FeaturedSkills, FeaturedSkill, Skills, Skill, Motion } from '../../components'
import { useState, useEffect } from 'react'
import { client } from '../../client'
import * as URL from '../../constants/urls'
import ReactTypingEffect from 'react-typing-effect'
import tw from 'twin.macro'
import PropTypes from 'prop-types'
import { track } from '@vercel/analytics'

const TechstackContainer = () => {
  const [featuredSkills, setFeaturedSkills] = useState([])
  const [skills, setSkills] = useState([])
  const [filterSkills, setFilterSkills] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Techstack');
  const [animateSkills, setAnimateSkills] = useState({ y: 0, opacity: 1 })
  
  useEffect(() => {
    const queryFeaturedSkills = "*[_type == 'featured-skill'] | order(order asc)";
    const querySkills = "*[_type == 'skill'] | order(order asc)";

    client.fetch(queryFeaturedSkills).then(data => setFeaturedSkills(data));
    client.fetch(querySkills).then(data => {
      setSkills(data);
      setFilterSkills(data.filter((skill) => skill.tags.includes('Techstack')));
    });
  }, [])

  const handleSkillsFilter = item => {
	track(`${item}-FilterTab`)

    if (activeFilter !== item) {
      setActiveFilter(item);
      setAnimateSkills([{ y: 100, opacity: 0 }]);
    }

    setTimeout(() => {
      setAnimateSkills([{ y: 0, opacity: 1 }]);
      setFilterSkills(skills.filter((skill) => skill.tags.includes(item)));
    }, 500);
  };

  return (
    <>
      <FeaturedSkills.CircleGroup
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <FeaturedSkills.Circle
          src={`${URL.MISC}/circle-alt.svg`}
          alt="Small Decorative Gray Circle"
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
        <FeaturedSkills.Circle
          src={`${URL.MISC}/circle-alt.svg`}
          alt="Medium Decorative Gray Circle"
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
        <FeaturedSkills.Circle
          src={`${URL.MISC}/circle-alt.svg`}
          alt="Large Decorative Gray Circle"
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
          <FeaturedSkills.PreviewGroup
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FeaturedSkills.PreviewBox>
              <FeaturedSkills.PreviewTooltip
                id={`resume-tooltip`}
                place="top"
                type="dark"
                effect="solid"
                html={true}
                backgroundColor="#443a8c"
                arrowColor="#7d71e0"
              />
              <FeaturedSkills.PreviewButton
                href={`${URL.DEFAULT}/joshua-nilsson-resume.pdf`}
                rel="external"
                aria-label="Preview &amp; Download Joshua Nilsson's Resume"
                target="_blank"
                as="a"
                variation="primary"
                data-for="resume-tooltip"
                data-tip={`<img src="${URL.MISC}/resume.svg"/><small>Resume</small>`}
				onClick={ () => track(`Resume-PDFLink`) }
              >
                <FeaturedSkills.PreviewIcon
                  src={`${URL.MISC}/download.svg`}
                  alt="Preview/Download Resume Icon"
                  loading="lazy"
                />
              </FeaturedSkills.PreviewButton>
              <FeaturedSkills.PreviewText>Resume</FeaturedSkills.PreviewText>
            </FeaturedSkills.PreviewBox>
            <FeaturedSkills.PreviewBox>
              <FeaturedSkills.PreviewTooltip
                  id={`diploma-tooltip`}
                  place="top"
                  type="dark"
                  effect="solid"
                  html={true}
                  backgroundColor="#443a8c"
                  arrowColor="#7d71e0"
                />
              <FeaturedSkills.PreviewButton
                href={`${URL.DEFAULT}/joshua-nilsson-diploma.pdf`}
                rel="external"
                aria-label="Preview &amp; Download Joshua Nilsson's Bachelor Of Science - Web Design &amp; Development"
                target="_blank"
                as="a"
                variation="secondary"
                data-for="resume-tooltip"
                data-tip={`<img src="${URL.MISC}/diploma.svg"/><small>Diploma</small>`}
				onClick={ () => track(`Diploma-PDFLink`) }
              >
                <FeaturedSkills.PreviewIcon
                  src={`${URL.MISC}/jump-arrow.svg`}
                  alt="Preview/Download Diploma Icon"
                  loading="lazy"
                />
              </FeaturedSkills.PreviewButton>
              <FeaturedSkills.PreviewText>Diploma</FeaturedSkills.PreviewText>
            </FeaturedSkills.PreviewBox>
          </FeaturedSkills.PreviewGroup>
      </FeaturedSkills.CircleGroup>
      <FeaturedSkills
        id="techstack"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeaturedSkills.Heading>
          <ReactTypingEffect
            text={["TECHSTACK"]}
            typingDelay={100}
            eraseDelay={90000}
            cursorRenderer={cursor => <h2 tw="font-light">{cursor}</h2>}
            displayTextRenderer={text => <h2>{text}</h2>}
          />
        </FeaturedSkills.Heading>
        <FeaturedSkills.Line/>
        <FeaturedSkills.Frame>
          {/* FEATURED SKILLS GROUP 1 */}
          <FeaturedSkills.Group>
            <FeaturedSkill>
              <FeaturedSkill.Image
                src={featuredSkills[0]?.imageURL}
                alt={`${featuredSkills[0]?.title} Logo`}
                loading="lazy"
              />
            </FeaturedSkill>
          </FeaturedSkills.Group>

          {/* FEATURED SKILLS GROUP 2 */}
          <FeaturedSkills.Group>
            <FeaturedSkill>
              <FeaturedSkill.Image
                src={featuredSkills[1]?.imageURL}
                alt={`${featuredSkills[1]?.title} Logo`}
                loading="lazy"
              />
            </FeaturedSkill>
            <FeaturedSkill>
              <FeaturedSkill.Image
                src={featuredSkills[2]?.imageURL}
                alt={`${featuredSkills[2]?.title} Logo`}
                loading="lazy"
              />
            </FeaturedSkill>
          </FeaturedSkills.Group>

          {/* FEATURED SKILLS GROUP 3 */}
          <FeaturedSkills.Group>
            <FeaturedSkill>
              <FeaturedSkill.Image
                src={featuredSkills[3]?.imageURL}
                alt={`${featuredSkills[3]?.title} Logo`}
                loading="lazy"
              />
            </FeaturedSkill>
            <FeaturedSkill>
              <FeaturedSkill.Image
                src={featuredSkills[4]?.imageURL}
                alt={`${featuredSkills[4]?.title} Logo`}
                loading="lazy"
              />
            </FeaturedSkill>
            <FeaturedSkill>
              <FeaturedSkill.Image
                src={featuredSkills[5]?.imageURL}
                alt={`${featuredSkills[5]?.title} Logo`}
                loading="lazy"
              />
            </FeaturedSkill>
          </FeaturedSkills.Group>

          {/* FEATURED SKILLS GROUP 4 */}
          <FeaturedSkills.Group>
            <FeaturedSkill>
              <FeaturedSkill.Image
                src={featuredSkills[6]?.imageURL}
                alt={`${featuredSkills[6]?.title} Logo`}
                loading="lazy"
              />
            </FeaturedSkill>
            <FeaturedSkill>
              <FeaturedSkill.Image
                src={featuredSkills[7]?.imageURL}
                alt={`${featuredSkills[7]?.title} Logo`}
                loading="lazy"
              />
            </FeaturedSkill>
          </FeaturedSkills.Group>

          {/* FEATURED SKILLS GROUP 5 */}
          <FeaturedSkills.Group>
            <FeaturedSkill>
              <FeaturedSkill.Image
                src={featuredSkills[8]?.imageURL}
                alt={`${featuredSkills[8]?.title} Logo`}
                loading="lazy"
              />
            </FeaturedSkill>
          </FeaturedSkills.Group>
        </FeaturedSkills.Frame>
        <Skills>
          <Skills.ButtonGroup>
            {['Techstack', 'Auxiliary'].map((filter, index) => (
              <Skills.Button
                onClick={() => handleSkillsFilter(filter)}
                isActive={activeFilter === filter && true}
                key={filter + index}
              >
                {filter}
              </Skills.Button>
            ))}
          </Skills.ButtonGroup>
          <Skills.Frame
            animate={animateSkills}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            {filterSkills?.map((skill, index) => (
              <Skill key={skill?.title + index}>
                <Skill.Circle>
                  <Skill.Image
                    src={skill?.imageURL}
                    alt={`${skill?.title} Logo`}
                    loading="lazy"
                  />
                </Skill.Circle>
                <Skill.Title>{skill?.title}</Skill.Title>
              </Skill>
            ))}
          </Skills.Frame>
        </Skills>
      </FeaturedSkills>
    </>
  )
}

FeaturedSkills.PreviewButton.propTypes = {
  variation: PropTypes.string.isRequired,
}

Skills.Button.propTypes = {
  isActive: PropTypes.bool.isRequired,
}

export default Motion(TechstackContainer, 'tech')