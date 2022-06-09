import { Card, Frame, Image, Group, Box } from './styles'
import PropTypes from 'prop-types'

const Experience = ({ children, ...props }) => <Card {... props}>{children}</Card>

Experience.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>
Experience.Image = ({ ...props }) => <Image {...props}/>
Experience.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>
Experience.Box = ({ children, ...props }) => <Box {...props}>{children}</Box>

Experience.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Experience.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Experience.Image.propTypes = {
    props: PropTypes.object,
}

Experience.Group.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Experience.Box.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Experience