import { Wrapper, CircleGroup, Circle, PreviewGroup, PreviewBox, PreviewButton, PreviewIcon, PreviewText, PreviewTooltip, Heading, Line, Frame, Group } from './styles'
import { NoSSR } from '../../../components'
import PropTypes from 'prop-types'

const FeaturedSkills = ({ children, ...props }) => <Wrapper {... props}>{children}</Wrapper>

FeaturedSkills.CircleGroup = ({ children, ...props }) => <CircleGroup {...props}>{children}</CircleGroup>
FeaturedSkills.Circle = ({ ...props }) => <Circle {...props}/>
FeaturedSkills.PreviewGroup = ({ children, ...props }) => <PreviewGroup {...props}>{children}</PreviewGroup>
FeaturedSkills.PreviewBox = ({ children, ...props }) => <PreviewBox {...props}>{children}</PreviewBox>
FeaturedSkills.PreviewButton = ({ children, ...props }) => <PreviewButton {...props}>{children}</PreviewButton>
FeaturedSkills.PreviewIcon = ({ ...props }) => <PreviewIcon {...props}/>
FeaturedSkills.PreviewText = ({ children, ...props }) => <PreviewText {...props}>{children}</PreviewText>
FeaturedSkills.PreviewTooltip = ({ ...props }) => <NoSSR><PreviewTooltip {...props}/></NoSSR>
FeaturedSkills.Heading = ({ children, ...props }) => <Heading {...props}>{children}</Heading>
FeaturedSkills.Line = ({ ...props }) => <Line {...props}/>
FeaturedSkills.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>
FeaturedSkills.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>

FeaturedSkills.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

FeaturedSkills.CircleGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

FeaturedSkills.Circle.propTypes = {
    props: PropTypes.object,
}

FeaturedSkills.PreviewGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

FeaturedSkills.PreviewBox.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

FeaturedSkills.PreviewButton.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

FeaturedSkills.PreviewIcon.propTypes = {
    props: PropTypes.object,
}

FeaturedSkills.PreviewText.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

FeaturedSkills.PreviewTooltip.propTypes = {
    props: PropTypes.object,
}

FeaturedSkills.Heading.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

FeaturedSkills.Line.propTypes = {
    props: PropTypes.object,
}

FeaturedSkills.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

FeaturedSkills.Group.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default FeaturedSkills