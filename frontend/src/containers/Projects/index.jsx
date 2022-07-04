import { popVariant } from '../../styles/globalVariantStyles'
import { Projects, Project, Motion } from '../../components'
import { client } from '../../client'
import * as URL from '../../constants/urls'
import techstack from '../../fixtures/techstack'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react"
import { AiOutlineGithub } from "react-icons/ai"
import { HiOutlineExternalLink } from "react-icons/hi"
import { RiInformationLine } from "react-icons/ri"
import { Pagination, Mousewheel } from "swiper"
import ReactTypingEffect from 'react-typing-effect'
import tw from 'twin.macro'
import PropTypes from 'prop-types'

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([])
  const [projectsMisc, setProjectsMisc] = useState([])

  useEffect(() => {
    const queryProjects = "*[_type == 'project'] | order(order asc)";
    const queryProjectsMisc = "*[_type == 'project-misc'] | order(order asc)";

    client.fetch(queryProjects).then(data => setProjects(data));
    client.fetch(queryProjectsMisc).then(data => setProjectsMisc(data));
  }, [])

  return (
    <Projects>
      <Projects.Heading>
        <ReactTypingEffect
          text={["FEATURED PROJECT"]}
          typingDelay={100}
          eraseDelay={90000}
          cursorRenderer={cursor => <h2 tw="font-light">{cursor}</h2>}
          displayTextRenderer={text => <h2>{text}</h2>}
        />
      </Projects.Heading>
      <Projects.Line/>
      <Projects.Frame>
        <Projects.ProjectGroup
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Projects.ProjectImage src={`${URL.LOGO}/story-forge-logo-text.svg`} alt="Story Forge Alternate Logo" />
          <Projects.ProjectBox>
            <Projects.ProjectButtonGroup>
                <Projects.ProjectButton
                  href={URL.STORY_FORGE_GITHUB}
                  rel="external"
                  role="link"
                  aria-label="Story Forge GitHub Repository Link"
                  target="_blank"
                  // as="a"
                  as="div"
                  variation="primary"
                  data-delay-hide={250}
                  data-offset="{'top': 3}"
                  data-for="project-button-tooltip-alt"
                  data-tip={`
                  <p>Under Development</p>
                  <a
                    href="${URL.STORY_FORGE_PROTOTYPE}"
                    rel="external"
                    aria-label="Story Forge Prototype Tooltip Link" target="_blank"
                    style="user-select: none;"
                  >
                    <img src="${URL.LOGO}/figma.svg" alt="Figma Logo Within Tooltip Link"/>
                  </a>
                  `}
                >
                  {/* <AiOutlineGithub/> */}
                  <RiInformationLine/>
                  GitHub
                </Projects.ProjectButton>

                <Projects.ProjectButton
                  href={URL.STORY_FORGE}
                  rel="external"
                  aria-label="Story Forge External Link &#45; Discover &amp; Create Today"
                  target="_blank"
                  // as="a"
                  as="div"
                  variation="secondary"
                  data-delay-hide={250}
                  data-offset="{'top': 3}"
                  data-for="project-button-tooltip-alt"
                  data-tip={`
                  <p>Under Development</p>
                  <a
                    href="${URL.STORY_FORGE_PROTOTYPE}"
                    rel="external"
                    aria-label="Story Forge Prototype Tooltip Link" target="_blank"
                    style="user-select: none;"
                  >
                    <img src="${URL.LOGO}/figma.svg" alt="Figma Logo Within Tooltip Link"/>
                  </a>
                  `}
                  // ONCE FEATURED PROJECT SHELL COMPLETE
                  // data-tip={`
                  //   <p>Under Development</p>
                  //   <a
                  //     href="${URL.STORY_FORGE}"
                  //     rel="external"
                  //     aria-label="Story Forge External Link &#45; Discover &amp; Create Today"
                  //     target="_blank"
                  //     disabled="true"
                  //   >
                  //   Preview
                  //   </a>
                  //   `}
                >
                  <RiInformationLine/>
                  Preview
                  <Projects.ProjectButtonTooltip
                    id="project-button-tooltip-alt"
                    place="top"
                    type="dark"
                    effect="solid"
                    data-delay-hide={1000}
                    html={true}
                    clickable={true}
                  />
                </Projects.ProjectButton>
                {/* <Projects.ProjectButton href="${URL.STORY_FORGE}" rel="external" aria-label="Story Forge External Link &#45; Discover &amp; Create Today" target="_blank" as="a" variation="secondary">Coming Soon...</Projects.ProjectButton> */}
            </Projects.ProjectButtonGroup>
            <Projects.TechstackGroup>
              {techstack?.map((tech, index) => (
                <Projects.TechstackBox
                  whileInView={{
                    x: [-100, 0],
                    opacity: [0, 1],
                    scale: [0.5, 1],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.25,
                    delay: 1,
                    ease: 'easeInOut',
                  }}
                  key={tech?.id + index}
                >
                  <Projects.TechstackTooltip
                    id={`${tech?.title}-tooltip-alt-${index}`}
                    place="bottom"
                    type="dark"
                    effect="solid"
                    backgroundColor="#222222"
                    arrowColor="#222222"
                    tw="rounded-xl! font-semibold tracking-wide"
                  />
                  <Projects.TechstackIcon
                    src={URL.LOGO + tech?.image}
                    alt={tech?.alt}
                    variation={tech?.color}
                    data-tip={tech?.title}
                    data-for={`${tech?.title}-tooltip-alt-${index}`}
                  />
                </Projects.TechstackBox>
              ))}
            </Projects.TechstackGroup>
          </Projects.ProjectBox>
        </Projects.ProjectGroup>
        <Projects.PreviewGroup
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* <Projects.PreviewImage src={`${URL.MISC_PARAMS}/story-forge-preview.png`} alt="Story Forge Preview" /> */}
          <Projects.PreviewBox>
            <Projects.PreviewLink
              href={URL.STORY_FORGE_PROTOTYPE}
              rel="external"
              aria-label="Preview The Story Forge Prototype With Figma"
              title="Story Forge Prototype"
              target="_blank"
            >
              <Projects.PreviewImage
                src={`${URL.LOGO_PARAMS}/figma.png`}
                alt="Figma Logo For The Story Forge Prototype"
              />
            </Projects.PreviewLink>
            {/* <Projects.PreviewLink href={URL.STORY_FORGE_PROTOTYPE} rel="external" aria-label="Create With Story Forge" title="Story Forge" target="_blank">
              <HiOutlineExternalLink />
            </Projects.PreviewLink> */}
          </Projects.PreviewBox>
        </Projects.PreviewGroup>
      </Projects.Frame>

      {/* PRIMARY PROJECTS SLIDER */}
      <Projects.ProjectSlider
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 32 },
            425: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 64 },
            1536: { slidesPerView: 4, spaceBetween: 64 },
          }}
          mousewheel={true}
          grabCursor={true}
          rewind={true}
          spaceBetween={64}
          modules={[Pagination, Mousewheel]}
          className="projectSwiper"
        >
          {projects?.map((project, index) => (
            <SwiperSlide key={project?.title + index}>
              <Project.Frame>
                <Project.Image src={project?.imageURL} alt={project?.title}/>
                <Project.Group
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                >
                  <Project.Title>{project?.title}</Project.Title>
                  <Project.Box>
                    <Project.Link
                      href={project?.githubURL}
                      rel="external"
                      aria-label={`Visit My ${project?.title} GitHub Repository`}
                      title={`${project?.title} GitHub`}
                      target="_blank"
                      whileInView={{ scale: [0.90, 1] }}
                      transition={{ duration: 0.175 }}
                      variants={popVariant}
                      >
                      <AiOutlineGithub />
                    </Project.Link>
                    {index < 4 &&
                    <Project.Link
                    href={project?.projectURL}
                    rel="external"
                    aria-label={`Visit My ${project?.title} Project`}
                    title={`${project?.title}`}
                    target="_blank"
                    whileInView={{ scale: [0.90, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.175 }}
                    variants={popVariant}
                    >
                      <HiOutlineExternalLink />
                    </Project.Link>
                  }
                  </Project.Box>
                </Project.Group>
              </Project.Frame>
            </SwiperSlide>
          ))}
        </Swiper>
      </Projects.ProjectSlider>

      {/* SECONDARY PROJECTS SLIDER */}
      <Projects.ProjectSlider
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 32 },
            425: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 64 },
            1536: { slidesPerView: 4, spaceBetween: 64 },
          }}
          mousewheel={true}
          grabCursor={true}
          rewind={true}
          spaceBetween={64}
          modules={[Pagination, Mousewheel]}
          className="projectSwiper"
        >
          {projectsMisc?.map((project, index) => (
            <SwiperSlide key={project?.title + index}>
              <Project.Frame>
                <Project.Image src={project?.imageURL} alt={project?.title}/>
                <Project.Group
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                >
                  <Project.Title>{project?.title}</Project.Title>
                  <Project.Link
                    href={project?.projectURL}
                    rel="external"
                    aria-label={`Visit ${project?.title}`}
                    title={`${project?.title} Website`}
                    target="_blank"
                    whileInView={{ scale: [0.90, 1] }}
                    transition={{ duration: 0.175 }}
                    variants={popVariant}
                  >
                    <HiOutlineExternalLink />
                  </Project.Link>
                </Project.Group>
              </Project.Frame>
            </SwiperSlide>
          ))}
        </Swiper>
      </Projects.ProjectSlider>
    </Projects>
  )
}

Projects.ProjectButton.propTypes = {
  variation: PropTypes.string.isRequired,
}

Projects.TechstackIcon.propTypes = {
  variation: PropTypes.string.isRequired,
}

export default Motion(ProjectsContainer, 'projects')