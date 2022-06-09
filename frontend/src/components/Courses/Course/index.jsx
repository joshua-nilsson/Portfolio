import { Card, Frame, Image, Bar, Group, Box } from './styles'
import PropTypes from 'prop-types'

const Course = ({ children, ...props }) => <Card {... props}>{children}</Card>

Course.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>
Course.Image = ({ ...props }) => <Image {...props}/>
Course.Bar = ({ ...props }) => <Bar {...props}/>
Course.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>
Course.Box = ({ children, ...props }) => <Box {...props}>{children}</Box>

Course.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Course.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Course.Image.propTypes = {
    props: PropTypes.object,
}

Course.Bar.propTypes = {
    props: PropTypes.object,
}

Course.Group.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Course.Box.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Course