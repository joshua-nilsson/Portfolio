import { Wrapper, ButtonGroup, Button, Frame } from './styles'
import PropTypes from 'prop-types'

const Skills = ({ children, ...props }) => <Wrapper {... props}>{children}</Wrapper>

Skills.ButtonGroup = ({ children, ...props }) => <ButtonGroup {...props}>{children}</ButtonGroup>
Skills.Button = ({ children, ...props }) => <Button {...props}>{children}</Button>
Skills.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>

Skills.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Skills.ButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Skills.Button.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Skills.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Skills