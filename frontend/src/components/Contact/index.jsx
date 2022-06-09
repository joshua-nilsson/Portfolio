import { Wrapper, Heading, Line, Frame, InfoGroup, InfoIcon, InfoText, Form, FormFrame, FormGroup, FormInput, FormTextarea, FormIconLabel, FormInputLabel, FormTextareaLabel, FormButtonGroup, FormButton, FormButtonTooltip, FormButtonLoader, FormErrorMessage, FormSubmitMessage, FormSubmitMessageEmoji } from './styles'
import { NoSSR } from '../../components'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Contact = ({ children, ...props }) => <Wrapper {... props}>{children}</Wrapper>

Contact.Heading = ({ children, ...props }) => <Heading {...props}>{children}</Heading>
Contact.Line = ({ ...props }) => <Line {...props}/>
Contact.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>
Contact.InfoGroup = ({ children, ...props }) => <InfoGroup {...props}>{children}</InfoGroup>
Contact.InfoIcon = ({ ...props }) => <InfoIcon {...props}/>
Contact.InfoText = ({ children, ...props }) => <InfoText {...props}>{children}</InfoText>
Contact.Form = ({ children, ...props }) => <Form {...props}>{children}</Form>
Contact.FormFrame = ({ children, ...props }) => <FormFrame {...props}>{children}</FormFrame>
Contact.FormGroup = ({ children, ...props }) => <FormGroup {...props}>{children}</FormGroup>
Contact.FormInput = forwardRef(({ ...props }, ref) => <FormInput ref={ref} {...props}/>)
Contact.FormTextarea = forwardRef(({ ...props }, ref) => <FormTextarea ref={ref} {...props}/>)
Contact.FormIconLabel = ({ children, ...props }) => <FormIconLabel {...props}>{children}</FormIconLabel>
Contact.FormInputLabel = ({ children, ...props }) => <FormInputLabel {...props}>{children}</FormInputLabel>
Contact.FormTextareaLabel = ({ children, ...props }) => <FormTextareaLabel {...props}>{children}</FormTextareaLabel>
Contact.FormButtonGroup = ({ children, ...props }) => <FormButtonGroup {...props}>{children}</FormButtonGroup>
Contact.FormButton = ({ children, ...props }) => <FormButton {...props}>{children}</FormButton>
Contact.FormButtonTooltip = ({ ...props }) => <NoSSR><FormButtonTooltip {...props}/></NoSSR>
Contact.FormButtonLoader = ({ children, ...props }) => <FormButtonLoader {...props}>{children}</FormButtonLoader>
Contact.FormErrorMessage = ({ children, ...props }) => <FormErrorMessage {...props}>{children}</FormErrorMessage>
Contact.FormSubmitMessage = ({ children, ...props }) => <FormSubmitMessage {...props}>{children}</FormSubmitMessage>
Contact.FormSubmitMessageEmoji = ({ ...props }) => <FormSubmitMessageEmoji {...props}/>

Contact.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.Heading.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.Line.propTypes = {
    props: PropTypes.object,
}

Contact.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.InfoGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.InfoIcon.propTypes = {
    props: PropTypes.object,
}

Contact.InfoText.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.Form.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormFrame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormInput.propTypes = {
    props: PropTypes.object,
}

Contact.FormTextarea.propTypes = {
    props: PropTypes.object,
}

Contact.FormIconLabel.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormInputLabel.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormTextareaLabel.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormButton.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormButtonTooltip.propTypes = {
    props: PropTypes.object,
}

Contact.FormButtonLoader.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormSubmitMessage.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Contact.FormSubmitMessageEmoji.propTypes = {
    props: PropTypes.object,
}

export default Contact