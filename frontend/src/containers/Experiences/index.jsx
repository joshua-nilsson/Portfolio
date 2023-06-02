import "swiper/css"
import "swiper/css/pagination"
import { popVariant } from '../../styles/globalVariantStyles'
import { Experiences, Experience, Courses, Course, Certificates, Certificate, Motion } from '../../components'
import { client } from '../../client'
import * as URL from '../../constants/urls'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel } from "swiper"
import { HiOutlineExternalLink } from "react-icons/hi"
import ReactTypingEffect from 'react-typing-effect'
import tw from 'twin.macro'
import PropTypes from 'prop-types'
import { trackEvent } from '../../utils'

const ExperiencesContainer = () => {
  const [experiences, setExperiences] = useState([])
  const [courses, setCourses] = useState([])
  const [certificates, setCertificates] = useState([])
  
  useEffect(() => {
    const queryExperiences = "*[_type == 'experience'] | order(order asc)";
    const queryCourses = "*[_type == 'course'] | order(order asc)";
    const queryCertificates = "*[_type == 'certificate'] | order(order asc)";

    client.fetch(queryExperiences).then(data => setExperiences(data));
    client.fetch(queryCourses).then(data => setCourses(data));
    client.fetch(queryCertificates).then(data => setCertificates(data));
  }, [])

  return (
    <>
    <Experiences.CircleGroup
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Experiences.Circle
        src={`${URL.MISC}/circle-alt.svg`}
        alt="Small Animated Gray Circle"
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
      <Experiences.Circle
        src={`${URL.MISC}/circle-alt.svg`}
        alt="Medium Animated Gray Circle"
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
      <Experiences.Circle
        src={`${URL.MISC}/circle-alt.svg`}
        alt="Large Animated Gray Circle"
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
    </Experiences.CircleGroup>
    <Experiences
      id="experience"
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Experiences.Heading>
        <ReactTypingEffect
          text={["EXPERIENCE"]}
          typingDelay={100}
          eraseDelay={90000}
          cursorRenderer={cursor => <h2 tw="font-light">{cursor}</h2>}
          displayTextRenderer={text => <h2>{text}</h2>}
        />
      </Experiences.Heading>
      <Experiences.Line/>

      <Experiences.Frame>
        {experiences?.map((experience, index) => (
          <Experience className={experience?.gridArea} key={experience?.title + index}>
            <Experience.Frame>
              <Experience.Image src={experience?.imageURL} alt={experience?.title} loading="lazy" />
              <Experience.Group>
                <Experience.Box type="primary">{experience?.primaryText}</Experience.Box>
                <Experience.Box type="secondary">{experience?.secondaryText}</Experience.Box>
              </Experience.Group>
            </Experience.Frame>
          </Experience>
        ))}
      </Experiences.Frame>
      <Courses>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 32 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          768: { slidesPerView: 3, spaceBetween: 32 },
          1024: { slidesPerView: 3, spaceBetween: 64 },
        }}
        mousewheel={true}
        grabCursor={true}
        rewind={true}
        modules={[Pagination, Mousewheel]}
        className="courseSwiper">
          {courses?.map((course, index) => (
            <SwiperSlide key={course?.title + index}>
              <Course>
                <Course.Frame>
                  <Course.Image src={course?.imageURL} alt={`BYU-Idaho Course - ${course?.title}`}/>
                  <Course.Bar/>
                  <Course.Group>
                    <Course.Box type="primary">{course?.primaryText}</Course.Box>
                    <Course.Box type="secondary">{course?.secondaryText}</Course.Box>
                  </Course.Group>
                </Course.Frame>
              </Course>
            </SwiperSlide>
          ))}
        </Swiper>
      </Courses>
      <Certificates>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 32 },
            425: { slidesPerView: 2, spaceBetween: 32 },
            640: { slidesPerView: 2, spaceBetween: 32 },
            768: { slidesPerView: 3, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 64 },
            1536: { slidesPerView: 4, spaceBetween: 64 }
          }}
          mousewheel={true}
          grabCursor={true}
          rewind={true}
          modules={[Pagination, Mousewheel]}
          className="certificateSwiper">
            {certificates?.map((certificate, index) => (
              <SwiperSlide key={certificate?.title + index}>
              <Certificate>
                <Certificate.Frame>
                  <Certificate.Image src={certificate?.imageURL} alt={`Udemy Certificate - ${certificate?.title}`} loading="lazy" />
                  <Certificate.Group
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <Certificate.Title>View Certificate</Certificate.Title>
                    <Certificate.Link
                      href={certificate?.linkURL}
                      rel="external"
                      aria-label={certificate?.title}
                      target="_blank"
                      whileInView={{ scale: [0.90, 1] }}
                      transition={{ duration: 0.175 }}
                      variants={popVariant}
					  onClick={ () => trackEvent(`${certificate?.title?.replace(/\s+/g, '') }-Link`) }
                    >
                      <HiOutlineExternalLink />
                    </Certificate.Link>
                  </Certificate.Group>
                </Certificate.Frame>
              </Certificate>
              </SwiperSlide>
            ))}
        </Swiper>
      </Certificates>
    </Experiences>
    </>
  )
}

Experience.Box.propTypes = {
  type: PropTypes.string.isRequired
}

Course.Box.propTypes = {
  type: PropTypes.string.isRequired
}

export default Motion(ExperiencesContainer, 'exp')