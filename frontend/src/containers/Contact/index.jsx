import { Confetti } from '../../styles/globalThemeStyles'
import { Contact, Motion } from '../../components'
import { schema } from '../../schema'
import { client } from '../../client'
import * as URL from '../../constants/urls'
import { useState, useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { FaUser, FaCommentAlt } from "react-icons/fa"
import { MdOutlineError } from "react-icons/md"
import { HiAtSymbol } from "react-icons/hi"
import ReactTypingEffect from 'react-typing-effect'
import tw from 'twin.macro'
import PropTypes from 'prop-types'

const ContactContainer = () => {
  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => refAnimationInstance.current = instance, []);
  const makeShot = useCallback((particleRatio, opts) => refAnimationInstance.current && refAnimationInstance.current({ ...opts, origin: { y: 0.7 }, particleCount: Math.floor(200 * particleRatio) }), []);

  const fire = useCallback(() => {
      makeShot(0.25, { spread: 26, startVelocity: 55 });
      makeShot(0.2, { spread: 60 });
      makeShot(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      makeShot(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      makeShot(0.1, { spread: 120, startVelocity: 45 });
  }, [makeShot]);

  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' })
  const [isLoading, setLoading] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const { fullName, email, message } = formData

  const isEmpty = fullName.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: 'onChange',
    defaultValues: formData,
  });

  const handleFormInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value})
  }

  const handleFormSubmit = () => {
    setLoading(true)

    const user = {
      _type: 'contact',
      subject: `${formData.fullName}: ${formData.message.substring(0, 50)}...`,
      fullName: formData.fullName,
      email: formData.email,
      message: formData.message
    }

    client.create(user)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
        setTimeout(() => fire(), 500)
      })
      .catch(error => console.log(error))
  }

  return (
    <>
    <Contact>
      <Contact.Heading>
        <ReactTypingEffect
          text={["CONTACT"]}
          typingDelay={100}
          eraseDelay={90000}
          cursorRenderer={cursor => <h2 tw="font-light">{cursor}</h2>}
          displayTextRenderer={text => <h2>{text}</h2>}
        />
      </Contact.Heading>
      <Contact.Line/>
      <Contact.Frame>
        {/* EMAIL CONTACT */}
        <Contact.InfoGroup
          href="mailto:joshuanilssonx@gmail.com"
          aria-label="Send A Message To Joshua Nilsson's Email Address"
        >
          <Contact.InfoIcon
            src={`${URL.MISC}/email.svg`}
            alt="Joshua Nilsson's Email Address"
            whileInView={{
              rotate: [0, 8, -4, 4, 0],
              y: [0, -8, 0]
            }}
            whileHover={{
              rotate: [0, 8, -4, 4, 0],
              y: [0, -8, 0]
            }}
            transition={{
              delay: 2.75,
              duration: .75,
              repeat: Infinity,
              repeatDelay: 18,
            }}
          />
          <Contact.InfoText>joshuanilssonx@gmail.com</Contact.InfoText>
        </Contact.InfoGroup>
        {/* PHONE CONTACT */}
        <Contact.InfoGroup href="tel:+1 (918)-237-3612" aria-label="Call Joshua Nilsson's Phone Number">
          <Contact.InfoIcon
            src={`${URL.MISC}/phone.svg`}
            alt="Joshua Nilsson's Mobile Phone Number"
            whileInView={{
              rotate: [0, 8, -4, 4, 0],
              y: [0, -8, 0]
            }}
            whileHover={{
              rotate: [0, 8, -4, 4, 0],
              y: [0, -8, 0]
            }}
            transition={{
              delay: 3,
              duration: .75,
              repeat: Infinity,
              repeatDelay: 18,
            }}
          />
          <Contact.InfoText>+1 (918)-237-3612</Contact.InfoText>
        </Contact.InfoGroup>
      </Contact.Frame>

      {/* FORM */}
      <Contact.Form method="POST" onSubmit={handleSubmit(handleFormSubmit)}>
        <Contact.FormFrame>
          {/* FULL NAME */}
          <Contact.FormGroup isLength={fullName.length > 0}>
            <Contact.FormInput id="fullName" className="peer" type="text" name="fullName" placeholder=" " {...register("fullName")} disabled={isFormSubmitted} value={fullName} onChange={handleFormInputChange}/>
            <Contact.FormIconLabel htmlFor="fullName" title="Full Name" aria-label="Full Name Button Label">
              <FaUser />
            </Contact.FormIconLabel>
            <Contact.FormInputLabel htmlFor="fullName">Full Name</Contact.FormInputLabel>
          </Contact.FormGroup>
          {errors?.fullName && <Contact.FormErrorMessage><MdOutlineError/> {errors.fullName?.message}</Contact.FormErrorMessage>}

          {/* EMAIL ADDRESS */}
          <Contact.FormGroup isLength={email.length > 0}>
            <Contact.FormInput id="email" className="peer" type="email" name="email" placeholder=" " {...register("email")} disabled={isFormSubmitted} value={email} onChange={handleFormInputChange}/>
            <Contact.FormIconLabel htmlFor="email" title="Email Address" aria-label="Email Address Button Label">
              <HiAtSymbol />
            </Contact.FormIconLabel>
            <Contact.FormInputLabel htmlFor="email">Email Address</Contact.FormInputLabel>
          </Contact.FormGroup>
          {errors?.email && <Contact.FormErrorMessage><MdOutlineError/> {errors.email?.message}</Contact.FormErrorMessage>}

          {/* YOUR MESSAGE */}
          <Contact.FormGroup isLength={message.length > 0}>
            <Contact.FormTextarea id="message" className="peer" name="message" placeholder=" " row="6" col="6" {...register("message")} disabled={isFormSubmitted} value={message} onChange={handleFormInputChange}/>
            <Contact.FormIconLabel htmlFor="message" title="Your Message..." aria-label="Your Message... Button Label">
              <FaCommentAlt />
            </Contact.FormIconLabel>
            <Contact.FormTextareaLabel htmlFor="message">Your Message...</Contact.FormTextareaLabel>
          </Contact.FormGroup>
          {errors?.message && <Contact.FormErrorMessage><MdOutlineError/> {errors.message?.message}</Contact.FormErrorMessage>}
        </Contact.FormFrame>

        {/* SUBMIT BUTTON */}
        <Contact.FormFrame>
          <Contact.FormButtonGroup
            data-tip={isEmpty && "Empty Form Field(s)"}
            data-for={`form-button-tooltip`}
          >
            {!isFormSubmitted ? (
              <Contact.FormButton
                disabled={isEmpty}
                isLoading={isLoading}
              >
                {isEmpty && 
                <Contact.FormButtonTooltip
                  id={`form-button-tooltip`}
                  place="top"
                  type="dark"
                  effect="solid"
                  backgroundColor="#222222"
                  arrowColor="#222222"
                  tw="rounded-xl! font-semibold tracking-wide"
                  wrapper="span"
                />}
                {!isLoading ? "Send Message" : <Contact.FormButtonLoader size={14} isLoading={isLoading}/>}
              </Contact.FormButton>
            ) : (
              <Contact.FormSubmitMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Message Sent!
                <Contact.FormSubmitMessageEmoji
                  src={`${URL.MISC}/heart.svg`}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.5, 1, 1.5, 1, 1] }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: 'easeInOut',
                  }}
                />
              </Contact.FormSubmitMessage>
            )}
          </Contact.FormButtonGroup>
        </Contact.FormFrame>
      </Contact.Form>
    </Contact>
    <Confetti refConfetti={getInstance}/>
    </>
  )
}

Contact.FormGroup.propTypes = {
  isLength: PropTypes.bool.isRequired,
}

Contact.FormButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

Contact.FormButtonLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

Confetti.propTypes = {
  refConfetti: PropTypes.func.isRequired,
}

export default Motion(ContactContainer, 'contact')