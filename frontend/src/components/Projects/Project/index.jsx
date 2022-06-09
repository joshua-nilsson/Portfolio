import { Slide, Frame, Image, Group, Title, Box, Link } from './styles'
import PropTypes from 'prop-types'

const Project = ({ children, ...props }) => <Slide {... props}>{children}</Slide>

Project.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>
Project.Image = ({ ...props }) => <Image {...props}/>
Project.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>
Project.Title = ({ children, ...props }) => <Title {...props}>{children}</Title>
Project.Box = ({ children, ...props }) => <Box {...props}>{children}</Box>
Project.Link = ({ children, ...props }) => <Link {...props}>{children}</Link>

Project.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Project.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Project.Image.propTypes = {
    props: PropTypes.object,
}

Project.Group.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Project.Title.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Project.Box.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Project.Link.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Project