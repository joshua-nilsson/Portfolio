import { Wrapper, CircleGroup, Circle, Heading, Line, Frame, Group } from './styles'
import PropTypes from 'prop-types'

const Experiences = ({ children, ...props }) => <Wrapper {... props}>{children}</Wrapper>

Experiences.CircleGroup = ({ children, ...props }) => <CircleGroup {...props}>{children}</CircleGroup>
Experiences.Circle = ({ ...props }) => <Circle {...props}/>
Experiences.Heading = ({ children, ...props }) => <Heading {...props}>{children}</Heading>
Experiences.Line = ({ ...props }) => <Line {...props}/>
Experiences.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>
Experiences.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>

Experiences.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Experiences.CircleGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Experiences.Circle.propTypes = {
    props: PropTypes.object,
}

Experiences.Heading.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Experiences.Line.propTypes = {
    props: PropTypes.object,
}

Experiences.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Experiences.Group.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Experiences